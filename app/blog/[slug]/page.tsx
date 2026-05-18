import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import OptimizedImage from '../../components/OptimizedImage';
import { BLOG_POSTS, BlogPost } from '../../data/blogData';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }
    return {
        title: `${post.title} | Tarun Marimganti & Associates`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

/* ── Content Renderers ── */

const ContentBlock = ({ block, index }: { block: { type: string; text: string }; index: number }) => {
    const isHeading = block.type === 'h3';
    if (isHeading) {
        return (
            <h3 className="font-outfit font-bold text-[24px] md:text-[28px] text-brand-primary mb-4 mt-10 leading-tight">
                {block.text}
            </h3>
        );
    }
    return (
        <p className="font-inter text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-6">
            {block.text}
        </p>
    );
};

const DynamicTable = ({ tableData }: { tableData: any }) => {
    if (!tableData) return null;
    return (
        <div className="my-8 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-outfit font-bold text-[18px] text-brand-primary bg-slate-50 p-4 border-b border-slate-200 text-center">
                {tableData.table_title || tableData.section_title}
            </h4>
            <table className="w-full border-collapse min-w-[600px] text-left">
                <thead>
                    <tr>
                        {tableData.columns.map((col: string, idx: number) => (
                            <th key={idx} className="bg-surface-light-gray p-4 font-inter font-bold text-[14px] text-brand-primary border-b border-slate-200">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.rows.map((row: string[], rIdx: number) => (
                        <tr key={rIdx} className="hover:bg-slate-50 border-b border-slate-100 last:border-0 transition-colors">
                            {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-4 font-inter text-[14px] text-slate-700 align-top leading-relaxed">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const StructuredContent = ({ chapters, tables }: { chapters: any[]; tables?: any }) => {
    return (
        <div className="max-w-none">
            {chapters.map((chapter, index) => (
                <div key={index} className="mb-12">
                    {/* Chapter Heading */}
                    <h2 className="font-outfit font-bold text-[28px] md:text-[32px] text-brand-primary mb-6 mt-10 pb-2 border-b-2 border-brand-accent/20">
                        {chapter.heading_full || chapter.heading}
                    </h2>

                    {/* Subchapters */}
                    {chapter.subchapters && chapter.subchapters.map((sub: any, sIdx: number) => {
                        // Find matching table
                        const matchingTableKey = tables ? Object.keys(tables).find(key => {
                            const t = tables[key];
                            return t.chapter_no === `Chapter ${sub.subchapter_no}` || t.chapter_no === sub.subchapter_no || t.chapter_no === sub.subchapter_no.toString();
                        }) : null;
                        const tableData = matchingTableKey ? tables[matchingTableKey] : null;

                        return (
                            <div key={sIdx} className="mb-8">
                                <h3 className="font-outfit font-bold text-[22px] md:text-[24px] text-brand-primary mb-4">
                                    {sub.sub_heading_full || sub.sub_heading}
                                </h3>

                                {sub.image && (
                                    <div className="my-6 rounded-xl overflow-hidden shadow-md relative h-[300px] w-full">
                                        <OptimizedImage
                                            src={sub.image}
                                            alt={sub.sub_heading || ""}
                                            fill
                                            className="bg-slate-50"
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                )}

                                {sub.content && sub.content.map((block: any, pIdx: number) => {
                                    if (typeof block === 'string') {
                                        // Check for list-like strings
                                        const isListParams = block.match(/^([•\-\*]|\d+\.)\s/);
                                        if (isListParams) {
                                            return (
                                                <div key={pIdx} className="flex gap-3 mb-4 pl-4">
                                                    <span className="text-brand-accent font-bold mt-[6px]">•</span>
                                                    <p className="font-inter text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">
                                                        {block.replace(/^([•\-\*]|\d+\.)\s/, '')}
                                                    </p>
                                                </div>
                                            )
                                        }

                                        // Check for "Heading: Content" pattern
                                        const parts = block.split(/:(.+)/);
                                        if (parts.length > 1 && parts[0].length < 60 && !block.includes('.')) {
                                            return (
                                                <p key={pIdx} className="font-inter text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-4">
                                                    <span className="font-bold text-brand-primary">{parts[0]}:</span>{parts[1]}
                                                </p>
                                            );
                                        }

                                        return (
                                            <p key={pIdx} className="font-inter text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-4">
                                                {block}
                                            </p>
                                        );
                                    } else if (typeof block === 'object') {
                                        if (block.type === 'h4') {
                                            return (
                                                <h4 key={pIdx} className="font-outfit font-bold text-[18px] md:text-[20px] text-brand-primary mt-6 mb-3">
                                                    {block.text}
                                                </h4>
                                            );
                                        }
                                        if (block.type === 'list') {
                                            return (
                                                <ul key={pIdx} className="list-none space-y-3 mb-6 pl-4">
                                                    {block.items.map((item: string, i: number) => (
                                                        <li key={i} className="flex gap-3">
                                                            <span className="text-brand-accent font-bold mt-[6px]">•</span>
                                                            <span className="font-inter text-[16px] md:text-[18px] text-slate-700 leading-[1.8]">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )
                                        }
                                        return null;
                                    }
                                    return null;
                                })}
                                {tableData && <DynamicTable tableData={tableData} />}
                            </div>
                        );
                    })}

                    {/* Top level list or content in chapter directly */}
                    {chapter.content && chapter.content.map((block: any, pIdx: number) => (
                        <p key={pIdx} className="font-inter text-[16px] md:text-[18px] text-slate-700 leading-[1.8] mb-4">
                            {typeof block === 'string' ? block : block.text}
                        </p>
                    ))}

                    {/* Check for tables linked to chapter directly */}
                    {(() => {
                        if (tables) {
                            const chapterTableKey = Object.keys(tables).find(key => tables[key].chapter_no === chapter.chapter_no);
                            if (chapterTableKey) {
                                return <DynamicTable tableData={tables[chapterTableKey]} />
                            }
                        }
                        return null;
                    })()}

                </div>
            ))}
        </div>
    );
};


export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="w-full min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full min-h-[60vh] lg:min-h-[70vh] -mt-[106px] overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-brand-primary">
                    <OptimizedImage
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover opacity-40 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/90 via-brand-primary/70 to-brand-primary/90" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] lg:min-h-[70vh] px-[5%] text-center pt-[150px] pb-[100px]">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 mb-6 text-white/70 text-[14px] font-outfit">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <span>/</span>
                        <span className="text-white line-clamp-1 max-w-[200px] opacity-80">{post.title}</span>
                    </div>

                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[13px] font-bold text-brand-accent uppercase tracking-wider mb-6 border border-white/10">
                        {post.category}
                    </span>

                    <h1 className="font-outfit font-bold text-[clamp(28px,4vw,48px)] leading-[1.2] text-white max-w-[1000px] mb-6 drop-shadow-lg">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 text-white/80 font-inter text-[15px]">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>
                </div>

                {/* Wave Transition */}
                <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            <div className="max-w-[1000px] mx-auto px-[5%] py-[60px] flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="lg:w-3/4">
                    {/* Article Content */}
                    <div className="max-w-none">
                        {post.chapters ? (
                            <StructuredContent chapters={post.chapters} tables={post.tables} />
                        ) : (
                            post.contentBlocks && post.contentBlocks.map((block, index) => (
                                <ContentBlock key={index} block={block} index={index} />
                            ))
                        )}
                    </div>
                </div>

                {/* Sidebar / Author Bio */}
                <div className="lg:w-1/4">
                    <div className="sticky top-[120px]">
                        <div className="bg-slate-50 p-6 rounded-[20px] border border-slate-100">
                            <h3 className="font-outfit font-bold text-[18px] text-brand-primary mb-4">About the Author</h3>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-md mb-4 group relative">
                                    <OptimizedImage
                                        src={post.authorImage}
                                        alt={post.author}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="font-outfit font-bold text-[16px] text-brand-primary">{post.author}</h4>
                                <p className="font-inter text-[13px] text-slate-500 mt-1 mb-4">
                                    Author
                                </p>
                                <p className="font-inter text-[14px] text-slate-600 leading-relaxed">
                                    {post.authorBio}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-outfit font-bold text-[18px] text-brand-primary mb-4">Share this article</h3>
                            <div className="flex gap-2">
                                {['IN', 'TW', 'FB'].map((social) => (
                                    <button key={social} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-accent hover:text-white transition-colors shadow-sm">
                                        <span className="font-bold text-sm">{social}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

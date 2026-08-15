"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import OptimizedImage from '../components/OptimizedImage';
import { useSearchParams, useRouter } from 'next/navigation';
import { BLOG_POSTS, BlogPost } from '../data/blogData';

// Hero Image
const BlogHeroImage = "/Assets/Images/Vector 1.avif";

// Blog Hero Section
const BlogHero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[90vh] -mt-[106px] overflow-hidden bg-brand-primary">
            {/* Background */}
            <div className="absolute inset-0">
                <OptimizedImage
                    src={BlogHeroImage}
                    alt="Blog Hero"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/90 via-brand-primary/70 to-brand-primary/90" />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-brand-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[65vh] pt-[130px] sm:pt-[240px] pb-[90px] sm:pb-[160px] px-4 sm:px-[5%]">
                {/* Breadcrumb */}
                <div
                    className={`flex items-center gap-2 mb-4 sm:mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    <Link href="/" className="font-outfit text-[12px] sm:text-[14px] text-white/70 hover:text-white transition-colors">
                        Home
                    </Link>
                    <span className="text-white/50">/</span>
                    <span className="font-outfit text-[12px] sm:text-[14px] text-white">Blog</span>
                </div>

                {/* Title */}
                <h1
                    className={`font-outfit font-extrabold text-[28px] sm:text-[clamp(32px,5vw,64px)] leading-[1.15] sm:leading-[1.1] text-center text-white drop-shadow-lg transition-all duration-1000 delay-200 max-w-[900px] text-balance ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    Insights &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-hover">Updates</span>
                </h1>

                {/* Subtitle */}
                <p
                    className={`max-w-xs sm:max-w-[700px] mt-3 sm:mt-6 font-inter font-normal text-[13.5px] sm:text-[clamp(16px,1.4vw,20px)] leading-[1.6] text-center text-white/90 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    Stay informed with the latest trends, expert advice, and financial news to help your business grow.
                </p>
            </div>

            {/* Wave Transition */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
};

// BlogPostCard Component
const BlogPostCard = ({ post, index }: { post: BlogPost; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group bg-white rounded-[20px] overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col h-full cursor-pointer"
        >
            <Link href={`/blog/${post.slug}`} aria-label={`Read article: ${post.title}`} className="flex flex-col h-full">
                {/* Image */}
                <div className="relative h-[240px] overflow-hidden bg-slate-100">
                    <OptimizedImage
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[12px] font-bold text-brand-primary uppercase tracking-wider shadow-sm">
                            {post.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4 text-[13px] text-slate-500 font-inter">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-outfit font-bold text-[20px] text-brand-primary leading-[1.3] mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="font-inter text-[15px] text-slate-600 leading-[1.6] mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                    </p>

                    {/* Author & Footer */}
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                            <p className="text-[12px] text-slate-500 font-inter">Written by</p>
                            <p className="font-inter font-semibold text-[14px] text-brand-primary">{post.author}</p>
                        </div>
                        <span className="text-brand-accent font-semibold text-[14px] group-hover:underline flex items-center gap-1 font-outfit">
                            Read full article <span>→</span>
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default function BlogContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const authorFilter = searchParams.get('author');

    const [visibleCount, setVisibleCount] = useState(6); // Initial load count

    const filteredPosts = authorFilter
        ? BLOG_POSTS.filter(post => post.author === authorFilter)
        : BLOG_POSTS;

    const visiblePosts = filteredPosts.slice(0, visibleCount);
    const hasMore = visibleCount < filteredPosts.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    const handleViewAll = () => {
        router.push('/blog');
    };

    return (
        <div className="w-full min-h-screen bg-white pb-20">
            <BlogHero />

            <section className="py-[80px] px-[5%]">
                <div className="max-w-[1400px] mx-auto">
                    {/* Header */}
                    <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h2 className="font-outfit font-bold text-[32px] text-brand-primary">
                                {authorFilter ? `Articles by ${authorFilter}` : 'Latest Articles'}
                            </h2>
                            {authorFilter && (
                                <button
                                    onClick={handleViewAll}
                                    className="mt-2 text-brand-accent font-semibold hover:underline flex items-center gap-1 transition-colors font-outfit"
                                >
                                    ← View all articles
                                </button>
                            )}
                        </div>

                        {!authorFilter && (
                            <p className="text-slate-500 font-inter text-[16px]">
                                Explore our collection of expert insights.
                            </p>
                        )}
                    </div>

                    {/* Blog Grid */}
                    {visiblePosts.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <AnimatePresence>
                                    {visiblePosts.map((post, index) => (
                                        <BlogPostCard key={post.id} post={post} index={index} />
                                    ))}
                                </AnimatePresence>
                            </div>

                            {/* Load More Button */}
                            {hasMore && (
                                <div className="mt-12 flex justify-center">
                                    <button
                                        onClick={handleLoadMore}
                                        className="px-8 py-3 bg-surface-light-gray text-brand-primary font-outfit font-bold rounded-full hover:bg-slate-200 transition-colors border border-slate-200"
                                    >
                                        Load More Articles
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 bg-surface-light-gray rounded-[20px]">
                            <p className="text-slate-500 text-[18px] font-inter">No articles found for this author yet.</p>
                            <button
                                onClick={handleViewAll}
                                className="mt-4 px-6 py-2 bg-brand-accent text-white rounded-full hover:bg-brand-primary transition-colors font-outfit"
                            >
                                View all articles
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

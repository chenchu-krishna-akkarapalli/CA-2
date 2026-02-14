import { Metadata } from 'next';
import BlogContent from './BlogContent';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Blog - Insights & Updates | Tarun Marimganti & Associates',
    description: 'Stay updated with the latest in financial regulations, tax laws, and business strategies from Tarun Marimganti & Associates.',
};

export default function BlogPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <BlogContent />
        </Suspense>
    );
}

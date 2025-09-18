import { Suspense } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Button } from '@/components/ui/button';
import PostsList from '@/components/ui/posts/PostsList';
import PostsSkeleton from '@/components/ui/skeletons/PostsSkeleton';
import ErrorBoundary from '@/components/error/errorboundary'
//import styles from './latestPosts.module.css';

export default function LatestPosts() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between">
            <h2 className="text-4x1 font-bold mb-6">
                Latest Posts
            </h2>
            <Button>
                <PlusIcon className="size-6" /> Create Post
            </Button>
        </div>
        <ErrorBoundary messaage="Failed to load posts">
        <Suspense fallback={<PostsSkeleton />}>
            <PostsList />
        </Suspense>
        </ErrorBoundary>
    </main>
    );
}
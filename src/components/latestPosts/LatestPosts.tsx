import { Suspense } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import ErrorBoundary from '@/components/errors/ErrorBoundary';
import { Button } from '@/components/ui/button';
import PostsList from '@/components/ui/posts/PostsList';
import PostsSkeleton from '@/components/ui/skeletons/PostsSkeleton';
import styles from './latestPosts.module.css';

export default function LatestPosts() {
    return (
        <>
            <div className={styles.latest_posts_container}>
                <h2 className="text-4xl font-bold mb-6">
                    Latest Posts
                </h2>
                <Button className={styles.create_post_button}>
                    <PlusIcon className="size-6" /> Create Post
                </Button>
            </div>
            <ErrorBoundary message="Failed to load posts">
                <Suspense fallback={<PostsSkeleton />}>
                    <PostsList />
                </Suspense>
            </ErrorBoundary>
        </>
    );
}
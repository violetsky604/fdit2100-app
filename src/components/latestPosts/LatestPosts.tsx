import { PlusIcon } from '@heroicons/react/24/solid';
import { Button } from '@/components/ui/button';
import styles from './latestPosts.module.css';

export default function LatestPosts() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex justify-between">
                <h2 className="text-4xl font-bold mb-6">
                    Latest Posts
                </h2>
                <Button className={styles.create_post_button}>
                    <PlusIcon className="size-6" /> Create Post
                </Button>
            </div>
        </main>
    );
}
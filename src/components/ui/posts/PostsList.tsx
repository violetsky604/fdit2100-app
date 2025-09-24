import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchPosts } from '@/lib/api';
import styles from './postsList.module.css';

export default function PostsList() {
    const { data }  = useSuspenseQuery({ queryKey: ['posts'], queryFn: fetchPosts });

    return (
        <ul>
            {data.posts.map(post => (
                <li key={post.id} className="mb-4 p-4 border rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className={styles.postBody}>{post.body}</p>
                </li>
            ))}
        </ul>
    );
}
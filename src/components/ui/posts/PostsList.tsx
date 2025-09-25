import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchPosts } from '@/lib/api';
import Post from '@/components/ui/posts/Post';

export default function PostsList() {
    const { data }  = useSuspenseQuery({ queryKey: ['posts'], queryFn: fetchPosts });

    return (
        <ul>
            {data.posts.map((post, index) => (
                <Post key={post.id} post={post} isLast={index === data.posts.length - 1} />
            ))}
        </ul>
    );
}
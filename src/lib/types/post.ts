export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    }
    views: number;
    userId: number;

}

export interface PostResponse {
    posts: Post[];
    totel: number;
    skips: number;
    limit: number;

}
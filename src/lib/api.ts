import axious from 'axios';
import { type PostResponse } from './types/post';

export function fetchPosts(){
    return axious.get<PostResponse>('https://dummyjson.com/posts')
    .then(response => response.data);
}


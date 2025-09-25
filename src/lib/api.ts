import axios from 'axios';
import { type PostsResponse } from './types/post';
import { API_BASE_URL, POSTS_PER_PAGE } from '@/lib/constants';

export function fetchPosts(page: number) {
    return axios.get<PostsResponse>(`${API_BASE_URL}/posts?limit=${POSTS_PER_PAGE}&skip=${page * POSTS_PER_PAGE}`)
    .then(response => response.data);
}
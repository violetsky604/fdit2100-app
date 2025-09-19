import axios from 'axios';
import { type PostsResponse } from './types/post';
import { API_BASE_URL } from '@/lib/constants';

export function fetchPosts() {
    return axios.get<PostsResponse>(`${API_BASE_URL}/posts`)
    .then(response => response.data);
}
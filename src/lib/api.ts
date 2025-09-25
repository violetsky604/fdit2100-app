import axios from 'axios';
import { type PostResponse } from './types/post';
import { API_BASE_URL } from './constants';
import { POSTS_PER_PAGE } from './constants';

export function fetchPosts(page: number){
    return axios.get<PostResponse>(`${API_BASE_URL}/posts?limit=${POSTS_PER_PAGE}&skip=${page * POSTS_PER_PAGE  }`)
    .then(response => response.data);
}


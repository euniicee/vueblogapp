// src/api/posts.js
import axios from 'axios';
const API_BASE_URL = 'https://api.oluwasetemi.dev';

export const postsAPI = {
  async getPosts() {
    const { data } = await axios.get(`${API_BASE_URL}/posts`);
    return data;
  },
  async getPost(id) {
    const { data } = await axios.get(`${API_BASE_URL}/posts/${id}`);
    return data;
  }
};
import axios from 'axios';

const url = "http://localhost:5000";

export const fetchPosts = () => {
    return axios.get(`${url}/posts`)
}

export const createPost = (newPost) => {
    return axios.post(`${url}/posts`, newPost);
}

export const updatePost = (id, updatedPost) => {
    return axios.patch(`${url}/posts/${id}`, updatedPost);
}

export const deletePost = (id) => {
    return axios.delete(`${url}/posts/${id}`)
}

export const likePost = (id) => {
    return axios.patch(`${url}/posts/${id}/likePost`)
}
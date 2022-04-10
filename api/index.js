import axios from "axios";
import { api } from "../config";

export const blogsApi = axios.create({
    baseURL: api.blogsURL,
    withCredentials: true,
    headers: {
        "X-API-Key": process.env.BLOGS_API_KEY
    }
});

export const postsApi = axios.create({
    baseURL: api.postsURL,
    withCredentials: true,
    headers: {
        "X-API-Key": process.env.POSTS_API_KEY
    }
});
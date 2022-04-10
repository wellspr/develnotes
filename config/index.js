export const port = 3210;

const origin = `http://localhost:${port}`;

export const corsConfig = {
    origin: origin,
    allowedHeaders: [
        "Content-Type",
        "X-API-Key"
    ],
    credentials: true,
};

// Default name
export const appBrandName = () => {
    return "Develnotes"
};

export const appDescription = () => {
    return "Um blog sobre desenvolvimento web."
};

// Define the blog ID 
export const blogID = "69d85c0abfd7ad703e069f8399c13d0e";
// export const blogID = "f6ae0fc5e83d87b87c13a393062267bc";

export const githubLink = () => {
    return "https://github.com/wellspr/develnotes-blog";
};

export const postsEndPoint = "https://ssr-blog-website-posts-api.deta.dev";
export const blogsEndPoint = "https://ssr-blog-website-blogs.deta.dev";

export const api = {
    postsURL: `${postsEndPoint}/posts`,
    blogsURL: `${blogsEndPoint}/blogs`,
};
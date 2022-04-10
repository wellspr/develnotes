// Default name
export const appBrandName = () => {
    return "Develnotes"
};

export const appDescription = () => {
    return "Um blog sobre desenvolvimento web."
};

// Define the blog ID 
export const blogID = process.env.BLOG_ID;

export const githubLink = () => {
    return "https://github.com/wellspr/develnotes";
};

export const postsEndPoint = "https://ssr-blog-website-posts-api.deta.dev";
export const blogsEndPoint = "https://ssr-blog-website-blogs.deta.dev";

export const api = {
    postsURL: `${postsEndPoint}/posts`,
    blogsURL: `${blogsEndPoint}/blogs`,
};
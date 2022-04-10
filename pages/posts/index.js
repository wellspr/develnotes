import { blogsApi, postsApi } from "../../api";
import PageTemplate from "../../components/PageTemplate";
import { blogID } from "../../config";
import PostsList from "../../components/PostsList";

const Posts = (props) => {

    const head = { title: "Posts" }

    const { posts } = props;

    const renderPostsPage = () => {
        return <>
            <h1>Posts</h1>

            <PostsList posts={posts} />
        </>
    };

    return <PageTemplate head={head} >
        { renderPostsPage() }
    </PageTemplate>;
}

export default Posts;

export const getServerSideProps = async () => {

    const blog = await blogsApi.get(`/blog/${blogID}`);

    const userID = blog.data.items[0].userID;

    const request = await postsApi.get(`/all/${userID}`);

    const posts = request.data.response;

    return {
        props: {
            posts
        }
    };
};
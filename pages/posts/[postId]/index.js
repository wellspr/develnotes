import PageTemplate from "../../../components/PageTemplate";
import { postsApi } from "../../../api";
import PostFrame from "../../../components/PostFrame";

const Post = (props) => {
    const head = {
        title: props.post.title
    };

    const { post } = props;

    const renderPostPage = () => {
        return <PostFrame post={post} />
    };

    return <PageTemplate head={head} >
        { renderPostPage() }
    </PageTemplate>;
}

export default Post;

export const getServerSideProps = async (context) => {
    const request = await postsApi.get(`/post/${context.params.postId}`);
    const post = request.data.response;

    return {
        props: {
            post
        }
    };
};
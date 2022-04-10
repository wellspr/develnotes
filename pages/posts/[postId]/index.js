import PageTemplate from "../../../components/PageTemplate";
import { useRouter } from "next/router";
import { postsApi } from "../../../api";
import PostFrame from "../../../components/PostFrame";

const Post = (props) => {

    const router = useRouter();
    const head = {
        title: router.query.postId
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

    console.log("CONTEXT: ", context);

    const request = await postsApi.get(`/post/${context.params.postId}`);
    const post = request.data.response;

    return {
        props: {
            post
        }
    };
};
import Link from "next/link";
import { formatDate, formatTime } from "../../utils";
import { Button } from "react-bootstrap";
import Separator from "../Separator";

const PostsList = (props) => {

    const { 
        posts, 
        limit,
        centered=false
    } = props;

    const renderShowMoreLink = () => {
        if (!limit) return null;
        if (Object.values(posts).length > 0) {
            return <div 
                className={`d-flex${centered?" justify-content-center":" justify-content-end"}`}
                >
                <Button href="/posts" variant="link">More...</Button>
            </div>;
        }
    };

    const renderPostsList = () => Object.values(posts).map((post, index) => {

        if (index > limit - 1) return null;

        const format = (timestamp) => {
            return <span className="me-1">
                { formatDate(timestamp) }
                <span className="ms-1 me-1">at</span>
                { formatTime(timestamp) }
                <span>h</span>
            </span>;
        }

        const renderDateCreated = () => {
            if (!post.createdAt) return null;
            return format(post.createdAt);
        }

        const renderDateModified = () => {
            if (!post.lastModified) return null;
            return format(post.lastModified);
        }

        const renderTags = () => {
            const tags = post.tags;
            const renderTagList = tags => {
                return tags.map((tag, index) => {
                    return <span 
                        className="tag badge rounded-pill bg-secondary my-1 mx-1" 
                        key={index}
                        >
                        { tag }
                    </span>
                });
            }
            if (!tags) return null;
            return <span className="tags"> { renderTagList(tags) } </span>;
        };

        const renderDates = () => (
            <div className={`d-flex${centered?" justify-content-center":""}`} style={{ fontSize: "0.6rem" }}>
                <div>
                    <span className="fw-normal">Created: </span> 
                    <span className="fw-light">
                        { renderDateCreated() }
                    </span>
                </div>
                <div>
                    <span className="fw-normal">
                        { post.lastModified && "Last modified: "}
                    </span> 
                    <span className="fw-light">
                        { renderDateModified() }
                    </span>
                </div>
            </div>
        );
     
        return <div key={post.key}>
            <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column me-auto w-100">
                    <div className="fw-bold">
                        <Link href={`/posts/${post.key}`} passHref >
                            <Button
                                variant="link"
                                className="fw-bold fs-4 text-decoration-none text-dark ps-0"
                                >
                                {post.title}
                            </Button>
                        </Link>
                    </div>

                    <div>{ renderTags() }</div>

                    <div>{ renderDates() }</div>
                </div>
            </div>

            <Separator />

        </div>;
    
    });

    return <div className={`${centered?"m-auto w-75":"w-100"}`}>
        { renderPostsList() }
        { renderShowMoreLink() }
    </div>
};

export default PostsList;
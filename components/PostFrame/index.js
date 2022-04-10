// React
import React, { useCallback, useEffect, useState } from "react";

// Utils for date formatting
import { formatDate, formatTime } from "../../utils";
import Spinner from "../Spinner";

import styles from "./Post.module.css";

console.log(styles);

const PostFrame = (props) => {

    const {post} = props;

    const [content, setContent] = useState("");

    const [hasPostData, setHasPostData] = useState(false);

    const contentRef = useCallback(node => {
        if (node !== null) node.innerHTML = content;
    }, [content]);

    useEffect(() => {
        if (post.content) setContent(post.content.html);
    }, [post.content]);

    useEffect(() => {
        const postObjectArray = Object.values(post);
        if (postObjectArray.length > 0) setHasPostData(true) ;
    }, [post]);

    const format = (timestamp) => {
        return (
            <span className="me-1">
                { formatDate(timestamp) }
                <span className="ms-1 me-1">at</span>
                { formatTime(timestamp) }
                <span>h</span>
            </span>
        );
    };

    const renderDateCreated = () => {
        if (!post.createdAt) return null;
        return format(post.createdAt);
    };

    const renderDateModified = () => {
        if (!post.lastModified) return null;
        return format(post.lastModified);
    };

    const renderTags = () => {
        const tags = post.tags;
        const renderTagList = tags => {
            return tags.map((tag, index) => {
                return <span 
                    className="tag badge rounded-pill bg-secondary me-1" 
                    key={index}
                    >
                    { tag }
                </span>
            });
        };
        if (!tags) return null;
        return <span className="tags"> { renderTagList(tags) } </span>;
    };

    const renderPost = () => <>
        <h2>{post.title}</h2>

        <div className="d-flex" style={{ fontSize: "0.6rem" }}>
            <div className="">
                <span className="fw-normal">Created: </span> 
                <span className="fw-light">
                    { renderDateCreated() }
                </span>
            </div>
            <div className="">
                <span className="fw-normal">
                    { post.lastModified && "Last modified: "}
                </span> 
                <span className="fw-light">
                    { renderDateModified() }
                </span>
            </div>
        </div>

        <div>{ renderTags() }</div>
        
        <hr />
        
        <div ref={contentRef} className={ styles["post-content"] } />
    </>;

    if (!hasPostData) return <Spinner />;

    return renderPost();
};

export default PostFrame;
import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubLink = (props) => {
    return (
        <div>
            <a href={ props.link }>
                <FaGithub color="black" />
            </a>
        </div>
    );
};

export default GithubLink;
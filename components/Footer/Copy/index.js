import React from "react";

const Copy = ({ appBrandName }) => {

    const date = new Date();
    const year = date.getFullYear();

    return <span 
        className="opacity-75"
        >
        &copy; { year } { appBrandName }.com.br
    </span> 
};

export default Copy;
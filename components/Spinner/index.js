import React from "react";

const Spinner = ({ inline=false, children }) => {

    if (inline) {
        return (
            <span className="d-flex justify-content-center align-items-center">
                <div className="spinner-grow spinner-grow-sm m-2" role="status" aria-hidden="true">
                    <span className="visually-hidden">Loading...</span>
                </div>
                { children }
            </span>
        );    
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center m-auto flex-grow-1">
            <div className="spinner-grow" role="status" aria-hidden="true">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;
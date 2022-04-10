import React from "react";

const Separator = (props) => {

    const { 
        backgroundColor="white",
        height="40px",
        ruleHeight="2px",
        margin=0
    } = props;

    const width = () => {
        if (margin === 0) {
            return "100%"
        }
        else {
            return `calc(100% - 2 * ${margin})`
        }
    }

    return (
        <div 
            style={{ position: "relative", height }}
            className="d-flex flex-column align-items-center justify-content-center mt-2"
            >
            <hr style={{ 
                height: ruleHeight,
                width: width() 
            }}                 
            />
            <span 
                style={{ 
                    position: "absolute", 
                    backgroundColor
                }} 
                className="px-2"
                >
                { props.children || props.text }
            </span>
        </div>
    );
};

export default Separator;
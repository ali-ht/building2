import React from "react";

const SmaTaskPage = () => {
    const containerStyle = {
        display: "grid",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
    };

    const styledBox = {
        width: "calc(100% - 10%)",
        height: "calc(100% - 10%)", 
        backgroundColor: "#fff",
        borderRadius: "20px",
    };

    return (
        <div style={containerStyle}>
            <div style={styledBox}></div>
        </div>
    );
}

export default SmaTaskPage;

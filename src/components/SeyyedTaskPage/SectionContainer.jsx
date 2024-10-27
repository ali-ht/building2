import React from "react";
import { Button } from "@mui/material";

// Reusable Section Container Component
const SectionContainer = ({ title, buttonLabel, buttonIcon, children }) => {
    return (
        <div>
            <div style={styles.sectionBar}>
                <h4>{title}</h4>
                <Button variant="text" color="secondary" style={{ marginRight: "10px" }} startIcon={buttonIcon}>
                    {buttonLabel}
                </Button>
            </div>
            {children}
        </div>
    )
};

const styles = {
    sectionBar: {
        backgroundColor: "#FEEFEA",
        height: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
        margin: "10px 0",
    }
}

export default SectionContainer;
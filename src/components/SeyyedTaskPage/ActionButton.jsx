import React from "react";
import { Button } from "@mui/material";

// Action Button Component
const ActionButton = () => {
    return (
        <div style={styles.actionButtonContainer}>
            <Button variant="contained" style={{ fontFamily: "IRANYekanWeb", width: "40%", height: "2.5rem", padding: "0.5rem", margin: "0.5rem", borderRadius: "0.6rem", backgroundColor: "#F15F2B" }}>انجام کار</Button>
        </div>
    )
};

const styles = {
    actionButtonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
    }
};

export default ActionButton;

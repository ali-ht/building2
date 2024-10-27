import React from "react";
import { Button } from "@mui/material";

// Action Button Component
const ActionButton = () => {
    return (
        <div style={styles.actionButtonContainer}>
            <Button variant="contained" color="warning" fullWidth>انجام کار</Button>
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

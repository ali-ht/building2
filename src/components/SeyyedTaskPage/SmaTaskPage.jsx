import React from "react";
import { Button } from "@mui/material";
import SmaTaskTable from "./SmaTaskTable";

const SmaTaskPage = () => {
    const pageStyle = {
        display: "grid",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
    };

    const containerStyle = {
        display: "grid",
        gridTemplateRows: "1fr auto 2fr auto",
        gap: "10px",
        width: "calc(100% - 10%)",
        maxWidth: "800px",
        height: "calc(100% - 10%)",
        maxHeight: "600px",
        backgroundColor: "#fff",
        borderRadius: "20px",
    };

    const grayBoxStyle = {
        backgroundColor: "#ccc",
        width: "100%",
        height: "100%",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
    };

    const titleBarStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
    };

    const tableStyle = {
        height: "100%",
        overflowY: "auto",
        margin: "0 10px",
        padding: "5px",
        borderRadius: "1rem",
        border: "solid 1px gray"
    };

    const customButtonStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
    };

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                <div style={grayBoxStyle}></div>

                <div style={titleBarStyle}>
                    <h3>عنوان</h3>
                    <div>
                        <Button variant="outlined" color="secondary" style={{ marginRight: "10px" }}>ویرایش</Button>
                        <Button variant="contained" color="error">حذف</Button>
                    </div>
                </div>

                <div style={tableStyle}>
                    <SmaTaskTable />
                </div>

                <div style={customButtonStyle}>
                    <Button variant="contained" color="warning" fullWidth>
                        انجام کار
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SmaTaskPage;

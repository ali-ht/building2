import React from "react";
import { Button } from "@mui/material";
import SmaTaskTable from "./SmaTaskTable";
import MemberSection from "./MemberSection";
import ReportsSection from "./ReportsSection";
import ActionButton from "./ActionButton";

// Main Page Component
const SmaTaskPage = () => {
    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <GrayBox />
                <TitleBar title="عنوان" />
                <DataContainer />
                <ActionButton />
            </div>
        </div>
    );
}

// Gray Box Component
const GrayBox = () => (
    <div style={styles.grayBox}></div>
);

// Title Bar Component
const TitleBar = ({ title }) => (
    <div style={styles.titleBar}>
        <h3>{title}</h3>
        <div>
            <Button variant="outlined" color="secondary" style={{ marginRight: "10px", fontFamily: "IRANYekanWeb" }}>ویرایش</Button>
            <Button variant="contained" color="error" style={{ fontFamily: "IRANYekanWeb" }}>حذف</Button>
        </div>
    </div>
);

// Data Container Component
const DataContainer = () => (
    <div style={styles.dataContainer}>
        <div style={styles.tableContainer}>
            <SmaTaskTable />
        </div>
        <MemberSection />
        <ReportsSection />
    </div>
);

// Styles
const styles = {
    page: {
        display: "grid",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
    },
    container: {
        display: "grid",
        gridTemplateRows: "1fr auto 2fr auto",
        gap: "10px",
        width: "calc(100% - 10%)",
        maxWidth: "800px",
        height: "calc(100% - 10%)",
        maxHeight: "600px",
        backgroundColor: "#fff",
        borderRadius: "20px",
    },
    grayBox: {
        backgroundColor: "#ccc",
        width: "100%",
        height: "100%",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
    },
    titleBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
    },
    dataContainer: {
        overflowY: "auto",
    },
    tableContainer: {
        height: "100%",
        overflowY: "auto",
        margin: "0 10px",
        padding: "5px",
        borderRadius: "1rem",
        border: "solid 1px gray",
    },
};

export default SmaTaskPage;
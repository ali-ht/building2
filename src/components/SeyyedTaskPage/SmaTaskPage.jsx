import React from "react";
import { Button } from "@mui/material";
import SmaTaskTable from "./SmaTaskTable";
import DescriptionIcon from '@mui/icons-material/Description';
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';

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
    const memberBarStyle = {
        backgroundColor: "#FEEFEA",
        height: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
        margin: "10px 0",
    };

    const tableStyle = {
        height: "100%",
        overflowY: "auto",
        margin: "0 10px",
        padding: "5px",
        borderRadius: "1rem",
        border: "solid 1px gray"
    };

    const dataContainerStyle = {
        overflowY: "auto"
    };

    const memberContainer = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        columnGap: "1rem",
        margin: "1rem",
    };
    
    const reportsContainer = {
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        columnGap: "1rem",
        margin: "1rem",
    }

    const memberItem = {
        backgroundColor: "#F3F3F3",
        height: "3rem",
        textAlign: "center",
    };
    
    const reportItem = {
        backgroundColor: "#F3F3F3",
        height: "4rem",
        textAlign: "center",
    }

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
                <div style={dataContainerStyle}>
                    <div style={tableStyle}>
                        <SmaTaskTable />
                    </div>
                    <div>
                        <div style={memberBarStyle}>
                            <h4>مسئولین</h4>
                            <div>
                                <Button variant="text" color="secondary" style={{ marginRight: "10px" }} startIcon={<CreateIcon />}>ویرایش مسئولین</Button>
                            </div>
                        </div>
                        <div style={memberContainer}>
                            <div style={memberItem}>تست</div>
                        </div>
                    </div>
                    <div>
                        <div style={memberBarStyle}>
                            <h4>گزارش‌ها</h4>
                            <div>
                                <Button variant="text" color="secondary" style={{ marginRight: "10px" }} startIcon={<AddIcon />}>اضافه کردن گزارش</Button>
                            </div>
                        </div>
                        <div style={reportsContainer}>
                            <div style={reportItem}>تست</div>
                        </div>
                    </div>
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

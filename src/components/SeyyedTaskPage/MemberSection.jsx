import React from "react";
import CreateIcon from '@mui/icons-material/Create';
import SectionContainer from "./SectionContainer";

// Member Section Component
const MemberSection = () => {
    return (
        <SectionContainer title="مسئولین" buttonLabel="ویرایش مسئولین" buttonIcon={<CreateIcon />}>
            <div style={styles.memberContainer}>
                <div style={styles.memberItem}>تست</div>
            </div>
        </SectionContainer>
    )

};

const styles = {
    memberContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        columnGap: "1rem",
        margin: "1rem",
    },
    memberItem: {
        backgroundColor: "#F3F3F3",
        height: "3rem",
        textAlign: "center",
    }
}

export default MemberSection;
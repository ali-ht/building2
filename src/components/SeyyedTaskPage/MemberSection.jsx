import React, { useState } from "react";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, IconButton } from '@mui/material';
import SectionContainer from "./SectionContainer";
import AddIcon from '@mui/icons-material/Add';

const allMembers = [
    "مهدی انصاری", "میثم محمدی", "سیدمهدی حسینی", "ابراهیم ذالی", "رضا امراللهی", "محمد زحمتکش", "علی احمدی"
];

const MemberSection = () => {
    const [members, setMembers] = useState(["مهدی انصاری", "میثم محمدی"]);
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredMembers, setFilteredMembers] = useState(allMembers);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        setFilteredMembers(allMembers.filter(member => member.includes(value)));
    };

    const handleAddMember = (name) => {
        if (!members.includes(name)) {
            setMembers([...members, name]);
        }
    };

    const handleDeleteMember = (name) => {
        setMembers(members.filter(member => member !== name));
    };

    return (
        <SectionContainer title="مسئولین" buttonLabel="ویرایش مسئولین" buttonIcon={<CreateIcon />} onButtonClick={handleOpen}>
            <div style={styles.memberContainer}>
                {members.map((member, index) => (
                    <div key={index} style={styles.memberItem}>{member}</div>
                ))}
            </div>

            {/* Dialog for editing members */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ fontFamily: "IRANYekanWeb" }}>مدیریت اعضا</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        placeholder="جستجوی نام کاربری"
                        variant="outlined"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{ marginBottom: "1rem" }}
                    />
                    <div>
                        {filteredMembers
                            .filter(member => !members.includes(member))
                            .map((member, index) => (
                                <div key={index} style={styles.memberListItem}>
                                    <span>{member}</span>
                                    <IconButton
                                        onClick={() => handleAddMember(member)}
                                        sx={{ color: "#F15F2B" }}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </div>
                            ))
                        }
                    </div>

                    <div style={{ marginTop: "1rem", fontWeight: "bold" }}>مسئولین فعلی</div>
                    {members.map((member, index) => (
                        <div key={index} style={styles.memberListItem}>
                            <span>{member}</span>
                            <IconButton onClick={() => handleDeleteMember(member)}
                                sx={{ color: "#F15F2B" }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{
                        color: "#F15F2B", fontFamily: "IRANYekanWeb"
                    }}>بستن</Button>
                </DialogActions>
            </Dialog>
        </SectionContainer>
    );
};

// Styles
const styles = {
    memberContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        columnGap: "0.5rem",
        margin: "1rem",
    },
    memberItem: {
        backgroundColor: "#F3F3F3",
        height: "3rem",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
    },
    memberListItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F3F3F3",
        padding: "0.5rem 1rem",
        margin: "0.5rem 0",
        borderRadius: "0.6rem",
    }
};

export default MemberSection;

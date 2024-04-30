import React from "react";
import { AppBar, Typography, Toolbar, Tabs,  Tab, colors } from '@mui/material'
import BookLogo from '../assets/bookLogo.jpg'
import { useState } from "react";
import { NavLink } from 'react-router-dom'
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';

const Header = () => {

    const [value, setValue] = useState(0)

    return (
        <AppBar sx={{ backgroundColor: "#232f3d" }} position='sticky' >
            <Toolbar>
                <NavLink to={"/"}>
                    <Typography>
                        <img src={BookLogo} style={{height:50, borderRadius:50}} alt="Book store" />
                    </Typography>
                </NavLink>
                <Tabs
                    value={value}
                    indicatorColor="none"
                    textColor="white"
                    // onChange={(e, val) => setValue(val)}
                    sx={{ marginLeft: "auto" }}
                >
                    <Tab LinkComponent={NavLink} to="/add" label="Add book" />
                    <Tab LinkComponent={NavLink} to="/books" label="Books" />
                    <Tab LinkComponent={NavLink} to="/about" label="About Us" />

                </Tabs>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
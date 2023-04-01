import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from '@mui/material/IconButton';
// import { Badge, Button } from "@mui/material";
// import { ShoppingCart } from "@mui/icons-material";
// import { useStateValue } from "../StateProvider";
// import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
// import { actionTypes } from "../reducer";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from '../assets/logoDark.png'

function appBarLabel(label) {
    return (
        <Toolbar>
            <img
                src={logo}
                alt='Logo JonTmarz'
                height='50px'
            />
            <Link to={'/'}>Home</Link>
        </Toolbar>
    );
 }

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

export default function NavBar() {
    // const history = useHistory()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position="static" color="primary">
                    {appBarLabel('default')}
                    </AppBar>
                </ThemeProvider>
            </Stack>
            
        </Box>
  );
}

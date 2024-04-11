import React from "react";
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header = () => {
    const navigate = useNavigate();

    const handleButtonClick = (pageURL) => {
        navigate(pageURL);
    };

    const menuItems = [
        { menuTitle: "Registracija", pageURL: "/register" },
        { menuTitle: "Profile", pageURL: "/profile" },
        { menuTitle: "Kontakti", pageURL: "/contacts" },
        { menuTitle: "Iziet", pageURL: "/logout" }
    ];

    const onLogout = () => {
        window.localStorage.removeItem('auth');
        navigate('/');
    };

    const openCart = () => {
        navigate('/cart');
    };

    return (
        <AppBar position="static" sx={{ bgcolor: "green" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/');
                        }}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        }}
                    >
                        Veikals
                    </Typography>
                    {menuItems.map((menuItem, index) => (
                        <Button
                            key={index}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            onClick={() => menuItem.pageURL === "/logout" ? onLogout() : handleButtonClick(menuItem.pageURL)}
                        >
                            {menuItem.menuTitle}
                        </Button>
                    ))}
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="shopping cart"
                        onClick={openCart}
                    >
                        <AddShoppingCartIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
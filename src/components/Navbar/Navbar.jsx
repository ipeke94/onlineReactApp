import React from 'react';
import { AppBar, Badge, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from "../../assets/download.png";
import useStyles from "../../styles/stylesNavbar";

const Navbar = () => {
    const styles = useStyles();
    return (
        <>
            <AppBar position="fixed" className={styles.appBar} color="inherit">
                <Toolbar>
                    <Typography className={styles.title} color="inherit" variant="h6">
                        <img className={styles.image} src={logo} alt="Commmerce.js" height="25px" />
                        Commerce
                    </Typography>
                    <div className={styles.grow} />
                    <div className={styles.button}>
                        <IconButton aria-label="cart items" color="inherit">
                            <Badge badgeContent={3} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
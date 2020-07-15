import React, { useState } from 'react';
import {Grid,Link } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import GoogleFontLoader from 'react-google-font-loader';
import Typography from '@material-ui/core/Typography';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {

    let theme = createMuiTheme({
        typography: {
            fontFamily: "DM Serif Display",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Work Sans',
                        weights: [0, 100, 0, 200, 0, 300, 0, 400, 0, 500, 0, 531, 0, 600, 0, 700, 0, 800, 1, 531],
                    },
                    {
                        font: 'DM Serif Display',
                        weights: [400],
                    }
                ]}
            />
            <Grid container alignItems="center" justify="center" direction="row" style={{ padding: "20px" }}>
                <Typography variant="subtitle1"  >Made with <FontAwesomeIcon icon={faHeart} style={{ color: "#c30e5c", marginRight: "5px", marginLeft: "5px" }} /> , <FontAwesomeIcon icon={faReact} style={{ color: "#61DBFB", marginRight: "5px", marginLeft: "5px" }} /> & <FontAwesomeIcon icon={faPython} style={{ color: "#61DBFB", marginRight: "5px", marginLeft: "5px" }} /> <Link href="http://tanmoysg.com" target="_blank" color="inherit" style={{ color: "#237fff" }}>Tanmoy Sen Gupta</Link>
                </Typography>
            </Grid>
        </ThemeProvider >
    );
}

export default Footer;

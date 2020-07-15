import React, { useState } from 'react';
import { Container, Tooltip, Grid, Button, Link, Hidden, FormControlLabel, Checkbox } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import GoogleFontLoader from 'react-google-font-loader';
import Typography from '@material-ui/core/Typography';
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Encryption from './encryption.component';
import Decryption from './decryption.component';
import KeyGen from './keygeneration.component';

function Landing() {
    const [keyStatus, setKeyStatus] = useState(true);
    let keyDialog;

    if (keyStatus) {
        keyDialog = <KeyGen />;
    }

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
                        font: 'Montserrat',
                        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
                    },
                    {
                        font: 'Raleway',
                        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
                    },
                    {
                        font: 'Work Sans',
                        weights: [0, 100, 0, 200, 0, 300, 0, 400, 0, 500, 0, 531, 0, 600, 0, 700, 0, 800, 1, 531],
                    },
                    {
                        font: 'Plaster',
                        weights: [400],
                    },
                    {
                        font: 'DM Serif Display',
                        weights: [400],
                    }
                ]}
            />
            <Container maxWidth="false">
                <Grid container direction="row" alignItems="center" style={{ height: "10vh" }} >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="h5" style={{ float: "left", fontWeight: "bold" }}>Mycroft.</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" style={{ height: "90vh" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography variant="h2" style={{ color: "#237fff" }}>Mycroft.</Typography>
                        <Typography variant="h4">A secure Encryption service for all your sensitive data.</Typography>
                        <Grid container direction="row" alignItems="center">
                            <Link underline="none" href="" ><Button style={{ fontSize: "15px", marginRight: "15px", backgroundColor: "#237fff", color: "white", marginTop: "10px", marginBottom: "5px", fontFamily: "Work Sans" }}> Get started </Button></Link>
                            <Link underline="always" href="" style={{ fontSize: "15px", color: "#237fff", fontFamily: "Work Sans" }}> How it works? </Link>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <img src={require("../assets/Safe-bro.png")} style={{ height: "100%", width: "100%" }} />
                        </Grid>
                    </Hidden>
                </Grid>
                <Grid container direction="row" alignItems="center" style={{ height: "100vh" }}>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Typography variant="h4"><FontAwesomeIcon icon={faShieldAlt} style={{ color: "#237fff" }} variant="h2" /> Mycroft RSA </Typography>
                            <FormControlLabel control={
                                <Checkbox style={{ color: "#237fff" }} onClick={e => setKeyStatus(!keyStatus)} />
                            } label="Use Existing Key" />
                            {keyDialog}
                            <Grid container style={{marginTop: "15px"}}>
                                <Typography variant="subtitle1">Learn More <Link href="/" underline="hover" style={{color: "#237fff"}} >about RSA.</Link> </Typography> 
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} >
                            <Router spacing={3}>
                                <Route path="/" exact component={Encryption} />
                                <Route path="/" exact component={Decryption} />
                            </Router>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider >
    );
}

export default Landing;

import React, { useState } from 'react';
import { Tooltip, Grid, Paper, Button, TextField, FormControl } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Encryption(props) {

    const [key, setKey] = useState(0);
    const [plaintext, setPlaintext] = useState('');
    const [ciphertext, setCiphertext] = useState('');

    const handlePlaintext = (e) => {
        console.log(plaintext);
        fetch("/encrypt", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content_type": "application/json",
            },
            body: JSON.stringify({ "plaintext": plaintext, "key": key })
        }).then(response => {
            return response.json()
        }).then(json => {
            setCiphertext(json.ciphertext)
        })
        console.log("Ciphertext: ", ciphertext);
    };


    return (
        <div>
            <Paper spacing={2} style={{ padding: "25px", backgroundColor: "#fff1e9", borderRadius: "10px" }}>
                <Typography variant="h4">Encryption</Typography>
                <Grid container direction="row" spacing={3} style={{ marginTop: "5px" }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                        <form onSubmit={handlePlaintext} >
                            <FormControl fullWidth variant="outlined" style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}>
                                <TextField
                                    id="Key"
                                    variant="outlined"
                                    label="Encryption Key"
                                    onChange={e => setKey(e.target.value)}
                                />
                            </FormControl>
                            <FormControl fullWidth variant="outlined" style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}>
                                <TextField
                                    id="plaintext"
                                    value={plaintext}
                                    variant="outlined"
                                    label="Message"
                                    onChange={e => setPlaintext(e.target.value)}
                                />
                            </FormControl>
                            <Button variant="outlined" style={{ float: "right" ,fontFamily: "Work Sans"}} preventDefault onClick={handlePlaintext} > <FontAwesomeIcon icon={faLock} style={{ marginRight: "5px"}} />Encrypt</Button>
                        </form>
                    </Grid>
                </Grid>
                <FormControl fullWidth variant="outlined" style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}>
                    <TextField
                        id="ciphertext"
                        label="Encrypted Message"
                        variant="outlined"
                        rows={5}
                        value={ciphertext}
                    />
                </FormControl>
            </Paper>
        </div >
    );
}

export default Encryption;

import React, { useState } from 'react';
import { Tooltip, Grid, Paper, Button, TextField, FormControl } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Decryption(props) {
    const [key, setKey] = useState(0);
    const [plaintext, setPlaintext] = useState('');
    const [ciphertext, setCiphertext] = useState('');

    const handleCiphertext = (e) => {
        console.log(ciphertext);
        fetch("/decrypt", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content_type": "application/json",
            },
            body: JSON.stringify({ "ciphertext": ciphertext, "key": key })
        }).then(response => {
            return response.json()
        }).then(json => {
            setPlaintext(json.plaintext)
        })
        console.log("Plaintext: ", plaintext);
    };


    return (
        <div>
            <Paper spacing={2} style={{ padding: "25px", marginTop: "20px" , backgroundColor: "#eafbea" , borderRadius: "10px" }}>
                <Typography variant="h4">Decryption</Typography>
                <Grid container direction="row" spacing={3} style={{ marginTop: "5px" }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                        <form onSubmit={handleCiphertext} >
                            <FormControl fullWidth variant="outlined" style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}>
                                <TextField
                                    id="Key"
                                    variant="outlined"
                                    label="Decryption Key"
                                    onChange={e => setKey(e.target.value)}
                                />
                            </FormControl>
                            <FormControl fullWidth variant="outlined" style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}>
                                <TextField
                                    id="ciphertext"
                                    value={ciphertext}
                                    variant="outlined"
                                    label="Encrypted Message"
                                    onChange={e => setCiphertext(e.target.value)}
                                />
                            </FormControl>
                            <Button variant="outlined" style={{ float: "right" , fontFamily: "Work Sans"}} preventDefault onClick={handleCiphertext} ><FontAwesomeIcon icon={faUnlock} style={{ marginRight: "5px"}} />Decrypt</Button>
                        </form>
                    </Grid>
                </Grid>
                <FormControl fullWidth variant="outlined" style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}>
                    <TextField
                        id="Plaintext"
                        label="Decrypted Message"
                        variant="outlined"
                        rows={5}
                        value={plaintext}
                    />
                </FormControl>
            </Paper>
        </div >
    );
}

export default Decryption;

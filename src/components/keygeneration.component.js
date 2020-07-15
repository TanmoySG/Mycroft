import React, { useState, useEffect } from 'react';
import { Divider, Grid, Button, Select, FormControl, InputLabel, Tooltip } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from 'react-copy-to-clipboard';

function KeyGen(props) {
    const [nKey, setNKey] = useState(0);
    const [eKey, setEKey] = useState(0);
    const [dKey, setDKey] = useState(0);
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        fetch('/listOfKeys').then(response =>
            response.json().then(data => {
                setKeys(data.key);
                setNKey(data.nKey);
            })
        )
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(eKey);
        fetch("/generateKey", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content_type": "application/json",
            },
            body: JSON.stringify(eKey)
        }).then(response => {
            return response.json()
        }).then(json => {
            setDKey(json.dKey)
        })
    };

    return (
        <div>
            <div>
                <Typography variant="h4">Key Generation</Typography>
                <Grid container direction="row" spacing={3} style={{ marginTop: "5px" }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                        <form onSubmit={handleSubmit} >
                            <InputLabel>Encryption Key</InputLabel>
                            <FormControl variant="outlined" style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }} >
                                <Select native value={eKey} onChange={e => setEKey(e.target.value)} >
                                    <option aria-label="None" value="" />
                                    {
                                        keys.map((key) => {
                                            return (
                                                <option value={key} >{key}</option>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
                            <Button preventDefault onClick={handleSubmit} style={{ fontFamily: "Work Sans", backgroundColor: "#237fff", color: "white" }}  ><FontAwesomeIcon icon={faKey} style={{ marginRight: "5px" }} />Generate Decryption Key</Button>
                        </form>
                    </Grid>
                    <Divider />
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Grid container direction="row" >
                            <Typography variant="h5" >Encryption Key : </Typography>
                            <CopyToClipboard text={eKey + "x" + nKey}>
                                <Tooltip title="Click to copy">
                                    <Typography variant="h5" style={{ color: "#237fff" }} >{eKey + "x" + nKey}</Typography>
                                </Tooltip>
                            </CopyToClipboard>
                        </Grid>
                        <Grid container direction="row" style={{ marginTop: "5px" }}>
                            <Typography variant="h5" >Decryption Key : </Typography>
                            <CopyToClipboard text={dKey + "x" + nKey}>
                                <Tooltip title="Click to copy">
                                    <Typography variant="h5" style={{ color: "#237fff" }} >{dKey + "x" + nKey}</Typography>
                                </Tooltip>
                            </CopyToClipboard>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div >
    );
}

export default KeyGen;

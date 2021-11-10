import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { layoutActions } from "../store/layout-slice";
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import { grid } from "@mui/system";
import Parser from "rss-parser";

const RssComponent = () =>{
    const [TextFieldText,setTextFieldText] = useState('');
    const TextFieldTextChangeHandler = (e) => {
        setTextFieldText(e.target.value);
    }
    return (
        <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="RssComps">
            <TextField value={TextFieldText} label="I'll show you this" placeholder="Type here..." variant="outlined" style={{marginTop:12, padding:10}} onChange={TextFieldTextChangeHandler}/>
            <Button variant="outlined" id="showText" onClick={showTextField} >
                Submit
            </Button>
        </Grid>
    )
    
    async function showTextField() {
        let parser = new Parser()
        let feed
        console.log(TextFieldText)
        try {
            feed = await parser.parseURL(TextFieldText)
            if(feed.items != null){
                console.log("Exw pragma mesa")        
                console.log(feed.items)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
}

export default RssComponent;
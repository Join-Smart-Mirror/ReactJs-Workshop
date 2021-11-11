import Grid from '@mui/material/Grid';
import Parser from "rss-parser";
import { useEffect } from "react";
import { useState } from "react";

const RealRssComponent = () => {
    const [feedRss, setfeedRss] = useState([]);
    useEffect(() => { showRss() }, []);
    if (feedRss.length === 0)
        return <div> Loading...</div>
    
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className="RealRssComps">
            <div >
                {feedRss.map((item) => { return (<div>{item.title}<br /> {item.content}<br /><br /></div>) })}
            </div>
        </Grid>
    )

  

    async function showRss() {
        let parser = new Parser()
        let feed
        try {
            feed = await parser.parseURL("https://cors-anywhere.herokuapp.com/https://www.newsbeast.gr/feed")
            if (feed.items != null) {
                setfeedRss(feed.items)
                console.log(feed.items)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
}
export default RealRssComponent;
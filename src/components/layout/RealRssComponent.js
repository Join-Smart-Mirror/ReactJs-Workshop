import Grid from '@mui/material/Grid';
import Parser from "rss-parser";
import { useEffect } from "react";
import { useState } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useCallback } from 'react';



var divHeight
const RealRssComponent = () => {
    const [feedRss, setfeedRss] = useState([]);
    useEffect(() => { showRss() }, []);
    const [i,SetI] = useState(0);
    useEffect(() => {
        //timer to run and interval 
        if (feedRss.length === 0) {
            return;
        }
        const interval = setInterval(() => {
            SetI((prevstate) => {
                if (prevstate === feedRss.length - 1) {
                    return 0;
                }
                else {
                    return prevstate + 1
                }
            })
        }, 5000)
        return () => {
            clearInterval(interval);
        }
    }, [feedRss])

    const scrollingHeight = useCallback(node => {
        if (node !== null) {
            divHeight = node.getBoundingClientRect().height
        }
    }, []);
    
    if (feedRss.length === 0)
        return <div> Loading...</div>
    const childCount = feedRss.length
    const RssData = feedRss.map((item) => { return <div>{ReactHtmlParser(item.content)}</div>; })

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className="RealRssComps">
            <div ref={scrollingHeight} style={{ transform: "translateY()"}}>
                {RssData[i]}
            </div>
        </Grid>
    )

  

    async function showRss() {
        let parser = new Parser()
        let feed
        try {
            feed = await parser.parseURL("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=featuredfeed&feed=featured")
            if (feed.items != null) {
                setfeedRss(feed.items)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
}
export default RealRssComponent;
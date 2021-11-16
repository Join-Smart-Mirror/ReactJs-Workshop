import Grid from '@mui/material/Grid';
import Parser from "rss-parser";
import { useEffect } from "react";
import { useState } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useCallback } from 'react';



var divHeight
const RealRssComponent = () => {
    const [feedRss, setfeedRss] = useState([]);
    const [divScrollHeight,setDivScrollHeight] = useState(0);
    useEffect(() => { showRss() }, []);
    const [i,SetI] = useState(0);
    

    const scrollingHeight = useCallback(node => {
        if (node !== null) {
            setDivScrollHeight(node.getBoundingClientRect().height);
            
            console.log(divHeight);
        }
    }, []);


    
    if (feedRss.length === 0)
        return <div> Loading...</div>
    const childCount = feedRss.length
    const RssData = feedRss.map((item, index) => {
        return <div className="foofoo" onAnimationEnd={(event) => {
            SetI((prevstate) => {
                if (prevstate === feedRss.length - 1) {
                    return 0;
                }
                else {
                    return prevstate + 1
                }
            })
        }} style={{ animation: `scrollBox ${divScrollHeight / 20}s linear 2s 1 normal forwards` }} ref={scrollingHeight} key={index}>{ReactHtmlParser(item.content)}</div>;
    })

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className="RealRssComps">
            <div style={{ transform: "translateY()"}}>
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
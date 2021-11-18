
import RssComponent from "../RssComponent";
import RealRssComponent from "../layout/RealRssComponent";

import Grid from '@mui/material/Grid';


const Settings = () => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                
            <RssComponent />
            <div style={{ height: "800px", width: "400px", overflow: "hidden" }}>
                <RealRssComponent/>
                </div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
            </Grid>
        </Grid>
    )
}

export default Settings;
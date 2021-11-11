import { useDispatch } from "react-redux";
import { useEffect } from "react";
import RssComponent from "../RssComponent";
import RealRssComponent from "../layout/RealRssComponent";
import { layoutActions } from "../../store/layout-slice";
import Grid from '@mui/material/Grid';


const Settings = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(layoutActions.setBreadcrumbs('Settings'));
    },[dispatch])

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                
            <RssComponent/>
            <RealRssComponent/>

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
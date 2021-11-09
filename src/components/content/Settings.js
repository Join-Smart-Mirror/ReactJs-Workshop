import { useDispatch } from "react-redux";
import { useEffect } from "react";
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
            <span>
                <h1 id="SettingsTitle">
                    Settings
                </h1>
            </span>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                    
                <ul id="SettingsList">
                    <li>
                        Option1
                    </li>
                    <li>
                        Option2
                    </li>
                    <li>
                        Option3
                    </li>
                    <li>
                        Option4
                    </li>
                    <li>
                        Option5
                    </li>
                    <li>
                        Option6
                    </li>
                    <li>
                        Option7
                    </li>
                </ul>
            </Grid>
        </Grid>
    )
}

export default Settings;
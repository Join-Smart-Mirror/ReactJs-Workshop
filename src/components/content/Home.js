import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { layoutActions } from "../../store/layout-slice";

const Home = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(layoutActions.setBreadcrumbs('Home'));
    },[dispatch])
    return (
        <div>
            Home
        </div>
    )
}

export default Home;
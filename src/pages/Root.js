import {Outlet} from 'react-router-dom';
import Header from '../components/Header';
import Headers from "../components/Headers";

const Root = () => {
    return(
        <>
      <Headers />
        <Header/>

        <Outlet />
        </>
    )
}

export default Root;
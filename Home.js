import { Link } from "react-router-dom";
import React,{useEffect} from "react";
import Menus from "./Menus";
import Hero from "./Hero";
import Banner from "./Banner";
const Home=()=>{
    useEffect(()=>{
        document.title = "hotel app";
},[]);
    return(
        <React.Fragment>
            <Hero>
                <Banner
                title="PARADISE GROUP"
                subtitle="WELCOME"
                >
                <Link to="/Menus" className=" btn-primary">MENU</Link>
                </Banner>
            </Hero>
        </React.Fragment>
    );
};
export default Home;

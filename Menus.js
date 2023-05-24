import React from "react";
import{Link} from "react-router-dom";
import Hero from "./Hero";
import Banner from "./Banner";
import { ListGroup,ListGroupItem } from "reactstrap";
const Menus=()=>{
    return(
        <>
        <div>
            <Hero hero="roomsHero">
                <Banner title="OUR MENUS">
                    <Link to="/" className="btn-primary">RETURN HOME </Link>
                    <ListGroup>
                    <ListGroupItem tag="a" href="/">Home</ListGroupItem>
                     <ListGroupItem tag="a" href="/Room-Booking">RoomBooking</ListGroupItem>
                    <ListGroupItem tag="a" href="/Meetings-Events">Meetings_Events</ListGroupItem>         
                    <ListGroupItem tag="a" href="/Services">Services</ListGroupItem>
                    <ListGroupItem tag="a" href="/Contactus">Contact us</ListGroupItem>
                    </ListGroup>
                </Banner>
            </Hero>
        </div>
        </>
    );    
}
export default Menus;
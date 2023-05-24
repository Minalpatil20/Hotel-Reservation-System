import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Hero1 from "./Hero1";

const RoomBooking=()=>{
    useEffect(()=>{
        document.title="Book Room || Learn Code";
    },[]);

    const [room,setroom]=useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(room);
        postDatatoServer(room);
        e.preventDefault();
    }
//creating function to post data on server
const postDatatoServer=(data)=>{
    axios.post(`${base_url}/Rooms`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success(" Information added successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong ",{position:"bottom-center"});
        }
    );
};

    return (
        <>
        <div>
            <Hero1 hero1="roomsHero1">
            
        <Fragment>        
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for="roomNo">ROOM NO.</label>
                <Input
                        Type="text"
                        placeholder="Enter roomNo here"
                        name="roomNo"
                        Id="roomNo"
                        onChange={(e)=>{
                            setroom({...room,roomNo:e.target.value});
                        }}
                />
            </FormGroup>

            <FormGroup>
                <label for="customerName">CUSTOMER NAME </label>
                <Input
                        Type="text"
                        placeholder="Enter customerName here"
                        name="customerName"
                        Id="customerName"
                        onChange={(e)=>{
                            setroom({...room,customerName:e.target.value});
                        }}
                />
            </FormGroup>
                
                <FormGroup>
                <label for="customerPhoneNo">CUSTOMER PHONE NUMBER</label>
                <Input
                        Type="text"
                        placeholder="Enter customerPhoneNohere "
                        name="customerPhoneNo"
                        Id="customerPhoneNo"
                        onChange={(e)=>{
                            setroom({...room,customerPhoneNo:e.target.value});
                        }}
                />
                </FormGroup>
                
                <FormGroup>
                <label for="roomType">ROOM TYPE</label>
                <Input
                        Type="text"
                        placeholder="Enter roomType here "
                        Id="roomType"
                        onChange={(e)=>{
                            setroom({...room,roomType:e.target.value});
                        }}
                />
                </FormGroup>

                <FormGroup>
                <label for="bedType">BED TYPE</label>
                <Input
                        Type="text"
                        placeholder="Enter Bed Type here "
                        Id="bedType"
                        onChange={(e)=>{
                            setroom({...room,bedType:e.target.value});
                        }}
                />
                </FormGroup>

                <FormGroup>
                <label for="price">PRICE</label>
                <Input
                        Type="text"
                        placeholder="Enter Price here "
                        Id="price"
                        onChange={(e)=>{
                            setroom({...room,price:e.target.value});
                        }}
                />
                </FormGroup>
                
                <Container className="text-center">
                    <Button type="submit" color="success">Book Room</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>{' '}
                    <Link to="/" ><Button>HOME </Button> </Link>
                </Container>            
        </Form>
        </Fragment>
        </Hero1>
        </div>
        </>
    );
};
export default RoomBooking;
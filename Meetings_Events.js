import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Hero3 from "./Hero3";

const Meeting_Events=()=>{
    useEffect(()=>{
        document.title="MeetingS_Events";
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
    axios.post(`${base_url}/Meeting`,data).then(
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
            <Hero3 hero3="roomsHero3">
        <Fragment>
        <Form onSubmit={handleForm}>

            <FormGroup>
                <label for="roomNum">Room No</label>
                <Input
                        Type="text"
                        placeholder="Enter Room No here"
                        name="roomNum"
                        Id="roomNum"
                        onChange={(e)=>{
                            setroom({...room,roomNum:e.target.value});
                        }}
                />
            </FormGroup>
            <FormGroup>
                <label for="name"> Name </label>
                <Input
                        Type="text"
                        placeholder="Enter Name here"
                        name="name"
                        Id="name"
                        onChange={(e)=>{
                            setroom({...room,name:e.target.value});
                        }}
                />
            </FormGroup>
                
                <FormGroup>
                <label for="contactNum">Contact Number</label>
                <Input
                        Type="text"
                        placeholder="Enter Contact Number here "
                        name="contactNum"
                        Id="contactNum"
                        onChange={(e)=>{
                            setroom({...room,contactNum:e.target.value});
                        }}
                />
                </FormGroup>
                
                <FormGroup>
                <label for="meetingEventType">Meeting Event Type</label>
                <Input
                        Type="text"
                        placeholder="Enter Meeting EventType here "
                        Id="meetingEventType"
                        onChange={(e)=>{
                            setroom({...room,meetingEventType:e.target.value});
                        }}
                />
                </FormGroup>

                <FormGroup>
                <label for="date">Date</label>
                <Input
                        Type="text"
                        placeholder="Enter Date here "
                        Id="date"
                        onChange={(e)=>{
                            setroom({...room,date:e.target.value});
                        }}
                />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Book Room</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear</Button>{' '}
                    <Link to="/" ><Button>HOME </Button> </Link>
                </Container>           
        </Form>
        </Fragment>
        </Hero3>
        </div>
        </>
    );
};
export default Meeting_Events;
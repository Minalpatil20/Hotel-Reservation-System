import axios from "axios";
import React from "react";
import {toast} from "react-toastify";
import {Card,CardBody,CardSubtitle,CardText,Button,Container,cardTitle} from "reactstrap";
import base_url from "../api/bootapi";

const Room=({room,update})=>{
    //delete Data
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/Rooms/${id}`).then(
            (response)=>{
                toast.success("Data deleted Successfully")
                update(id);
            },
            (error)=>{
                toast.error("Data not deleted");
            }
        )
    }
    //Form handler function
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
            console.log("Success");
            toast.success("Data deleted successfully",{position:"bottom-center"});
    },
    (error)=>{
        console.log(error);
        console.log("error");
        toast.error("something went wrong ",{position:"bottom-center"});
    }
    );
};

return(
        <Card className="text-center">
        <CardBody>
                <CardSubtitle className="font-weight-bold">{room.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="success" onClick={()=>{
                        deleteCourse(room._roomNo);
                    }} >Delete</Button>{''}

                    <Button color="warning ml-5" type="submit" href="/update-course">Update</Button>
                </Container>
        </CardBody>
        </Card>
);
};
export default Room;
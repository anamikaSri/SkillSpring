import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../service/BootApi";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import AllCourses from "./AllCourses";
import { Link } from "react-router-dom";

const UpdateCourses = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const course = location.state;
    console.log("This is location", location);
    console.log("This is course", course);
    
    const SubmitHandler = (e) => {
        console.log("This is event" ,e)
        console.log(e.target[0].value, e.target[1].value, e.target[2].value);
        sendDatatoServer(e);
        e.preventDefault();
       
    }

    const sendDatatoServer = (e) => {
        let data = { id: e.target[0].value, titleString: e.target[1].value, descripString: e.target[2].value }
        console.log("This is data", data)
        axios.put(`${base_url}/courses`, data).then(
            
            (response) => {
                <AllCourses />
                console.log("this is response", response);
                toast.success("Course has been Update Successfully 👍")
                setTimeout(() => {
                    navigate("/view-course");
                }, 2000);
            }, (error) => {
                console.log("this is response", error);
                toast.error("Something Went Wrong 😥")
            }
        )
    }
    return (
        <Card style={{ border: "none" }}>

            <Fragment>
                <h1 className="text-center my-3">Fill Course Details</h1>
                <Form style={{ padding: 20 }} onSubmit={SubmitHandler}>
                    <FormGroup>
                        <Label for="userId">Course Id</Label>
                        <Input type="text" placeholder="Enter here" name="userId" id="userId" required value={course.id}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Title">Course Title</Label>
                        <Input type="text" placeholder="Enter Title here" name="title" id="title" required defaultValue={course.titleString} ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="userId">Course Description</Label>
                        <Input type="textarea" placeholder="Enter Description here" name="description" required id="description" defaultValue={course.descripString}></Input>
                    </FormGroup>
                    <Container className="text-center">
                       
                            <Button color="success" type="submit" style={{ margin: 20 }}>Update Course</Button>
                            <Button color="warning" type="reset">Clear</Button>
                    </Container>
                </Form>
            </Fragment>

        </Card>



    )
}


export default UpdateCourses;
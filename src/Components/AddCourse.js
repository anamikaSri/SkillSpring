import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../service/BootApi";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const Add = () => {
    // fragment is also same as div only fragmenet is just react provided
    const navigate = useNavigate();
    useEffect(() => { document.title = "Add Course || SkillSpring" }, [])

    const [data, setdata] = useState({})
    
    const formHandler = (e) => {
        console.log(e);
        console.log(data);
        postDataToServer(data);
        e.preventDefault();
    }
    
    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log("success"+data)
                console.log(response)
                toast.success("Course has been added successfully 👍")
                setTimeout(() => { navigate("/view-course")} , 2000)
                
            }, (error) => {
                console.log(error)
                toast.error("Something Went Wrong 😥")
            }
        )
    }
    return (
       

            <Card style={{border:"none"}}>

                <Fragment>
                    <h1 className="text-center my-3">Fill Course Details</h1>
                <Form style={{ padding: 20 }} onSubmit={formHandler}>
                        <FormGroup>
                            <Label for="userId">Course Id</Label>
                        <Input type="text" placeholder="Enter here" name="userId" id="userId" onChange={(e) => { console.log(e); setdata({ ...data, id: e.target.value }) }} required></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Title">Course Title</Label>
                        <Input type="text" placeholder="Enter Title here" name="title" id="title" required onChange={(e) => { console.log(e);  setdata({ ...data, titleString: e.target.value }) }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="userId">Course Description</Label>
                        <Input type="textarea" placeholder="Enter Description here" name="description" required id="description" onChange={(e) => { console.log(e);  setdata({ ...data, descripString: e.target.value }) }}></Input>
                        </FormGroup>
                        <Container className="text-center">
                            
                                <Button color="success" type="submit" style={{ margin: 20 }}>Add Course</Button>
                            
                            
                                <Button color="warning" type="reset">Clear</Button>
                        </Container>
                    </Form>
                </Fragment>

            </Card>
        
       
        
    )
}


export default Add;
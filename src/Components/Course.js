import axios from "axios";
import React from "react";
import { Card, CardTitle, CardBody, CardHeader, Button, CardText, Container } from "reactstrap";
import base_url from "../service/BootApi";
import AddCourse from "./AddCourse"
import { Link } from "react-router-dom";

const Course = ({ course , update}) => {
    console.log(course.id);
    const deleteCourse =() => {
        axios.delete(`${base_url}/courses/${course.id}`).then(
            (response) => {
                console.log(response);
                update(course.id);
            }, (error) => {
                console.log(error);
            }
        )
    }

    return (
        <Card
            className="my-2 text-center"
            color="primary"
            outline
            style={{ border: "none" }}
        >
            <CardHeader>
                Flat 15% off
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5">
                    {course.titleString}
                </CardTitle>
                <CardText>
                    {course.descripString}
                </CardText>
                <Button color="danger" style={{ margin: 20 }} onClick={deleteCourse}>Delete</Button>
                
                <Link className="list-group-item list-group-item-action" to="/update-course" state={course} tag="a" style={{display:"inline"}}>
                    <Button color="warning" >Update</Button>
                </Link>
                
                
            </CardBody>
            
            
        </Card>


    )
}

export default Course;
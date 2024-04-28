import React, { useState } from "react";
import { Card, CardTitle, CardBody, CardHeader, Button, CardText, Container } from "reactstrap";
import Course from "./Course"

// Implementation without Hook which will not work
const AllCourses = () => {
    const courses = [
        { discount: "Flat 15% off", title: "Java Course", discription: "This is a fullstack java course" },
        { discount: "Flat 15% off", title: "UI5 Course", discription: "This is a UI5 course" },
        { discount: "Flat 15% off", title: "React Course", discription: "This is a React Course course" },
        { discount: "Flat 15% off", title: "DSA Course", discription: "This is a DSA Course" },

    ]
    const add = () => {
        courses.push({ discount: "Flat 15% off", title: "abc Course", discription: "This is a DSA Course" });
        console.log(courses.length);
    }
    console.log(courses.length)
    return (

        <div>

            {

                courses.length > 0 ? courses.map((item) => <Course course={item} />) : "No Course Available"
            }
            <Button onClick={add}>Add Courses</Button>
        </div>

    )
}

export default AllCourses;


// Implemenatation using Hooks which will work
const [courses, setCourses] = useState([
    { discount: "Flat 15% off", title: "Java Course", discription: "This is a fullstack java course" },
    { discount: "Flat 15% off", title: "UI5 Course", discription: "This is a UI5 course" },
    { discount: "Flat 15% off", title: "React Course", discription: "This is a React Course course" },
    { discount: "Flat 15% off", title: "DSA Course", discription: "This is a DSA Course" }
])
const add = () => {
    
    const newcourse = [...courses]
    newcourse.push({ discount: "Flat 15% off", title: "abc Course", discription: "This is a DSA Course" })
    console.log(newcourse)
    console.log("adding");
    setCourses(newcourse);
    console.log(courses.length);
}
return (

    <div>

        {

            courses.length > 0 ? courses.map((item) => <Course course={item} />) : "No Course Available"
        }
        <Button onClick={add}>Add Courses</Button>
    </div>

)
import React, { useEffect, useState } from "react";
import { Card, CardTitle, CardBody, CardHeader, Button, CardText, Container } from "reactstrap";
import Course from "./Course"
import base_url from "../service/BootApi";
import axios from "axios";
import { toast } from "react-toastify";
import Error from "./Error";

const AllCourses = () => {
    useEffect(() => { document.title = "AllCourses || SkillSpring" }, [])
    

    
    // function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                toast.success("Enjoy Learning!! 📚📚")
                console.log(response.data)
                setCourses(response.data)
            },
            (error) => {
                if (courses.length!=0) {
                    toast.error("Opps!! Have a coffee break , while we fix 🤗")
                    console.log("Error")
               }
            }
        )
    }

    // deleting the deleted course from UI
    const deleteCourse = (id) => {

        setCourses(courses.filter((c)=>c.id!=id))
    }
    useEffect(() => {getAllCoursesFromServer(); }, [1])
    

    const [courses, setCourses] = useState([])
    return (
         
        <div>
           {
                courses.length > 0 ? courses.map((item) => <Course course={item} update={deleteCourse}/> ) : <Error />
           }
        </div>
    
    )
}

export default AllCourses;
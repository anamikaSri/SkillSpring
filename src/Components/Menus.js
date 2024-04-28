import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Menus = () =>
{
    return (
        <ListGroup style={{ border: "none" }}>
            <Link className="list-group-item list-group-item-action"  to="/" tag="a">Home</Link>
            <Link className="list-group-item list-group-item-action" to="/add-course" tag="a">Add Courses</Link>
            <Link className="list-group-item list-group-item-action" to="/view-course" tag="a">View Courses</Link>
            <Link className="list-group-item list-group-item-action" to="#" tag="a">About</Link>
            <Link className="list-group-item list-group-item-action"to="#" tag="a">Contact</Link>
        </ListGroup>
    )
}

export default Menus;
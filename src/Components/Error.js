import React from "react";
import { Card, CardTitle, Row, Col, Button, CardText, CardBody } from "reactstrap";
const noCourseError = () => {
    return (
        <Card color="light" className="text-center" style={{ borderRadius: 0 }}>
            <CardBody>
                <CardTitle tag="h5">
                    <h2 className="display-5">No Course Available</h2>
                </CardTitle>
                <CardText>
                    <h3>We are on it !! 🫡</h3>
                </CardText>
                
            </CardBody>
        </Card>   

    )
}

export default noCourseError;
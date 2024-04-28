import React from "react";
import { Card, CardBody, Container, Navbar, NavbarBrand } from "reactstrap";
function Header()
{
    return (
        <Container className="my-1">
            <Card style={{ backgroundColor: "rgb(221, 247, 134)" , borderRadius:0}}>
                <CardBody>
                    <h4 className="text-center" >Explore Our Diverse Range of Courses for Learning !!</h4>
                </CardBody>
            </Card>
       </Container>
      
    )
}

export default Header;
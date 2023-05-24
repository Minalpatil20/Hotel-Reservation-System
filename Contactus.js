import { CardBody ,Card,CardTitle, Button, Container} from "reactstrap"
import { Link } from "react-router-dom";
import Hero2 from "./Hero2";

const Contactus=() => {

    return(
        <>
        <div>
            <Hero2 hero2="roomsHero2">
        <div className="contact">

           <h1><Card className="text-center" border="success" >
        <CardBody>
            <CardTitle>Office Address:Sec-C, Near Marines, Mumbai</CardTitle>
            <CardTitle>Telephone :+22256736/+917943267902</CardTitle>
            <CardTitle>EmailId : hotelparadise@gmail.com</CardTitle>
            <CardTitle>Fax : +91 123 456 7890</CardTitle>
            <Container className="text-center">
                <Link to="/" ><Button>HOME </Button> </Link>
            </Container>
            </CardBody>
            </Card>
            </h1>
        </div>
        </Hero2>
        </div>
        </>

    )

};
export default Contactus;
import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
    return (
        <header id="header">
            <Navbar bg="light" expand="lg" shadow="lg">
                <Container>
                    <Navbar.Brand href="#home"><span className="logo"> Bytel</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{marginInline: "auto", fontSize: "1.2rem", fontWeight: "600"}}>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#plans">Plans</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#account">My Account</Nav.Link>
                        </Nav><div className="d-flex">
                        <a href="/" className="btn nav-btn_up">Book Connection</a>
                        <a href="/" className="btn nav-btn_down ">Call Us</a>
                    </div>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
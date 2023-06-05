import { Col, Container, Image, Row } from "react-bootstrap"
import heroBg from '../images/hero-bg.png'

const Hero = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col lg={6}>
                    <h1 className="display-4 fw-bold">Join Bytel now and get unlimited high-speed internet with OTT & unlimited calls</h1>
                    <div className="d-flex gap-2 flex-wrap">
                        <a href="/" className="btn btn-hero">Apply now</a>
                        <a href="/" className="btn nav-btn_up">Explore OTT plans</a>
                        <a href="/" className="btn nav-btn_down">Broadband plans</a>
                    </div>
                </Col>
                <Col lg={6}>
                    <Image fluid src={heroBg}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero;
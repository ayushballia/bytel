import mobileEnt from '../images/mobile-ent.jpg';
import tvEnt from '../images/tv-ent.jpg';
import tvEnt1 from '../images/tv-ent1.jpg';
import tvEnt2 from '../images/tv-ent2.jpg';
import SwiperSlider from './SwiperSlider';
// import Swipper from './Swipper';
const { Container, Row, Col, Card, Image } = require("react-bootstrap");

const OurPlans = () => {
    return (
        <section id="our-plans">
            <Container>
                <p className="section-subtitle">Our Plans</p>
                <h2 className="section-title">Buy New Broadband Connection for Home + OTT + TV</h2>
                <Row>
                    <Col lg={3}>
                        <Card className="plan-card shadow rounded">
                            <Image src={tvEnt} fluid/>
                            <Card.Body>
                                <div className='plan-card__text'>
                                    <h4 className="plan-card__title">Basic</h4>
                                    <div className="plan-card__flex">
                                        <p>unlimited internet & calls + OTT</p>
                                        <p className='text-end'>upto 60Mbps speed</p>
                                    </div>
                                    <SwiperSlider/>
                                    <div className="plan-card__flex">
                                        <p>Monthly rental <span className="plan-card__price">&#8377; 799</span></p>
                                        <a href='/' className='btn btn-default'>Buy now</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                    <Card className="plan-card shadow rounded">
                            <Image src={tvEnt1} fluid/>
                            <Card.Body>
                                <div className='plan-card__text'>
                                    <h4 className="plan-card__title">Standard</h4>
                                    <div className="plan-card__flex">
                                        <p>unlimited internet & calls + OTT</p>
                                        <p className='text-end'>upto 100Mbps speed</p>
                                    </div>
                                    <SwiperSlider/>
                                    <div className="plan-card__flex">
                                        <p>Monthly rental <span className="plan-card__price">&#8377; 799</span></p>
                                        <a href='/' className='btn btn-default'>Buy now</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                    <Card className="plan-card shadow rounded">
                            <Image src={mobileEnt} fluid/>
                            <Card.Body>
                                <div className='plan-card__text'>
                                    <h4 className="plan-card__title">Entertainment</h4>
                                    <div className="plan-card__flex">
                                        <p>unlimited internet & calls + OTT</p>
                                        <p className='text-end'>upto 150Mbps speed</p>
                                    </div>
                                    <SwiperSlider/>
                                    <div className="plan-card__flex">
                                        <p>Monthly rental <span className="plan-card__price">&#8377; 799</span></p>
                                        <a href='/' className='btn btn-default'>Buy now</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                    <Card className="plan-card shadow rounded">
                            <Image src={tvEnt2} fluid/>
                            <Card.Body>
                                <div className='plan-card__text'>
                                    <h4 className="plan-card__title">Professional</h4>
                                    <div className="plan-card__flex">
                                        <p>unlimited internet & calls + OTT</p>
                                        <p className='text-end'>upto 250Mbps speed</p>
                                    </div>
                                    <SwiperSlider/>
                                    <div className="plan-card__flex">
                                        <p>Monthly rental <span className="plan-card__price">&#8377; 799</span></p>
                                        <a href='/' className='btn btn-default'>Buy now</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurPlans;
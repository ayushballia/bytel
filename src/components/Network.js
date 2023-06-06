import { Card, Col, Container, Row } from "react-bootstrap";
import { FaHouseUser, FaNetworkWired, FaRegHandPeace } from "react-icons/fa";
import { IconContext } from "react-icons";
const Network = () => {
  return (
    <section id="network">
      <Container>
        <p className="section-subtitle">Exclusive</p>
        <h2 className="section-title">Find perfect network solution</h2>
        <Row className="gx-3">
          <Col lg={4}>
            <Card className="p-3 network-card">
                <IconContext.Provider
                value={{
                    color: "var(--mainColor)",
                    size: "4rem",
                    className: "global-class-name",
                }}
                >
                <FaHouseUser />
                </IconContext.Provider>
                <h4>Home Broadband with OTT</h4>
                <p>
                Bytel India Broadband Fiber offers you with Fiber optic internet
                connection transforming your daily broadband connection experience
                with high-speed internet. Bytel allows you to enjoy the High Speed
                broadband connection in Lucknow And UP with the speed of up to 300
                Mbps, which means once you connect broadband, you will get faster
                downloads and less buffering.
                </p>
                <span className="read-more-btn">Read-more</span>
            </Card>
          </Col>
          <Col lg={4}>
          <Card className="p-3 network-card">
            <IconContext.Provider
              value={{
                color: "var(--mainColor)",
                size: "4rem",
                className: "global-class-name",
              }}
            >
              <FaRegHandPeace />
            </IconContext.Provider>
            <h4>Salient Features</h4>
            <p>
              24X7 Enterprise Support Desk, SLA Based Guaranteed uptime 99.5% ,
              Delivered on Own last Mile Fiber Access, Dual path Connectivity
              where feasible, If you have questions about service or equipment,
              support is available by phone & online, Fixed line with Unlimited
              Calls, Easily recharge or pay bills online, Superfast home
              Internet with the same upload and download speed,
            </p>
            <span className="read-more-btn">Read-more</span>
            </Card>
          </Col>
          <Col lg={4}>
          <Card className="p-3 network-card">
            <IconContext.Provider
              value={{
                color: "var(--mainColor)",
                size: "4rem",
                className: "global-class-name",
              }}
            >
              <FaNetworkWired />
            </IconContext.Provider>
            <h4>Enterprise or Leased Line</h4>
            <p>
              In Today's world, Interent is crucial for the smooth running of
              any business, be it Small, Medium or Large enterprise. Many
              business critical applications run over the World Wide Web and the
              ease with which customers. Bytel India understands the need of the
              Modern-Day Entperprise and offers Premium Internet Solution to
              meet their connectivity needs
            </p>
            <span className="read-more-btn">Read-more</span>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Network;

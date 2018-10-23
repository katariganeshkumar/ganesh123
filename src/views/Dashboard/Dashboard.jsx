import React from "react";
import { Card, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";

import ganesh from "assets/img/ganesh.jpg";
import CardAuthor from "components/CardElements/CardAuthor.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="content">
        <Col>
          <Card className="card-user">
            <div className="image" />
            <CardBody>
              <CardAuthor
                avatar={ganesh}
                avatarAlt="..."
                title="Ganesh Kumar"
                description="'Social'/katariganeshkumar"
              />
              <p className="description text-center">
                I am an experienced and professional UI developer and Service
                now developer with substantial knowledge around 1.8 Years <br />
                of experience into UX and Wire Framing the Websites, and Have
                2.1 Years of experience into UI in React JS. <br />I constantly
                devote time to study new concepts and hone my craft.
              </p>
            </CardBody>
            <CardFooter>
              <hr />
              <div className="button-container">
                <Row>
                  <Col xs={6} sm={6} md={6} lg={3} className="ml-auto">
                    <Card>
                      <CardTitle>Programing Knowledge</CardTitle>
                      <p>
                        javascript
                        <br />
                        HTML5
                        <br />
                        CSS3
                      </p>
                    </Card>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={4} className="mr-auto ml-auto">
                    <Card>
                      <CardTitle>Javascript Frame Works</CardTitle>
                      <p>
                        Node.js
                        <br />
                        React.js, Redux.js
                        <br />
                        Express.js
                      </p>
                    </Card>
                  </Col>
                  <Col lg={3} className="mr-auto">
                    <Card>
                      <CardTitle>UX Design</CardTitle>
                      <p>
                        Adobe XD, Adobe PhotoShop
                        <br />
                        Adobe Illustrator
                        <br />
                        Sketch
                      </p>
                    </Card>
                  </Col>
                </Row>
              </div>
            </CardFooter>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Education</CardTitle>
              <p>
                1. Bachelor of technology (Electronic and communication
                engineering) in JNTU Ananthapur and qualified year 2014 <br />
                2. Intermediate (MPC) in board of intermediate education and
                qualified year 2010
                <br /> 3. S.S.C in board of secondary education (A.P) and
                qualified year 2008
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Personality traits</CardTitle>
              <p>
                ● Effective self-organizations
                <br />● Strong ability to lead people, time management and
                multitasking skills
                <br />● Ability to work and communicate with people across the
                organization
              </p>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Dashboard;

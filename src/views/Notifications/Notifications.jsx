import React from "react";
import { Card, CardTitle, CardBody, Row, Col } from "reactstrap";

class Notifications extends React.Component {
  render() {
    return (
      <div className="content">
        <p>This all are my Knowedge base</p>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>Google Cloud Platform</CardTitle>
                <p>
                  1.Worked on the Compute engine <br />
                  2.Worked on the Billing and Payment analysis
                  <br /> 3.Worked on the Iam role and Role creation
                  <br /> 4.Worked on the Network Dns for creation of static and
                  Dynamic ip creation
                  <br />
                  5.Worked on cloud storage like browser kind--to create a date
                  bucket
                  <br /> 6.Worked on Dns and ip links and Maintain
                  <br /> 7.Worked on the kubernetes cluster Management and
                  Docker images creation and traffic control
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>Version control</CardTitle>
                <p>
                  1.Worked on Source Code Management Using the Git <br />
                  2.Worked on GitHub for Store the code and Maintain
                  <br /> 3.Worked on Svn for code Maintain
                  <br /> 4.Worked on Atlassion jira for version control and role
                  creation
                </p>
              </CardBody>
            </Card>
            <Col>
              <Card>
                <CardBody>
                  <h5>Database</h5>
                  <p>Wroked on the NoSQL and MongoDB</p>
                </CardBody>
              </Card>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>Worked on</CardTitle>
                <p>
                  1.Worked on AWS EC2 <br />
                  2.Worked on S3 bucket in AWS
                  <br /> 3.Worked on Chat.js , Ant.design, Bootstrap CSS, MDL
                  CSS
                  <br /> 4.Worked on NPM(node packege Manager) -example-- npm i
                  Keegaa
                  <br />
                  5.Worked News API and Payment gateway --CCAvenue
                  <br />
                  6.Wroked on the UX design for the Mobile and Web using AdobeXD
                  <br />
                  7.Worked on Manual Testing and debugging
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Notifications;

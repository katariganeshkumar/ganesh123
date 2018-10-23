import React from "react";
import { Col, Card, CardBody, CardTitle } from "reactstrap";

class FullScreenMap extends React.Component {
  render() {
    return (
      <div className="content">
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Project-1</CardTitle>
              <h5>NETS</h5>
              <h6>About</h6>
              <p>
                Network for Electronic Transfers or more commonly known as NETS.
                is a Singaporean electronic payment service provider founded in
                1985 by a consortium of local banks to establish the debit
                network and drive the adoption of electronic payments in
                Singapore. It is owned by DBS Bank, OCBC Bank and United
                Overseas Bank.
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Project-2</CardTitle>
              <h5>Sitecore</h5>
              <h6>About</h6>
              <p>
                Sitecore is a customer experience management company that
                provides web content management and multichannel marketing
                automation software. The company was founded in 2001 in Denmark.
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Project-3</CardTitle>
              <h5>Conduent Inc</h5>
              <h6>About</h6>
              <p>
                Conduent Inc. is a technology-led business process services
                company headquartered in New Jersey. It was formed in 2017 as a
                divestiture from Xerox. The company offers digital platforms for
                businesses and governments. It has 93,000 employees in more than
                40 countries.
              </p>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default FullScreenMap;

import React from "react";

// reactstrap components

import { Card, CardBody, CardTitle, Button, Badge, Row, Col } from "reactstrap";

function Icons() {
  return (
    <>
      <div className="content">
        <Row>
          <Col>
            <h3 className="title">Portfolio</h3>
          </Col>
          <Col>
            <h3 className="title">History</h3>
          </Col>
        </Row>

        <div>
          <Row>
            <Col sm="12" md="4">
              <Card>
                <CardBody className="m-4">
                  <CardTitle tag="h6" className="text-muted">
                    Total Balance
                  </CardTitle>
                  <h3 className="title">$0.00</h3>
                  <div className="mb-2">
                    <img
                      src="https://apy.plasma.finance/static/media/eth-black.24d4fc53.svg"
                      alt="eth_logo"
                      style={{ height: "25px" }}
                      className="mr-1"
                    />
                    <span>0</span>
                  </div>
                  <Badge className="px-3 py-2 bg-dark">0 Assets</Badge>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="4">
              <Card>
                <CardBody className="m-4">
                  <CardTitle tag="h6" className="text-muted">
                    Savings
                  </CardTitle>
                  <h3 className="title">$0.00</h3>
                  <div className="mb-2">
                    <img
                      src="https://apy.plasma.finance/static/media/eth-black.24d4fc53.svg"
                      alt="eth_logo"
                      style={{ height: "25px" }}
                      className="mr-1"
                    />
                    <span>0</span>
                  </div>

                  <Badge className="px-3 py-2 bg-dark">0 Savings</Badge>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="4">
              <Card>
                <CardBody className="m-4">
                  <CardTitle tag="h6" className="text-muted">
                    Liquidity Pool
                  </CardTitle>
                  <h3 className="title">$0.00</h3>
                  <div className="mb-2">
                    <img
                      src="https://apy.plasma.finance/static/media/eth-black.24d4fc53.svg"
                      alt="eth_logo"
                      style={{ height: "25px" }}
                      className="mr-1"
                    />
                    <span>0</span>
                  </div>
                  <Badge className="px-3 py-2 bg-dark">0 Pools</Badge>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12">
              <Card>
                <CardBody className="m-4">
                  <CardTitle tag="h6">Wallet</CardTitle>
                  <Row>
                    <Col className="align-self-center">
                      <p>
                        You don't have any assets yet. Do you want to buy one?
                      </p>

                      <Button
                        className="px-3 py-2"
                        style={{ backgroundColor: "black" }}
                      >
                        Buy Assets
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12">
              <Card>
                <CardBody className="m-4">
                  <CardTitle tag="h6">Savings</CardTitle>
                  <Row>
                    <Col className="align-self-center">
                      <p>
                        You don’t have any savings yet. Do you want to make one?
                      </p>

                      <Button
                        className="px-3 py-2"
                        style={{ backgroundColor: "black" }}
                      >
                        Make a Deposit
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12">
              <Card>
                <CardBody className="m-4">
                  <CardTitle tag="h6">Liquidity</CardTitle>
                  <Row>
                    <Col className="align-self-center">
                      <p>
                        You don’t have liquidity yet. Do you want to make one?
                      </p>

                      <Button
                        className="px-3 py-2"
                        style={{ backgroundColor: "black" }}
                      >
                        Create Liquidity
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Icons;

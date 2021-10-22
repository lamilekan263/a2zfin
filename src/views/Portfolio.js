import React from "react";

// reactstrap components

import { Card,  CardTitle, Button, Badge, Row, Col } from "reactstrap";

function Portfolio() {
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
                <div className="m-4">
                  <p className="text-muted">Total Balance</p>
                  <h5 className="title">$0.00</h5>
                  <div className="mb-2">
                    <img
                      src="https://apy.plasma.finance/static/media/eth-black.24d4fc53.svg"
                      alt="eth_logo"
                      style={{ height: "25px" }}
                      className="mr-1"
                    />
                    <span>0</span>
                  </div>
                  <Badge className="px-3 py-2 bg-secondary">0 Assets</Badge>
                </div>
              </Card>
            </Col>
            <Col sm="12" md="4">
              <Card>
                <div className="m-4">
                  <p className="text-muted">Savings</p>
                  <h5 className="title">$0.00</h5>
                  <div className="mb-2">
                    <img
                      src="https://apy.plasma.finance/static/media/eth-black.24d4fc53.svg"
                      alt="eth_logo"
                      style={{ height: "25px" }}
                      className="mr-1"
                    />
                    <span>0</span>
                  </div>

                  <Badge className="px-3 py-2 bg-secondary">0 Savings</Badge>
                </div>
              </Card>
            </Col>
            <Col sm="12" md="4">
              <Card>
                <div className="m-4">
                  <p className="text-muted">Liquidity Pool</p>
                  <h5 className="title">$0.00</h5>
                  <div className="mb-2">
                    <img
                      src="https://apy.plasma.finance/static/media/eth-black.24d4fc53.svg"
                      alt="eth_logo"
                      style={{ height: "25px" }}
                      className="mr-1"
                    />
                    <span>0</span>
                  </div>
                  <Badge className="px-3 py-2 bg-secondary">0 Pools</Badge>
                </div>
              </Card>
            </Col>
            <Col sm="12">
              <Card>
                <div className="m-4">
                  <CardTitle tag="h6">Wallet</CardTitle>

                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <p>
                      You don't have any assets yet. Do you want to buy one?
                    </p>

                    <Button
                      className="px-3 py-2 btn-primary"
                      
                    >
                      Buy Assets
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col sm="12">
              <Card>
                <div className="m-4">
                  <CardTitle tag="h6">Savings</CardTitle>

                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <p>
                      You don’t have any savings yet. Do you want to make one?
                    </p>

                    <Button className="px-3 py-2 btn-primary">
                      Make a Deposit
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col sm="12">
              <Card>
                <div className="m-4">
                  <CardTitle tag="h6">Liquidity</CardTitle>

                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <p>
                      You don’t have liquidity yet. Do you want to make one?
                    </p>

                    <Button className="px-3 py-2 btn-primary">
                      Create Liquidity
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Portfolio;

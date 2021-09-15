import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Badge,
  Row,
  Col,
} from "reactstrap";

function Map() {
  return (
    <>
      <div className="content">
        <h1>Swap</h1>
        <Row>
          <Col sm="12" md="8 mx-auto">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between">
                  <div>
                    <p>HyperDEX</p>
                    <span>best_rates_on_dex_market</span>
                  </div>
                  <div>
                    <Badge>arrow</Badge>

                    <Badge className="ml-2">switch</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="my-3">
                <form>
                  <div className="mb-3 form-field">
                    <div className="field-label">
                      <span>Sell</span>
                    </div>
                    <div className="input-panel border p-2">
                      <div className="label-row">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          -$
                        </label>
                      </div>

                      {/* end */}
                      <div
                        className="input-row h-50 d-flex justify-content-center align-items-center"
                        style={{ height: "200px" }}
                      >
                        <input
                          type="email"
                          className="form-control "
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />

                        <div className="border">
                          <div className="d-flex justify-content-center align-items-center px-3">
                            <div
                              className="token-logo "
                              style={{ height: "30px" }}
                            >
                              <img
                                src={
                                  require("assets/currencies/eth.png").default
                                }
                                alt="eth"
                                className="h-100 w-100"
                              />
                            </div>
                            <span>ETH</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* buy */}
                  <div className="mb-3 form-field">
                    <div className="field-label">
                      <span>Buy</span>
                    </div>
                    <div className="input-panel border p-2">
                      <div className="label-row">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          -$
                        </label>
                      </div>

                      {/* end */}
                      <div
                        className="input-row h-50 d-flex justify-content-center align-items-center"
                        style={{ height: "200px" }}
                      >
                        <input
                          type="email"
                          className="form-control "
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />

                        <div className="border">
                          <div className="d-flex justify-content-center align-items-center px-3">
                            <div
                              className="token-logo "
                              style={{ height: "30px" }}
                            >
                              <img
                                src={
                                  require("assets/currencies/plasma.svg").default
                                }
                                alt="eth"
                                className="h-100 w-100"
                              />
                            </div>
                            <span>PPAY</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    connect wallet
                  </button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Map;

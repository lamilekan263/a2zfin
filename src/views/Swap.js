import React, { useState } from "react";
// reactstrap components
import classnames from "classnames";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";

function Swap() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col sm="12" md="8 mx-auto">
            <Card >
              <CardHeader>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      Market
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Limits
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody className="my-1">
                <TabContent activeTab={activeTab}>
                  {/* market tab pane */}
                  <TabPane tabId="1">
                    <form className="auth-register-form mt-2" action>
                      <label className="custom-label">You pay</label>
                      <div className="form_style">
                        <div className="my-form">
                          <div className="form-group input_first adjust">
                            <label
                              className="form-label "
                              htmlFor="register-username"
                            >
                              Wrapper Ether
                            </label>
                            <select
                              className="form-control my-select"
                              placeholder="currency"
                              tabIndex={6}
                              required
                            >
                              <option value="BNB">BNB</option>
                              <option value="ETH">ETH</option>
                              <option value="BTC">BTC</option>
                            </select>
                          </div>
                          <div className="form-group step">
                            <label
                              className="form-label "
                              htmlFor="register-username"
                            >
                              $123
                            </label>
                            <input
                              className="form-control"
                              id="register-username"
                              type="text"
                              name="register-username"
                              placeholder={1}
                              aria-describedby="register-username"
                              autofocus
                              tabIndex={1}
                              dir="rtl"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="exchange">
                        <i className="fas fa-exchange-alt" />
                      </div>
                      <label className="custom-label adjust">You receive</label>
                      <div className="form_style">
                        <div className="my-form">
                          <div className="form-group input_first">
                            <label
                              className="form-label "
                              htmlFor="register-username"
                            >
                              Wrapper Ether
                            </label>
                            <select
                              className="form-control my-select"
                              placeholder="currency"
                              tabIndex={6}
                              required
                            >
                              <option value="BNB">DAI</option>
                              <option value="ETH">ETH</option>
                              <option value="BTC">BTC</option>
                              <option value="BTC">BNB</option>
                            </select>
                          </div>
                          <div className="form-group step">
                            <label
                              className="form-label "
                              htmlFor="register-username"
                            >
                              $3428534
                            </label>
                            <input
                              className="form-control"
                              id="register-username"
                              type="text"
                              name="register-username"
                              placeholder={2345}
                              aria-describedby="register-username"
                              autofocus
                              tabIndex={1}
                              dir="rtl"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-des">
                        <label
                          className="form-label "
                          htmlFor="register-username"
                        >
                          1 WETH cost
                        </label>
                        <label
                          className="form-label "
                          htmlFor="register-username"
                        >
                          0.2 DA
                        </label>
                      </div>
                      <div className="text-des">
                        <label
                          className="form-label "
                          htmlFor="register-username"
                        >
                          1 DAI cost
                        </label>
                        <label
                          className="form-label "
                          htmlFor="register-username"
                        >
                          5 WETH
                        </label>
                      </div>
                      <button
                        className="btn btn-primary btn-block my-btt"
                        tabIndex={5}
                      >
                        Connect Wallet
                      </button>
                    </form>
                  </TabPane>
                  {/* limit tab pane */}
                  <TabPane tabId="2">
                    <form className="auth-register-form mt-2" action>
                      <label className="custom-label">You pay</label>
                      <div className="form_style">
                        <div className="my-form">
                          <div className="form-group input_first">
                            <label
                              className="form-label "
                              htmlFor="register-username"
                            >
                              Wrapper Ether
                            </label>
                            <select
                              className="form-control my-select"
                              placeholder="currency"
                              tabIndex={6}
                              required
                            >
                              <option value="BNB">BNB</option>
                              <option value="ETH">ETH</option>
                              <option value="BTC">BTC</option>
                            </select>
                          </div>
                          <div className="form-group step">
                            <label
                              className="form-label "
                              htmlFor="register-username"
                            >
                              $123
                            </label>
                            <input
                              className="form-control"
                              id="register-username"
                              type="text"
                              name="register-username"
                              placeholder={1}
                              aria-describedby="register-username"
                              autofocus
                              tabIndex={1}
                              dir="rtl"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-contain">
                        <div className="form-group form-group002">
                          <div className="price-label">
                            <label
                              className="form-label"
                              htmlFor="register-username"
                            >
                              Price
                            </label>
                            <label
                              className="form-label"
                              htmlFor="register-username"
                            >
                              Lock
                            </label>
                          </div>
                          <div className="form-group form-group2">
                            <input
                              className="form-control price-box"
                              id="register-username"
                              type="text"
                              name="register-username"
                              placeholder={492}
                              aria-describedby="register-username"
                              autofocus
                              tabIndex={1}
                            />
                          </div>
                        </div>
                        <div className="form-group form-group001">
                          <label
                            className="form-label "
                            htmlFor="register-number"
                          >
                            Expires in
                          </label>
                          <div className="form-group form-group3">
                            <select
                              className="form-control my-select1"
                              placeholder="currency"
                              tabIndex={6}
                              required
                            >
                              <option value="BNB">1Day</option>
                              <option value="ETH">5Days</option>
                              <option value="ETH">7Days</option>
                              <option value="ETH">20Days</option>
                              <option value="ETH">1Month</option>
                              <option value="ETH">2Months</option>
                              <option value="ETH">2Months</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="exchange">
                        <i className="fas fa-exchange-alt" />
                      </div>
                      <label className="custom-label">You receive</label>
                      <div className="form_style">
                        <div className="my-form">
                          <div className="form-group input_first">
                            <label
                              className="form-label "
                              htmlFor="register-username"
                            >
                              Wrapper Ether
                            </label>
                            <select
                              className="form-control my-select"
                              placeholder="currency"
                              tabIndex={6}
                              required
                            >
                              <option value="BNB">DAI</option>
                              <option value="ETH">ETH</option>
                              <option value="BTC">BTC</option>
                              <option value="BTC">BNB</option>
                            </select>
                          </div>
                          <div className="form-group step">
                            <label
                              className="form-label "
                              htmlFor="register-username"
                            >
                              $3428534
                            </label>
                            <input
                              className="form-control"
                              id="register-username"
                              type="text"
                              name="register-username"
                              placeholder={2345}
                              aria-describedby="register-username"
                              autofocus
                              tabIndex={1}
                              dir="rtl"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-des">
                        <label
                          className="form-label "
                          htmlFor="register-username"
                        >
                          1 WETH cost
                        </label>
                        <label
                          className="form-label "
                          htmlFor="register-username"
                        >
                          <span className="span001">~$2,845</span>
                          2,848.5330767 DAI
                        </label>
                      </div>
                      <div className="text-des">
                        <label
                          className="form-label "
                          htmlFor="register-username"
                        >
                          1 DAI cost
                        </label>
                        <label
                          className="form-label "
                          htmlFor="register-username"
                        >
                          <span className="span001">~$1</span>
                          0.0003514 ETH
                        </label>
                      </div>
                      <div className="text-des">
                        <label
                          className="form-label "
                          htmlFor="register-username"
                        >
                          Transaction Cost
                        </label>
                        <label
                          className="form-label "
                          htmlFor="register-username"
                        >
                          <span className="span001">~ $43.43</span>
                          0.0152 Ξ
                        </label>
                      </div>
                      <button
                        className="btn btn-primary btn-block my-btt"
                        tabIndex={5}
                      >
                        Connect Wallet
                      </button>
                    </form>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Swap;

import React from "react";
import {} from "reactstrap";
import {
  Card,
  CardTitle,
  CardBody,
  Button,
  Badge,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

function BridgePage() {
  return (
    <>
      <div className="content">
        <div>
          <Card className="  mx-auto">
            <CardBody>
              <CardTitle className="text-center">
                Bridge to and from the Fantom Opera Network! Receive the same
                token that you sent!
              </CardTitle>
              <Form>
                <Row row>
                  <Col sm={6}>
                    <FormGroup col>
                      <Label for="exampleSelect">From Chain</Label>

                      <Input type="select" name="select" id="exampleSelect">
                        <option>Ethereum</option>
                        <option>Fantom</option>
                        <option>BSsc</option>
                        <option>Polygon</option>
                        <option>Avalanche</option>
                        <option>Arbitrum</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup col>
                      <Label for="exampleSelect">To Chain</Label>

                      <Input type="select" name="select" id="exampleSelect">
                        <option>Ethereum</option>
                        <option>Fantom</option>
                        <option>BSsc</option>
                        <option>Polygon</option>
                        <option>Avalanche</option>
                        <option>Arbitrum</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default BridgePage;

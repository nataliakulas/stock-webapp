import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-grid-system";
import styled from "styled-components";

import * as route from "../shared/routes";
import color from "../shared/colors";
import { ButtonMixin } from "../shared/mixins";

class DashboardPage extends Component {
  render() {
    return (
      <Fragment>
        <H1>Stock exchange</H1>
        <H2>Companies</H2>
        <Row>
          <Col xs={6} offset={{ xs: 3 }}>
            <Panel>
              <H3>It seems, you don't have any companies yet!</H3>
              <LinkButton to={route.ADD}>Let's add some</LinkButton>
            </Panel>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default DashboardPage;

const H1 = styled.h1`
  color: ${color.primary};
  text-transform: uppercase;
`;
const H2 = styled.h2``;
const H3 = styled.h3`
  color: ${color.primary};
`;
const Panel = styled.div`
  width: 100%;
  min-height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${color.cream};
  border-radius: 4px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);
`;

const LinkButton = styled(Link)`
  ${ButtonMixin};

  margin: 10px auto;
`;

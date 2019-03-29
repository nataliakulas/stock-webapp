import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-grid-system";
import styled from "styled-components";

import * as route from "../shared/routes";
import color from "../shared/colors";

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
`;

const LinkButton = styled(Link)`
  color: ${color.white};
  text-decoration: none;
  text-transform: uppercase;

  border: 1px solid ${color.primary};
  border-radius: 2px;
  background-color: ${color.primary};

  margin: 10px auto;
  padding: 5px 10px;

  &:hover {
    border-color: ${color.secondary};
    background-color: ${color.secondary};
  }
`;

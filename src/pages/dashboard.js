import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-grid-system";
import styled from "styled-components";

import * as route from "../shared/routes";
import color from "../shared/colors";
import { ButtonMixin } from "../shared/mixins";
import Details from "../components/Details";
import { fetchData, fetchPrice } from "../shared/api";

class DashboardPage extends Component {
  state = {
    companies: [],
    preview: {},
    website: "",
    logo: ""
  };

  componentDidMount() {
    let companies = JSON.parse(localStorage.getItem("companies"));

    this.setState({ companies: companies });
  }

  getData = async company => {
    const dataResult = await fetchData(company);
    const priceResult = await fetchPrice(company);

    if (dataResult.bestMatches[0]) {
      this.setState({
        preview: dataResult.bestMatches[0]
      });
    }

    if (priceResult["Global Quote"]) {
      this.setState(prevState => ({
        preview: { ...prevState.preview, ...priceResult["Global Quote"] }
      }));
    }
  };

  onPreview = company => {
    this.getData(company);
  };

  render() {
    const { companies, preview } = this.state;

    return (
      <Fragment>
        <H1>Stock exchange</H1>
        <H2>Companies</H2>
        <Row>
          <LinkButton to={route.ADD}>
            {companies ? "Let's add some more" : "Let's add something"}
          </LinkButton>
        </Row>
        <Row>
          <Col xs={6} offset={{ xs: companies ? 0 : 3 }}>
            {companies ? (
              companies.map(company => {
                return (
                  <Bar key={company} onClick={() => this.onPreview(company)}>
                    <p>{company}</p>
                  </Bar>
                );
              })
            ) : (
              <Panel>
                <H3>It seems, you don't have any companies yet!</H3>
              </Panel>
            )}
          </Col>
          <Col xs={6}>
            {preview &&
              preview["1. symbol"] && (
                <Details
                  preview={preview}
                  // logo={logo}
                  // website={website}
                />
              )}
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

  margin: 10px auto 30px auto;
`;

const Bar = styled.div`
  width: 100%;

  display: flex;

  justify-content: space-between;
  align-items: center;

  background-color: ${color.cream};
  border-radius: 4px;
  border: 1px solid ${({ active }) => (active ? color.primary : color.cream)};
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);

  padding: 5px 10px;
  margin: 5px 0;

  float: left;
  cursor: pointer;

  &:hover {
    border-color: ${color.secondary};
  }
`;

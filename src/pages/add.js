import React, { Component, Fragment } from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import color from "../shared/colors";

import Search from "../components/Search";

class AddPage extends Component {
  state = { query: "", data: [] };

  getData = async () => {
    const { query } = this.state;
    const API_KEY = "DMXBSXODLRZLAMU3";

    await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`
    )
      .then(response => response.json())
      .then(result => this.setState({ data: result.bestMatches }))
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ query: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.getData();
  };

  render() {
    const { query, data } = this.state;

    return (
      <Fragment>
        <H1>Stock exchange</H1>
        <H2>Add Company</H2>
        <Search
          value={query}
          onChange={e => this.onChange(e)}
          onSubmit={e => this.onSubmit(e)}
        />
        <Row>
          <Col xs={6}>
            {data.map(entry => (
              <Bar key={entry["1. symbol"]}>
                <p>{entry["1. symbol"]}</p>
                <p>{entry["2. name"]}</p>
              </Bar>
            ))}
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default AddPage;

const H1 = styled.h1`
  color: ${color.primary};
  text-transform: uppercase;
`;
const H2 = styled.h2``;

const Bar = styled.div`
  width: 100%;

  display: flex;

  justify-content: space-between;
  align-items: center;

  background-color: ${color.cream};
  border-radius: 4px;
  border: 1px solid ${color.cream};
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);

  padding: 5px 10px;
  margin: 5px 0;

  float: left;
  cursor: pointer;

  &:hover {
    border-color: ${color.secondary};
  }
`;

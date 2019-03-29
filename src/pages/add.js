import React, { Component, Fragment } from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import color from "../shared/colors";

import Search from "../components/Search";

class AddPage extends Component {
  state = { query: "", data: [], no_match: false, preview: {} };

  getData = async () => {
    const { query } = this.state;
    const API_KEY = "DMXBSXODLRZLAMU3";

    await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`
    )
      .then(response => response.json())
      .then(
        result =>
          result.bestMatches.length > 0
            ? this.setState({ data: result.bestMatches })
            : this.setState({ data: [], no_match: true })
      )
      .catch(err => console.log(err));
  };

  onChange = e => this.setState({ query: e.target.value, no_match: false });

  onSubmit = e => {
    const { query } = this.state;

    e.preventDefault();
    if (query) return this.getData();
  };

  render() {
    const { query, data, no_match, preview } = this.state;

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
              <Bar
                key={entry["1. symbol"]}
                onClick={() => this.setState({ preview: entry })}
              >
                <p>{entry["1. symbol"]}</p>
                <p>{entry["2. name"]}</p>
              </Bar>
            ))}
            {no_match && <Panel>No match!</Panel>}
          </Col>
          <Col xs={6}>
            <Panel>
              <p>{preview["1. symbol"]}</p>
              <p>{preview["2. name"]}</p>
            </Panel>
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

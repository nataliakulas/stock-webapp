import React, { Component, Fragment } from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import color from "../shared/colors";
import { fetchData, fetchPrice } from "../shared/api";

import Search from "../components/Search";

class AddPage extends Component {
  state = { query: "", data: [], no_match: false, preview: {} };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  getData = async keywords => {
    const result = await fetchData(keywords);

    if (result.bestMatches.length > 0) {
      await this.setStateAsync({
        data: result.bestMatches
      });
    } else {
      await this.setStateAsync({
        data: [],
        no_match: true
      });
    }
  };

  getPrice = async symbol => {
    const result = await fetchPrice(symbol);
    console.log(result["Global Quote"]);
  };

  onChange = e => this.setState({ query: e.target.value, no_match: false });

  onSubmit = e => {
    const { query } = this.state;

    e.preventDefault();
    if (query) return this.getData(query);
  };

  onPreview = entry => {
    this.getPrice(entry["1. symbol"]);
    this.setState({ preview: entry });
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
                onClick={() => this.onPreview(entry)}
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
              <p>{preview["5. marketOpen"]}</p>
              <p>{preview["6. marketClose"]}</p>
              <p>{preview["05. price"]}</p>
              <p>{preview["09. change"]}</p>
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

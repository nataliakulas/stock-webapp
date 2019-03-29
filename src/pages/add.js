import React, { Component, Fragment } from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import color from "../shared/colors";
import { fetchData, fetchOtherData, fetchPrice } from "../shared/api";

import Search from "../components/Search";
import { ButtonMixin } from "../shared/mixins";

class AddPage extends Component {
  state = {
    query: "",
    data: [],
    no_match: false,
    preview: {},
    website: "",
    logo: ""
  };

  getData = async keywords => {
    const result = await fetchData(keywords);

    if (result.bestMatches.length > 0) {
      this.setState({
        data: result.bestMatches
      });
    } else {
      this.setState({
        data: [],
        no_match: true
      });
    }
  };

  getPrice = async symbol => {
    const result = await fetchPrice(symbol);

    this.setState(prevState => ({
      preview: { ...prevState.preview, ...result["Global Quote"] }
    }));
  };

  onChange = e => this.setState({ query: e.target.value, no_match: false });

  onSubmit = e => {
    const { query } = this.state;

    e.preventDefault();
    if (query) return this.getData(query);
  };

  getOtherData = async name => {
    const result = await fetchOtherData(name);

    if (result.length > 0) {
      this.setState({ website: result[0].domain, logo: result[0].logo });
    } else {
      this.setState({ website: "", logo: "" });
    }
  };

  onPreview = entry => {
    const re = /Inc/g;
    const name = entry["2. name"].replace(re, "").trim();

    this.getPrice(entry["1. symbol"]);
    this.getOtherData(name);
    this.setState({ preview: entry });
  };

  onClearInput = () => {
    this.setState({ query: "" });
  };

  onAdd = () => {
    const { preview } = this.state;
    console.log("add", preview["1. symbol"]);
  };

  render() {
    const { query, data, no_match, preview, logo, website } = this.state;

    return (
      <Fragment>
        <H1>Stock exchange</H1>
        <H2>Add Company</H2>
        <Search
          value={query}
          onChange={e => this.onChange(e)}
          onSubmit={e => this.onSubmit(e)}
          onClear={() => this.onClearInput()}
        />
        <Row>
          <Col xs={6}>
            {data.map(entry => (
              <Bar
                key={entry["1. symbol"]}
                active={entry["1. symbol"] === preview["1. symbol"]}
                onClick={() => this.onPreview(entry)}
              >
                <p>{entry["1. symbol"]}</p>
                <p>{entry["2. name"]}</p>
              </Bar>
            ))}
            {no_match && <Panel>No match!</Panel>}
          </Col>
          <Col xs={6}>
            {preview &&
              preview["1. symbol"] && (
                <Panel>
                  <Wrapper spaceBetween>
                    {logo ? (
                      <Img src={logo} alt={preview["2. name"]} />
                    ) : (
                      <Placeholder />
                    )}
                    <A
                      href={`http://${website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {website}
                    </A>
                  </Wrapper>
                  <Wrapper>
                    <H3>Symbol:</H3>
                    <P>{preview["1. symbol"]}</P>
                  </Wrapper>
                  <Wrapper>
                    <H3>Name:</H3>
                    <P>{preview["2. name"]}</P>
                  </Wrapper>
                  <Wrapper>
                    <H3>Trading hours:</H3>
                    <P>{preview["5. marketOpen"]}</P>
                    {"-"}
                    <P>{preview["6. marketClose"]}</P>
                  </Wrapper>
                  <Wrapper>
                    <H3>Price:</H3>
                    <P>{preview["05. price"]}</P>
                  </Wrapper>
                  <Wrapper>
                    <H3>Price change:</H3>
                    <P>{preview["09. change"]}</P>
                  </Wrapper>
                  <Button type="button" onClick={() => this.onAdd()}>
                    Add to my companies
                  </Button>
                </Panel>
              )}
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

const H3 = styled.h3`
  width: 110px;
  color: ${color.primary};
  font-size: 16px;
  margin: 10px;
`;

const P = styled.p`
  font-size: 16px;
  margin: 10px;
`;

const Img = styled.img`
  width: auto;
  height: 45px;
`;

const Placeholder = styled.div`
  height: 45px;
`;

const A = styled.a`
  color: ${color.primary};
  cursor: pointer;

  &:hover {
    text-decoration-color: ${color.secondary};
  }
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

  margin: 5px 0;
  padding: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ spaceBetween }) =>
    spaceBetween ? "space-between" : "flex-start"};
  align-items: center;

  &:first-of-type {
    margin-bottom: 20px;
  }
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

const Button = styled.button`
  ${ButtonMixin};

  width: 240px;
  margin: 20px auto;
`;

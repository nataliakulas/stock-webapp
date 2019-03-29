import React, { Component, Fragment } from "react";
// import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import color from "../shared/colors";

import Search from "../components/Search";

class AddPage extends Component {
  state = { query: "" };

  onChange = e => {
    this.setState({ query: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("search", this.state.query);
  };

  render() {
    const { query } = this.state;

    return (
      <Fragment>
        <H1>Stock exchange</H1>
        <H2>Add Company</H2>
        <Search
          value={query}
          onChange={e => this.onChange(e)}
          onSubmit={e => this.onSubmit(e)}
        />
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

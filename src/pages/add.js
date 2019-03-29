import React, { Component, Fragment } from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import color from "../shared/colors";
import { ButtonMixin } from "../shared/mixins";

class AddPage extends Component {
  state = { query: "" };

  onChange = e => {
    this.setState({ query: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { query } = this.state;

    return (
      <Fragment>
        <H1>Stock exchange</H1>
        <H2>Add Company</H2>
        <form onSubmit={e => this.onSubmit(e)}>
          <Row>
            <Col xs={4}>
              <Input
                id="search"
                type="text"
                name="search"
                placeholder="Type company symbol"
                value={query}
                onChange={e => this.onChange(e)}
              />
            </Col>
            <Col xs={2}>
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </form>
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

const Input = styled.input`
  width: 100%;
  height: 40px;

  font-family: "Lato", sans-serif;

  border: 1px solid ${color.primary};
  border-radius: 2px;
  margin: 0;
  padding: 0 5px;

  &:focus {
    border-color: ${color.secondary};
  }
`;

const Button = styled.button`
  ${ButtonMixin};

  width: 100%;
`;

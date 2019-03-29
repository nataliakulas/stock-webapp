import React from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";

import color from "../shared/colors";
import { ButtonMixin } from "../shared/mixins";

const Search = ({ value, onChange, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Row>
      <Col xs={4}>
        <Input
          id="search"
          type="text"
          name="search"
          placeholder="Type company symbol"
          value={value}
          onChange={onChange}
        />
      </Col>
      <Col xs={2}>
        <Button type="submit">Search</Button>
      </Col>
    </Row>
  </Form>
);

export default Search;

const Form = styled.form`
  margin-bottom: 20px;
`;

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

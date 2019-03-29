import React from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";

import color from "../shared/colors";
import { ButtonMixin } from "../shared/mixins";

const Search = ({ value, onChange, onSubmit, onClear }) => (
  <Form onSubmit={onSubmit}>
    <Row>
      <Col xs={4}>
        <Field>
          <Input
            id="search"
            type="text"
            name="search"
            placeholder="Type company symbol"
            value={value}
            onChange={onChange}
          />
          <RoundButton type="button" onClick={onClear}>
            x
          </RoundButton>
        </Field>
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

const Field = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: calc(100% - 40px);
  height: 40px;

  font-family: "Lato", sans-serif;

  border: 1px solid ${color.primary};
  border-radius: 2px;
  margin: 0;
  padding: 0 30px 0 5px;

  &:focus {
    border-color: ${color.secondary};
  }
`;

const Button = styled.button`
  ${ButtonMixin};

  width: 100%;
`;

const RoundButton = styled(Button)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0;
  margin-left: 10px;
`;

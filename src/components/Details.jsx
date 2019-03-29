import React from "react";
import styled from "styled-components";

import color from "../shared/colors";
import { ButtonMixin } from "../shared/mixins";

const Details = ({ preview, logo, website, onAdd }) => (
  <Panel>
    <Wrapper spaceBetween>
      {logo ? <Img src={logo} alt={preview["2. name"]} /> : <Placeholder />}
      <A href={`http://${website}`} target="_blank" rel="noopener noreferrer">
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
    {onAdd && (
      <Button type="button" onClick={onAdd}>
        Add to my companies
      </Button>
    )}
  </Panel>
);

export default Details;

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

const Button = styled.button`
  ${ButtonMixin};

  width: 240px;
  margin: 20px auto;
`;

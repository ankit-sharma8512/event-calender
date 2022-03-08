import React from 'react';
import styled from "styled-components";
import Screen from './Screen';
import Button from "./Button";
import Cover from "./Cover";
import Heading from './Heading';

// Main Homepage Component

function Home() {
  return (
    <Container>
      <Main>
        <Heading />
        <Cover />
        <Screen />
        <Button />
      </Main>
    </Container>
  )
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left:0;
  bottom: 0;
  right: 0;
  background: #162B32;
  z-index: -1;
  overflow: hidden;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
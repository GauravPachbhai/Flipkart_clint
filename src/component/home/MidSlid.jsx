import React from "react";
import styled from "@emotion/styled";
import Slides from "./Slide.jsx";
import { Box, useTheme } from "@mui/material";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
  width: '83%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}));

const RightComponent = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  padding: 5,
  marginTop: 10,
  marginLeft: 10, // Fixed typo: changed 'magtinLeft' to 'marginLeft'
  width: '16%',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}));

const MidSlid = ({ products, title, timer }) => {
  const theme = useTheme();
  const adURL = 'https://rukminim1.flixcart.com/fk-p-flap/530/810/image/398e46f3437be03a.jpeg?q=20';

  return (
    <Component>
      <LeftComponent theme={theme}>
        <Slides products={products} title={title} timer={timer} />
      </LeftComponent>
      <RightComponent theme={theme}>
        <img src={adURL} alt="ad" style={{ width: 217 }} />
      </RightComponent>
    </Component>
  );
};

export default MidSlid;

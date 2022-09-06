import * as React from "react";
// import styled from 'styled-components/macro';
import { HeaderBox, HeaderWrapper, MarginSpacer } from "./style";
import LogoSection from "./Components/Logo";
import Login from "./Components/LogIn";


const Header = () => {
  return (
    <>
      <HeaderBox>
        <HeaderWrapper>
          <LogoSection />
          <Login />
        </HeaderWrapper>
      </HeaderBox>
      <MarginSpacer />
    </>
  );
};

export default Header;

import * as React from 'react';
import styled from "styled-components"


const ButtonsWrapper = styled.div`
display:flex;
`



// interface TitleProps {
//     readonly marginRight?: string;
//   };
  
  const LoginButton = styled.div`
    /* margin-right: ${props => props.marginRight }; */
  `




const Login = ()=>{

  


    return(
        <ButtonsWrapper>
<LoginButton variant="secondary"  >Log In</LoginButton>

<LoginButton variant="secondary" >Sign Up</LoginButton>
</ButtonsWrapper>
    )
}

export default Login;
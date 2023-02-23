import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" alt="" /> 
            <SignUp> Get All Content</SignUp>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos enim adipisci assumenda, odio ducimus inventore totam ipsa quis necessitatibus sit expedita doloribus quaerat delectus.</Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
    //  <div>Login</div>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-size: cover;
  background-image: url("/images/login-background.jpg");

  background-position: top;
  background-repeat: no-repeat;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -15;
`;


const CTA = styled.div`

margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
align-items:center;
text-align:center;
margin-left: auto;
margin-right: auto;
transition-tiiming-function: ease-out;
transition-opacity: 0.2s;
width:100%;


`;

const CTALogoOne = styled.img`

margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
z-index: 5;

`;


const SignUp = styled.a`

    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    padding: 16.5px  0;
    border: 1px solid transparent;
    border-radius: 4px;



    &:hover {
        background-color: #0483ee
    }
`


const Description = styled.p`
    color: hsla(0, 0%, 95%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5em;
    letter-spacing: 1.5px;

`


const CTALogoTwo = styled.img`

    max-width: 600px;
    margin-bottom: 20px;
    display: inine-block;
    vertical-align: bottom;
    width: 100%;


`

export default Login;

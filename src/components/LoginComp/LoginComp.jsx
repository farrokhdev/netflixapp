import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { LoginForm } from "./LoginForm/LoginForm";
import { LoginSec, Background, Overlay } from "./StyleLogin";
import backImg from "../../images/register/background.jpg";
import { ImgFit } from "../../Variables";

export const LoginComp = () => {
  return (
    <>
      <LoginSec>
        <Background>
          <ImgFit src={backImg} />
        </Background>
        <Overlay />
        <LoginForm />
      </LoginSec>
    </>
  );
};

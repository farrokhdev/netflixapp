import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Form } from "./Form/Form";
import { RegisterSec, Background, Overlay } from "./StyleRegister";
import backImg from "../../images/register/background.jpg";
import { ImgFit } from "../../Variables";

export const RegisterComp = () => {
  const location = useLocation();

  return (
    <>
      <RegisterSec>
        <Background>
          <ImgFit src={backImg} />
        </Background>
        <Overlay />
        <Form />
      </RegisterSec>
    </>
  );
};

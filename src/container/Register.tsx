import * as React from 'react';

import RegisterForm from "../component/RegisterForm"
import { PageHeader } from 'antd';
import { Form, Button } from "antd"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

export interface RegisterProps {
  match: any
}





export default function Register(props: RegisterProps) {
  let history = useHistory()
  const loginToken = window.localStorage.getItem("loginToken")

  if (!loginToken) {
    history.push("/signIn")
  }

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="리뷰 등록"
        subTitle="리뷰를 등록해주세요"
      />

      <RegisterForm match={props.match}></RegisterForm>

    </>
  );
}

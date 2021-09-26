import * as React from 'react';

import RegisterForm from "../component/RegisterForm"
import { PageHeader } from 'antd';
import {Form, Button} from "antd"
import styled from "styled-components"
import {useHistory} from "react-router-dom"

export interface  RegisterProps {
}

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
`

  

export default function Register (props:  RegisterProps) {
    let history = useHistory()
  return (
      <>
           <PageHeader
            className="site-page-header"
            onBack={() => history.goBack()}
            title="리뷰 등록"
            subTitle="리뷰를 등록해주세요"
        />
    <Container>
        <RegisterForm></RegisterForm>
 

        
    </Container>
    </>
  );
}

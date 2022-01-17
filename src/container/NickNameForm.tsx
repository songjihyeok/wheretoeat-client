import React, { ReactElement } from 'react'
import { Form, Input, Button, Typography } from 'antd';
import styled from "styled-components"
import initializeFirebase from "../firebaseConfig"
import { getFirestore, addDoc, collection, query, where,getDocs ,setDoc, doc,onSnapshot} from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom"


const auth = getAuth();
initializeFirebase()

const db = getFirestore();


const { Title } = Typography;

interface Props {

}

const CenterLayout = styled.div`
    height: 100vh;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
`



export default function NickNameForm({ }: Props): ReactElement {
    let history:any = useHistory()
    const userId   = history?.location?.state?.userId
    const token = history?.location?.state?.token
    const onFinish = async(values: any) => {

        let dataConfig = {
            id: userId,
            ...values
          }
        await addDoc(collection(db, "user"),  dataConfig)
        window.localStorage.setItem("loginToken", token)
        history.push("/")
    };

    const onFinishFailed = (errorInfo: any) => {
        
    };
    return (
        <CenterLayout>
            <Title >닉네임을 등록해주세요</Title>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="닉네임"
                    name="username"
                    rules={[{ required: true, message: '닉네임 등록해주세요!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        등록하기
        </Button>
                </Form.Item>
            </Form>
        </CenterLayout>

    )
}

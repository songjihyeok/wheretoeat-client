import React, { ReactElement, useState } from 'react'
import { PageHeader } from 'antd';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { Row, Col, Avatar } from "antd"
import { UserOutlined, DeleteOutlined } from '@ant-design/icons';
import styled from "styled-components"
import { LogoutOutlined } from "@ant-design/icons"
import Icon from '@ant-design/icons';
import { useHistory } from "react-router-dom"
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
auth.languageCode = 'it'
interface Props {

}

const Container = styled(Row)`
    display: flex; 
    justify-content: center;
    height: calc(100% - 72px);
    padding-bottom: 30%;
    align-items: center;
    flex-direction: column;
`
const StyledLogOut = styled(LogoutOutlined)`
  font-size: 30px;
`

const StyledRow = styled(Row)`
    width: 100%;
    display: flex;
    alignItems: center;
    padding: 5px 30px; 
`




export default function Profile({ }: Props): ReactElement {
    const loged = window.localStorage.getItem("loginToken");
    let history = useHistory()
    let [isLoged, setIsLoged] = useState(loged)

    const onLogoutHandler = () => {
        console.log("logout")
        setIsLoged(null)
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("로그아웃 되었습니다.")
            window.localStorage.removeItem("loginToken");
            history.goBack()
        }).catch((error) => {
            // An error happened.
        });
    }

    const onLoginHandler =()=>{
        const auth = getAuth()
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential: any = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
    
                window.localStorage.setItem("loginToken", token)
                console.log("login", user)
                history.push("/")

                // ...
            }).catch((error) => {
                // Handle Errors here.
                alert("로그인에 실패했습니다.")
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const onDeleteHandler=()=>{
        const auth = getAuth()

        auth.currentUser?.delete().then(()=>{
            window.localStorage.removeItem("loginToken");
            history.goBack()
        })




    }

    return (
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.goBack()}
                title="회원 정보"
                subTitle="회원 정보 관리"
            />
            <Container>
                <Avatar
                    style={{ marginBottom: 30 }}
                    size={150}
                    icon={<UserOutlined />} />
                {isLoged ? 
                <>
                <StyledRow>
                    <Col span={6} style={{ fontSize: 30 }}><UserOutlined /></Col>
                    <Col span={18} style={{ fontSize: 30, textAlign: "left" }}>닉네임</Col>
                </StyledRow>
                <StyledRow style={{ width: "100%", display: "flex", alignItems: "center" }}  onClick={onLogoutHandler} >
                    <Col span={6}><StyledLogOut/></Col>
                    <Col span={18} style={{ fontSize: 30, textAlign: "left" }}>로그아웃</Col>
                </StyledRow>
                <StyledRow style={{ width: "100%", display: "flex", alignItems: "center" }} onClick={onDeleteHandler}>
                    <Col span={6} style={{ fontSize: 30 }} ><DeleteOutlined /></Col>
                    <Col span={18} style={{ fontSize: 30, textAlign: "left" }}>탈퇴</Col>
                </StyledRow>
                </>
                 : 
                 <StyledRow onClick={onLoginHandler}>
                 <Col span={6} style={{ fontSize: 30 }}><UserOutlined /></Col>
                 <Col span={18} style={{ fontSize: 30, textAlign: "left" }}>로그인 하기</Col>
             </StyledRow>
                }
                </Container>
     
        </>
    )
}

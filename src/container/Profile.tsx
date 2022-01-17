import React, { ReactElement, useState,useEffect } from 'react'
import { PageHeader } from 'antd';
import { getAuth, signInWithPopup,onAuthStateChanged, GoogleAuthProvider,signOut } from "firebase/auth";
import { Row, Col, Avatar } from "antd"
import { UserOutlined, DeleteOutlined } from '@ant-design/icons';
import styled from "styled-components"
import { LogoutOutlined } from "@ant-design/icons"
import Icon from '@ant-design/icons';
import initializeFirebase from "../firebaseConfig"
import { getFirestore, addDoc, collection, query, where, getDocs, getDoc, doc } from "firebase/firestore"
import { Redirect, useHistory } from "react-router-dom"


initializeFirebase()

const db = getFirestore();
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
    let [userName , setUserName]= useState("")
    let [isLoged, setIsLoged] = useState(loged)

    const onLogoutHandler = () => {
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

    const onDeleteHandler=()=>{
        const auth = getAuth()

        auth.currentUser?.delete().then(()=>{
            window.localStorage.removeItem("loginToken");
            history.goBack()
        })
    }


    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;

            const shopRef: any = collection(db, "user");
            const q = query(shopRef, where("id", "==", uid));
            const querySnapshot = await getDocs(q);

            if(querySnapshot.docs){
                let user: any = []
                querySnapshot.forEach(async (doc) => {
                    user.push(doc.data())
                });
                setUserName(user[0]?.username)
            }
        }
        });
    },[])





    if(!isLoged){
    return <Redirect to="/signIn" />
    }else{
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
                    <StyledRow>
                        <Col span={6} style={{ fontSize: 30 }}><UserOutlined /></Col>
                        <Col span={18} style={{ fontSize: 30, textAlign: "left" }}>{userName}</Col>
                    </StyledRow>
                    <StyledRow style={{ width: "100%", display: "flex", alignItems: "center" }}  onClick={onLogoutHandler} >
                        <Col span={6}><StyledLogOut/></Col>
                        <Col span={18} style={{ fontSize: 30, textAlign: "left" }}>로그아웃</Col>
                    </StyledRow>
                    {/* <StyledRow style={{ width: "100%", display: "flex", alignItems: "center" }} onClick={onDeleteHandler}>
                        <Col span={6} style={{ fontSize: 30 }} ><DeleteOutlined /></Col>
                        <Col span={18} style={{ fontSize: 30, textAlign: "left" }}>탈퇴</Col>
                    </StyledRow> */}
                    </Container>     
            </>
        )
    }
}

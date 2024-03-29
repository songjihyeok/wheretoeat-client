import * as React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Typography, Divider, Button, PageHeader } from 'antd';
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import initializeFirebase from "../firebaseConfig"
import { getFirestore, addDoc, collection, query, where, getDocs, getDoc, doc } from "firebase/firestore"
initializeFirebase()

const db = getFirestore();

const { Title, Paragraph, Text } = Typography;
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const auth = getAuth();
auth.languageCode = 'it'


export interface ISignInProps {
}

const CenterLayout = styled.div`
    display: flex;
    align-items: center; 
    justify-content:center;
    max-width: 440px;
    height: calc(100vh - 144px);
`


export default function SignIn(props: ISignInProps) {
    let history = useHistory()

    const onSignHandler = () => {
        window.localStorage.removeItem("loginToken")
        const auth = getAuth()
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential: any = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const userRef: any = collection(db, "user");
                const q = query(userRef, where("id", "==", user.uid));
                const querySnapshot =  getDocs(q);
                // ...
                return querySnapshot.then((result)=>{
                    return [token , result, user.uid]
                })
            }).then((result)=>{
                
                const [ token , querySnapshot, userId ] = result
    
                let resultArray = []
                if(querySnapshot?.docs){
                    resultArray = querySnapshot?.docs
                }
                if( resultArray.length>0){
                    window.localStorage.setItem("loginToken", token)
                    history.push("/")
                }else{
                    history.push({
                        pathname:"/nickNameForm",
                        state: {
                            token: token,
                            userId: userId
                        }   
                    })
                }
          
            })
            .catch((error) => {
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



    return (<>
        <PageHeader
            className="site-page-header"
            onBack={() => history.push("/")}
            title="로그인"
            subTitle="로그인해주세요"
        />
        <CenterLayout>
            <div>
                <Title>
                    로그인
        </Title>
                <Text>
                    장소 등록과 리뷰를 남기려면 로그인해주세요.
        </Text>
                <div onClick={onSignHandler} style={{ maxWidth: 250 }}>
                    <img src={"image/googleButtonImage.png"} style={{ width: "100%" }}></img>
                </div>
            </div>
        </CenterLayout>
    </>
    );
}

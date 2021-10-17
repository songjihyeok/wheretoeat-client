import React, {useState} from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import ImageCrop from "../component/ImageCropAndUpload"
import StarRating from "../component/StarRating"
import styled from "styled-components"
import {useHistory} from "react-router-dom"
import initializeFirebase from "../firebaseConfig"
import { getFirestore, addDoc, collection, query, where,getDocs ,setDoc, doc,onSnapshot} from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
initializeFirebase()

const db = getFirestore();


export interface IRegisterFormProps {
  match:any
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label}은 적어주세요',
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const StyledItem = styled(Form.Item)`
    .ant-upload-list{
      display: flex;
    }
  `


export default function RegisterForm(props: IRegisterFormProps) {
  const [Rating, setRating] = useState(2.5)
  const [urlList, setUrlList] = useState([])
  const loginToken = window.localStorage.getItem("loginToken")
  let history = useHistory()
  const place_id =  props.match.params.id
  console.log("place_id",  place_id)


  const onFinish = async (values: any) => {
    if(!loginToken){
      history.push("/signIn")
    }

    const auth = getAuth();
    onAuthStateChanged(auth, async(user) => {
        try {
          if (!user){
            return
          } 
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log("user", user)
            let dataConfig = {
            uid: user.uid,
            title: values?.review?.name || "",
            content: values?.review?.introduction || "",
            avatar: "",
            rating: Rating,
            urlList: urlList,
            date: new Date()
          }

          const shopRef:any = collection(db, "shop");
          const q = query(shopRef, where("id", "==",  place_id));
          const querySnapshot = await getDocs(q);


          querySnapshot.forEach(async(element) => {
            if(element){
              await addDoc(collection(db, "shop",  element.id,  "review"),  dataConfig);
              }
            });
            history.goBack();
        }
        catch(e){
          console.error(e)
        }
    });
  };

const getUrlList = (list:any)=>{
    setUrlList(list)
}

  return (
    <>
      <StarRating setRating={setRating}></StarRating>
      <Form {...layout} style={{ width: "100%", padding: '0 10%' }} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['review', 'name']} label="제목" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['review', 'introduction']} label="후기 내용">
          <Input.TextArea style={{ height: '100px', whiteSpace: "pre-wrap"}} />
        </Form.Item>
        <StyledItem label="이미지" style={{ display: "flex" }}>
          <ImageCrop getUrlList ={getUrlList } urlList={urlList}></ImageCrop>
        </StyledItem>
        <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
          <Button type="primary"   htmlType="submit"   >
            리뷰 등록
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}


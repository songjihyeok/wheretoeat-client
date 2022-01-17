import React, { useState, useEffect ,useLayoutEffect} from 'react';
import styled from "styled-components"
import { Row, Col, Popconfirm, Alert } from "antd"
import { Button } from "antd"
import { useHistory } from 'react-router-dom';
import initializeFirebase from "../firebaseConfig"
import { initializeApp } from 'firebase/app';

import { getFirestore, addDoc, collection, query, where,getDocs ,getDoc, onSnapshot} from "firebase/firestore"
import { IdcardOutlined } from '@ant-design/icons';

export interface ICompanyThumbProps {
  theCompanyData: any
  isReview: boolean
  setSuccessAlert: any
}
initializeFirebase()

const db = getFirestore();

const Thumb = styled.div`
max-width: 492px;
width: 100%;
background-color: white;
height: 100px;
padding: 10px;
border-radius: 10px;
margin: 0 10px;
background: rgb(255, 255, 255);
box-shadow: rgb(0 0 0 / 20%) 0px 8px 16px 0px;
`
const Address = styled.div`
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
`
const ReviewButtonContainer = styled(Col)`
align-items: center;
display: flex; 
justify-content: center;
`
const CenterRow = styled(Row)`
display: flex; 
justify-content: center;
`
const ThumbContainer = styled.div<{isReview: boolean}>`
width:  ${props=> props?.isReview ? "350px" : "100%"};;
position:  ${props=> props?.isReview ? "static" : "absolute"}; 
display:flex;
bottom: 20px; 
z-index: 2;
justify-content:center;
`

const CompanyThumb: React.FC<ICompanyThumbProps> = (props) => {
  const [iisRegistered, setisRegistered] = useState(false)
  let history = useHistory()

  const placeUrl = () => {
    window.open(props.theCompanyData.place_url, "_blank")
  }
  const registerHandler = () => {

    const token = localStorage.getItem("loginToken")
    if(!token){
        history.push("/signIn")
        return
    }

    setisRegistered(true)
    props.setSuccessAlert(true)
    registerInfirebase()
    // window.setTimeout(()=> setSuccessAlert(false), 2000);
  }

    const registerInfirebase = async()=>{

      const {id, place_name, place_url, x, y} = props.theCompanyData

      try {
        const docRef = await addDoc(collection(db, "shop"),{
          id,
          place_name,
          place_url,
          x,
          y
        })
      }
      catch(e){
        console.error(e)
      }
    }


  const reviewHandler = () => {
    const {id}= props.theCompanyData
    history.push(`/review/${id}`)
  }

  const cancel = () => {
    
  }

 useLayoutEffect(()=>{
  if(!props.isReview){
    checkCompanyRegistered()
  }
 })

const checkCompanyRegistered = async()=>{
  const {id, place_name, place_url, x, y} = props.theCompanyData
  let result:any = []
  const citiesRef = collection(db, "shop");
  const q = query(citiesRef, where("id", "==",  id));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    result.push(doc.data())
  });

  if(result.length>0){
    setisRegistered(true)
  }else{
    setisRegistered(false)
  }
}


  const isReviewHandler = () => {
    if (!props.isReview) {

      if (!iisRegistered) {
        return <ReviewButtonContainer span={12} >  <Popconfirm
          title="장소를 등록하시겠습니까?"
          onConfirm={registerHandler}
          onCancel={cancel}
          okText="네"
          cancelText="아니오"
        >
          <Button>장소 등록</Button>
        </Popconfirm>
        </ReviewButtonContainer>
      } else {
        return <ReviewButtonContainer span={12} >
          <Button onClick={reviewHandler}>리뷰 확인</Button>
        </ReviewButtonContainer>
      }
    }
  }


  return (
    <>
    <ThumbContainer isReview={props.isReview}>
      <Thumb>
        <Row style={{height: "100%"}}>
          <Col span={!props.isReview ? 12 : 24}>
            <div>
              {props.theCompanyData.place_name}
            </div>
            <Address>
              {props.theCompanyData.road_address_name}
            </Address>

            <CenterRow>
              <Button type="link" size="middle" onClick={placeUrl}>
                장소 링크
                </Button>
            </CenterRow>
          </Col>
          {isReviewHandler()}
        </Row>
      </Thumb>
    </ThumbContainer>
    </>
  );
}

export default CompanyThumb
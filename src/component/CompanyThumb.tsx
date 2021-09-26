import React, {useState} from 'react';
import styled from "styled-components"
import {Row, Col, Popconfirm} from "antd"
import {Button} from "antd"
import { useHistory} from 'react-router-dom';

export interface ICompanyThumbProps {
  theCompanyData: any
  isReview: boolean
}

const CompanyThumb: React.FC <ICompanyThumbProps> =(props)=> {
  const ThumbContainer = styled.div`
  width: 100%;
  position:  ${props.isReview? "static": "absolute"}; 
  display:flex;
  bottom: 10px; 
  z-index: 2;
  justify-content:center;
`
const Thumb = styled.div`
  max-width: 492px;
  width: 100%;
  background-color: white;
  height: 100px;
  padding: 10px;
  margin: 0 10px;
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

  
  const [iisRegistered, setisRegistered] = useState(true)
  let history = useHistory()

const placeUrl =()=>{
  window.open( props.theCompanyData.place_url, "_blank")
}
const registerHandler=()=>{
  setisRegistered(false)
}

const reviewHandler= ()=>{
  history.push("/review")
}

const cancel=()=>{

}

const isReviewHandler =()=>{
  if(!props.isReview ){
    if( iisRegistered){
      return            <ReviewButtonContainer span={12} >  <Popconfirm
      title="장소를 등록하시겠습니까?"
      onConfirm={registerHandler}
      onCancel={cancel}
      okText="네"
      cancelText="아니오"
    >
         <Button>장소 등록</Button>  
      </Popconfirm>
                </ReviewButtonContainer>
    } else{
     return <ReviewButtonContainer span={12} >
      <Button onClick={reviewHandler}>리뷰 확인</Button> 
      </ReviewButtonContainer>
    }
  }
}


  return (
    <ThumbContainer>
      <Thumb>
        <Row >
          <Col span={!props.isReview? 12 : 24}>
              <div>
                    {props.theCompanyData.place_name}
              </div>
              <Address>
                    {props.theCompanyData.road_address_name}
              </Address>
              <Row>
              <Button type="link" size="middle" onClick={placeUrl}>
                  장소 링크
                </Button>
              </Row>
          </Col>
  
            {isReviewHandler()}
        </Row>
      </Thumb>
    </ThumbContainer>
  );
}

export default CompanyThumb
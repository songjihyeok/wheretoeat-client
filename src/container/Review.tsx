import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { Space, List, Avatar } from "antd"
import { MessageOutlined, LikeOutlined, StarOutlined, PlusCircleFilled } from '@ant-design/icons';
import CompanyThumb from "../component/CompanyThumb"
import { Link } from "react-router-dom"
import { PageHeader } from 'antd';
import { useHistory } from "react-router-dom"
import initializeFirebase from "../firebaseConfig"

import { getFirestore, addDoc, collection, query, where,getDocs ,getDoc,  doc} from "firebase/firestore"
initializeFirebase()

const db = getFirestore();

export interface ReviewProps {
  match:any
}

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100vh;
`

const ReviewPlusCircleFilled = styled(PlusCircleFilled)`
  position: fixed;
  bottom: 30px; 
  right: 30px; 
`

export default function Review(props: ReviewProps) {
  let [theCompanyData, setTheCompanyData] = useState({
    address_name: "서울 서초구 서초동 1321",
    category_group_code: "",
    category_group_name: "",
    category_name: "서비스,산업 > 에너지 > 에너지기업",
    distance: "",
    id: "609743440",
    phone: "02-6931-0901",
    place_name: "솔라커넥트",
    place_url: "http://place.map.kakao.com/609743440",
    road_address_name: "서울 서초구 서초대로 396",
    x: "127.02476096797658",
    y: "37.49656165613922"
  })
  const  [review, setReview]  = useState([])
  const place_id =  props.match.params.id
  let history = useHistory()
  let registerUrl = `/register/${place_id}`

  const IconText = ({ icon, text }: { icon: any; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  useEffect(()=>{
    getReviewList()
  },[])

 const getReviewList =async ()=>{

  const shopRef:any = collection(db, "shop");
  const q = query(shopRef, where("id", "==",  place_id));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async(doc) => {
    const Ref:any = await collection(db, "shop",   doc.id,  "review");
    const querySnapshot = await getDocs(Ref);
    let reviewList:any = []
    querySnapshot.forEach(async(doc) => {
      console.log(doc.id, " => ", doc.data());
      reviewList.push(doc.data())
    });
    setReview(reviewList)
  });
 }

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="리뷰 목록"
        subTitle="후기를 공유합니다"
      />
      <Container>
        <CompanyThumb theCompanyData={theCompanyData} isReview={true} setSuccessAlert={null}></CompanyThumb>
        <List
          itemLayout="vertical"
          size="large"
          // pagination={{
          //   onChange: page => {
          //     console.log(page);
          //   },
          //   pageSize: 3,
          // }}
          dataSource={review}
          // footer={
          //   <div>
          //     <b>ant design</b> footer part
          //   </div>
          // }
          renderItem={(item: any | null) => (

          
            <List.Item
              key={item.title}
              // actions={[
              //   <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              //   <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              //   <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              // ]}
              extra={
               item.urlList.map((element:any)=>{
                 console.log("element", element)
                  return <img src={element}></img>
                })
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
        <Link to={registerUrl}>
          <ReviewPlusCircleFilled style={{ fontSize: '50px' }} />
        </Link>
      </Container>

    </>
  );
}

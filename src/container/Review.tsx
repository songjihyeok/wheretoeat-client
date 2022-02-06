import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { Space, List, Avatar } from "antd"
import { MessageOutlined, LikeOutlined, StarOutlined, PlusCircleFilled } from '@ant-design/icons';
import CompanyThumb from "../component/CompanyThumb"
import { Link } from "react-router-dom"
import { PageHeader, Typography, Row, Divider, Spin } from 'antd';
import { useHistory } from "react-router-dom"
import initializeFirebase from "../firebaseConfig"
import StarRatingComponent from 'react-star-rating-component';
import SlideShow from "component/SlideShow"

import { getFirestore, addDoc, collection, query, where, getDocs, getDoc, doc } from "firebase/firestore"
initializeFirebase()

const { Paragraph } = Typography

const db = getFirestore();

export interface ReviewProps {
  match: any
}

const StyledList = styled(List)`
  margin: 10px 0;
  .ant-list-item{
    margin: 20px 0;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 20%) 0px 8px 16px 0px;
    border-radius: 10px;
    flex-direction: column;
    .dv-star-rating{
      font-size: 40px;
    }
    .ant-list-item-extra{
      margin-left: 0px; 
      display: flex;
      justify-content: center;
    }
    .ant-list-item-meta{
      align-items: center;
      width: 100%;
      margin: 15px 0;
    }
    .ant-list-item-meta-title{
      margin-bottom:0;
    }
  }
`

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: start;
    height: 100vh;
`

const StyledLink = styled(Link)`
  position: fixed;
  bottom: 30px; 
  left: calc(50% + 100px); 
  z-index: 5;
`

const StyledContents = styled(Paragraph)`
  margin-top: 10px;
  max-width: 280px; 
  text-align:left;
`



const ReviewPlusCircleFilled = styled(PlusCircleFilled)`

`

export default function Review(props: ReviewProps) {
  let [theCompanyData, setTheCompanyData]: any = useState({
    address_name: "서울 서초구 서초동 1321",
    category_group_code: "",
    category_group_name: "",
    category_name: "서비스,산업 > 에너지 > 에너지기업",
    distance: "",
    id: "609743440",
    phone: "02-6931-0901",
    place_name: "엔라이튼",
    place_url: "http://place.map.kakao.com/609743440",
    road_address_name: "서울 서초구 서초대로 396",
    x: "127.02476096797658",
    y: "37.49656165613922"
  })
  const [review, setReview] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const place_id = props.match.params.id
  const loginToken = window.localStorage.getItem("loginToken")
  let history = useHistory()
  let registerUrl = `/register/${place_id}`

  const IconText = ({ icon, text }: { icon: any; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  useEffect(() => {
    getReviewList()
  }, [])

  const getReviewList = async () => {
    setLoading(true)
    const shopRef: any = collection(db, "shop");
    const q = query(shopRef, where("id", "==", place_id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      const shopData = doc.data()
      setTheCompanyData(shopData)
      const Ref: any = await collection(db, "shop", doc.id, "review");
      const querySnapshot = await getDocs(Ref);
      let reviewList: any = []
      querySnapshot.forEach(async (doc) => {
        reviewList.push(doc.data())
      });
      reviewList.sort((a: any, b: any) => b?.date?.seconds - a?.date?.seconds)

      // const result = await Promise.all( reviewList.map(async(element)=>{
      //   const shopRef: any = collection(db, "shop");
      //   console.log(shopRef)

      // const q = query(shopRef, where("id", "==", element.id));
      // const querySnapshot = await getDocs(q);
      // let usernames: any = []
      // querySnapshot.forEach(async (doc) => {
      //   usernames.push(doc.data())
      // });
      // if( usernames[0]?.username ){
      //   element.username = usernames[0]?.username 
      // }
      // return element 
      // })
      // )
      setReview(reviewList)
      setLoading(false)
    })
  }


  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.replace("/list")}
        title="리뷰 목록"
        subTitle="후기를 공유합니다"
      />
      <Container>
        {loading ? <Spin></Spin> : <>
          <CompanyThumb theCompanyData={theCompanyData} isReview={true} setSuccessAlert={null}></CompanyThumb>
          <StyledList
            size="large"
            style={{
              maxWidth: 330
            }}
            dataSource={review}
            renderItem={(item: any | null, index) => {
              return <List.Item
                key={index}
                extra={<><SlideShow imageList={item?.urlList} />
                  <div style={{ fontSize: 30 }}>
                  </div>
                </>}
              // actions={[
              //   <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              //   <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              //   <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              // ]}

              >
                <List.Item.Meta
                  avatar={<div style={{ display: "flex" }}>
                    <Avatar src={item.avatar} />
                    <div style={{ marginLeft: 10, display: "flex", alignItems: "center" }}>{item.username}</div>
                  </div>}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                <StarRatingComponent
                  name="starrate"
                  starCount={5}
                  value={item.rating}
                />
                <Row>
                  <StyledContents >
                    {item.content}
                  </StyledContents>
                </Row>
              </List.Item>
            }}
          />
        </>
        }
        <StyledLink to={registerUrl}>
          <ReviewPlusCircleFilled style={{ fontSize: '50px' }} />
        </StyledLink>
      </Container>
    </>
  );
}

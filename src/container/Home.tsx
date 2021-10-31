import React, { ReactElement } from 'react'
import { Typography, Divider, Row, Col, Card } from 'antd';
import Search from "../assets/home/search.png"
import Register from "../assets/home/register.png"
import MakeReview from "../assets/home/makeReview.png"
import Login from "../assets/home/login.png"
import Review from "../assets/home/review.png"
import styled from "styled-components"
import { PageHeader } from 'antd';
import { useHistory } from "react-router-dom"
const { Title, Paragraph, Text, Link } = Typography;

interface IProps {

}

const StyledText = styled(Text)`
    font-size: 25px;
`

const StyledRow = styled(Row)`
    margin: 20px 0;
`


export default function Home({ }: IProps): ReactElement {
    let history = useHistory()
    return (
        <>
               <PageHeader
                className="site-page-header"
                onBack={() => history.push("/")}
                title="홈페이지"
                subTitle="서비스 소개"
            />
            <Typography>
            <div style={{ marginTop: 30 }}>
                <Title >나의 맛집을 모두에게 소개하세요</Title>
            </div>
            <Divider></Divider>
            <Card>
                <StyledRow>
                    <Col span={24}> <StyledText>1. 상점을 검색하고</StyledText></Col>

                </StyledRow>
                <Row>
                    <Col span={24} >  <img src={Search}></img></Col>
                </Row>
                <StyledRow>
                    <Col span={24}> <StyledText>2. 간편하게 로그인 한 이후에</StyledText><br /></Col>

                </StyledRow>

                <Col span={24} >  <img src={Login}></img></Col>
                <StyledText>3. 장소를 등록하고</StyledText><br />

                <StyledRow>
                    <Col span={24} >  <img src={Register}></img></Col>
                </StyledRow>

                <StyledText>4. 리뷰를 남기세요.</StyledText>
                <StyledRow>
                    <Col span={24} >  <img src={MakeReview}></img></Col>
                </StyledRow>
                <StyledText>5. 리뷰를 보고 뭘 먹을지 선택하세요.</StyledText>
                <StyledRow>
                    <Col span={24} >  <img src={Review}></img></Col>
                </StyledRow>
            </Card>
        </Typography>
        </>
        
    )
}

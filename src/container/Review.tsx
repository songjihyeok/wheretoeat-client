import React, {useState} from 'react';
import styled from "styled-components"
import {Space, List , Avatar } from "antd"
import { MessageOutlined, LikeOutlined, StarOutlined, PlusCircleFilled } from '@ant-design/icons';
import CompanyThumb from "../component/CompanyThumb"
import {Link} from "react-router-dom"
import { PageHeader } from 'antd';
import {useHistory} from "react-router-dom"

export interface  ReviewProps {

}

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    height: 100vh;
`

const ReviewPlusCircleFilled = styled(PlusCircleFilled)`
  position: fixed;
  bottom: 30px; 
  right: 30px; 
`

export default function Review (props:  ReviewProps) {
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

 let history = useHistory()

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text}: {icon: any;  text:string}) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);



  return (
    <>
    <PageHeader
            className="site-page-header"
            onBack={() => history.goBack()}
            title="리뷰 목록"
            subTitle="후기를 공유합니다"
        />
    <Container>

    <CompanyThumb theCompanyData={theCompanyData} isReview={true}></CompanyThumb>
          <List
    itemLayout="vertical"
    size="large"
    // pagination={{
    //   onChange: page => {
    //     console.log(page);
    //   },
    //   pageSize: 3,
    // }}
    dataSource={listData}
    // footer={
    //   <div>
    //     <b>ant design</b> footer part
    //   </div>
    // }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
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
    </Container>
    <Link to="/register">
      <ReviewPlusCircleFilled style	={{fontSize: '50px'}}/>
    </Link>
    </>
  );
}

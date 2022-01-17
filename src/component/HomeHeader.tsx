import React, { useState } from "react";
import { Row, Col, Input, Form } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Icon from "@ant-design/icons"

import Scroll from "./Scroll"
import SearchIcon from "../assets/HomeHeader/searchIcon.png";
import Home from "../assets/shopList/home.png";
import Add from "../assets/shopList/addShop.png";
import {SearchOutlined }from "@ant-design/icons"
import Cart from "../assets/shopList/shopping-cart.png";
import SearchTags from "./SearchTags"

const StyledLayout = styled.div`
  height: 160px;
  width: 100%;
  background-color: #6400ff;
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  flex-direction: column;
`;
const StyledHome = styled.img`
  position: absolute;
  top: 16px;
  left: 13px;
  font-size: 28px;
  color: white;
  width :25px; 
`;

const StyledPlus = styled.img`
  position: absolute;
  top: 16px;
  font-size: 28px;
  width :25px; 
  right: 13px;
  top: 16px;
`;
const StyledCart = styled.img`
  position: absolute;
  right: 60px;
  font-size: 28px;
  right: 13px;
  width :30px; 
`;

const StyledInput = styled(Input)`
  border-radius: 10px;
  background-color: white;
  border: none;
  color: black; 
  width: 100%;
  padding-left: 32px;
  height: 40px;
`;

const StyledSearch = styled(SearchOutlined)`
  width: 25px;
  height: 30px;
  position:absolute;
  font-size: 25px;
  z-index: 5;
  right: 15px;
  margin-top: 7px;
  margin-left: 5px;
`;

function HomeHeader(props) {
  let history = useHistory();
  const [isSearch, setIsSearch] = useState(false)
  const [search, setSearch] = useState("")
  const [tags, setTags]:any= useState([])

  const onHome = () => {
    history.push("/home");
  };
  
  const onSearch = (e)=>{
    setIsSearch(true)
    const mergedArray = [...tags, search]
    setTags(mergedArray)
  }

  return (
    <StyledLayout>
      <Row style={{ height: 260, width: "100%", justifyContent:"center" , position: "relative" }}>
        <StyledHome src={Home} onClick={onHome} />
        <Col style={{ marginTop: 16 }}>{ isSearch? "검색" : props.title}</Col>
        <StyledPlus src={Add} onClick={()=> history.push("/register")}></StyledPlus>
        {/* <StyledCart src={Cart}></StyledCart> */}
      </Row>
      <Form style={{ width: "95%",position: "relative" }}>
        <StyledInput   placeholder="지역, 메뉴 등을 검색하세요" onChange={(e)=> setSearch(e.target.value)}></StyledInput>        
        <StyledSearch src={SearchIcon} onClick={onSearch}></StyledSearch>
      </Form>
        {isSearch? <SearchTags tags={tags} setTags={setTags}></SearchTags> :<Scroll></Scroll>}
    </StyledLayout>
  );
}

export default HomeHeader;

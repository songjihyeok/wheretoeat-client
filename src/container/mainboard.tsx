import React, { useState } from 'react';
import { Map } from "../component/map"
import SearchInput from "../component/Search"
import { getAuth, signOut } from "firebase/auth";
import CompanyThumb  from "../component/CompanyThumb"
import { Alert } from "antd"
import styled from "styled-components"
import {LogoutOutlined,UserOutlined} from "@ant-design/icons"
import { useHistory } from "react-router-dom"
import Logo from "../assets/havelunchLogo.png"
export interface MainboardProps{

} 

const Search = styled(SearchInput)`
position:absolute;
top: 30px; 
`
const StyledUserOutlined  = styled(UserOutlined)`
  position: absolute;
  right: 30px; 
  font-size: 30px;
  z-index: 3;
  top: 15px; 
`
const StyledImage = styled.img`
  position:absolute;
  top: 15px; 
  left: 15px;
  z-index: 3;
  height: 40px;
  width: 40px; 
`


const Mainboard: React.FC<MainboardProps> = ( ) => {
  const loged = window.localStorage.getItem("loginToken");
 const history = useHistory()
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
  const [successAlert, setSuccessAlert ] = useState(false)



  const getTheCompanyData = (companyData: any) => {
    setTheCompanyData(companyData)
  
  }

  const onSetSuccessAlert = ()=> {
    setSuccessAlert(true)
  }

  return (
      <>
      <StyledImage src={Logo} onClick={()=>history.push("/home")}></StyledImage>
        <Search getTheCompanyData={getTheCompanyData}></Search>
        <Map setTheCompanyData={setTheCompanyData}></Map>
        <StyledUserOutlined onClick={()=> history.push("/profile")}></StyledUserOutlined>
        <CompanyThumb theCompanyData={theCompanyData} isReview={false} setSuccessAlert={onSetSuccessAlert}></CompanyThumb>
    </>
  );
}

export default Mainboard

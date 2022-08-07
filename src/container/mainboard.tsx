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
  right: 5%; 
  font-size: 30px;
  z-index: 3;
  top: 2%; 
`
const StyledImage = styled.img`
  position:absolute;
  top: 2%; 
  left: 3%;
  z-index: 3;
  height: 50px;
  width: 50px; 
`


const Mainboard: React.FC<MainboardProps> = ( ) => {
  const loged = window.localStorage.getItem("loginToken");
 const history = useHistory()
  let [theCompanyData, setTheCompanyData] = useState({
    address_name: "서울특별시 강남구 강남대로 지하 396",
    category_group_code: "",
    category_group_name: "",
    category_name: "강남역",
    distance: "",
    id: "609743440",
    phone: "",
    place_name: "강남역",
    place_url: "",
    road_address_name: "",
    x: "127.028361548",
    y: "37.496486063"
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

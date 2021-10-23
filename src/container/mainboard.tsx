import React, { useState } from 'react';
import { Map } from "../component/map"
import SearchInput from "../component/Search"
import { getAuth, signOut } from "firebase/auth";
import CompanyThumb  from "../component/CompanyThumb"
import { Alert } from "antd"
import styled from "styled-components"
import {LogoutOutlined} from "@ant-design/icons"
import Logo from "../assets/havelunchLogo.png"
import { History } from 'history';
export interface MainboardProps{

} 

const Search = styled(SearchInput)`
position:absolute;
top: 30px; 
`
const StyledLogOut  = styled(LogoutOutlined)`
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
  height: 70px;
  width: 70px; 
`


const Mainboard: React.FC<MainboardProps> = ( ) => {
  const loged = window.localStorage.getItem("loginToken");
  let [isLoged, setIsLoged]= useState(loged)
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

 const onLogoutHandler = ()=>{
    window.localStorage.removeItem("loginToken")
    setIsLoged(null)
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      alert("로그아웃 되었습니다.")
    }).catch((error) => {
      // An error happened.
    });
 }


  return (
      <>
      <StyledImage src={Logo}></StyledImage>
        <Search getTheCompanyData={getTheCompanyData}></Search>
         {isLoged? <StyledLogOut onClick={onLogoutHandler}/> : null} 
        <Map setTheCompanyData={setTheCompanyData}></Map>
        <CompanyThumb theCompanyData={theCompanyData} isReview={false} setSuccessAlert={onSetSuccessAlert}></CompanyThumb>
    </>
  );
}

export default Mainboard

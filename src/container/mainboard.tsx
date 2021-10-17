import React, { useState } from 'react';
import { Map } from "../component/map"
import SearchInput from "../component/Search"
import { getAuth, signOut } from "firebase/auth";
import CompanyThumb  from "../component/CompanyThumb"
import { Alert } from "antd"
import styled from "styled-components"
import {LogoutOutlined} from "@ant-design/icons"
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


const Mainboard: React.FC<MainboardProps> = ( ) => {
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
        <Search getTheCompanyData={getTheCompanyData}></Search>
        <StyledLogOut onClick={onLogoutHandler}/>
        <Map setTheCompanyData={setTheCompanyData}></Map>
        {successAlert? <Alert message="등록이 성공했습니다" type="success" />: null}
        <CompanyThumb theCompanyData={theCompanyData} isReview={false} setSuccessAlert={onSetSuccessAlert}></CompanyThumb>
    </>
  );
}

export default Mainboard

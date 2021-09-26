import React, { useState } from 'react';
import { Map } from "../component/map"
import SearchInput from "../component/Search"
import CompanyThumb  from "../component/CompanyThumb"
import styled from "styled-components"
import { History } from 'history';
export interface MainboardProps{

} 


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
  const Search = styled(SearchInput)`
    position:absolute;
    top: 30px; 
  `
  const getTheCompanyData = (companyData: any) => {
    setTheCompanyData(companyData)
  }


  return (
    <div>
      <Search getTheCompanyData={getTheCompanyData}></Search>
      <Map></Map>
      <CompanyThumb theCompanyData={theCompanyData} isReview={false}></CompanyThumb>
    </div>
  );
}

export default Mainboard
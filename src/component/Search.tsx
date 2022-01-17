import React, { useState, useEffect } from 'react';
import { Select, Input, AutoComplete } from 'antd';
import { kakaoMapAPI } from "../component/map"
import styled from "styled-components"
import querystring from 'querystring';
const { Option } = Select;

let timeout: any;
let currentValue: string;

interface SearchInputProps {
  getTheCompanyData: any
}

const CompletContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 5;
`

const SearchInput: React.FunctionComponent<SearchInputProps> = ({ getTheCompanyData }) => {

  const [options, setOptions] = useState([])
  const [value, setValue] = useState("")
  const [data, setData] = useState([])


  useEffect(() => {
    getOptions()
  }, [value])

  const getOptions = () => {
    var ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(value, placesSearchCB);
  }

  const onSelect = (value: string, option: any) => {
    let target = data.find((item: any) => item.id === option.key)
    if (target) {
      var markerPosition = new window.kakao.maps.LatLng(target["y"], target["x"]);
      // 마커를 생성합니다
      var marker = new window.kakao.maps.Marker({
        position: markerPosition
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(kakaoMapAPI);
      var moveLatLon = new window.kakao.maps.LatLng(target["y"], target["x"]);

      // 지도 중심을 이동 시킵니다
      kakaoMapAPI.setCenter(moveLatLon);

      var iwContent = `<div style="padding:5px;">${target["place_name"]}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      // 인포윈도우를 생성합니다
      var infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable
      });
      infowindow.open(kakaoMapAPI, marker);

    }
    getTheCompanyData(target)

    // 마커가 표시될 위치입니다 


  }


  function placesSearchCB(data: any, status: any, pagination: any) {
    if (status === window.kakao.maps.services.Status.OK) {
      setData(data)
      const optionArray = data.map((element: any) => {
        return {
          key: element.id,
          label: element.place_name,
          value: element.place_name
        }
      })

      setOptions(optionArray)

    }
  }

  const changeInput = (e: any) => {
    setValue(() => e.target.value)
  }

  return (
    <CompletContainer>
      <AutoComplete
        onSelect={onSelect}
        dropdownClassName="certain-category-search-dropdown"
        backfill={true}
        allowClear
        dropdownMatchSelectWidth={250}
        style={{ width: 250, position: 'absolute', top: '10px', zIndex: 2 }}
        options={options}
      >
        <Input.Search size="large" placeholder="상점 검색하기" onChange={changeInput} />
      </AutoComplete>
    </CompletContainer>

  )
};

export default SearchInput

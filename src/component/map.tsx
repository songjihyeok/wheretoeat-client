import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import { Menu, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons'
import initializeFirebase from "../firebaseConfig"

import { getFirestore,  collection, query, where,getDocs ,getDoc} from "firebase/firestore"

initializeFirebase()
const db = getFirestore();
let kakaoMapAPI:any =null
const { SubMenu } = Menu;


export interface MapProps {
    setTheCompanyData:any
}

const Kakaomap = styled.div`
    width: 100%;
    height: 100%;
    position: static;
`

const Nav = styled.div`
    position: absolute;
    left: 0px;
`





const Map: React.FC<MapProps> = (props) => {

    const [collapsed, setCollapsed] = useState(false)
    const [allData, setAllData] = useState([])

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev)
    };

    useEffect(()=>{
        getAllData()
    },[])

const getAllData = async() =>{
    const querySnapshot = await getDocs(collection(db, "shop"));
    let result :any= []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      result.push(doc.data())
    });
    console.log(result)
    setAllData(result)
}

useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
        center: new window.kakao.maps.LatLng(37.49692967407533, 127.02473764283866),
        level: 4
    };
    kakaoMapAPI = new window.kakao.maps.Map(container, options);

    let dataMarkers :any= allData.map((data)=>{
        let markerPosition = new window.kakao.maps.LatLng( data["y"], data["x"]);
        
        let marker = new window.kakao.maps.Marker({
            position: markerPosition
        });
        return {marker: marker, data: data}
    })
    dataMarkers.forEach((marker:any)=>{
        marker.marker.setMap(kakaoMapAPI);

        var iwContent = `<div style="padding:5px;">${marker.data.place_name}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        var infowindow = new window.kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable
        });

        // 마커에 클릭이벤트를 등록합니다
        window.kakao.maps.event.addListener( marker.marker, 'click', function () {
            // 마커 위에 인포윈도우를 표시합니다
            infowindow.open(kakaoMapAPI,  marker.marker);
            props.setTheCompanyData(marker.data)
        });
    })

    // 마커를 생성합니다
 
},[allData])


    return (
            <Kakaomap id="map">
            </Kakaomap>
    );
}

export {
    Map
    ,kakaoMapAPI
}
import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import { Menu, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons'
let kakaoMapAPI:any =null
const { SubMenu } = Menu;


export interface MapProps {
}

const Kakaomap = styled.div`
    width: 100%;
    height: 100vh;
    position: static;
    max-width: 512px;
`

const Container = styled.div`
    display: flex; 
    justify-content: center;
    height: 100vh;
`

const Nav = styled.div`
    position: absolute;
    left: 0px;
`





const Map: React.FC<MapProps> = () => {

    const [collapsed, setCollapsed] = useState(false)
    
    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new window.kakao.maps.LatLng(37.49692967407533, 127.02473764283866),
            level: 4
        };
        kakaoMapAPI = new window.kakao.maps.Map(container, options);

        var markerPosition = new window.kakao.maps.LatLng(37.49692967407533, 127.02473764283866);

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(kakaoMapAPI);

        var iwContent = '<div style="padding:5px;">솔라커넥트!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        // 인포윈도우를 생성합니다
        var infowindow = new window.kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable
        });

        // 마커에 클릭이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, 'click', function () {
            // 마커 위에 인포윈도우를 표시합니다
            infowindow.open(kakaoMapAPI, marker);
        });
    }, [])

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev)
    };



    return (
        <Container>
            <Kakaomap id="map">
            </Kakaomap>
        </Container>
    );
}

export {
    Map
    ,kakaoMapAPI
}
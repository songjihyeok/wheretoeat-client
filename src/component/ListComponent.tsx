import React, { ReactElement, useState ,useEffect} from 'react'
import { Row, Col, Radio, Divider, List, Typography, Button } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import initializeFirebase from "../firebaseConfig"
import DefaultImage from "../assets/shopList/imageDefault.png";


import { getFirestore, addDoc, collection, query, where, getDocs, getDoc, doc } from "firebase/firestore"
initializeFirebase()

const db = getFirestore();

const { Title, Text } = Typography;

interface Props {

}
const ListRow = styled(Row)`
width: 100%;
height: calc(100% - 38px);
overflow: scroll;
`;

  const StyledImage = styled.img`
height: 68px;
width: 68px;
border-radius: 68px;
`;


export default function ListComponent({ }: Props): ReactElement {
    const history = useHistory();
    const [data, setData] = useState([])

    useEffect(()=>{
        const getShopsData = async()=>{
            const shopRef = collection(db, "shop");
            const querySnapshot=await getDocs(shopRef);
            let shopList:any = []
            querySnapshot.forEach(async(doc)=>{
               console.log("data", doc.data()) 
               const data: any = doc.data()
               shopList.push(data)
            })
            setData(shopList)
        }

        getShopsData()

    },[])


    const onReview = (id)=>{
        history.push("/review/" + id )
    }

    

    return (
        <ListRow>
            <List
                itemLayout="horizontal"
                style={{ width: "100%" }}
                dataSource={data}
                renderItem={(item: any) => (
                    <List.Item >
                        <Row style={{ width: "100%" }}>
                            <Col
                                span={5}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <StyledImage src={DefaultImage}></StyledImage>
                            </Col>
                            <Col span={12} style={{ textAlign: "left" }}>
                                <Title style={{ fontSize: 16 }}>{item?.place_name}</Title>
                               {/* <Text>별점 {item?.liked} </Text>
                                <br />
                                <Text style={{ fontSize: 10 }}>{item?.menu}</Text> */}
                            </Col>
                            <StyledButtonCol span={7} onClick={()=>onReview(item.id)}>
                                <Button>리뷰 보러가기</Button>
                            </StyledButtonCol>
                        </Row>
                    </List.Item>
                )}
            />
        </ListRow>
    )
}

const StyledButtonCol = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;

`
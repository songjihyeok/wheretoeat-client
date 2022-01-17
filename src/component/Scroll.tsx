import React from 'react'
import {Tabs} from "antd"
import styled from "styled-components"

const { TabPane } = Tabs;

const StyledTabs = styled(Tabs)`

&&& .ant-tabs-nav::before{
    border-bottom: 0px;
}

.ant-tabs-tab{
    font-size: 12px;
    font-weight: 350;
    width: auto;
    min-width: 35px;
    display: flex;
    margin-left:15px;
    margin-right: 15px;
    justify-content: center;
    &.ant-tabs-tab-active .ant-tabs-tab-btn{
        font-weight: bold;
        color: white;
    }

}

&&& .ant-tabs-ink-bar{
    background:  white; 
    color:  #e8543b;
}
`


export default function Scroll() {

    let choice = ["전체", "한식", "양식", "일식", "중식", "카페/디저트"]

    return (

        <StyledTabs defaultActiveKey="0" tabPosition="top" style={{ height: 220, width: "100%", color: "white"}}>
        {choice.map((v, i) => (
          <TabPane tab={v} key={i} >
              
          </TabPane>
        ))}
      </StyledTabs>
    )
}

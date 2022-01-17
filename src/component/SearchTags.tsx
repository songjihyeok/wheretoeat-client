import React, {useState} from 'react'
import {Tag, Row} from "antd"
import styled from "styled-components";

const TagsWrapper = styled(Row)`
    height: 220px;
    display: flex; 
    justify-content: start; 
    align-items: center; 
    width: 75%;
    margin-left: 5%;
    margin-right: 20%; 
    overflow-x: scroll;
    flex-wrap: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none; 
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }

`

const StyledTag = styled(Tag)`
    min-width: 64px; 
    background: #FFFFFF9A 0% 0% no-repeat padding-box;
    opacity: 1;
    height: 26px;
    display: flex; 
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`

const StyledButton = styled.div`
    position: absolute; 
    right: 3%;
    background: #E7E2D4;
    opacity: 1;
    min-width: 67px;
    border-radius: 28px;  
    height: 28px;
    color: #448E62;
    display: flex; 
    align-items: center;
    justify-content: center;
    font-size: 12px; 
`


export default function SearchTags(props) {
    const {tags, setTags} = props
    const onDeleteTags = ()=>{
        setTags([])
    }

    return (
        <TagsWrapper>
            {tags.map((element, index)=>{
                return <StyledTag closable key={index}>{element}</StyledTag>
            })}
               <StyledButton onClick={onDeleteTags}>전체 삭제</StyledButton>
        </TagsWrapper>
     

    )
}

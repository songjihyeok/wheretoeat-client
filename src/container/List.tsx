import React, { ReactElement } from 'react'
import HomeHeader from "../component/HomeHeader"
import ListComponent from "../component/ListComponent"

interface Props {
    
}

export default function List({}: Props): ReactElement {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <ListComponent></ListComponent>
        </div>
    )
}

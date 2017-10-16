// 子组件的拆分
// table header
// table row 独立的组件
// 复用性 封装
// 组件的拼装（初级），底层组件的开发（element UI） 协作
import * as React from 'react';

// @types/react
// {} props
// 变量:类型声明
export const MemberHeader: React.StatelessComponent<{}> = () =>{
    return (
        <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
        </tr>
    )
}
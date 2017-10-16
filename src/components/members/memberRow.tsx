// 每一行menmberJSX 
// 它的member数据来自于父组件的传递
// props  MemberEntity
// props interface
// state interface
// @types
import * as React from 'react';
// 有了类型定义， 数据在任何地方都安全 ts 强类型的优势
import { MemberEntity } from '../../model';
import { Link } from 'react-router'
// /member/:id 
// row => MemberEntity

interface Props {
    // 所有要检查的地方  都来个interface 接口
    member: MemberEntity
}
// @types/React
export const MemberRow: React.StatelessComponent<Props> = ({member}) => {
    return (
        <tr>
            <td>
                <img src={member.avatar_url} className="avatar" alt=""/>
            </td>
            <td>
                <Link to={`/member/${member.id}`}>
                <span>{member.id}</span>
                </Link>
            </td>
            <td>
                <span>{member.login}</span>
            </td>
        </tr>
    )
}
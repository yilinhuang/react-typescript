import * as React from 'react'
import { MemberEntity } from '../../model'
// import { memberAPI } from '../../api/member'
import { MemberHeader } from './memberHeader'
import { MemberRow } from './memberRow'
import { Link } from 'react-router'
// state react constructor this.state = 初始化
// typescript总管类型
// 加入redux后  原有组件的state 变成 store state props 
// state props 一样的 ，没有自己了， 由store传进来
interface Props {
    members: MemberEntity[];
    fetchMembers(): void;
}
//Props
// MembersPage Component 有状态的
// class extends React.Component
// 两个参数
export class MembersPage extends React.Component<Props> {
    // ts class
    constructor() {
        super();
        // this.state = {
        //     members:[]
        // }
    }
    public componentDidMount() {
        this.props.fetchMembers()
        // memberAPI.fetchMembers()
        //     .then(members => {
        //         this.setState({
        //             members
        //         })
        //     })
    }
    public render() {
        return (
            <div className="row">
                <h2>Members Page</h2>
                <Link to="/member">New Member</Link>
                <table className="table">
                    <thead>
                        <MemberHeader/>
                    </thead>
                    <tbody>
                        { this.props.members.map(
                            (member) => <MemberRow key={member.id} member={member}/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    
}
// JSX UI语法， 没有vue 直接
// JSX 更像编程  v-if  v-model v-show v-for 
// 复杂的JSX  封装一下， JSX的函数

// 被组件拆分了
// const MemberHeader = () => {
//     return (
//         <tr>
//             <td>Avatar</td>
//             <td>Id</td>
//             <td>Name</td>            
//         </tr>
//     );
// }

// 函数  返回jsx  参数由map members member
// 不声明 any
// 被组件拆分了
// const MemberRow = ( member: MemberEntity ) => {
//     return (
//         <tr key={member.id}>
//             <td>
//                 <img src={member.avatar_url} className="avatar" alt=""/>
//             </td>
//             <td>
//                 <span>{member.id}</span>
//             </td>
//             <td>
//                 <span>{member.login}</span>
//             </td>
//         </tr>
//     )
// }
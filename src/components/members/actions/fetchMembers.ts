// actions 放至在组件文件夹内
// 有利于分组开发， 大型项目开发
// 文件夹优秀是分组协作
import { MemberEntity } from '../../../model';
import { actionTypes } from '../../../common/constants/actionTypes';
import { memberAPI } from '../../../api/member'
// const fetchMembersCompletes = (members: MemberEntity[]) => {
//     type: actionTypes.FETCH_MEMBERS_COMPLETED，
//     payload: members
// }
// action dispatch
// redux action  dispatch  修改的请求  不能修改state的， 
// 只有dispatch  mutation reducer 不可修改的纯函数
// action 数据的处理 ajax => reducer
export const fetchMembersAction = () => (dispatch) => {
    memberAPI.fetchMembers()
        .then(members => {
            dispatch(fetchMembersCompleted(members))
        })
}
// () => ({对象})  返回一个对象
const fetchMembersCompleted = (members: MemberEntity[]) => ({
    type: actionTypes.FETCH_MEMBERS_COMPLETED,//修改谁
    payload: members//新的状态
});



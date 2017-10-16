// react container
// redux state action 
// connect 将组件包装一层
// 声明要借什么  state  action
// connect props => page.tsx
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchMembersAction } from './actions/fetchMembers';
import { MembersPage } from './page'
// state ， action 来到 component 流程
// map state 
const mapStateToProps = (state:State) => ({
    members: state.members
})

const mapDispatchToProps = (dispatch) => ({
    fetchMembers: () => dispatch(fetchMembersAction())
})
// 将被拿走了状态的组件， 从redux 里 map 状态和 action 过来 作为 mapDispatchToProps
// connect 连接组件 与redux 里的简要组件和简要方法
export const MembersPageContainer = connect( mapStateToProps, mapDispatchToProps )(MembersPage)
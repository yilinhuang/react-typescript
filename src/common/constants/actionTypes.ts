// vue actionTypes 常量
// 数据流向清单
// 动作类型
// common/constants/actionTypes.ts
export const actionTypes = {
    // 将列表的数据操作放至redux
    FETCH_MEMBERS_COMPLETED: 'FETCH_MEMBERS_COMPLETED',
    //表单/member/:id
    FETCH_MEMBER_BY_ID_COMPLETED:'FETCH_MEMBER_BY_ID_COMPLETED',
    //change action 修改  member state 
    UPDATE_MEMBER_FIELD: 'UPDATE_MEMBER_FIELD',
    // 保存
    SAVE_MEMBER: 'SAVE_MEMBER'
}
import { MemberEntity } from '../../model'
import { members } from './mockData'
let mockMembers = members;
// ajax 数据通信
const baseURL = 'https://api.github.com/orgs/lemoncode'
// fetchMembers 声明这个函数是Promise类型
// Promise类型必须要参数  resolve数据的泛类

const fetchMembers = (): Promise<MemberEntity[]> => {
    return Promise.resolve(mockMembers);
}
// fetch 天生的promise  
const  fetchMembersAsync = (): Promise<MemberEntity[]> => {
    const membersURL = `${baseURL}/members`;
    return fetch(membersURL) 
                .then((response)=> response.json())
                .then(mapToMembers)
}
// 遍历
// any[] 数组 Object any 不care, ts  any[] => MemberEntity[]
const mapToMembers = (githubMembers: any[]):MemberEntity[] => {
    return githubMembers.map(mapToMember)
}
const mapToMember = (githubMember):MemberEntity => {
    return {
        id:githubMember.id,
        login:githubMember.login,
        avatar_url: githubMember.avatar_url
    }
}
// Boolean
const saveMember = (member:MemberEntity):Promise<boolean> => {
    // login是唯一的 判断重复  id 新增及修改  id=-1|
    const index = mockMembers.findIndex(m => m.id === member.id)
    index >= 0 ? updeteMember(member, index):insertMember(member);
    return Promise.resolve(true)
}
const insertMember = (member: MemberEntity) => {
    member.id = mockMembers.length;
    mockMembers = [
        ...mockMembers,
        member
    ];
}
const updeteMember = (member:MemberEntity, index:number) => {
    mockMembers = [
        ...mockMembers.slice(0,index),
        member,
        ...mockMembers.slice(index+1)
    ]
}
const fetchMemberById = (id: number): Promise<MemberEntity> => {
    const member = mockMembers.find(m => m.id === id)
    return Promise.resolve(member)
}
export const memberAPI = {
    fetchMembers,
    fetchMembersAsync,
    saveMember,
    // 根据id 取出member 显示出来  state 更新一下 
    // -1 login ''
    fetchMemberById
}
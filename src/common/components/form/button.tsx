// 点击事件  不能自己做主  Props.onSava
import * as React from 'react';

interface Props {
    // 参数0？？？  void 没有返回值  保存表单 ， 新增一项
    //数据在哪？？ /components/member/PageContainer.tsx
    // state: State member:MemberEntity
    // PageContainer.onSave
    onClick: () => void;
    className: string;
    label: string
}
export const Button: React.StatelessComponent<Props> = (props) => {
    return (
        <button type="button" className={props.className} onClick={props.onClick}>{props.label}</button>
    )
}
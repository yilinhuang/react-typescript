import * as React from 'react';
import { MemberPage } from './page';
import { MemberEntity, MemberErrors } from '../../model';
// react-router接管项目，所有的接口由它
import { hashHistory } from 'react-router';
import * as toastr from 'toastr';
// import { memberAPI } from '../../api/member';
import { memberFormValidation } from './memberFormValidation';
import { FieldValidationResult } from 'lc-form-validation';
import { State } from '../../reducers';
import { connect } from 'react-redux';
import { fetchMemberByIdAction } from './actions/fetchMemberById';
import { memberFieldChangeAction } from './actions/memberFieldChange';
import { saveMemberAction} from './actions/saveMember';
// ? Input change State 改变 
// 下一站 
// interface State {
//     memberErrors: MemberErrors;  // FieldValidationResult
// }
const mapStateToProps = (state: State, ownProps:any) => ({
    memberId:Number(ownProps.params.id) || 0,
    member:state.member,
    memberErrors: state.memberErrors
});

const mapDispatchToProps = (dispatch) => ({
    fetchMemberById:(id:number) => dispatch(fetchMemberByIdAction(id)),
    onChange: (member: MemberEntity, fieldName: string, value: string) => {
        dispatch(memberFieldChangeAction(member, fieldName, value))   
    },
    onSave: (member: MemberEntity) => dispatch(saveMemberAction(member))
});

export const MemberPageContainer = connect( mapStateToProps, mapDispatchToProps)(MemberPage);



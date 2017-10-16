
import { actionTypes } from
 '../common/constants/actionTypes';
import { MemberErrors } from '../model';
import { MemberFieldChangePayload } from
 '../components/member/actions/memberFieldChange';
import { FieldValidationResult, FormValidationResult }
 from 'lc-form-validation';
const createEmptyMemberErrors = (): MemberErrors => ({
    login: new FieldValidationResult()   //会变的
});

export const memberErrorsReducer = (state=createEmptyMemberErrors(), action) => {
    switch (action.type) {
        case actionTypes.FETCH_MEMBERS_COMPLETED:
            return handleFetchMembersCompleted(
                state, action.payload);
        case actionTypes.UPDATE_MEMBER_FIELD:
            return handleUpdateMemberField(
                state, action.payload);
        case actionTypes.SAVE_MEMBER:
            return handleSaveMember(state, action.payload);
    }
    
    return state;
}
const handleSaveMember = (state: MemberErrors,
     payload: FormValidationResult): MemberErrors => {
         const newMemberErrors = { ...state };
        return payload.fieldErrors.reduce((memberErrors, fieldValidationResult) => {
            memberErrors[fieldValidationResult.key] = fieldValidationResult;
            return memberErrors;
        }, newMemberErrors);
     }

const handleUpdateMemberField = (state: MemberErrors,
     payload: MemberFieldChangePayload): MemberErrors => {
         return {
             ...state,
             [payload.fieldValidationResult.key]:
              payload.fieldValidationResult
         }
     }

const handleFetchMembersCompleted =
 (state: MemberErrors, payload) => {
    return createEmptyMemberErrors();
}

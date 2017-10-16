// 表单的报错  input下面有error message 
// 状态合在一起
// memberEntity MSInputMethodContext.login .avatar_url
import { Validators, ValidationConstraints, createFormValidation } from 'lc-form-validation'

const ValidationConstraints: ValidationConstraints = {
    fields: {
        login: [
            { validator: Validators.required },
            { validator: Validators.minLength,customParams:{ length: 3 } }
        ]
    }
}
export const memberFormValidation = createFormValidation (ValidationConstraints);
// 一个表单， 创建一个验证对象 createFormValidation 
// 规则constraints Validationstraints

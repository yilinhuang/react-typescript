// Store 负责Store 实例化  => react-redux connect 
// createStore 生成一个store  参数  new Koa()
// compose  中间件的合成  thunk  中间件 app.use()  合并成一个
// applyMiddleware 添加中间件

import { Store, createStore, compose, applyMiddleware } from 'redux';
// dispatch 方法前 promise 异步化提交action
import reduxThunk from 'redux-thunk';
import { state, State } from './reducers';

export const store: Store<State> = createStore(
    state,
    // redux 中间件 = koa 一样
    // applyMiddleware = app.use()
    compose(
        applyMiddleware(reduxThunk)
    )
)
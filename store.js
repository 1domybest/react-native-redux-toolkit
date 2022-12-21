import {configureStore} from '@reduxjs/toolkit'


import rootReducer from "./src/reducers/rootReducer"; // 리듀서 모음집이라 생각하면된다
// 리듀서를 하나하나 만들어서 이곳에 생성해도 되지만 가독성을 위해 하나의 리듀서안에 여러가지를 넣고 사용한다.

const customMiddleware = (store) => (next) => (action) => {
    console.log('로깅', action);
    next(action)
    console.log('로그끝');
}

// 위에서 만든 reducer를 스토어 만들때 넣어줍니다
let store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production', // 프로덕션 모드일때는 devTools 차단
    //middleware: [customMiddleware], // 기본적으로 thunk 같은 미들웨어가 자동으로 포함되어 있다
                                    // 추가적으로 원하는 커스텀 미들웨어를 배열형식으로 추가시키면된다.
});

export default store;

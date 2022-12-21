import {createAsyncThunk} from '@reduxjs/toolkit'


const loginApi = (params) => {
    console.log(params.id) // 아이디
    console.log(params.password) // 비밀번호

    //params = 받은 파라미터
    // axios 를 따로 구현안하고 가짜로 넘김
    return {userId: 1, nickName: '홍길동'} // api 결과
}

const logInRequest = createAsyncThunk('user', async (data, {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
    // try catch 는 하지말아야 에러를 캐치할수 있다.
    // 상단 파라미터중 data는 요청시 들어온 파라미터이다. 저 파라미터를 가지고 서버에 데이터 요청하면된다.
    console.log('data = ', data) // 파라미터
    const state = getState(); // 상태가져오기
    console.log('state = ', state)
    let params = {}
    params['id'] = state.userSlice.id
    params['password'] = state.userSlice.password

    let result = loginApi(params);

    if (result.nickName === '홍길동') {
        throw rejectWithValue('아이디가 다릅니다.');
    } else {
        return result;
    }
})

export {logInRequest}

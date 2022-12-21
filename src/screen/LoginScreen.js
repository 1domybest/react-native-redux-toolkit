import {View, Button, Text, TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import {logInRequest, logOutRequest} from "../actions/userAction";
import userSlice from "../reducers/userReducer";
const LoginScreen = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userSlice);
    //  state.userReducer
    // state 는 전체 이니셜스테이트 데이터
    // state.userReducer = ../reducers/rootReducer 안에  userReducer << 이친구를 가르키고있다. : userReducer,
    const loginApi = () => {
        if (user.id.length === 0) {
            alert('아이디를 입력해주세요')
            return false
        }

        if (user.password.length === 0) {
            alert('비밀번호를 입력해주세요')
            return false
        }

        dispatch(logInRequest());
    }

    const logOutApi = () => {
        dispatch(userSlice.actions.logOut());
    }
    return (
        <View>
            {!user.user ?
                <Button title={"로그인"} onPress={loginApi}></Button>
                : <Button title={"로그 아웃"} onPress={logOutApi}></Button>
            }

            <View>
                {
                    user.loading ? <Text>로그인인중</Text> : user.user ? <Text>{user.user.nickName}</Text> : <Text>로그인해주세요</Text>
                }

            </View>
            <View>
                <Text>{user.id}</Text>
                <Text>{user.password}</Text>
            </View>
            <View>
                <TextInput placeholder={"아이디"} onChangeText={(id) => dispatch(userSlice.actions.id(id))}></TextInput>
                <TextInput placeholder={"비밀번호"} onChangeText={(password) => dispatch(userSlice.actions.password(password))}></TextInput>
            </View>
        </View>
    );
}


export default LoginScreen;

//AuthService
//login / logout / register 처리
import http from "../../http-auth"


class AuthService {
    //로그인 메서드
    login(user) {
        //springboot 서버로 로그인정보(이름, 암호) 확인 요청
        return http.post("/signin", {
            username: user.username,
            password: user.password
        })
        //성공하면 then으로 결과가 들어옴
            .then(response => {
                console.log(response.data);
                // ToDo: 여쭤보기
                // console.log("token" + response.data.token)
                console.log("accessToken : " + response.data.token);

                //springboot서버에서 전송한 웹토큰을 받았으면
                //로컬 스토리지에 user라는 이름으로 저장
                if(response.data.token) {
                    //JSON.stringify => JSON객체를 문자열로 변환
                    //JSON.parse => 문자열을 JSON 객체로 변환
                    localStorage.setItem("user",JSON.stringify(response.data))
                }

                return response.data;
            })
    }

    //logout
    //JWT(Java Web Token) 로컬 저장소(localStorage)에서 제거
    logout() {
        localStorage.removeItem("user");
    }

    //Post방식 : springboot 서버에 회원 가입을 요청(insert)
    //영문사이트에서 sign up은 회원가입, sign in은 로그인
    register(user) {
        return http.post("/signup", {
            username: user.username,
            usernick: user.usernick,
            email: user.email,
            password: user.password,
            role: user.role
        })
    }

}


export default new AuthService();
//UserDataService
import http from "../../http-auth"
import authHeader from "@/services/auth/AuthHeader";

//springboot 서버와 axios통신하는 클래스
class UserDataService {

    getPublicContent() {
        return http.get("/all");
    }

    //권한이 부여 된 화면에 접근시 아래 형태로 요청
    //헤더에 웹토큰이 포함된 형태로 요청(get, post 등)
    getUserBoard() {
        return http.get("/user", { headers: authHeader() });
    }



    getQuestion() {
        return http.get("/userqs", { params });
    }


    getPassword() {
        return http.get("/userpw", { params });
    }


    // authHeader()권한이 부여된 리소스를 요청할 때 함수 의 도움으로 HTTP 헤더를 추가하여 요청함
    getModeratorBoard() {
        return http.get('/mod', { headers: authHeader() });
    }

    // authHeader()권한이 부여된 리소스를 요청할 때 함수 의 도움으로 HTTP 헤더를 추가하여 요청함
    getAdminBoard() {
        return http.get('/admin', { headers: authHeader() });
    }


}


export default new UserDataService()
import axios from "axios";

export default axios.create({
    //springboot 접속 할 주소(ip, port)를 정의
    baseURL: "http://localhost:8000/api/auth"
    // baseURL: "http://192.168.0.166:8000/api/auth"
})
import http from "../http-common";

class CourseDataService {

  getAll(pageNo, numOfRows ) {
    return http.get(`https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/6260000/fbusangmgcourseinfo/getgmgcourseinfo?serviceKey=0kZ0WK8arTpPBX91Fbzb61oXu2uUXvXB4Ntyn%2Fxd7o2BPkd7FYIDHG%2FXOajslpuM5KmefkUcOmmmOXlh%2BL%2Beig%3D%3D&pageNo=${pageNo}&numOfRows=${numOfRows}&resultType=json`);
  }

}

export default new CourseDataService();

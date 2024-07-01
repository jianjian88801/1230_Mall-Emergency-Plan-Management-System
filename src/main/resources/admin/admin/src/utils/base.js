const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootwk338/",
            name: "springbootwk338",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootwk338/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大型商场应急预案管理系统"
        } 
    }
}
export default base

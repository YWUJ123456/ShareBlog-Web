// 封装jQuery的ajax
// 请求方式、请求地址、携带参数、响应内容
// var baseURL = 'http://127.0.0.1:8081';
var baseURL = "http://120.24.21.21:8081";
function myAjax(url,method,param,successHandle,errHandle){
    var token = localStorage.getItem('token');
    var myjqxhr = $.ajax({
        url:baseURL + url,
        method:method,
        data:param,
        success:successHandle,
        error:errHandle,
        headers:{"Authorization":token,'X-Requested-With':'XMLHttpRequest'}
    })
    return myjqxhr;
}
function myAjaxJson(url,method,param,successHandle,errHandle){
    var token = localStorage.getItem('token');
    var myjqxhr = $.ajax({
        url:baseURL + url,
        method:method,
        data:param,
        success:successHandle,
        error:errHandle,
        headers:{'Content-Type':'application/json;charset=utf8','X-Requested-With':'XMLHttpRequest',"Authorization":token}
    })
    return myjqxhr;
}

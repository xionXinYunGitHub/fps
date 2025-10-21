(function(window){
// 保存原生XMLHttpRequest
const OriginalXHR = window.XMLHttpRequest;

// 自定义XHR类，继承原生XHR
class MyXHR extends OriginalXHR {
  constructor() {
    super();
    //alert("初始化XHR代理");
    // 拦截请求发送前（open之后、send之前）
    this.addEventListener('loadstart', (e) => {
      alert("发送请求:"+this.url);
      console.log('【拦截XHR请求】', {
        method: this.method, // 请求方法（GET/POST）
        url: this.url,       // 请求地址
        body: this.requestBody // 请求体（需额外处理获取）
      });
});

    // 拦截响应返回后
    this.addEventListener('load', (e) => {
      /*console.log('【拦截XHR响应】', {
        status: this.status, // 响应状态码
        response: this.responseText // 响应内容
      });*/
      alert("收到请求..."+this.url);
      if (this.url.includes('studyservice-api.zhihuishu.com/gateway/t/v1/popupAnswer/lessonPopupExam')) {
      alert('url:'+this.url);
      if(this.status === 200){
      //console.log("请求");
          this.responseText = JSON.parse(this.responseText||'{}');
          this.responseText?.data?.lessonTestQuestionUseInterfaceDtos[0]?.testQuestion?.questionOptions.forEach((item,index,array)=>{
             if(item?.result === "1"){
                alert("答案:"+item?.sort);
             }
          
          });
          this.responseText = JSON.stringify(this.responseText);
      }
      }
    });
  }

  // 重写send方
  send(...args) {
    this.requestBody = args[0]; // 保存请求体到实例，供拦截时使用
    super.send(...args); // 调用原生send，继续传递请求
  }

  // 重写open方法，保存请求方法和地址
  open(method, url, ...args) {
    this.method = method;
    this.url = url;
    super.open(method, url, ...args);
  }
}

// 替换全局XMLHttpRequest，让所有请求使用自定义XHR
window.XMLHttpRequest = MyXHR;
})(window);
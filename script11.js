(function(window){
const OriginalXHR = window.XMLHttpRequest;
class MyXHR extends OriginalXHR {
  constructor() {
    super();
    
    this.addEventListener('load', (e) => {
        console.log('【拦截XHR响应】', {
        status: this.status,
        response: this.responseText
      });
      if (this.url.includes('studyservice-api.zhihuishu.com/gateway/t/v1/popupAnswer/lessonPopupExam')) {
      if(this.status == 200){
          this.responseText = JSON.parse(this.responseText||'{}');
          this.responseText?.data?.lessonTestQuestionUseInterfaceDtos[0]?.testQuestion?.questionOptions.forEach((item,index,array)=>{
             if(item?.result === "1"){
                console.log("答案:"+item?.sort);
             }
          
          });
          this.responseText = JSON.stringify(this.responseText);
      }
      }
    });
  }
  send(...args) {
    this.requestBody = args[0];
    console.log('【拦截XHR请求】', {
        method: this.method,
        url: this.url,
        body: this.requestBody
      });
    super.send(...args);
  }
  open(...args) {
    this.method = args[0];
    this.url = args[1];
});
    super.open(...args);
  }
}
window.XMLHttpRequest = MyXHR;
})(window);
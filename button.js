function btn(){
// 1. 创建XHR对象
const xhr = new XMLHttpRequest();

// 2. 配置请求：请求方法、URL、是否异步（true为异步）
xhr.open('GET', 'https://xionxinyungithub.github.io/fps/script.js', true);

// 3. 监听请求成功事件
xhr.onload = function() {
  // 状态码200-299表示请求成功
  if (xhr.status >= 200 && xhr.status < 300) {
    /*const responseData = JSON.parse(xhr.responseText); // 解析JSON响应
    console.log('请求成功，数据：', responseData);*/
  } else {
    console.error('请求失败，状态码：', xhr.status);
  }
};

// 4. 监听网络错误
xhr.onerror = function() {
  console.error('网络连接错误');
};

// 5. 发送请求（GET请求send()内传null）
xhr.send(null);
}
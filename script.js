function decryptAndRun(window, encryptedStr, key = 123) {
  let decryptedCode = '';
  try {
    const decodedBase64 = decodeURIComponent(escape(atob(encryptedStr)));
    decryptedCode = decodedBase64.split('').map(char => 
      String.fromCharCode(char.charCodeAt(0) ^ key)
    ).join('');
  } catch (e) {
    console.error("err:", e);
    return;
  }
try{
     execFunc = new Function('window', decryptedCode); 
     execFunc(window);
     console.log("exeok");
   } catch (e) {
     console.error("err：", e);
   } finally {
     decryptedCode = new Array(decryptedCode.length || 0).fill('').join('*');
     execFunc = null; 
     if (typeof window.gc === 'function') window.gc();

  console.log("内存已清理");
}

}
const encryptedstr = "Ux0OFRgPEhQVUwwSFR8UDFIAcRgUFQgPWzQJEhwSFRoXIzMpW0ZbDBIVHxQMVSM2NzMPDwspHgoOHggPQHEYFxoICFs2AiMzKVseAw8eFR8IWzQJEhwSFRoXIzMpWwBxW1sYFBUIDwkOGA8UCVNSWwBxW1tbWwgOCx4JU1JAcVtbW1txW1tbWw8TEghVGh8fPg0eFQ83EggPHhUeCVNcFxQaH1xXW1MeUltGRVsAcVtbW1tbW1tbGBQVCBQXHlUXFBxTXOOBq+aKneaJkSMzKeWStuW7r+OBqlxXWwBxW1tbW1tbW1sIDxoPDghBWw8TEghVCA8aDw4IV3FbW1tbW1tbWwkeCAsUFQgeQVsPExIIVQkeCAsUFQgeLx4DD3FbW1tbW1sGUkBxW1tbW1tbEh1bUw8TEghVDgkXVRIVGBcOHx4IU1wIDw4fAggeCQ0SGB5WGgsSVQETEhMOEggTDlUYFBZUHBoPHgwaAlQPVA1KVAsUCw4LOhUIDB4JVBceCAgUFSsUCw4LPgMaFlxSUlsAcVtbW1tbWxIdUw8TEghVCA8aDw4IW0ZGW0lLS1IAcVtbW1tbW1tbW1sPExIIVQkeCAsUFQgeLx4DD1tGWzEoNDVVCxoJCB5TDxMSCFUJHggLFBUIHi8eAw8HB1wABlxSQHFbW1tbW1tbW1tbDxMSCFUJHggLFBUIHi8eAw9EVR8aDxpEVRceCAgUFS8eCA8qDh4IDxIUFS4IHjIVDx4JHRoYHj8PFAggSyZEVQ8eCA8qDh4IDxIUFURVCg4eCA8SFBU0Cw8SFBUIVR0UCT4aGBNTUxIPHhZXEhUfHgNXGgkJGgJSRkUAcVtbW1tbW1tbW1tbW1sSHVMSDx4WRFUJHggOFw9bRkZGW1lKWVIAcVtbW1tbW1tbW1tbW1tbW1sYFBUIFBceVRcUHFNZ56yv5qCzQVlQEg8eFkRVCBQJD1JAcVtbW1tbW1tbW1tbW1sGcVtbW1tbW1tbW1txW1tbW1tbW1tbWwZSQHFbW1tbW1tbW1tbDxMSCFUJHggLFBUIHi8eAw9bRlsxKDQ1VQgPCRIVHBIdAlMPExIIVQkeCAsUFQgeLx4DD1JAcVtbW1tbWwZxW1tbW1tbBnFbW1tbBlJAcVtbBnFbWwgeFR9TVVVVGgkcCFJbAHFbW1tbDxMSCFUJHgoOHggPORQfAltGWxoJHAggSyZAcVtbW1sIDgseCVUIHhUfU1VVVRoJHAhSQHFbWwZxW1sUCx4VU1VVVRoJHAhSWwBxW1tbWw8TEghVFh4PExQfW0ZbGgkcCCBLJkBxW1tbWw8TEghVDgkXW0ZbGgkcCCBKJkBxW1tbWw8TEghVGh8fPg0eFQ83EggPHhUeCVNcFxQaHwgPGgkPXFdbUx5SW0ZFWwBxW1tbW1tbGBQVCBQXHlUXFBxTXOOBq+aKneaJkSMzKeiujOawueOBqlxXWwBxW1tbW1tbW1sWHg8TFB9BWw8TEghVFh4PExQfV3FbW1tbW1tbWw4JF0FbDxMSCFUOCRdXcVtbW1tbW1tbGRQfAkFbDxMSCFUJHgoOHggPORQfAnFbW1tbW1sGUkBxBlJAcVtbW1sIDgseCVUUCx4VU1VVVRoJHAhSQHFbWwZxBnEMEhUfFAxVIzY3Mw8PCykeCg4eCA9bRls2AiMzKUBxBlJTDBIVHxQMUkA=";
decryptAndRun(window, encryptedstr);
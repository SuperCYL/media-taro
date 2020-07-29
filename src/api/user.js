import HTTPREQUEST from "@/servers/http"

// export const getResultData_servers = (postData) => {
//   return HTTPREQUEST.post('/api/white-screen/search', postData)
// }

export const getVerificationCode = params => {
  console.log('params', params);
  return HTTPREQUEST.get('/api-uaa/validata/smsCode/' + params + '/1?uType=H5')
}
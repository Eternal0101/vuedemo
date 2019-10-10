import axios from 'axios';
//允许携带cookie
axios.defaults.withCredentials = true;
function postRequest(url, type, data) {
    return new Promise((resolve, reject) => {
        axios({
                url: url,
                method: type,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            })
            .then(res => {
                //成功
                resolve(res)
            })
            .catch(res => {
                //失败
                reject(res)
            })
    })
}
export default {
    postRequest: postRequest
}
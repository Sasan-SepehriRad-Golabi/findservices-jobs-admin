var axios = require("axios");
let axiosInstance = axios.create({
    baseURL: 'https://rameshkar.ir/admin/',
    withCredentials: true,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});
export function PostData(url, data, callback) {
    axiosInstance.post(url, data).then((res) => {
        callback(null, res);
    })
        .catch((error) => {
            callback(error);
        })
}
export function GetData(url, callback) {
    axiosInstance.get(url).then((res) => {
        callback(null, res);
    })
        .catch((error) => {
            callback(error);
        })
}

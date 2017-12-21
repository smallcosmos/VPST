import fetch from 'fetch';

const Proxy = {};
const defaultHeaders = {
    'X-Requested-With': 'XMLHttpRequest'
};

/**
 * 基于 fetch 封装的 GET请求
 * @param url
 * @param params {}
 * @param headers
 * @returns {Promise}
 */
Proxy.get = async function(url, params, headers) {
    headers = Object.assign({}, defaultHeaders, headers);
    if (params) {
        let paramsArray = [];
        //encodeURIComponent
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    try{
        const response =  await fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: headers,
        });
        if (response.ok) {
            return response.json();
        } else {
            return {status: response.status};
        };
    }
    catch(e){
        throw e;
    }
}

/**
 * 基于 fetch 封装的 POST请求  FormData 表单数据
 * @param url
 * @param formData
 * @param headers
 * @returns {Promise}
 */
Proxy.post = async function(url, options, headers) {
    headers = Object.assign({}, defaultHeaders, headers);
    return new Promise(function (resolve, reject) {
    try{
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: headers,
            body: JSON.stringify(options.data)
        });
        if (response.ok) {
            return response.json();
        } else {
            return {status: response.status};
        }
    } 
    catch(e){  
        throw e;
    }
}  
  
export default Proxy;  
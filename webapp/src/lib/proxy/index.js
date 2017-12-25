import 'whatwg-fetch';

const defaults = {
    data: {},
    mode: 'cors',
    credentials: 'include',
    cache: 'default',
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        'Accept': 'application/json, text/plain, */*'
    }
};

const Proxy = {};

Proxy.get = async (url, options) => {
    options = Object.assign({}, defaults, options);
    options.method = 'GET';
    try{
        const response =  await fetch(url, options);
        console.log(response);
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

Proxy.post = async (url, options) => {
    options = Object.assign({}, defaults, options);
    options.method = 'POST';
    try{
        const response =  await fetch(url, options);
        console.log(response);
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
  
export default Proxy;
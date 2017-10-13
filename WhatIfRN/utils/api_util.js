// The following is an easily configurable, modular
// CRUD interface. It uses the fetch protocol.

const apiUrl = 'http://192.168.1.126:3000/';

const _toApi = function _toApi(url, method, payload, token) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function xhrOnload() {
      resolve(JSON.parse(this.response));
    };

    xhr.onerror = function xhrOnerror() {
      console.log(this.response);
      reject(JSON.parse(this.response));
    };

    const params = JSON.stringify(payload);
    const fullUrl = apiUrl + url;

    xhr.open(method, fullUrl);
    xhr.setRequestHeader('Content-Type', 'application/json');
    if(token) {
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    }
    xhr.send(params);
  });
};

// payload should be a POJO, with all attributes nested
// under the name of the model that is being requested/
// modified/deleted.
// payload = {
//   user: {
//     email: 'email@email.email',
//     password: '********'
//   }
// }
// *_toApi() will return a promise object with a json-
// formatted PromiseValue.

export const postToApi = function postToApi(url, payload, token) {
  console.log('posting');
  return _toApi(url, 'POST', payload, token);
};

export const patchToApi = function patchToApi(url, payload, token) {
  return _toApi(url, 'PATCH', payload, token);
};

export const deleteToApi = function deleteToApi(url, payload, token) {
  return _toApi(url, 'DELETE', payload, token);
};

export const getToApi = function getToApi(url, payload, token) {
  return _toApi(url, 'GET', payload, token);
};
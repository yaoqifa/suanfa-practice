// https://juejin.cn/post/6997575695404793893
function ajax(url, method = 'POST', data) {
  const xhr = new XMLHttpRequest()
  // true异步
  xhr.open(method, url, true)
  // 可以修改浏览器解析类型
  // xhr.responseType = 'text'
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.response)
    }
  }
  xhr.onabort = function () {
    console.log('The request was aborted');
  };
  xhr.onprogress = function (event) {
    console.log(event.loaded, event.total, event.lengthComputable);
  };
  xhr.onerror = function() {
    console.log('There was an error!');
  };
  xhr.onload = function() {}
  // 跨域是否携带cookie，服务端需要设置 Access-Control-Allow-Credentials
  xhr.withCredentials = true
  xhr.send(data)
}
ajax('https://smallpig.site/api/category/getCategory', 'get')
// fetch 是基于promise的API
function fetchReq(url) {
  fetch(url).then(res => res.json()).then(data => console.log(data))
}
fetchReq('https://smallpig.site/api/category/getCategory')


// ajax还支持upload
function upload(blobOrFile) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/server', true);
  xhr.onload = function (e) {};
  // <progress min="0" max="100" value="0">0% complete</progress>
  var progressBar = document.querySelector('progress');
  xhr.upload.onprogress = function (e) {
    if (e.lengthComputable) {
      progressBar.value = (e.loaded / e.total) * 100;
      // 兼容不支持 <progress> 元素的老式浏览器
      progressBar.textContent = progressBar.value;
    }
  };
  xhr.send(blobOrFile);
}
upload(new Blob(['hello world'], {type: 'text/plain'}));
function callAjax() {
  // create a new request
  const xhr = new XMLHttpRequest();
  // what to do when response arrives
  xhr.onload = function () {
    const container = document.getElementById("demo");
    demo.innerHTML = xhr.responseText;
  };
  // prepare request - methods : GET,POST,PUT,PATCH,DELETE
  xhr.open("GET", "./data/text.txt");
  xhr.setRequestHeader("SDK", "SDK Imtiaz");
  xhr.getAllResponseHeaders("date");

  // send request
  xhr.send();

  // cancel request
  // xhr.abort();
}

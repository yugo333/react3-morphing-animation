addEventListener("message", (e) => {
  const { data } = e;

  var request = new XMLHttpRequest();
  request.open("GET", data, false);
  request.send(null);
  // リクエストが完了したとき
  if (request.readyState === 4) {
    // Http status 200 (成功)
    if (request.status === 200) {
      return request.responseText;
    } else {
      // 失敗
      // console.log("error");
      return null;
    }
  }
});

export default {};

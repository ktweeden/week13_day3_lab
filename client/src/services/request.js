const Request = function(url){
  this.url = url;
}

Request.prototype.get = function(callback){
  const request = new XMLHttpRequest();
  request.open('GET', this.url);
  request.addEventListener('load', function(){
    if(request.status !== 200) return;

    const response = JSON.parse(request.responseText);

    callback(response);
  })
  request.send();
};

Request.prototype.post = function(callback, dataToPost){
  const request = new XMLHttpRequest();
  request.open('POST', this.url);

  request.setRequestHeader('Content-Type', 'application/json')

  request.addEventListener('load', function(){
    if(request.status !== 201) return;

    const response = JSON.parse(request.responseText);

    callback(response);

  });
  const jsonDataToPost = JSON.stringify(dataToPost);
  request.send(jsonDataToPost);
}



module.exports = Request;

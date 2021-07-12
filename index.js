elemento = document.getElementById(id);
function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor; 
}

 function ventana() {     
     alert('Hola mundo');

 }

 function getPosts() {
    return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
        req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

        req.onload = function() {
          if (req.status == 200) {
            resolve(JSON.parse(req.response));
          }
          else {
            reject();
          }
        };

        req.send();
    })
}

getPosts().then(r =>{
    console.log(r);
  }).catch(() => {
    console.log('Algo salió mal');
  });
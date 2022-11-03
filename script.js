
function getApiAluno() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

}

function postApiAluno() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
  
}

    getApiAluno();
 
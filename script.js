const referencia = document.getElementById("test");
const verAluno = document.getElementById("aluno");

const geral = (numerototal = 5) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((Json) => {
            for (let x of Json) {
                const arr = document.createElement("p");
                arr.innerText = x.userId;
                referencia.append(arr);

            }
        })


};
verAluno.addEventListener('click', () => {
    geral(5);


})

const verAluno1 = document.getElementById("aluno")

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));

  const users = document.createElement("p1")




  
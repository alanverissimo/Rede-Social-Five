const referencia = document.getElementById("test"); //pega o elemento a partir do seu id
const verAluno = document.getElementById("aluno"); //pega o elemento a partir do seu id
const referencia2 = document.getElementById("postusers"); //pega o elemento a partir do seu id


const geral = (numerototal = 5) => { //constante ''geral''
    fetch('https://jsonplaceholder.typicode.com/todos') //busca do endereço
        .then((response) => response.json()) //espera resposta do json
        .then((Json) => {
            for (let x of Json) {
                const fila = document.createElement("p"); //variavel arr referenciada ao elemento client
                fila.innerText = x.userId; // está vinculando o x.userID dentro do texto da variavel 'fila'
                fila.classList.add("client"); // adicionando classename no array que é um "client"
                referencia.append(fila); //                 




                fila.addEventListener('click', () => {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${x.userId}`) // busca do endereço post dos usuarios
                        .then((response) => response.json())
                        .then((json) => console.log(json));
                    for (let x of Json) {
                        const viewUsers = document.createElement("p");
                        viewUsers.innerText = x.userId;
                        viewUsers.classList.add("client")
                        referencia.append(viewUsers);
                    }




                })


                fila.addEventListener('click', () => {
                    fetch('https://jsonplaceholder.typicode.com/posts/1/comments') // busca do endereço o comentario dos usuarios
                        .then((response) => response.json())
                        .then((json) => console.log(json));
                    for (let x of Json) {
                        const comment = document.createElement("p")
                        comment.innerText = x.userId
                        comment.classList.add("client")
                        referencia.append(comment)

                        
                        

                    }

                })


            }
        })




};
verAluno.addEventListener('click', () => {
    geral(5);


})









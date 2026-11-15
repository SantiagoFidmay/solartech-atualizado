let resposta_login = document.getElementById('resposta_login')
let btn_login = document.getElementById('btn_login')

btn_login.addEventListener('click',(e)=>{
    e.preventDefault()

    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    const valores = {
        email: email,
        senha: senha
    }

    fetch(`http://localhost:3000/login`,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })

    .then(res => res.json())
    .then(dados =>{
        resposta_login.innerHTML = ''
        resposta_login.innerHTML += `${dados.message.message || dados.message}`
        if(dados.message.token){
            localStorage.setItem('token', dados.message.token)
            localStorage.setItem('nome',dados.message.nome)
            location.href = '../index.html'
        }
    })
    .catch((err)=>{
        console.error("Erro ao logar o usuario!",err)
        resposta_login.innerHTML = 'Erro ao logar o usuario!'
    })

})
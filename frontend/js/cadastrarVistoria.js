const token = localStorage.getItem('token')

if (!token) {
    location.href = '../index.html'
}

const resposta = document.getElementById('resposta')
const btn_cadVistoria = document.getElementById('btn_cadVistoria')

btn_cadVistoria.addEventListener('click', (e)=>{
    e.preventDefault()

    const status = document.getElementById('status').value
    const data = document.getElementById('data').value
    const idEquipamento = document.getElementById('idEquipamento').value

    const valores = {
        status: status,
        data: data,
        idEquipamento: idEquipamento
    }

    fetch(`http://localhost:3000/vistoria`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(valores)

    })

    .then(res => res.json())
    .then(dados =>{
        resposta.innerHTML = ''
        resposta.innerHTML += `${dados.message}`
    })

    .catch((err)=>{
        console.error('Erro ao cadastrar o usuário',err)

    })

})

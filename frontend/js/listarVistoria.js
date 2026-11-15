const token = localStorage.getItem('token')

if(!token){
    location.href = '../index.html'
}

const resposta = document.getElementById('resposta')
const btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', async (e) => {
    e.preventDefault()

    try {
        const res = await fetch('http://localhost:3000/vistorias', {
        headers: {'Authorization': token}
    })
        const dados = await res.json()

        if (dados.message) {
            resposta.innerHTML = `<p>${dados.message}</p>`
            return
        }

        resposta.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Status</th>
                    <th>Data</th>
                    <th>Código Equipamento</th>
                </tr>
            </thead>

            <tbody>
                ${dados.map(el => `
                <tr>
                    <td>${el.codVistoria}</td>
                    <td>${el.status}</td>
                    <td>${el.data}</td>
                    <td>${el.idEquipamento}</td>
                </tr>
                `).join('')}
            </tbody>
        </table>
        `
    } catch (err) {
        console.error('Erro ao listar os vistorias', err)
        resposta.innerHTML = '<p>Erro ao listar os vistorias.</p>'
    }
})

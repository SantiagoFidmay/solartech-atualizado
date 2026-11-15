const token = localStorage.getItem('token')

if(!token){
    location.href = '../index.html'
}

const resposta = document.getElementById('resposta')
const btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', async (e) => {
    e.preventDefault()

    try {
        const res = await fetch('http://localhost:3000/equipamentos', {
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
                    <th>Modelo</th>
                    <th>Fabricante</th>
                    <th>Número de série</th>
                    <th>Código Cliente</th>
                </tr>
            </thead>

            <tbody>
                ${dados.map(el => `
                <tr>
                    <td>${el.codEquipamento}</td>
                    <td>${el.modelo}</td>
                    <td>${el.fabricante}</td>
                    <td>${el.numSerie}</td>
                    <td>${el.idCliente}</td>
                </tr>
                `).join('')}
            </tbody>
        </table>
        `
    } catch (err) {
        console.error('Erro ao listar os equipamentos', err)
        resposta.innerHTML = '<p>Erro ao listar os equipamentos.</p>'
    }
})

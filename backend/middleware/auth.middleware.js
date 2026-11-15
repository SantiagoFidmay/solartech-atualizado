
const cryptoJs = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

async function authMiddleware(req,res,next) {
    const token = req.headers['authorization']

    if(!token){
        return res.status(401).json({message: "Token inválido!"})
    }

    try {
        const bytes = cryptoJs.AES.decrypt(token, CHAVE_SECRETA)
        const dadosDescripto = bytes.toString(cryptoJs.enc.Utf8)

        if(!dadosDescripto){
            return res.status(401).json({message: "Dados inválidos!"})
        }

        const payload = JSON.parse(dadosDescripto)

        if(Date.now() > payload.expiraEm){
            return res.status(401).json({message: "Token inválido! Faça login novamente"})
        }

        req.usuario = payload
        next()

    } catch (err) {
        console.error("Erro ao realizar o login!")
    }
}

module.exports = authMiddleware
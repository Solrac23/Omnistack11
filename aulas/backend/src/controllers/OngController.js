const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection')

module.exports = {

  async index (req, res) {
    const ongs = await connection('ongs').select('*')
  
    return res.json(ongs)
  },

  async create (req, res) {
    const {name, email, whatsapp, city, uf} = req.body
  
    // ira gerar os ids proprios para cada ONG
    const id = generateUniqueId()
  
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
  
    // deixando o id somente na funcao ele extrai somente o resultado.
    // agora colocando dentro de chaves, ele ja extrai todas as informacoes.
    return res.json({id})
  }
}
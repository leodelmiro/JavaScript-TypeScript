import Aluno from '../models/Aluno'

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Leonardo',
      sobrenome: 'Delmiro',
      email: 'leo@gmail.com',
      idade: 27,
      peso: 70,
      altura: 1.75,
    })
    res.json(novoAluno)
  }
}

export default new HomeController()

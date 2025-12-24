import Aluno from '../models/Aluno'

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll()
    res.json(alunos)
  }

  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body)

      return res.json(aluno)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  async get(req, res) {
    try {
      const { id } = req.params

      if (!id) return res.status(400).json({ errors: ['Faltando ID'] })

      const aluno = await Aluno.findByPk(id)

      if (!aluno) return res.status(404)

      return res.json(aluno)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      if (!id) return res.status(400).json({ errors: ['Faltando ID'] })

      const aluno = await Aluno.findByPk(id)

      if (!aluno) return res.status(404)

      await aluno.destroy()

      return res.status(204).json()
    } catch (e) {
      if (e && e.errors) {
        return res.status(400).json({ errors: e.errors.map(err => err.message) })
      }
      return res.status(500).json({ errors: ['Erro interno'] })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params

      if (!id) return res.status(400).json({ errors: ['Faltando ID'] })

      const aluno = await Aluno.findByPk(id)

      if (!aluno) return res.status(404)

      const alunoAtualizado = await aluno.update(req.body)

      return res.json(alunoAtualizado)
    } catch (e) {
      if (e && e.errors) {
        return res.status(400).json({ errors: e.errors.map(err => err.message) })
      }
      return res.status(500).json({ errors: ['Erro interno'] })
    }
  }
}

export default new AlunoController()

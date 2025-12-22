import User from '../models/User'

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body)
      return res.json(novoUser)
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(err => err.message) })
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll()
      return res.json(users)
    } catch (e) {
      console.log(e)
      return res.json(null)
    }
  }

  async get(req, res) {
    try {
      const { id } = req.params
      const user = await User.findByPk(id)
      return res.json(user)
    } catch (e) {
      console.log(e)
      return res.status(404)
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado.']
        })
      }

      const user = await User.findByPk(id)

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        })
      }

      if (req.body.email && req.body.email !== user.email) {
        const emailUsed = await User.findOne({ where: { email: req.body.email } })
        if (emailUsed) {
          return res.status(400).json({ errors: ['Email já existe'] })
        }
      }

      const usuarioAtualizado = await user.update(req.body)

      return res.json(usuarioAtualizado)
    } catch (e) {
      console.log(e)
      if (e && e.errors) {
        return res.status(400).json({ errors: e.errors.map(err => err.message) })
      }
      return res.status(500).json({ errors: ['Erro interno'] })
    }
  }

    async delete(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado.']
        })
      }

      const user = await User.findByPk(id)

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        })
      }

      await user.destroy()

      return res.status(204).json()
    } catch (e) {
      console.log(e)
      if (e && e.errors) {
        return res.status(400).json({ errors: e.errors.map(err => err.message) })
      }
      return res.status(500).json({ errors: ['Erro interno'] })
    }
  }
}

export default new UserController()

import { Router } from 'express'

export default () => {
  let api = Router()

  api.get('/', (req, res) => {
    res.json({ 'foo': 'bar' })
  })

  return api
}

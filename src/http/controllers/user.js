import HTTP from '../http-common'

export default {
  getUser: (id) => { return HTTP.get(`/users/${id}`) },
  createUser: (user) => { return HTTP.post('/users', user) },
  deleteUser: (id) => { return HTTP.delete(`/users/${id}`) },
  editUser: (id, user) => { return HTTP.put(`/users/${id}`, user) },
  getUsers: () => { return HTTP.get('/users') }
}
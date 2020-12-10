import HTTP from '../http-common'

export default {
  getPayments: () => { return HTTP.get('/payments') },
  getPayment: (id) => { return HTTP.get(`/payments/${id}`) },
  createPayment: (data) => { return HTTP.post('/payments', data) },
  editPayment: (id, data) => { return HTTP.put(`/payments/${id}`, data) },
  deletePayment: (id) => { return HTTP.delete(`/payments/${id}`) }
}
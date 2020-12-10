import HTTP from '../http-common'

export default {
  getArticles: () => { return HTTP.get('/articles') },
  getArticle: (id) => { return HTTP.get(`/articles/${id}`) },
  createArticle: (article) => { return HTTP.post('/articles', article) },
  editArticle: (id, data) => { return HTTP.get(`/articles/${id}`, data) },
  deleteArticle: (id) => { return HTTP.delete(`/articles/${id}`) }
}
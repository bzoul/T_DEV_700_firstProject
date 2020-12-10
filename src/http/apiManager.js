import userCtrl from './controllers/user'
import articleCtrl from './controllers/articles'
import paymentCtrl from './controllers/payment'

const apiManager = {
  ...userCtrl,
  ...articleCtrl,
  ...paymentCtrl
}

export default apiManager;
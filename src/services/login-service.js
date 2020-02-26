import axios from 'axios'



class LoginService {

  constructor() {
    const goLive = true
    this.baseURL = process.env.VUE_APP_BACKEND_URL

    if(process.env.NODE_ENV == 'development' && goLive) {
      this.baseURL = 'https://persistence-service-5avlriwckq-ew.a.run.app'
    }
  }

  login(credentials) {
    return axios.get(this.baseURL + '/login-member',
      {
        headers: {
          'Authorization': 'Basic ' + credentials
        }
      }
    )
      .then(r => r.data)
  }
}

export default new LoginService()
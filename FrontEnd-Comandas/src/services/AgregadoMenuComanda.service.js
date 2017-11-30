import ApiService from './Api.service.js'

class AgregadoMenuComandaService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const agregadoMenuComandaService = new AgregadoMenuComandaService('agregadoMenuComandas')

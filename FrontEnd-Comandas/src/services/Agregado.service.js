import ApiService from './Api.service.js'

class AgregadoService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const agregadoService = new AgregadoService('agregados')

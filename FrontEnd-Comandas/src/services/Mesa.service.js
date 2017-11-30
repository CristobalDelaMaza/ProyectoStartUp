import ApiService from './Api.service.js'

class MesaService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const mesaService = new MesaService('mesas')

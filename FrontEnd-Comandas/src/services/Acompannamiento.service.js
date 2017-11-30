import ApiService from './Api.service.js'

class AcompannamientoService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const acompannamientoService = new AcompannamientoService('acompannamientos')

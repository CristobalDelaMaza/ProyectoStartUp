import ApiService from './Api.service.js'

class CargoService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const cargoService = new CargoService('cargos')

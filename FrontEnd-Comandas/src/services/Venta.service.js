import ApiService from './Api.service.js'

class VentaService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const ventaService = new VentaService('ventas')

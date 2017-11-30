import ApiService from './Api.service.js'

class TipoAgregadoService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const tipoAgregadoService = new TipoAgregadoService('tipoAgregados')

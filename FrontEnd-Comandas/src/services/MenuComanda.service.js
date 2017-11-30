import ApiService from './Api.service.js'

class MenuComandaService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const menuComandaService = new MenuComandaService('menuComandas')

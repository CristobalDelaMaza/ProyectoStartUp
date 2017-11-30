import ApiService from './Api.service.js'

class MenuService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const menuService = new MenuService('menus')

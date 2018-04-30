import Service from '@ember/service';

export default Service.extend({
  get url() {
    return 'https://dev.treinaweb.com.br/pokeapi/'
  },
  init() {
    this.list = [];
    this._super(...arguments);
  },
  listAll() {
    if (this.get('list').length) {
      return this.get('list')
    }
    return fetch(`${this.url}pokedex/1`)
      .then(response => response.json())
      .then(response => response.pokemon)
      .then(pkmList => {
        return pkmList.map(pokemon => {
          let number = this.getNumberFromUrl(pokemon.resource_uri)
          pokemon.number = number
          return pokemon
        })
          .filter(pokemon => pokemon.number < 1000)
          .sort((a, b) => (a.number > b.number ? 1 : -1))
      })
      .then(list => {
        this.set('list', list)
        return list
      })
  },
  getPokemon(number) {
    return fetch(`${this.url}pokemon/${number}`)
      .then(res => res.json())
  },
  getNumberFromUrl(url) {
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'))
  }
});

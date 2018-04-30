import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  number: '',
  pokeService: inject(),
  init() {
    this.queryParams = ['number'];
    this.pokemon = {};
    this._super(...arguments);
  },
  getPokemon() {
    this.get('pokeService').getPokemon(this.get('number'))
      .then(pkm => {
        this.set('pokemon', pkm);
      })
  }
});

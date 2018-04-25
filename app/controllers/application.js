import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  pokeService: inject(),
  init() {
    this.get('pokeService').listAll();
    this._super(...arguments)
  }
});

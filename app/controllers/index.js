import Controller from '@ember/controller';
import  { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({
  pkmFilter: '',
  pkmList: computed('pokeService.list', 'pkmFilter', function() {
    const pkmList = this.get('pokeService').get('list');
    const pkmFilter = this.get('pkmFilter').toLowerCase();
    return pkmList && pkmList.length ? pkmList.filter(pkm => pkm.name.includes(pkmFilter)) : [];
  }),
  pokeService: inject(),
  init() {
    this._super(...arguments);
  }
});

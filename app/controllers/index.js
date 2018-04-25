import Controller from '@ember/controller';
import  { computed } from '@ember/object';

export default Controller.extend({
  pkmFilter: '',
  pkmList: computed('list', 'pkmFilter', function() {
    const pkmList = this.get('list');
    const pkmFilter = this.get('pkmFilter').toLowerCase();
    return pkmList.filter(pkm => pkm.name.includes(pkmFilter));
  }),
  init() {
    this._super(...arguments);
    this.list = [
      {
        name: 'pikachu',
        number: 25
      },
      {
        name: 'chikorita',
        number: 152
      },
      {
        name: 'blaziken',
        number: 257
      }
    ]
  }
});

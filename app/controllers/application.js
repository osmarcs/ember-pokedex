import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.pkmList = [
      {
        name: 'Pikachu',
        number: '025'
      },
      {
        name: 'Chikorita',
        number: '152'
      },
      {
        name: 'Blaziken',
        number: '257'
      }
    ]
  }
});

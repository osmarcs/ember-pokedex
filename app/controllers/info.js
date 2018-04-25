import Controller from '@ember/controller';

export default Controller.extend({
  number: '',
  init() {
    this.queryParams = ['number'];
    this.pokemon = {
      name: 'pikachu',
      types: [
        {
          name: 'electric'
        }
      ],
      attack: 100,
      defense: 100,
      sp_atk: 100,
      sp_def: 100,
      speed: 100,
    };
    this._super(...arguments)
  }
});

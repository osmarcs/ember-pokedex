import Service from '@ember/service';

export default Service.extend({
  init() {
    this.list = [];
    this._super(...arguments);
  },
  listAll() {
    const list = [
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
    ];
    this.set('list', list)
    return Promise.resolve(list);
  },
  getPokemon() {
    return Promise.resolve({
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
      speed: 100
    })
  }
});

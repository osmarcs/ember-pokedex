import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  pokeService: inject(),
  init() {
    this.get('pokeService').listAll();
    this._super(...arguments)
    let pokeballElm;

    window.addEventListener('scroll', () => {
      if (!pokeballElm) {
        pokeballElm = document.querySelector('#pokeballBack')
      }
      let rotation = `translateY(-50%) rotateZ(${window.scrollY / 20}deg)`;
      pokeballElm.style.transform = rotation;
    })
  }
});

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  gameApi: service(),
  flashMessages: service(),
  searchText: '',
  searchResults: null,
    
  resetOnExit: function() {
    this.set('searchText', '');
    this.set('searchResults', null);
  },
    
  actions: {
    reset() {
      this.resetOnExit();
    },
    search() {
      let api = this.get('gameApi');
            
      api.requestOne('searchHelp', { 
        searchText: this.get('searchText')
      }, null)
      .then( (response) => {
        if (response.error) {
          this.get('flashMessages').error("Oops!  Something went wrong when the website talked to the game.  Please try again and alert staff is the problem persists.");          
          return;
        }
        this.set('searchResults', response);
      });
    }
  }
});
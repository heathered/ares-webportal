import Route from '@ember/routing/route';
import AuthenticatedRoute from 'ares-webclient/mixins/authenticated-route';

export default Route.extend(AuthenticatedRoute, {
    titleToken: 'Create Wiki Page',
    
    model: function() {
        return Ember.Object.create();
    }
});
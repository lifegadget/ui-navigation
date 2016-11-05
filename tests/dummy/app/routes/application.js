import Ember from 'ember';

export default Ember.Route.extend({
  actions:  {
    changeMood(hash) {
      this.controllerFor('application').set('mood', hash.value);
    }
  }
});

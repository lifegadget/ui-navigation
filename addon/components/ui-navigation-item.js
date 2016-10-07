import Ember from 'ember';
import layout from '../templates/components/ui-navigation-item';

const item = Ember.Component.extend({
  layout: layout,
  tagName: '',
  init() {
    this._super(...arguments);
    const routeTo = this.get('routeTo');
    if(routeTo) {
      const exists = Ember.getOwner(this).lookup(`route:${routeTo}`);
      if(!exists && routeTo !== 'index') {
        Ember.warn(`The "ui-navigation" component is configured to route to a non-existant route: ${routeTo}`, false, { id: 'nonexistant-route'});
      }
    }
  },

  value: undefined,
  _matchedValue: Ember.computed('selected', 'routeTo', 'value', function() {
    const {selected, value, routeTo} = this.getProperties('selected', 'value', 'routeTo');
    return value ? selected === value : selected === routeTo;
  }),

  actions: {
    onChange(args) {
      this.attrs.onChange(args);
    }
  }

});

item.reopenClass({
  positionalParams: ['title']
});

item[Ember.NAME_KEY] = 'ui-navigation-item';
export default item;

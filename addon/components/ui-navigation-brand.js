import Ember from 'ember';
import layout from '../templates/components/ui-navigation-brand';

const brand = Ember.Component.extend({
  layout: layout,
  tagName: '',

  actions: {
    onChange(args) {
      return this.attrs.onChange(args);
    }
  }
});

brand.reopenClass({
  positionalParams: ['title']
});

brand[Ember.NAME_KEY] = 'ui-navigation-brand';
export default brand;

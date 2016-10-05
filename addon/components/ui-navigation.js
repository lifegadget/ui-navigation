import Ember from 'ember';
import layout from '../templates/components/ui-navigation';

export default Ember.Component.extend({
  layout: layout,
  tagName: '',
  light: false, // light or dark
  full: false,
  fixed: null, // null, up or down
  mood: 'primary',

  actions: {
    onChange(...args) {
      return this.attrs.onChange(args);
    }
  }
});

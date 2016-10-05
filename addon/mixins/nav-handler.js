import Ember from 'ember';

const transition = (fn, route, segments) => {
  if (segments) {
    return fn(route, ...segments);
  }
  return fn(route);
};


export default Ember.Mixin.create({

  actions: {
    navHandler(args) {
      const [context] = args;
      const {routeTo, linkTo, dynSegments} = context.getProperties('routeTo', 'linkTo', 'dynSegments');
      if(linkTo) {
        window.open(linkTo);
        return;
      }
      if (routeTo) {
        const fn = this.transitionToRoute ? this.transitionToRoute.bind(this) : this.transitionTo.bind(this);
        if (!fn) {
          console.log('component needs to have either transitionTo or transitionToRoute available');
        } else {
          transition(fn, routeTo, dynSegments);
        }
      }
    }
  }
});

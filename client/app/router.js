import EmberRouter from '@ember/routing/router';
import config from 'client/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('login');
  this.route("index", {path:"/"}, function() {
    this.route('home', {path:"/"});
    this.route('events', function() {
      this.route('birthday_parties');
      this.route('wedding');
      this.route('baby_shower');
      this.route('others');
      this.route('inaugurations');
    });
    this.route('contact');
    this.route('pack');
    this.route('admin', function() {
      this.route('form');
    });
  })
});

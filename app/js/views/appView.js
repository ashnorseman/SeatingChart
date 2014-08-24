
(function (w, d) {

  w.App = w.App || {};
  w.App.Views = w.App.Views || {};

  w.App.Views.AppView = Backbone.View.extend({

    el: '#main',

    events: {
      'mouseenter [data-nav-list]': 'navMenuActivate',

      // Menu navigation
      'click .page-nav-menu h1': 'navHome',
      'click [data-nav-list]': 'navSub',
      'click .page-nav-icons .fa': 'navSubByIcon'
    },

    initialize: function () {
      var self = this;

      this.$el.load('views/main.html', function () {

        // Elements
        self.$pageNav = $('.page-nav');

        setTimeout(function () {
          self.$pageNav.removeClass('menu-0').addClass('menu-1');
          Backbone.history.stop();
          Backbone.history.start();
        }, 0);
      });
    },

    navMenuActivate: function (e) {
      var navList = $(e.target).closest('li').data('navList');

      if (!$('body').hasClass('detail')) {
        this.$pageNav.attr('class', 'page-nav menu-' + navList);
      }
    },

    navHome: function () {
      this.router.navigate('', {
        trigger: true
      });
    },

    navSub: function (e) {
      var navId = +$(e.target).closest('li').data('navList');
      this.nav(navId);
    },

    navSubByIcon: function (e) {
      var navId = +$(e.target).closest('.icon').data('nav');
      this.nav(navId);
    },

    nav: function (id) {

      switch (id) {
        case 1:
          this.router.navigate('seating-chart', {
            trigger: true
          });
          break;
        case 2:
          this.router.navigate('contact-info', {
            trigger: true
          });
          break;
        case 3:
          this.router.navigate('search', {
            trigger: true
          });
          break;
      }
    }
  });

}(window, document));

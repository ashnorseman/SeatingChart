
(function (w, d) {

  w.App = w.App || {};

  App.Router = Backbone.Router.extend({

    routes: {
      '': 'home',
      'seating-chart': 'seatingChart',
      'seating-chart/:floor': 'seatingChart',
      'contact-info': 'contactInfo',
      'search': 'search'
    },

    home: function () {
      $('body').removeClass();
      $('.page-detail').empty();
    },

    seatingChart: function (floor) {

      $('body').addClass('detail');
      $('.page-detail').load('views/seating-chart.html');
      $('.page-nav').attr('class', 'page-nav menu-1');
    },

    contactInfo: function () {
      $('body').addClass('detail');
      $('.page-detail').load('views/contact-info.html');
      $('.page-nav').attr('class', 'page-nav menu-2');
    },

    search: function () {
      $('body').addClass('detail');
      $('.page-detail').load('views/search.html');
      $('.page-nav').attr('class', 'page-nav menu-3');
    }
  });

  (new App.Views.AppView).router = new App.Router;

  Backbone.history.start();

}(window, document));

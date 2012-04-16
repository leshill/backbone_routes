var Router = Backbone.Router.extend({
  routes: {
    "" : "root",
    "content" : "basic",
    "content/:id" : "param"
  },

  root: function() {
    alert('Route found for the root path');
  },

  basic: function() {
    alert('Route found for the basic path');
  },

  param: function(id) {
    alert('Route found for the param path with id: ' + id);
  }
});

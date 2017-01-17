pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      pageData: {
        visited: 0,
      }
    }
  },
  methods: {
    // Any page specific methods go here.

  },
  ready: function() {
    // Ready will be fired when the page is loaded.
    var t = this;
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateDataPopups();

  }
}

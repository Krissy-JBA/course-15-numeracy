pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
    }
  },
  methods: {
    // Any page specific methods go here.
  },
  ready: function() {
    // Ready will be fired when the page is loaded.
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateDataPopups();
    courseFeatureJBA.flexySpeckCheck();
  }
}

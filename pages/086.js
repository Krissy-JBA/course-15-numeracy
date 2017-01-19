pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      popup1:false,
      popup2:false,
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

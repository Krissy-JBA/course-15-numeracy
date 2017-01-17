pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      popup1:false,
      pop1:false,
      pop2:false,
      pop3:false,
      pop4:false,
      pop5:false,
      pop6:false,
      pop7:false,
      pop8:false,
      pop9:false,
    }
  },
  methods: {
    // Any page specific methods go here.
  },
  ready: function() {
    // Ready will be fired when the page is loaded.
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateDataPopups();
  }
}

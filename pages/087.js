pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      popup1:false,
      popup2:false,
      popup3:false,
      popup4:false,
      popup5:false,
      popup6:false,
      popup7:false,
      popup8:false,
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

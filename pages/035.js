pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      pageData:{
        total: '0.00',
        hour: '0.00',
        shirt: '0.00',
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
    courseFeatureJBA.flexySpeckCheck();

    // funky shirt cost = material cost + assembly cost
    this.pageData.total = this.exerciseData[ 'zoeys-clothing-cost.total' ];
    this.pageData.hour = this.exerciseData[ 'zoeys-clothing-cost.hour' ];
    this.pageData.shirt = this.exerciseData[ 'zoeys-clothing-cost.shirt' ];
    // console.log(t.pageData.total , t.pageData.hour);
    t.pageData.shirt = (parseFloat(this.pageData.total) + parseFloat(this.pageData.hour)).toFixed(2);
    t.$parent.saveData( 'zoeys-clothing-cost.shirt', t.pageData.shirt );

  }
}

pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      pageData: {
        great: false,
        good: false,
        notbad: false,
        help: false
      }
    }
  },
  methods: {
    // Any page specific methods go here.
    clickFeeling: function(feeling){
     this.pageData[feeling] = !this.pageData[feeling];
     this.$parent.saveData('how-feeling.' + feeling, this.pageData[feeling]);

    },
    loadPageData: function(){
      for(var key in this.pageData){
        if(this.pageData.hasOwnProperty(key)){
          if(this.exerciseData['how-feeling.' + key]){
            if(typeof this.exerciseData['how-feeling.' + key] === 'string'){
              this.pageData[key] = (this.exerciseData['how-feeling.' + key] === 'true');
            } else {
              this.pageData[key] = (this.exerciseData['how-feeling.' + key] === true);
            }
          }
        }
      }
    },
  },
  ready: function() {
    // Ready will be fired when the page is loaded.
    var t = this;
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateDataPopups();
    t.loadPageData();
  }
}

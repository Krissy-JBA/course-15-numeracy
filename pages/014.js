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
    sendone: function(){
      this.pageData.visited = 1;
      this.$parent.saveData( 'how-you-feeling.visited', this.pageData.visited );
    },
    sendtwo: function(){
      this.pageData.visited = 2;
      this.$parent.saveData( 'how-you-feeling.visited', this.pageData.visited );
    },
    sendthree: function(){
      this.pageData.visited = 3;
      this.$parent.saveData( 'how-you-feeling.visited', this.pageData.visited );
    },
    sendfour: function(){
      this.pageData.visited = 4;
      this.$parent.saveData( 'how-you-feeling.visited', this.pageData.visited );
    },
  },
  ready: function() {
    // Ready will be fired when the page is loaded.
    var t = this;
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateDataPopups();

    t.pageData.visited = parseInt(t.exerciseData[ 'how-you-feeling.visited' ]);

  }
}

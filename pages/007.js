pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      pageData: {
        visited: 0,
      },
      // buttonValidate: true
    }
  },
  methods: {
    // Any page specific methods go here.
    sendData: function() {
      this.pageData.visited = 1;
      // this.buttonValidate = false;
      this.$parent.saveData('arts.visited', this.pageData.visited);
      // this.$parent.saveData('arts.buttonValidate', this.buttonValidate);
    },
    callPageTransition: function(){
      var poppedElement = $(".pop-in");
      $(poppedElement).each(function() {
        var thisPop = this;
        setInterval(function() {
          $(thisPop).addClass("popOut");
        }, 200);
      });
      setTimeout(function(){
        window.location.href = "#008";
      },1000)
    },
    nextPageBtn: function(){
      if(this.pageData.visited == 1){
        this.callPageTransition();
      }
    },

  },
  ready: function() {
    // Ready will be fired when the page is loaded.
    var t = this;
    $(".wrong").on('click', function() {
       // console.log("hello");
      $(this).addClass("animated shake");
      $(this).one("animationend", function() {
         $(this).removeClass("animated shake");
      });
    });
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateDataPopups();

    t.pageData.visited = parseInt(t.exerciseData[ 'arts.visited' ]);
    // t.buttonValidate = this.exerciseData[ 'arts.buttonValidate' ];
  }
}

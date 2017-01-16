pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      pageData: {
        correct: false,
        visited: 0,
      },
      buttonValidate: true
    }
  },
  methods: {
    // Any page specific methods go here.
    clickCorrect: function(correct){
     this.pageData[correct] = !this.pageData[correct];
     this.$parent.saveData('clean-the-house.' + correct, this.pageData[correct]);
     this.activateSubmit();
    },
    activateSubmit: function(){
      for(var key in this.pageData){
        if(this.pageData.hasOwnProperty(key)){
            if(this.pageData[key] === true){
              return this.buttonValidate = false;
            }
        }
      }
      return this.buttonValidate = true;
    },
    loadPageData: function(){
      for(var key in this.pageData){
        if(this.pageData.hasOwnProperty(key)){
          if(this.exerciseData['clean-the-house.' + key]){
            if(typeof this.exerciseData['clean-the-house.' + key] === 'string'){
              this.pageData[key] = (this.exerciseData['clean-the-house.' + key] === 'true');
            } else {
              this.pageData[key] = (this.exerciseData['clean-the-house.' + key] === true);
            }
          }
            this.pageData.visited = 1;
        }
      }
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
        window.location.href = "#013";
      },1000)
    },
    nextPageBtn: function(){
      if(!this.buttonValidate){
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
    t.loadPageData();
    t.activateSubmit();
  }
}

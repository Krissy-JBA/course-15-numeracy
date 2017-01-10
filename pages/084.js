pageComponentry = {
  data: function() {
    return {
      pageData: {
        link: '',
        puzzles: ''
      },

      hideLocked: false,
      disabledInput: true

    }
  },
  methods: {
    callPageTransition: function(){
      var poppedElement = $(".pop-in");
        $(poppedElement).each(function() {
            var thisPop = this;
            setInterval(function() {
                $(thisPop).addClass("popOut");
            }, 200);
        });
        setTimeout(function(){
          window.location.href = "#085";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.link || !this.pageData.puzzles){
        this.hideLocked = false,
        this.disabledInput = true
      } else {
        this.hideLocked = true,
        this.disabledInput = false
      }
    },

    sendData: function(){
      var obj = this.pageData;
      if(this.disabledInput){
        return;
      } else {
        this.callPageTransition();
      }
    }

  },
  ready: function() {
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateTextBoxUi();

    //load data on page load
    this.pageData.link = this.exerciseData['activity-time.link'];
    this.pageData.puzzles = this.exerciseData['activity-time.puzzles'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

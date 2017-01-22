pageComponentry = {
  data: function() {
    return {
      pageData: {
        addition: '',
        subtraction: ''
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
          window.location.href = "#045";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.addition || !this.pageData.subtraction){
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
    courseFeatureJBA.flexySpeckCheck();

    //load data on page load
    this.pageData.addition = this.exerciseData['activity-time.addition'];
    this.pageData.subtraction = this.exerciseData['activity-time.subtraction'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

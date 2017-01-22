pageComponentry = {
  data: function() {
    return {
      pageData: {
        percentages: '',
        decisions: ''
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
          window.location.href = "#078";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.percentages || !this.pageData.decisions){
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
    this.pageData.percentages = this.exerciseData['activity-time.percentages'];
    this.pageData.decisions = this.exerciseData['activity-time.decisions'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

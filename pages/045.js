pageComponentry = {
  data: function() {
    return {
      pageData: {
        multiplication: '',
        division: ''
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
          window.location.href = "#046";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.multiplication || !this.pageData.division){
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
    this.pageData.multiplication = this.exerciseData['activity-time.multiplication'];
    this.pageData.division = this.exerciseData['activity-time.division'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

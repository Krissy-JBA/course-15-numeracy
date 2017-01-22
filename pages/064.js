pageComponentry = {
  data: function() {
    return {
      pageData: {
        shopping: '',
        personal: ''
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
          window.location.href = "#065";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.shopping || !this.pageData.personal){
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
    this.pageData.shopping = this.exerciseData['activity-time.shopping'];
    this.pageData.personal = this.exerciseData['activity-time.personal'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

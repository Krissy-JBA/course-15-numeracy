pageComponentry = {
  data: function() {
    return {
      pageData: {
        apps: '',
        enhance: ''
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
          window.location.href = "#016";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.apps || !this.pageData.enhance){
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
    this.pageData.apps = this.exerciseData['activity-time.apps'];
    this.pageData.enhance = this.exerciseData['activity-time.enhance'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

pageComponentry = {
  data: function() {
    return {
      pageData: {
        management: '',
        interact: ''
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
          window.location.href = "#049";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.management || !this.pageData.interact){
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
    this.pageData.management = this.exerciseData['activity-time.management'];
    this.pageData.interact = this.exerciseData['activity-time.interact'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

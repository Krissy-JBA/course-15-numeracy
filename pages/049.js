pageComponentry = {
  data: function() {
    return {
      pageData: {
        remember: '',
        consider: ''
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
          window.location.href = "#050";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.remember || !this.pageData.consider){
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
    this.pageData.remember = this.exerciseData['activity-time.remember'];
    this.pageData.consider = this.exerciseData['activity-time.consider'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

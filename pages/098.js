pageComponentry = {
  data: function() {
    return {
      pageData: {
        snapshot: ''
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
          window.location.href = "#099";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.snapshot ){
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
    courseFeatureJBA.activateDataPopups();
    courseFeatureJBA.activateTextBoxUi();

    //load data on page load
    this.pageData.snapshot = this.exerciseData['activity-time.snapshot'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

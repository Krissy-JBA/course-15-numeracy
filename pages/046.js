pageComponentry = {
  data: function() {
    return {
      pageData: {
        inch: '',
        writeLength: ''
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
          window.location.href = "#047";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.inch || !this.pageData.writeLength){
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
    this.pageData.inch = this.exerciseData['activity-time.inch'];
    this.pageData.writeLength = this.exerciseData['activity-time.writeLength'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

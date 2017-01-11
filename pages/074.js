pageComponentry = {
  data: function() {
    return {
      pageData: {
        metric: '',
        ratio: ''
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
          window.location.href = "#075";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.metric || !this.pageData.ratio){
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
    this.pageData.metric = this.exerciseData['activity-time.metric'];
    this.pageData.ratio = this.exerciseData['activity-time.ratio'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

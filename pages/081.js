pageComponentry = {
  data: function() {
    return {
      pageData: {
        web: '',
        website: ''
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
          window.location.href = "#082";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.web || !this.pageData.website){
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
    this.pageData.web = this.exerciseData['activity-time.web'];
    this.pageData.website = this.exerciseData['activity-time.website'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

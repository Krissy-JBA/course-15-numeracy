pageComponentry = {
  data: function() {
    return {
      pageData: {
        budget: '',
        challenge: ''
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
          window.location.href = "#052";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.budget || !this.pageData.challenge){
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
    this.pageData.budget = this.exerciseData['activity-time.budget'];
    this.pageData.challenge = this.exerciseData['activity-time.challenge'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

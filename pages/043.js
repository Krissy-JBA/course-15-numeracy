pageComponentry = {
  data: function() {
    return {
      pageData: {
        symbol: '',
        decimal: ''
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
          window.location.href = "#044";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.symbol || !this.pageData.decimal){
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
    this.pageData.symbol = this.exerciseData['activity-time.symbol'];
    this.pageData.decimal = this.exerciseData['activity-time.decimal'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

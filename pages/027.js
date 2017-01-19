pageComponentry = {
  data: function() {
    return {
      pageData: {
        appeal: '',
        difference: ''
      },
      hideLocked: false,
      disabledInput: true

    }
  },
  methods: {
    // Any page specific methods go here.
    callPageTransition: function(){
      var poppedElement = $(".pop-in");
        $(poppedElement).each(function() {
            var thisPop = this;
            setInterval(function() {
                $(thisPop).addClass("popOut");
            }, 200);
        });
        setTimeout(function(){
          window.location.href = "#028";
        },1000)
    },
    validateInputFields: function(){
      if(!this.pageData.appeal || !this.pageData.difference){
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
    // Ready will be fired when the page is loaded.
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateTextBoxUi();
    courseFeatureJBA.activateDataPopups();
    courseFeatureJBA.flexySpeckCheck();

    //load data on page load
    this.pageData.appeal = this.exerciseData['getting-zoeys-buy-in.appeal'];
    this.pageData.difference = this.exerciseData['getting-zoeys-buy-in.difference'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

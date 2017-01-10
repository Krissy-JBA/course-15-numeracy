pageComponentry = {
  data: function() {
    return {
      // Any data goes here.
      pageData: {
        describe: ''
      },

      disabledInput: true,
      hideLocked: false

    }
  },
  methods: {
    validateInputFields: function(){
      if(!this.pageData.describe){
        this.hideLocked = false,
        this.disabledInput = true
      } else {
        this.hideLocked = true,
        this.disabledInput = false
      }
    },

   callPageTransition: function(){
      var poppedElement = $(".pop-in");
        $(poppedElement).each(function() {
            var thisPop = this;
            setInterval(function() {
                $(thisPop).addClass("popOut");
            }, 200);
        });
        setTimeout(function(){
          window.location.href = "#031";
        },1000)
    },

    sendData: function(){
      if(this.disabledInput){
        return;
      } else {
        this.callPageTransition();
      }
    },
  },
  ready: function() {
    //call transition
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateTextBoxUi();
    courseFeatureJBA.activateDataPopups();

    //load data on page load
    this.pageData.describe = this.exerciseData['workplace-numeracy.describe'];
    //populate data before calling the validate function
    this.validateInputFields();
  }
}

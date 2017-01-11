pageComponentry = {
  data: function() {
    return {
      // Any data goes here.
      pageData: {
        fabric: ''
      },
      disabledInput: true,
      hideLocked: false

    }
  },
  methods: {
    validateInputFields: function(){
      if(!this.pageData.fabric){
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
          window.location.href = "#073";
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
    this.pageData.fabric = this.exerciseData['bringing-it-all-together.fabric'];
    //populate data before calling the validate function
    this.validateInputFields();
  }
}

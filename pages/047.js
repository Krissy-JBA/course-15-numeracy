pageComponentry = {
  data: function() {
    return {
      pageData: {
        capacity: '',
        weight: ''
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
          window.location.href = "#048";
        },1000)
    },

    validateInputFields: function(){
      if(!this.pageData.capacity || !this.pageData.weight){
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
    this.pageData.capacity = this.exerciseData['activity-time.capacity'];
    this.pageData.weight = this.exerciseData['activity-time.weight'];

    //populate data before calling the validate function
    this.validateInputFields();
  }
}

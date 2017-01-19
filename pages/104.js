pageComponentry = {
  data: function() {
    return {
      // Any data goes here.

    }
  },
  methods: {

  },
  ready: function() {
    //call transition
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.flexySpeckCheck();
    $(".firstCheck, .secondCheck, .thirdCheck, .fourthCheck, .fifthCheck").hide();
    setTimeout(function() { $(".firstCheck").show(200) }, 1000);
    setTimeout(function() { $(".secondCheck").show(200) }, 2000);
    setTimeout(function() { $(".thirdCheck").show(200) }, 3000);
    setTimeout(function() { $(".fourthCheck").show(200) }, 4000);
    setTimeout(function() { $(".fifthCheck").show(200) }, 5000);
  }
}

pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
    }
  },
  methods: {
    // Any page specific methods go here.
  },
  ready: function() {
    courseFeatureJBA.flexySpeckCheck(); courseFeatureJBA.transitionIn();

    $(function(){
      var animDelay = 1000;
      setTimeout(function(){
        $('.pageSixBox1').parent().removeClass('hidden').addClass("animated fadeIn");
        setTimeout(function(){
            $('.pageSixBox2').parent().removeClass('hidden').addClass("animated fadeIn");
            $('.pageSixBox1').children().find('.pageSixLine').addClass('showing');
          setTimeout(function(){
              $('.pageSixBox3').parent().removeClass('hidden').addClass("animated fadeIn");
              $('.pageSixBox2').children().find('.pageSixLine').addClass('showing');
            setTimeout(function(){
                $('.pageSixBox4').parent().removeClass('hidden').addClass("animated fadeIn");
                $('.pageSixBox3').children().find('.pageSixLine').addClass('showing');
            },animDelay);
          },animDelay);
        },animDelay);
      },animDelay);
    });



  }


}

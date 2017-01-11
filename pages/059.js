pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      inputfield1: '',
      inputfield2: '',
      inputfield3: '',
      inputfield4: '',
      inputfield5: '',
      inputfield6: '',
      answer: '',
      popup1: false,
      popup2: false,
      correct: false
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputData: function(value) {
      if ($('#test1').prop('checked')) {
        this.inputfield1 = $('#test1').val();
      }
      if ($('#test2').prop('checked')) {
        this.inputfield2 = $('#test2').val();
      }
      if ($('#test3').prop('checked')) {
        this.inputfield3 = $('#test3').val();
      }
      if ($('#test4').prop('checked')) {
        this.inputfield4 = $('#test4').val();
      }
      if ($('#test5').prop('checked')) {
        this.inputfield5 = $('#test5').val();
      }
      if ($('#test6').prop('checked')) {
        this.inputfield6 = $('#test6').val();
      }
      this.answer = this.inputfield1 + this.inputfield2 + this.inputfield3 + this.inputfield4 + this.inputfield5 + this.inputfield6;
      this.$parent.saveData('whatisVerbalComm', this.answer);

      // if ( $('#test2').prop('checked') &&
      // $('#test3').prop('checked') &&
      // $('#test5').prop('checked') &&
      // $('#test6').prop('checked')) {
        this.correct = true;
      // } else {
      //   this.correct = false;
      // }
    },
    answerPopup: function() {
      if(this.correct == true) {
        this.popup2 = true;
      }
      else {
        this.popup1 = true;
      }
    },
    redirect: function() {
      window.location.hash = '#060';
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn();
    if(this.exerciseData['whatisVerbalComm']){
    var data1 = this.exerciseData['whatisVerbalComm'];
    var expr1 = "orange";
    var expr2 = "3kg";
    var expr3 = "1metre";
    var expr4 = "furry";
    var expr5 = "cotton";
    var expr6 = "50metres";
    if (data1.indexOf(expr1) !== -1) {
      $('#test1').prop('checked', true);
    }
    if (data1.indexOf(expr2) !== -1) {
      $('#test2').prop('checked', true);
    }
    if (data1.indexOf(expr3) !== -1) {
      $('#test3').prop('checked', true);
    }
    if (data1.indexOf(expr4) !== -1) {
      $('#test4').prop('checked', true);
    }
    if (data1.indexOf(expr5) !== -1) {
      $('#test5').prop('checked', true);
    }
    if (data1.indexOf(expr6) !== -1) {
      $('#test6').prop('checked', true);
    }


  }


  }


}

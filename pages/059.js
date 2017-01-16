pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      check1: '',
      check2: '',
      check3: '',
      check4: '',
      check5: '',
      check6: '',
      popup1: false,
      popup2: false,
      correct: false,
      locked: true,
    }
  },
  methods: {

      toggleLocked: function() {

          if (this.check1 == true || this.check2 == true || this.check3 == true || this.check4 == true || this.check5 == true || this.check6 == true) {
              this.locked = false;
          } else {
              this.locked = true;
          }

      },
      submitCheck: function() {

          if (this.check1 == false && this.check2 == true && this.check3 == true && this.check4 == false && this.check5 == true && this.check6 == true) {
              this.correct = true;
              this.popup1 = true;
          } else {
              this.popup2 = true;
          }
      }
  },
  ready: function() {
      courseFeatureJBA.transitionIn();
      courseFeatureJBA.flexySpeckCheck();

      if (this.exerciseData['check1'] === "true" || this.exerciseData['check1'] === true) {
          this.check1 = true;
      } else {
          this.check1 = false;
      }

      if (this.exerciseData['check2'] === "true" || this.exerciseData['check2'] === true) {
          this.check2 = true;
      } else {
          this.check2 = false;
      }

      if (this.exerciseData['check3'] === "true" || this.exerciseData['check3'] === true) {
          this.check3 = true;
      } else {
          this.check3 = false;
      }

      if (this.exerciseData['check4'] === "true" || this.exerciseData['check4'] === true) {
          this.check4 = true;
      } else {
          this.check4 = false;
      }
      if (this.exerciseData['check5'] === "true" || this.exerciseData['check5'] === true) {
          this.check5 = true;
      } else {
          this.check5 = false;
      }
      if (this.exerciseData['check6'] === "true" || this.exerciseData['check6'] === true) {
          this.check6 = true;
      } else {
          this.check6 = false;
      }


      this.toggleLocked();

  }
 }

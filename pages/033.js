pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.

      pageData: {
        total:'0.00',
        hour:'0.00',
        data33:'',
      }
    }
  },
  methods: {
    // Any page specific methods go here.
  },
  ready: function() {
    // Ready will be fired when the page is loaded.
    var t = this;

   //  console.log($('#cotton input').attr('value'));

    // Ready will be fired when the page is loaded.
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateDataPopups();
    courseFeatureJBA.activateTextBoxUi();

    $( function(){
      $("#drag-num li").draggable({
        connectToSortable: '#sort-num',
        revert: true
     });
      $( '#sort-num' ).sortable({
        revert: true,
        update: function() {
         //  if( $('#sort-num #cotton').length || $('#sort-num #fabric').length || $('#sort-num #zip').length || $('#sort-num #buttons').length || $('#sort-num #labels').length || $('#sort-num #embroidery').length  ) {
         //    this.validateInputFields();
         //  }
          var num = 0;
          if( $( '#sort-num #one-num' ).length ) {
            num = $('#one-num input').attr('value');
          }
          if( $( '#sort-num #two-num' ).length ) {
             num = Number($('#two-num input').attr('value'));
          }
          if( $( '#sort-num #three-num' ).length ) {
             num = Number($('#three-num input').attr('value'));
          }
          if( $( '#sort-num #four-num' ).length ) {
             num = Number($('#four-num input').attr('value'));
          }
          if( $( '#sort-num #five-num' ).length ) {
             num = Number($('#five-num input').attr('value'));
          }
          if( $( '#sort-num #six-num' ).length ) {
             num = Number($('#six-num input').attr('value'));
          }
          if( $( '#sort-num li').length ){
            $( '#sort-num' ).css( 'background-image','none' );
            $( '#sort-num .drop').text('');
            $( '#sort-num li span' ).removeClass('magenta-blob').addClass('purple-blob-box');
            $( '#sort-num li' ).css({
              'left': '50%',
              'top': '50%',
              'width': '50px',
              'height': '57px',
              'position': 'relative',
              'transform': 'translate(-50%,-50%)'
            });
            // console.log();
            // $( '.total-33' ).text( 15*(num/60) );
            var sum = 15*(num/60);
            t.pageData.hour = sum;
            t.$parent.saveData( 'zoeys-clothing-cost.hour', t.pageData.hour );
            t.pageData.data33 = $('#sort-num li').attr('id');
            t.$parent.saveData( 'zoeys-clothing-cost.data33', t.pageData.data33 );

          }

        }
      });
    });//function
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateDataPopups();
    this.pageData.total = this.exerciseData[ 'zoeys-clothing-cost.total' ];
    this.pageData.hour = this.exerciseData[ 'zoeys-clothing-cost.hour' ];
  }
}

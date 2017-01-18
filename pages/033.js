pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.

      pageData: {
        total:'0.00',
        hour:'0.00',
        drag: '',
        sort: '',
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
            $('#drag-num #one-num').remove;
          }
          if( $( '#sort-num #two-num' ).length ) {
             num = Number($('#two-num input').attr('value'));
             $('#drag-num #two-num').remove;
          }
          if( $( '#sort-num #three-num' ).length ) {
             num = Number($('#three-num input').attr('value'));
             $('#drag-num #three-num').remove;
          }
          if( $( '#sort-num #four-num' ).length ) {
             num = Number($('#four-num input').attr('value'));
             $('#drag-num #four-num').remove;
          }
          if( $( '#sort-num #five-num' ).length ) {
             num = Number($('#five-num input').attr('value'));
             $('#drag-num #five-num').remove;
          }
          if( $( '#sort-num #six-num' ).length ) {
             num = Number($('#six-num input').attr('value'));
             $('#drag-num #six-num').remove;
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
            var drag = document.getElementById("drag-num").innerHTML;
            var sort = document.getElementById("sort-num").innerHTML;
            t.$parent.saveData('zoeys-clothing-cost2.drag', drag);
            t.$parent.saveData('zoeys-clothing-cost2.sort', sort);

          }

        }
      });
    });//function
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateDataPopups();
    this.pageData.total = this.exerciseData[ 'zoeys-clothing-cost.total' ];
    this.pageData.hour = this.exerciseData[ 'zoeys-clothing-cost.hour' ];
    t.pageData.drag = t.exerciseData[ 'zoeys-clothing-cost2.drag' ];
    t.pageData.sort = t.exerciseData[ 'zoeys-clothing-cost2.sort' ];

   //  console.log(t.pageData.save);
    if(t.pageData.drag){
      document.getElementById("drag-num").innerHTML = t.pageData.drag;
    }
    if(t.pageData.sort){
      document.getElementById("sort-num").innerHTML = t.pageData.sort;
    }
  }
}

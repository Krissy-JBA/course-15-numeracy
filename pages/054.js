pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      popup1: false,
      locked: true,
      pageData:{
        measurement: '',
      },
    }
  },
  methods: {
    // Any page specific methods go here.
  },
  ready: function() {
    // Ready will be fired when the page is loaded.
    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateDataPopups();
    var t = this;

    $( function() {
      $( "#sortable" ).sortable({
        revert: false,
        connectWith: 'content-row',
        update: function(){
          if( $( '#sortable li:eq(0)' ).attr('id') == 'dollor' ) {
            $( '#sortable li:eq(0)' ).sortable({disable:true});
            $( '#sortable li:eq(0) p' ).removeClass( 'magenta-blob-box' ).addClass( 'purple-blob-box' );
            $( '#sortable li:eq(0) i' ).addClass( 'fa fa-check' );
          } else {
            // $( '#sortable li:eq(0)' ).sortable({disable:false});
            $( '#sortable li:eq(0) p' ).addClass( 'magenta-blob-box' ).removeClass( 'purple-blob-box' );
            $( '#sortable li:eq(0) i' ).removeClass( 'fa fa-check' );
          }
          if( $( '#sortable li:eq(1)' ).attr('id') == 'hour' ) {
            $( '#sortable li:eq(1)' ).sortable({disable:true});
            $( '#sortable li:eq(1) p' ).removeClass( 'magenta-blob-box' ).addClass( 'purple-blob-box' );
            $( '#sortable li:eq(1) i' ).addClass( 'fa fa-check' );
          } else {
            // $( '#sortable li:eq(1)' ).sortable({disable:false});
            $( '#sortable li:eq(1) p' ).addClass( 'magenta-blob-box' ).removeClass( 'purple-blob-box' );
            $( '#sortable li:eq(1) i' ).removeClass( 'fa fa-check' );
          }
          if( $( '#sortable li:eq(2)' ).attr('id') == 'sizeArea' ) {
            $( '#sortable li:eq(2)' ).sortable({disable:true});
            $( '#sortable li:eq(2) p' ).removeClass( 'magenta-blob-box' ).addClass( 'purple-blob-box' );
            $( '#sortable li:eq(2) i' ).addClass( 'fa fa-check' );
          } else {
            // $( '#sortable li:eq(2)' ).sortable({disable:false});
            $( '#sortable li:eq(2) p' ).addClass( 'magenta-blob-box' ).removeClass( 'purple-blob-box' );
            $( '#sortable li:eq(2) i' ).removeClass( 'fa fa-check' );
          }
          if( $( '#sortable li:eq(3)' ).attr('id') == 'quantity' ){
            $( '#sortable li:eq(3)' ).sortable({disable:true});
            $( '#sortable li:eq(3) p' ).removeClass( 'magenta-blob-box' ).addClass( 'purple-blob-box' );
            $( '#sortable li:eq(3) i' ).addClass( 'fa fa-check' );
          } else{
            // $( '#sortable li:eq(3)' ).sortable({disable:false});
            $( '#sortable li:eq(3) p' ).addClass( 'magenta-blob-box' ).removeClass( 'purple-blob-box' );
            $( '#sortable li:eq(3) i' ).removeClass( 'fa fa-check' );
          }

          if( $( '#sortable li:eq( 0 )' ).attr('id') == 'dollor' && $( '#sortable li:eq( 1 )' ).attr('id') == 'hour' && $( '#sortable li:eq( 2 )' ).attr('id') == 'sizeArea' && $( '#sortable li:eq( 3 )' ).attr('id') == 'quantity' ){
            //popup for 'good job'
            $( '#sortable' ).sortable({destroy:true});
            t.locked = false;

            t.popup1 = true;
            var measurement = document.getElementById("sortable").innerHTML;
            t.$parent.saveData('type-of-measurement.measurement', measurement );
          }

        }
      });
      $( "ul, li" ).disableSelection();

    });
    t.pageData.measurement = t.exerciseData[ 'type-of-measurement.measurement' ];
    if(t.pageData.measurement){
      $('#sortable li').remove();
      document.getElementById("sortable").innerHTML = t.pageData.measurement;
      t.locked = false;
    }

  }
}

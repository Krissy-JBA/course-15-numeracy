pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      popup1: false,
      locked: true,
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
          if( $( '#sortable li:eq(0)' ).attr('id') == 'employee' ) {
            $( '#sortable li:eq(0)' ).sortable({
              destroy:true,
            });
            $( '#sortable li:eq(0) p' ).removeClass( 'magenta-blob-box' ).addClass( 'purple-blob-box' );
            $( '#sortable li:eq(0) i' ).addClass( 'fa fa-check' );
          } else {
            $( '#sortable li:eq(0) p' ).addClass( 'magenta-blob-box' ).removeClass( 'purple-blob-box' );
            $( '#sortable li:eq(0) i' ).removeClass( 'fa fa-check' );
          }
          if( $( '#sortable li:eq(1)' ).attr('id') == 'profit' ) {
            $( '#sortable li:eq(1)' ).sortable({destroy:true});
            $( '#sortable li:eq(1) p' ).removeClass( 'magenta-blob-box' ).addClass( 'purple-blob-box' );
            $( '#sortable li:eq(1) i' ).addClass( 'fa fa-check' );
          } else {
            $( '#sortable li:eq(1) p' ).addClass( 'magenta-blob-box' ).removeClass( 'purple-blob-box' );
            $( '#sortable li:eq(1) i' ).removeClass( 'fa fa-check' );
          }
          if( $( '#sortable li:eq(2)' ).attr('id') == 'customer' ) {
            $( '#sortable li:eq(2)' ).sortable({destroy:true});
            $( '#sortable li:eq(2) p' ).removeClass( 'magenta-blob-box' ).addClass( 'purple-blob-box' );
            $( '#sortable li:eq(2) i' ).addClass( 'fa fa-check' );
          } else {
            $( '#sortable li:eq(2) p' ).addClass( 'magenta-blob-box' ).removeClass( 'purple-blob-box' );
            $( '#sortable li:eq(2) i' ).removeClass( 'fa fa-check' );
          }

          if( $( '#sortable li:eq( 0 )' ).attr('id') == 'employee' && $( '#sortable li:eq( 1 )' ).attr('id') == 'profit' && $( '#sortable li:eq( 2 )' ).attr('id') == 'customer' ){
            //popup for 'good job'
            $( '#sortable' ).sortable({destroy:true});
            t.popup1 = true;
          }

        }
      });
      $( "ul, li" ).disableSelection();

    });


  }
}

pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      popup1: false,
      locked: true,
      pageData: {
        customer: '',
      }
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
            t.locked = false;
            t.popup1 = true;
            var customer = document.getElementById("sortable").innerHTML;
            t.$parent.saveData('type-of-measurement.customer', customer );
          }

        }
      });
      $( "ul, li" ).disableSelection();

    });
    t.pageData.customer = t.exerciseData[ 'type-of-measurement.customer' ];
    if(t.pageData.customer){
      $('#sortable li').remove();
      document.getElementById("sortable").innerHTML = t.pageData.customer;
      t.locked = false;
    }
  }
}

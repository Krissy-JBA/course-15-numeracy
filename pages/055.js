pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      popup1: false,
      locked: true,
      pageData:{
        observation: '',
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
          if( $( '#sortable li:eq(0)' ).attr('id') == 'counting' ) {
            $( '#sortable li:eq(0)' ).sortable({
              destroy:true,
            });
            $( '#sortable li:eq(0) p' ).removeClass( 'magenta-blob-box' ).addClass( 'purple-blob-box' );
            $( '#sortable li:eq(0) i' ).addClass( 'fa fa-check' );
          } else {
            $( '#sortable li:eq(0) p' ).addClass( 'magenta-blob-box' ).removeClass( 'purple-blob-box' );
            $( '#sortable li:eq(0) i' ).removeClass( 'fa fa-check' );
          }
          if( $( '#sortable li:eq(1)' ).attr('id') == 'observation' ) {
            $( '#sortable li:eq(1)' ).sortable({destroy:true});
            $( '#sortable li:eq(1) p' ).removeClass( 'magenta-blob-box' ).addClass( 'purple-blob-box' );
            $( '#sortable li:eq(1) i' ).addClass( 'fa fa-check' );
          } else {
            $( '#sortable li:eq(1) p' ).addClass( 'magenta-blob-box' ).removeClass( 'purple-blob-box' );
            $( '#sortable li:eq(1) i' ).removeClass( 'fa fa-check' );
          }
          if( $( '#sortable li:eq(2)' ).attr('id') == 'calculation' ) {
            $( '#sortable li:eq(2)' ).sortable({destroy:true});
            $( '#sortable li:eq(2) p' ).removeClass( 'magenta-blob-box' ).addClass( 'purple-blob-box' );
            $( '#sortable li:eq(2) i' ).addClass( 'fa fa-check' );
          } else {
            $( '#sortable li:eq(2) p' ).addClass( 'magenta-blob-box' ).removeClass( 'purple-blob-box' );
            $( '#sortable li:eq(2) i' ).removeClass( 'fa fa-check' );
          }

          if( $( '#sortable li:eq( 0 )' ).attr('id') == 'counting' && $( '#sortable li:eq( 1 )' ).attr('id') == 'observation' && $( '#sortable li:eq( 2 )' ).attr('id') == 'calculation' ){
            //popup for 'good job'
            $( '#sortable' ).sortable({destroy:true});
            t.locked = false;
            t.popup1 = true;
            var observation = document.getElementById("sortable").innerHTML;
            t.$parent.saveData('type-of-measurement.observation', observation );
          }

        }
      });
      $( "ul, li" ).disableSelection();

    });
    t.pageData.observation = t.exerciseData[ 'type-of-measurement.observation' ];
    if(t.pageData.observation){
      $('#sortable li').remove();
      document.getElementById("sortable").innerHTML = t.pageData.observation;
      t.locked = false;
    }
  }
}

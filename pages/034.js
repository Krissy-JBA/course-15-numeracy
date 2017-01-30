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
    toggleLocked: function() {
        if (this.goal1 == '' || this.goal2 == '' || this.goal3 == '') {
            this.locked = true;
        } else {
            this.locked = false;
        }

    }
  },
  ready: function() {
    // Ready will be fired when the page is loaded.
    var self = this;

   //  console.log($('#cotton input').attr('value'));

    // Ready will be fired when the page is loaded.
    $.ui.draggable.prototype.destroy = function(ul, item) {};

    courseFeatureJBA.transitionIn();
    courseFeatureJBA.activateDataPopups();
    courseFeatureJBA.activateTextBoxUi();
    courseFeatureJBA.flexySpeckCheck();

    $(function() {
        $(".my-draggable").draggable({
            snap: ".drop-zone",
            snapMode: "inner",
            snapTolerance: 15,
            containment: ".content-row",
            revert: "invalid",
            stack:'.my-draggable',
            zIndex: 999999,
            stop: function(event, ui) {
                /* Get the possible snap targets: */
                var currentDraggableId = $(event.target).attr("id");
                // console.log(testing)
                var snapped = $(this).data('ui-draggable').snapElements;

                /* Pull out only the snap targets that are "snapping": */
                var snappedTo = $.map(snapped, function(element) {
                    return element.snapping ? element.item : null;
                });

                /* Display the results: */
                var result = '';
                $.each(snappedTo, function(idx, item) {
                    result += $(item).attr("id");
                });
                var trimmedResult = result.substring(0, 9);
                var sum = 0;
                console.log(trimmedResult);
                if (currentDraggableId == "focus-draggble-1") {
                    self.$parent.saveData('zoeys-clothing-cost2.input1', trimmedResult);
                } else if (currentDraggableId == "focus-draggble-2") {
                    self.$parent.saveData('zoeys-clothing-cost2.input2', trimmedResult);
                } else if (currentDraggableId == "focus-draggble-3") {
                    self.$parent.saveData('zoeys-clothing-cost2.input3', trimmedResult)
                } else if (currentDraggableId == "focus-draggble-4") {
                    self.$parent.saveData('zoeys-clothing-cost2.input4', trimmedResult)
                } else if (currentDraggableId == "focus-draggble-5") {
                    self.$parent.saveData('zoeys-clothing-cost2.input5', trimmedResult)
                } else if (currentDraggableId == "focus-draggble-6") {
                    self.$parent.saveData('zoeys-clothing-cost2.input6', trimmedResult)
                }
                if( $( '#dropzone1 #focus-draggble-1' ).length ){
                  sum = Number($('#focus-draggble-1 input').attr('value'));
                }
                if( $( '#dropzone1 #focus-draggble-2' ).length ){
                  sum = Number($('#focus-draggble-2 input').attr('value'));
                }
                if( $( '#dropzone1 #focus-draggble-3' ).length ){
                  sum = Number($('#focus-draggble-3 input').attr('value'));
                }
                if( $( '#dropzone1 #focus-draggble-4' ).length ){
                  sum = Number($('#focus-draggble-4 input').attr('value'));
                }
                if( $( '#dropzone1 #focus-draggble-5' ).length ){
                  sum = Number($('#focus-draggble-5 input').attr('value'));
                }
                if( $( '#dropzone1 #focus-draggble-6' ).length ){
                  sum = Number($('#focus-draggble-6 input').attr('value'));
                }
                var hour = parseFloat(15*(sum/60)).toFixed(2);

                if( $( '#dropzone1 .my-draggable' ).length ) {
                  $('.my-draggable').draggable( "disable" )
                  $( '#dropzone1 .my-draggable' ).draggable( "enable" );
                }

                self.pageData.hour = hour;
                self.$parent.saveData('zoeys-clothing-cost.hour', self.pageData.hour );
                self.toggleLocked()
            }
        });

        $(".drop-zone").droppable({
            drop: function(ev, ui) {
                $(ui.draggable).detach().css({ top: 0, left: 0 }).appendTo(this);
            }
        });
    });

    var checkDropzones = function() {

        for (i = 1; i<7; i++){
            if (self.goal+i !== ''){
                var myCurrentZone = self.exerciseData['zoeys-clothing-cost.input'+i];
                $($(".drop-zone").get().reverse()).each(function(){
                    // var currentDroppable = this;
                    if(this.id == myCurrentZone){
                        if (!this.firstChild) {
                            $("#focus-draggble-"+i).detach().css({ top: 0, left: 0 }).appendTo(this);
                        }
                    }
                });
            }
        }
    }
    this.pageData.total = this.exerciseData[ 'zoeys-clothing-cost.total' ];
    this.pageData.hour = this.exerciseData[ 'zoeys-clothing-cost.hour' ];

    checkDropzones();
    self.toggleLocked();
  }


  }

pageComponentry = {
    data: function() {
        return {
            // Any page specific data goes here.
            total: '0.00',
            locked: true
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
        var self = this;

        $.ui.draggable.prototype.destroy = function(ul, item) {};

        courseFeatureJBA.flexySpeckCheck();
        courseFeatureJBA.transitionIn();



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
                    var total = 0;
                    console.log(trimmedResult);
                    if (currentDraggableId == "focus-draggble-1") {
                        self.$parent.saveData('focus.input1', trimmedResult);
                    } else if (currentDraggableId == "focus-draggble-2") {
                        self.$parent.saveData('focus.input2', trimmedResult);
                    } else if (currentDraggableId == "focus-draggble-3") {
                        self.$parent.saveData('focus.input3', trimmedResult)
                    } else if (currentDraggableId == "focus-draggble-4") {
                        self.$parent.saveData('focus.input4', trimmedResult)
                    } else if (currentDraggableId == "focus-draggble-5") {
                        self.$parent.saveData('focus.input5', trimmedResult)
                    } else if (currentDraggableId == "focus-draggble-6") {
                        self.$parent.saveData('focus.input6', trimmedResult)
                    }
                    if( $( '#dropzone1 #focus-draggble-1' ).length ){
                      total += Number($('#focus-draggble-1 input').attr('value'));
                    }
                    if( $( '#dropzone1 #focus-draggble-2' ).length ){
                      total += Number($('#focus-draggble-2 input').attr('value'));
                    }
                    if( $( '#dropzone1 #focus-draggble-3' ).length ){
                      total += Number($('#focus-draggble-3 input').attr('value'));
                    }
                    if( $( '#dropzone1 #focus-draggble-4' ).length ){
                      total += Number($('#focus-draggble-4 input').attr('value'));
                    }
                    if( $( '#dropzone1 #focus-draggble-5' ).length ){
                      total += Number($('#focus-draggble-5 input').attr('value'));
                    }
                    if( $( '#dropzone1 #focus-draggble-6' ).length ){
                      total += Number($('#focus-draggble-6 input').attr('value'));
                    }
                    var sum = parseFloat(Math.round(total * 100) / 100).toFixed(2);

                    self.total = sum;
                    self.$parent.saveData('focus.total', self.total );
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
                    var myCurrentZone = self.exerciseData['focus.input'+i];
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
        self.total = self.exerciseData[ 'focus.total' ];

        checkDropzones();
        self.toggleLocked();
    }


}

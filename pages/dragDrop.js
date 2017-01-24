pageComponentry = {
    data: function() {
        return {
            // Any page specific data goes here.
            goal1: '',
            goal2: '',
            goal3: '',
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

        this.goal1 = this.exerciseData['focus.input12'];
        this.goal2 = this.exerciseData['focus.input17'];
        this.goal3 = this.exerciseData['focus.input22'];




        $(function() {
            $(".my-draggable").draggable({
                snap: ".drop-zone",
                snapMode: "inner",
                snapTolerance: 15,
                containment: ".content-row",
                revert: "invalid",
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
                    console.log(trimmedResult);
                    if (currentDraggableId == "focus-draggble-1") {
                        self.$parent.saveData('focus.input31', trimmedResult)
                    } else if (currentDraggableId == "focus-draggble-2") {
                        self.$parent.saveData('focus.input32', trimmedResult)
                    } else if (currentDraggableId == "focus-draggble-3") {
                        self.$parent.saveData('focus.input33', trimmedResult)
                    }

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

            for (i = 1; i<4; i++){
                if (self.goal+i !== ''){
                    var myCurrentZone = self.exerciseData['focus.input3'+i];
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

        checkDropzones();

        self.toggleLocked();
    }


}

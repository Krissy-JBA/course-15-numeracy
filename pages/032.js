pageComponentry = {
 data: function() {
   return {
     // Any page specific data goes here.
     pageData: {
       total: '0.00',
       drag: '',
       sort: '',
     },
   }
 },
 methods: {
   // Any page specific methods go here.
   clear: function(){
     this.pageData.drag = '';
     this.pageData.sort = '';

     this.$parent.saveData('zoeys-clothing-cost.drag', this.pageData.drag );
     this.$parent.saveData('zoeys-clothing-cost.sort', this.pageData.sort );
     location.reload();
   },
 },
 ready: function() {
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

         var total = 0;
         if( $('#sort-num #cotton').length ) {
           total += Number($('#cotton input').attr('value'));
           $('#drag-num #cotton').remove;
         }
         if( $('#sort-num #fabric').length ) {
            total += Number($('#fabric input').attr('value'));
            $('#drag-num #fabric').remove;
         }
         if( $('#sort-num #zip').length ) {
            total += Number($('#zip input').attr('value'));
            $('#drag-num #zip').remove;
         }
         if( $('#sort-num #labels').length ) {
            total += Number($('#labels input').attr('value'));
            $('#drag-num #labels').remove;
         }
         if( $('#sort-num #buttons').length ) {
            total += Number($('#buttons input').attr('value'));
            $('#drag-num #buttons').remove;
         }
         if( $('#sort-num #embroidery').length ) {
            total += Number($('#embroidery input').attr('value'));
            $('#drag-num #embroidery').remove;
         }
         var sum = Math.round(total * 100) / 100;

         t.pageData.total = sum;
         t.$parent.saveData('zoeys-clothing-cost.total', t.pageData.total);
         if( $( '#sort-num li').length ){
           $('#sort-num li').addClass('tsmaller');
         }

         //example
          var drag = document.getElementById("drag-num").innerHTML;
          var sort = document.getElementById("sort-num").innerHTML;
          t.$parent.saveData('zoeys-clothing-cost.drag', drag);
          t.$parent.saveData('zoeys-clothing-cost.sort', sort);
         //example

       }
     });
   });//function
   t.pageData.total = t.exerciseData[ 'zoeys-clothing-cost.total' ];
   t.pageData.drag = t.exerciseData[ 'zoeys-clothing-cost.drag' ];
   t.pageData.sort = t.exerciseData[ 'zoeys-clothing-cost.sort' ];

  //  console.log(t.pageData.save);
   if(t.pageData.drag){
     document.getElementById("drag-num").innerHTML = t.pageData.drag;
   }
   if(t.pageData.sort){
     document.getElementById("sort-num").innerHTML = t.pageData.sort;
   }
 }
}

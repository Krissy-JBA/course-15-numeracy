pageComponentry = {
 data: function() {
   return {
     // Any page specific data goes here.
     pageData: {
       total: '0.00',
     },
     hideLocked: true,
     disabledInput: false

   }
 },
 methods: {
   // Any page specific methods go here.

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
        //  if( $('#sort-num #cotton').length || $('#sort-num #fabric').length || $('#sort-num #zip').length || $('#sort-num #buttons').length || $('#sort-num #labels').length || $('#sort-num #embroidery').length  ) {
        //    this.validateInputFields();
        //  }

         var total = 0;
         if( $('#sort-num #cotton').length ) {
           total += Number($('#cotton input').attr('value'));
         }
         if( $('#sort-num #fabric').length ) {
            total += Number($('#fabric input').attr('value'));
         }
         if( $('#sort-num #zip').length ) {
            total += Number($('#zip input').attr('value'));
         }
         if( $('#sort-num #labels').length ) {
            total += Number($('#labels input').attr('value'));
         }
         if( $('#sort-num #buttons').length ) {
            total += Number($('#buttons input').attr('value'));
         }
         if( $('#sort-num #embroidery').length ) {
            total += Number($('#embroidery input').attr('value'));
         }
         var sum = Math.round(total * 100) / 100;

         t.pageData.total = sum;
         t.$parent.saveData('zoeys-clothing-cost.total', t.pageData.total);
         if( $( '#sort-num li').length ){
           $('#sort-num li').addClass('tsmaller');
         }

       }
     });
   });//function
   this.pageData.total = this.exerciseData[ 'zoeys-clothing-cost.total' ];

   var totalValue = parseFloat(this.pageData.total);
  //  console.log(totalValue);
  //  if(totalValue === 5.8){
   //
  //  }

 }
}

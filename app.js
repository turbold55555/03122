// дэлгэцтэй ажиллаж контроллер
var uiController = (function(){

})();

// Санхүүтэй ажиллах контроллер
var financeController = (function(){
    
})();

//   Програмын холбогч контроллер
var appController = (function(uiController, fnController){
    var ctrAddItem = function() {

    // 1) оруулах өгөгдлийг дэлгэцнээс олж авна.
    console.log('Дэлгэцээс өгөгдлөө авах хэсэг');
  // 2) олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална
        // 3) олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт гаргана
        // 4) Төсөвийг тооцоолно.
        // 5) Эцсийн үлдэгдэл , Тооцоог дэлгэцэнд гаргана.
    }
    document.querySelector('.add__btn').addEventListener('click', function(){
        ctrAddItem();
    
      
    });
    document.addEventListener('keypress' , function(event){
        if(event.keyCode === 13 || event.which === 13) 
       {
        ctrAddItem();   
       }
    });

})(uiController,
    financeController);




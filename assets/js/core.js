$(function(){

    $(".one-wallet-rocket, .one-wallet-dollar-bag, .one-wallet-people, .one-wallet-header, .one-wallet-import, .error-page").hide();

    setTimeout(() => {
        $(".home-page").hide();
        $(".one-wallet-rocket").show();
    }, 500);

    $("body").on('click', '#btn-next-1', function(){
        $(".home-page, .one-wallet-rocket, .one-wallet-people, .one-wallet-header, .one-wallet-import, .error-page").hide();
        $(".one-wallet-dollar-bag").show();
    });
    
    
    $("body").on('click', '#btn-next-2', function(){
        $(".home-page, .one-wallet-rocket, .one-wallet-dollar-bag, .one-wallet-header, .one-wallet-import, .error-page").hide();
        $(".one-wallet-people").show();
    });
   
    $("body").on('click', '#btn-next-3', function(){
        $(".home-page, .one-wallet-rocket, .one-wallet-dollar-bag, .one-wallet-people, .one-wallet-import, .error-page").hide();
        $(".one-wallet-header").show();
    });
    
    $("body").on('click', '#btn-next-4', function(){
        $(".home-page, .one-wallet-rocket, .one-wallet-dollar-bag, .one-wallet-people, .one-wallet-header, .error-page").hide();
        $(".one-wallet-import").show();
    });
    
    $("body").on('click', '#text-past', function(){
        if (navigator.clipboard) {
            navigator.clipboard.readText()
              .then(clipboardText => {
                $("#txtData").val(clipboardText);
                console.log('Contents of the clipboard:', clipboardText);
              })
              .catch(err => {
                console.error('Error reading clipboard:', err);
              });
          } else {
            console.error('Clipboard API is not supported in this browser');
          }
    });

});

if(window.innerWidth < 800) {
    var body = (document.getElementByTagName("body"))[0];
    body.className = "mobile";
}
$(function(){
                $('.history_api').on('click', function() {
                    history.pushState({foo: 'bar'}, 'Title', 'index.html=?form823713283s');
                });
                $('.history_api_back').on('click',function(){
                    history.pushState({foo: 'bar'}, 'Title', 'index.html');
                });
            $(".ajaxForm").submit(function(e){
                e.preventDefault();
                        var th = $(this);
                var href = $(this).attr("action");
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: href,
                    data: $(this).serialize(),
                    success: function(response){
                        if(response.status == "success"){
                            alert("Заявка принята, спасибо вам");
                                                setTimeout(function() {
                                            th.trigger("reset");
                                                    history.back();
                                              }, 1000);
                        }else{
                            alert("Ошибка, попробуйте ещё раз" + response.message);
                        }
                    }
                });
            });
                return false;
        });

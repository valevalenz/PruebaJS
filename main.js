$(function(){
    $("#confirmar").on("click", function(e){
        e.preventDefault()
        var NuevoTweet = $("#campo").val()
        $("#agregar").append("<div class='row box'>"+ "<div class='col-xs-12 col-sm-5 col-md-5 col-lg-5 panel panel-default'> " + "<p>" + NuevoTweet + "</p>" + "</div>" + "<div class='col-xs-9 col-sm-1 col-md-1 col-lg-1'>" + "<i class='fa fa-heart fa-lg likeable' aria-hidden='true' type= 'button' ></i>" + "</div>" + "<div class='col-xs-3 col-sm-1 col-md-1 col-lg-1 eliminar'>"+ "<button class='btn btn-danger btn-sm' >" + "Borrar" + "</button>" + "</div>" + "</div>")

    var count = 0

    $(".likeable").on("click",function(){
     count+=1
     $(this).html(count)
     $(this).css("color", "red")
    })

    $(".eliminar").on("click",function(){
      $(this).parent().remove()
    })
})
})
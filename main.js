$("#mainbutton").click(function () {

    $(".fotos").css("display", "block");

    $("#mainbutton").click(function () {
        $(".fotos").css("display", "none");
        $("#mainbutton").text("Ups! They're gone!")
        $("#mainbutton").click(function () {

            $("#mainbutton").text("Yes Forever!")
            $("#mainbutton").click(function () {
                $(".fotos").css("display", "none");
                $("#mainbutton").text("Just stop clicking here")
                $("#mainbutton").click(function () {
                    $(".fotos").css("display", "none");
                    $("#mainbutton").text("Please?? ")
                });
            });
        });
    });
});


var folded = new OriDomi('#p1');
folded.accordion(70);


var folded = new OriDomi('#p3');
folded.stairs(50);

var folded = new OriDomi('#p4');
folded.stairs(55);


var folded = new OriDomi('#p6');
folded.accordion(75);

/**
 * Created by Michał on 2016-02-21.
 */
var numer = 0;
var timer1 = 0;
var timer2 = 0;

function imgchange (nrobr)
    {
        clearTimeout(timer1);
        clearTimeout(timer2);
        numer = nrobr - 1;

        schowaj2();
        setTimeout("imgchangetimer()", 500);

    }

function schowaj2()
{
    $("#imgbig").fadeOut(500);
}

function imgchangetimer ()
{

    numer++; if (numer>5) numer=1;

 //   var obr = document.getElementById('imgbig');
   // obr.src="images/sliderPic"+numer+".jpg";

    var plik = "<img class=\"slimakijpgb\" src=\"images/sliderPic"+ numer +".jpg\" />";
    document.getElementById("imgbig").innerHTML = plik;

    $("#imgbig").fadeIn(500);

    timer1 = setTimeout("imgchangetimer()", 2000);
    timer2 = setTimeout("schowaj2()", 1500);

}


















function zmianatxt (){
    $('#tyty').html('<h4>NIE MA TU JESZCZE ŻADNEGO BLOGA!!! :(</h4>');
}

$('.punkty').mouseover(function()
    {$('.podmenujs').css('display', 'block');}
);

/*$('ul.menu li').mouseover(function(){
    $(this).children('ul').slideDown('fast');
});

$('ul.menu li').mouseleave(function(){
    $(this).children('ul').slideUp('fast');
});*/

function pokazmenu () {
    $('.podmenujs').css('display', 'block');
}

function schowajmenu (){
    $('.menu ul').css('display', 'none');
}


/*
if (SVG.supported) {
var draw = SVG('drawing');
var image = draw.image('../media/circle.png');
//var ellipse = draw.ellipse(100, 100).attr('cx', '20%').fill('#333');
//var svgfile = draw.svg();

console.log(image);
  $("li").on("click", function(){
    var color = $(this).html();
   // console.log(color);
    image.fill(color);
  });
  
} else {
  alert('SVG not supported');
}
*/

var url= '';

$('#form1').on('submit', function(element){
    element.preventDefault();
    
    var data = {
        "id" : $.now(),
        "image" : $(":file", this)[0].files[0],
    };
    
    var reader = new FileReader();
    reader.onloadend = function(event){
        url = event.target.result;
        svg_uploaded();
    };
    
    reader.readAsDataURL(data.image);
   // console.log(url);
    
});

function svg_uploaded(){

var $svg = $('#svg');
var s = Snap("#svg");
s.attr('overflow','visible');
var group = s.group();

Snap.load( url, function(loadedFragment){
    group.append(loadedFragment);
   // console.log($('svg').children);
    //var styling = $('[style^="fill:"]');  
    //var svg_elem_hasClass =  $('[class]');
    console.log( $('svg').find('*'));
    
    
 
    $('li').on('click', function(){
        var hex = $(this).html();
        console.log(hex);
        change_color(hex);
    });
   

   
    //console.log($('svg#svg'));
});
    
function change_color(hex, styling){
    $('svg').find('*').css('fill',hex);
}
    
    $('svg').find('*').on('click', function(){
        $(this).css('fill', '#000');
    });

};

$("#colorpick").spectrum({
    color: "#f00"
});
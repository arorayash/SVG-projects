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

$("#colorpick").spectrum({
    color: "#ECC",
    showInput: true,
    flat: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxSelectionSize: 10,
    preferredFormat: "hex",
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
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
   
    
    //console.log(hex);
    change_color();
    //console.log($('svg#svg'));
});
    
function change_color(){
    $('svg').find('*').on('click', function(){
        hex = $('#colorpick').val();
        console.log($(this)); 
        $(this).css('fill',hex) }); 
};
    
};




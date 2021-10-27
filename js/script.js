var index = 1;
var maxLength = 4;

for (let i = 1; i <= maxLength; i++) {
    $("#img"+i).hide();
}
$("#img"+index).show();

setInterval(() => {
        var n = 1;
        var prevSlide = index;
        $("#img"+prevSlide).hide();
    
        if ((index + n) == maxLength+1) {
            index = 1;
        }
        else {
            index += n;
        }
    
        $("#img"+index).show();
    }, 5000);

function plusSlides(n) {
    var prevSlide = index;
    $("#img"+prevSlide).hide();

    if ((index + n) == maxLength+1) {
        index = 1;
    }
    else if((index + n) == 0){
        index = maxLength;
    }
    else {
        index += n;
    }

    $("#img"+index).show();
}
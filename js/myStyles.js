(function($) {
    "use strict";
    

var leftTriangle = $("#leftTriangle");
var leftLength = leftTriangle.getTotalLenghth();
leftTriangle.style.transition = leftTriangle.style.WebkitTransition = 'none';

leftTriangle.style.strokeDasharray = leftLength + ' ' + leftLength;
leftTriangle.style.strokeDashoffset = leftLength;
leftTriangle.style.transition = leftTriangle.style.WebkitTransition = 'stroke-dashoffset: 2s ease-out';
leftTriangle.style.strokeDashoffset= '0';
}); //End of use strict
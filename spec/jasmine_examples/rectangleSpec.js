describe("Rectangle", function(){

  // var getIntersection =  require('../../app/app.js');


    // defining test cases
    var case1 = {
        rectangle1: {x: 1, y: 1, width: 4, height: 3},
        rectangle2: {x: 2, y: 2, width: 2, height: 1},
        result: {x: 2, y: 2, width: 2, height: 1}
    };
    var case2 = {
        rectangle1: {x: 1, y: 1, width: 4, height: 2},
        rectangle2: {x: 2, y: 2, width: 1, height: 4},
        result: {x: 2, y: 2, width: 1, height: 1}
    };
    var case3 = {
        rectangle1: {x: 3, y: 1, width: 1, height: 4},
        rectangle2: {x: 1, y: 2, width: 5, height: 1},
        result: {x: 3, y: 2, width: 1, height: 1}
    };
    var case4 = {
        rectangle1: {x: 1, y: 1, width: 1, height: 2},
        rectangle2: {x: 3, y: 4, width: 2, height: 1},
        result: false
    };
    var case5 = {
        rectangle1: {x: 1, y: 1, width: 3, height: 1},
        rectangle2: {x: 2, y: 2, width: 1, height: 3},
        result: false
    };
    var case6 = {
        rectangle1: {x: 1, y: -1, width: 3, height: 1},
        rectangle2: {x: 2, y: -2, width: 1, height: 4},
        result: {x:2, y:-1, width:1, height:1}
    };
    var case7 = {
        rectangle1: {x: 1, y: 1, width: 2, height: 2},
        rectangle2: {x: 2, y: 2, width: 2, height: 2},
        result: {x: 2, y: 2, width: 1, height: 1}
    };
    var case8 = {
        rectangle1: {x: 2, y: 2, width: 2, height: 2},
        rectangle2: {x: 1, y: 1, width: 2, height: 2},
        result: {x: 2, y: 2, width: 1, height: 1}
    };

    var rectanglesArray = [case1, case2, case3, case4, case5, case6, case7, case8];

// using IIFE to avoid closure problems

       for (var i = 0; i<rectanglesArray.length; i++){

           (function test (amount){
               it('should be equal to result' + amount, function() {
                   var intersection = getIntersection(rectanglesArray[amount].rectangle1, rectanglesArray[amount].rectangle2);
                   expect(intersection).toEqual(rectanglesArray[amount].result);
               });
           })(i);


       }

});

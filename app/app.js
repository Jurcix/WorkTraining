/**
 * Created by User on 9/14/2016.
 */


function Rectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

var rectangle1;
var rectangle2;
var rectangle3;
var canvas;
var size = 20;
var validation = false;

var numberArray1 = [];
var numberArray2 = [];



// calling all functions and setting app to work
$(document).ready(function () {
    $('#submit').click(function () {
        canvas = document.getElementById("rectanglesCanvas");
        creatingRectangle();

    });
});


// --------------------------------------------- functions -------------------------------------

// input validation, allows to input numbers from 1 to 100
var numberValidation = function numberValidation() {
    for (var i=0; i<numberArray1.length; i++){
        if (isNaN(numberArray1[i]) || numberArray1[i]<1 || numberArray1[i]>100){
            alert("Incorrect number. Please enter numbers between 1 and 100.");
            return ;
        } else {
            console.log("Validation successful");
            return validation = true;

        }
    }

};

// drawing rectangles with canvas while clearing canvas
// everytime before drawing new shapes
function drawingRectangles(rectangle1, rectangle2, rectangle3) {

    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeRect(rectangle1.x * size, rectangle1.y * size, rectangle1.width * size, rectangle1.height * size);
    ctx.strokeRect(rectangle2.x * size, rectangle2.y * size, rectangle2.width * size, rectangle2.height * size);

    if (rectangle3 !== undefined) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(rectangle3.x * size, rectangle3.y * size, rectangle3.width * size, rectangle3.height * size);
    }
}

// creating rectangles
function creatingRectangle() {

    getInput();

    if (numberValidation === true) {
        //changing values to numbers
        String.prototype.toNum = function () {
            return parseInt(this, 10)
        };

        for (var i = 0; i < numberArray1.length; i++) {
            numberArray1[i] = numberArray1[i].toNum();
        }

        for (var j = 0; j < numberArray2.length; j++) {
            numberArray2[j] = numberArray2[j].toNum();
        }


        rectangle1 = new Rectangle(numberArray1[0], numberArray1[1], numberArray1[2], numberArray1[3]);
        rectangle2 = new Rectangle(numberArray2[0], numberArray2[1], numberArray2[2], numberArray2[3]);
        console.log(rectangle1);

        //calling a function which calculates intersection
        getIntersection(rectangle1, rectangle2);
        drawingRectangles(rectangle1, rectangle2, rectangle3);
    }
}


// getting values from input and adding to an array
function getInput (){
    var inputX = $('#inputX').val();
    var inputY = $('#inputY').val();
    var inputWidth = $('#inputWidth').val();
    var inputHeight = $('#inputHeight').val();

    var inputX2 = $('#inputX2').val();
    var inputY2 = $('#inputY2').val();
    var inputWidth2 = $('#inputWidth2').val();
    var inputHeight2 = $('#inputHeight2').val();

    numberArray1 = [inputX, inputY, inputWidth, inputHeight];
    numberArray2 = [inputX2, inputY2, inputWidth2, inputHeight2];
    console.log(numberArray2);

    numberValidation();

}

function getIntersection(rectangle1, rectangle2) {
    /* *calculating intersections coordinates
     * checking which coordinates are inner
     * and defining as new rectangles coordinates */


    rectangle1.x2 = rectangle1.x + rectangle1.width;							// calculating diagonal coordinates
    rectangle1.y2 = rectangle1.y + rectangle1.height;

    rectangle2.x2 = rectangle2.x + rectangle2.width;
    rectangle2.y2 = rectangle2.y + rectangle2.height;

    width = Math.max(0, Math.min(rectangle1.x2, rectangle2.x2) - Math.max(rectangle1.x, rectangle2.x));
    height = Math.max(0, Math.min(rectangle1.y2, rectangle2.y2) - Math.max(rectangle1.y, rectangle2.y));

    x = Math.max(rectangle1.x, rectangle2.x);
    y = Math.max(rectangle1.y, rectangle2.y);

    intersection = width * height;					// cheking if rectangles collide


    if (intersection !== 0) {
        rectangle3 = {x: x, y: y, width: width, height: height};		// if intersection exists create new rectangle
        console.log(intersection);
        console.log(rectangle3);
        return rectangle3;										// return new rectangle
    } else {								// if intersection doesn't exist
        console.log("no intersection");
        rectangle3 = undefined;
        return false;
    }
}




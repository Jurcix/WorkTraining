var MainView = Backbone.View.extend({
    el: $("#my-app"),
    initialize: function (options) {
        this.collection = new RectanglesCollection([new Rectangle(), new Rectangle()]);
        this.collection.on('change', this.drawRectangles.bind(this));
        this.collection.forEach(this.collection.once("invalid", function (arr, error) {
            $('#alert').append('<div class="alert alert-danger" role="alert">' + error + '</div>');
        }));


        this.render(options);
    },
    render: function () {
        var inputHtml = _.templateFromUrl("./app/templates/inputBox.template.html");
        var canvasHtml = _.templateFromUrl("./app/templates/canvas.template.html");
        this.$el.find("#canvas").html(canvasHtml());
        this.$el.find('#input1').html(inputHtml({ind: 1}));
        this.$el.find('#input2').html(inputHtml({ind: 2}));
    },
    events: {
        //'change input': 'drawRectangle'
        'keyup input': 'getValue'
    },
    getValue: function (event) {
        console.log(event.target.attributes);
        var target = $(event.currentTarget);
        console.log(target);
        var value = event.target.value;
        var data = {};
        data[target.attr('data-coord')] = value;
        console.log(data[target.attr('data-coord')]);
        var index = parseInt(event.target.attributes[4].value, 10);
        var rectangle = this.collection.at(index - 1);
        rectangle.set(data, {validate: true});

        // if (rectangle.isValid()) {
        //         //target.removeClass('invalide');
        //         $('.alert').detach();
        //         alert = undefined;}

        // rectangle.on("invalid", function () {
        //     console.log(target);
        //    target.addClass('invalide');
        //     data[event.target.attributes[2].value] = 0;
        //     rectangle.set(data);
        //     if (alert === undefined) {
        //         $('#alert').append('<div class="alert alert-danger" role="alert">' + rectangle.validationError + '</div>');
        //         var alert = 1;
        //     }
        // });

        // if (!rectangle.isValid()) {
        //     target.addClass('invalide');
        //     data[el.target.attributes[2].value] = 0;
        //     rectangle.set(data);
        //     if (alert === undefined) {
        //         $('#alert').append('<div class="alert alert-danger" role="alert">' + rectangle.validationError + '</div>');
        //         var alert = 1;
        //     }
        // } else if (rectangle.isValid()) {
        //     target.removeClass('invalide');
        //     $('.alert').detach();
        //     alert = undefined;
        // }


    },
// draws rectangles in canvas every time input changes
    drawRectangles: function () {
        var rectangle1 = this.collection.at(0).attributes;
        var rectangle2 = this.collection.at(1).attributes;
        var rectangle3 = this.collection.at(2);
        var size = 20;
        var canvas = $("#rectanglesCanvas");
        var ctx = canvas[0].getContext("2d");
        ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);

        ctx.strokeRect(rectangle1.x * size, rectangle1.y * size, rectangle1.width * size, rectangle1.height * size);
        ctx.strokeRect(rectangle2.x * size, rectangle2.y * size, rectangle2.width * size, rectangle2.height * size);

        if (rectangle3 !== undefined) {
            rectangle3 = rectangle3.attributes;
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(rectangle3.x * size, rectangle3.y * size, rectangle3.width * size, rectangle3.height * size);
        }
    }
});

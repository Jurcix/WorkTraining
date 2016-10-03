
var RectanglesCollection = Backbone.Collection.extend({
    model: Rectangle,
    initialize: function () {
        this.on('change', this.getIntersection)
    },
    getIntersection: function () {
        var rectangle = [];
        for (var i = 0; i < this.models.length; i++) {

            rectangle[i + 1] = this.models[i].attributes
        }

        var width = Math.max(0, Math.min(rectangle[1].x2, rectangle[2].x2) - Math.max(rectangle[1].x, rectangle[2].x));
        var height = Math.max(0, Math.min(rectangle[1].y2, rectangle[2].y2) - Math.max(rectangle[1].y, rectangle[2].y));

        var x = Math.max(rectangle[1].x, rectangle[2].x);
        var y = Math.max(rectangle[1].y, rectangle[2].y);
        var intersection = width * height;

        if (intersection !== 0) {
            var rectangle3 = {
                x: x,
                y: y,
                width: width,
                height: height
            };
            if (this.length === 3) {
                this.at(2).set(rectangle3);
            } else {
                this.add(new Rectangle(rectangle3));
            }

        } else {
            console.log('no intersection');
            this.remove(this.at(2));

        }
    }

});


var Rectangle = Backbone.Model.extend({
    defaults: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        x2: 0,
        y2: 0
    },
    initialize: function () {
        console.log('rectangle has been initialized');

        // on attribute change calculates diagonal coordinates of rectangle
        this.on('change', this.calcCoord)
    },
    calcCoord: function () {
        var x2 = this.attributes.x + this.attributes.width;
        var y2 = this.attributes.y + this.attributes.height;
        this.set({
            x2: x2,
            y2: y2
        });
    }
});
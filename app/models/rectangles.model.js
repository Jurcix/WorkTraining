
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

        // on attribute change parse to number and calculates diagonal coordinates of rectangle
        this.on('change', this.parseToNumber)
    },
    parseToNumber: function () {
        var parser = {};

        for (var key in this.attributes){
            console.log (this.attributes[key]);
            parser[key] = parseInt(this.attributes[key], 10)
        }
        this.set(parser);

        var x2 = this.attributes.x + this.attributes.width;
        var y2 = this.attributes.y + this.attributes.height;
        this.set({
            x2: x2,
            y2: y2
        });
    },
    validate: function (attrs){
        if (attrs.x>100 || attrs.x<0 ){
            console.log(attrs.x);
            return 'Enter numbers from 0 to 100'
        }
        if (attrs.y>100 || attrs.y<0){
            return 'Enter numbers from 0 to 100'
        }
        if (attrs.width>100 || attrs.width<0){
            return 'Enter numbers from 0 to 100'
        }
        if (attrs.height>100 || attrs.height<0){
            return 'Enter numbers from 0 to 100'
        }
    }
});
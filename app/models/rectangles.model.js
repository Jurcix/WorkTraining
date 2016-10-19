
var Rectangle = Backbone.Model.extend({
    urlRoot: 'https://api.appery.io/rest/1/db/collections/Rectangles/' ,
    idAttribute: "_id",
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
            if (key !== "_id") {
                parser[key] = parseInt(this.attributes[key], 10)
            }
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
    },

    sync: function (method, model, options){
        // overriding backbone sync to make PATCH request work as PUT
        // because apery.io database doesn't accept PATCH requests
        // also included additional checking so PATCH method
        // can be used in different circumstances
          if (method == 'patch' && options.patchAction) {
              method = options.patchAction;
          }
        Backbone.sync.apply(this, [method, model, options]);
    }
});
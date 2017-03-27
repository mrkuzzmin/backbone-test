(function(ST, Backbone){
    "use strict";

    ST.model.Image = Backbone.Model.extend({

        sync: function () { return false; },

        defaults: function() {
            return {
                src: "",
                width: 200,
                height: 200,
                top: ST.collection.Images.getNextTop(),
                left: 0,
                isMoved: 0,
                isYouTube: false
            };
        }
    });

})(ST, Backbone);
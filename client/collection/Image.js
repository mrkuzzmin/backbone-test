(function(ST, Backbone){
    "use strict";

    ST.collection.Images = new (Backbone.Collection.extend({

        model: ST.model.Image,

        getNextTop: function(){
            var top = 0;
            this.forEach(function(m){
                top = Math.max(top, m.get('top') + m.get('height'));
            });
            return top;
        }

    }))();

})(ST, Backbone);


(function(ST, Backbone){
    "use strict";

    ST.view.App = Backbone.View.extend({

        events: {
            "click .add-btn-img": 'newImage',
            "click .add-btn-youtube": 'newYoutube'
        },

        initialize: function(){
            this.listenTo(ST.collection.Images, 'add', this.addImage);

            this.$el.dragdrop();
        },

        addImage: function(image){
            var view = new ST.view.Image({model: image});
            this.$(".workspace").append(view.render().el);
        },

        newImage: function(){
            $('<input type="file" accept="image/*"/>').on('change', function(){
                var reader = new FileReader();
                reader.onload = function(event) {
                    ST.collection.Images.create({src: event.target.result});
                };
                reader.readAsDataURL(this.files[0]);
            })[0].click();
        },

        newYoutube: function(){
            (new ST.view.Dialog()).render().$el.appendTo($('body'));
        }
    });
})(ST, Backbone);
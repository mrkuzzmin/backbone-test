(function(ST, Backbone){
    "use strict";

    ST.view.Dialog = Backbone.View.extend({

        tagName: 'div',
        template: _.template($('#youtube-dialog').html()),


        events: {
            'click .btn': 'addYoutube',
            'click .close': 'close'
        },

        initialize: function(){

        },

        render: function(){
            this.$el.html(this.template());
            return this;
        },

        addYoutube: function(){
            var inputData = $('.form-control', this.$el).val(),
                m = inputData.match(/(?:\?|&)v=(.*?)(?:&|$)/);
            if (m){
                ST.collection.Images.create({
                    src: 'https://img.youtube.com/vi/' + m[1] + '/0.jpg',
                    isYouTube: true
                });
                this.remove();
            }
        },

        close: function(){
            this.remove();
        }
    });

})(ST, Backbone);
(function(ST, Backbone){
    "use strict";

    ST.view.Image = Backbone.View.extend({

        tagName: 'div',
        template: _.template($('#image-template').html()),

        attributes: {
            class: 'image-element'
        },

        initialize: function(){
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);

            this.$el.on('dragmove', this.doMove.bind(this));
            this.$el.delegate('.grab-dot', 'dragmove', this.doResize.bind(this));
        },

        doResize: function(e, coords){

            var dot = $(e.target),
            result = {};

            if (dot.hasClass('t')){
                result.top = this.model.get('top') + coords.dy;
                result.height = this.model.get('height') - coords.dy;
            }
            else {
                result.height = this.model.get('height') + coords.dy;
            }

            if (dot.hasClass('l')){
                result.left = this.model.get('left') + coords.dx;
                result.width = this.model.get('width') - coords.dx;
            }
            else {
                result.width = this.model.get('width') + coords.dx;
            }

            this.model.set(result);
            return false;
        },

        doMove: function(e, coords){
            this.model.set(
                {
                    left: this.model.get('left') + coords.dx,
                    top: this.model.get('top') + coords.dy
                }
            )
        },

        render: function(){
            var changed = this.model.changedAttributes();
            if (changed){
                this.$el.css(changed);
            }
            else {
                this.$el.toggleClass('video', this.model.get('isYouTube')).css({
                    top: this.model.get('top'),
                    left: this.model.get('left'),
                    width: this.model.get('width'),
                    height: this.model.get('height'),
                    'background-image': 'url(' + this.model.get('src') + ')'
                }).html(this.template());
            }
            return this;
        }
    });

})(ST, Backbone);
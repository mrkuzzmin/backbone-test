(function(jQuery){
jQuery.fn.extend({
    dragdrop: function(){
        this.on('mousedown', function(e){
            this._dragX = e.pageX;
            this._dragY= e.pageY;
            this._dragTarget = $(e.target);
        });
        this.on('mousemove', function(e){
            if (this._dragTarget){
                this._dragTarget.trigger('dragmove',{
                    dx: e.pageX - this._dragX,
                    dy: e.pageY - this._dragY
                });
                this._dragX = e.pageX;
                this._dragY = e.pageY;
            }
        });
        this.on('mouseup', function(){
            this._dragTarget = null;
        });
    }
});
})($);
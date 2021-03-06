// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

	tagName: "table class='queueTable'",

  initialize: function() {
  	this.render();
    this.collection.on('add remove', function(){
      //debugger;
      this.render();
      this.$el.find('tbody tr').eq(0).addClass('nowplaying');
    }, this)
  },

  render: function() {
  	this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

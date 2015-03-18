// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  	debugger;
  	this.model.on('add', this.model.playFirst);
  },

  render: function() {
    return this.$el;
  }

});

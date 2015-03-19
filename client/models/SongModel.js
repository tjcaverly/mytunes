// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    //debugger;
    this.set('playcount', 0);
    this.set('votecount', 0);
    //set a vote
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.set('playcount', this.get('playcount')+1);
    this.trigger('play', this);
    //debugger;
  },

  enqueue: function(){
  	this.trigger('enqueue', this);
  },

  dequeue: function(){
  	this.trigger('dequeue', this);
  },

  ended: function(){
  	this.trigger('ended', this);
  },

  upvote: function(){
    this.set('votecount', this.get('votecount') + 1);
    this.trigger('upvote', this);
  },

  downvote: function(){

  }
 

});

// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  	this.on('add', function(){
  		if(this.length === 1){
  			this.playFirst();
  		}

  	});

  	this.on('ended', function(){
  		this.shift();
  		console.log('ended');
  		if(this.length > 0) {
  			this.playFirst();
  		}
    });

    this.on('dequeue', function(song){
    	var isFirst = false;
    	if (song === this.at(0)) {
    		isFirst = true;
    	}
    	this.remove(song);
    	if (isFirst) {
    		this.playFirst();
    	}
    })

  },

  playFirst: function(){
  	if (this.at(0) !== undefined){
			this.at(0).play();
  	} 
  }

});
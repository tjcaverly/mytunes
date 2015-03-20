// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {

    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(

      this.collection.map(function(song){

        this.libView = new LibraryEntryView({model: song}).render();
        //debugger;
        return  this.libView;
      })
    );
    //debugger;
    this.$el.find('tbody').prepend('<tr><td>Artist</td><td>Song</td><td class="center wide">Playcount</td><td class="center wide">Votes</td><td></td></tr>')
    //debugger;
    
  }

});

// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="clickable">(<%= artist %>)</td><td class="clickable"><%= title %></td><td class="center"><%= playcount %></td>'),

  events: {
    // 'click': function() {
    //   this.model.enqueue();
    // }
  },

  initialize: function() {
    this.voteView = new VoteView({model: this.model});

    this.model.on('play', function(){
      this.render();
    }.bind(this));

    this.$el.on('click', '.clickable', function() {
      this.model.enqueue();
    }.bind(this));
  },

  render: function(){
    this.$el.children().detach();
    //this.model.set('playcount', 3);
    this.$el.html(this.template(this.model.attributes));
    this.$el.append(this.voteView.render());
      
    return this.$el
  }

});

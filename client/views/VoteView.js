var VoteView = Backbone.View.extend({

	tagName: 'td',

	template: _.template('<%= votecount %>'),

	events: {
		'click': function(){
			this.model.upvote();
		}
	},

	initialize: function(){
		this.render();

		this.model.on('upvote', function(){
			this.render();
		}.bind(this));
	},

	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}
})
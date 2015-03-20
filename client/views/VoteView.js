var VoteView = Backbone.View.extend({

	tagName: 'td',

	template: _.template(' <button class="upvote"><img src="images/upvote.png"></button><button class="downvote"><img src="images/downvote.png"></button> <%= votecount %>'),

	events: {
		// 'click': function(){
		// 	this.model.upvote();
		// }
	},

	initialize: function(){
		this.$el.on('click', '.upvote', function(){
			this.model.upvote();
		}.bind(this))

		this.$el.on('click', '.downvote', function(){
			this.model.downvote();
		}.bind(this))

		this.render();

		this.model.on('upvote downvote', function(){
			this.render();
		}.bind(this));
	},

	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}
})
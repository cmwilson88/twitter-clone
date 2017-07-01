$(document).ready(function(){

	console.log('jquery linked');

	$('time.timeago').timeago();

	$('.tweet-compose').on('focus', function(){
		$(this).css({
			'height': '5em'
		});
		$('#tweet-controls').css({
			'visibility': 'visible'
		})
	})

	$('.tweet-compose').on('keyup', function(e){
			var charCount = $(this).val().length;
			var charLeft = 140 - charCount;
			if (e.which >= 32 && e.which <= 126) {
				$('#char-count').text(charLeft);
			} else if (e.which === 8) {
				$('#char-count').text(charLeft);
			}

			if (charLeft <= 10) {
				$('#char-count').css({
					'color': 'red'
				});
			} else if (charLeft > 10) {
				$('#char-count').css({
					'color':'black'
				});
			}

			if (charCount > 140) {
				$('#tweet-submit').prop('disabled', true);
			} else {
				$('#tweet-submit').prop('disabled', false);
			}
	});

	$('#tweet-submit').on('click', function(){
		if ($('.tweet-compose').val().length > 0) {
			$('#stream').prepend(
				'<div class="tweet">' +
					'<div class="content">' +
						'<img class="avatar" src="img/alagoon.jpg" />' +
						'<strong class="fullname">Your Name Here</strong>' +
						'<span class="username">@yournamehere</span>' + 
						'<p class="tweet-text">' + $('.tweet-compose').val() + '</p>' +
						'<div class="tweet-actions">' +
							'<ul>' +
								'<li><span class="icon action-reply"></span> Reply</li>' +
								'<li><span class="icon action-retweet"></span> Retweet</li>' +
								'<li><span class="icon action-favorite"></span> Favorite</li>' +
								'<li><span class="icon action-more"></span> More</li>' +
							'</ul>' +
						'</div>'  +
						'<div class="stats">'  +
							'<div class="retweets">'  +
								'<p class="num-retweets">30</p>'  +
								'<p>RETWEETS</p>'  +
							'</div>'  +
							'<div class="favorites">' +
								'<p class="num-favorites">6</p>' +
								'<p>FAVORITES</p>' +
							'</div>' +
							'<div class="users-interact">' +
								'<div>' +
									'<img src="img/alagoon.jpg" />' +
									'<img src="img/vklimenko.jpg" />' +
								'</div>' +
							'</div>' +
							'<div>' + 
							'<time class="timeago">' + jQuery.timeago(new Date()) +
							'</time>' + 
							'</div>' +
						'</div>' +
						'<div class="reply">' +
							'<img class="avatar" src="img/alagoon.jpg" />' +
							'<textarea class="tweet-compose" placeholder="Reply to @myusername"/></textarea>' +
						'</div>' +
					'</div>' +
				'</div>'
			)
		}
		$('.tweet-compose').val('');
	});

	$('#stream').on('mouseenter', '.tweet', function(){
		$('.tweet-actions', this).css({
			'visibility': 'visible'
		})
	});

	$('#stream').on('mouseleave', '.tweet', function(){
		$('.tweet-actions', this).css({
			'visibility': 'hidden'
		})
	})

	$('#stream').on('click', '.tweet', function(){
		
		if($(this).hasClass('selectedTweet')) {
			$('.toggleVis', this).removeClass('toggleVis');
			$(this).removeClass('selectedTweet');
		} else {
			$('.toggleVis').removeClass('toggleVis');
			$(this).addClass('selectedTweet');
			$('.reply', this).addClass('toggleVis');
			$('.stats', this).addClass('toggleVis');
		}
	})



});
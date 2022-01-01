$(function() {
	//TODO: check bug, not selecting-deselecting correctly
	$("#about-tag-en").click(function() {
		clearTags();
		$("#about-tag-en").addClass('selected');
		$("#about-tag-sp").addClass('selected');
		clearCards();
		$("#about-me").removeClass('card-hidden').addClass('card-visible');
	});
	$("#about-tag-sp").click(function() {
		clearTags();
		$("#about-tag-sp").addClass('selected');
		$("#about-tag-en").addClass('selected');
		clearCards();
		$("#about-me").removeClass('card-hidden').addClass('card-visible');
	});
	$("#resume-tag-en").click(function() {
		clearTags();
		$("#resume-tag-en").addClass('selected');
		$("#resume-tag-sp").addClass('selected');
		clearCards();
		$("#resume").removeClass('card-hidden').addClass('card-visible');
	});
	$("#resume-tag-sp").click(function() {
		clearTags();
		$("#resume-tag-sp").addClass('selected');
		$("#resume-tag-en").addClass('selected');
		clearCards();
		$("#resume").removeClass('card-hidden').addClass('card-visible');
	});
	$("#works-tag-en").click(function() {
		clearTags();
		$("#works-tag-en").addClass('selected');
		$("#works-tag-sp").addClass('selected');
		clearCards();
		$("#works").removeClass('card-hidden').addClass('card-visible');
	});
	$("#works-tag-sp").click(function() {
		clearTags();
		$("#works-tag-sp").addClass('selected');
		$("#works-tag-en").addClass('selected');
		clearCards();
		$("#works").removeClass('card-hidden').addClass('card-visible');
	});
	$("#hobbies-tag-en").click(function() {
		clearTags();
		$("#hobbies-tag-en").addClass('selected');
		$("#hobbies-tag-sp").addClass('selected');
		clearCards();
		$("#hobbies").removeClass('card-hidden').addClass('card-visible');
	});
	$("#hobbies-tag-sp").click(function() {
		clearTags();
		$("#hobbies-tag-sp").addClass('selected');
		$("#hobbies-tag-en").addClass('selected');
		clearCards();
		$("#hobbies").removeClass('card-hidden').addClass('card-visible');
	});
})

function clearTags() {
	let tags = $(".tag");
	for (let i = 0; i < tags.length; i++) {
		if (tags[i].classList.contains('selected')) {
			tags[i].classList.remove('selected');
		}
	}
}

function clearCards() {
	let cards = $(".info-card");
	for (let i = 0; i < cards.length; i++) {
		if (cards[i].classList.contains('card-visible')) {
			cards[i].classList.remove('card-visible');
			cards[i].classList.add('card-hidden');
			return;
		}
	}
}
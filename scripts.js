//jquery scripts for citationscribe
//= require jquery

var showResources, showInput, format, resource, authors, makeBook, makeMagazine, makeNews, makeWeb, makeJournal, makeMovie, apaBook, mlaBook, chiBook, cseBook;
authors = '<div class="row hiddenAuthor" style="display:none;"><div class="two columns"><label class="u-pull-right">Author</label></div><div class="three columns"><input placeholder="Last Name" type="text" class="u-full-width AuthorLast"></div><div class="two columns"><input placeholder="Initial" type="text" class="u-full-width AuthorInitial"></div><div class="three columns"><input placeholder="First Name" type="text" class="u-full-width AuthorFirst"></div></div>';
directors = '<div class="row hiddenAuthor" style="display:none;"><div class="two columns"><label class="u-pull-right">Director</label></div><div class="three columns"><input placeholder="Last Name" type="text" class="u-full-width AuthorLast"></div><div class="two columns"><input placeholder="Initial" type="text" class="u-full-width AuthorInitial"></div><div class="three columns"><input placeholder="First Name" type="text" class="u-full-width AuthorFirst"></div></div>';


showResources = function() {
	$('#resourceHeader').show('fast');
	$('#resources').show('fast');
};
makeBook = function() {
	var title = $('#bookTitle').val();
	var volume = $('#bookVolume').val();
	var edition = $('#bookEdition').val();
	var pages = $('#bookPages').val();
	var publisher = $('#bookPublisher').val();
	var locate = $('#bookLocation').val();
	var year = $('#bookYear').val();
	//iterate through and get an array of the authors
	//This should be done in the format methods. The author issue is solved by formatting at the same time as reading. Which is how it all should be done.
	var authorFirst = [];
	$('.AuthorFirst').each(function(i, obj) {
			authorFirst.push(obj.val());
	});
	var authorInitial = [];
	$('.AuthorInitial').each(function(i, obj) {
			authorInitial.push(obj.val());
	});
	var authorLast = [];
	$('.AuthorLast').each(function(i, obj) {
			authorLast.push(obj.val());
	});
	if (format == 'apa') {
		apaBook(title, authorLast, authorInitial, authorFirst, edition, volume, publisher, locate);
	} else if (format == 'mla') {
		mlaBook();
	} else if (format == 'chi') {
		chiBook();
	} else if (format == 'cse') {
		cseBook();
	};
};
apaBook = function(title, authorLast, authorInitial, authorFirst, edition, volume, publisher, locate) {
	var citation = '';	
};

showInput = function() {
	if (resource == 'book') {
			$('#bookInput').show('slow');

			$('#magInput').hide();
			$('#newsInput').hide();
			$('#webInput').hide();
			$('#journalInput').hide();
			$('#movieInput').hide();
	} else if(resource == 'magazine') {
			$('#magInput').show('slow');

			$('#bookInput').hide();
			$('#newsInput').hide();
			$('#webInput').hide();
			$('#journalInput').hide();
			$('#movieInput').hide();
	} else if(resource == 'news') {
			$('#newsInput').show('slow');

			$('#bookInput').hide();
			$('#magInput').hide();
			$('#webInput').hide();
			$('#journalInput').hide();
			$('#movieInput').hide();
	} else if(resource == 'web') {
			$('#webInput').show('slow');

			$('#bookInput').hide();
			$('#magInput').hide();
			$('#newsInput').hide();
			$('#journalInput').hide();
			$('#movieInput').hide();
	} else if(resource == 'journal') {
			$('#journalInput').show('slow');

			$('#bookInput').hide();
			$('#magInput').hide();
			$('#webInput').hide();
			$('#newsInput').hide();
			$('#movieInput').hide();
	} else if(resource == 'movie') {
			$('#movieInput').show('slow');

			$('#bookInput').hide();
			$('#magInput').hide();
			$('#webInput').hide();
			$('#journalInput').hide();
			$('#newsInput').hide();
	};
};

$( document).ready(function() {
		$('#apa').click(function( event) {
			$('#apa').addClass('button-primary');
			format = 'apa';
			showResources();

			$('#mla').removeClass('button-primary');
			$('#chi').removeClass('button-primary');
			$('#cse').removeClass('button-primary');
		});
		$('#mla').click(function( event) {
			$('#mla').addClass('button-primary');
			format = 'mla';
			showResources();

			$('#apa').removeClass('button-primary');
			$('#chi').removeClass('button-primary');
			$('#cse').removeClass('button-primary');
		});
		$('#chi').click(function( event) {
			$('#chi').addClass('button-primary');
			format = 'chi';
			showResources();

			$('#mla').removeClass('button-primary');
			$('#apa').removeClass('button-primary');
			$('#cse').removeClass('button-primary');
		});
		$("#cse").click(function( event) {
			$('#cse').addClass('button-primary');
			format = 'cse';
			showResources();

			$('#mla').removeClass('button-primary');
			$('#chi').removeClass('button-primary');
			$('#apa').removeClass('button-primary');
		});

		//resource buttons
		$("#book").click(function( event) {
			$('#book').addClass('button-primary');
			resource = 'book';
			showInput();

			$('#magazine').removeClass('button-primary');
			$('#news').removeClass('button-primary');
			$('#web').removeClass('button-primary');
			$('#journal').removeClass('button-primary');
			$('#movie').removeClass('button-primary');
		});
		$("#magazine").click(function( event) {
			$('#magazine').addClass('button-primary');
			resource = 'magazine';
			showInput();

			$('#book').removeClass('button-primary');
			$('#news').removeClass('button-primary');
			$('#web').removeClass('button-primary');
			$('#journal').removeClass('button-primary');
			$('#movie').removeClass('button-primary');
		});
		$("#news").click(function( event) {
			$('#news').addClass('button-primary');
			resource = 'news';
			showInput();

			$('#magazine').removeClass('button-primary');
			$('#book').removeClass('button-primary');
			$('#web').removeClass('button-primary');
			$('#journal').removeClass('button-primary');
			$('#movie').removeClass('button-primary');
		});
		$("#web").click(function( event) {
			$('#web').addClass('button-primary');
			resource = 'web';
			showInput();

			$('#magazine').removeClass('button-primary');
			$('#book').removeClass('button-primary');
			$('#news').removeClass('button-primary');
			$('#journal').removeClass('button-primary');
			$('#movie').removeClass('button-primary');
		});
		$("#journal").click(function( event) {
			$('#journal').addClass('button-primary');
			resource = 'journal';
			showInput();

			$('#magazine').removeClass('button-primary');
			$('#news').removeClass('button-primary');
			$('#web').removeClass('button-primary');
			$('#book').removeClass('button-primary');
			$('#movie').removeClass('button-primary');
		});
		$("#movie").click(function( event) {
			$('#movie').addClass('button-primary');
			resource = 'movie';
			showInput();

			$('#magazine').removeClass('button-primary');
			$('#news').removeClass('button-primary');
			$('#web').removeClass('button-primary');
			$('#journal').removeClass('button-primary');
			$('#book').removeClass('button-primary');
		});

		//add author buttons
		$('#bookAddAuthor').click(function( event) {
				$('#bookAuthors').append(authors);
				$('.hiddenAuthor').slideDown();
		});
		$('#magAddAuthor').click(function( event) {
				$('#magAuthors').append(authors);
				$('.hiddenAuthor').slideDown();
		});
		$('#newsAddAuthor').click(function( event) {
				$('#newsAuthors').append(authors);
				$('.hiddenAuthor').slideDown();
		});
		$('#webAddAuthor').click(function( event) {
				$('#webAuthors').append(authors);
				$('.hiddenAuthor').slideDown();
		});
		$('#jouAddAuthor').click(function( event) {
				$('#jouAuthors').append(authors);
				$('.hiddenAuthor').slideDown();
		});
		$('#movieAddAuthor').click(function( event) {
				$('#movieAuthors').append(directors);
				$('.hiddenAuthor').slideDown();
		});

		//journal source buttons
		$('#selectPrint').click(function( event) {
				$('#online').slideUp('fast');
				$('#database').slideUp('fast');
		});
		$('#selectOnline').click(function( event) {
				$('#database').slideUp('fast');
				$('#online').slideDown();
		});
		$('#selectDatabase').click(function( event) {
				$('#online').slideUp('fast');
				$('#database').slideDown();
		});
});

//jquery scripts for citationscribe
//= require jquery

var showResources, showInput, format, resource, authors, makeBook, makeMagazine, makeNews, makeWeb, makeJournal, makeMovie, apaBook, mlaBook, chiBook, cseBook, showCitation, clearFields, notComplete;

authors = ['<div class="row hiddenAuthor" style="display:none;"><div class="two columns"><label class="u-pull-right">Author</label></div><div class="three columns"><input name="', '" placeholder="Last Name" type="text" class="u-full-width AuthorLast"></div><div class="two columns"><input name="', '" placeholder="Initial" type="text" class="u-full-width AuthorInitial"></div><div class="three columns"><input name="', '" placeholder="First Name" type="text" class="u-full-width AuthorFirst"></div></div>'];
directors = ['<div class="row hiddenAuthor" style="display:none;"><div class="two columns"><label class="u-pull-right">Director</label></div><div class="three columns"><input name="', '" placeholder="Last Name" type="text" class="u-full-width AuthorLast"></div><div class="two columns"><input name="', '" placeholder="Initial" type="text" class="u-full-width AuthorInitial"></div><div class="three columns"><input name="', '" placeholder="First Name" type="text" class="u-full-width AuthorFirst"></div></div>'];
var bookAuthors = 1;
var magAuthors = 1;
var newsAuthors = 1;
var webAuthors = 1;
var jouAuthors = 1;
var movAuthors = 1;

showResources = function() {
	$('#resourceHeader').show('fast');
	$('#resources').show('fast');
};
showCitation = function() {
    if ($('#citations').hasClass('hidden')) {
        $('#citations').slideDown();
        $('#citations').removeClass('hidden');
    };
    $('.citation').each(function() {
        if ($(this).hasClass('hidden')) {
            $(this).slideDown();
            $(this).removeClass('hidden');
        };
    });
};
clearFields = function() {
    $(':input').not(':button', ':submit', ':reset')
      .val('');
    bookAuthors = magAuthors = newsAuthors = webAuthors = jouAuthors = movAuthors = 1;
    $('.hiddenAuthor').slideUp('quick', function() {$('.hiddenAuthor').remove()});
};
notComplete = function(resounce, field) {
	$('#' + resource + 'NotComplete').text(field + ' cannot be left blank');
	$('#' + resource +'NotComplete').show('fast');	
}
apaBook = function(title, authorArray, edition, volume, publisher, locate, year) {
	var citation = '<p class="hidden citation">';
	for (i = 0; i < authorArray.length; i += 3) {
	   citation += authorArray[i].value;
		 if (authorArray[i+1].value.length != 0 || authorArray[i+2].value.length !=0) {
		    citation += ',';
		 };

	   if (authorArray[i+2].value.length != 0) {
	       citation += ' ' + authorArray[i+2].value.charAt(0).toUpperCase() + '.';
	   };
	   if (authorArray[i+1].value.length != 0) {
	       citation += ' ' + authorArray[i+1].value.charAt(0).toUpperCase() + '.';
	   };

	   if (i + 3 < authorArray.length) {
	       citation += ', & ';
	   } else {
	       citation += ' ';
	   };
	};
    if (year.length != 0) {
	    citation += '(' + year + '). ';
    }
    citation += '<em>' + title + '</em> ';
    if (edition.length != 0) {
        citation += '(' + edition + ' ed.). ';
    };
    if (volume.length != 0) {
        citation += '(Vol. ' + volume + '). '
    };
    if (publisher.length != 0 && locate.length != 0) {
        citation += locate + ': ' + publisher + '.';
    } else if(publisher.length != 0) {
        citation += publisher + '. ';
    } else if(locate.length != 0) {
        citation += locate + '. ';
    };
    citation += '</p>';
    $('#citation-inner').append(citation);
    showCitation();
    clearFields();
};
cseBook = function(title, authorArray, edition, volume, publisher, locate) {
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
				$('#bookAuthors').append(authors[0] + 'bookAuthorLast' + bookAuthors + authors[1] + 'bookAuthorInitial' +
                        bookAuthors + authors[2] + 'bookAuthorFirst' + bookAuthors + authors[3]);
				$('.hiddenAuthor').slideDown();
				bookAuthors++;
		});
		$('#magAddAuthor').click(function( event) {
				$('#magAuthors').append(authors[0] + 'magAuthorLast' + magAuthors + authors[1] + 'magAuthorInitial' +
                        magAuthors + authors[2] + 'magAuthorFirst' + magAuthors + authors[3]);
				$('.hiddenAuthor').slideDown();
				magAuthors++;
		});
		$('#newsAddAuthor').click(function( event) {
				$('#newsAuthors').append(authors[0] + 'newsAuthorLast' + newsAuthors + authors[1] + 'newsAuthorInitial' +
                        newsAuthors + authors[2] + 'newsAuthorFirst' + newsAuthors + authors[3]);
				$('.hiddenAuthor').slideDown();
				newsAuthors++;
		});
		$('#webAddAuthor').click(function( event) {
				$('#webAuthors').append(authors[0] + 'webAuthorLast' + webAuthors + authors[1] + 'webAuthorInitial' +
                        webAuthors + authors[2] + 'webAuthorFirst' + webAuthors + authors[3]);
				$('.hiddenAuthor').slideDown();
				webAuthors++;
		});
		$('#jouAddAuthor').click(function( event) {
				$('#jouAuthors').append(authors[0] + 'jouAuthorLast' + jouAuthors + authors[1] + 'jouAuthorInitial' +
                        jouAuthors + authors[2] + 'jouAuthorFirst' + jouAuthors + authors[3]);
				$('.hiddenAuthor').slideDown();
				jouAuthors++;
		});
		$('#movieAddAuthor').click(function( event) {
				$('#movieAuthors').append(directors[0] + 'movAuthorLast' + movAuthors + directors[1] + 'movAuthorInitial' +
                        movAuthors + directors[2] + 'movAuthorFirst' + movAuthors + directors[3]);
				$('.hiddenAuthor').slideDown();
				movAuthors++;
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
        	$('#citeBook').click(function( event) {
                var title = $('#bookTitle').val();
	            var volume = $('#bookVolume').val();
	            var edition = $('#bookEdition').val();
	            var pages = $('#bookPages').val();
	            var publisher = $('#bookPublisher').val();
	            var locate = $('#bookLocation').val();
	            var year = $('#bookYear').val();
	            var authorArray = $('#bookAuthors').serializeArray();
				if (title.length == 0) {
					notComplete('book', 'Title');
				} else if (authorArray[0].value.length == 0) {
					notComplete('book', 'Author');
				} else {
					$('#bookNotComplete').hide('fast');	
	            	if (format == 'apa') {
		            	apaBook(title, authorArray, edition, volume, publisher, locate, year);
	            	} else if (format == 'mla') {
		            	mlaBook();
	            	} else if (format == 'chi') {
		            	chiBook();
	            	} else if (format == 'cse') {
		            	cseBook();
	            	};
				};
			});
});

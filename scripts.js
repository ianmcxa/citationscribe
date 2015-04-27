//jquery scripts for citationscribe
//= require jquery

var showResources, showInput, format, resource, authors, makeBook, makeMagazine, makeNews, makeWeb, makeJournal, makeMovie, apaBook, mlaBook, chiBook, cseBook, apaMag, mlaMag, chiMag, cseMag, showCitation, clearFields, notComplete, journalSource;

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
notComplete = function(resource1, field) {
	$('#' + resource1 + 'NotComplete').text(field + ' cannot be left blank');
	$('#' + resource1 +'NotComplete').slideDown('fast');
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
			   if (authorArray[i+1].value.length == 0 && authorArray[i+2].value.length == 0)
				    citation += '.';
	       citation += ' ';
	   };
	};
    if (year.length != 0) {
	    citation += '(' + year + '). ';
    }
    citation += '<em>' + title + '. ' + '</em> ';
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
apaMag = function(articleTitle, authorArray, year, month, day, magazineTitle, volume, issue, pages, url) {
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
			   if (authorArray[i+1].value.length == 0 && authorArray[i+2].value.length == 0)
				     citation += '.';
	       citation += ' ';
	   };
	};
    if (year.length != 0) {
	    citation += '(' + year;
			if (month.length != 0) {
			    citation += ', ' + month;
					if (day.length != 0) citation += ' ' + day;
			}
			citation += '). ';
    }

		citation += articleTitle + '. ';
    citation += '<em>' + magazineTitle + ', </em> ';
		if (issue.length != 0) citation += '<em>' + issue + '</em>';
    if (volume.length != 0) citation += '(' + volume + ')';
		if (volume.length != 0 || issue.length != 0) citation += ', ';
		if (pages.length != 0) citation += pages + '. ';
		if (url.length != 0) citation += url;

	  citation += '</p>';
    $('#citation-inner').append(citation);
    showCitation();
    clearFields();
};
apaNews = function(articleTitle, authorArray, year, month, day, newspaperTitle, pages, url) {
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
			   if (authorArray[i+1].value.length == 0 && authorArray[i+2].value.length == 0)
					  citation += '.';
	       citation += ' ';
	   };
	};
    if (year.length != 0) {
	    citation += '(' + year;
			if (month.length != 0) {
			    citation += ', ' + month;
					if (day.length != 0) citation += ' ' + day;
			}
			citation += '). ';
    }

		citation += articleTitle + '. ';
    citation += '<em>' + newspaperTitle + ', </em> ';
		if (pages.length != 0) citation += 'pp. ' + pages + '. ';
		if (url.length != 0) citation += url;

	  citation += '</p>';
    $('#citation-inner').append(citation);
    showCitation();
    clearFields();
};
apaWeb = function(articleTitle, authorArray, year, month, day, url) {
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
			   if (authorArray[i+1].value.length == 0 && authorArray[i+2].value.length == 0)
				    citation += '.';
	       citation += ' ';
	   };
	};
    if (year.length != 0) {
	    citation += '(' + year;
			if (month.length != 0) {
			    citation += ', ' + month;
					if (day.length != 0) citation += ' ' + day;
			}
			citation += '). ';
    }

    citation += '<em>' + articleTitle + '. </em> ';
		if (url.length != 0) citation += 'Retrieved from ' + url;

	  citation += '</p>';
    $('#citation-inner').append(citation);
    showCitation();
    clearFields();
};
apaJou = function(articleTitle, journalTitle, authorArray, year, month, day, webURL, datURL, volume, issue, pages) {
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
			   if (authorArray[i+1].value.length == 0 && authorArray[i+2].value.length == 0)
				    citation += '.';
	       citation += ' ';
	   };
	};
    if (year.length != 0) {
	    citation += '(' + year;
			if (month.length != 0) {
			    citation += ', ' + month;
					if (day.length != 0) citation += ' ' + day;
			}
			citation += '). ';
    }

		citation += articleTitle + '. ';
    citation += '<em>' + journalTitle + ', </em> ';
		if (issue.length != 0) citation += '<em>' + issue + '</em>';
    if (volume.length != 0) citation += '(' + volume + ')';
		if (volume.length != 0 || issue.length != 0) citation += ', ';
		if (pages.length != 0) citation += pages + '. ';
		if (journalSource == 'online' && webURL.length != 0)
		    citation += 'Retrieved from ' + webURL;
		else if (journalSource == 'database' && datURL.length != 0)
		   citation += 'Retrieved from ' + datURL;

	  citation += '</p>';
    $('#citation-inner').append(citation);
    showCitation();
    clearFields();
};
apaMovie = function(title, authorArray, publisher, locate, year) {
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
	       citation += ' (Director), & ';
	   } else {
	       citation += ' (Director). ';
	   };
	};
	if (year.length != 0) {
		citation += '(' + year + '). ';
		citation += '<em>' + title + ' [Motion Picture]. </em> ';
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
	}

};
cseBook = function(title, authorArray, edition, publisher, locate, year) {
    var citation = '<p class="hidden citation">';
		for (i = 0; i < authorArray.length; i += 3) {
		   citation += authorArray[i].value;
		   if (authorArray[i+2].value.length != 0) {
		       citation += ' ' + authorArray[i+2].value.charAt(0).toUpperCase();
		   };
		   if (authorArray[i+1].value.length != 0) {
		       citation += authorArray[i+1].value.charAt(0).toUpperCase();
		   };

		   if (i + 3 < authorArray.length) {
		       citation += ', ';
		   } else {
		       citation += '. ';
		   };
		};
			citation += title + '. ';
			if (edition.length != 0) citation += edition + '. ';
			if (locate.length != 0 && publisher.length != 0) {
				citation += locate + ': ' + publisher + ';';
			} else if (publisher.length != 0) citation += publisher + '; ';
			else if (locate.length != 0) citation += locate + '; ';
			if (year.length != 0) citation += year + '.';

			citation += '</p>';
			$('#citation-inner').append(citation);
			showCitation();
			clearFields();
};
mlaBook = function(title, authorArray, edition, volume, publisher, locate, year) {
	   var citation = '<p class="hidden citation">';
		 citation += authorArray[0].value;
		 // how many authors do we have?
	   var count = 0;
	   for (i = 0; i < authorArray.length; i += 3) {
		     if (authorArray[i].value.length != 0 ) count++;
		 };
		 if (count < 3) {
						 if (authorArray[2].value.length != 0 || authorArray[1].value.length != 0)
						     citation += ', ';
						 if (authorArray[2].value.length != 0) {
						     citation += authorArray[2].value;
								 if (authorArray[1].value.length != 0) citation += '. ';
						 }
						 if (authorArray[1].value.length != 0)
						     citation += authorArray[1].value.toUpperCase().charAt(0);
						 //if there are 2 auhtors
						 if (authorArray.length > 3) {
						     if (authorArray[3].value.length != 0 || authorArray[5].value.length != 0) {
						         citation += ', and ';
								     if (authorArray[5].value.length != 0) {
								         citation += authorArray[5].value;
								     if (authorArray[4].value.length != 0 || authorArray[3].value.length != 0)
										        citation += ' ';
								     }
								     if (authorArray[4].value.length != 0) {
								         citation += authorArray[4].value.toUpperCase().charAt(0) + '.';
										     if (authorArray[3].value.length != 0) citation += ' ';
								     }
								     if (authorArray[3].value.length != 0)
								         citation += authorArray[3].value;
						     }
					   }
		 }
		 else {
         citation += ',';
				 for (i = 3; i < authorArray.length; i += 3) {
             if (authorArray[i+2].value.length != 0)
						     citation += ' ' + authorArray[i+2].value;
						 if (authorArray[i+1].value.length != 0)
						     citation += ' ' + authorArray[i+1].value.toUpperCase().charAt(0) + '.';
						 if (authorArray[i].value.length != 0)
						     citation += ' ' + authorArray[i].value;
						 if (i+6 < authorArray.length)
						     citation += ',';
						 else if (i+3 < authorArray.length)
						     citation += ', and';
				 }
		 }
		 citation += '. ';

		citation += '<em>' + title + '.' + '</em> ';
		if (edition.length != 0)
				citation += edition + ' ed. ';
		if (volume.length != 0)
				citation += 'Vol. ' + volume + '. ';
		if (locate.length != 0) {
				citation += locate;
				if (publisher.length != 0) citation += ': ';
				else citation += ', ';
		}

  	if (publisher.length != 0) citation += publisher + ', ';
  	if (year.length != 0) citation += year + '.';

		citation += '</p>';
		$('#citation-inner').append(citation);
		showCitation();
		clearFields();
};
mlaMag = function(articleTitle, authorArray, year, month, day, magazineTitle, pages, url) {
	   var citation = '<p class="hidden citation">';
		 citation += authorArray[0].value;
		 // how many authors do we have?
	   var count = 0;
	   for (i = 0; i < authorArray.length; i += 3) {
		     if (authorArray[i].value.length != 0 ) count++;
		 };
		 if (count < 3) {
						 if (authorArray[2].value.length != 0 || authorArray[1].value.length != 0)
						     citation += ', ';
						 if (authorArray[2].value.length != 0) {
						     citation += authorArray[2].value;
								 if (authorArray[1].value.length != 0) citation += '. ';
						 }
						 if (authorArray[1].value.length != 0)
						     citation += authorArray[1].value.toUpperCase().charAt(0);
						 //if there are 2 auhtors
						 if (authorArray.length > 3) {
						     if (authorArray[3].value.length != 0 || authorArray[5].value.length != 0) {
						         citation += ', and ';
								     if (authorArray[5].value.length != 0) {
								         citation += authorArray[5].value;
								     if (authorArray[4].value.length != 0 || authorArray[3].value.length != 0)
										        citation += ' ';
								     }
								     if (authorArray[4].value.length != 0) {
								         citation += authorArray[4].value.toUpperCase().charAt(0) + '.';
										     if (authorArray[3].value.length != 0) citation += ' ';
								     }
								     if (authorArray[3].value.length != 0)
								         citation += authorArray[3].value;
						     }
					   }
		 }
		 else {
         citation += ',';
				 for (i = 3; i < authorArray.length; i += 3) {
             if (authorArray[i+2].value.length != 0)
						     citation += ' ' + authorArray[i+2].value;
						 if (authorArray[i+1].value.length != 0)
						     citation += ' ' + authorArray[i+1].value.toUpperCase().charAt(0) + '.';
						 if (authorArray[i].value.length != 0)
						     citation += ' ' + authorArray[i].value;
						 if (i+6 < authorArray.length)
						     citation += ',';
						 else if (i+3 < authorArray.length)
						     citation += ', and';
				 }
		 }
		 citation += '. ';

		 citation += '"' + articleTitle + '". ';
		 citation += '<em>' + magazineTitle + ' </em>';
		 if (year.length != 0) {
		     if (month.length != 0) {
				     if (day.length != 0)
						     citation += day + ' ';
						 citation += month + '. ';
				 }
				 citation += year;
				 if (pages.length != 0)
				    citation += ': ';
				 else citation += '. ';
		 } else citation += 'n.d. ';
		 if (pages.length != 0)
		     citation += pages + '. ';
		 if (url.length == 0)
		     citation += 'Print.';
		 else citation += 'Web.';

		citation += '</p>';
		$('#citation-inner').append(citation);
		showCitation();
		clearFields();
};
mlaWeb = function(articleTitle, authorArray, websiteTitle, publisher, year, month, day, url) {
	   var citation = '<p class="hidden citation">';
		 citation += authorArray[0].value;
		 // how many authors do we have?
	   var count = 0;
	   for (i = 0; i < authorArray.length; i += 3) {
		     if (authorArray[i].value.length != 0 ) count++;
		 };
		 if (count < 3) {
						 if (authorArray[2].value.length != 0 || authorArray[1].value.length != 0)
						     citation += ', ';
						 if (authorArray[2].value.length != 0) {
						     citation += authorArray[2].value;
								 if (authorArray[1].value.length != 0) citation += '. ';
						 }
						 if (authorArray[1].value.length != 0)
						     citation += authorArray[1].value.toUpperCase().charAt(0);
						 //if there are 2 auhtors
						 if (authorArray.length > 3) {
						     if (authorArray[3].value.length != 0 || authorArray[5].value.length != 0) {
						         citation += ', and ';
								     if (authorArray[5].value.length != 0) {
								         citation += authorArray[5].value;
								     if (authorArray[4].value.length != 0 || authorArray[3].value.length != 0)
										        citation += ' ';
								     }
								     if (authorArray[4].value.length != 0) {
								         citation += authorArray[4].value.toUpperCase().charAt(0) + '.';
										     if (authorArray[3].value.length != 0) citation += ' ';
								     }
								     if (authorArray[3].value.length != 0)
								         citation += authorArray[3].value;
						     }
					   }
		 }
		 else {
         citation += ',';
				 for (i = 3; i < authorArray.length; i += 3) {
             if (authorArray[i+2].value.length != 0)
						     citation += ' ' + authorArray[i+2].value;
						 if (authorArray[i+1].value.length != 0)
						     citation += ' ' + authorArray[i+1].value.toUpperCase().charAt(0) + '.';
						 if (authorArray[i].value.length != 0)
						     citation += ' ' + authorArray[i].value;
						 if (i+6 < authorArray.length)
						     citation += ',';
						 else if (i+3 < authorArray.length)
						     citation += ', and';
				 }
		 }
		 citation += '. ';

		citation += '"' + articleTitle + '." ';
		citation += '<em>' + websiteTitle + '. </em>';
    if (publisher.length != 0)
		    citation += publisher + '. ';
	  else citation += 'n.p. ';
		if (year.length != 0) {
				if (month.length != 0) {
						if (day.length != 0)
								citation += day + ' ';
						citation += month + '. ';
				}
				citation += year + '. ';
		} else citation += 'n.d. ';
		citation += 'Web. ';
		citation += $.format.date(new Date(), 'd MMM. yyyy.');

		citation += '</p>';
		$('#citation-inner').append(citation);
		showCitation();
		clearFields();
};
mlaJou = function(articleTitle, journalTitle, authorArray, year, month, day, datTitle, volume, issue, pages) {
	   var citation = '<p class="hidden citation">';
		 citation += authorArray[0].value;
		 // how many authors do we have?
	   var count = 0;
	   for (i = 0; i < authorArray.length; i += 3) {
		     if (authorArray[i].value.length != 0 ) count++;
		 };
		 if (count < 3) {
						 if (authorArray[2].value.length != 0 || authorArray[1].value.length != 0)
						     citation += ', ';
						 if (authorArray[2].value.length != 0) {
						     citation += authorArray[2].value;
								 if (authorArray[1].value.length != 0) citation += '. ';
						 }
						 if (authorArray[1].value.length != 0)
						     citation += authorArray[1].value.toUpperCase().charAt(0);
						 //if there are 2 auhtors
						 if (authorArray.length > 3) {
						     if (authorArray[3].value.length != 0 || authorArray[5].value.length != 0) {
						         citation += ', and ';
								     if (authorArray[5].value.length != 0) {
								         citation += authorArray[5].value;
								     if (authorArray[4].value.length != 0 || authorArray[3].value.length != 0)
										        citation += ' ';
								     }
								     if (authorArray[4].value.length != 0) {
								         citation += authorArray[4].value.toUpperCase().charAt(0) + '.';
										     if (authorArray[3].value.length != 0) citation += ' ';
								     }
								     if (authorArray[3].value.length != 0)
								         citation += authorArray[3].value;
						     }
					   }
		 }
		 else {
         citation += ',';
				 for (i = 3; i < authorArray.length; i += 3) {
             if (authorArray[i+2].value.length != 0)
						     citation += ' ' + authorArray[i+2].value;
						 if (authorArray[i+1].value.length != 0)
						     citation += ' ' + authorArray[i+1].value.toUpperCase().charAt(0) + '.';
						 if (authorArray[i].value.length != 0)
						     citation += ' ' + authorArray[i].value;
						 if (i+6 < authorArray.length)
						     citation += ',';
						 else if (i+3 < authorArray.length)
						     citation += ', and';
				 }
		 }
		 citation += '. ';

		 citation += '"' + articleTitle + '." ';
		 citation += '<em>' + journalTitle + ' </em>';

		 if (volume.length != 0) {
		     citation += volume;
				 if (issue.length != 0)
				     citation += '.'
				 else citation += '. ';
		 }
		 if (issue.length != 0)
		     citation += issue + ' ';
		 if (year.length != 0)
				 citation += '(' + year + '): ';
		 else citation += 'n.d. ';
		 if (pages.length != 0)
		     citation += pages + '. ';
		 else citation += 'n. pag. ';
		 if (journalSource == 'online') {
		     citation += 'Web. ';
				 citation += $.format.date(new Date(), 'd. MMM. yyyy.');
		 } else if (journalSource == 'database') {
		     if (datTitle.length != 0)
				     citation += '<em>' + datTitle + '. </em>';
				 citation += 'Web. ';
				citation += $.format.date(new Date(), 'd MMM. yyyy.');
		 } else citation += 'Print.';

		citation += '</p>';
		$('#citation-inner').append(citation);
		showCitation();
		clearFields();
};
mlaMovie = function(title, authorArray, publisher, performers, year) {
    var citation = '<p class="hidden citation">';
		citation += '<em>' + title + '. </em>';

		citation += 'Dir.';
		for (i = 0; i < authorArray.length; i += 3) {
				if (authorArray[i+2].value.length != 0)
						citation += ' ' + authorArray[i+2].value;
				if (authorArray[i+1].value.length != 0)
						citation += ' ' + authorArray[i+1].value.toUpperCase().charAt(0) + '.';
				if (authorArray[i].value.length != 0)
						citation += ' ' + authorArray[i].value;
				if (i+6 < authorArray.length)
						citation += ',';
				else if (i+3 < authorArray.length)
						citation += ', and';
		}
		citation += '. ';

		if (performers.length != 0) citation += 'Perf. ' + performers + '. ';
		if (publisher.length != 0) {
		    citation += publisher
		    if (year.length != 0) citation += ', ';
		    else citation += '. ';
		}
		if (year.length != 0) citation += year + '. ';
		citation += 'Film.';

		citation += '</p>';
		$('#citation-inner').append(citation);
		showCitation();
		clearFields();
};

chiBook = function(title, authorArray, volume, publisher, locate, year) {
	   var citation = '<p class="hidden citation">';
		 citation += authorArray[0].value;
		 // how many authors do we have?
	   var count = 0;
	   for (i = 0; i < authorArray.length; i += 3) {
		     if (authorArray[i].value.length != 0 ) count++;
		 };
		 if (count < 3) {
						 if (authorArray[2].value.length != 0 || authorArray[1].value.length != 0)
						     citation += ', ';
						 if (authorArray[2].value.length != 0) {
						     citation += authorArray[2].value;
								 if (authorArray[1].value.length != 0) citation += '. ';
						 }
						 if (authorArray[1].value.length != 0)
						     citation += authorArray[1].value.toUpperCase().charAt(0);
						 //if there are 2 auhtors
						 if (authorArray.length > 3) {
						     if (authorArray[3].value.length != 0 || authorArray[5].value.length != 0) {
						         citation += ', and ';
								     if (authorArray[5].value.length != 0) {
								         citation += authorArray[5].value;
								     if (authorArray[4].value.length != 0 || authorArray[3].value.length != 0)
										        citation += ' ';
								     }
								     if (authorArray[4].value.length != 0) {
								         citation += authorArray[4].value.toUpperCase().charAt(0) + '.';
										     if (authorArray[3].value.length != 0) citation += ' ';
								     }
								     if (authorArray[3].value.length != 0)
								         citation += authorArray[3].value;
						     }
					   }
		 }
		 else {
         citation += ',';
				 for (i = 3; i < authorArray.length; i += 3) {
             if (authorArray[i+2].value.length != 0)
						     citation += ' ' + authorArray[i+2].value;
						 if (authorArray[i+1].value.length != 0)
						     citation += ' ' + authorArray[i+1].value.toUpperCase().charAt(0) + '.';
						 if (authorArray[i].value.length != 0)
						     citation += ' ' + authorArray[i].value;
						 if (i+6 < authorArray.length)
						     citation += ',';
						 else if (i+3 < authorArray.length)
						     citation += ', and';
				 }
		 }
		 citation += '. ';

		citation += '<em>' + title + '.' + '</em> ';
		if (volume.length != 0)
				citation += 'vol. ' + volume + '. ';
		if (locate.length != 0) {
				citation += locate;
				if (publisher.length != 0) citation += ': ';
				else citation += ', ';
		}

		if (publisher.length != 0) citation += publisher + ', ';
		if (year.length != 0) citation += year + '.';

		citation += '</p>';
		$('#citation-inner').append(citation);
		showCitation();
		clearFields();
}
chiMag = function(articleTitle, authorArray, year, month, day, magazineTitle, pages, url) {
	   var citation = '<p class="hidden citation">';
		 citation += authorArray[0].value;
		 // how many authors do we have?
	   var count = 0;
	   for (i = 0; i < authorArray.length; i += 3) {
		     if (authorArray[i].value.length != 0 ) count++;
		 };
		 if (count < 3) {
						 if (authorArray[2].value.length != 0 || authorArray[1].value.length != 0)
						     citation += ', ';
						 if (authorArray[2].value.length != 0) {
						     citation += authorArray[2].value;
								 if (authorArray[1].value.length != 0) citation += '. ';
						 }
						 if (authorArray[1].value.length != 0)
						     citation += authorArray[1].value.toUpperCase().charAt(0);
						 //if there are 2 auhtors
						 if (authorArray.length > 3) {
						     if (authorArray[3].value.length != 0 || authorArray[5].value.length != 0) {
						         citation += ', and ';
								     if (authorArray[5].value.length != 0) {
								         citation += authorArray[5].value;
								     if (authorArray[4].value.length != 0 || authorArray[3].value.length != 0)
										        citation += ' ';
								     }
								     if (authorArray[4].value.length != 0) {
								         citation += authorArray[4].value.toUpperCase().charAt(0) + '.';
										     if (authorArray[3].value.length != 0) citation += ' ';
								     }
								     if (authorArray[3].value.length != 0)
								         citation += authorArray[3].value;
						     }
					   }
		 }
		 else {
         citation += ',';
				 for (i = 3; i < authorArray.length; i += 3) {
             if (authorArray[i+2].value.length != 0)
						     citation += ' ' + authorArray[i+2].value;
						 if (authorArray[i+1].value.length != 0)
						     citation += ' ' + authorArray[i+1].value.toUpperCase().charAt(0) + '.';
						 if (authorArray[i].value.length != 0)
						     citation += ' ' + authorArray[i].value;
						 if (i+6 < authorArray.length)
						     citation += ',';
						 else if (i+3 < authorArray.length)
						     citation += ', and';
				 }
		 }
		 citation += '. ';

		 citation += '"' + articleTitle + '". ';
		 citation += '<em>' + magazineTitle + ', </em>';
		 if (year.length != 0) {
		     if (month.length != 0) {
						 citation += month + ' ';
						 if (day.length != 0)
						     citation += day;
						 citation += ', ';
				 }
				 citation += year + '. ';
		 }
		 if (url.length != 0)
		     citation += url + '.';

		citation += '</p>';
		$('#citation-inner').append(citation);
		showCitation();
		clearFields();
};
chiWeb = function(articleTitle, websiteTitle, year, month, day, url) {
    var citation = '<p class="hidden citation">';

		citation += websiteTitle + '. <em>' + articleTitle + '. </em>';
		if (year.length != 0) {
			  citation += 'Last modified ';
		    if (month.length != 0) {
					citation += month;
					if (day.length != 0)
					    citation += ' ' + day + ', ';
					else citation += ', ';
				}
				citation += year + '. ';
		}
		citation += 'Accessed ';
		citation += $.format.date(new Date(), 'MMMM d, yyyy. ');
		if (url.length != 0)
		    citation += url + '.';

		citation += '</p>';
		$('#citation-inner').append(citation);
		showCitation();
		clearFields();
}
chiJou = function(articleTitle, journalTitle, authorArray, year, webURL, datURL, issue, pages) {
	   var citation = '<p class="hidden citation">';
		 citation += authorArray[0].value;
		 // how many authors do we have?
	   var count = 0;
	   for (i = 0; i < authorArray.length; i += 3) {
		     if (authorArray[i].value.length != 0 ) count++;
		 };
		 if (count < 3) {
						 if (authorArray[2].value.length != 0 || authorArray[1].value.length != 0)
						     citation += ', ';
						 if (authorArray[2].value.length != 0) {
						     citation += authorArray[2].value;
								 if (authorArray[1].value.length != 0) citation += '. ';
						 }
						 if (authorArray[1].value.length != 0)
						     citation += authorArray[1].value.toUpperCase().charAt(0);
						 //if there are 2 auhtors
						 if (authorArray.length > 3) {
						     if (authorArray[3].value.length != 0 || authorArray[5].value.length != 0) {
						         citation += ', and ';
								     if (authorArray[5].value.length != 0) {
								         citation += authorArray[5].value;
								     if (authorArray[4].value.length != 0 || authorArray[3].value.length != 0)
										        citation += ' ';
								     }
								     if (authorArray[4].value.length != 0) {
								         citation += authorArray[4].value.toUpperCase().charAt(0) + '.';
										     if (authorArray[3].value.length != 0) citation += ' ';
								     }
								     if (authorArray[3].value.length != 0)
								         citation += authorArray[3].value;
						     }
					   }
		 }
		 else {
         citation += ',';
				 for (i = 3; i < authorArray.length; i += 3) {
             if (authorArray[i+2].value.length != 0)
						     citation += ' ' + authorArray[i+2].value;
						 if (authorArray[i+1].value.length != 0)
						     citation += ' ' + authorArray[i+1].value.toUpperCase().charAt(0) + '.';
						 if (authorArray[i].value.length != 0)
						     citation += ' ' + authorArray[i].value;
						 if (i+6 < authorArray.length)
						     citation += ',';
						 else if (i+3 < authorArray.length)
						     citation += ', and';
				 }
		 }
		 citation += '. ';

		 citation += '"' + articleTitle + '." ';
		 citation += '<em>' + journalTitle + ' </em>';

		 if (issue.length != 0)
		     citation += issue + ' ';
		 if (year.length != 0)
				 citation += '(' + year + '): ';
		 if (pages.length != 0)
		     citation += pages + '. ';
		 else citation += 'n. pag. ';
		 if (journalSource == 'online') {
				 citation += 'Accessed ' + $.format.date(new Date(), 'MMMM d, yyyy. ');
				 citation += webURL + '.';
		 } else if (journalSource == 'database') {
				citation += 'Accessed ' + $.format.date(new Date(), 'MMMM d, yyyy. ');
				citation += webURL + '.';
		 }

		citation += '</p>';
		$('#citation-inner').append(citation);
		showCitation();
		clearFields();
};
chiMovie = function(title, authorArray, publisher, locate, performers, year, medium) {
    var citation = '<p class="hidden citation">';
		citation += '<em>' + title + '. </em>';

		citation += 'Directed by';
		for (i = 0; i < authorArray.length; i += 3) {
				if (authorArray[i+2].value.length != 0)
						citation += ' ' + authorArray[i+2].value;
				if (authorArray[i+1].value.length != 0)
						citation += ' ' + authorArray[i+1].value.toUpperCase().charAt(0) + '.';
				if (authorArray[i].value.length != 0)
						citation += ' ' + authorArray[i].value;
				if (i+6 < authorArray.length)
						citation += ',';
				else if (i+3 < authorArray.length)
						citation += ', and';
		}
		citation += '. ';

		if (performers.length != 0) citation += 'Performed by ' + performers + '. ';

		if (year.length != 0 || locate.length != 0 || publisher.length != 0) {
		    citation += '(';
	    	if (year.length != 0) citation += year + '; ';
		    if (locate.length != 0) {
		        citation += locate;
				    if (publisher.length != 0) citation += ': ';
				    else citation += '.';
		    }
				if (publisher.length != 0) citation += publisher + '.';
				citation += ')'
				if (medium.length != 0) citation += ', ';
		}
		if (medium.length != 0) citation += medium + '.';

		citation += '</p>';
		$('#citation-inner').append(citation);
		showCitation();
		clearFields();
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
				journalSource = 'print';
		});
		$('#selectOnline').click(function( event) {
				$('#database').slideUp('fast');
				$('#online').slideDown();
				journalSource = 'online';
		});
		$('#selectDatabase').click(function( event) {
				$('#online').slideUp('fast');
				$('#database').slideDown();
				journalSource = 'database';
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
		    if (title.length == 0) notComplete('book', 'Title');
		    else if (authorArray[0].value.length == 0) notComplete('book', 'Author');
		    else {
		        $('#bookNotComplete').hide('fast');
	            	if (format == 'apa') {
		            apaBook(title, authorArray, edition, volume, publisher, locate, year);
	            	} else if (format == 'mla') {
		            mlaBook(title, authorArray, edition, volume, publisher, locate, year);
	            	} else if (format == 'chi') {
		            chiBook(title, authorArray, volume, publisher, locate, year);
	            	} else if (format == 'cse') {
		            cseBook(title, authorArray, edition, publisher, locate, year);
	            	};
		    };
		});
		$('#citeMagazine').click(function( event) {
		    var volume = $('#magVolume').val();
		    var issue = $('#magIssue').val();
		    var articleTitle = $('#magArticleTitle').val();
		    var magazineTitle = $('#magTitle').val();
		    var url = $('#magURL').val();
		    var pages = $('#magNumbers').val();
		    var year = $('#magYear').val();
		    var month = $('#magMonth').val();
		    var day = $('#magDay').val();
		    var authorArray = $('#magAuthors').serializeArray();
		    if (articleTitle.length == 0) notComplete('mag', 'Article title');
		    else if (magazineTitle.length == 0) notComplete('mag', 'Magazine Title');
		    else if (authorArray[0].value.length == 0) notComplete('mag', 'Author');
		    else {
			$('#magNotComplete').hide('fast');
			if (format == 'apa') {
		            	apaMag(articleTitle, authorArray, year, month, day, magazineTitle, volume, issue, pages, url);
	            	} else if (format == 'mla') {
		            	mlaMag(articleTitle, authorArray, year, month, day, magazineTitle, pages, url);
	            	} else if (format == 'chi') {
		            	chiMag(articleTitle, authorArray, year, month, day, magazineTitle, pages, url);
	            	} else if (format == 'cse') {
		            	cseMag();
	            	};
		    };
		});
	        $('#citeNewspaper').click(function( event) {
		    var edition = $('#newsEdition').val();
		    var articleTitle = $('#newsArticleTitle').val();
		    var newspaperTitle = $('#newsTitle').val();
		    var url = $('#newsURL').val();
		    var publisher = $('newsPublisher').val();
		    var city = $('newsCity').val();
		    var pages = $('#newsNumbers').val();
		    var year = $('#newsYear').val();
		    var month = $('#newsMonth').val();
		    var day = $('#newsDay').val();
		    var authorArray = $('#newsAuthors').serializeArray();
		    if (articleTitle.length == 0) notComplete('news', 'Article title');
		    else if (newspaperTitle.length == 0) notComplete('news', 'Newspaper Title');
		    else if (authorArray[0].value.length == 0) notComplete('news', 'Author');
		    else {
			  $('#newsNotComplete').hide('fast');
			  if (format == 'apa') {
		            	apaNews(articleTitle, authorArray, year, month, day, newspaperTitle, pages, url);
	            	} else if (format == 'mla') {
		            	mlaMag(articleTitle, authorArray, year, month, day, newspaperTitle, pages, url);
	            	} else if (format == 'chi') {
									chiMag(articleTitle, authorArray, year, month, day, magazineTitle, pages, url);
	            	} else if (format == 'cse') {
		            	cseNews();
	            	};
		    };
		});
		 $('#citeWebsite').click(function( event) {
		    var articleTitle = $('#webArticleTitle').val();
		    var websiteTitle = $('#webTitle').val();
		    var url = $('#webURL').val();
		    var publisher = $('#webPublisher').val();
		    var year = $('#webYear').val();
		    var month = $('#webMonth').val();
		    var day = $('#webDay').val();
		    var authorArray = $('#webAuthors').serializeArray();
		    if (articleTitle.length == 0) notComplete('web', 'Article title');
				else if (url.length == 0) notComplete('web', 'URL');
		    else if (websiteTitle.length == 0) notComplete('web', 'Website Title');
		    else {
			$('#webNotComplete').hide('fast');
			if (format == 'apa') {
				          //APA must have web authors
				          if (authorArray[0].value.length == 0) notComplete('web', 'Author');
									else apaWeb(articleTitle, authorArray, year, month, day, url);
	            	} else if (format == 'mla') {
									if (authorArray[0].value.length == 0) notComplete('web', 'Author');
		            	else mlaWeb(articleTitle, authorArray, websiteTitle, publisher, year, month, day, url);
	            	} else if (format == 'chi') {
		            	chiWeb(articleTitle, websiteTitle, year, month, day, url);
	            	} else if (format == 'cse') {
		            	cseWeb();
	            	};
		    };
		});
		$('#citeJournal').click(function( event) {
			var articleTitle = $('#jouArticleTitle').val();
			var journalTitle = $('#jouTitle').val();
			var publisher = $('jouPublisher').val();
			var volume = $('#jouVolume').val();
			var issue = $('#jouIssue').val();
			var pages = $('#jouPages').val();
			var year = $('#jouYear').val();
			var month = $('#jouMonth').val();
			var day = $('#jouDay').val();
			var webTitle = $('#jouWebTitle').val();
			var webURL = $('#jouWebURL').val();
			var datTitle = $('#jouDatTitle').val();
			var datURL = $('#jouDatURL').val();
			var authorArray = $('#jouAuthors').serializeArray();
			if (articleTitle.length == 0) notComplete('jou', 'Article title');
			else if (journalTitle.length == 0) notComplete('jou', 'Journal Title');
			else if (authorArray[0].value.length == 0) notComplete('jou', 'Author');
			else {
		  $('#jouNotComplete').hide('fast');
		  if (format == 'apa') {
								apaJou(articleTitle, journalTitle, authorArray, year, month, day, webURL, datURL, volume, issue, pages);
							} else if (format == 'mla') {
								mlaJou(articleTitle, journalTitle, authorArray, year, month, day, datTitle, volume, issue, pages);
							} else if (format == 'chi') {
								chiJou(articleTitle, journalTitle, authorArray, year, webURL, datURL, issue, pages);
							} else if (format == 'cse') {
								cseJou();
							};
			};
		 });
		$('#citeMovie').click(function( event) {
				var title = $('#movieTitle').val();
		    var publisher = $('#moviePublisher').val();
				var performers = $('#moviePerformers').val();
				var locate = $('#movieLocation').val();
				var medium = $('#movieMedium').val();
		    var year = $('#movieYear').val();
		    var authorArray = $('#movieAuthors').serializeArray();
		    if (title.length == 0) notComplete('movie', 'Movie title');
		    else if (authorArray[0].value.length == 0) notComplete('movie', 'Director');
		    else {
			  $('#movieNotComplete').hide('fast');
			  if (format == 'apa') {
		            	apaMovie(title, authorArray, publisher, locate, year);
	            	} else if (format == 'mla') {
		            	mlaMovie(title, authorArray, publisher, performers, year);
	            	} else if (format == 'chi') {
		            	chiMovie(title, authorArray, publisher, locate, performers, year, medium);
	            	} else if (format == 'cse') {
		            	cseMovie();
	            	};
		    };
	});
});

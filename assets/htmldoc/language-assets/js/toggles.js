$(document).ready(function(){
/* ==========================================================================
   Toggles
   ========================================================================== */
    $('.toggle').click(function(){
        if($(this).parents('section').attr('id') !== "Examples") {
            $(this).toggleClass('open');
            $(this).closest('section').toggleClass('open');
        }
    });
    $('#Examples').on('click', '.toggle', function(){
        var clicked = $(this);
        clicked.toggleClass('open');
    });
    if($('#Examples').length) {
        $('#Examples .hideable').last().addClass('last-hideable');
    }
    $('.open-all').click(function(){
        if(window.location.search.indexOf('?view=all') < 0) {
            window.history.pushState({ page: "View All" }, "View All", "?view=all");
        }
        openAll();
    });
    if(window.location.search.indexOf('?view=all') > -1 && $('.open-all').length) {
        openAll();
    }
    
    $('a.example-jump-link').on('click', function(event) {
            event.preventDefault();
            openAll();
            var tempAnchor = document.createElement('a');
            tempAnchor.href = $(this).attr('href');
            var path = tempAnchor.pathname;
            var queryParams = tempAnchor.search.substring(1);
            var anchorId = tempAnchor.hash.substring(1);
            var newURL = window.location.origin + window.location.pathname + '?' + queryParams;
            if (anchorId) {newURL += '#' + anchorId;}
            window.history.pushState({}, '', newURL);
            var targetElement = $('#' + this.hash.substring(1));
            if (targetElement.length) {
                var stickyNavHeight = $('.stickyheader').outerHeight() || 0;
                var targetOffset = targetElement.offset().top - 110;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 0); 
            }
        });
        
        $('.menu-item.toggleable').on('click', function(event) {
            if($(event.target).is('.arrow')){
				event.preventDefault();
				$(this).toggleClass('open');
				var $nextChild = $(this).next();    				
				if ($nextChild.hasClass('submenu')) {
					$nextChild.toggleClass('open');
				 } else if ($nextChild.hasClass('subsubmenu')) {
					$nextChild.toggleClass('open');
				} else if ($nextChild.hasClass('subsubsubmenu')) {
					$nextChild.toggleClass('open');
				}
    		}
  		});
        
        $('.menu-link').on('click', function(event) {
            event.preventDefault();
			var sectionId = $(this).data('id');
			var anchor;
			if (sectionId === 'FunctionIntroduction') {
				anchor = $('.content-container');
			} else if(sectionId === 'MoreAbout') {
			    anchor = $('#RelatedGuides');
			} else {
				anchor = $('#' + sectionId);
			}
			if (anchor.length) {
			    anchor.addClass('open');
			    // anchor.parents('.hideable').prev('.toggle').addClass('open');
			    
			anchor.parents('.hideable').each(function() {
					var $parentToggle = $(this).prevAll('.toggle:first');
					if ($parentToggle.length) {
						$parentToggle.addClass('open');
					}
				});
			    
			    if(sectionId == 'DetailsAndOptions'){
			    	anchor.find('h1.toggle').addClass('open');
			    }
			    if(sectionId == 'FunctionEssay'){
			    	anchor.find('h1.toggle').addClass('open');
			    }
			    if(sectionId == 'InterpreterSection'){
			    	anchor.find('h1.toggle').addClass('open');
			    }
			    
			    var offsettest = 85;
			    
			    var stickyNavHeight = $('.stickyheader').outerHeight() + offsettest || 0;
                var targetOffset = anchor.offset().top - stickyNavHeight;
				
				var scrollDuration = 400;
				
				$('html, body').animate({
					scrollTop: targetOffset
				}, scrollDuration, function() {
					// Add highlight effect after scrolling completes
					
					if (sectionId === 'FunctionIntroduction') {
					
					} else if(sectionId === 'DetailsAndOptions' || sectionId === 'FunctionEssay' || sectionId === 'InterpreterSection') {
						anchor.find('h1.toggle').addClass('gradient');
						anchor.find('h1.toggle').addClass('sidebar-highlighter');
						setTimeout(function() {
							anchor.find('h1.toggle').removeClass('sidebar-highlighter');
						}, 1000);
						setTimeout(function() {
							anchor.find('h1.toggle').removeClass('gradient');
						}, 1500);
					} else {
					    anchor.addClass('gradient');
						anchor.addClass('sidebar-highlighter');
				
						// Remove highlight effect after 1 second
						setTimeout(function() {
							anchor.removeClass('sidebar-highlighter');
						}, 1000);
						setTimeout(function() {
							anchor.removeClass('gradient');
						}, 1500);
					}
				});

			}
        });
    
// 		$('.showlist').on('click', function() {
//                 $(this).siblings().removeClass('hide');
//                 $(this).addClass('hide');
//             });
//             
//             
//         $('.hiddenlist-grouptoggler').on('click', function () {
//     			const $hiddenlist = $(this).closest('.hiddenlist');
// 					  $hiddenlist.addClass('hide');
//                 const $showlist = $hiddenlist.prev('.showlist.showlist-image-container');
// 					  $showlist.removeClass('hide');
// 			});
			
			
	$('.showlist').on('click', function () {
		const $this = $(this);
		const $siblings = $this.siblings('.hiddenlist');
	
	    if ($siblings.length > 0){
			$this.fadeOut(0, function () {
				$this.addClass('hide');
			});
		
			$siblings.removeClass('hide').hide().slideDown(250);
		} else {
			$(this).siblings().removeClass('hide');
			$(this).addClass('hide');
		}
	});
	
	$('.hiddenlist-grouptoggler').on('click', function () {
		const $hiddenlist = $(this).closest('.hiddenlist');
		const $showlist = $hiddenlist.prev('.showlist.showlist-image-container');
	
		$hiddenlist.slideUp(250, function () {
			$hiddenlist.addClass('hide');
			$showlist.hide().removeClass('hide').fadeIn(0);
		});
	});
			
    
    function openAll() {
        $('.open-all').removeClass('on');
        $('.close-all').addClass('on');
        $('#Examples .toggle, #guide .toggle').addClass('open');
    }
    $('.close-all').click(function(){
        $('.open-all').addClass('on');
        $('.close-all').removeClass('on');
        $('#Examples .hideable .toggle, #guide .toggle').removeClass('open');
        $(window).trigger('resize');
    });
    $('#DetailsAndOptions, .alternateHeader, .preview-wrapper').on('click', function(){
        if(!$(this).hasClass('open') || !$(this).find('h1').hasClass('open')) {
            if($(this).find('h1').hasClass('open')) {
                //$(this).find('h1').removeClass('open');
                //$(this).removeClass('open');
            } else {
                $(this).find('h1').addClass('open');
                $(this).addClass('open');
            }
        }
    });
    $('#DetailsAndOptions .toggle, .alternateHeader .toggle, .preview-wrapper .toggle').on('click', function(e){
        e.stopPropagation();
        $(this).parent('section').toggleClass('open');
		var hideableHeight = $(this).siblings('.hideable').height();
		var sectionID = $(this).parents('section').prop('id');
		if(hideableHeight > 600 && $('.toggle').hasClass('open')) {
			if(!$(this).siblings('.hideable').find('.hideable-close-button').length) {
				$(this).siblings('.hideable').append('<a href="#'+sectionID+'" class="hideable-close-button">close</a>');
			}
		}
    });

    $('#ListAllOptions, .alternateHeader').on('click', function(){
        if(!$(this).hasClass('open') || !$(this).find('h2').hasClass('open')) {
            if($(this).find('h2').hasClass('open')) {
                $(this).find('h2').removeClass('open');
                $(this).removeClass('open');
            } else {
                $(this).find('h2').addClass('open');
                $(this).addClass('open');
            }
        }
    });
    $('#ListAllOptions .toggle, .alternateHeader .toggle').on('click', function(e){
        e.stopPropagation();
        $(this).parent('section').toggleClass('open');
		var hideableHeight = $(this).siblings('.hideable').height();
		var sectionID = $(this).parents('section').prop('id');
		if(hideableHeight > 600 && $('.toggle').hasClass('open')) {
			if(!$(this).siblings('.hideable').find('.hideable-close-button').length) {
				$(this).siblings('.hideable').append('<a href="#'+sectionID+'" class="hideable-close-button">close</a>');
			}
		}
    });

});

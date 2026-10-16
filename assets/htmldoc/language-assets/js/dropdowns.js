/* ==========================================================================
   Dropdowns
   ========================================================================== */
$(function(){
    // Handle main dropdown title click event
    $(".select-container > li > .dropdownmenutitle, .select-container2 > li > .dropdownmenutitle").on('click touchstart', function(e) {
        //console.log(".select-container > li > .dropdownmenutitle, .select-container2 > li > .dropdownmenutitle triggered");
        
        var menu = $(this);
        
        e.preventDefault();

        // Remove the search form if it exists
        removeHeaderSearchForm();
        removeSearchForm();

        // Remove hover class from all dropdowns except the current one
        //$(".dropdownmenutitle").not(menu).parents('.dropdownmenu').removeClass("hover");
        //console.log("hover toggling1");

	    var dropdownmenuobject = $(this).parents(".dropdownmenu");
	
		// Check if this dropdown is already open
		if (dropdownmenuobject.hasClass("hover")) {
			//console.log("Closing this dropdown");
			closeDropdown(); // Close it
		} else {
			//console.log("Closing other dropdowns");
			closeDropdown(); // Close others
			//console.log("Opening this dropdown");
			dropdownmenuobject.addClass("hover"); // Open this one
			
			// Add modal-like effect for smaller screens
            if ($(window)[0].innerWidth <= 600) {
                //console.log("addModalEffect because window width is: "+$(window).width());
                addModalEffect(dropdownmenuobject);
            }
			
		}


        var elm = menu.next('.sub_menu');
        var l = menu.offset().left;
        var w = elm.outerWidth();
        //var docW = $(".container2").outerWidth();
        var docW = menu.closest(".select-container").length ? $(".page-container").outerWidth() : $(".page-container").outerWidth();

        var isEntirelyVisible = (l + w <= docW);

        // Positioning adjustments
        if (!isEntirelyVisible || l == undefined) {
            if (w > 425 && docW <= 430) {
                menu.parents(".dropdownmenu").addClass("shrink");
            }
            if(!$('.collapsed-dropdown').hasClass('hide')) {
                menu.parents(".dropdownmenu").addClass('right-edge');
                //console.log("remove edge");
                menu.parents(".dropdownmenu").removeClass('edge');
            } else {
                menu.parents(".dropdownmenu").addClass('edge');
                //console.log("remove right-edge");
                menu.parents(".dropdownmenu").removeClass('right-edge');
            }
        } else {
            //console.log("remove edge4");
            menu.parents(".dropdownmenu").removeClass('edge');
            //console.log("remove right-edge4");
            menu.parents(".dropdownmenu").removeClass('right-edge');
        }

		$(".lastitem .sub_menu .sub_menu").slideDown(1);
		$(".lastitem .sub_menu .dropdownmenutitle").addClass("active");

    });

    // Handle sub-menu dropdown title click event
    $(".sub_menu_dropdownmenutitle").on('click', function(e) {
        e.preventDefault();
        //console.log("sub_menu_dropdownmenutitle triggered");
        var menu = $(this);
        var subSubMenu = menu.next(".sub_sub_menu");
        var icon = menu.find(".toggle-icon");

        // Toggle the current sub-sub-menu
        subSubMenu.slideToggle(1);

        // Rotate the icon
        icon.toggleClass("rotate-icon");
    });

    $(".lastitem .sub_menu .dropdownmenutitle").on('click touchstart', function(e) {
        e.preventDefault();
        //console.log("lastitem sub_menu dropdownmenutitle triggered");
        var menu = $(this);
        if (menu.parents(".lastitem .dropdownmenu").length > 0) {
            //console.log("aaa");
            menu.toggleClass("active"); // Toggle active class
            menu.next(".sub_menu .sub_menu").slideToggle(200); // Slide the sub_menu
        } else {
            //console.log("bbb");
            // If another menu is clicked, close .lastitem sub_menu
            $(".lastitem .sub_menu .dropdownmenutitle").removeClass("active");
            $(".lastitem .sub_menu .sub_menu").slideUp(200);
        }
    });

    $(".lastitem").on("mouseleave", function () {
    //console.log("window width" + $(window).width());
        if ($(window)[0].innerWidth > 600) {
        	//console.log("lastitem triggered");
        	$(this).find(".sub_menu .dropdownmenutitle").removeClass("active");
        	$(this).find(".sub_menu .sub_menu").slideUp(200);
        }
    });

	function closeDropdown() {
	    //console.log("hover remove1");
		$('.dropdownmenu, .dropdownmenu > li').removeClass("hover").removeClass("edge");
		//console.log("removeModalEffect");
		removeModalEffect();
		$('.main').css('height', 'auto');
	}
	
		    // Function to remove the search form
	function removeHeaderSearchForm() {
	//console.log("initial expandedHeaderSearch");
        let expandedHeaderSearch = document.getElementById("expanded-search");
        if (expandedHeaderSearch) {
            //console.log("remove expandedHeaderSearch");
            expandedHeaderSearch.classList.add("hidden");
        }
    }
	
	    // Function to remove the search form
    function removeSearchForm() {
        //console.log("initial removeSearchForm");
        let expandedSearch = document.getElementById("sticky-expanded-search");
        if (expandedSearch) {
            //console.log("remove expandedSearch");
            expandedSearch.remove();
        }
    }
	
	// Handle behavior when window width is greater than 300px
	function setupForLargerScreens() {
		// Close hover class on dropdown menu
		$('.dropdownmenu').on('mouseleave', function () {
		    //console.log("hover remove2");
			$(this).removeClass("hover").removeClass("edge");
			$('.main').css('height', 'auto');
		});
	
		// Close hover class on dropdown menu item
		$('.dropdownmenu > li').on('mouseleave', function () {
		//console.log("hover remove3");
			$(this).removeClass("hover").removeClass("edge");
			$('.main').css('height', 'auto');
		});
	}
	
	// Clean up event handlers to avoid duplicates
	function removeEventHandlers() {
		$('.dropdownmenu').off('mouseleave touchend');
		$('.dropdownmenu > li').off('mouseleave');
	}
	
	// Main resize handler
	$(window).on('resize', function () {
		if ($(window)[0].innerWidth <= 600) {
		    //console.log("resize less than 600");
			removeEventHandlers(); // Remove hover event handlers
			closeDropdown(); // Close dropdown on resize
// 			removeSearchForm();
//         	removeHeaderSearchForm();
		} else {
		    //console.log("resize greater than 600");
			removeEventHandlers(); // Ensure no duplicate handlers
			setupForLargerScreens(); // Add hover behavior
		}
	});
	
	// Close dropdowns on scroll
    $(window).on('scroll', function () {
        closeDropdown(); // Close dropdowns on scroll
        removeSearchForm();
        removeHeaderSearchForm();
    });
	
	// Initial setup based on current window size
	if ($(window)[0].innerWidth > 600) {
		setupForLargerScreens();
	} else {
		closeDropdown();
	}
	
	    // Function to add modal-like effect
    function addModalEffect(dropdownmenuobject) {
        // Remove any existing modal overlay
        removeModalEffect();

        // Create a modal overlay div
        var overlay = $('<div class="modal-overlay"></div>');
        $('body').append(overlay);

    // Get the sub_menu element
    var subMenu = dropdownmenuobject.find('.sub_menu');
    var subMenuOffset = subMenu.offset(); // Get the position of the sub_menu
    var subMenuHeight = subMenu.outerHeight(); // Get the height of the sub_menu

    // Calculate the top position for the overlay
    var overlayTop = subMenuOffset.top; // Start just below the sub_menu

    // Position the overlay to cover the area below the sub_menu
    overlay.css({
        position: 'absolute', // Use absolute positioning to align with the document
        top: overlayTop, // Start just below the sub_menu
        left: 0,
        width: '100%',
        height: '100%', // Extend to the bottom of the viewport
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent gray
        zIndex: 1000, // Ensure it's below the dropdown menu (dropdown has z-index: 12)
        pointerEvents: 'auto' // Allow clicks on the overlay
    });

        // Close dropdown when clicking the overlay
        overlay.on('click touchstart', function (e) {
            e.stopPropagation();
            closeDropdown();
        });
    }

    // Function to remove modal effect
    function removeModalEffect() {
        $('.modal-overlay').remove();
    }
	
	
    // For mobile: navigate when clicking on sub-menu links
    $('body').on('touchstart', '.sub_menu a', function(){
        //console.log("touchstart sub_menu a triggered");
        window.location = $(this).prop('href');
    });
    
    // For mobile: Close dropdown when clicking outside
	$(document).on('click touchstart', function (e) {
		if ($(window)[0].innerWidth <= 600) {
			// Check if the click is outside the dropdownmenu or sub_menu
			if (!$(e.target).closest('.dropdownmenu, .sub_menu').length && !$(e.target).closest('#sticky-expanded-query').length) {
				closeDropdown(); // Close dropdown if the target is not inside the search input
			}
		}
	});
    
        // Prevent dropdown from closing when interacting with it
    $('.dropdownmenu, .sub_menu').on('click touchstart', function (e) {
        e.stopPropagation(); // Stop the event from propagating to the document
    });
    
    
const stickyToggle = document.getElementById("sticky-search-toggle");

if (stickyToggle) {
    stickyToggle.addEventListener("click", function () {
        let expandedSearch = document.getElementById("sticky-expanded-search");

        closeDropdown();

        if (expandedSearch) {
            expandedSearch.remove();
        } else {
            let header = document.querySelector("header.stickyheader");
            let expandedSearchDiv = document.createElement("div");
            expandedSearchDiv.className = "sticky-expanded-search";
            expandedSearchDiv.id = "sticky-expanded-search";

            expandedSearchDiv.innerHTML = `
                <form class="sticky-expanded-search-form" method="get" action="/search/" id="sticky-expanded-search-form">
                    <input type="text" name="query" placeholder="Search Documentation" id="sticky-expanded-query">
                    <button type="button" id="sticky-close-search">
                        <svg width="12" height="12"><use href="#_search-x"></use><title>Close</title></svg>
                    </button>
                </form>
            `;

            header.appendChild(expandedSearchDiv);

            const searchInput = document.getElementById("sticky-expanded-query");
            if (searchInput) {
                searchInput.focus({ preventScroll: true });
            }

            const closeButton = document.getElementById("sticky-close-search");
            if (closeButton) {
                closeButton.addEventListener("click", function () {
                    expandedSearchDiv.remove();
                });
            }
        }
    });
}


function setupMagnifyingGlass() {
    const magnifyingGlassHeader = document.getElementById("magnifying-glass");
    const expandedSearchHeader = document.getElementById("expanded-search");
    const closeButtonHeader = document.getElementById("close-search");

    //console.log("magnifyingGlassHeader:", magnifyingGlassHeader);
    //console.log("expandedSearchHeader:", expandedSearchHeader);
    //console.log("closeButtonHeader:", closeButtonHeader);

    // Toggle the search form visibility
    if (magnifyingGlassHeader) {
        magnifyingGlassHeader.addEventListener("click", function (event) {
            closeDropdown();
            event.stopPropagation(); // Prevent the click from propagating to the document
            expandedSearchHeader.classList.toggle("hidden"); // Toggle the 'hidden' class
            
            // Focus on the input field if the search form is visible
            if (!expandedSearchHeader.classList.contains("hidden")) {
                const searchInput = expandedSearchHeader.querySelector("#expanded-query");
                if (searchInput) {
                    searchInput.focus(); // Set focus on the input field
                }
            }
        });
    }

    // Close the search form when clicking the close button
    if (closeButtonHeader) {
        closeButtonHeader.addEventListener("click", function () {
            expandedSearchHeader.classList.add("hidden"); // Ensure the form is hidden
        });
    }

    // Close the search form when clicking outside of it
    document.addEventListener("click", function (event) {
        if (
            expandedSearchHeader &&
            !expandedSearchHeader.contains(event.target) &&
            !magnifyingGlassHeader.contains(event.target)
        ) {
            expandedSearchHeader.classList.add("hidden");
        }
    });
  }

  setupMagnifyingGlass();

function adjustSubMenuHeight() {
    // Select only the first-level .sub_menu elements
    const subMenus = document.querySelectorAll('.select-container > li.dropdownmenu > .sub_menu, .select-container2 > li.dropdownmenu > .sub_menu');

    subMenus.forEach(subMenu => {
        // Get the bounding rectangle of the sub_menu
        const rect = subMenu.getBoundingClientRect();

        // Calculate the available height below the sub_menu
        const availableHeight = window.innerHeight - rect.top - 50; // Subtract 50px for padding

        // Set the max-height of the sub_menu to the calculated value
        subMenu.style.maxHeight = `${availableHeight}px`;
    });
}

// Call the function on page load and resize
window.addEventListener('load', adjustSubMenuHeight);
window.addEventListener('resize', adjustSubMenuHeight);

// Optionally, call the function when a dropdown is opened
$(".select-container > li > .dropdownmenutitle, .select-container2 > li > .dropdownmenutitle").on('click touchstart', function () {
    adjustSubMenuHeight();
});


});
		function getElementWidth(element) {
			// Clone the element
			if (!element) return 0;
			const clone = element.cloneNode(true);
			document.body.appendChild(clone);
		
			// Apply necessary styles to avoid affecting layout
			clone.style.display = 'block';
			clone.style.position = 'absolute';
			clone.style.visibility = 'hidden';
			clone.style.height = 'auto';
			clone.style.width = 'auto';
		
			// Measure the cloned element's width
			const width = clone.offsetWidth;
		
			// Remove the cloned element from the document
			document.body.removeChild(clone);
		
			return width;
		}
    
        function adjustLayout() {
			const viewportWidth = window.innerWidth - 25;
			const container = document.getElementById('container2');
			const selectContainer = document.getElementById('select-container');
			const selectMenus = selectContainer ? selectContainer.querySelectorAll(':scope > li > .dropdownmenutitle') : [];
			const titleContainer = document.getElementById('title-container');
			const title = document.getElementById('title');
			const inputContainer = document.getElementById('input-container');
			const stickysearchContent = document.getElementById('search-content');
			const stickysearchToggle = document.getElementById('sticky-search-toggle');
			const input = inputContainer ? inputContainer.querySelector('#sticky-query') : null;
			const lastselect = document.getElementById('lastselect');
		
			const containerWidth = container ? container.clientWidth - 25 : 0;
			const maxInputWidth = 325;
			const minInputWidth = 200;
		
			const titleWidth = getElementWidth(title);
			const lastselectWidth = lastselect ? getElementWidth(lastselect) + 20 : 20;
		
			let remainingWidth = viewportWidth - titleWidth - lastselectWidth;
		
			let removemenus = 0;
			let lastmenushowing = 0;
		
			for (let i = 0; i < selectMenus.length; i++) {
				const menu = selectMenus[i];
				const selectWidth = getElementWidth(menu) + 40;
		
				if ((remainingWidth - minInputWidth - lastselectWidth >= selectWidth) && !removemenus && !lastmenushowing) {
					menu.style.display = 'block';
					remainingWidth -= selectWidth;
					if (i === selectMenus.length - 2) {
						lastmenushowing = 1;
					}
				} else {
					removemenus = 1;
					if (i === selectMenus.length - 1 && !lastmenushowing) {
						remainingWidth -= selectWidth;
						menu.style.display = 'block';
					} else {
						menu.style.display = 'none';
					}
				}
			}
		
			let inputWidth = Math.max(minInputWidth, Math.min(maxInputWidth, remainingWidth));
		
			if (inputWidth <= remainingWidth) {
				$('body').removeClass('remove-main-search-magnifying-glass');
				if (inputContainer) {
					inputContainer.style.display = 'block';
					inputContainer.style.width = `${inputWidth}px`;
				}
				if (stickysearchContent) stickysearchContent.style.display = 'block';
				if (stickysearchToggle) stickysearchToggle.style.display = 'none';
				if (input) input.style.width = `100%`;
				remainingWidth -= inputWidth;
		
				const subMenu = document.querySelector('.lastitem .sub_menu');
				const searchItem = document.querySelector('#searchForm');
				if (searchItem && subMenu) {
					subMenu.removeChild(searchItem);
				}
			} else {
				if (inputContainer) {
					inputContainer.style.width = '';
					inputContainer.style.display = 'block';
					inputContainer.style.width = `20px`;
				}
				if (selectMenus.length === 0 || (selectMenus[0] && selectMenus[0].style.display === 'none')) {
					$('body').addClass('remove-main-search-magnifying-glass');
					if (stickysearchContent) stickysearchContent.style.display = 'none';
					if (stickysearchToggle) stickysearchToggle.style.display = 'block';
				}
			}
		
			if (titleContainer) {
				if (viewportWidth >= remainingWidth) {
					const titleContainerWidth = remainingWidth + titleWidth;
					titleContainer.style.width = `${titleContainerWidth}px`;
				} else if (titleContainer.style.width) {
					titleContainer.style.removeProperty('width');
				}
			}
		}


        window.addEventListener('resize', adjustLayout);
        document.addEventListener('DOMContentLoaded', adjustLayout);
        
        
        function adjustLayout2() {
            const viewportWidth2 = window.innerWidth;
            const container2 = document.querySelector('.main-heading-wrapper');
            if (!container2) return;
            const selectContainer2 = document.getElementById('select-container2');
            const selectMenus2 = selectContainer2 ? selectContainer2.querySelectorAll(':scope > li > .dropdownmenutitle') : [];
            
            const titleContainer2 = document.querySelector('.main-heading-wrapper .badge');
            const title2 = document.querySelector('.main-heading-wrapper .badge');
            const lastselect2 = document.querySelector('.main-heading-wrapper .lastitem > a');
            //console.log('START CODE');

            //console.log("viewportWidth2: "+viewportWidth2);
            const container2Width = container2.clientWidth;
            //console.log("container2Width: "+container2Width);
            const maxInputWidth2 = 325;
            const minInputWidth2 = 60;
              

            const titleWidth2 = getElementWidth(title2);
            //console.log("titleWidth2: "+titleWidth2);
            
            //console.log('how many select2 menus: ' +selectMenus2.length);

            menus=0;
            selectMenus2.forEach(select => {menus = menus+1;});

            // First, measure the title's width
            const lastselectWidth2 = lastselect2 ? getElementWidth(lastselect2) + 20 : 20;
            //console.log("lastselectWidth: "+lastselectWidth2);

			let remainingWidth2 = viewportWidth2 - titleWidth2 - lastselectWidth2;
		
		    //console.log("remainingWidth2 after starting with viewportWidth2("+viewportWidth2+") - titleWidth2("+titleWidth2+") - 20: "+remainingWidth2);
		
			// Add select menus starting from the first one until everything fits
			removemenus2 = 0;
			lastmenushowing2 = 0;
			for (let i = 0; i <= selectMenus2.length-1; i++) {
				const selectWidth2 = getElementWidth(selectMenus2[i])+40;
		
		        //console.log("value of removemenus2 : "+removemenus2);
		        //console.log("width of menu2 "+i+" :"+selectWidth2);
		
				if ((remainingWidth2-minInputWidth2-lastselectWidth2 >= selectWidth2) && (removemenus2 == 0) && (lastmenushowing2 == 0)) {
					selectMenus2[i].style.display = 'block'; // Show the select menu
					remainingWidth2 -= selectWidth2;
					if(i == selectMenus2.length-2){
						lastmenushowing2 = 1;
					}
					//console.log("remainingWidth2 after adding menus "+i+" :"+remainingWidth2);
				} else {
				    removemenus2 = 1;
				    if(i == selectMenus2.length-1 && lastmenushowing2 == 0){
				    //console.log("not removing menu2 "+i);
				    remainingWidth2 -= selectWidth2;
				    selectMenus2[i].style.display = 'block'; // show the select menu
					} else {
				    //console.log("removing menu2 "+i+" because the remaining width is: "+remainingWidth2);
					selectMenus2[i].style.display = 'none'; // Hide the select menu
					
					}
				}
			}
            
            //console.log("Line 130 remainingWidth: "+remainingWidth2);

            let inputWidth2 = Math.max(minInputWidth2, Math.min(maxInputWidth2, remainingWidth2));
            if(inputWidth2 <= remainingWidth2){
            	//console.log("inputWidth2: "+inputWidth2);
            	remainingWidth2 -= inputWidth2;
            	const subMenu2 = document.querySelector('.main-heading-wrapper .lastitem .sub_menu');
            } else {
                if(selectMenus2[0].style.display == 'none'){
                //console.log("Line 152: inputWidth2: "+remainingWidth2);
                const subMenu2 = document.querySelector('.main-heading-wrapper .lastitem .sub_menu');                
                }
            }


                    //console.log('END CODE');
        }
        

        window.addEventListener('resize', adjustLayout2);
        document.addEventListener('DOMContentLoaded', adjustLayout2);

function updateDropdowns() {
    // Hide all dropdown items initially
    document.querySelectorAll('.select-container .lastitem li.dropdownmenu').forEach(function(li) {
        li.style.display = 'none';
    });

    // Iterate through each dropdown menu
    document.querySelectorAll('.select-container > li.dropdownmenu').forEach(function(menu) {
        const menuTitle = menu.querySelector('.dropdownmenutitle');
        const menuClass = menu.classList[1]; // Assuming the second class is the unique class like dropdownitem-1

        if (menuTitle.style.display == 'none') {
            // Show the corresponding UL if the title is visible
            const correspondingUl = document.querySelector(`.select-container .lastitem li.${menuClass}`);
            if (correspondingUl) {
                correspondingUl.style.display = 'block';
            }
        }
    });
}

// Run on page load
document.addEventListener("DOMContentLoaded", updateDropdowns);

// Run on window resize
window.addEventListener("resize", updateDropdowns);


function updateDropdowns2() {
    // Hide all dropdown items initially
    document.querySelectorAll('.select-container2 .lastitem li.dropdownmenu').forEach(function(li) {
        li.style.display = 'none';
    });

    // Iterate through each dropdown menu
    document.querySelectorAll('.select-container2 > li.dropdownmenu').forEach(function(menu) {
        const menuTitle = menu.querySelector('.dropdownmenutitle');
        const menuClass = menu.classList[1]; // Assuming the second class is the unique class like dropdownitem-1

        if (menuTitle.style.display == 'none') {
            // Show the corresponding UL if the title is visible
            const correspondingUl = document.querySelector(`.select-container2 .lastitem li.${menuClass}`);
            if (correspondingUl) {
                correspondingUl.style.display = 'block';
            }
        }
    });
}

// Run on page load
document.addEventListener("DOMContentLoaded", updateDropdowns2);

// Run on window resize
window.addEventListener("resize", updateDropdowns2);

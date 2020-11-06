function returnNewDiv(tab, image, header, text, active) {
    return `
    <div class="our-work__content-card ${active} tab-1 ${tab}">
        <div class="our-work__flip-card">
            <div class="our-work__content-item ${image}">
            </div>
            <div class="our-work_content-back_side">
                <div class="back_side__icons">
                    <a href="#" class="back_side__link-button back_side-link">
                        <img src="./img/icons/icon_link.png" alt="back_side-link">
                    </a>
                    <a href="#" class="back_side__search-button back_side-link">
                        <img src="./img/icons/icon_search.png" alt="back_side-link">
                    </a>
                </div>
                <h4 class="back_side__header-text green-text uppercase weight-bold">${header}</h4>
                <h6 class="back_side__content-text">${text}</h6>
            </div>      
        </div>
    </div>
    `
}



document.querySelector("button.our-work__button_load-more").onclick = function(e) {
    let contentLength = [...document.querySelectorAll('.our-work__content-card')];
        numOfCards = contentLength.length,
        card = [ {
        tab: "tab-4",
        image:  "our-work__item-image13",
        header:  "create a site",
        text: "Landing Pages",
        active: classActiveFourthTab()
    }, {
        tab: "tab-4",
        image:  "our-work__item-image14",
        header:  "create a site",
        text: "Landing Pages",
        active: classActiveFourthTab()
    }, {
        tab: "tab-5",
        image:  "our-work__item-image15",
        header:  "intresting information",
        text: "Wordpress",
        active: classActiveFifthTab()
    }, {
        tab: "tab-5",
        image:  "our-work__item-image16",
        header:  "intresting information",
        text: "Wordpress",
        active: classActiveFifthTab()
    }, {
        tab: "tab-3",
        image:  "our-work__item-image17",
        header:  "creative design",
        text: "Web Design",
        active: classActiveThirdTab()
    }, {
        tab: "tab-3",
        image:  "our-work__item-image18",
        header:  "creative design",
        text: "Web Design",
        active: classActiveThirdTab()
    }, {
        tab: "tab-2",
        image:  "our-work__item-image19",
        header:  "creative content",
        text: "Graphic Content",
        active: classActiveSecondTab()
    }, {
        tab: "tab-2",
        image:  "our-work__item-image20",
        header:  "creative content",
        text: "Graphic Content",
        active: classActiveSecondTab()
    }, {
        tab: "tab-4",
        image:  "our-work__item-image21",
        header:  "create a site",
        text: "Landing Pages",
        active: classActiveFourthTab()
    }, {
        tab: "tab-4",
        image:  "our-work__item-image22",
        header:  "create a site",
        text: "Landing Pages",
        active: classActiveFourthTab()
    }, {
        tab: "tab-2",
        image:  "our-work__item-image23",
        header:  "creative content",
        text: "Graphic Content",
        active: classActiveSecondTab()
    }, {
        tab: "tab-2",
        image:  "our-work__item-image24",
        header:  "creative content",
        text: "Graphic Content",
        active: classActiveSecondTab()
    }, 
    {
        tab: "tab-4",
        image:  "our-work__item-image13",
        header:  "create a site",
        text: "Landing Pages",
        active: classActiveFourthTab()
    }, {
        tab: "tab-4",
        image:  "our-work__item-image14",
        header:  "create a site",
        text: "Landing Pages",
        active: classActiveFourthTab()
    }, {
        tab: "tab-5",
        image:  "our-work__item-image15",
        header:  "intresting information",
        text: "Wordpress",
        active: classActiveFifthTab()
    }, {
        tab: "tab-5",
        image:  "our-work__item-image16",
        header:  "intresting information",
        text: "Wordpress",
        active: classActiveFifthTab()
    }, {
        tab: "tab-3",
        image:  "our-work__item-image25",
        header:  "creative design",
        text: "Web Design",
        active: classActiveThirdTab()
    }, {
        tab: "tab-3",
        image:  "our-work__item-image26",
        header:  "creative design",
        text: "Web Design",
        active: classActiveThirdTab()
    }, {
        tab: "tab-3",
        image:  "our-work__item-image18",
        header:  "creative design",
        text: "Web Design",
        active: classActiveThirdTab()
    }, {
        tab: "tab-2",
        image:  "our-work__item-image20",
        header:  "creative content",
        text: "Graphic Content",
        active: classActiveSecondTab()
    }, {
        tab: "tab-4",
        image:  "our-work__item-image21",
        header:  "create a site",
        text: "Landing Pages",
        active: classActiveFourthTab()
    }, {
        tab: "tab-3",
        image:  "our-work__item-image18",
        header:  "creative design",
        text: "Web Design",
        active: classActiveThirdTab()
    }, {
        tab: "tab-5",
        image:  "our-work__item-image15",
        header:  "intresting information",
        text: "Wordpress",
        active: classActiveFifthTab()
    }, {
        tab: "tab-2",
        image:  "our-work__item-image24",
        header:  "creative content",
        text: "Graphic Content",
        active: classActiveSecondTab()
    }, ]
        
    if (numOfCards < 13) {
        for (let i = 0; i < contentLength.length; i++) {

            document.querySelector("div.our-work__content").innerHTML += returnNewDiv(card[i].tab, card[i].image, card[i].header, card[i].text, card[i].active);
        }
    } else if (numOfCards > 12 && numOfCards < 25) {
        for (let i = 12; i < contentLength.length; i++) {

            document.querySelector("div.our-work__content").innerHTML += returnNewDiv(card[i].tab, card[i].image, card[i].header, card[i].text, card[i].active);
        }
        let button = document.querySelector("button.our-work__button_load-more");
        button.style.display = "none";
    } else {}
    tab(document.querySelectorAll('.our-work__nav-item'), document.querySelectorAll('.our-work__content-card'));
}

function classActiveFirstTab() {
    let arr = [...document.querySelectorAll('.our-work__nav-item')],
    tab1 = arr[0];
    if (tab1.className === 'our-work__nav-item is-active' ){
        return "is-active"
    }
}
function classActiveSecondTab() {
    let arr = [...document.querySelectorAll('.our-work__nav-item')],
    tab2 = arr[1];
    if (tab2.className === 'our-work__nav-item is-active' ){
        return "is-active"
    } else {
        return classActiveFirstTab();
    }
}
function classActiveThirdTab() {
    let arr = [...document.querySelectorAll('.our-work__nav-item')],
    tab3 = arr[2];
    if (tab3.className === 'our-work__nav-item is-active' ){
        return "is-active"
    } else {
        return classActiveFirstTab();
    }
}
function classActiveFourthTab() {
    let arr = [...document.querySelectorAll('.our-work__nav-item')],
    tab4 = arr[3];
    if (tab4.className === 'our-work__nav-item is-active' ){
        return "is-active"
    } else {
        return classActiveFirstTab()
    }
}
function classActiveFifthTab() {
    let arr = [...document.querySelectorAll('.our-work__nav-item')],
    tab5 = arr[4];
    if (tab5.className === 'our-work__nav-item is-active' ){
        return "is-active"
    } else {
        return classActiveFirstTab()
    }
}



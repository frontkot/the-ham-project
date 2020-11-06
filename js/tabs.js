const ourServicesItem = document.querySelectorAll('.our-services__item'),
    ourServicesHidden = document.querySelectorAll('.our-services__hidden'),
    ourWorkNavItem = document.querySelectorAll('.our-work__nav-item'),
    ourWorkContentCard = document.querySelectorAll('.our-work__content-card');
    sliderPhotoChoise = document.querySelectorAll('.slider-photo__choise'),
    sliderItem = document.querySelectorAll('.slider-item');



let tab = function (tabNav, tabContent) {
    let tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};


tab(ourServicesItem, ourServicesHidden);
tab(ourWorkNavItem, ourWorkContentCard);
tab(sliderPhotoChoise, sliderItem);



document.querySelector('button.people-say__button-right').onclick = function(e) {
    let arr = [...document.querySelectorAll('.slider-photo__choise')],
        tab1 = arr[0],
        tab2 = arr[1],
        tab3 = arr[2],
        tab4 = arr[3],
        photo1 = document.querySelector('.slider-photo__choise.slider-photo1'),
        photo2 = document.querySelector('.slider-photo__choise.slider-photo2'),
        photo3 = document.querySelector('.slider-photo__choise.slider-photo3'),
        photo4 = document.querySelector('.slider-photo__choise.slider-photo4'),
        photoItem1 = document.querySelector('.slider-item.slider-item1'),
        photoItem2 = document.querySelector('.slider-item.slider-item2'),
        photoItem3 = document.querySelector('.slider-item.slider-item3'),
        photoItem4 = document.querySelector('.slider-item.slider-item4');


    if (tab1.className === 'slider-photo__choise slider-photo1 is-active'){
        photo1.classList.remove('is-active');
        photo2.classList.add('is-active');
        photoItem1.classList.remove('is-active');
        photoItem2.classList.add('is-active');
    } else if (tab2.className === 'slider-photo__choise slider-photo2 is-active') {
        photo2.classList.remove('is-active');
        photo3.classList.add('is-active');
        photoItem2.classList.remove('is-active');
        photoItem3.classList.add('is-active');
    } else if (tab3.className === 'slider-photo__choise slider-photo3 is-active') {
        photo3.classList.remove('is-active');
        photo4.classList.add('is-active');
        photoItem3.classList.remove('is-active');
        photoItem4.classList.add('is-active');
    } else if (tab4.className === 'slider-photo__choise slider-photo4 is-active') {
        photo4.classList.remove('is-active');
        photo1.classList.add('is-active');
        photoItem4.classList.remove('is-active');
        photoItem1.classList.add('is-active');
    } else {
        alert('something went wrong, call front-end developer and say him - "Please, edit your code =)"') 
    }
}




document.querySelector('button.people-say__button-left').onclick = function(e) {
    let arr = [...document.querySelectorAll('.slider-photo__choise')],
        tab1 = arr[0],
        tab2 = arr[1],
        tab3 = arr[2],
        tab4 = arr[3],
        photo1 = document.querySelector('.slider-photo__choise.slider-photo1'),
        photo2 = document.querySelector('.slider-photo__choise.slider-photo2'),
        photo3 = document.querySelector('.slider-photo__choise.slider-photo3'),
        photo4 = document.querySelector('.slider-photo__choise.slider-photo4'),
        photoItem1 = document.querySelector('.slider-item.slider-item1'),
        photoItem2 = document.querySelector('.slider-item.slider-item2'),
        photoItem3 = document.querySelector('.slider-item.slider-item3'),
        photoItem4 = document.querySelector('.slider-item.slider-item4');

    if (tab1.className === 'slider-photo__choise slider-photo1 is-active'){
        photo1.classList.remove('is-active');
        photo4.classList.add('is-active');
        photoItem1.classList.remove('is-active');
        photoItem4.classList.add('is-active');
    } else if (tab2.className === 'slider-photo__choise slider-photo2 is-active') {
        photo2.classList.remove('is-active');
        photo1.classList.add('is-active');
        photoItem2.classList.remove('is-active');
        photoItem1.classList.add('is-active');
    } else if (tab3.className === 'slider-photo__choise slider-photo3 is-active') {
        photo3.classList.remove('is-active');
        photo2.classList.add('is-active');
        photoItem3.classList.remove('is-active');
        photoItem2.classList.add('is-active');
    } else if (tab4.className === 'slider-photo__choise slider-photo4 is-active') {
        photo4.classList.remove('is-active');
        photo3.classList.add('is-active');
        photoItem4.classList.remove('is-active');
        photoItem3.classList.add('is-active');
    } else {
        alert('something went wrong, call front-end developer and say him - "Please, edit your code =)"') 
    }
}
const bergerBox = document.querySelector('.berger-box i');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const closeSidebarIcon = document.querySelector('.close-sidebar');
const sidebarMenuItemsContent = document.querySelectorAll('.sidebar-menu-item-content');
const allSubMenuContent = document.querySelectorAll('.sub-menu-content')
const subMenuActiveItems = document.querySelectorAll('.sub-menu-content.active')
const fillterBtns = document.querySelectorAll('.popular-courses-filter-button');
const coursesBox = document.querySelectorAll('.popular-courses-card');
const loaderOverlay = document.querySelector('.loader-overlay')


let myPromise;



// CLOSE SIDEBAR FUNCTION
const closeSidebar = (e) => {
    sidebar.classList.remove('show')
    document.body.style.overflow = 'visible'
}

// OPEN SIDEBAR FUNCTION
const showSidebar = (e) => {
    sidebar.classList.add('show')
    document.body.style.overflow = 'hidden'
}




//  CLEAR DELAY OF ITEMS
const clearDelay = (items) => {
    for (let item of items) {
        item.style = ''
    }
}

// SHOW ITEMS
const showItems = (items, removedClass) => {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove(removedClass)
        items[i].style = `transition-delay : 0.${i + 1}s`
    }
    setTimeout(() => {
        clearDelay(items)
    }, 500);
}

// HIDE ITEMS
const hideItems = (items, addedClass) => {
    for (let i = 0; i < items.length; i++) {
        addedClass ? items[i].classList.add(addedClass) : items[i].classList.add('hide')
        items[i].style = `transition-delay : 0.${i + 1}s`
    }

    myPromise = new Promise(resolve => {
        setTimeout(() => {
            clearDelay(items)
            resolve()
        }, 1000);
    });
}

// HIDE SIDEBAR AND SHOW SUBMENU
const hideSidebarShowSubmenu = (e) => {
    const subMenu = e.currentTarget.nextElementSibling
    const subMenuContent = subMenu.querySelectorAll('li div');

    hideItems(sidebarMenuItemsContent, 'hide')

    myPromise.then(() => {
        subMenu.classList.add('show')
        showItems(subMenuContent, 'hide')

    })
}


// SHOW SIDEBAR AND HIDE SUBMENU
const showSidebarHideSubmenu = (e) => {
    const subMenu = e.currentTarget.parentNode.parentNode
    const currentSubMenuItems = subMenu.querySelectorAll('li .sub-menu-content')

    hideItems(currentSubMenuItems, '')

    myPromise.then(() => {
        subMenu.classList.remove('show')
        showItems(sidebarMenuItemsContent, 'hide')
    })

}


// FUNCTION FOR FILLTER THE COURESES BOX
const fillterBoxes = (e) => {
    // REMOVE ACTIVE CLASS FORM PREV BUTTON
    document.querySelector('.popular-courses-filter-button.active').classList.remove('active')
    // GIVE ACTIVE CLASS TO CLICKED ELEMENT
    e.target.classList.add('active')

    // FILLTER THE BOXES 
    coursesBox.forEach((box) => {
        box.classList.add('hide')
        if (box.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all') {
            box.classList.remove('hide')
        }
    })
}

// ADD HIDE CLASS TO LOADER TO NOT SHOW THE LOADER WHEN PAGE LOADED
window.addEventListener('load', () => loaderOverlay.classList.add('hide'))

// EVENT FOR OPEN THE SIDEBAR
bergerBox.addEventListener('click', showSidebar)

// EVENT FOR CLOSE SIDEBAR 
closeSidebarIcon.addEventListener('click', closeSidebar)
sidebarOverlay.addEventListener('click', closeSidebar)

// EVENT WHENE USER CLICK ON THE SIDEBAR ITEM
sidebarMenuItemsContent.forEach((menuItemContent, index) => {
    index !== 5 && menuItemContent.addEventListener('click', hideSidebarShowSubmenu)
});

// EVENT WHENE USER CLICK ON THE ACTIVE SUBMENU 
subMenuActiveItems.forEach(menuActiveItem =>
    menuActiveItem.addEventListener('click', showSidebarHideSubmenu)
);

// EVENT FOR FILLTER THE COURESES BOX
fillterBtns.forEach((button) =>
    button.addEventListener('click', fillterBoxes)
)
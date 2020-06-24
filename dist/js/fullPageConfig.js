const fp = new fullpage('#fullpage', {
    // autoScrolling: false,
    scrollHorizontally: true,
    bigSectionsDestination: 'top',
    menu: '#menu',
    anchors: ['about', 'academics', 'skills', 'projects', 'highlights'],
    scrollOverflow: true,
    scrollOverflowReset: true,
});


// Additional
$(".navbar-toggler").click(function () {
    const icon = document.getElementById("icon");
    icon.style.transform = icon.style.transform === 'rotate(180deg)' ? '' : 'rotate(180deg)';
})
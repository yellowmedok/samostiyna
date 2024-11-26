document.addEventListener("DOMContentLoaded", function() {
    let sidebarLinks = document.querySelectorAll('.sidebar a');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.classList.add('highlight');
        });

        link.addEventListener('mouseout', function() {
            link.classList.remove('highlight');
        });
    });
});
console.log(typeof jQuery);
console.log('JavaScript підключено правильно!');

link.addEventListener('mouseover', function() {
    console.log(`Hovered on ${link.textContent}`);
});




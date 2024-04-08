document.addEventListener('DOMContentLoaded', function() {
    const parentList = document.getElementById('parentList');

    parentList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('list-title')) {
            const subList = target.nextElementSibling;
            subList.classList.toggle('hidden');
        }
    });
});

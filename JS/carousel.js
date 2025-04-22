document.addEventListener('DOMContentLoaded', function () {
    const portfolio = document.getElementById('portfolio-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const numProjectsToShow = 3;
    const projectItems = Array.from(portfolio.children);

    function updatePortfolio() {
        const startPosition = -currentIndex * (100 / numProjectsToShow);
        portfolio.style.transform = `translateX(${startPosition}%)`;
    }

    function showNextProjects() {
        if (currentIndex < projectItems.length - numProjectsToShow) {
            currentIndex++;
            updatePortfolio();
        }
    }

    function showPrevProjects() {
        if (currentIndex > 0) {
            currentIndex--;
            updatePortfolio();
        }
    }

    nextBtn.addEventListener('click', showNextProjects);
    prevBtn.addEventListener('click', showPrevProjects);
});
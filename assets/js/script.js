// Slide Presentation Controller
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideCounter = document.getElementById('slideCounter');
    const progressFill = document.getElementById('progressFill');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    if (!slides.length) return;

    // Update slide display
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev');
            if (i < index) slide.classList.add('prev');
            if (i === index) slide.classList.add('active');
        });
        
        if (slideCounter) slideCounter.textContent = `${index + 1} / ${totalSlides}`;
        if (progressFill) progressFill.style.width = `${((index + 1) / totalSlides) * 100}%`;
        
        // Update button states
        if (prevBtn) prevBtn.style.opacity = index === 0 ? '0.3' : '1';
        if (nextBtn) nextBtn.style.opacity = index === totalSlides - 1 ? '0.3' : '1';
    }

    // Navigation functions
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowRight':
            case ' ':
            case 'Enter':
                if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                    e.preventDefault();
                    nextSlide();
                }
                break;
            case 'ArrowLeft':
            case 'Backspace':
                if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                    e.preventDefault();
                    prevSlide();
                }
                break;
            case 'Home':
                e.preventDefault();
                currentSlide = 0;
                showSlide(currentSlide);
                break;
            case 'End':
                e.preventDefault();
                currentSlide = totalSlides - 1;
                showSlide(currentSlide);
                break;
        }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) nextSlide();
            else prevSlide();
        }
    }

    // Initialize
    showSlide(currentSlide);
});

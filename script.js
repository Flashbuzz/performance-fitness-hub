// Performance Fitness Hub - Performance Tracking Features
document.addEventListener('DOMContentLoaded', function() {
    console.log('Performance Fitness Hub performance platform loaded');
    
    // Enhanced button interactions
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isPrimary = this.classList.contains('cta-primary');
            
            if (isPrimary) {
                alert('Welcome to your performance journey! Complete our fitness assessment and we\'ll create a personalized training plan optimized for your goals.');
            } else {
                alert('Explore our data-driven training programs designed to maximize your performance gains through scientific methodology and real-time tracking.');
            }
        });
    });
    
    // Program buttons
    const programButtons = document.querySelectorAll('.program-btn');
    programButtons.forEach(button => {
        button.addEventListener('click', function() {
            const programCard = this.closest('.program-card');
            const programName = programCard.querySelector('h3').textContent;
            
            alert(`Interested in ${programName}? Our performance specialists will contact you within 24 hours to discuss how this program can optimize your training results.`);
        });
    });
    
    // Smooth scrolling navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Performance metrics animation
    const metricCards = document.querySelectorAll('.metric-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    metricCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    console.log('Performance tracking features initialized');
});
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle active class on question
            const isActive = question.classList.contains('active');
            
            // Close all questions first
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.style.display = 'none';
            });
            
            // If the clicked question wasn't active, open it
            if (!isActive) {
                question.classList.add('active');
                question.nextElementSibling.style.display = 'block';
            }
        });
    });
});
// /assets/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Product Page Tabs Functionality ---
    const tabsContainer = document.querySelector('.tabs');
    if (tabsContainer) {
        const tabButtons = tabsContainer.querySelectorAll('.tab-button');
        const tabContents = tabsContainer.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.dataset.tab;

                // Update buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Update content
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === tabId) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }

    // --- FAQ Accordion Functionality ---
    const faqContainer = document.querySelector('.faq-item');
    if (faqContainer) {
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const questionIsActive = question.classList.contains('active');
                
                // Close all other questions
                faqQuestions.forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = null;
                    q.style.setProperty('--after-content', "'+'");
                });
                
                // Open the clicked question if it was not already open
                if (!questionIsActive) {
                    question.classList.add('active');
                    question.style.setProperty('--after-content', "'-'");
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            });
        });
    }
});
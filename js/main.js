// Load components dynamically
async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}`);
    }
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (error) {
    console.error('Error loading component:', error);
  }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Load components
  loadComponent('tips-section', 'components/tips.html');
  loadComponent('getting-started-section', 'components/getting-started.html');
  loadComponent('project-ideas-section', 'components/project-ideas.html');
  loadComponent('timeline-section', 'components/timeline.html');
  loadComponent('faqs', 'components/faqs.html');

  // Mobile menu functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      const icon = mobileMenuButton.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }
});
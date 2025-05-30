// Function to load HTML components
async function loadComponent(filepath, containerId) {
    try {
        const response = await fetch(filepath);
        if (!response.ok) {
            throw new Error(`Error loading component: ${response.statusText}`);
        }
        const html = await response.text();
        
        // Create a temporary container
        const temp = document.createElement('div');
        temp.innerHTML = html;
        
        // Extract content from between <body> tags
        const bodyContent = temp.querySelector('body');
        if (bodyContent) {
            document.getElementById(containerId).innerHTML = bodyContent.innerHTML;
        } else {
            document.getElementById(containerId).innerHTML = html;
        }
    } catch (error) {
        console.error(`Failed to load component: ${error}`);
    }
}

// Load header and footer when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('/components/header.html', 'header-container');
    loadComponent('/components/footer.html', 'footer-container');
});

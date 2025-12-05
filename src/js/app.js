// Mostrar información dinámica en la página
document.addEventListener('DOMContentLoaded', function() {
    // Timestamp de la última actualización
    const now = new Date();
    const timestampElement = document.getElementById('timestamp');
    timestampElement.textContent = now.toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    // Información de GitHub (si está disponible)
    // En un caso real, esto podría venir de variables de entorno del CI/CD
    const repo = window.location.hostname.includes('github.io') ? 
        window.location.pathname.split('/')[1] : 'mi-sitio-devops';
    
    document.getElementById('repo').textContent = repo;
    document.getElementById('branch').textContent = 'main';
    document.getElementById('commit').textContent = '#' + Math.random().toString(36).substr(2, 7);
    
    // Efecto especial para las cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Actualizar el paso activo cada 3 segundos (solo demo)
    const steps = document.querySelectorAll('.step');
    let activeIndex = 2; // Empezamos en el paso 3
    
    setInterval(() => {
        // Reset todos los steps
        steps.forEach(step => {
            step.classList.remove('active');
        });
        
        // Marcar como completados los anteriores
        for (let i = 0; i < activeIndex; i++) {
            if (steps[i]) {
                steps[i].classList.add('completed');
            }
        }
        
        // Marcar actual como activo
        if (steps[activeIndex]) {
            steps[activeIndex].classList.add('active');
        }
        
        // Mover al siguiente paso (circular)
        activeIndex = (activeIndex + 1) % steps.length;
    }, 3000);
});
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const acordeon = trigger.parentElement;
        // Adiciona/Remove a classe open da section.acordeon.
        acordeon.classList.toggle('open');
        // Selecion o próximo elemento irmão, o mais próximo.
        const content = trigger.nextElementSibling; 
        if (content.style.maxHeight) {
            // Alterna a visibilidade do content
            content.style.maxHeight = null;
        } else {
            // Define o maxHeight para a altura real do content para a animação.
            content.style.maxHeight = content.scrollHeight + "px";
            }
        })
    })
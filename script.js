document.addEventListener('DOMContentLoaded', () => {
    const btnMaria = document.getElementById('btn-maria');
    const panel1 = document.getElementById('panel1');
    const panel2 = document.getElementById('panel2');
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const envelope = document.getElementById('envelope');
    const delayedContent = document.getElementById('delayed-content');
    const btnRed = document.getElementById('btn-red');
    const cotillaText = document.getElementById('cotilla-text');

    btnMaria.addEventListener('click', () => {
        panel1.classList.remove('active');
        panel1.classList.add('hidden');
        
        setTimeout(() => {
            panel2.classList.remove('hidden');
            panel2.classList.add('active');
            
            // Show delayed content after 2 seconds
            setTimeout(() => {
                delayedContent.classList.add('show');
            }, 2000);
            
        }, 1000);
    });

    envelopeWrapper.addEventListener('click', () => {
        envelope.classList.add('open');
    });

    btnRed.addEventListener('click', () => {
        cotillaText.classList.add('show');
    });
});

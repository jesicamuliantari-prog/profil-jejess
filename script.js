document.addEventListener('DOMContentLoaded', () => {
    const greetingBtn = document.getElementById('greetingBtn');
    const avatarImg = document.getElementById('avatarImg');

    // Make the avatar wink when clicked
    avatarImg.addEventListener('click', () => {
        const originalSrc = avatarImg.src;
        // Ganti avatar jadi senyum lebar (happy eyes) kalau diklik
        avatarImg.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=JesicaCute&backgroundColor=ffdfbf&clothing=blazerAndShirt&top=longHairStraight&eyes=happy&mouth=smile";
        
        avatarImg.style.transform = "scale(1.1)";
        
        setTimeout(() => {
            avatarImg.src = originalSrc;
            avatarImg.style.transform = "";
        }, 1500);
    });

    // Animate button click and show a cute alert
    greetingBtn.addEventListener('click', () => {
        createConfetti();
        
        setTimeout(() => {
            alert("Annyeonghaseyo! 👋 Terima kasih sudah mengunjungi profil Jesica! Semoga harimu menyenangkan! ✨🎶");
        }, 500);
    });

    // Simple confetti effect
    function createConfetti() {
        const colors = ['#f48fb1', '#ce93d8', '#ffe082', '#90caf9', '#ba68c8'];
        
        for (let i = 0; i < 60; i++) {
            const confetti = document.createElement('div');
            
            // Random properties
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100 + 'vw';
            const size = Math.random() * 8 + 6 + 'px';
            const duration = Math.random() * 2 + 1.5 + 's';
            
            // Set styles
            Object.assign(confetti.style, {
                position: 'fixed',
                left: left,
                top: '-20px',
                width: size,
                height: size,
                backgroundColor: color,
                borderRadius: Math.random() > 0.5 ? '50%' : '2px', // Gabungan bulat & kotak
                zIndex: '9999',
                pointerEvents: 'none',
                animation: `fall ${duration} cubic-bezier(.37,0,.63,1) forwards`
            });
            
            document.body.appendChild(confetti);
            
            // Cleanup
            setTimeout(() => {
                confetti.remove();
            }, parseFloat(duration) * 1000);
        }
    }
});

// Menambahkan keyframes untuk animasi confetti via JS
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    0% {
        transform: translateY(-20px) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(110vh) rotate(720deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

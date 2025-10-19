document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            } });
        },{
            threshold:0.2
        });
        const hiddenElements=document.querySelectorAll('.hidden');hiddenElements.forEach((el)=>observer.observe(el));
                if (entry.target.id === 'kontak') {
                    const video = entry.target.querySelector('video');
                    if (video) {
                        video.play().catch(error => {
                            console.log("Autoplay video dicegah: ", error);
                        });
                    }
                
      }
    }, {
        threshold: 0.2 
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    const kontakSection = document.getElementById('kontak');
    
    hiddenElements.forEach((el) => observer.observe(el));
    if(kontakSection) {
        observer.observe(kontakSection);
    }
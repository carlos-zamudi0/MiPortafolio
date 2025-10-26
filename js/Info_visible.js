    const secciones = document.querySelectorAll("section, header");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    secciones.forEach(sec => observer.observe(sec));
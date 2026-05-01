  document.querySelectorAll(".seat").forEach(seat => {
    seat.addEventListener("click", () => {
      seat.classList.toggle("selected");
    });
  });

// shows
// seating layout






const seats = document.querySelectorAll('.seat:not(.booked)');
    const tooltip = document.getElementById('tooltip');

    seats.forEach(seat => {
      seat.addEventListener('mouseenter', (e) => {
        const category = seat.getAttribute('data-category');
        const price = seat.getAttribute('data-price');
        tooltip.innerText = `${category} - ${price}`;
        tooltip.style.display = 'block';
        tooltip.style.left = e.pageX + 'px';
        tooltip.style.top = e.pageY - 40 + 'px';
      });

      seat.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.pageX + 'px';
        tooltip.style.top = e.pageY - 40 + 'px';
      });

      seat.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
      });

      seat.addEventListener('click', () => {
        alert(`You selected a ${seat.getAttribute('data-category')} seat for ${seat.getAttribute('data-price')}`);
      });
    });


 // Filtering logic
  const filterButtons = document.querySelectorAll('[data-filter]');
  const showItems = document.querySelectorAll('.show-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Highlight active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Show/hide items
      showItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  // shows end

// speak
   let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-slide");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    // Auto-slide every 5s
    setInterval(nextSlide, 5000);






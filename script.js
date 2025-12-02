// FFF Postal Service - Background Animation with User Scroll

document.addEventListener('DOMContentLoaded', function() {
    // Background images from FFF_3D_Image_pages folder
    const images = [
        'FFF_3D_Image_pages/page-1.jpg',
        'FFF_3D_Image_pages/page-2.jpg',
        'FFF_3D_Image_pages/page-3.jpg',
        'FFF_3D_Image_pages/page-4.jpg',
        'FFF_3D_Image_pages/page-5.jpg',
        'FFF_3D_Image_pages/page-6.jpg',
        'FFF_3D_Image_pages/page-7.jpg'
    ];

    const backgroundScroll = document.getElementById('backgroundScroll');

    // Create image elements and duplicate for seamless loop
    function createImageElements() {
        // Add images twice for seamless looping
        const allImages = [...images, ...images];

        allImages.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Background ${(index % images.length) + 1}`;
            img.loading = index < images.length ? 'eager' : 'lazy';
            backgroundScroll.appendChild(img);
        });
    }

    createImageElements();

    // Animation variables
    let autoScrollPosition = 0;
    let userScrollOffset = 0;
    const speed = 1.5; // 1.5x speed as requested
    const baseSpeed = 0.5; // Base pixels per frame
    const actualSpeed = baseSpeed * speed;
    let totalHeight = 0;
    let singleSetHeight = 0;
    let animationId = null;

    // Calculate heights after images load
    function calculateHeights() {
        const imgs = backgroundScroll.querySelectorAll('img');
        let loadedCount = 0;

        imgs.forEach((img, index) => {
            if (img.complete) {
                loadedCount++;
                if (loadedCount === imgs.length) {
                    setHeights();
                }
            } else {
                img.onload = function() {
                    loadedCount++;
                    if (loadedCount === imgs.length) {
                        setHeights();
                    }
                };
            }
        });
    }

    function setHeights() {
        totalHeight = backgroundScroll.scrollHeight;
        singleSetHeight = totalHeight / 2;

        // Set body height to allow scrolling through all images
        document.body.style.height = singleSetHeight + 'px';

        startAnimation();
    }

    // Smooth scrolling animation combined with user scroll
    function animate() {
        autoScrollPosition += actualSpeed;

        // Reset auto position for seamless loop
        if (autoScrollPosition >= singleSetHeight) {
            autoScrollPosition = 0;
        }

        // Combine auto scroll with user scroll
        let combinedPosition = (autoScrollPosition + userScrollOffset) % singleSetHeight;

        backgroundScroll.style.transform = `translateY(-${combinedPosition}px)`;
        animationId = requestAnimationFrame(animate);
    }

    function startAnimation() {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        animate();
    }

    // Listen for user scroll
    window.addEventListener('scroll', function() {
        userScrollOffset = window.scrollY;
    });

    // Handle wheel for smoother scroll feel
    window.addEventListener('wheel', function(e) {
        // Allow natural scrolling behavior
    }, { passive: true });

    calculateHeights();

    // Handle logo error
    const logo = document.getElementById('logo');
    if (logo) {
        logo.onerror = function() {
            console.log('Logo not found. Make sure filled_in_logo_transparent_compressed.png exists.');
        };
    }
});

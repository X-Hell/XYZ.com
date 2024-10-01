
// Get all required elements
const productList = document.querySelector('.product-list');
const productName = document.getElementById('product-name');
const productVideo = document.getElementById('product-video');
const productImage = document.getElementById('product-image');
const productDescription = document.getElementById('product-description');

const productImage1 = document.getElementById('image1');
const productImage2 = document.getElementById('image2');
const productImage3 = document.getElementById('image3');

const productVideo1 = document.getElementById('video1');
const productVideo2 = document.getElementById('video2');
const productVideo3 = document.getElementById('video3');

// Function to update product details
const updateProductDetails = (name, videoSrc, description, imageSrc, img1Src, img2Src, img3Src, video1Src, video2Src, video3Src) => {
    productName.textContent = name;
    productDescription.textContent = description;

    // Check if there is a video source, if not, show the image
    if (videoSrc) {
        productVideo.querySelector('source').src = videoSrc;
        productVideo.style.display = 'block';
        productVideo.style.width = '100%'; // Full width for CNC Machine
        productImage.style.display = 'none'; // Hide image if video is available
        productVideo.load(); // Reload the video so the new source plays
        productVideo.play();
    } else {
        productVideo.style.display = 'none'; // Hide video if no video source
        productImage.src = imageSrc; // Set image source

        // Apply specific styles for image centering for C/Z Roll Forming and PTW Machine
        productImage.style.display = 'block'; // Show the image
        productImage.style.maxWidth = '50%'; // Center image with 50% width
        productImage.style.margin = '0 auto'; // Center the image horizontally
    }

    productImage1.src = img1Src;
    productImage1.style.display = 'block'; // Make the image visible
    productImage1.style.maxWidth = '100%';
    productImage1.style.margin = '0 auto';

    productImage2.src = img2Src;
    productImage2.style.display = 'block'; // Make the image visible
    productImage2.style.maxWidth = '100%';
    productImage2.style.margin = '0 auto';

    productImage3.src = img3Src;
    productImage3.style.display = 'block'; // Make the image visible
    productImage3.style.maxWidth = '100%';
    productImage3.style.margin = '0 auto';

    productVideo1.querySelector('source').src = video1Src;
    productVideo1.style.display = 'block'; // Make the video visible
    productVideo1.style.width = '100%'; // Full width for CNC Machine
    productVideo1.load(); // Reload the video so the new source plays
    productVideo1.play();

    productVideo2.querySelector('source').src = video2Src;
    productVideo2.style.display = 'block'; // Make the video visible
    productVideo2.style.width = '100%'; // Full width for CNC Machine
    productVideo2.load(); // Reload the video so the new source plays
    productVideo2.play();

    productVideo3.querySelector('source').src = video3Src;
    productVideo3.style.display = 'block'; // Make the video visible
    productVideo3.style.width = '100%'; // Full width for CNC Machine
    productVideo3.load(); // Reload the video so the new source plays
    productVideo3.play();
};

// Set default product details (CNC Machine) on page load
window.addEventListener('load', () => {
    updateProductDetails(
        "CNC MACHINE",
        "assets/images/cnc-machine.mp4",
        "The MAXPRO200 plasma cutting system offers fast cut speeds, consistent quality, and long consumable life using air or oxygen plasma. Designed for heavy-duty cutting and gouging, it maximizes productivity with automatic settings and tool-free transitions. It reduces costs with lower energy usage and longer consumable life. With easy operation, reliability, and low maintenance, it outperforms oxyfuel systems in speed and cost-efficiency.",
        "",
        "assets/images/m-image1.JPG",
        "assets/images/m-image2.JPG",
        "assets/images/m-image3.JPG",
        "assets/images/m-video1.MP4",
        "assets/images/m-video2.MP4",
        "assets/images/m-video3.MP4"
    );
});



// Event listener for product list items
productList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        // Get machine data attributes from clicked list item
        const productVideoSrc = e.target.dataset.video;
        const productNameText = e.target.dataset.name;
        const productDescriptionText = e.target.dataset.description;
        const productImageSrc = e.target.dataset.image;

        const productImage1Src = e.target.dataset.img1;
        const productImage2Src = e.target.dataset.img2;
        const productImage3Src = e.target.dataset.img3;

        const productVideo1Src = e.target.dataset.vid1;
        const productVideo2Src = e.target.dataset.vid2;
        const productVideo3Src = e.target.dataset.vid3;

        // Update the details of the selected machine
        updateProductDetails(productNameText, productVideoSrc, productDescriptionText, productImageSrc, productImage1Src, productImage2Src, productImage3Src, productVideo1Src, productVideo2Src, productVideo3Src);
    }
});



// Select all video elements
const videos = document.querySelectorAll('.media-video');

// Add event listeners for hover
videos.forEach(video => {
    // Play video when mouse enters (hover starts)
    video.addEventListener('mouseenter', () => {
        video.play();
        video.scroll();
    });

    // Pause video when mouse leaves (hover ends)
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Optional: Reset to the beginning
    });
});




const projectListItems = document.querySelectorAll('.product-list li');

// Set the first item as active by default
projectListItems[0].classList.add('active');

projectListItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Remove the .active class from all items
    projectListItems.forEach((otherItem) => {
      otherItem.classList.remove('active');
    });
    // Add the .active class to the newly clicked item
    item.classList.add('active');
  });
});
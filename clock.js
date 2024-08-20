window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
});


//

// 


//document.addEventListener('DOMContentLoaded', () => {
     const menTab = document.getElementById('men-tab');
     const womenTab = document.getElementById('women-tab');
     const menWatches = document.getElementById('men-watches');
     const womenWatches = document.getElementById('women-watches');
     const menButton = document.getElementById('men-button');
     const womenButton = document.getElementById('women-button');

     menTab.addEventListener('click', () => {
        
         menTab.classList.add('active');
         womenTab.classList.remove('active');

        
         menWatches.classList.add('active');
         womenWatches.classList.remove('active');
         menButton.classList.add('active')
         womenButton.classList.remove('active');
     });

     womenTab.addEventListener('click', () => {
        
         womenTab.classList.add('active');
         menTab.classList.remove('active');

        
         womenWatches.classList.add('active');
         menWatches.classList.remove('active');
        menButton.classList.remove('active')
         womenButton.classList.add('active');
     })



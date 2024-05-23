/*- - - - - - - botão Pesquisar -----------*/



function searchBooks(event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  var searchTerm = document.getElementById('search-box').value.toLowerCase();
  var bookContainers = document.getElementsByClassName('swiper box');
  var searchResults = document.getElementById('search-results');
  searchResults.innerHTML = ''; // Limpa os resultados anteriores antes de cada nova pesquisa

  for (var i = 0; i < bookContainers.length; i++) {
    var bookTitle = bookContainers[i].querySelector('.content h3').textContent.toLowerCase();

    if (bookTitle.includes(searchTerm)) {
      var searchResult = document.createElement('div');
      searchResult.className = 'search-result';

      var bookImage = document.createElement('img');
      bookImage.src = bookContainers[i].querySelector('.image img').src;
      bookImage.alt = bookTitle;
      bookImage.classList.add('book-image');
      searchResult.appendChild(bookImage);

      var bookTitleElement = document.createElement('h3');
      bookTitleElement.textContent = bookTitle;
      searchResult.appendChild(bookTitleElement);

      searchResult.setAttribute('data-link', bookContainers[i].getAttribute('href'));
      searchResults.appendChild(searchResult);
    } else {
      bookContainers[i].style.display = 'none';
    }
  }

  var searchResultElements = document.getElementsByClassName('search-result');
  for (var j = 0; j < searchResultElements.length; j++) {
    searchResultElements[j].addEventListener('click', redirectToLink);
  }
}

function redirectToLink(event) {
  var link = event.currentTarget.getAttribute('data-link');
  window.location.href = link;
}

searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}




window.onscroll = () =>{

    searchform.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');

    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');

    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
 
}



/*-------- Slides ---------- */

var swiper = new Swiper(".books-list", {
   
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

/*-------- início da secção em destaque ---------- */

var swiper = new Swiper(".featured-slider", {
   
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      450:{
        slidesPerView: 2,   
      },
      768: {
        slidesPerView: 3, 
      },
      1024: {
        slidesPerView: 4, 
      },
    },
  });


  /*-------- início da secção de chegadas ---------- */

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

  
  /*-------- início da secção de revisões ---------- */

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

   /*-------- início da secção do blogue ---------- */

   var swiper = new Swiper(".blog-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

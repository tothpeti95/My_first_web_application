let image1 = {
  photo: 'images/image1.jpg',
  title: 'This is my number 1 Title',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
};

let image2 = {
  photo: 'images/image2.jpg',
  title: 'This is my number 2 Title',
  description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
};

let image3 = {
  photo: 'images/image3.jpg',
  title: 'This is my number 3 Title',
  description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
};

let image4 = {
  photo: 'images/image4.jpg',
  title: 'This is my number 4 Title',
  description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
};

let image5 = {
  photo: 'images/image5.jpg',
  title: 'This is my number 5 Title',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
};

let image6 = {
  photo: 'images/image6.webp',
  title: 'This is my number 6 Title',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
};

let image7 = {
  photo: 'images/image7.jpg',
  title: 'This is my number 7 Title',
  description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.'
};

let image8 = {
  photo: 'images/image8.jpg',
  title: 'This is my number 8 Title',
  description: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. '
};

let currentPhoto = 0;
let imagesData = [image1 ,image2, image3, image4, image5, image6, image7, image8];


let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);
  $('.photo-title').text(imagesData[photoNumber].title);
  $('#photo-description').text(imagesData[photoNumber].description);
}

loadPhoto(currentPhoto);

$('#rigth-arrow').click(() => {
  if (currentPhoto < imagesData.length-1) { 
  currentPhoto++;
  } else if (currentPhoto ===imagesData.length-1) {
    currentPhoto = 0;
  }
  loadPhoto(currentPhoto);
})

$('#left-arrow').click(() => {
  if (currentPhoto >= 1) { 
    currentPhoto--;
  } else if (currentPhoto === 0) {
    currentPhoto = imagesData.length-1;
  }
  loadPhoto(currentPhoto);
})

imagesData.forEach((item, index) =>{
  $(".thumbnail-container").append(`<div class="box"><p class="hiddenTitle">${imagesData[index].title}</p><img src="${imagesData[index].photo}" data-index="${index}" class="pictures"></div>`);
  $('.box').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    let numberIndex = parseInt(indexClicked);

    $("#photo").attr('src', imagesData[numberIndex].photo);
    $('.photo-title').text(imagesData[numberIndex].title);
    $('#photo-description').text(imagesData[numberIndex].description);
    currentPhoto = numberIndex;
  });
})

let activeThumbnail = document.querySelectorAll('.box');

activeThumbnail.forEach(aThumb => {
  aThumb.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active');
    aThumb.classList.add('active');
  });
})

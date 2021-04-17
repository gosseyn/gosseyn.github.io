

 // Active la gallerie Image
    // Attache un EventListener a chaque image
// Et répond de façon appropriée au click

function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo  img");
    //Mise à jour des infos :
    let galleryInfo = document.querySelector("#gallery-info");
    let title = document.querySelector(".title");
    let description = document.querySelector(".description");

    
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function(){
	    // déclare l'image clickée  image principale
	    let newImageSrc = thumbnail.dataset.largeVersion;
	    mainImage.setAttribute("src", newImageSrc);
	    mainImage.setAttribute("alt", thumbnail.dataset.title)

	    // met à jour le statut "current"
	      let currentClass = "current"
	    document.querySelector("." + currentClass).classList.remove(currentClass);
	    thumbnail.parentNode.classList.add(currentClass);

	    // Met a jour les infos de l'image centrale :
	    title.innerHTML = thumbnail.dataset.title;
	    description.innerHTML = thumbnail.dataset.description;
	    
	});
    });
}

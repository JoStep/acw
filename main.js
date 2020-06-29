const pic1 = `<img src="photos/adeolu-eletu-ohh8ROaQSJg-unsplash.gif" class="photo" alt="Interior and Exterior Window Cleaning">`;
const pic2 = `<img src="photos/IMG_6465.gif" class="photo" alt="Residential Window Cleaning">`;
const pic3 = `<img src="photos/gyorgy-bakos-MznGSDZXbhg-unsplash.gif" class="photo" alt="Commercial Window Cleaning">`;
const pic4 = `<img src="photos/IMG_1089.gif" class="photo" alt="Screen cleaning">`;
const pic5 = `<img src="photos/IMG_6312.gif" class="photo" alt="High Window Cleaning">`;

function chgPhoto() {
    const gallery = document.getElementById("gallery")
    let media;
    const service = document.getElementById(`${this.id}`)
    switch (this.id) {
        case 'intExt':
            media = pic1;
            break;
        case 'res':
            media = pic2;
            break;
        case 'commercial':
            media = pic3;
            break;
        case 'screens':
            media = pic4;
            break;
        case 'highWin':
            media = pic5;
    }
    service.classList.add('playing')
    gallery.innerHTML = media 
}

function removeTransition() {
    this.classList.remove('playing');
}


const service = document.querySelectorAll(`#services h5`);
service.forEach(service => service.addEventListener('mousedown', chgPhoto))

const serviceRmvTrans = document.querySelectorAll(`#services h5`);
serviceRmvTrans.forEach(service => service.addEventListener('mouseup', removeTransition))



let i = 0
function scrollPhoto() {
    const gallery = document.getElementById("gallery")
    let picArr = [pic1, pic2, pic3, pic4, pic5]
    gallery.innerHTML = picArr[i] 
    console.log(i)
    if (i <= 3) {
        i++;
    } else {
        i = 0
    }
}

setInterval(scrollPhoto, 6000) 
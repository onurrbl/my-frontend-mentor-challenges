toggleModalBtns= document.querySelectorAll('.toggle-modal');
modal = document.querySelector('.def-modal');
modalCloseBtn= document.querySelector('.close_button');
menuCheckbox = document.getElementById('menu_checkbox');
hburgerMenuModal = document.querySelector('.hburger-menu-modal');
prListModal= document.querySelector('.pr-list-modal');
modalRadioBtns= document.querySelectorAll('input[name=modal_radio]')
boxes = document.querySelectorAll('.box');
bkmarkCtn = document.querySelector('.bkmark-ctn');
gradientModal = document.querySelector('.gradient-modal');
continueBtns = document.querySelectorAll('.continBtn');
feedBackModal = document.querySelector('.fb-modal');
closeFbBtn = document.querySelector('.close-fb-btn');
icnBkmark = document.querySelector('.icn-bkmark');
// const mediaQuery = window.matchMedia('(min-width: 768px)')

let isModalOn= false;



toggleModalBtns.forEach(button => {
    button.addEventListener('click', toggleModal );
});

modalCloseBtn.addEventListener('click',toggleModal)


menuCheckbox.addEventListener('change', (e) => {
        hburgerMenuModal.classList.toggle('d-none');
        gradientModal.classList.toggle('d-none')
    });


bkmarkCtn.addEventListener('click', function anon() {
    this.children[0].classList.toggle('icn-bkmark_bmed');
    this.children[1].classList.toggle('bkmark-btn_bmed')
});
// modalRadioBtns.forEach(radio => (radio.addEventListener('change',growBoxes)) );

continueBtns.forEach(btn => {btn.addEventListener('click', backProjectFeedBack)});

function backProjectFeedBack() {
    prListModal.classList.toggle('d-none');
    feedBackModal.classList.toggle('d-none');
}

closeFbBtn.addEventListener('click', () => {
    feedBackModal.classList.toggle('d-none');
    modal.classList.toggle('d-none');
})

icnBkmark.style.fill = '#00000'

boxes.forEach(box => {box.addEventListener('click',listenBoxes)})

function listenBoxes(e) {
    this.children[0].children[0].children[0].checked = true;

    boxes.forEach(box=> {
        // Checking the element's radio input for animation
        if(box.children[0].children[0].children[0].checked){
            box.children[1].classList.remove('d-none');
            box.classList.add('box-bot-border');
        }else{
            if (box.children[1].classList.contains('d-none')) {
                
            }else{
                box.children[1].classList.add('d-none')
                box.classList.remove('box-bot-border');
            }
        }

    });
}

// function growBoxes() {
//     boxes.forEach(box=> {
//         // Checking the element's radio input for animation
//         if(box.children[0].children[0].children[0].checked){
//             box.children[1].classList.remove('d-none');
//             box.classList.add('box-bot-border');
//         }else{
//             if (box.children[1].classList.contains('d-none')) {
                
//             }else{
//                 box.children[1].classList.add('d-none')
//                 box.classList.remove('box-bot-border');
//             }
//         }

//     });
// }



function toggleModal() {
    modal.classList.toggle('d-none')
    prListModal.classList.toggle('d-none')
}




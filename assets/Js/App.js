let flag=0
// *** ==== menubar === **** 
const header_menu_NavLinks=document.querySelector('.header_menu_NavLinks')
const Toggle=document.getElementById('Toggle')

Toggle.addEventListener('click' , ()=>{
    header_menu_NavLinks.classList.toggle('show')
})
// window.addEventListener('click' , ()=>{
//     if(!(flag % 2)){
//         header_menu_NavLinks.classList.remove('show')
//     }
// })





const Humbarger=document.getElementById('Humbarger')
const _header_menu_NavLinks_Item=document.querySelector('.header_menu_NavLinks_Item')
Humbarger.addEventListener('click' , ()=>{
    _header_menu_NavLinks_Item.classList.toggle('show')
})
// *** ====end of  menubar === **** 



const Slides=document.getElementsByClassName('slide')
let _PrevBtn=document.querySelector('.prevBtn')
let _NextBtn=document.querySelector('.nextBtn')
let count=0

function active(){
    for(i=0; i<Slides.length; i++){
        Slides[i].style.top='100%'
    }
}

function noActive(){
    for(i=0; i<Slides.length; i++){
        Slides[i].classList.remove('active')
    }
}
_NextBtn.addEventListener('click' , ()=>{
    count++
    if(count>Slides.length-1){
        count=0
    }
    active();
    noActive();
    Slides[count].top=0
    Slides[count].classList.add('active')
})

_PrevBtn.addEventListener('click' , ()=>{
    count--;
    if(count<0){
        count=Slides.length-1;
    }
    active();
    noActive();
    Slides[count].top=0
    Slides[count].classList.add('active')
})

setInterval(() => {
    count++
    if(count>Slides.length-1){
        count=0
    }
    active();
    noActive();
    Slides[count].top=0
    Slides[count].classList.add('active')
}, 3000);

// ========================**************** end of header_banner_cards =============== 
const Header=document.getElementById('header')
window.addEventListener('scroll' , ()=>{
    let _ST= window.scrollY
    if( _ST > 10 ){
        Header.classList.add('header_scroll')
    }else{
        Header.classList.remove('header_scroll')
    }
})


// ============================= #BtnGoTop ======================== 
let BtnGoTop=document.getElementById('BtnGoTop')
window.addEventListener('scroll' , ()=>{
    let _scrollTop=window.scrollY
    if(_scrollTop > 200){
        BtnGoTop.classList.add('show')
    }else{
        BtnGoTop.classList.remove('show')
    }
})
BtnGoTop.addEventListener('click' , ()=>{
    window.scrollTo
})
// =============================end  #BtnGoTop ======================== 



// <!-- ======================**** section_total_view *****==================== -->
const _count=document.querySelectorAll('.counter')
window.addEventListener('scroll' , ()=>{
    let _windowHeight=window.innerHeight
    for(i=0; i<_count.length; i++){
        let _ST=_count[i].getBoundingClientRect().top
        if(_ST < _windowHeight){
            Counter()
        }
    }
})

let num=0
function Counter(){
    setInterval(() => {
        if(num < 1900){
            _count[0].innerHTML=num++
        }
        if(num < 1869){
            _count[1].innerHTML=num++
        }
        if(num < 1890){
            _count[2].innerHTML=num++
        }
        if( num < 1700){
            _count[3].innerHTML=num++
        }
    }, 200);
}



// ================*********** .Btnplayer *************===================
const video=document.querySelector('.section_Get_quote_card>video')
const Btnplayer=document.querySelector('.Btnplayer')
Btnplayer.addEventListener('click' , ()=>{
    video.classList.add('show')
})

window.addEventListener('click' , ()=>{
    if(!(flag % 2)){
        video.classList.remove('show')
        video.getAttribute('controls')
    }
    flag++
})
// ================***********End of  .Btnplayer *************============ 

///// slider//////////////
const sliderInfoContainer = document.getElementById('sliderInfoContainer')
const slider = document.getElementById("slider");
const left= document.getElementById("left");
const right = document.getElementById("right");
let carentIndex  = [0];

const sliderData = (user) =>{
  
   let dataApi = user.data.results;
   setInterval(()=>{

    sliderRight(dataApi);

  },7000)
  right.addEventListener( "click" , () =>{
    sliderRight(dataApi);
  })
    slideLeft(dataApi)
    imgSliderCreate(dataApi[0]);
  }


function imgSliderCreate(imgSrc){

 let  elements = document.createElement('img');
      elements.className = "sliderImg"
      slider.innerHTML = "";
      elements.src = imgImg + imgSrc.poster_path ;
      slider.appendChild(elements);

let   sliderInfo = document.createElement('div')
      sliderInfoContainer .innerHTML = ""
      sliderInfo .setAttribute('class' , "sliderInfo")

let   sliderInfoTitleRate = document.createElement('div')
      sliderInfoTitleRate.setAttribute("class",' sliderInfoTitleRate')


let   pTitile = document.createElement('p')
      pTitile.innerHTML =` <p class ="title-rate"> TITLE</p>  ${imgSrc.title}  `
      sliderInfoTitleRate.appendChild(pTitile)

let   pRate = document.createElement('p')
      pRate.innerHTML = `<p class ="title-rate">RATE</p> ${imgSrc.vote_average}`
      sliderInfoTitleRate.appendChild(pRate)
      sliderInfo.appendChild(sliderInfoTitleRate)

let   slideInfoDate = document.createElement('div')
      slideInfoDate.setAttribute('class', 'slideInfoDate')

  
let   pDate = document.createElement('p')
      pDate.innerHTML = `<p class = "title-rate">DATE</p>  ${imgSrc.release_date}`

      slideInfoDate .appendChild(pDate)

      sliderInfo.appendChild(slideInfoDate )

 let overview = document.createElement('div')
     overview.setAttribute("class", "descriptionContainer")
     overview.innerHTML = `<p class = "descriptionSlider">Description</P> ${imgSrc. overview}` 
     sliderInfo.appendChild(overview)


      sliderInfoContainer.appendChild(sliderInfo )
   
}

function sliderRight(index){

  
    if (carentIndex == index.length - 1){
      carentIndex = -1
    };
    if (carentIndex < index.length -1 ){
         carentIndex ++
        imgSliderCreate(index[carentIndex])};
}

 function slideLeft(index){
  left.addEventListener('click', () =>{
    if (carentIndex !== 0){
         carentIndex --;
      imgSliderCreate(index[carentIndex])
    }
  })
 }
                                                                          //  search-bar
 
 const searchBar = document.getElementById("searchBar")
 let responseData = []
 let imgImg = 'https://image.tmdb.org/t/p/original';
 
 const  search = () =>{

  searchBar.addEventListener("keyup", (e) =>{
    const searchString =  e.target.value
    let filterCarect = responseData.filter((element) =>{
      return (element.original_title.toLowerCase().includes(searchString.toLowerCase()))
  })
  let dataTitle = filterCarect

  const boxes = document.querySelectorAll('.remove');

        boxes.forEach(box => {
             box.remove(); 
    
    });

dataTitle.forEach( element =>{
  searchFunction(element)
})
 })

  }

 search()



 const searchFunction = (index) =>{
  const navList = document.getElementById("search-bar")
  
  const div = document.createElement("div")
  div.className = 'remove'
 
  if(!searchBar.value == ""){
    navList.style.display = "block"
   div.innerHTML = `
   <div class = "search-container">
   <img  src = "${imgImg + index.poster_path}" class = "search-img">
   <div class = " sear-img-title">
   <h3 >${index.title}</h3>
   <p> ${index.release_date}</p>
   </div>
   </div>

   ` 

  navList.appendChild(div)

  }else{
    navList.style.display = "none"
  }
 }

                                                                      //  get-api


 const moveGet = ( url = "https://api.themoviedb.org/3/movie/popular?api_key=78828dca7949b70ca50313e4d49660d1&language=en-US&page=1&fbclid=IwAR0PuIxpwmBg_C7v1cSacQe37ekmHfTxzk9jpSqed1b1g-Zh_dRkKuJF0Vs") =>{

      axios.get(url)
            .then(response  =>  {
              console.log(response)
            moveImg(response)
            sliderData(response)

            })
            .catch( error  => {
            console.log(error);
            })
  
}
moveGet()

                                                                            // card-info

const containerCard = document.getElementById("card")
const imgUrl = 'https://image.tmdb.org/t/p/original';

const moveImg = (response) =>{

 responseData = response.data.results
 console.log(responseData)

responseData.forEach(element => {
  
  const containerCardSecond = document.createElement('div')
        containerCardSecond.setAttribute('class' , 'containerCardSecond')
    
        
  const cartHeaderTitle = document.createElement("div")
        cartHeaderTitle.setAttribute('class',' cartHeaderTitle')
        containerCardSecond.appendChild(cartHeaderTitle )

const opacity = document.createElement('div')
   let imgPlayIcon  = document.createElement('div')
      imgPlayIcon.className = 'imgPlayIcon '
      imgPlayIcon.innerHTML = '<i class="fa-regular fa-circle-play"></i>'
      opacity.appendChild(imgPlayIcon)
      opacity.className = 'opacity'
      cartHeaderTitle.appendChild(opacity)


  const rateContainer = document.createElement('div')
        rateContainer.setAttribute('class','rateContainer')


  let cardRate = document.createElement("p")  
      cardRate.innerHTML = element.vote_average
      rateContainer.appendChild(cardRate)
      
  let cardDate = document.createElement('p')
      cardDate.innerHTML = element.release_date
      rateContainer.appendChild(cardDate)
      cartHeaderTitle.appendChild(rateContainer)

  
  let cardImg = document.createElement('div')
      cardImg.setAttribute('class', 'cardImg ')
  let img = document.createElement('img')
      img.src = imgUrl + element.poster_path
      cardImg.appendChild(img)
    
      cartHeaderTitle .appendChild(cardImg)


  let cardTitleContainerd = document.createElement('div')
      cardTitleContainerd.setAttribute('class','cardTitleContainerd')
  let cardTitle = document.createElement("p")
      cardTitle.innerHTML = element.title
      cardTitleContainerd.appendChild(cardTitle)


    containerCardSecond .appendChild(cardTitleContainerd)
    containerCard.appendChild(containerCardSecond)

})


  }
  
                                                                              // burger-bar
const burger = document.getElementById("burger");
const navMenu = document.getElementById("ulList");
  
      burger.addEventListener('click', () => {
        burger.classList.toggle("active");
        navMenu.classList.toggle("active");
  })
                                                                                  // scrolly

document.addEventListener('scroll', function(){
    let scrol = scrollY;
    if(scrol > 100){
        let top = document.getElementById('top');
            top.style.display='block'
    }else{
         let top = document.getElementById('top');
              top.style.display='none'
    }
})
function box() {
window.scrollTo({
 top:0,
 left:0,
 behavior: "smooth"
});
  }

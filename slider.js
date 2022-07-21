let flowers=[
  { name:"Beyaz güller",
    image:"img/cs061.jpg",
    link:"https://www.ciceksepeti.net/cicek-sepeti/fanusta-beyaz-gul/"},
  {name:"Papatyalar",
  image:"img/cs068.jpg",
  link:"https://www.ciceksepeti.net/cicek-sepeti/vazoda-beyaz-papatyalar/" },
  {name:"Beyaz Orkide",
  image:"img/cs087.jpg",
  link:"https://www.ciceksepeti.com/seramik-vazoda-phalaenopsis-orkide" },
  {name:"Kır Çiçekleri Vazosu",
  image:"img/cs288.jpg",
  link:"https://www.ciceksepeti.net/cicek-sepeti/kir-cicekleri-vazosu/" }
]
var index=0
let slideCount=flowers.length
let interval;
changeSlide()

function showSlide(){
  if(index<0){
    index=slideCount-1
  } else if(index>slideCount-1){
    index=0
  }
document.querySelector(".card-title").innerHTML=flowers[index].name
document.querySelector(".card-img-top").setAttribute("src",flowers[index].image)
document.querySelector(".card-link").setAttribute("href",flowers[index].link)
}
let leftarrow=document.querySelector(".leftarrow")
let rightarrow=document.querySelector(".rightarrow")
leftarrow.addEventListener("click",()=>{
  index--
  showSlide()
})
rightarrow.addEventListener("click",()=>{
  index++
  showSlide()
})


document.querySelector(".leftarrow").addEventListener("mouseover",()=>{
  clearInterval(interval)
})
document.querySelector(".leftarrow").addEventListener("mouseleave",()=>{
  changeSlide()
})
document.querySelector(".rightarrow").addEventListener("mouseover",()=>{
  clearInterval(interval)
})
document.querySelector(".rightarrow").addEventListener("mouseleave",()=>{
  changeSlide()
})
function changeSlide(){
  interval=setInterval(function(){
    if(slideCount==index){
      index=0
    }
    showSlide()
    index++
  },1000)
  showSlide()
}
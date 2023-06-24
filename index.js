setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()


function darkMode() {
  let min=document.querySelector(".minute")
  let hour=document.querySelector(".hour")
  let body=document.querySelector("body")
  let btn=document.querySelector(".dark")
  let btntwo=document.querySelector(".white")
  if(btn.classList.contains("none")){
    btn.classList.remove("none")
    hour.style.background="black"
    min.style.background="black"
    
  }else{
    btn.classList.add("none")
    hour.style.background="white"
    min.style.background="white"
  }
  
  botomHour.classList.toggle("col")
  body.classList.toggle("bg-body")
}



let botomHour=document.querySelector('.container-for')
setInterval(()=>{
  let weekdays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let ho=new Date()
  let sd=ho.getHours()<10?"0"+ho.getHours():ho.getHours();
  let da=ho.getDay()
  let hs=ho.getMonth()
  let se=ho.getSeconds()<10?"0"+ho.getSeconds():ho.getSeconds();
  let forMin=ho.getMinutes()<10?"0"+ho.getMinutes():ho.getMinutes();
  botomHour.innerHTML=sd+": "+forMin+" : "+se
  botomHour.nextElementSibling.innerHTML= ` ${weekdays[da-1]}, ${months[hs]}, ${ho.getUTCDate()}`
},1000)

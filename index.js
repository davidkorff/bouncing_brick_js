h=400
window.onload=jump1Listener()



function jump1Listener(){
  document.addEventListener('click', jump1) }

function jump1(e){
      t=0
      a=e.which
      jump1Up()
      document.removeEventListener("click", jump1)
    }
function jump1Up(){
  t=t+1
  dodger1.style.bottom = `${getBottomPosition(dodger1) + vel()}px`
  if (getBottomPosition(dodger1)<h){
    setTimeout(jump1Up, 1)
  }
  else{jump1Down()}
}
function jump1Down(){
  t=t-1
  dodger1.style.bottom = `${getBottomPosition(dodger1)- vel()}px`
  if (getBottomPosition(dodger1)>0){
    setTimeout(jump1Down, 1)
  }
  else if(h>5) {
    h = h/3
    jump1Up()
  }
  else{
    h=400
    dodger1.style.bottom = `${0}px`
    jump1Listener()
  }
}

function vel(){
  return ((1-((getBottomPosition(dodger1)/h)**2))/9.8)+10
  //return 10-(((2*getBottomPosition(dodger1))/9.8)**.5)/h

  //return (((h -getBottomPosition(dodger1))/30)+1)
  //return(((2*getBottomPosition(dodger1))/9.8)**-0.5)
}

function getBottomPosition(object){
  return parseInt(object.style.bottom.replace('px', ''))
}

/*let inputs=document.querySelector("input");
inputs.onblur=function(){
  window.sessionStorage.setItem("input-name",this.value);
}*/

let counter=0;
let btn=document.querySelector("button");

let form=document.querySelector(".form"); 


document.querySelector("input").onblur=function(){
  
      counter++;
      window.localStorage.setItem(`input${counter}`,this.value);
  }

btn.addEventListener("click",function(){
  if(typeof(para) != 'undefined' && para != null){
  let clone=para.cloneNode(true);
  clone.value=window.localStorage.getItem(`input${counter}`);
  }
  else{
    let para=document.createElement("input");
    para.setAttribute("type","text");
    para.value=window.localStorage.getItem(`input${counter}`);
    form.after(para);
    para.style.cssText="display:block;height:20px;margin:5px;"
  }

  
})
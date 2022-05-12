var input = document.getElementById("name");
input.addEventListener("keypress",function(){
    Deleter(this.value);
})

input.addEventListener("keyup",function(){
    Deleter(this.value);
})

function Deleter(value){
    for (let i = 0; i < value.length; i++) {
      if(!isNaN(value[i])){
          input.value=value.slice(0,-1);
      }
        
    }
}










window.addEventListener('keydown',function(e){
    
   let p=e.keyCode;
   
   let audio1=document.querySelector(`audio[data-key="${p}"]`);
   let py=document.querySelector(`.keys[data-key="${p}"]`);
   console.log(py);
    if(audio1==null)
    {
        return;
    }
    else
    {    audio1.currentTime=0;
        audio1.play();
        py.classList.add("playing");
        
        setTimeout(()=>{
            py.classList.remove("playing");
        },70)
        
    }
   
})
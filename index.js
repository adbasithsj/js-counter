

const result=document.querySelectorAll(".counter")
const speed=200;

result.forEach((counter)=>{
  
    const updatecount=()=>{
        const target=+counter.getAttribute('data-target') //60000

        const value=+counter.innerText //0
        
        const div=target/200 //60000/200=300

        if(value < target){
            counter.innerHTML=div+value

            setTimeout(updatecount,10)
        }
        else{
            counter.innerText=target
        }

    }
    updatecount();
})

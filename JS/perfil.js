const subm=document.querySelectorAll(".submenu")
const enl=document.querySelectorAll(".submenu a")

enl.forEach(el => {
    el.addEventListener("focus", function(){
        subm.forEach(m=>{
            let temp = Array.from(m.children)
            if(temp.includes(el)){
                m.style.visibility="visible"
            }
        })
    })
    el.addEventListener("blur", function(){
        subm.forEach(m=>{
            let temp = Array.from(m.children)
            if(temp.includes(el)){
                m.style.visibility="hidden"
            }
        })
    })
});
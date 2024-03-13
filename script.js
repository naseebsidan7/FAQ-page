document.addEventListener("DOMContentLoaded", function(){
    const fqs = document.querySelectorAll('.faq')

fqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active")
        const icon = faq.querySelector(".faq_title img");
        icon.src = faq.classList.contains("active")? "icon-minus.svg" : "icon-plus.svg"
     
    })

})
})
let menu=document.querySelector(".menu")
let menu_btn=document.querySelector(".header_icon")
let menu_btn_icon=document.querySelector(".header_icon i")

menu_btn.addEventListener("click",function()
{
    if(menu_btn_icon.classList.contains("fa-bars"))
    {
        menu.style.left="0"
        menu_btn_icon.classList="fa fa-times"
    }
    else{
        menu.style.left="-256px"
        menu_btn_icon.classList="fa fa-bars"
    }
}
)
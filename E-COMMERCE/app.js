const wrapper = document.querySelector(".sliderWrapper");
//console.log(wrapper);
//wrapper.style.transform = "translateX(-200vw)";
const menuItems = document.querySelectorAll(".menuItem");
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //console.log("you clicked" + index);
        wrapper.style.transform = `translate(${-100* index}vw)`;
    });

});
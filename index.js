const accordionTabs = document.querySelectorAll(".accordion-tab");
const accordionItems = document.querySelectorAll(".accordion-item");
const accordionContent = document.querySelector(".accordion-content");

accordionTabs.forEach((item)=>{
  item.addEventListener("click",(event)=>{
    let accordionAtribute=item.getAttribute("data-actab-id")

    accordionTabs.forEach((item)=>{
      item.classList.remove("accordion-active");
    })
    item.classList.add("accordion-active")

    const accordionItem=accordionContent.querySelector(
      `[data-actab-id="${accordionAtribute}"]`
    )
    accordionItems.forEach((item)=>{
      item.classList.remove("accordion-active")
    });
    accordionItem.classList.add("accordion-active")
  })
})


accordionTabs.forEach((elem)=>{
  elem.addEventListener("click",()=>{
    let accordionAttribute=elem.getAttribute("data-actab-id")

    accordionTabs.forEach((elem)=>{
      elem.classList.remove("accordion-active")
    })
    elem.classList.add("accordion-active")

    const accordionItem=accordionContent.querySelector(
      `[data-actab-id="${accordionAttribute}"]`
    )
  })
})

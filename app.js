let inp=document.querySelector("input");
let ol=document.querySelector("ol");
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ol.appendChild(item);
    inp.value="";
})

ol.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON")
    {
        let listItem=event.target.parentElement;
        listItem.remove();
    }
    // console.log("button clicked");
})

// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns)
// {
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     });
// }
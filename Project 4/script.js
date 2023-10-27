let item = document.querySelector(".item");

const title = document.getElementById("title");

let content = document.getElementById("content");

let form = document.querySelector("form");

let quer = localStorage.getItem("Task")?JSON.parse(localStorage.getItem("Task")):[];

addtask();

function addele(value,index){
    const innerdiv = document.createElement("div");
    innerdiv.setAttribute("class","task");
    
    const p = document.createElement("p");
    p.innerText= value.Title;
    innerdiv.append(p);
    
    const span = document.createElement("span");
    span.innerText = value.Content;
    innerdiv.append(span);
    
    const buton = document.createElement("button");
    buton.innerText = "Delete";
    buton.setAttribute("id","delete");
    buton.addEventListener("click",()=>{
        removetask();
        quer.splice(index,1);
        localStorage.setItem("Task",JSON.stringify(quer));
        addtask();
    })
    innerdiv.append(buton);

    item.append(innerdiv);
}
function addtask (){
    quer.forEach((value,index)=>{
    addele(value,index);
})
}

let removetask = ()=>{
    quer.forEach((value,index)=>{
        const div =document.querySelector(".task");
        div.remove();
    })
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    removetask();
    
    quer.push({
        Title:title.value,
        Content:content.value
    })
    localStorage.setItem("Task",JSON.stringify(quer));
    console.log(quer);
    addtask();
})   

let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

let formData = (e) =>{
    e.preventDefault();
    let li = document.createElement("li");
    li.className = "item-list-one";
    li.style.backgroundColor = "transparent"
    li.innerText = input.value;      // innertext me input ki value pass hogi

    let button = document.createElement("button");
    button.className ="btnNew";
    button.innerText = "Delete";

    li.appendChild(button);
    ul.appendChild(li);
    form.reset();          // ese refresh krne pr automatic reset hoga
}

form.addEventListener("submit",formData);

// for Remove/delete data

let removeData = (e) => {
    
    if(e.target.className.includes("btnNew")){
        let li = e.target.parentElement;        // for target wali chij ko sirf like button to sirf button pr click krne se delete hoga
        if(window.confirm("Are You Sure ?"))    // for window msg alert
        {
            ul.removeChild(li);               // for remove
        }
    }
};

ul.addEventListener("click",removeData);

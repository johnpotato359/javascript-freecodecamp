let myLeads = [];

const inputEl = document.querySelector('input#input-el');
const inputBtn = document.querySelector('button#input-btn');
const deleteBtn = document.querySelector('button#delete-btn');
const tabBtn = document.querySelector('button#tab-btn');
const ulEl = document.getElementById("ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

inputBtn.addEventListener("click", function() {
   myLeads.push(inputEl.value);
   console.log(myLeads);

    //local storage
    //localStorage.setItem("myLeads", JSON.strigfy(myLeads));
   localStorage.setItem("myLeads", JSON.stringify(myLeads));

   console.log(localStorage.getItem("myLeads"));
   clearInput();
   render(myLeads);
});

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true},
        function(tabs){
            myLeads.push(tabs[0].url);
            localStorage.setItem("myLeads", JSON.stringify(myLeads));
            render(myLeads);
        })
});

function render(leads) {
    let listItems = "";

    for (let i = 0; i < leads.length; i++) {
        listItems += 
        `
            <li>
                <a href="${leads[i]}" target="_blank"> ${leads[i]}</a>
            </li>
        `;
    }

    ulEl.innerHTML = listItems;
}

function clearInput() {
    inputEl.value = "";
    inputEl.focus();
}
 // document.getElementById("count-el").innerText=5
 let countEl = document.getElementById("count-el")
 let count= 0

function increment(){
 count = count + 1
 countEl.innerText= count
 
}

function save(){
    let saveStr = count + "-"
    let saveEl = document.getElementById("save-el")
    saveEl.textContent += saveStr
    
    count = 0
    countEl.textContent = 0
}
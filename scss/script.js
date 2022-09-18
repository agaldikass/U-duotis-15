var container = document.querySelectorAll(".content")
var buttons = document.querySelectorAll("button")

function showTab(event, id){
    for(var x of container){
        x.style.display = "none"
        x.style.opacity = "0"
    }
    document.getElementById(id).style.display = "block"

    setTimeout(function(){
    document.getElementById(id).style.opacity = "1"
})

// buttons style
for(var x of buttons){
    x.classList.remove("selected")
}
event.currentTarget.classList.add("selected")
}
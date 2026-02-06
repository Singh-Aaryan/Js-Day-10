//function handleClick(){
//   const button = document.getElementById("yo");
//    button.textContent = "Clicked"
//}

//function handleClick(){
//    document.querySelector("h1").style.color="red"
//    const button = document.getElementById("yo")
//    button.textContent = "Color Changed"
//}


//que3
function handleClick(){
    document.createElement("h2").textContent="new sub heading"
    const image=document.createElement("img")
    image.setAttribute("src",
        "https://krmangalam.edu.in/_next/image?url=%2Fkrmuniversity.webp&w=1200&q=75")
    image.setAttribute("alt","K.R Mangalam")
    document.getElementById("content").append(subHead)
    document.getElementById("content").append(image)
}
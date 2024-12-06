
const div = document.getElementById("div").innerHTML

const mainBody = document.getElementById("main")

const h1 = document.createElement("h1")
const h2 = document.createElement("h2")
const h3 = document.createElement("h3")
const p = document.createElement("p")

h1.innerHTML = "This is a header"
h2.innerHTML = "second header"
h3.innerHTML = "Third header"
p.innerHTML = "This is a new page"


mainBody.appendChild(h1)
mainBody.appendChild(h2)
mainBody.appendChild(h3)
mainBody.appendChild(p)

h1.style.color = "yellow"
h2.style.color = "green"
h3.style.color = "blue"
p.style.color = "red"








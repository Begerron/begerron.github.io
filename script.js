const header = document.querySelector("header")
const nav = document.createElement("nav")

header.appendChild(nav)

let informacoesDosLinks = [
    {endereco: "index.html", conteudo: "Início"},
    {endereco: "contato.html", conteudo: "Contato"},
    {endereco: "projetos.html", conteudo: "Projetos"}
]

for (const item of informacoesDosLinks) {
    const linkElement = document.createElement("a")

    linkElement.href = item.endereco
    linkElement.textContent = item.conteudo

    nav.appendChild(linkElement)
    
}


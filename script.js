let total = 0;

let produtos = document.querySelectorAll(".produto11");

for(let i = 0; i < produtos.length; i++){

    produtos[i].addEventListener("click", function(){

        let quantidade = Number(prompt("Digite a quantidade"));

        if(quantidade > 0){

            let item = document.createElement("li");

            item.innerText = produtos[i].innerText + " quantidade: " + quantidade;

            document.getElementById("lista11").appendChild(item);

            total = total + quantidade;

            document.getElementById("total11").innerText ="Total: " + total;

        }

    });

}

function createTr(prod) {
  const tr = document.createElement("tr");
  const name = document.createElement("td");
  const price = document.createElement("td");
  const description = document.createElement("td");
  const tdDel = document.createElement("td");
  const tdUpdate = document.createElement("td");
  const del = document.createElement("button");
  const update = document.createElement("button");

  name.textContent = `${prod.nome}`;
  price.textContent = `R$ ${String(prod.preco.toFixed(2)).replace(".", ",")}`;
  description.textContent = `${prod.descricao}`;
  del.textContent = "Deletar";
  update.textContent = "Atualizar";

  del.className = "deletar";
  update.className = "update";

  tdDel.appendChild(del);
  tdUpdate.appendChild(update);

  del.onclick = () => delProd(prod.id);
  update.onclick = () =>
    updateProd(prod.id, prod.nome, prod.preco, prod.descricao);

  tr.appendChild(name);
  tr.appendChild(price);
  tr.appendChild(description);
  tr.appendChild(tdUpdate);
  tr.appendChild(tdDel);

  return tr;
}

function appendToDOM(prods) {
  const tbody = document.querySelector("tbody");

  prods.map((prod) => {
    tbody.appendChild(createTr(prod));
  });
}

function getProd() {
  axios
    .get("http://localhost:3000/allProd")
    .then((response) => appendToDOM(response.data))
    .catch((err) => console.log(err));
}

function delProd(id) {
  axios
    .delete("http://localhost:3000/deleteProd", {
      data: {
        id,
      },
    })
    .then((response) => window.location.reload())
    .catch((err) => console.log(err));
}

function updateProd(id, name, description, price) {}

getProd();

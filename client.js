import http from "http";
import { LinkedList } from "./linked-list.js"; // Import the LinkedList class

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log("Conectado ao servidor.");

  /* 4) Crie uma lista encadeada vazia aqui */
  const linkedList = new LinkedList();

  res.on("data", (chunk) => {
    /* 5) Utilize o método add para guardar cada chunk na lista encadeada */
    linkedList.add(chunk.toString());
    console.log(`Dado recebido: ${chunk}\n`);
  });

  res.on("end", () => {
    console.log("\nTransmissão finalizada.");

    /* 10) Utilize o método getAt para mostrar o que existe nos índices 3 e 20 */
    console.log(`Índice 3: ${linkedList.getAt(3)}`);
    console.log(`Índice 20: ${linkedList.getAt(20)}`);

    /* 11) Utilize o método getSize para mostrar o tamanho da lista encadeada */
    console.log(`Tamanho da lista: ${linkedList.getSize()}`);

    /* 12) Utilize o método search para mostrar o primeiro índice da cor "verde" */
    console.log(`Primeiro índice da cor "verde": ${linkedList.search("verde")}`);

    /* 13) Utilize o método search para mostrar o último índice da cor "verde" */
    console.log(`Último índice da cor "verde": ${linkedList.searchLast("verde")}`);

    /* 14) Utilize o método removeAt para remover o elemento de índice 2 */
    console.log(`Elemento removido no índice 2: ${linkedList.removeAt(2)}`);

    /* 15) Utilize o método pop para remover o último elemento e mostre o que foi removido */
    console.log(`Último elemento removido: ${linkedList.pop()}`);

    /* 16) Utilize o método toArray para mostrar a lista encadeada como um vetor */
    console.log(`Lista encadeada como vetor: ${linkedList.toArray()}`);
  });
});

req.on("error", (e) => {
  console.error(`Problema com a requisição: ${e.message}`);
});

req.end();

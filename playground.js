// linkedList.add(1);
// linkedList.add(2);
// linkedList.add(3);

// linkedList.pop();
// linkedList.print();

import { LinkedList } from "./linked-list/linked-list.js";

const linkedList = new LinkedList();

linkedList.add("branco");
linkedList.add("preto");
linkedList.add("roxo");
linkedList.add("verde");
linkedList.add("vermelho");

console.log("Lista após adicionar elementos:");
linkedList.print();

console.log(`Elemento no índice 3: ${linkedList.getAt(3)}`);
console.log(`Elemento no índice 20: ${linkedList.getAt(20)}`);

console.log(`Tamanho da lista: ${linkedList.getSize()}`);

console.log(`Primeiro índice da cor "verde": ${linkedList.search("verde")}`);
console.log(`Último índice da cor "verde": ${linkedList.searchLast("verde")}`);

console.log(`Elemento removido no índice 2: ${linkedList.removeAt(2)}`);
linkedList.print();

console.log(`Último elemento removido: ${linkedList.pop()}`);
linkedList.print();

console.log(`Lista como vetor: ${linkedList.toArray()}`);
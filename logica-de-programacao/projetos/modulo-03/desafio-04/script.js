class Person {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addPerson(nome, idade) {
    const newPerson = new Person(nome, idade);

    if (!this.head) { // verifica se a lista está vazia, ou seja, se não tiver algum head, o novo node se torna o head 
      this.head = newPerson;
    } else {
      let current = this.head;
      while (current.filho) {
        current = current.filho;
      }
      current.filho = newPerson;
    }
  }

  showPeople() {
    let current = this.head;
    while (current) {
      console.log(`Nome: ${current.nome}, Idade: ${current.idade}`);
      if (current.filho) {
        console.log(`Referência do Filho: ${current.filho.nome}`);
      } else {
        console.log("Sem Filho");
      }
      current = current.filho;
    }
  }
}

const peopleList = new LinkedList();

peopleList.addPerson('Isaac', 54);
peopleList.addPerson('Isaac Filho', 30)
peopleList.addPerson('Joaquim', 2);

peopleList.showPeople();


// referência https://www.freecodecamp.org/portuguese/news/como-implementar-uma-lista-vinculada-em-javascript/

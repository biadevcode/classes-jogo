// Definição da classe Heroi
class Heroi {
    // Construtor da classe com as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que exibe a mensagem conforme os requisitos
    atacar() {
      let ataque;
      
      // Define o ataque com base no tipo do herói
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque genérico";
      }
  
      // Exibe a mensagem formatada
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe
  const heroi1 = new Heroi("Aragorn", 30, "guerreiro");
  const heroi2 = new Heroi("Gandalf", 100, "mago");
  
  heroi1.atacar(); // Exemplo de saída: O guerreiro Aragorn atacou usando espada
  heroi2.atacar(); // Exemplo de saída: O mago Gandalf atacou usando magia
  
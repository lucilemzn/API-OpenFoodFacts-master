export class Contact {

  id: number;
  nomFamille: string;
  prenom: string;
  email: string;
  genre: number;
  age: number;

  constructor(id: number, nomFamille: string, prenom: string, email: string, genre: number, age: number) {

    this.id = id;
    this.nomFamille = nomFamille;
    this.prenom = prenom;
    this.email = email;
    this.genre = genre;
    this.age = age;
  }
}

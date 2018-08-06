class Bee {
  //WHAT ARE THE FORM FIELDS?
  constructor(
    name,
    gender,
    age,
    breed,
  ) {
    this.id = Math.random()
    this.name = name
    this.gender = gender
    this.age = age
  }
}

export default Bee
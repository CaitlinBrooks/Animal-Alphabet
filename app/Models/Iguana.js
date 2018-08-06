class Iguana {
  //WHAT ARE THE FORM FIELDS?
  constructor(
    name,
    gender,
    age,
    weight,
  ) {
    this.id = Math.random()
    this.name = name
    this.gender = gender
    this.age = age
    this.weight = weight
  }
}

export default Iguana
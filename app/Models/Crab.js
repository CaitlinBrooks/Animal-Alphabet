class Crab {
  //WHAT ARE THE FORM FIELDS?
  constructor(
    name,
    gender,
    age,
    type,
    weight,
  ) {
    this.id = Math.random()
    this.name = name
    this.gender = gender
    this.age = age
    this.type = type
    this.weight = weight
  }
}

export default Crab
class Elephant {
  //WHAT ARE THE FORM FIELDS?
  constructor(
    name,
    gender,
    age,
    type,
    weight,
    trunkLength,
    color,
  ) {
    this.id = Math.random()
    this.name = name
    this.gender = gender
    this.age = age
    this.type = type
    this.weight = weight
    this.trunkLength = trunkLength
    this.color = color
  }
}

export default Elephant
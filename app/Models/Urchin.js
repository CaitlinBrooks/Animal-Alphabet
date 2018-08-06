class Urchin {
  //WHAT ARE THE FORM FIELDS?
  constructor(
    name,
    gender,
    age,
    weight,
    length,
    color,
  ) {
    this.id = Math.random()
    this.name = name
    this.gender = gender
    this.age = age
    this.weight = weight
    this.length = length
    this.color = color
  }
}

export default Urchin
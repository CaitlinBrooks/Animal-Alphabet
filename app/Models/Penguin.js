class Penguin {
  //WHAT ARE THE FORM FIELDS?
  constructor(
    name,
    gender,
    age,
    weight,
    color,
  ) {
    this.id = Math.random()
    this.name = name
    this.gender = gender
    this.age = age
    this.weight = weight
    this.color = color
  }
}

export default Penguin
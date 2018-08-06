class Deer {
  //WHAT ARE THE FORM FIELDS?
  constructor(
    name,
    gender,
    age,
    type,
    weight,
    hasAntlers = false,
    leftAntlerLength = 0,
    rightAntlerLength = 0
  ) {
    this.id = Math.random()
    this.name = name
    this.gender = gender
    this.age = age
    this.type = type
    this.weight = weight
    this.antlers = {
      left: leftAntlerLength,
      right: rightAntlerLength
    };
  }
}

export default Deer
class Owl {
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


// hoot() {
//   console.log(this.name + ' is HOOTing')
// }


export default Owl
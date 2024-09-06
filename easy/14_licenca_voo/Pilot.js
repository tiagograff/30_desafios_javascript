class Pilot {
  constructor(name, surname, birthDate, flyLicense) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.flyLicense = false;
  }

  createLicense() {
    const year = this.birthDate.getFullYear().toString();
    const month = this.birthDate.getMonth().toString();

    let characterFive = this.surname;

    if (characterFive.length <= 5) {
      characterFive = characterFive.padEnd(5, "9");
    }
    characterFive = characterFive.slice(0, 5).toUpperCase();
    const charactereSix = "-";
    const charactereSeven = year[2];
    let charactereEightNine = month;
    if (month.length < 2) {
      charactereEightNine = charactereEightNine.concat("0");
    }
    const charactereTen = year[3];
    const charactereEleven = ".";
    const charactereTwelve = this.name.charAt(0).toLowerCase();

    this.flyLicense = true;

    return (
      characterFive +
      charactereSix +
      charactereSeven +
      charactereEightNine +
      charactereTen +
      charactereEleven +
      charactereTwelve
    );
  }
}

const newPilot = new Pilot("Tiago", "A", new Date(2000, 11, 27));
console.log(newPilot.createLicense());
//
const newPilot2 = new Pilot("Frank", "Ocean", new Date(1987, 7, 28));
console.log(newPilot2.createLicense());

const persons = [];

class Person {
    constructor( 
        name,
        gender
    ) {
        this.name = name;
        this.gender = gender;
        // 1. Tambahkan di constructor untuk set value gender
    }

    setName (name) {
        this.name = name;
        return this;
    }
    setGender (gender) {
        this.gender = gender;
        return this;
    }

    setTitle() {
        // 2. tambahkan argument untuk set title, jika gender L = "Tuan " apabila P = "Nyonya", maka nilai 
            // name nya menjadi contoh, 
            // name = Tuan Jhon
            if (this.gender === "L") {
                this.name = `Tuan ${this.name}`
            } else {
                this.name = `Tuan ${this.name}`
            }
    }

    static find(name) {
        // 6. tambahkan argument untuk pungsi pencarian dari array persons berdasarkan nama.
        return persons.find((person) => person.name === name);
    } 
}

// 3. buat kan 2 object person
    // 1 person laki laki
    // panggil funsi setTittle dari object person 
    // 1 person perempuan
    // panggil funsi setTittle dari object person 
let orang1 = new Person("Dewi", "P");
orang1.setTitle();
let orang2 = new Person("Dewa", "L");
orang2.setTitle();

const orang3 = new Person();
orang3.name = "Putri";
orang3.gender = "P";
orang3.setTitle();

//builder pattern
const orang4 = new Person();
orang4.setName("Putra").setGender("L").setTitle();


// 4. setiap object person nya ditambahkan ke array object persons
persons.push(orang1, orang2, orang3, orang4);


// 5. tampilkan object persons.
console.log(persons);

// 7. panggil fungsi Person.find(name) dan muncul kan object person berdasarkan nama yang di input.
console.log(Person.find("Tuan Dewa"));
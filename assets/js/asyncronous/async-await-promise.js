class Burung {
    constructor(name, warna) {
        this.name = name;
        this.warna = warna;
    }

    /**
     * Producion code
     */
    burungTerbang() {
        const burungTakTerbang = ["ayam", "bebek"];
        return new Promise((resolve, reject) => {
            if (burungTakTerbang.includes(this.name.toLowerCase())) {
                return reject(`Maaf Burang ${this.name} Tidak bisa terbang`);
            }
            // Argunment resolve nya?
            resolve(`Burung ${this.name} Sedang terbang`);
        })
    }

    async tampilkanWarna() {
        return this.warna;
    }
}

async function main() {
    // async-await
    console.log("async-await");
    const kakatua = new Burung("Kakatua", "Biru");
    const kakatuaTerbang = await kakatua.burungTerbang();
    try {
        console.log("Success : " + kakatuaTerbang);
        // Anaggap proses lainnya
        console.log("Success2 : " + await kakatua.tampilkanWarna());

    } catch (error) {
        console.error("Failed : " + error);
    }

    console.log("====================================");
}

main();
const mainPromise = () => {
    // Argument nya seperti apoa? untuk deklarasi Object Burung. contoh Ayam
    const ayam = new Burung("Elang", "Merah");
    // consuming code.
    const terbang = ayam.burungTerbang()
        .then((resolve) => {
            console.log("Success : " + resolve)
        }
        )
        .catch(reject =>
            console.error("Failed : " + reject)
        );
}

// mainPromise();


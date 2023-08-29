const penjuals = [];
const products = [];

class Product {
    constructor(id, namaProduct, stock) {
        this.id = id;
        this.namaProduct = namaProduct;
        this.stock = stock;
    }

    tambahProduct(idPenjual, product, callback) {
        const productNew = {
            ...product,
            idPenjual
        }
        setTimeout(() => {
            products.push(productNew);
            console.log("product berhasil ditambahkan");
            callback();
        }, 10)

        
        return this;
    }
}

class Penjual {
    constructor(id, name, jenisUsaha, penghasilan) {
        this.id = id;
        this.name = name;
        this.jenisUsaha = jenisUsaha;
        this.penghasilan = penghasilan;
    }

    registrasi(penjual, callback) {
        setTimeout(() => {
            penjuals.push(penjual);
            console.log("penjual berhasil registrasi");
            callback();
        }, 10)

        
        return this;
    }
}

function main() {
    const idPenjual = "1";
    const penjual = new Penjual(idPenjual, "James Alibaba", "Jual Ayam", 0);
    penjual.registrasi(penjual, () => {
        // tampilkan array penjuals
        console.log("Ini List Penjual : ");
        console.log(penjuals);
    });

    const product = new Product("1", "Ayam Fressh", 100);
    product.tambahProduct(idPenjual, product, () => {
        // tampilkan array penjuals
        console.log("Ini List Product : ");
        console.log(products);
    });
}

main();
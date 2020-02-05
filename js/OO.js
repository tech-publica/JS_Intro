let myObj = {
    coor : "red",
    length = 100,
    act: function( value) {
        console.log(vaue);
    }
};

function Impiegato(firstname, lastname) {
    this.fistname = firstname;
    this.lastname = lastname;
    this.work = function() {
        console.log("sto lavorando");
    }
}

let i1 = new Impiegato("ciccio", "pasticcio");
i1.nickname = "beppe";
// delete i1.fistname;
let i2 = new Impiegato("pippo", "pippis");

i1.work();


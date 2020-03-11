var gender = "";
var heritage = "";
var title = "";
var color = "";
var name = "";
var surname = "";

var bartanMaleNames = ["Adikar", "Arun", "Karoj", "Kirish", "Makit", "Nadit", "Parkresh", " Raghav", "Rakash"];
var bartanFemaleNames = ["Adisha", "Aswina", "Kalyika", "Kaviya", "Kita", "Rahika", "Rashi", "Riya", "Seneha", "Shimya", "Vani"];
var bartanSurnames = ["Arani", "Chabarti", "Dardhi", "Dewa", "Kapatia", "Khatri", "Pakshi", "Manabur"];

var oriteMaleTitles = ["Baronet", "Gallant", "Graf", "Landgrave", "Marquess", "Princips", "Viscount"];
var oriteFemaleTitles = ["Contessa", "Dame", "Gallant","Landgrave", "Marquessa", "Reina", "Viscount"];
var oriteMaleNames = ["Alben", "Anton", "Blas", "Cyprian", "Elrik", "Farian", "Leon", "Marilo", "Rubin", "Silvin"];
var oriteFemaleNames = ["Aurora", "Chiara", "Emetta", "Hadriana", "Katovica", "Livia", "Millia", "Severina", "Tiana", "Valeria"];
var oriteSurnames = ["Albrekt", "Garossi", "Loprio", "Martiko", "Rodano", "Sanicci", "Zardani"];

var panyarColor = ["Amber", "Azure", "Russet", "Sapphire", "Scarlet", "Silver", "Vermillion", "Violet"];
var panyarMaleNames = ["Charging", "Dancing", "Flowing", "Growing", "Raging", "Standing", "Surging"];
var panyarFemaleNames = ["Charging", "Dancing", "Flowing", "Growing", "Raging", "Standing", "Surging"];
var panyarSurnames = ["Blaze", "Ember", "Flood", "Glade", "Grove", "Reef", "Storm", "Tempest", "Tide", "Weald", "Wind"];

var zemyatiMaleNames = ["Adrimir", "Colay", "Gabridyor", "Liavel", "Maleksei", "Melislav", "Theonin", "Viltory"];
var zemyatiFemaleNames = ["Alika", "Dania", "Emilinya", "Freriya", "Isalana", "Klarina", "Sverena", "Tatinika", "Valentina", "Zaya"];
var zemyatiMaleSurnames = ["Adrimirevich", "Colayovich", "Gabridyorovich", "Liavelich", "Malekseievich", "Melislavovich", "Theoninevich", "Viltoryievich"];
var zemyatiFemaleSurnames = ["Adrimiryevna", "Colayovna", "Gabridyorichna", "Liavelovna", "Malekseievna", "Melislavna", "Theoninovna", "Viltorichna"];

function rollTitle(table) {
    var checkTableLength = table.length;
    var randomTitle = Math.floor(Math.random() * (checkTableLength - 1 + 1)) + 1;
    var rolledTitle = table[randomTitle - 1]
    title = rolledTitle
}

function rollNames(table) {
    var checkTableLength = table.length;
    var randomName = Math.floor(Math.random() * (checkTableLength - 1 + 1)) + 1;
    var rolledName = table[randomName - 1]
    name = rolledName
}

function rollSurnames(table) {
    var checkTableLength = table.length;
    var randomSurame = Math.floor(Math.random() * (checkTableLength - 1 + 1)) + 1;
    var rolledSurame = table[randomSurame - 1]
    surname = rolledSurame
}

//rollNames(bartanMaleNames);
//rollSurnames(bartanSurnames);
//console.log(name,surname)

function rollGender() {
    var randomGender = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    if (randomGender === 1) {
        gender = "male"
    } else {
        gender = "female"
    }
}

function rollHeritage() {
    var randomHeritage = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    if (randomHeritage === 1) {
        heritage = "bartan"
    } else if (randomHeritage === 2) {
        heritage = "orite"
    } else if (randomHeritage === 3) {
        heritage = "panyar"
    } else {
        heritage = "zemyati"
    }
}

$("#submit").click(function (event) {

    $("#result").remove();
    event.preventDefault();
    var checkGender = $("#gender").val();
    if (checkGender === "random") {
        rollGender();
    } else if (checkGender === "male") {
        gender = "male"
    } else {
        gender = "female"
    }
    var checkHeritage = $("#heritage").val();
    if (checkHeritage === "random") {
        rollHeritage();
    } else if (checkHeritage === "bartan") {
        heritage = "bartan"
    } else if (checkHeritage === "orite") {
        heritage = "orite"
    } else if (checkHeritage === "panyar") {
        heritage = "panyar"
    } else {
        heritage = "zemyati"
    }
    if (gender === "male" && heritage === "bartan") {
        rollNames(bartanMaleNames);
        rollSurnames(bartanSurnames);
        console.log(name, surname)
    } else if (gender === "female" && heritage === "bartan") {
        rollNames(bartanFemaleNames);
        rollSurnames(bartanSurnames);
        console.log(name, surname)
    } else if (gender === "male" && heritage === "orite") {
        rollTitle(oriteMaleTitles);
        rollNames(oriteMaleNames);
        rollSurnames(oriteSurnames);
        console.log(title, name, surname)
    } else if (gender === "female" && heritage === "orite") {
        rollTitle(oriteFemaleTitles);
        rollNames(oriteFemaleNames);
        rollSurnames(oriteSurnames);
        console.log(title, name, surname)
    } else if (gender === "male" && heritage === "panyar") {
        rollTitle(panyarColor);
        rollNames(panyarMaleNames);
        rollSurnames(panyarSurnames);
        console.log(title, name, surname)
    } else if (gender === "female" && heritage === "panyar") {
        rollTitle(panyarColor);
        rollNames(panyarFemaleNames);
        rollSurnames(panyarSurnames);
        console.log(title, name, surname)
    } else if (gender === "male" && heritage === "zemyati") {
        rollNames(zemyatiMaleNames);
        rollSurnames(zemyatiMaleSurnames);
        console.log(name, surname)
    } else if (gender === "female" && heritage === "zemyati") {
        rollNames(zemyatiFemaleNames);
        rollSurnames(zemyatiFemaleSurnames);
        console.log(name, surname)
    };

    if (heritage === "bartan" || heritage === "zemyati") {
        $("body").append("<div id='result'></div>");
        $("#result").append("<h1>" + name + " " + surname + " (" + heritage + ")</h1>")
    } else {
        $("body").append("<div id='result'></div>");
        $("#result").append("<h1>" + title + " " + name + " " + surname + " (" + heritage + ")</h1>")
    }

});

var gender = "";
var heritage = "";
var title = "";
var color = "";
var name = "";
var surname = "";

var bartanMaleNames = ["Adikar", "Arun", "Karoj", "Kirish", "Makit", "Nadit", "Parkresh", " Raghav", "Rakash", "Ajay", "Aamir", "Arnesh", "Hari", "Deepak", "Devesh", "Kunal", "Naveen", "Lal", "Rahi", "Jayesh", "Rahul", "Rajesh", "Jai", "Ravi", "Zayn", "Sahil", "Sanjay", "Rudra", "Arjun", "Bodhi", "Samir", "Ayaan"];
var bartanFemaleNames = ["Adisha", "Aswina", "Kalyika", "Kaviya", "Kita", "Rahika", "Rashi", "Riya", "Seneha", "Shimya", "Vani", "Advaita", "Akshara", "Harishita", "Irya", "Lavana", "Mahati", "Malavi", "Nitara", "Nimesha", "Niyati", "Prerita", "Raji", "Rashmika", "Samiha", "Shanaya", "Tishya", "Ukti", "Vaidehi"];
var bartanSurnames = ["Arani", "Chabarti", "Dardhi", "Dewa", "Kapatia", "Khatri", "Pakshi", "Manabur", "Kumar", "Lal", "Sharma", "Shan", "Jai", "Pal", "Aggarwal", "Chander", "Nara", "Rai", "Goel", "Bhat", "Raji", "Anand", "Kapoor", "Chandra", "Patel", "Malhotra", "Arun", "Madan", "Prasad", "Rana", "Subramani", "Sethi", "Malik"];

//var oriteMaleTitles = ["Baronet", "Gallant", "Graf", "Landgrave", "Marquess", "Princips", "Viscount"];
//var oriteFemaleTitles = ["Contessa", "Dame", "Gallant","Landgrave", "Marquessa", "Reina", "Viscount"];

var oriteMaleTitles = ["Arcyksiążę", "Kniaź", "Ksiażę", "Delfin", "Grand", "Wojewoda", "Wicehrabia", "Markiz", "Margrabia", "Earl", "Palatyn", "Landgrabia", "Komes", "Hrabia", "Burgrabia", "Baron", "Baronet", "Rycerz", "Kawaler", "Lord", "Par", "Magnat", "Graf"];
var oriteFemaleTitles = ["Contessa", "Dama", "Arcyksieżna", "Kniazini", "Markiza", "Księżna", "Wicehrabina", "Margrabianka", "Palatynka", "Komessa", "Hrabina", "Hrabianka", "Burgrabini", "Landgrabini", "Baronesa", "Baronetka", "Rycerka", "Lady", "Magnatka", "Grafini"];
var oriteMaleNames = ["Alben", "Anton", "Blas", "Cyprian", "Elrik", "Farian", "Leon", "Marilo", "Rubin", "Silvin", "Ermenegildo", "Eufrasio", "Mansueto", "Fortunato", "Severino", "Domizio", "Calimero", "Adalberto", "Pere", "Symao", "Duarte", "Amrrique", "Gonçalvo"];
var oriteFemaleNames = ["Aurora", "Chiara", "Emetta", "Hadriana", "Katovica", "Livia", "Millia", "Severina", "Tiana", "Valeria", "Giuseppina", "Gioconda", "Adalgisa", "Egidia", "Rosetta", "Chiarina", "Branca", "Leonor", "Ines", "Margarida", "Luana", "Constança", "Iris"];
var oriteSurnames = ["Albrekt", "Garossi", "Loprio", "Martiko", "Rodano", "Sanicci", "Zardani", "Botelho", "Brandam", "Carneiro", "Coelho", "Drago", "Fogaça", "Velho", "Esposito", "Bianchi", "Ricci", "Cantú", "Trevisani", "Udinesi", "Astrella", "Bongiovanni", "Iadanza"];

var panyarMaleColor = ["Bursztynowy", "Lazurowy", "Karmazynowy", "Szafirowy", "Szkarłatny", "Srebrny", "Cynobrowy", "Fioletowy", "Amarantowy", "Bordowy", "Błękitny", "Antracytowy", "Ametystowy", "Chabrowy", "Hebanowy", "Koralowy", "Kobaltowy", "Malachitowy", "Oranżowy", "Purpurowy", "Szafirowy", "Złocisty"];
var panyarFemaleColor = ["Bursztynowa", "Lazurowa", "Karmazynowa", "Szafirowa", "Szkarłatna", "Srebrna", "Cynobrowa", "Fioletowy", "Amarantowa", "Bordowa", "Błękitna", "Antracytowa", "Ametystowa", "Chabrowa", "Hebanowa", "Koralowa", "Kobaltowa", "Malachitowa", "Oranżowa", "Purpurowa", "Szafirowa", "Złocista"];
var panyarMaleNames = ["Szarżujący", "Tańczący", "Płynący", "Rosnący", "Szalejący", "Stojący", "Wypływający", "Szalony", "Walczący", "Spokojny", "Płaczący", "Radosny", "Smutny", "Zrozpaczony", "Szczęśliwy", "Pechowy", "Siedzący", "Wypatrujący", "Ukrywający", "Pobożny", "Miłujący"];
var panyarFemaleNames = ["Szarżująca", "Tańcząca", "Płynąca", "Rosnąca", "Szalejąca", "Stojąca", "Wypływająca", "Szalona", "Walcząca", "Spokojna", "Płacząca", "Radosna", "Smutna", "Zrozpaczona", "Szczęśliwa", "Pechowa", "Siedząca", "Wypatrująca", "Ukrywająca", "Pobożna", "Miłująca"];
var panyarMaleSurnames = ["Płomień", "Bursztyn", "Strumień", "Zagajnik", "Sztorm", "Przypływ", "Wiatr", "Ocean", "Liść", "Kamień", "Krzak", "Piorun", "Grzmot", "Szkwał", "Huk", "Śnieg", "Lód", "Szron", "Grad", "Krzemień", "Kanion", "Księżyc", "Ogień"];
var panyarFemaleSurnames = ["Płomień", "Rzeka", "Polana", "Rafa", "Burza", "Błyskawica", "Rzeka", "Dziupla", "Niezapominajka", "Góra", "Przepaść", "Trawa", "Chmura", "Lawina", "Księżyc", "Gwiazda", "Słońce"];

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
        rollTitle(panyarMaleColor);
        rollNames(panyarMaleNames);
        rollSurnames(panyarMaleSurnames);
        console.log(title, name, surname)
    } else if (gender === "female" && heritage === "panyar") {
        rollTitle(panyarFemaleColor);
        rollNames(panyarFemaleNames);
        rollSurnames(panyarFemaleSurnames);
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

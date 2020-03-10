$(document).ready(function(){
    $("select.nationality").change(function(){
        var selectedHeritage = $(this).children("option:selected").val();
        alert("You have selected the country - " + selectedHeritage);
    });
});

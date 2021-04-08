var attHome;
var midHome;
var defHome;
var attAway;
var midAway;
var defAway;

var countGames = 0;

function selectHome() { //onchange functie die het thuis team de bijbehorende waardes geeft
    var homeTeam = document.getElementById("homeTeam").value;
    if (homeTeam == "ACMilan") {
        defHome = 20;
        midHome = 21;
        attHome = 20;
    }
    if (homeTeam == "Barcelona") {
        defHome = 25;
        midHome = 24;
        attHome = 20;
    }
    if (homeTeam == "Liverpool") {
        defHome = 25;
        midHome = 23;
        attHome = 20;
    }
    if (homeTeam == "KaaGent") {
        defHome = 20;
        midHome = 27;
        attHome = 30;
    }
    if (homeTeam == "Marseille") {
        defHome = 20;
        midHome = 21;
        attHome = 20;
    }
    if (homeTeam == "ManchesterUnited") {
        defHome = 20;
        midHome = 21;
        attHome = 20;
    }
    if (homeTeam == "Olympiacos") {
        defHome = 25;
        midHome = 32;
        attHome = 30;
    }
    if (homeTeam == "SportingCP") {
        defHome = 20;
        midHome = 21;
        attHome = 20;
    }
}

function selectAway() { //onchange functie die het uit team de bijbehorende waardes geeft
    var awayTeam = document.getElementById("awayTeam").value;
    if (awayTeam == "ACMilan") {
        defAway = 20;
        midAway = 21;
        attAway = 20;
    }
    if (awayTeam == "Barcelona") {
        defAway = 25;
        midAway = 24;
        attAway = 20;
    }
    if (awayTeam == "Liverpool") {
        defAway = 22;
        midAway = 23;
        attAway = 20;
    }
    if (awayTeam == "KaaGent") {
        defAway = 20;
        midAway = 25;
        attAway = 30;
    }
    if (awayTeam == "Marseille") {
        defAway = 20;
        midAway = 21;
        attAway = 20;
    }
    if (awayTeam == "ManchesterUnited") {
        defAway = 20;
        midAway = 21;
        attAway = 20;
    }
    if (awayTeam == "Olympiacos") {
        defAway = 25;
        midAway = 32;
        attAway = 30;
    }
    if (awayTeam == "SportingCP") {
        defAway = 20;
        midAway = 21;
        attAway = 20;
    }
}

function startMatch() { //match engine
    var scoreHome = 0;
    var scoreAway = 0;
    var location = "middle";
    document.getElementById("button").disabled = true;
    document.getElementById("button").innerHTML = "Match simulating...";
    
    
    for (var i = 0; i < 91; i++) { //for loop die elke minuut t/m 90 simuleert
    task(i);

    }
    function task(i) {
        setTimeout(function() { //seTimeout in de for loop zodat deze elke 2 seconden 1 minuut verder gaat, anders gaat het te snel

            document.getElementById("score").innerHTML = document.getElementById("homeTeam").value + " " + scoreHome + " - " + scoreAway + " " + document.getElementById("awayTeam").value; //scorebord
            document.getElementById("timer").innerHTML = i + "'"; //tijd aangeven
            console.log(location);
            
            if (location == "middle") { //if functie voor wanneer de bal bij het middenveld is
                
                var home = Math.floor(Math.random() * midHome) + 1; //randomizer voor thuis team
                var away = Math.floor(Math.random() * midAway) + 1; //randomizer voor thuis team

                document.getElementById("ball").classList.remove("animationrightgoal");
                document.getElementById("ball").classList.remove("animationleftgoal");
                document.getElementById("ball").classList.remove("animationright");
                document.getElementById("ball").classList.remove("animationleft");
                document.getElementById("ball").classList.remove("animationrightreverse");
                document.getElementById("ball").classList.remove("animationleftreverse");

                document.getElementById("goal").classList.remove("goalanimation");
                
                if (home > away + 10) { //als thuis > uit gaat de bal naar rechts
                    location = "right";
                    document.getElementById("ball").classList.add("animationright");
                }

                else if (away > home + 10) { //als uit > thuis gaat de bal naar rechts
                    location = "left";
                    document.getElementById("ball").classList.add("animationleft");                    
                }
            }

            else if (location == "right") {
                var home = Math.floor(Math.random() * attHome) + 1;
                var away = Math.floor(Math.random() * defAway) + 1;

                if (home > away + 15) {
                    location = "middle";
                    scoreHome++;
                    
                    document.getElementById("ball").classList.remove("animationright");
                    document.getElementById("goal").classList.add("goalanimation");
                    document.getElementById("ball").classList.add("animationrightgoal");

                }

                else if (away > home + 10) {
                    location = "middle";
                    document.getElementById("ball").classList.add("animationrightreverse");
                }
            }

            else if (location == "left") {
                var home = Math.floor(Math.random() * defHome) + 1;
                var away = Math.floor(Math.random() * attAway) + 1;

                if (home > away + 10) {
                    location = "middle";
                    document.getElementById("ball").classList.add("animationleftreverse");

                }

                else if (away > home + 15) {
                    location = "middle";
                    scoreAway++; 

                    document.getElementById("ball").classList.remove("animationleft");
                    document.getElementById("ball").classList.add("animationleftgoal");                    
                    document.getElementById("goal").classList.add("goalanimation");                    
                }
            }
            if (i > 89) { //einde wedstrijd
                countGames++;
                document.getElementById("button").disabled = false;
                document.getElementById("button").innerHTML = "NEW GAME";
                var add = document.createTextNode ("Game " + countGames + ": " + document.getElementById("homeTeam").value + " " + scoreHome + " - " + scoreAway + " " + document.getElementById("awayTeam").value);
                var br = document.createElement("br");
                document.getElementById("results").appendChild(add);
                document.getElementById("results").appendChild(br);

            }
            

        }, 1000 * i);
    
    }
    
}
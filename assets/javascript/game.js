
        var gameFlag = false;
        var playerSelected = false;
        var compSelected = false;
        var gamesWon = 0;
        var nextFighter = false;

        var player;
        var comp;

        var fighterObject = {

            fighter0: {
                fid: 0,
                name: "Happy Gilmore",
                pic: "http://junkee.com/wp-content/uploads/2016/10/happy-gilmore-10-things-you-didnt-know.png",
                health: 120,
                attack: 8,
                flag1: 0,
                flag2: 0,
                flag3: 0
            },
            fighter1: {
                fid: 1,
                name: "Bob Barker",
                pic: "http://basementrejects.com/wp-content/uploads/2015/06/happy-gilmore-adam-sandler-golf-movie-bob-barker-fight-review.jpg",
                health: 120,
                attack: 8,
                flag1: 0,
                flag2: 0,
                flag3: 0
            },
            fighter2: {
                fid: 2,
                name: "Shooter McGavin",
                pic: "https://consequenceofsound.files.wordpress.com/2016/02/shooter_mcgavin_feture.jpg?quality=80",
                health: 120,
                attack: 8,
                flag1: 0,
                flag2: 0,
                flag3: 0
            },
            fighter3: {
                fid: 3,
                name: "Tony",
                pic: "https://www.tramontanalaw.com/wp-content/uploads/2016/09/happy-gilmore-nursing-home-abuse-1030x515.jpg",
                health: 120,
                attack: 8,
                flag1: 0,
                flag2: 0,
                flag3: 0
            }
        }
        console.log("gameflag set to: " + gameFlag);
        console.log(fighterObject.fighter3.pic);

        var selectBoxesObject = {
            box0: {
                id: '"#sbox0"',
                flag1: 0,
                flag2: 0,
                flag3: 0
            },
            box1: {
                id: '"#sbox1"',
                flag1: 0,
                flag2: 0,
                flag3: 0
            },
            box2: {
                id: '"#sbox2"',
                flag1: 0,
                flag2: 0,
                flag3: 0
            },
            box3: {
                id: '"#sbox3"',
                flag1: 0,
                flag2: 0,
                flag3: 0
            }
        }
        console.log(selectBoxesObject.box2.id)

        var fightBoxesObject = {
            box0: {
                id: '"#fbox0"',
                flag1: 0,
                flag2: 0,
                flag3: 0
            },
            box1: {
                id: '"#fbox1"',
                flag1: 0,
                flag2: 0,
                flag3: 0
            }
        }
        console.log(fightBoxesObject.box1.id);

        function loadSelectBoxes() {

            $("#game_message").html(
                "Choose your player by clicking on the picture."
            );

            $("#sbox0").html(
                "<img src='" + fighterObject.fighter0.pic + "' width='200px'>" + "<br>" +
                "Health: " + fighterObject.fighter0.health + "<br>" +
                "Attack: " + fighterObject.fighter0.attack
            );

            $("#sbox1").html(
                "<img src='" + fighterObject.fighter1.pic + "' width='200px'>" + "<br>" +
                "Health: " + fighterObject.fighter1.health + "<br>" +
                "Attack: " + fighterObject.fighter1.attack
            );

            $("#sbox2").html(
                "<img src='" + fighterObject.fighter2.pic + "' width='200px'>" + "<br>" +
                "Health: " + fighterObject.fighter2.health + "<br>" +
                "Attack: " + fighterObject.fighter2.attack
            );

            $("#sbox3").html(
                "<img src='" + fighterObject.fighter3.pic + "' width='200px'>" + "<br>" +
                "Health: " + fighterObject.fighter3.health + "<br>" +
                "Attack: " + fighterObject.fighter3.attack
            );
        }

        if (!gameFlag) {
            loadSelectBoxes();
            gameFlag = true;
        }

        $("#sbox0").on("click", function () {
            if (gameFlag && !playerSelected && !compSelected) {
                $("#sbox0").empty();
                $("#fbox0").html(
                    "<img src='" + fighterObject.fighter0.pic + "' width='200px'>" + "<br>" +
                    "Health: " + fighterObject.fighter0.health + "<br>" +
                    "Attack: " + fighterObject.fighter0.attack
                );
                playerSelected = true;
                player = Object.assign({}, fighterObject.fighter0);
            } else if (gameFlag && playerSelected && !compSelected) {
                $("#sbox0").empty();
                $("#fbox1").html(
                    "<img src='" + fighterObject.fighter0.pic + "' width='200px'>" + "<br>" +
                    "Health: " + fighterObject.fighter0.health + "<br>" +
                    "Attack: " + fighterObject.fighter0.attack
                );
                compSelected = true;
                comp = Object.assign({}, fighterObject.fighter0);
                console.log(comp);
            }
            if (nextFighter) {

                $("#sbox0").empty();
                $("#fbox1").html(
                    "<img src='" + fighterObject.fighter0.pic + "' width='200px'>" + "<br>" +
                    "Health: " + fighterObject.fighter0.health + "<br>" +
                    "Attack: " + fighterObject.fighter0.attack
                );
                compSelected = true;
                comp = Object.assign({}, fighterObject.fighter0);
                nextFighter = false;
            }
        });

        $("#sbox1").on("click", function () {
            if (gameFlag && !playerSelected && !compSelected) {
                $("#sbox1").empty();
                $("#fbox0").html(
                    "<img src='" + fighterObject.fighter1.pic + "' width='200px'>" + "<br>" +
                    "Health: " + fighterObject.fighter1.health + "<br>" +
                    "Attack: " + fighterObject.fighter1.attack
                );
                playerSelected = true;
                player = Object.assign({}, fighterObject.fighter1);
            } else if (gameFlag && playerSelected && !compSelected) {
                $("#sbox1").empty();
                $("#fbox1").html(
                    "<img src='" + fighterObject.fighter1.pic + "' width='200px'>" + "<br>" +
                    "Health: " + fighterObject.fighter1.health + "<br>" +
                    "Attack: " + fighterObject.fighter1.attack
                );
                compSelected = true;
                comp = Object.assign({}, fighterObject.fighter1);
            }
            if (nextFighter) {

                $("#sbox1").empty();
                $("#fbox1").html(
                    "<img src='" + fighterObject.fighter1.pic + "' width='200px'>" + "<br>" +
                    "Health: " + fighterObject.fighter1.health + "<br>" +
                    "Attack: " + fighterObject.fighter1.attack
                );
                compSelected = true;
                comp = Object.assign({}, fighterObject.fighter1);
                nextFighter = false;
            }
        });

        $("#sbox2").on("click", function () {
            if (gameFlag && !playerSelected && !compSelected) {
                $("#sbox2").empty();
                $("#fbox0").html(
                    "<img src='" + fighterObject.fighter2.pic + "' width='200px'>" + "<br>" +
                    "Health: " + fighterObject.fighter2.health + "<br>" +
                    "Attack: " + fighterObject.fighter2.attack
                );
                playerSelected = true;
                player = Object.assign({}, fighterObject.fighter2);
            } else if (gameFlag && playerSelected && !compSelected) {
                $("#sbox2").empty();
                $("#fbox1").html(
                    "<img src='" + fighterObject.fighter2.pic + "' width='200px'>" + "<br>" +
                    "Health: " + fighterObject.fighter2.health + "<br>" +
                    "Attack: " + fighterObject.fighter2.attack
                );
                compSelected = true;
                comp = Object.assign({}, fighterObject.fighter2);
            }
            if (nextFighter) {

                $("#sbox2").empty();
                $("#fbox1").html(
                    "<img src='" + fighterObject.fighter2.pic + "' width='200px'>" + "<br>" +
                    "Health: " + fighterObject.fighter2.health + "<br>" +
                    "Attack: " + fighterObject.fighter2.attack
                );
                compSelected = true;
                comp = Object.assign({}, fighterObject.fighter2);
                nextFighter = false;
            }

        });

        $("#sbox3").on("click", function () {
            if (gameFlag && !playerSelected && !compSelected) {
                $("#sbox3").empty();
                $("#fbox0").html(
                    "<img src='" + fighterObject.fighter3.pic + "' width='200px'>" + "<br>" +
                    "Health: " + fighterObject.fighter3.health + "<br>" +
                    "Attack: " + fighterObject.fighter3.attack
                );
                playerSelected = true;
                player = Object.assign({}, fighterObject.fighter3);
            } else if (gameFlag && playerSelected && !compSelected) {
                $("#sbox3").empty();
                $("#fbox1").html(
                    "<img src='" + fighterObject.fighter3.pic + "' width='200px'>" + "<br>" +
                    "Health: " + fighterObject.fighter3.health + "<br>" +
                    "Attack: " + fighterObject.fighter3.attack
                );
                compSelected = true;
                comp = Object.assign({}, fighterObject.fighter3);
            }
            if (nextFighter) {

                $("#sbox3").empty();
                $("#fbox1").html(
                    "<img src='" + fighterObject.fighter3.pic + "' width='200px'>" + "<br>" +
                    "Health: " + fighterObject.fighter3.health + "<br>" +
                    "Attack: " + fighterObject.fighter3.attack
                );
                compSelected = true;
                comp = Object.assign({}, fighterObject.fighter3);
                nextFighter = false;
            }
        });

        $("#id_attack").on("click", function () {
            if (gameFlag && playerSelected && compSelected) {

                player.health = player.health - comp.attack;
                comp.health = comp.health - player.attack;
                player.attack = player.attack + 8;

                $("#fbox0").html(
                    "<img src='" + player.pic + "' width='200px'>" + "<br>" +
                    "Health: " + player.health + "<br>" +
                    "Attack: " + player.attack
                );
                $("#fbox1").html(
                    "<img src='" + comp.pic + "' width='200px'>" + "<br>" +
                    "Health: " + comp.health + "<br>" +
                    "Attack: " + comp.attack
                );
                if (player.health > 0 && comp.health < 1) {
                    gamesWon++;
                    $("#game_message").html(
                        "You Win!  Click on your next opponent."
                    );
                    nextFighter = true;
                    compSelected = false;

                }
                if (player.health < 1 && comp.health > 0) {
                    gamesWon++;
                    $("#game_message").html(
                        "Computer Wins. Click on the reset button to restart the game."
                    );
                    gameFlag = false;
                }
                if (gamesWon === 3) {
                    //game ends
                    $("#game_message").html(
                        "YOU WIN EVERYTHING. Click on the reset button to restart the game."
                    );
                    gameFlag = false;
                }
            }
        });

        $("#id_reset").on("click", function () {
            gameFlag = false;
            playerSelected = false;
            compSelected = false;
            gamesWon = 0;
            nextFighter = false;

            player;
            comp;

            fighterObject = {

                fighter0: {
                    fid: 0,
                    name: "Happy Gilmore",
                    pic: "http://junkee.com/wp-content/uploads/2016/10/happy-gilmore-10-things-you-didnt-know.png",
                    health: 120,
                    attack: 8,
                    flag1: 0,
                    flag2: 0,
                    flag3: 0
                },
                fighter1: {
                    fid: 1,
                    name: "Bob Barker",
                    pic: "http://basementrejects.com/wp-content/uploads/2015/06/happy-gilmore-adam-sandler-golf-movie-bob-barker-fight-review.jpg",
                    health: 120,
                    attack: 8,
                    flag1: 0,
                    flag2: 0,
                    flag3: 0
                },
                fighter2: {
                    fid: 2,
                    name: "Shooter McGavin",
                    pic: "https://consequenceofsound.files.wordpress.com/2016/02/shooter_mcgavin_feture.jpg?quality=80",
                    health: 120,
                    attack: 8,
                    flag1: 0,
                    flag2: 0,
                    flag3: 0
                },
                fighter3: {
                    fid: 3,
                    name: "Tony",
                    pic: "https://www.tramontanalaw.com/wp-content/uploads/2016/09/happy-gilmore-nursing-home-abuse-1030x515.jpg",
                    health: 120,
                    attack: 8,
                    flag1: 0,
                    flag2: 0,
                    flag3: 0
                }
            }
            loadSelectBoxes();
            $("#fbox0").empty();
            $("#fbox1").empty();
            gameFlag = true;
        });




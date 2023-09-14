<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="css/image/icon.png" >
    <link rel="stylesheet" href="css/stylePuissance.css" >
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css"></link>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nanum+Brush+Script" />
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet">
    <title>Konnection</title>
</head>
    <body >
        <div class="bandeau">
            <input type="button" class="bandeau_reset" id="btn_reset"/>
            <div class="bandeau_titre"> Games.works</div>
            <div class="bandeau_score"> SCORE:<br> <label id="lbl_score">1 - 2</label></div>
        </div>
        <div class="jeu">
            <div class="jeu_player">
                <div class="jeu_player_nom">
                    <div>
                    <input type="button" class="jeu_player_nom_modif" id="btn_player1"/>
                    <input type="text" class="jeu_player_nom_texte" id="edt_player1">
                    <label id="lbl_player1">Player 1</label>
                    </div>

                    <div> <input type="color" id="color_p1"></div>
                </div>
                
                <div class="jeu_player_bulle gauche" id="div_bullP1"> <div>BEGIN </div></div>
                <div class="jeu_player_bulle gauche" id="div_rangePleinP1"> <div>Range Pleine </div></div>
                <div class="jeu_player_feu">
                    <div class="jeu_player_feu_rouge fgauche" id="div_feuP1"></div>
                    <div class="jeu_player_feu_poteau pgauche"></div>
                </div>
            </div>
            <div class="jeu_puissance" id="div_puissance">
                <div class="jeu_puissance_ligne jeu_puissance_tuyau">

                    <?php   echo str_repeat("<div class=\"jeu_puissance_ligne_tuyau\"></div>",7); ?>

                </div>

                <?php
                    for( $l=1;$l<7;$l++){
                        echo "<div class=\"jeu_puissance_ligne jeu_puissance_rond\">";
                        for( $c=1;$c<8;$c++){
                            echo "<div class=\"jeu_puissance_ligne_rond\" id=\"div_rond$c$l\"></div>";
                        }
                        echo "</div >";
                    }
                ?>

                <div class="jeu_puissance_ligne jeu_puissance_fleche">

                    <?php   
                        for( $i=0;$i<7;$i++){
                            echo "<input type=\"button\" class=\"jeu_puissance_ligne_fleche\" id=\"btn_fleche$i\"> ";
                        }
                    ?>

                </div>
            </div>
            <div class="jeu_start" id="div_dialogue">
                <div  class="jeu_start_start" id="div_start">
                    <div class="jeu_start_start_partie">
                        <div></div><div></div>
                    </div>
                    <div  class="jeu_start_start_centre"><label id="lbl_start">START</label></div>
                    <div class="jeu_start_start_partie">
                        <div></div><div></div>
                    </div>
                </div>
                <div  class="jeu_start_win" id="div_fin">
                    <div class="jeu_start_win_partie">
                        <div class="jeu_start_win_partie_etoile1"></div>
                        <div class="jeu_start_win_partie_etoile"></div>
                        <div class="jeu_start_win_partie_etoile"></div>
                        <div class="jeu_start_win_partie_etoile1"></div>
                    </div>
                    <div class="jeu_start_win_centre"><label id="lbl_win">PLAYER</label><br>WIN</div>
                    <div class="jeu_start_win_partie">
                        <div class="jeu_start_win_partie_etoile"></div>
                        <div class="jeu_start_win_partie_etoile1"></div>
                        <div class="jeu_start_win_partie_etoile"></div>
                        <div class="jeu_start_win_partie_etoile1"></div>
                        <div class="jeu_start_win_partie_etoile"></div>
                    </div>
                </div>
                <div  class="jeu_start_again" id="div_again">
                    <div class="jeu_start_again_message">PLAY AGAIN ?</div>
                    <div class="jeu_start_again_reponse">
                        <input type="button" value="Yes" id="btn_yes">
                        <input type="button" value="No"  id="btn_no">
                    </div>
                </div>

            </div>
            <div class="jeu_player">
                <div class="jeu_player_nom">
                    <div>
                    <input type="button" class="jeu_player_nom_modif" id="btn_player2"/>
                    <input type="text" class="jeu_player_nom_texte" id="edt_player2">
                    <label id="lbl_player2">Player 2</label>
                    </div>
                    <div> <input type="color" id="color_p2"></div>
                </div>
                <div class="jeu_player_bulle" id="div_bullP2"> <div>BEGIN </div></div>
                <div class="jeu_player_bulle" id="div_rangePleinP2"> <div>Range Pleine </div></div>
                <div class="jeu_player_feu">
                    <div class="jeu_player_feu_rouge fdroite" id="div_feuP2"></div>
                    <div class="jeu_player_feu_poteau pdroite"></div>
                </div>
            </div>

        </div>
      <script type="module" src="../controleur/puissance4.js"></script>
    </body>
</html>

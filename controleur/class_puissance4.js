class VuePuissance4 {
    constructor() {
        this._tab = [1, 0, 0, 0, 0, 0, 0];
        this._enJeu = 1;
        this._plateau = [];
        this._color = ["rouge", "jaune"];
        // rien                             
    }
    get form() { return this._form; }
    init(form) {
        this._form = form;
        this._fleche = [this._form.btnFleche0, this._form.btnFleche1, this._form.btnFleche2, this._form.btnFleche3, this._form.btnFleche4, this._form.btnFleche5, this._form.btnFleche6];
        this._form.lblScore.textContent = "0 - 0";
        this._form.btnFleche0.style.animation = "clignote 1.5s forwards ease-in-out infinite";
        const tab = [0, 0, 0, 0, 0, 0];
        for (let i = 0; i <= 7; i++) {
            this._plateau.push(tab.slice());
        }
        this._plateauObject = [
            [this.form.divRond11, this.form.divRond12, this.form.divRond13, this.form.divRond14, this.form.divRond15, this.form.divRond16],
            [this.form.divRond21, this.form.divRond22, this.form.divRond23, this.form.divRond24, this.form.divRond25, this.form.divRond26],
            [this.form.divRond31, this.form.divRond32, this.form.divRond33, this.form.divRond34, this.form.divRond35, this.form.divRond36],
            [this.form.divRond41, this.form.divRond42, this.form.divRond43, this.form.divRond44, this.form.divRond45, this.form.divRond46],
            [this.form.divRond51, this.form.divRond52, this.form.divRond53, this.form.divRond54, this.form.divRond55, this.form.divRond56],
            [this.form.divRond61, this.form.divRond62, this.form.divRond63, this.form.divRond64, this.form.divRond65, this.form.divRond66],
            [this.form.divRond71, this.form.divRond72, this.form.divRond73, this.form.divRond74, this.form.divRond75, this.form.divRond76],
        ];
        this._form.divPuissance.style.display = "none";
        this._form.divDialogue.style.display = "flex";
        this._form.divStart.style.display = "flex";
        this.form.colorP1.value = "#FF0000";
        this.form.colorP2.value = "#FFFF00";
        this._form.colorP2.onchange = function () { vuePuissance4.changementCouleur(); };
        this._form.btnReset.onclick = function () { location.href = "Puissance.php"; };
        this._form.btnPlayer1.onclick = function () { vuePuissance4.playerOnClick(1); };
        this._form.btnPlayer2.onclick = function () { vuePuissance4.playerOnClick(0); };
        document.onkeydown = document.onclick = function () { vuePuissance4.start(); };
        //this.form.edtMdp.onkeydown = function(event):void { vueConnection.verificationTouhce(event);}
    }
    start() {
        this._form.btnFleche0.onclick = function () { vuePuissance4.ajoutPion(0); };
        this._form.btnFleche1.onclick = function () { vuePuissance4.ajoutPion(1); };
        this._form.btnFleche2.onclick = function () { vuePuissance4.ajoutPion(2); };
        this._form.btnFleche3.onclick = function () { vuePuissance4.ajoutPion(3); };
        this._form.btnFleche4.onclick = function () { vuePuissance4.ajoutPion(4); };
        this._form.btnFleche5.onclick = function () { vuePuissance4.ajoutPion(5); };
        this._form.btnFleche6.onclick = function () { vuePuissance4.ajoutPion(6); };
        this._form.divDialogue.style.display = "flex";
        this._form.divStart.style.display = "flex";
        this._form.lblStart.textContent = "TIRAGE";
        this.form.divPuissance.style.borderWidth = "0px";
        const commence = (Math.floor(Math.random() * 10)) % 2;
        const feuP1 = this.form.divFeuP1;
        const feuP2 = this.form.divFeuP2;
        feuP1.style.animation = "clignoteFeu 2s linear 4";
        feuP2.style.animation = "clignoteFeu 2s linear 4";
        const bull1 = this.form.divBullP1;
        const bull2 = this.form.divBullP2;
        if (commence) {
            this._enJeu = 1;
            setTimeout(function () {
                feuP2.style.backgroundImage = "url(\"../vue/css/image/feuRouge.png\")";
                feuP1.style.backgroundImage = "url(\"../vue/css/image/feuVert.png\")";
                bull2.style.display = "none";
            }, 8500);
            this.form.divBullP1.style.display = "flex";
            this.form.divBullP2.style.display = "flex";
            this.form.divBullP2.style.animation = "clignoteDeux 2s   linear 4";
            this.form.divBullP1.style.animation = "clignoteDeux 2s forwards linear 4";
        }
        else {
            this._enJeu = 2;
            setTimeout(function () {
                feuP1.style.backgroundImage = "url(\"../vue/css/image/feuRouge.png\")";
                feuP2.style.backgroundImage = "url(\"../vue/css/image/feuVert.png\")";
                feuP1.style.animation = "";
                feuP2.style.animation = "";
                bull1.style.display = "none";
            }, 8500);
            this.form.divBullP1.style.display = "flex";
            this.form.divBullP2.style.display = "flex";
            this.form.divBullP1.style.animation = "clignoteDeux 2s linear 4";
            this.form.divBullP2.style.animation = "clignoteDeux 2s forwards linear 4";
        }
        setTimeout(function () {
            bull1.style.display = "none";
            bull2.style.display = "none";
        }, 12000);
        const puissance = this._form.divPuissance;
        const divAgain = this._form.divAgain;
        const divStart = this._form.divStart;
        const divDialogue = this._form.divDialogue;
        setTimeout(function () {
            puissance.style.display = "block";
            divAgain.style.display = "none";
            divStart.style.display = "none";
            divDialogue.style.display = "none";
        }, 8000);
        document.onkeydown = function (event) { vuePuissance4.fleche(event); };
        document.onclick = undefined;
    }
    playerOnClick(joueur = 0) {
        let label;
        let text;
        if (joueur) {
            label = this._form.lblPlayer1;
            text = this._form.edtPlayer1;
        }
        else {
            label = this._form.lblPlayer2;
            text = this._form.edtPlayer2;
        }
        label.style.transformOrigin = "center left";
        text.style.transformOrigin = "center left";
        if (text.style.display === "flex") {
            label.textContent = text.value;
            text.style.animation = "revient 1.5s forwards ease-in-out";
            setTimeout(function () {
                text.style.display = "none";
                label.style.display = "flex";
                label.style.animation = "part 1.5s forwards ease-in-out";
            }, 1500);
        }
        else {
            text.value = label.textContent;
            label.style.animation = "revient 1.5s forwards ease-in-out";
            setTimeout(function () {
                label.style.display = "none";
                text.style.display = "flex";
                text.style.animation = "part 1.5s forwards ease-in-out";
            }, 1500);
        }
    }
    ajoutPion(endroit) {
        // ajout du pion dans le tableau
        this.form.divRangePleinP1.style.display = "none";
        this.form.divRangePleinP2.style.display = "none";
        let placeUn = this._plateau[endroit].indexOf(1);
        let placeDeux = this._plateau[endroit].indexOf(2);
        let place = -1;
        if ((placeUn < placeDeux && placeUn > 0) || placeUn > 0 && placeDeux < 0)
            place = placeUn - 1;
        else if (placeUn > placeDeux && placeDeux > 0 || placeDeux > 0 && placeUn < 0)
            place = placeDeux - 1;
        if (this._plateau[endroit][0] != 0) {
            if (this._enJeu === 1)
                this.form.divRangePleinP1.style.display = "flex";
            else
                this.form.divRangePleinP2.style.display = "flex";
            return;
        }
        else if (place >= 0)
            this._plateau[endroit][place] = this._enJeu;
        else {
            this._plateau[endroit].pop();
            this._plateau[endroit].push(this._enJeu);
            place = this._plateau[endroit].length - 1;
        }
        //animation ecran de l'ajout du pion avec bonne couleur
        let color = "";
        if (this._enJeu === 1)
            color = this._color[0];
        else
            color = this._color[1];
        for (let i = 0; i < place; i++) {
            const pion = this._plateauObject[endroit][i];
            const pseudoElement = document.createElement('div');
            pseudoElement.classList.add('rondElement');
            pseudoElement.style.backgroundColor = color;
            pseudoElement.style.animation = "rondRouge 0.5s " + i * 0.5 + "s linear";
            pion.appendChild(pseudoElement);
        }
        const pionFinal = this._plateauObject[endroit][place];
        const pseudoElement = document.createElement('div');
        pseudoElement.classList.add('rondElement');
        pseudoElement.style.backgroundColor = color;
        pseudoElement.style.animation = "rondRouge 0.5s " + place * 0.5 + "s forwards linear";
        pionFinal.appendChild(pseudoElement);
        //vérification gagnant + demande rejouer partie
        let gagnant = false;
        gagnant = gagnant || this.verifColonne();
        gagnant = gagnant || this.verifLigne();
        gagnant = gagnant || this.verifCroise();
        gagnant = gagnant || this.verifPlein();
        if (gagnant) {
            this.form.divPuissance.style.borderWidth = "10px";
            this.form.divPuissance.style.animation = "colorChange 1.5s linear 4";
            this._form.btnFleche0.onclick = undefined;
            this._form.btnFleche1.onclick = undefined;
            this._form.btnFleche2.onclick = undefined;
            this._form.btnFleche3.onclick = undefined;
            this._form.btnFleche4.onclick = undefined;
            this._form.btnFleche5.onclick = undefined;
            this._form.btnFleche6.onclick = undefined;
            document.onkeydown = undefined;
            setTimeout(function () {
                vuePuissance4.finPartie();
            }, 6000);
            return;
        }
        //changement de joueur + feu 
        if (this._enJeu === 1) {
            this._enJeu = 2;
            this.form.divFeuP1.style.backgroundImage = "url(\"../vue/css/image/feuRouge.png\")";
            this.form.divFeuP2.style.backgroundImage = "url(\"../vue/css/image/feuVert.png\")";
        }
        else {
            this._enJeu = 1;
            this.form.divFeuP2.style.backgroundImage = "url(\"../vue/css/image/feuRouge.png\")";
            this.form.divFeuP1.style.backgroundImage = "url(\"../vue/css/image/feuVert.png\")";
        }
    }
    verifPlein() {
        let indice = 0;
        for (let tab of this._plateau) {
            if (tab.indexOf(0) === -1)
                indice++;
        }
        if (indice === 7) {
            this._enJeu = 0;
            return true;
        }
        return false;
    }
    verifColonne() {
        for (let tab of this._plateau) {
            for (let ligne = 0; ligne < tab.length - 3; ligne++) {
                if (tab[ligne] === tab[ligne + 1] && tab[ligne + 1] === tab[ligne + 2] && tab[ligne + 2] === tab[ligne + 3] && tab[ligne] != 0)
                    return true;
            }
        }
        return false;
    }
    verifLigne() {
        for (let ligne = 0; ligne < this._plateau[0].length; ligne++) {
            for (let colonne = 0; colonne < this._plateau.length - 3; colonne++) {
                if (this._plateau[colonne][ligne] === this._plateau[colonne + 1][ligne] && this._plateau[colonne + 1][ligne] === this._plateau[colonne + 2][ligne]
                    && this._plateau[colonne + 2][ligne] === this._plateau[colonne + 3][ligne] && this._plateau[colonne][ligne] != 0)
                    return true;
            }
        }
        return false;
    }
    verifCroise() {
        for (let colonne = 0; colonne < this._plateau.length - 3; colonne++) {
            for (let ligne = 0; ligne < this._plateau[0].length - 3; ligne++) {
                if (this._plateau[colonne][ligne] === this._plateau[colonne + 1][ligne + 1] &&
                    this._plateau[colonne + 1][ligne + 1] === this._plateau[colonne + 2][ligne + 2] &&
                    this._plateau[colonne + 2][ligne + 2] === this._plateau[colonne + 3][ligne + 3] &&
                    this._plateau[colonne][ligne] != 0)
                    return true;
            }
        }
        for (let colonne = 0; colonne < this._plateau.length - 3; colonne++) {
            for (let ligne = 0; ligne < this._plateau[0].length - 3; ligne++) {
                if (this._plateau[colonne][ligne + 3] === this._plateau[colonne + 1][ligne + 2] &&
                    this._plateau[colonne + 1][ligne + 2] === this._plateau[colonne + 2][ligne + 1] &&
                    this._plateau[colonne + 2][ligne + 1] === this._plateau[colonne + 3][ligne] &&
                    this._plateau[colonne][ligne + 3] != 0)
                    return true;
            }
        }
        return false;
    }
    finPartie() {
        document.onclick = function () { vuePuissance4.playAgain(); };
        document.onkeydown = function () { vuePuissance4.playAgain(); };
        this.form.divPuissance.style.animation = "none";
        this.form.divRangePleinP1.style.display = "none";
        this.form.divRangePleinP2.style.display = "none";
        this._form.divPuissance.style.display = "none";
        this._form.divDialogue.style.display = "flex";
        this._form.divFin.style.display = "flex";
        if (this._enJeu === 0) {
            this._form.lblWin.textContent = "NoBody";
        }
        else if (this._enJeu === 1) {
            this._form.lblWin.textContent = this._form.lblPlayer1.textContent;
            const score = this.form.lblScore.textContent.split("-");
            this.form.lblScore.textContent = Number(score[0].trim()) + 1 + " - " + score[1];
        }
        else {
            this._form.lblWin.textContent = this._form.lblPlayer2.textContent;
            const score = this.form.lblScore.textContent.split("-");
            this.form.lblScore.textContent = score[0] + " - " + (Number(score[1].trim()) + 1);
        }
        //réinitialiser grille
        for (let i = 0; i < this._plateauObject.length; i++) {
            for (let j = 0; j < this._plateauObject[i].length; j++) {
                while (this._plateauObject[i][j].firstChild) {
                    this._plateauObject[i][j].removeChild(this._plateauObject[i][j].firstChild);
                }
                this._plateau[i][j] = 0;
            }
        }
    }
    playAgain() {
        this._form.divFin.style.display = "none";
        this._form.divAgain.style.display = "flex";
        this._form.btnYes.onclick = function () { vuePuissance4.start(); };
        this._form.btnNo.onclick = function () { location.href = "Puissance.php"; };
        this._form.btnYes.style.animation = "clignote 1.5s forwards ease-in-out infinite";
        document.onclick = undefined;
        document.onkeydown = function (event) { vuePuissance4.changementYesNo(event); };
    }
    changementYesNo(ev) {
        if (ev.key === "Enter") {
            if (this._form.btnNo.style.animation === "") {
                this._form.divAgain.style.display = "none";
                this.start();
            }
            else {
                location.href = "Puissance.php";
            }
        }
        else if (ev.key === "ArrowLeft" || ev.key === "ArrowRight") {
            if (this._form.btnNo.style.animation === "") {
                this._form.btnNo.style.animation = "clignote 1.5s forwards ease-in-out infinite";
                this._form.btnYes.style.animation = "";
            }
            else {
                this._form.btnYes.style.animation = "clignote 1.5s forwards ease-in-out infinite";
                this._form.btnNo.style.animation = "";
            }
        }
    }
    fleche(ev) {
        if (ev.key === "Enter") {
            this.ajoutPion(this._tab.indexOf(1));
        }
        else if (ev.key === "ArrowLeft") {
            this.deplacement(-1);
        }
        else if (ev.key === "ArrowRight") {
            this.deplacement(1);
        }
    }
    deplacement(valeur) {
        let index = this._tab.indexOf(1);
        this._tab[index] = 0;
        this._fleche[index].style.animation = "";
        index = (index + valeur) % this._tab.length;
        if (index < 0)
            index = index + this._tab.length;
        this._fleche[index].style.animation = "clignote 1.5s forwards ease-in-out infinite";
        this._tab[index] = 1;
    }
    tableauVide() {
        for (let tab of this._plateau) {
            for (let valeur of tab) {
                if (valeur != 0)
                    return false;
            }
        }
        return true;
    }
    changementCouleur() {
        if (this.tableauVide()) {
            this._color[0] = this._form.colorP1.value;
            this._color[1] = this._form.colorP2.value;
        }
        else {
            this._form.colorP1.value = this._color[0];
            this._form.colorP2.value = this._color[1];
        }
    }
}
let vuePuissance4 = new VuePuissance4;
export { vuePuissance4 };
//# sourceMappingURL=class_puissance4.js.map
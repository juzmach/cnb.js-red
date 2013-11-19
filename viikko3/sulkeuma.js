//Tehdään funktio joka käyttää hyväkseen sulkeumia:

function Auto() {
	var renkaita = 4; //"Privaattimuuttuja", myös vapaa muuttuja
	var ovia = 5; //"Privaattimuuttuja", myös vapaa muuttuja
	var yhteen = ovia+renkaita; //"Privaattimuuttuja", vapaa muuttuja

	return {
		setRenkaita: function(x) {renkaita=x}, //Tässä x on sidottu muuttuja
		getRenkaita: function() {return renkaita},
		setOvia: function(x) {ovia=x}, //Tässä x on sidottu muuttuja
		getOvia: function() {return ovia},
		getYhteen: function() {return yhteen}
}
}


var c = Auto()
write(c.getRenkaita()) //4
write(c.getOvia()) //5
var g = Auto()
g.setRenkaita(8)
write(g.getRenkaita()) //8
write(c.getRenkaita()) //4
write(renkaita) //Ei toimi, ei ole globaalia muuttujaa renkaita
write(c.renkaita) //Undefined, aksessointi ei onnistu tällä tavalla!
write(c.getYhteen()) //9
c.setOvia(9)
write(c.getOvia()) //9
write(c.getYhteen()) //9! HUOM! Tätä arvoa EI lasketa uudestaan vaikka nythän arvon pitäisi olla 13.


//Nyt sekä auto c, että auto g omistavat omat muuttujansa
//renkaista ja ovista ja joita voidaan aksessoida "settereiden" ja "gettereiden" avulla.
//Hienointa on, että ne eivät tuhoudu kun funktio suoritetaan loppuun.
//Renkaat ja ovet ovat siis privaattimuuttujia ja toisaalta kaikki metodit
//ovat käytettävissä kaikille Auto-"olioille".
//Sulkeumilla voidaan siis simuloida oliopohjaista ohjelmointia ja ne ovatkin erittäin tehokas apukeino
//javascript-ohjelmoinnissa.
//Huono puoli käytettäessä sulkeumia on mahdollinen suorituskyvyn heikkeneminen ja muistinkulutuksen
//kasvaminen joten niitä ei kannata käyttää silloin kun sama tulos olisi saavutettavissa muillakin keinoin.


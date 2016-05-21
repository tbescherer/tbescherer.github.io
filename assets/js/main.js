function setAutobiography() {
	var possibleWords = ["dreamweaver", "visionary", "iconoclast", "pythonista",
											 "human being", "amateur chef", "lapsed magician",
											 "podcast enthusiast", "cat lover from afar",
											 "admittedly occasionally slovenly", "peccably dressed",
										   "strong adherent of the polical party you support",
										 	 "card sharp", "apple product worshipper",
										 	 "maverick", "champion of the elite four", "not a replicant",
										 	 "programmer", "developer on the half shell",
										 	 "in principle a supporter of the idea of open source",
											 "public radio donor", "new yorker"]
	var headerWordsSelection = [];
	while (headerWordsSelection.length < 4) {
		var wordSelection = Math.floor(Math.random() * possibleWords.length);
		var newNumber = true
		for (i = 0; i <= headerWordsSelection.length; i++) {
				if (headerWordsSelection[i] === wordSelection) {
					newNumber = false;
					break;
				}
		};
		if (newNumber) {
			headerWordsSelection.push(wordSelection);
		}
	}
	var autobiographyWords = [];
	for (i = 0; i < headerWordsSelection.length; i++) {
		autobiographyWords.push(possibleWords[headerWordsSelection[i]])
	};
	var autobiographyText = autobiographyWords.join(", ")
	var autobiographyText = autobiographyText.charAt(0).toUpperCase() + autobiographyText.slice(1) + ".";
	document.getElementById('autobiography').innerHTML = autobiographyText;
};

function magic () {
	document.getElementById('magic-site').innerHTML = '&ltmarquee> TODO: implement magic &lt/span>'
}
setAutobiography();

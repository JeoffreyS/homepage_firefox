/* *************************** *\
Code is poetry.
iam [at] johnho.ca
\* *************************** */

/* Settings *\
\*==========*/
var settings = {
    //"links_path" : "links.txt",

    "links_path" : ["links/personal.txt","links/dev.txt","links/rmotr.txt"],
    //\_added support for mulitple links pages
    //  tried using JS to parse all the files in the links directory but that's not possible in JS
    //  tried using JS + php but this will require that a local server to be running (for PHP to work)
    //     so, getting the user to input manually in the setting is best.

    "title":{
	"add_symbol": "&#2385",
	"default":"Who dares win"
    },
    //\_ Page's title: enter your personal mantra

    "navigation": {
	"newWindow": true,
	//\_ open links and search results in new tab?
	"menu_auto_close": false
	//\_ close links dropdown menu after a link is clicked?
    },

    "fonts":{
	"body": "Clear Sans",//"Calibri",
	"links": "Trebuchet MS", //"Helvetica"
	"toUpper": false
	//\_ should links and search engine label be all uppercase?
    },

    "icons": {
	"showIcons": false
    },

    "clock": {
	"IsMilitary": true
    },

    "weather": {
	"show": true,
	"geolocate": false,
	"default_loco": "Amiens, France",
	"link":"http://wttr.in"
	//\ optional link for weather to a 3rd party app
    },

    "background": {
	"source":{
	    // "baseUrl": "https://source.unsplash.com/collection/",
      "baseUrl": "https://source.unsplash.com/1920x1080/?nature,fog,mountains,oceans",
	    "dayColId":"407887",
	    "nightColId":"407877",
	    "dawnColId": "407882",
	    "duskColId": "407878"
	},
	"daily": false
	//\_ should background picture in each collection be only updated once per day?
    },

    "search": {
	"engines": [// format is [search url, search varible name (different for each site), label to be shown]
		    ["http://google.com/search", "q","GOOGLE"],
		    ["http://images.google.com/search", "q","GImg"],
		    ["http://google.com/maps", "q", "GMap"],
		    ["http://google.com/news", "q", "GNews"],
		    ["http://youtube.com/results", "search_query", "YouTube"],
		    ["http://soundcloud.com/search/sounds", "q", "SoundCloud"],
		    ["http://bing.com/search", "q", "Bing"],
		    ["http://github.com/search", "q", "GitHub"],
		    ["http://duckduckgo.com/", "q", "DuckDuckGo"],
		    ["http://wolframalpha.com/input/", "i", "WolframAlpha"]
		    ],
	"focusSearch": true,
	//\_ should the search box be selected on load?
	"showQuotes": true,
	"quotes":[
		  "Vide infra  Voir plus bas. ",
      "Vide supra  Voir plus haut. ",
      "Video meliora proboque deteriora sequor  Je vois le bien, je l'aime et je fais le mal. ",
      "Video sed non credo  Je le vois mais je ne crois pas. ",
      "Vim vi repellere omnia jura legesque permittunt  Réprimer la violence par la violence est permis par tous les droits et toutes les lois. ",
      "Vince malum bono  Surmonte le mal par le bien. ",
      "Vincere scis, Hannibal ; victoria uti nescis  Tu sais vaincre, Hannibal ; tu ne sais pas profiter de ta victoire. ",
      "Vincit omnia veritas  La vérité triomphe de tout. ",
      "Vincit qui patitur  Il l'emporte celui qui souffre. ",
      "Vincit qui se vincit  Il est vainqueur celui qui se domine. ",
      "Vinum aqua miscere  Mettre de l'eau dans son vin. ",
      "Vir bonus, dicendi peritus  Un homme de bien qui sait parler. "
		  ]
    }
};

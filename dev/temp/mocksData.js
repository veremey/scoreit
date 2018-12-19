/* Module data structure */

// moduleName: {
//     dataType: {
//         property: value
//     }
// }

/* Module data example */

_template: {
    big: {
        title: 'Hello world',
        age: 10,
        button: false
    }
},

'head': {
    defaults: {
        title: "score'it",
        useSocialMetaTags: false
    }
},

'places': {
	place: {
		title: 'Favorit Place',
		item: [{
			title: 'Greenhouse Apartments',
			img: '01',
			price: '500',
			town: 'Paris'
		}, {
			title: 'Avalon at mission bay',
			img: '02',
			price: '400',
			town: 'Marseille'
		}, {
			title: 'W Lake St & Knox Ave S',
			img: '03',
			price: '420',
			town: 'Rezé'
		}, {
			title: 'Blaisdell Avenue South',
			img: '04',
			price: '350',
			town: 'Nice'
		}, {
			title: 'Holmes Ave S Apartments ',
			img: '05',
			price: '300',
			town: 'Vancouver'
		}, {
			title: 'Vue Apartments',
			img: '06',
			price: '630',
			town: 'Ottawa'
		}]
	},

	ap: {
		title: 'Places of the selected cities',
		item: [{
			title: 'Greenhouse Apartments',
			img: '01',
			price: '500',
			town: 'Paris'
		}, {
			title: 'Avalon at mission bay',
			img: '02',
			price: '400',
			town: 'Marseille'
		}, {
			title: 'W Lake St & Knox Ave S',
			img: '03',
			price: '420',
			town: 'Rezé'
		}, {
			title: 'Blaisdell Avenue South',
			img: '04',
			price: '350',
			town: 'Nice'
		}, {
			title: 'Holmes Ave S Apartments ',
			img: '05',
			price: '300',
			town: 'Vancouver'
		}, {
			title: 'Vue Apartments',
			img: '06',
			price: '630',
			town: 'Ottawa'
		}]
	},

	np: {
		mod: 'has-border',
		title: 'Places',
		item: [{
			title: 'Greenhouse Apartments',
			img: '01',
			price: '500',
			town: 'Paris'
		}, {
			title: 'Avalon at mission bay',
			img: '02',
			price: '400',
			town: 'Marseille'
		}, {
			title: 'W Lake St & Knox Ave S',
			img: '03',
			price: '420',
			town: 'Rezé'
		}, {
			title: 'Blaisdell Avenue South',
			img: '04',
			price: '350',
			town: 'Nice'
		}, {
			title: 'Holmes Ave S Apartments ',
			img: '05',
			price: '300',
			town: 'Vancouver'
		}, {
			title: 'Vue Apartments',
			img: '06',
			price: '630',
			town: 'Ottawa'
		}]
	}

},

'result': {},

__pages: [{
                name: 'compare-green',
                href: 'compare-green.html'
             },{
                name: 'compare',
                href: 'compare.html'
             },{
                name: 'enter-green',
                href: 'enter-green.html'
             },{
                name: 'enter',
                href: 'enter.html'
             },{
                name: 'index',
                href: 'index.html'
             },{
                name: 'score-green',
                href: 'score-green.html'
             },{
                name: 'search-green',
                href: 'search-green.html'
             },{
                name: 'search',
                href: 'search.html'
             }]
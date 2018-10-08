{
		name: "[Gen 7] WhatMons",
		desc: ["Whatmons is a pet mod created by InnerOffice. Yup.<br>&bullet; <a href=\"http://www.smogon.com/forums/threads/3546063/\">Choonmons</a>"],
		mod: 'whatmons',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],

		onSwitchIn: function(pokemon) {
			let changed = {
				'Meganium': true,
				'Serperior': true,
				'Samurott': true,
				'Arbok': true,
				'Seviper': true,
				'Sunflora': true,
				'Cherrim-Sunshine': true,
				'Charizard': true,
				'Gyarados': true,
				'Aerodactyl': true,
				'Feraligatr-Mega': true,
				'Sceptile': true
			};
			let bt = pokemon.baseTemplate;
			if (bt.baseSpecies in changed || (bt.actualSpecies && bt.actualSpecies in changed)) {
				let types = bt.types;
				let bTypes = (types.length === 1 || types[1] === 'caw') ? types[0] : types.join('/');
				this.add('-start', pokemon, 'typechange', bTypes, '[silent]');
			}
			if (bt.actualSpecies) this.add('-start', pokemon, bt.actualSpecies, '[silent]'); //Show the pokemon's actual species
		},
		onSwitchOut: function(pokemon) {
			if (pokemon.baseTemplate.actualSpecies) this.add('-end', pokemon, pokemon.baseTemplate.actualSpecies, '[silent]');
		},
	}

'use strict';
exports.BattleItems = {
	"absorbbulb": {
		id: "absorbbulb",
		name: "Absorb Bulb",
		spritenum: 2,
		fling: {
			basePower: 30,
		},
		onAfterDamage: function (damage, target, source, move) {
			if (move.type === 'Water') {
				this.boost({spa: 1});
			}
		},
		num: 545,
		gen: 5,
		desc: "Raises holder's Sp. Atk by 1 stage if hit by a Water-type attack. Single use.",
	},
	"cellbattery": {
		id: "cellbattery",
		name: "Cell Battery",
		spritenum: 60,
		fling: {
			basePower: 30,
		},
		onAfterDamage: function (damage, target, source, move) {
			if (move.type === 'Electric') {
				this.boost({atk: 1});
			}
		},
		num: 546,
		gen: 5,
		desc: "Raises holder's Attack by 1 if hit by an Electric-type attack. Single use.",
	},
	"snowball": {
		id: "snowball",
		name: "Snowball",
		spritenum: 606,
		fling: {
			basePower: 30,
		},
		onAfterDamage: function (damage, target, source, move) {
			if (move.type === 'Ice') {
				this.boost({atk: 1});
			}
		},
		num: 649,
		gen: 6,
		desc: "Raises holder's Attack by 1 if hit by an Ice-type attack. Single use.",
	},
};

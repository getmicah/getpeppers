import reaper from './reaper.jpg';
import bhutlah from './bhutlah.jpg';
import tshirt from './tshirt.jpg';

export default [
	{
		name: 'Caronlina Reaper',
		url: 'carolina-reaper',
		price: 15,
		inStock: false,
		img: reaper,
		fire: 5,
		info: [
			'Quantity: 6 peppers',
			'"Hottest pepper in the world"',
			'~2,200,000 SHU',
			'Grown in Richland, WA',
			'100% satisfaction garuntee'
		]
	},
	{
		name: 'Chocolate Bhutlah',
		url: 'chocolate-bhutlah',
		price: 10,
		inStock: false,
		fire: 4,
		img: bhutlah,
		info: [
			'Quantity: 6 peppers',
			'~2,000,000 SHU',
			'Grown in Richland, WA',
			'100% satisfaction garuntee'
		]
	},
	{
		name: 'GetPeppers Tee',
		url: 'tee',
		price: 20,
		inStock: false,
		fire: null,
		img: tshirt,
		info: [
			'100% cotton',
			'Crewneck short-sleeve',
			'Machine wash'
		]
	}
]

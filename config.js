var config = {

//header and title//

	style:  'mapbox://styles/aierie/ckakw9ka21zwx1imm3zr4dkqv',
	accessToken: 'pk.eyJ1IjoiYWllcmllIiwiYSI6ImNrYWt5Y2F0ZjBsZ20ycW82ODBtNzk0djUifQ.XTQ707DaE7bHNr6y2qYn1A',
	showMarkers: false,
	theme: 'dark',
	alignment: '',
 	title: 'Here\'s the title',
 	subtitle: 'Here\'s the subtitle',
 	byline: 'A byline',
 	footer: 'ACLED Data source',

// sections begin

	chapters: [

//world-intro//

		{
			id: 'world-intro',
			title: 'Where to focus in 2020',
			image: '',
			description: 'In 2019, the world witnessed a drastic increase in violent disorder that assumed many forms: protests from Lebanon to Hong Kong and Iraq to Chile; geopolitical competition in Yemen and Syria; dominant insurgencies in Somalia and Afghanistan; a cartel-insurgency in Mexico; and a diffuse, adaptable militant threat across the Sahel. Two problems immediately stand out: the world is significantly more violent now than a decade ago, and today’s conflict forms are strongly localized — types of violence, agents, targets, and solutions are unique to their local context. This is partially because governments in the world’s most violent places are no longer in control of their territories, nor show any interest or ability to resume control through direct or indirect authority. Governments are also much more likely to use violence against their citizens without international reproach. The rise of authoritarianism — and impunity — has generated significant public reaction in the form of mass protest movements, but it has also increased the level of violence imposed upon civilians and political competition.',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'all-data-1',
					opacity: 0.8
				},
				{
					layer: 'all-data-2',
					opacity: 0.6
				},
				{
					layer: 'all-data-3',
					opacity: 0.3
				},
				{
					layer: 'all-data-4',
					opacity: 0.05
				}
			],
			onChapterExit: [
				{
					layer: 'all-data-1',
					opacity: 0.8
				},
				{
					layer: 'all-data-2',
					opacity: 0.6
				},
				{
					layer: 'all-data-3',
					opacity: 0.3
				},
				{
					layer: 'all-data-4',
					opacity: 0.05
				}
		  ]
		},

//world-data2polygons//

		{
			id: 'world-data2polygons',
			title: '',
			image: '',
			description: '',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'all-data-1',
					opacity: 0.8
				},
				{
					layer: 'all-data-2',
					opacity: 0.6
				},
				{
					layer: 'all-data-3',
					opacity: 0.3
				},
				{
					layer: 'all-data-4',
					opacity: 0.05
				},
				{
					layer: 'polygons_world',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'all-data-1',
					opacity: 0
				},
				{
					layer: 'all-data-2',
					opacity: 0
				},
				{
					layer: 'all-data-3',
					opacity: 0
				},
				{
					layer: 'all-data-4',
					opacity: 0
				},
				{
					layer: 'polygons_world',
					opacity: 1
				}
		  ]
		},

//world-text

		{
			id: 'world-text',
			title: '',
			image: '',
			description: 'In this report, ACLED has chosen 10 conflicts that demonstrate how violent political disorder is evolving in places it has festered for decades — such as Afghanistan — as well as in relatively new spaces — such as the United States. Across these 10 cases, observers have often concentrated on active threats and acts of violence, and less so on the latent risks that may produce new agents, modalities, targets, and opportunities for violence. If the past decade offers any lessons, it is that conflict can take many forms, and can arise from a range of local vulnerabilities if stoked. Here, we review 10 situations in which conflict is likely to change and worsen in the coming year, creating new dilemmas for governments and citizens.',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'polygons_world',
					opacity: 1
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_world',
					opacity: 1
				}
		  ]
		},

//world2north-america//

		{
			id: 'world2north-america',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-105.30480, 39.64788],
				zoom: 2.82,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'polygons_world',
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 1
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_world',
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 1
				}
			]
		},

//north-america-intro//

		{
			id: 'north-america-intro',
			title: '<span style="font-size:100px;line-height:100px; color:#white;text-align:left;font-style:bold;"> North America</span> <span style="font-size:40px;line-height:60px;color:white;text-align:left;font-style:italic;background-color:black;"> Ongoing political violence threatens to escalate</span>',
			image: '',
			description: '',
			location: {
				center: [-105.30480, 39.64788],
				zoom: 2.82,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0.8
				}
		  ]
		},

//north-america2mexico//

		{
			id: 'north-america2mexico',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-108.64804, 21.96790],
				zoom: 4.21,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'na-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'na-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0.8
				}
		  ]
		},

//mexico-intro//

		{
			id: 'mexico-intro',
			title: '<span style="font-size:100px; line-height:150px; color:white; text-align:center; font-style:bold;"> Mexico </span><span style="background-color:#5F9ED1; color:black; line-height:50px; text-align:center;"></br>High risk of cartel criminal market developing into an insurgency</span>',
			image: '',
			description: '',
			location: {
				center: [-108.64804, 21.96790],
				zoom: 4.21,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'mex-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'mex-data',
					opacity: 0.8
				}
		  ]
		}
	]
};
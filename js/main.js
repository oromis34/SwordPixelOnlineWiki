async function getJsonData() {
	try {
		const response = await fetch('./public/data.json');
		if (!response.ok) {
			throw new Error(
				`Failed to fetch JSON data: ${response.statusText}`
			);
		}
		return await response.json(); // Parse the response as JSON
	} catch (error) {
		console.error('Error fetching JSON data:', error);
	}

	return {};
}

async function pageLoaded() {
	console.log('CIAONE');

	const jsonData = await getJsonData();
	console.log(jsonData);

	const items = jsonData.items;

	// Retrieve card template
	const mobCardTemplate = document.getElementById('mob_card');
	const mainContainer = document.getElementById('mainContainer');

	for (const floor of jsonData.floors) {
		const title = document.createElement('h2');
		title.textContent = floor.label;

		const cardContainer = document.createElement('div');
		cardContainer.classList.add('cardContainer');

		for (const mob of floor.mobs) {
			const cardClone = mobCardTemplate.cloneNode(true);

			// Access and update placeholders with mob data
			const mobImage = cardClone.querySelector('img');
			mobImage.src = `https://sword-pixel-online.com/assets/items/${mob.image}`;
			mobImage.alt = mob.name;

			cardClone.querySelector('#mob_name').textContent = mob.name;
			cardClone.querySelector('#description').textContent =
				mob.description;

			const dropsContainer = cardClone.querySelector('#drops');
			for (const drop of mob.drops) {
				const dropElement = document.createElement('img');
				dropElement.src = `https://sword-pixel-online.com/assets/items/${items[drop].image}`;
				dropElement.alt = items[drop].name;

				dropsContainer.appendChild(dropElement);
			}

			cardContainer.appendChild(cardClone);
		}

		mainContainer.appendChild(title);
		mainContainer.appendChild(cardContainer);
	}
}

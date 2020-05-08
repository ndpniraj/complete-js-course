const printBio = (name, age, country, height, status) => {
	const text = `Hi, my name is <span>${name}</span>, I am <span>${age}</span> years old. I live in <span>${country}</span>. I am <span>${height}</span> feet tall, and I am a <span>${
		status ? 'HAPPILY MARRIED MAN' : 'HAPPIEST MAN IN THE WORLD'
	}!!!</span>`;

	const heading = document.createElement('h1');
	heading.innerHTML = text;
	document.querySelector('.container').append(heading);
};

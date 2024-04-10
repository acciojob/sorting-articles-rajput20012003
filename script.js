//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function ignoreCertainWords(bandName) {
    const ignoredWords = ['a', 'an', 'the'];
    const words = bandName.split(' ');
    return words.filter(word => !ignoredWords.includes(word.toLowerCase())).join(' ');
}

// Sort the bands while ignoring certain words
const sortedBands = bands.slice().sort((a, b) => ignoreCertainWords(a) > ignoreCertainWords(b) ? 1 : -1);

// Get the ul element to display sorted bands
const bandList = document.getElementById('band');

// Display sorted bands on the webpage
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});


const character = document.getElementById('character');
const clothesContainer = document.getElementById('clothes');

const clothingItems = [
    { name: 'shirt', image: 'shirt.png' },
    { name: 'skirt', image: 'skirt.png' },
    { name: 'hat', image: 'hat.png' },
    { name: 'shoes', image: 'shoes.png' }
];

clothingItems.forEach(item => {
    const img = document.createElement('img');
    img.src = item.image;2
    img.classList.add('clothing-item');
    img.addEventListener('click', () => {
        character.style.backgroundImage = `url('${item.image}')`;
    });
    clothesContainer.appendChild(img);
});
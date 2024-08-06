function toggleFavorite(element) {
    element.classList.toggle('active');
    element.textContent = element.classList.contains('active') ? '❤️' : '♡';
}


// Your toggleFavorite function
function toggleFavorite(element) {
    element.classList.toggle('active');
    element.textContent = element.classList.contains('active') ? '❤️' : '♡';
}

// Add event listeners to filter inputs
document.getElementById('region-filter').addEventListener('change', filterDestinations);
document.getElementById('rating-filter').addEventListener('change', filterDestinations);
document.getElementById('type-filter').addEventListener('change', filterDestinations);
document.getElementById('search-bar').addEventListener('input', filterDestinations);

function filterDestinations() {
    const region = document.getElementById('region-filter').value;
    const rating = document.getElementById('rating-filter').value;
    const type = document.getElementById('type-filter').value.toLowerCase();
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const destinationItems = document.querySelectorAll('.destination-item');

    destinationItems.forEach(item => {
        const itemRegion = item.dataset.region;
        const itemRating = item.dataset.rating;
        const itemType = item.dataset.type;
        const itemName = item.querySelector('h3').textContent.toLowerCase();

        // Check if the item matches the filters
        const matchesRegion = !region || itemRegion === region;
        const matchesRating = !rating || itemRating === rating;
        const matchesType = !type || itemType.includes(type);
        const matchesSearch = !searchQuery || itemName.includes(searchQuery);

        if (matchesRegion && matchesRating && matchesType && matchesSearch) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


document.getElementById('go-button').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const locationFilter = document.getElementById('location-filter').value;
    const ratingFilter = document.getElementById('rating-filter').value;

    const destinationItems = document.querySelectorAll('.destination-item');

    destinationItems.forEach(item => {
        const title = item.querySelector('.destination-info h3').innerText.toLowerCase();
        const location = item.getAttribute('data-location');
        const rating = item.getAttribute('data-rating');

        let matchesSearch = title.includes(searchQuery);
        let matchesLocation = locationFilter === 'all' || location === locationFilter;
        let matchesRating = ratingFilter === 'all' || rating === ratingFilter;

        if (matchesSearch && matchesLocation && matchesRating) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});



// Initial setup: Add data attributes to each destination item
document.addEventListener('DOMContentLoaded', () => {
    const destinations = {
        california: { region: 'west', rating: '4', type: 'beach' },
        missouri: { region: 'midwest', rating: '3', type: 'city' },
        arizona: { region: 'west', rating: '4', type: 'desert' },
        pennsylvania: { region: 'northeast', rating: '4', type: 'historical' },
        tennessee: { region: 'south', rating: '4', type: 'music' },
        florida: { region: 'south', rating: '5', type: 'beach' },
        indiana: { region: 'midwest', rating: '3', type: 'city' },
        louisiana: { region: 'south', rating: '4', type: 'cultural' },
        nevada: { region: 'west', rating: '4', type: 'entertainment' },
        idaho: { region: 'west', rating: '3', type: 'nature' },
        delaware: { region: 'northeast', rating: '3', type: 'coastal' },
        illinois: { region: 'midwest', rating: '4', type: 'city' },
        new_jersey: { region: 'northeast', rating: '4', type: 'coastal' },
        north_carolina: { region: 'south', rating: '4', type: 'mountain' },
        colorado: { region: 'west', rating: '5', type: 'mountain' },
        washington: { region: 'west', rating: '5', type: 'nature' },
        hawaii: { region: 'west', rating: '5', type: 'beach' },
        utah: { region: 'west', rating: '4', type: 'mountain' },
        texas: { region: 'south', rating: '5', type: 'city' },
        montana: { region: 'west', rating: '3', type: 'nature' },
        michigan: { region: 'midwest', rating: '4', type: 'lake' },
        south_dakota: { region: 'midwest', rating: '3', type: 'nature' },
        massachusetts: { region: 'northeast', rating: '4', type: 'historical' },
        vermont: { region: 'northeast', rating: '3', type: 'nature' }
    };

    const destinationItems = document.querySelectorAll('.destination-item');
    destinationItems.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase().replace(/ /g, '_');
        const destination = destinations[itemName];
        if (destination) {
            item.dataset.region = destination.region;
            item.dataset.rating = destination.rating;
            item.dataset.type = destination.type;
        }
    });
    
    // Initial filtering if needed
    filterDestinations();
});

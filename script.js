var mymap = L.map('mapid').setView([38.63, -90.29], 12);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mymap);

var markerMaiLee = L.marker([38.62764246652694, -90.33724251019241]).addTo(mymap);

var markerPorters = L.marker([38.60163534170505, -90.32409078429687]).addTo(mymap);

var markerTacoBuddah = L.marker([38.65418039034189, -90.3293219758069]).addTo(mymap);

var markerAdrianas = L.marker([38.61862848906749, -90.26342192844747]).addTo(mymap);

var markerLonas = L.marker([38.61037958442905, -90.2274242500535]).addTo(mymap);

markerMaiLee.bindPopup("<b>Mai Lee</b><br>Vietnamese").openPopup();

markerPorters.bindPopup("<b>Porter's</b><br>Fried Chicken").openPopup();

markerTacoBuddah.bindPopup("<b>Taco Buddah</b><br>Street Tacos").openPopup();

markerAdrianas.bindPopup("<b>Adraina's on the Hill</b><br>Sicilian Lunch Sandwiches").openPopup();

markerLonas.bindPopup("<b>Lona's Lil Eats</b><br>Vegan-friendly Asian-fusion").openPopup();

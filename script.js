const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')
const dataStore = document.querySelector('.data-store')

navigator.geolocation.watchPosition(
    data => {
        console.log(data)
        //If we have the users speed then update the speed shown
        data.coords.speed ? (speed.textContent = data.coords.speed) : false
        //Rotate the arrow based on the datas heading
        arrow.style.transform = `rotate(${data.coords.heading}deg)`
        //Set the data to be shown to the user:
        var notes =
            'Accuracy (m): ' +
            data.coords.accuracy +
            '\nAltitude (m): ' +
            data.coords.altitude +
            '\nHeading: ' +
            data.coords.heading +
            '\nSpeed (km/h): ' +
            data.coords.speed +
            '\nLat: ' +
            data.coords.latitude +
            '\nLong: ' +
            data.coords.longitude
        dataStore.textContent = notes
    },
    err => {
        console.log(err)
        alert("Hey, you haven't allowed us access to your location.")
    },
)
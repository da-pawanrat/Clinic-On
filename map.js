$(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyATWQVYNfuJ4DMymwiZlW0jSvq0pr1TLe4",
    authDomain: "clinic-on-26919.firebaseapp.com",
    databaseURL: "https://clinic-on-26919-default-rtdb.firebaseio.com",
    projectId: "clinic-on-26919",
    storageBucket: "clinic-on-26919.appspot.com",
    messagingSenderId: "323160925182",
    appId: "1:323160925182:web:ce56f995f084cbc9bc96af",
    measurementId: "G-DC9XJ2BB02"
    };
    
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    var db = firebase.firestore();


    var mymap = L.map('mapid').setView([13.7, 100.57],10);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);

    db.collection("clinicMap").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var marker = L.marker([doc.data().lat,doc.data().long]).addTo(mymap);
            console.log(doc.data().name);
            var clinic = ` 
            <div class="eachClinic">
                <div class="row" style="">
                    <div style="width: 30%;" style="text-align:center; ">
                        
                        <i class="fas fa-clinic-medical" style="font-size:200%; margin-top: 20%; color: white;"></i>
                    </div>
    
                    <div class="col"    style="width: 70%; margin-top: 3%; font-size:120%; text-align: left;">
                        
                        <div class="nameC">${doc.data().name}</div>
                        <div class="nameD">${doc.data().doctor}</div>
                    </div>
                </div>
            </div>
        `

        $('.clinic').append(clinic)
        });
    });

    


    
})

function back() {
    window.location.href = 'index.html'
}
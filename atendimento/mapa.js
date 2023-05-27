document.addEventListener("DOMContentLoaded", function() {
    const map = L.map("map").setView([-23.5505, -46.6333], 7); // Configura a visualização inicial do mapa para o centro do Estado de São Paulo
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);
  
    const citiesData = [
      {
        "name": "São Paulo",
        "location": [-23.5505, -46.6333],
        "color": "red",
        "admin": "Robson Eduardo",
        "adminCompany" : "RegularizeCar",
        "functionCompany" : "CEO",
        "whatsapp": "5511930120657",
        "linkedin": "https://www.linkedin.com/in/robson-eduardo-a1b14b219/",
        "photo": "img/avatar/robson.jpeg"
      },
      {
        "name": "Sorocaba",
        "location": [-23.5255, -47.4611],
        "color": "yellow",
        "admin": "Robson Eduardo",
        "adminCompany" : "RegularizeCar",
        "functionCompany" : "CEO",
        "whatsapp": "5511930120657",
        "linkedin": "https://www.linkedin.com/in/robson-eduardo-a1b14b219/",
        "photo": "img/avatar/robson.jpeg"
      },
      {
        "name": "Ribeirão Preto",
        "location": [-21.1704, -47.8103],
        "color": "green",
        "admin": "Robson Eduardo",
        "adminCompany" : "RegularizeCar",
        "functionCompany" : "CEO",
        "whatsapp": "5511930120657",
        "linkedin": "https://www.linkedin.com/in/robson-eduardo-a1b14b219/",
        "photo": "img/avatar/robson.jpeg"
      },
      // ...
    ];
  
    const citiesLayer = L.layerGroup().addTo(map);
  
    citiesData.forEach(function(city) {
      const marker = L.circleMarker(city.location, { color: city.color, fillColor: city.color, fillOpacity: 0.6 }).addTo(citiesLayer);
      marker.bindPopup(`<b>${city.name}</b><br>${city.admin}`);
  
      // Adicionar a cidade à legenda
      const legendItem = document.createElement("div");
      legendItem.className = "legend-item card";
  
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
  
      const colorSquare = document.createElement("span");
      colorSquare.className = "color-square";
      colorSquare.style.backgroundColor = city.color;
  
      const adminPhoto = document.createElement("img");
      adminPhoto.src = city.photo;
      adminPhoto.alt = `${city.admin}'s photo`;
      adminPhoto.className = "img-fluid";
  
      const adminInfo = document.createElement("div");
      adminInfo.className = "admin-info";
  
      const adminName = document.createElement("h5");
      adminName.innerText = city.name;
  
      const adminText = document.createElement("p");
      adminText.innerText = city.admin;

      const adminCompany = document.createElement("p");
      adminCompany.innerText = city.adminCompany;
      adminCompany.className = "company";

      const contactButton = document.createElement("a");
      contactButton.href = "https:wa.me/" + city.whatsapp;
      contactButton.className = "whatsButton fa-brands fa-whatsapp";
      
      const lkdButton = document.createElement("a");
      lkdButton.href = city.linkedin;
      lkdButton.className = "linkedinButton fa-brands fa-linkedin";
  
      adminInfo.appendChild(adminName);
      adminInfo.appendChild(adminText);
      adminInfo.appendChild(adminCompany);
      adminInfo.appendChild(contactButton);
      adminInfo.appendChild(lkdButton);
      
  
      cardBody.appendChild(colorSquare);
      cardBody.appendChild(adminPhoto);
      cardBody.appendChild(adminInfo);
  
      legendItem.appendChild(cardBody);
      document.getElementById("legend").appendChild(legendItem);
    });
  });
  
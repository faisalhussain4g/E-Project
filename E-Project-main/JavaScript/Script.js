  //  nav bar
  function toggleMenu() {
  let nav = document.getElementById("nav-links");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}
   
   //   metric converter function
      
      function convertLength() {
            let v = Number(lenValue.value);
            let r = 0;
            if (lenType.value === 'inch') r = v * 25.4;
            if (lenType.value === 'feet') r = v * 0.3048;
            if (lenType.value === 'mile') r = v * 1.609;
            lenResult.innerText = 'Result: ' + r;
        }
        function convertArea() {
            let v = Number(areaValue.value);
            let r = areaType.value === 'sqft' ? v * 0.0929 : v * 0.4047;
            areaResult.innerText = 'Result: ' + r;
        }
        function convertVolume() {
            let v = Number(volValue.value);
            let r = volType.value === 'gallon' ? v * 3.785 : v * 0.0283;
            volResult.innerText = 'Result: ' + r;
        }
        function convertMass() {
            let v = Number(massValue.value);
            let r = massType.value === 'pound' ? v * 0.4536 : v * 28.35;
            massResult.innerText = 'Result: ' + r;
        }
        function convertTemp() {
            let v = Number(tempValue.value);
            let r = tempType.value === 'f2c' ? (v - 32) * 5 / 9 : (v * 9 / 5) + 32;
            tempResult.innerText = 'Result: ' + r;
        }

        // frequently Ask Questions

        const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    
    // close others (Google style)
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});

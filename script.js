const fontlar = [
    "Roboto", "Raleway", "Ubuntu", "Indie Flower", "Orbitron", "Fira Code", "Pacifico", "Lobster",
    "Press Start 2P", "Shadows Into Light", "Anton", "Bebas Neue", "Poiret One", "Great Vibes",
    "Quicksand", "Kalam", "Oswald", "Playfair Display", "Nunito",

    "Arial", "Verdana", "Tahoma", "Georgia", "Times New Roman", "Courier New", "Impact", 
    "Comic Sans MS", "Lucida Console", "Trebuchet MS", "Garamond", "Palatino", "Segoe UI",
    "Franklin Gothic Medium", "Gill Sans", "Candara", "Cambria", "Consolas", "Helvetica",
    "Brush Script MT", "Copperplate", "Century Gothic"
  ];
  function randomfont(){
    const metin = document.getElementById("metin").value;
    const random = fontlar[Math.floor(Math.random() * fontlar.length)];
    const sonuc = document.getElementById("sonuc");
    sonuc.innerText = metin;
    sonuc.style.fontFamily = random;
    sonuc.innerText = `${metin} \n(${random})`;
  }
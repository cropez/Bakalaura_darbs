<template>
    <div class="textss">
      <div class="h">
        <h1>Saulkrasti</h1>
      </div>
      <p>
        Saulkrastu novads aizņem 277,8 km² platību un atrodas gar Rīgas jūras līča piekrasti Vidzemes rietumu daļā, Latvijā. Tās administratīvajā teritorijā ietilpst piekrastes mežu josla, kas stiepjas no Lilastes upes un ezera dienvidos līdz Zvejniekciemam ziemeļos un no Lojas un Gaujas austrumos. Robežojas ar Limbažu novadu ziemeļos, ar Siguldas novadu austrumos un ar Ādažu novadu dienvidos. Rajona centrs atrodas Saulkrastu pilsētā.
      </p>
      <div class="image">
        <img class="responsive-image" :src="require('@/assets/img_1.png')" alt="Error" />
      </div>
      <div className="textss">
    <p>Administratīvā teritorija stiepjas 17 kilometrus gar krastu un 20 kilometrus austrumu virzienā līdz Lojas upei. 
      Rajonā dzīvo vairāk nekā 9000 iedzīvotāju, un vasaras sezonā šis skaits ievērojami palielinās tūristu un vietējo dārzkopības kooperatīvu iedzīvotāju pieplūduma dēļ. 
      Attālums no Saulkrastu centra līdz Rīgai ir 45 km, līdz Limbažiem - 47 km, Siguldai - 40 km un Salacgrīvai - 58 km. Rajonu šķērso starptautiskā autoceļš VIA Baltica. 
      Rajonā ietilpst vairākas apdzīvotas vietas un dārzkopības kooperatīvi.</p>
     <p> Saulkrastu piedāvājumā ir dažādi tūrisma objekti, piemēram, unikāls velosipēdu muzejs, kurā apskatāma Latvijā vienīgā antīko velosipēdu kolekcija. 
      Kolekcijā ir arī priekšmeti, kas saistīti ar riteņbraukšanas sportu, biedrībām un velosipēdu ražošanu. Vēl viena atrakcija ir ar Zilo karogu sertificētā pludmale "Centrs", kas pārstāv augstus vides un apkalpošanas standartus.</p><p>
      Apmeklētājiem ir jāizpēta arī Sējas muižas parks un komplekss Sējā, kurā ietilpst muiža, parks, neogotikas ūdenstornis un Sējas milzu laukakmens - viens no lielākajiem Latvijā un Baltijas valstīs. Zvejniekciems ar akmeņaino pludmali ir populārs mākslinieku un fotogrāfu vidū. 
      Skultes osta, pirmā osta Vidzemē, ir lielākā mazā osta Latvijā, kas specializējas kokmateriālu eksportā un atjaunojamo energoresursu pārkraušanā.
      Pārgājiens pa Lojas upi, kurā ir vairākas smilšakmens klintis un alas, ir vēl viena obligāta aktivitāte, atrodoties Murjāņos. Rajons piedāvā vairāk nekā 20 dažādu izmitināšanas veidu, tostarp viesnīcas, viesu mājas, kempingus, brīvdienu kūrortus un telšu vietas. 
      Ir pieejamas daudzas atpūtas aktivitātes, piemēram, ūdens sporta veidi, izjādes ar zirgiem, velosipēdu, kvadraciklu un sporta aprīkojuma noma, mini golfs, peintbols, skeitbords, teniss un saunas.</p>
  </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  .image .responsive-image {
    max-width: 15%;
    height: auto;
    padding-left: 20px;
  }
  .textss {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  @media (max-width: 768px) {
    .image .responsive-image {
      max-width: 80%;
      height: auto;
      align-items: center;
    }
  }
  .alig {
    display: inline-flex;
  }
  .h {
    text-align: center;
  }
  </style>
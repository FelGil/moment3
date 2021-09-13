# moment2

- **vad automatiserings-processens syfte är.**
  Syftet med själva atomatiserings-processen var att göra ett mer förenklat utvecklingsarbete för en webbplats. Allt detta med hjälp av gulp som tagits hem ifrån npmjs.com
  
- **anger om vilka paket och verktyg du använt, och varför du valt just dessa.** 
  Jag anävnder mig av Gulp i detta projekt. 
  De paket som har lagt till är: gulp concat för att sammanföra flera av samma filer till en och samma fil, t.ex alla js-filer flyttade till en main.js fil.
  Gulp-terser togs hem för att komprimera js-filerna så de tog så lite plats som möjligt.
  Gulp-cssnano gör samma fast för css-filerna.
  Gulp-imagemin gör samma för bild-filerna.
  Browser-sync togs hem för att alla ändringar som görs i filerna skall uppdateras i realtid på webb-servern.
  Gulp-sourcemaps lades till för att man skall kunna se orginalsökvägen för de konkatinerade sidorna.
  
- **beskriv systemet du skapat, hur man startar upp det och de tasks som ingår.**
  Öppna upp det här repot på VSC och öppna sedan terminalen (självklart skall node.js och npm vara installerat för att detta skall funka)
  När npm install körs så skapas en ny node_modules fil med allt som behlövs för tasksen. Sen startas gulp i terminalen. När detta körs så gås alla tasks igenom uppifrån och ned.
  Först copyHTML som skickar vidare heml-filerna till pub-katalogen. Efter det körs cssTask där css-filerna konkatineras, minimeras och flyttas till en särskilld main.css mapp i     pub-katalogen. Orginalsökvägen loggas så att man enkelt i inspektera konsollen. jsTask gör samma sak fast för js-filerna. imageTask gör även den nästan samma man ingen ny mapp     skapas för de komprimerade filerna där, Sist så körs watchTask som känner av ifall nåra ändringar görs och sparas i filerna för då uppdateras det direkt på webb-servern så det     blir lite som en live-server funktion.
  
- **Ta även med om du lagt till något extra.**
  Det enda extra som gjordes var att bild-filerna komprimeras men inget mer.

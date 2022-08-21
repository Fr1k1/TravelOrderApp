/*!
* DevExtreme (dx.messages.sl.js)
* Version: 20.2.4
* Build date: Tue Dec 01 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        ba: {
            Yes: "Da",
            No: "Ne",
            Cancel: "Odustani",
            Clear: "Očisti",
            Done: "Potvrdi",
            Loading: "Učitavanje...",
            Select: "Odaberite...",
            Search: "Traži",
            "Back": "Nazad",
            "dxLookup-searchPlaceholder": "Minimalni broj znakova: {0}",
            "dxCollectionContainerWidget-noDataText": "Nema podataka",
            "dxList-pullingDownText": "Povucite dolje za osvježavanje...",
            "dxList-pulledDownText": "Pustite za osvježavanje...",
            "dxList-refreshingText": "Osvježavanje...",
            "dxList-pageLoadingText": "Učitavanje...",
            "dxListEditDecorator-delete": "Obriši",
            "dxList-nextButtonText": "Još",
            "dxScrollView-pullingDownText": "Povucite dolje za osvježavanje...",
            "dxScrollView-pulledDownText": "Pustite za osvježavanje...",
            "dxScrollView-refreshingText": "Osvježavanje...",
            "dxScrollView-reachBottomText": "Učitavanje...",
            "dxSwitch-onText": "Uklj.",
            "dxSwitch-offText": "Isklj.",
            "dxSwitch-switchedOnText": "Uklj.",
            "dxSwitch-switchedOffText": "Isklj.",
            "mobilisisHome": "MOBILISIS... jednostavno po mjeri korisnika!",
            "newUser": "Postanite novi korisnik!",
            "userLogin": "Postojeći korisnici (prijava)",
            "adminLogin": "Administrator sustava (prijava)",
            "aboutUs": "Mobilisis kontakt",
            "address": "Adresa",
            "contact": "Kontakt",
            "followUs": "Pratite nas",
            "companyData": "Podaci o vašoj tvrtki",
            "companyName": "Naziv tvrtke",
            "companyOIB": "OIB",
            "companyNameRequired": "Naziv tvrtke je obavezan",
            "companyOIBRequired": "OIB je obavezan",
            "companyOIBLength": "OIB mora sadržavati 11 znakova",
            "send": "Pošalji",
            "postCodeAndCity": "Poštanski broj i grad",
            "postCode": "Poštanski broj",
            "city": "Grad",
            "country": "Država",
            "userData": "Podaci o korisniku",
            "userDataInfo": "Podaci o administratoru sustava koji će biti kontakt osoba za sve upite i obavijesti od strane Mobilisis sustava",
            "nameAndSurname": "Ime i prezime",
            "userName": "Ime",
            "userSurname": "Prezime",
            "userNameRequired": "Ime je obavezno",
            "userSurnameRequired": "Prezime je obavezno",
            "userEmail": "E-mail",
            "userEmailRequired": "E-mail je obavezan",
            "userEmailIncorrect": "E-mail adresa je neispravna",
            "userPhone": "Kontakt broj",
            "mobile": "Mobitel",
            "phone": "Telefon",
            "comment": "Komentar",
            "additionalData": "Dodatni podaci",
            "additionalDataInfo": "Polje komentara služi za upis svih informacija za koje mislite da bi trebale doći do nas, a nisu sadržane unutar definiranih polja",
            "createDemoUser": "Kreiraj DEMO korisnički račun",
            "createDemoInfo": "Ukoliko želite dobiti pristupne podatke za DEMO portal na kojem možete vidjeti osnovnu funkcionalnost Mobilisis sustava označite ovo polje",
            "objects": "Broj objekata",
            "objectsInfo": "Broj vozila / prikolica / cisterni ili nekog drugog prijevoznog sredstva koje bi željeli opremiti Mobilisis sustavom",
            "probe": "Sonda za gorivo",
            "gps": "Uređaj za praćenje (GPS)",
            "vehicleContact": "Kontakt vozila (input)",
            "engine": "Rad motora (input)",
            "rpm": "Broj okretaja motora (input)",
            "input": "Razni drugi inputi (dizalica, kosilica i sl.)",
            "mobileye": "Mobileye uređaj za sigurniju vožnju",
            "can": "Spajanje na računalo vozila (CAN)",
            "optionsSelect": "Odabir usluga (proizvoda)",
            "optionsSelectInfo": "Odaberite usluge (proizvode) koje biste željeli koristiti na vašim vozilima / prikolicama / cisternama",
            "tablet": "Komunikacijsko navigacijski uređaj (tablet)",
            "dataSaved": "Podaci su uspješno pohranjeni! Uskoro ćemo vam se povratno javiti.",
            "dxCalendar-todayButtonText": "Danas",
            "enterMessTxt": "Unesite tekst poruke",
            "groupUngroup": "Grupiraj / odgrupiraj",
            "open": "Otvori",
            "close": "Zatvori",
            "sending": "Slanje u tijeku...",
            "selectUser": "Odabir korisnika",
            "newMessage": "Nova poruka",
            "openConversation": "Otvori dijalog",
            "predefinedMessage": "Pošalji predefiniranu poruku",
            "errorWritingData": "Greška prilikom zapisa podataka",
            "errorWritingData": "Greška prilikom zapisa podataka",
            "prohibitedSigns": "Korišteni su zabranjeni znakovi",
            "messageSent": "Poruka poslana",
            "youHaveNewMessage": "Imate nove poruke",
            "messages": "Poruke",
            "forms": "Forme",
            "overlays": "Overleji",
            "vehicleList": "Lista vozila",
            "map": "Karta",
            "icons": "Ikone",
            "home": "Početna stranica",
            "closeNotWarnAgain": "Ne upozoravaj me",
            "newMessagesPull": "Učitavanje novih poruka...",
            "messText": "Tekst poruke:",
            "messInfo": "Informacije o poruci",
            "listOfDrives": "Popis vožnji",
            "listOfStops": "Popis stajanja",
            "showRoute": "Prikaz putanje",
            "vehiclePosition": "Pozicija vozila (karta)",
            "exit": "Izlaz",
            "timeFrom": "Vrijeme od",
            "timeTo": "Vrijeme do",
            "dateFrom": "Datum od",
            "dateTo": "Datum do",
            "datetimeForMap": "Period za prikaz putanje",
            "loadRoute": "Učitavanje putanje, molimo pričekajte...",
            "noRoute": "Nema putanje za odabrani period i vozilo",
            "about": "O aplikaciji",
            "showTextWithIcon": "Prikaz teksta uz ikonu vozila",
            "textWithIcon": "Tekst uz ikonu vozila",
            "reg": "Registracija",
            "vehName": "Naziv vozila",
            "accSettings": "Prema postavkama",
            "speed": "Brzina",
            "settings": "Postavke",
            "iconOnMap": "Prikaz ikone vozila",
            "messPopup": "Obavijest o novoj poruci (skočni prozor)",
            "session": "Sesija",
            "sessionExpired": "Sesija je istekla, logirajte se ponovno.",
            "allRights": "Sva prava pridržana",
            "usingBrowser": "Preporučujemo korištenje preglednika",
            "or": "ili",
            "startDrive": "Početak vožnje",
            "startDestination": "Polazište",
            "counterStart": "Brojčanik početak (km)",
            "endDrive": "Kraj vožnje",
            "endDestination": "Odredište",
            "counterEnd": "Brojčanik kraj (km)",
            "tripKm": "Prijeđeni put (km)",
            "durationHHMM": "Trajanje (hh:mm)",
            "driver": "Vozač",
            "driveType": "Tip vožnje",
            "undefined": "Nedefinirano",
            "privateDrive": "Privatna vožnja",
            "nonPrivateDrive": "Službena vožnja",
            "locoDrive": "Loko vožnja",
            "noDataSelectVehTime": "Nema podataka, odaberite drugo vozilo ili promijenite vremenski period",
            "loadingData": "Učitavanje podataka u tijeku, molimo pričekajte...",
            "reportPeriod": "Vremenski period (OD-DO)",
            "selectVehicle": "Odaberite vozilo",
            "showHideAllData": "Prikaži/sakrij sve podatke",
            "exportPDF": "Izvoz podatak - PDF",
            "exportExcel": "Izvoz podataka - Excel",
            "selectPeriod": "Odaberite period",
            "reports": "Izvještaji",
            "startStop": "Početak stajanja",
            "endStop": "Kraj stajanja",
            "counterKM": "Brojčanik (km)",
            "location": "Lokacija",
            "loadRoute2": "Učitaj putanju",
            "noDataSelectVeh": "Nema podataka, vozilo nije odabrano - odaberite vozilo!",
            "currentVehLocReport": "Izvještaj u kojemu je prikazana trenutna lokacija svih vozila te kilometraža, vrijeme vožnje, maksimalna i trenutna brzina za tekući dan",
            "listOfDrivesReport": "Izvještaj prikazuje popis vožnji u odabranom periodu, a na izvještaju su vidljivi podaci: početak i završetak vožnje, polazište i odredište, stanje brojčanika na početku i završetku vožnje, prijeđeni put (km), trajanje vožnje, vozač i tip vožnje",
            "listOfStopsReport": "U izvještaju popisa stajanja vidljivi su podaci o početku i završetku stajanja, kilometraži na početku stajanja, te trajanju i lokaciji stajanja",
            "statisticDataReport": "Izvještaj u kojemu su prikazani najkorisniji statistički podaci, kao što su: ukupna vožnja, vožnja izvan radnog vremena, prosječna i maksimalna brzina, početak i kraj vožnje, broj stajanja i sl.",
            "currentVehicleLocation": "Trenutna lokacija vozila",
            "statVehicleData": "Statistički podaci vozila",
            "selectVehicleInfo": "Odaberite vozilo!",
            "vehicle": "Vozilo",
            "kmToday": "Današnja kilometraža (km)",
            "kmAll": "Ukupna kilometraža (km)",
            "driveHHMM": "Vožnja (hh:mm)",
            "currentSpeed": "Trenutna brzina (km/h)",
            "maxSpeed": "Max. brzina (km/h)",
            "lastData": "Zadnji podatak",
            "date": "Datum",
            "overDriveKm": "Vožnja u prekoračenju (km)",
            "overDriveHHMM": "Vožnja u prekoračenju (hh:mm)",
            "avgSpeed": "Prosječna brzina (km/h)",
            "maxSpeed": "Max. brzina (km/h)",
            "stops": "Zaustavljanja",
            "summaryData": "Sumarni prikaz podataka",
            "here": "Ovdje!",
            "smsPredefinedTxt1": "Oprosti, propustio/la sam tvoj poziv.",
            "smsPredefinedTxt2": "Kasnim, ali tu sam za nekoliko min.",
            "smsPredefinedTxt3": "Kako si?",
            "smsPredefinedTxt4": "Što ima?",
            "smsPredefinedTxt5": "Gdje si?",
            "smsPredefinedTxt6": "Nazovi me kad dobiješ ovu poruku.",
            "smsPredefinedTxt7": "Kada ćemo se naći?",
            "smsPredefinedTxt8": "Čujemo se uskoro.",
            "smsPredefinedTxt9": "Koji je broj?",
            "smsPredefinedTxt10": "Kada završavaš s utovarom?",
            "smsPredefinedTxt11": "Kada završavaš s istovarom?",
            "predefinedMessage": "Predefinirana poruka",
            "faq": "Česta pitanja",
            "faq_markers_and_icons": "Koje je značenje ikona (markera) brzine i stajanja na karti",
            "stop_icons": "Ikone (markeri) stajanja",
            "stop_longer_60min": "Stajanje duže od 60 minuta",
            "stop_15_60min": "Stajanje duže od 15 minuta i kraće od 60 minuta",
            "stop15min": "Stajanje kraće od 15 minuta",
            "speed_icons": "Ikone (markeri) brzina",
            "speed_100kmh": "Brzina veća od 100 km/h",
            "speed_80_100kmh": "Brzina veća od 80 km/h i manja od 100 km/h",
            "speed_50_80kmh": "Brzina veća od 50 km/h i manja od 80 km/h",
            "speed_50kmh": "Brzina manja od 50 km/h",
            "icons_and_markers_note": "NAPOMENA: strelice na ikonama (markerima) brzina označavaju smjer kretanja vozila, a pritiskom na ikonu brzine ili stajanja otvorit će se prozor s detaljima",
            "map_route_faq": "Kako vidjeti putanju vozila na karti s pripadajućim markerima brzine i stajanja",
            "way_": "Način",
            "select_in_main_menu": "Odaberite u glavnom izborniku",
            "after_that_click1": "nakon toga kliknite na željenu stavku (vozilo) prilikom čega će se otvoriti djalog u kojem je potrebno kliknuti na gumb",
            "after_taht_click2": "nakon toga napravite dvoklik na ikonu vozila za koje želite vidjeti putanju",
            "map_route_faq_note1": "Ukoliko za odabrani period i vozilo nema putanje sustav će Vas o tome obavijestiti porukom na vrhu/dnu ekrana",
            "map_route_faq_note2": "Ukoliko želite promijeniti vremenski period za koji želite vidjeti putanju potrebno je pritisnuti na ikonu",
            "map_route_faq_note3": "te odabrati vremenski period nakon čega će se putanja automatski učitati",
            "map_route_faq_example": "Primjer karte s vozilima i učitanom putanjom odabranog vozila",
            "messSound": "Obavijest o novoj poruci (zvučni signal)",
            "messSoundTxt1": "Ukoliko želite da Vas sustav prilikom primitka nove poruke obavijesti zvučnim signalom pritisnite tipku pokreni (play)",
            "faqNewMessageQuestion": "Kako mogu uključiti/isključiti skočni prozor i zvučni signal prilikom primitka nove poruke",
            "faqNewMessageTxt1": "Ova opcija automatski je uključena, a ukoliko ju želite isključiti potrebno je u glavnom izborniku ući u",
            "faqNewMessageTxt2": "i u dijalogu",
            "faqNewMessageTxt3": "promijeniti vrijednost",
            "faqNewMessageTxt4": "i na dnu pod dijalogom vezanom uz poruke potrebno je pritisnuti tipku pokreni (play), a nakon toga se promjena može vršiti pod dijalogom",
            "showRoute2": "Prikaz putanje",
            "driverNotSet": "Vozač nije postavljen",
            "navigationOff": "Navigacija ugašena",
            "navigationunavailable": "Podaci o navigaciji nedostupni",
            "navigationOnUserOn": "Navigacija upaljena i vozač prijavljen",
            "navigationOnUserOff": "Navigacija upaljena, vozač odjavljen",
            "from": "od",
            "suspended1": "Privremeno suspendirano",
            "suspended2": "Trajno suspendirano",
            "notEmbed": "Nije ugrađeno",
            "drives": "Vozi",
            "stopped": "Zaustavljen",
            "unavailable": "Nedostupan",
            "icon": "Ikona",
            "sector": "Sektor",
            "time": "Vrijeme",
            "connectedBefore": "Konektiran prije",
            "GPSbefore": "GPS podatak od prije",
            "voltage": "Napon akumulatora",
            "tillLastUpdate": "do zadnje obrade",
            "loadMapAndVeh": "Inicijalno učitavanje karte i vozila...",
            "logout": "Odjava",
            "statistic": "Statistika",
            "driveDDHHMM": "Vrijeme vožnje",
            "firstEntrance": "Prvi ulazak",
            "lastExit": "Zadnji izlazak",
            "tripKm2": "Prijeđeni put",
            "note": "Napomena",
            "vectorMapNote": "Države kroz koje su prošla vaša vozila označene su zelenom bojom, za dodatne detalje pritisnite na željenu državu dok se ne pojavi okvir s detaljima",
            "seconds": "sekundi",
            "refreshInterval": "Interval osvježavanja podataka",
            "every": "Svakih",
            "welcome": "Dobrodošli",
            "aboutUs": "O nama (kontakt)",
            "address": "Adresa",
            "contact": "Kontakt",
            "classicMap": "Klasični stil",
            "darkBlueMap": "Tamno plavi stil",
            "lightDarkMap": "Svjetlo crni stil",
            "lightGrayMap": "Svjetlo sivi stil",
            "ownMapStyle": "Kreiraj vlastiti stil",
            "ownMapStyleText": "Kreirajte vlastiti stil karte, kopirajte JSON kod s Google Style Wizard stranice (gumb Show JSON u donjem desnom dijelu stranice) i zalijepite ga u tekstualno polje ispod te naposljetku stisnite spremi - pritisnite",
            "ownMapStyleText2": "Ovdje zalijepite kod",
            "save": "Spremi",
            "customerDesignedSolutions": "...jednostavno po mjeri korisnika!",
            "defaultTemplate": "Postavi kao zadani predložak",
            "savedSuccessfully": "Uspješno spremljeno",
            "confirmMapStyle": "Trenutni izgled karte (boja, ikone vozila i tekst uz vozilo) postavi kao moj zadani predložak?",
            "examples": "primjeri",
            "browser": "Preglednici",
            "faqBrowser1": "S kojim preglednicima je rad aplikacije najoptimalniji?",
            "faqBrowser2": "Podržani su sljedeći desktop preglednici",
            "faqBrowser3": "Podržani su standardni preglednici integrirani u mobilne operativne sustave",
            "twoLastVersions": "zadnje dvije verzije",
            "welcomeMessage": "Poruka dobrodošlice",
            "welcomeMessage1": "dobrodšli na naš novi redizajnirani mobilni portal!<br><br>Tijekom prethodnih godinu dana primili smo mnogo prijedloga, pohvala, ali i kritika te smo na temelju toga napravili novu verziju mobilnog portala. Osvježeni izgled prilagođen svakom operativnom sustavu omogućit će Vam lakše snalaženje i navigiranje unutar portala, a ujedno smo optimizirali sve dijelove te ubrzali rad svih komponenti. Osnovne upute nalaze se pod izbornikom Česta pitanja, a mi smo i dalje otvoreni za sve prijedloge, pohvale i kritike <a terget='_blank' href='mailto:info@mobilisis.hr'>info@mobilisis.hr</a><br><br>Vaš Mobilisis tim!",
            "dear": "Poštovani",
            "Mobilisis": "Mobilisis na dlanu",
            "confirmLogout": "Želite li se odjaviti?",
            "faqBrowsersNote": "NAPOMENA: za sve ostale preglednike i operativne sustave ne pružamo podršku, a ujedno postoji mogućnost da određeni dijelovi aplikacije neće raditi korektno",
            "errorOccured": "Dogodila se greška u radu aplikacije! Nakon ovog postoji mogućnost neispravnog rada aplikacije (ako je tako ponovno se prijavite), a ukoliko se greška ponovi kontaktirajte našu službu za korisnike.",
            "duration": "Trajanje",
            "From": "Od",
            "To": "Do",
            "statAllVehicles": "Statistika cijelog voznog parka",
            "kmAll2": "Ukupna kilometraža",
            "driveAll": "Ukupno vrijeme vožnje",
            "activeVehs": "Broj aktivnih vozila",
            "extreams": "Ekstremi (3 vozila)",
            "maxKmVehs": "Vozila s najvećom kilometražom",
            "maxSpeedVehs": "Vozila s najvećom maksimalnom brzinom",
            "drivers": "vozača",
            "avgSpeedVehs": "Vozila s najvećom prosječnom brzinom",
            "maxKmVehsDaily": "Vozila s najvećom kilometražom unutar jednog dana",
            "activeUsers": "Broj aktivnih korisnika",
            "showRouteMap": "Prikaz putanje (karta)",
            "block1": "Blokada",
            "block2": "Poštovani,<br><br>korištenje portala Vam je trenutno onemogućeno zbog neplaćenih računa.<br><br>Vaš Mobilisis tim!",
            "vehicleStats": "Statistički podaci",
            "notifications": "Obavijesti",
            "newNotifications": "Nove obavijesti",
            "readedNotifications": "Pročitane obavijesti",
            "newNotificationsNo": "Nema novih obavijesti",
            "readedNotificationsNo": "Nema pročitanih obavijesti",
            "readMore": "Pročitaj više...",
            "notifications2": "Imate novu obavijest",
            "notifications3": "Želite li ju pročitati?",
            "incorrectCode": "Kod nije ispravan!",
            "dxCollectionWidget-noDataText": "Nema podataka za prikaz",
            "validation-required": "Potrebno",
            "validation-required-formatted": "{0} je potrebno",
            "validation-numeric": "Vrijednost mora biti broj",
            "validation-numeric-formatted": "{0} mora biti broj",
            "validation-range": "Vrijednost nije u granicama",
            "validation-range-formatted": "{0} je izvan dosega",
            "validation-stringLength": "Dužina vrijednosti je kriva",
            "validation-stringLength-formatted": "Dužina {0} je kriva",
            "validation-custom": "Pogrešna vrijednost",
            "validation-custom-formatted": "{0} je pogrešno",
            "validation-compare": "Vrijednost ne odgovara",
            "validation-compare-formatted": "{0} ne odgovara",
            "validation-pattern": "Vrijednost ne odgovara uzorku",
            "validation-pattern-formatted": "{0} ne odgovara uzorku",
            "validation-email": "Pogrešna e-mail adresa",
            "validation-email-formatted": "{0} je pogrešna",
            "validation-mask": "Vrijednost je pogrešna",
            "dxList-selectAll": "Označi sve",
            "dxListEditDecorator-more": "Više",
            "dxDateBox-simulatedDataPickerTitleTime": "Odredite vrijeme",
            "dxDateBox-simulatedDataPickerTitleDate": "Odredite datum",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Odaberite datum i vrijeme",
            "dxDateBox-validation-datetime": "Vrijednost mora biti datum i vrijeme",
            "dxFileUploader-selectFile": "Odaberite datoteku",
            "dxFileUploader-dropFile": "ili pustite datoteku ovdje",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Pošalji",
            "dxFileUploader-uploaded": "Poslano",
            "dxFileUploader-readyToUpload": "Spremno za slanje",
            "dxFileUploader-uploadFailedMessage": "Slanje nije uspjelo",
            "dxRangeSlider-ariaFrom": "Od",
            "dxRangeSlider-ariaTill": "Do",
            "dxForm-optionalMark": "opcionalno",
            "dxForm-requiredMessage": "{0} je potrebno",
            "dxNumberBox-invalidValueMessage": "Vrijednost mora biti broj",
            "dxDataGrid-exporting": "Izvoz podataka...",
            "dxDataGrid-noDataText": "Nema podataka",
            "dxDataGrid-columnChooserTitle": "Odabir kolona",
            "dxDataGrid-columnChooserEmptyText": "Povuci kolonu ovdje za skrivanje",
            "dxDataGrid-groupContinuesMessage": "Nastavlja se na idućoj stranici",
            "dxDataGrid-groupContinuedMessage": "Nastavak s prijašnje stranice",
            "dxDataGrid-groupHeaderText": "Grupiraj po ovoj koloni",
            "dxDataGrid-ungroupHeaderText": "Odgrupiraj",
            "dxDataGrid-ungroupAllText": "Odgrupiraj sve",
            "dxDataGrid-editingEditRow": "Uredi",
            "dxDataGrid-editingSaveRowChanges": "Spremi",
            "dxDataGrid-editingCancelRowChanges": "Odustani",
            "dxDataGrid-editingDeleteRow": "Izbriši",
            "dxDataGrid-editingUndeleteRow": "Vrati",
            "dxDataGrid-editingConfirmDeleteMessage": "Želite li obrisati zapis?",
            "dxDataGrid-validationCancelChanges": "Ukloni promjene",
            "dxDataGrid-groupPanelEmptyText": "Dovucite kolonu po kojoj želite grupirati",
            "dxDataGrid-searchPanelPlaceholder": "Traži...",
            "dxDataGrid-filterRowShowAllText": "(Sve)",
            "dxDataGrid-filterRowResetOperationText": "Reset",
            "dxDataGrid-filterRowOperationEquals": "Jednako",
            "dxDataGrid-filterRowOperationNotEquals": "Različito",
            "dxDataGrid-filterRowOperationLess": "Manje od",
            "dxDataGrid-filterRowOperationLessOrEquals": "Manje ili jednako od",
            "dxDataGrid-filterRowOperationGreater": "Veće od",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Veće ili jednako od",
            "dxDataGrid-filterRowOperationStartsWith": "Počnje s",
            "dxDataGrid-filterRowOperationContains": "Sadrži",
            "dxDataGrid-filterRowOperationNotContains": "Ne sadrži",
            "dxDataGrid-filterRowOperationEndsWith": "Završava s",
            "dxDataGrid-filterRowOperationBetween": "Između",
            "dxDataGrid-filterRowOperationBetweenStartText": "Početak",
            "dxDataGrid-filterRowOperationBetweenEndText": "Završetak",
            "dxDataGrid-applyFilterText": "Primjeni filter",
            "dxDataGrid-trueText": "Označeno",
            "dxDataGrid-falseText": "Neoznačeno",
            "dxDataGrid-sortingAscendingText": "Sortiraj uzlazno",
            "dxDataGrid-sortingDescendingText": "Sortiraj silazno",
            "dxDataGrid-sortingClearText": "Ukloni sortiranje",
            "dxDataGrid-editingSaveAllChanges": "Spremanje promjene",
            "dxDataGrid-editingCancelAllChanges": "Izbriši promjene",
            "dxDataGrid-editingAddRow": "Dodaj red",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Najmanje {1} je {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Najviše {1} je {0}",
            "dxDataGrid-summaryAvg": "Ø: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Prosjek {1} je {0}",
            "dxDataGrid-summarySum": "Zbroj: {0}",
            "dxDataGrid-summarySumOtherColumn": "Zbroj od {1} je {0}",
            "dxDataGrid-summaryCount": "Broj: {0}",
            "dxDataGrid-columnFixingFix": "Fiksiraj",
            "dxDataGrid-columnFixingUnfix": "Otpusti",
            "dxDataGrid-columnFixingLeftPosition": "Lijevo",
            "dxDataGrid-columnFixingRightPosition": "Desno",
            "dxDataGrid-exportTo": "Izvoz",
            "dxDataGrid-exportToExcel": "Izvezi u Excel",
            "dxDataGrid-excelFormat": "Excel datoteka",
            "dxDataGrid-selectedRows": "Označeni redovi",
            "dxDataGrid-exportSelectedRows": "Izvezi označene redove",
            "dxDataGrid-exportAll": "Izvezi sve podatke",
            "dxDataGrid-headerFilterEmptyValue": "(Prazni)",
            "dxDataGrid-headerFilterOK": "Primjeni",
            "dxDataGrid-headerFilterCancel": "Odustani",
            "dxDataGrid-ariaColumn": "Kolona",
            "dxDataGrid-ariaValue": "Vrijednost",
            "dxDataGrid-ariaFilterCell": "Filtriraj ćeliju",
            "dxDataGrid-ariaCollapse": "Smanji",
            "dxDataGrid-ariaExpand": "Prošiti",
            "dxDataGrid-ariaDataGrid": "Tablica",
            "dxDataGrid-ariaSearchInGrid": "Traži u tablici",
            "dxDataGrid-ariaSelectAll": "Označi sve",
            "dxDataGrid-ariaSelectRow": "Označi red",
            "dxPager-infoText": "Stranica {0} od {1} ({2} stavki)",
            "dxPager-pagesCountText": "od",
            "dxPivotGrid-grandTotal": "Ukupna suma",
            "dxPivotGrid-total": "{0} Total",
            "dxPivotGrid-fieldChooserTitle": "Field Chooser",
            "dxPivotGrid-showFieldChooser": "Show Field Chooser",
            "dxPivotGrid-expandAll": "Expand All",
            "dxPivotGrid-collapseAll": "Collapse All",
            "dxPivotGrid-sortColumnBySummary": 'Sort "{0}" by This Column',
            "dxPivotGrid-sortRowBySummary": 'Sort "{0}" by This Row',
            "dxPivotGrid-removeAllSorting": "Remove All Sorting",
            "dxPivotGrid-rowFields": "Row Fields",
            "dxPivotGrid-columnFields": "Column Fields",
            "dxPivotGrid-dataFields": "Data Fields",
            "dxPivotGrid-filterFields": "Filter Fields",
            "dxPivotGrid-allFields": "All Fields",
            "dxPivotGrid-columnFieldArea": "Drop Column Fields Here",
            "dxPivotGrid-dataFieldArea": "Drop Data Fields Here",
            "dxPivotGrid-rowFieldArea": "Drop Row Fields Here",
            "dxPivotGrid-filterFieldArea": "Drop Filter Fields Here",
            "dxScheduler-editorLabelTitle": "Subject",
            "dxScheduler-editorLabelStartDate": "Start Date",
            "dxScheduler-editorLabelEndDate": "End Date",
            "dxScheduler-editorLabelDescription": "Description",
            "dxScheduler-editorLabelRecurrence": "Repeat",
            "dxScheduler-openAppointment": "Open appointment",
            "dxScheduler-recurrenceNever": "Never",
            "dxScheduler-recurrenceDaily": "Daily",
            "dxScheduler-recurrenceWeekly": "Weekly",
            "dxScheduler-recurrenceMonthly": "Monthly",
            "dxScheduler-recurrenceYearly": "Yearly",
            "dxScheduler-recurrenceEvery": "Every",
            "dxScheduler-recurrenceEnd": "End repeat",
            "dxScheduler-recurrenceAfter": "After",
            "dxScheduler-recurrenceOn": "On",
            "dxScheduler-recurrenceRepeatDaily": "day(s)",
            "dxScheduler-recurrenceRepeatWeekly": "week(s)",
            "dxScheduler-recurrenceRepeatMonthly": "month(s)",
            "dxScheduler-recurrenceRepeatYearly": "year(s)",
            "dxScheduler-switcherDay": "Dan",
            "dxScheduler-switcherWeek": "Tjedan",
            "dxScheduler-switcherWorkWeek": "Work week",
            "dxScheduler-switcherMonth": "Mjesec",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "Timeline Day",
            "dxScheduler-switcherTimelineWeek": "Timeline Week",
            "dxScheduler-switcherTimelineWorkWeek": "Timeline Work Week",
            "dxScheduler-switcherTimelineMonth": "Timeline Month",
            "dxScheduler-recurrenceRepeatOnDate": "on date",
            "dxScheduler-recurrenceRepeatCount": "occurrence(s)",
            "dxScheduler-allDay": "All day",
            "dxScheduler-confirmRecurrenceEditMessage": "Do you want to edit only this appointment or the whole series?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Do you want to delete only this appointment or the whole series?",
            "dxScheduler-confirmRecurrenceEditSeries": "Edit series",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Delete series",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Edit appointment",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Delete appointment",
            "dxScheduler-noTimezoneTitle": "No timezone",
            "dxCalendar-ariaWidgetName": "Kalendar",
            "dxColorView-ariaRed": "Red",
            "dxColorView-ariaGreen": "Green",
            "dxColorView-ariaBlue": "Blue",
            "dxColorView-ariaAlpha": "Transparency",
            "dxColorView-ariaHex": "Color code",
            "vizExport-printingButtonText": "Print",
            "vizExport-titleMenuText": "Exporting/Printing",
            "vizExport-exportButtonText": "{0} file",
            "dxDataGrid-filterPanelCreateFilter": "Kreiraj filter",
            "dxDataGrid-filterBuilderPopupTitle": "Filter kreator",
            "dxDataGrid-filterPanelClearFilter": "Ukloni",
            "dxDataGrid-filterPanelFilterEnabledHint": "Omogući filter",
            "dxFilterBuilder-and": "I",
            "dxFilterBuilder-or": "Ili",
            "dxFilterBuilder-notAnd": "Ne I",
            "dxFilterBuilder-notOr": "Ne ili",
            "dxFilterBuilder-addCondition": "Dodaj uvjet",
            "dxFilterBuilder-addGroup": "Dodaj grupu",
            "dxFilterBuilder-enterValueText": "<unesite vrijednost>",
            "dxFilterBuilder-filterOperationEquals": "Jednako",
            "dxFilterBuilder-filterOperationNotEquals": "Različit od",
            "dxFilterBuilder-filterOperationLess": "Manje od",
            "dxFilterBuilder-filterOperationLessOrEquals": "Manje ili jednako od",
            "dxFilterBuilder-filterOperationGreater": "Veće od",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Veće ili jednako od",
            "dxFilterBuilder-filterOperationStartsWith": "Započinje s",
            "dxFilterBuilder-filterOperationContains": "Sadrži",
            "dxFilterBuilder-filterOperationNotContains": "Ne sadrži",
            "dxFilterBuilder-filterOperationEndsWith": "Završava s",
            "dxFilterBuilder-filterOperationIsBlank": "Je prazno",
            "dxFilterBuilder-filterOperationIsNotBlank": "Nije prazno",
            "dxFilterBuilder-filterOperationBetween": "Između",
            "dxFilterBuilder-filterOperationAnyOf": "Je neki od",
            "dxFilterBuilder-filterOperationNoneOf": "Nije neki od"
        }
    })
});

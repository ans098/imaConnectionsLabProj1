// console.log("works");

let countryName, countryCapital, countryMoney, countryPop, countryReigon, countryWeather, countryWeatherDesc, x, y, pic, myCanvas;
let italy = document.querySelector("#italy");
let australia = document.querySelector("#australia");
let france = document.querySelector("#france");
let spain = document.querySelector("#spain");
let japan = document.querySelector("#japan");
let germany = document.querySelector("#germany");
let countryFlag = document.querySelectorAll(".countryFlag");
let info = document.querySelector("#info");
let moreFacts = document.querySelector("#moreFacts");
let translated = document.querySelector("#translated");
let itaButton = false;
let spaButton = false;
let fraButton = false;
let jpnButton = false;
let ausButton = false;
let gerButton = false;

//p5 functions-------------------------------------------
//main functions pulled from https://p5js.org/examples/image-pointillism.html
function preload() {
    imgIta = loadImage('assets/italy.png');
    imgSpa = loadImage('assets/spain.png');
    imgFra = loadImage('assets/france.png');
    imgJpn = loadImage('assets/japan.png');
    imgAus = loadImage('assets/australia.png');
    imgGer = loadImage('assets/germany.png');
};

italy.addEventListener('click', function () {
    console.log("works");
    clear();
    itaButton = true;
    spaButton = false;
    fraButton = false;
    jpnButton = false;
    ausButton = false;
    gerButton = false;
});

spain.addEventListener('click', function () {
    console.log("works");
    clear();
    spaButton = true;
    itaButton = false;
    fraButton = false;
    jpnButton = false;
    ausButton = false;
    gerButton = false;
});

france.addEventListener('click', function () {
    console.log("works");
    clear();
    spaButton = false;
    itaButton = false;
    fraButton = true;
    jpnButton = false;
    ausButton = false;
    gerButton = false;
});

japan.addEventListener('click', function () {
    console.log("works");
    clear();
    spaButton = false;
    itaButton = false;
    fraButton = false;
    jpnButton = true;
    ausButton = false;
    gerButton = false;
});

australia.addEventListener('click', function () {
    console.log("works");
    clear();
    spaButton = false;
    itaButton = false;
    fraButton = false;
    jpnButton = false;
    ausButton = true;
    gerButton = false;
});

germany.addEventListener('click', function () {
    console.log("works");
    clear();
    spaButton = false;
    itaButton = false;
    fraButton = false;
    jpnButton = false;
    ausButton = false;
    gerButton = true;
});

function setup() {
    myCanvas = createCanvas(940, window.innerHeight);
    myCanvas.parent('canvasContainer');
    // background(220);
    console.log(window.innerHeight, window.innerWidth);
    imageMode(CENTER);
    noStroke();
    imgIta.resize(940,window.innerHeight);
    imgSpa.resize(940,window.innerHeight);
    imgFra.resize(940,window.innerHeight);
    imgGer.resize(940,window.innerHeight);
    imgAus.resize(940,window.innerHeight);
    imgJpn.resize(940,window.innerHeight);
    imgIta.loadPixels();
    imgSpa.loadPixels();
    imgFra.loadPixels();
    imgAus.loadPixels();
    imgJpn.loadPixels();
    imgGer.loadPixels();
};

function draw() {
    // console.log("italy clicked");

    if (itaButton) {
        x = floor(random(imgIta.width));
        y = floor(random(imgIta.height));
        pic = imgIta.get(x, y);
        fill(pic, 128);
        ellipse(x, y, 30, 30);
    }

    if (spaButton) {
        x = floor(random(imgSpa.width));
        y = floor(random(imgSpa.height));
        pic = imgSpa.get(x, y);
        fill(pic, 128);
        ellipse(x, y, 30, 30);
    }

    if (ausButton) {
        x = floor(random(imgAus.width));
        y = floor(random(imgAus.height));
        pic = imgAus.get(x, y);
        fill(pic, 128);
        ellipse(x, y, 30, 30);
    }

    if (fraButton) {
        x = floor(random(imgFra.width));
        y = floor(random(imgFra.height));
        pic = imgFra.get(x, y);
        fill(pic, 128);
        ellipse(x, y, 30, 30);
    }

    if (gerButton) {
        x = floor(random(imgGer.width));
        y = floor(random(imgGer.height));
        pic = imgGer.get(x, y);
        fill(pic, 128);
        ellipse(x, y, 30, 30);
    }

    if (jpnButton) {
        x = floor(random(imgJpn.width));
        y = floor(random(imgJpn.height));
        pic = imgJpn.get(x, y);
        fill(pic, 128);
        ellipse(x, y, 30, 30);
    }
};

//api loading--------------------------------------------
window.addEventListener('load', function () {
    console.log("Page has loaded");
    //used promise.all reference from https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/
    Promise.all([
        fetch("http://api.countrylayer.com/v2/all?access_key=f2b998dba8f69b0441ab275dbe421037"),
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=a1c6dba0f93e12339dddbc57d0dc33e5"),
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=a1c6dba0f93e12339dddbc57d0dc33e5"),
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Tokoyo&appid=a1c6dba0f93e12339dddbc57d0dc33e5"),
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Canberra&appid=a1c6dba0f93e12339dddbc57d0dc33e5"),
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Rome&appid=a1c6dba0f93e12339dddbc57d0dc33e5"),
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=a1c6dba0f93e12339dddbc57d0dc33e5")
    ])
        .then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }))
                .then(function (JSONresult) {
                    // console.log(JSONresult);
                    //japan
                    japan.onclick = function () {
                        info.style.visibility = "visible";
                        moreFacts.style.visibility = "visible";
                        translated.style.visibility = "visible";
                        countryName = JSONresult['0']['114']['name'];
                        countryCapital = JSONresult['0']['114']['capital'];
                        countryReigon = JSONresult['0']['114']['region'];
                        population = JSONresult['0']['114']['population'];
                        countryPop = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //regular expression to add commas in the number: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
                        countryMoney = JSONresult['0']['114']['currencies']['0']['name'];
                        let tempK = JSONresult['3']['main']['temp']
                        let tempF = Math.ceil((tempK - 273.15) * (9 / 5) + 32);
                        countryWeather = tempF;
                        countryWeatherDesc = JSONresult['3']['weather']['0']['description'];

                        info.innerHTML = "In " + countryName + ", the capital is " + countryCapital + " and is located in " + countryReigon + " <br>The population is " + countryPop + " <br>The currency is " + countryMoney + " <br>Currently the weather in " + countryCapital + " is " + countryWeather + "F with " + countryWeatherDesc;

                        moreFacts.innerHTML = "<strong>More Facts</strong><br><ul><li>There are very few trash cans on the street, but there is very little litter in Japan. Hold onto your trash until you find a trash can, typically at a convience store.</li><li>All major signage at train stations are in Japaneseand Engligh. Often resturants have English pictures and hotel staff usually speak some English.</li><li>Vending machines are really everywhere. In large cities, like Tokoyo and Osaka, vending machines can be found on almost every city block selling everything you can think of.</li><li> Manners are a big deal. Instead of pointing, use your entire hand. Don't eat while walking. Avoid physical touch unless you know the other person is comfortable with it.</li><li>Don't tip as it can be seen as mildly rude at some places. </li><li>Practice your chopstick skills as forks are rare.</li><li>Japan has some excellent skiing so try and go in the winter to check out the slopes.</li><li>Take your shoes off when entering guesthouses, homes, holy sites and some stores. Usually there are some indoor slippers that you can wear once you remove your shoes</li> </ul>";

                        translated.innerHTML = "<strong>Good Words to Know</strong><br><ul><li>Hello = Konnichiwa</li><li>Good Morning = Ohayo gozaimasu</li><li>Thank you = Arigato gozaimasu</li><li>Excuse Me = Sumimasen</li><li>Cheers! = Kanpai!</li><li>Yes = Hai</li><li>No = Iie</li></ul>"
                    };
                    //spain
                    spain.onclick = function () {
                        info.style.visibility = "visible";
                        moreFacts.style.visibility = "visible";
                        translated.style.visibility = "visible";
                        countryName = JSONresult['0']['212']['name'];
                        countryCapital = JSONresult['0']['212']['capital'];
                        countryReigon = JSONresult['0']['212']['region'];
                        population = JSONresult['0']['212']['population'];
                        countryPop = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //regular expression to add commas in the number: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
                        countryMoney = JSONresult['0']['212']['currencies']['0']['name'];
                        let tempK = JSONresult['2']['main']['temp']
                        let tempF = Math.ceil((tempK - 273.15) * (9 / 5) + 32);
                        countryWeather = tempF;
                        countryWeatherDesc = JSONresult['2']['weather']['0']['description'];

                        info.innerHTML = "In " + countryName + ", the capital is " + countryCapital + " and is located in " + countryReigon + " <br>The population is " + countryPop + " <br>The currency is " + countryMoney + " <br>Currently the weather in " + countryCapital + " is " + countryWeather + "F with " + countryWeatherDesc;

                        moreFacts.innerHTML = "<strong>More Facts</strong><br><ul><li>Adapt to Spanish time as the afternoon can last until 8pm. Most resturants won't open for dinner until after that time and most spainards don't eat their dinner until later.</li><li>Travel by bus to save money as Spain has as a great system that connects with almost all the major towns and cities.</li><li>Try and take part in at least 1 big festival as they are a great way to indulge in Spanish culture.</li><li> Explore all the different neighborhoods as they all have something different to offer. Make sure to try all the different foods and drinks of those regions.</li><li>Tipping isn't necessary in Spain, but it's greatly appreciated.</li><li>It's recommended to book any attractions online ahead of time as they tend to book up really fast. </li> <li>You can ski in Spain. Try going down the slopes outside Granada in the Sierra Nevada mountains.</li></ul>";

                        translated.innerHTML = "<strong>Good Words to Know</strong><br><ul><li>Hello = Hola</li><li>How are you doing? = &iquest;Com&oacute; te va?</li><li>Nice to meet you =Mucho gusto</li><li>Thank you = Gracias</li><li>See yuo later = Hasta luego</li><li>Cheers! = &iexcl;Salud!</li><li>Good luck = &iexcl;Buena suerte!</li></ul>"
                    };
                    //australia
                    australia.onclick = function () {
                        info.style.visibility = "visible";
                        moreFacts.style.visibility = "visible";
                        translated.style.visibility = "visible";
                        countryName = JSONresult['0']['13']['name'];
                        countryCapital = JSONresult['0']['13']['capital'];
                        countryReigon = JSONresult['0']['13']['region'];
                        population = JSONresult['0']['13']['population'];
                        countryPop = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //regular expression to add commas in the number: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
                        countryMoney = JSONresult['0']['13']['currencies']['0']['name'];
                        let tempK = JSONresult['4']['main']['temp']
                        let tempF = Math.ceil((tempK - 273.15) * (9 / 5) + 32);
                        countryWeather = tempF;
                        countryWeatherDesc = JSONresult['4']['weather']['0']['description'];

                        info.innerHTML = "In " + countryName + ", the capital is " + countryCapital + " and is located in " + countryReigon + " <br>The population is " + countryPop + " <br>The currency is " + countryMoney + " <br>Currently the weather in " + countryCapital + " is " + countryWeather + "F with " + countryWeatherDesc;

                        moreFacts.innerHTML = "<strong>More Facts</strong><br><ul><li>You will need a visa or an eta to visit and get into the country.</li><li>The Australian Alps get more snow than the Swiss Alps.</li><li>While Australia is huge and extremely diverse, 90% of Australians live on the coast.</li><li> The Great Barrier Reef is the largest eco-system in the world.</li><li> Australia has over 60 seperate wine regions.</li><li> It takes some time to get across the country. A flight from Brisbane to Perth will take about 5.5 hours. </li><li>Planning your first trip? You shouldn't miss: Sydney, Melbourne and the Great Ocean Road, the Great Barrier Reef, Ulruru, Adelaide, Gold Coast, Brisbane.</li><li>Experience to try: Skydiving, Diving and Snorkeling, Whale watching, Kayaking with dolphins, and an Opera house tour</li><li>Australian summers (December to March) can be extremely hot. Try and visit during the 'shoulder season' which is October to November or April to May</li><li>Australia is really expensive to try and budget $100-$200 USD/day for food, accomendations and activities.</li><li>You don't need to add a tip at resturants, bars or taxis. No one will expect it and possibly won't accept it.</li> </ul>";

                        translated.innerHTML = "<strong>Good Words to Know</strong><br><ul><li>Thongs = flip flips</li><li>Bum bag = fanny pack</li><li>Togs/swimmers = bathing suit</li><li>Chips = fries</li><li>Lollies = candy</li><li>Boot = trunk</li><li>Petrol = gas</li><li>ute = pick up truck</li><li>Avo = avocado</li><li>Barbie = BBQ</li><li>breaky = breakfast</li><li>Bickies = biscuits/cookies</li></ul>"
                    };
                    //italy
                    italy.onclick = function () {
                        info.style.visibility = "visible";
                        moreFacts.style.visibility = "visible";
                        translated.style.visibility = "visible";
                        countryName = JSONresult['0']['112']['name'];
                        countryCapital = JSONresult['0']['112']['capital'];
                        countryReigon = JSONresult['0']['112']['region'];
                        population = JSONresult['0']['112']['population'];
                        countryPop = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //regular expression to add commas in the number: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
                        countryMoney = JSONresult['0']['112']['currencies']['0']['name'];
                        let tempK = JSONresult['5']['main']['temp']
                        let tempF = Math.ceil((tempK - 273.15) * (9 / 5) + 32);
                        countryWeather = tempF;
                        countryWeatherDesc = JSONresult['5']['weather']['0']['description'];

                        info.innerHTML = "In " + countryName + ", the capital is " + countryCapital + " and is located in " + countryReigon + " <br>The population is " + countryPop + " <br>The currency is " + countryMoney + " <br>Currently the weather in " + countryCapital + " is " + countryWeather + "F with " + countryWeatherDesc;

                        moreFacts.innerHTML = "<strong>More Facts</strong><br><ul><li>Get ready for public transportation as each city in Italy has its own transportation system that included buses, trams or metro.</li><li>Learn a little about the different Italian regions. Italy isn't just Florence, Venice or Rome.</li><li>Shop at the markets as Italy is known for it's food and their simple ingredients.</li><li> Try to only go to Italian resturants without English menus as it's the best way to avoid tourist traps and find the best italian food possible.</li><li> Bring a reusable water bottle with you as in the main cities, florence, Rome and Venice, you can find water fountains all around the cities.</li><li>You don't have to tip as Italians rarely do, but you might see a 'coperto' on the bill or a cover charge.</li><li>dinner starts later than you might be used to. Most resturants don't even open until 7pm or later.</li><li>Most italian shops will close for lunch so beware if you are trying to go shopping between 1-4pm. Italians believe lunch is an importatnt part of the day and some will go home to enjoy a nice meal, relax and/or take a nap.</li></ul>";

                        translated.innerHTML = "<strong>Good Words to Know</strong><br><ul><li>Good morning = Buongiorno</li><li>Good evening = Buona Sera</li><li>Thank you = Grazie</li><li>I don't understand = Non capisco</li><li>Do you speak English? = Parla inglese?</li><li>Pleased to meet you = Piacere</li><li>How are you? = Come sta?</li></ul>"
                    };

                    //france
                    france.onclick = function () {
                        info.style.visibility = "visible";
                        moreFacts.style.visibility = "visible";
                        translated.style.visibility = "visible";
                        countryName = JSONresult['0']['77']['name'];
                        countryCapital = JSONresult['0']['77']['capital'];
                        countryReigon = JSONresult['0']['77']['region'];
                        population = JSONresult['0']['77']['population'];
                        countryPop = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //regular expression to add commas in the number: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
                        countryMoney = JSONresult['0']['77']['currencies']['0']['name'];
                        let tempK = JSONresult['6']['main']['temp']
                        let tempF = Math.ceil((tempK - 273.15) * (9 / 5) + 32);
                        countryWeather = tempF;
                        countryWeatherDesc = JSONresult['6']['weather']['0']['description'];

                        info.innerHTML = "In " + countryName + ", the capital is " + countryCapital + " and is located in " + countryReigon + " <br>The population is " + countryPop + " <br>The currency is " + countryMoney + " <br>Currently the weather in " + countryCapital + " is " + countryWeather + "F with " + countryWeatherDesc;

                        moreFacts.innerHTML = "<strong>More Facts</strong><br><ul><li>Learn basic french to be polite and try to start a conversation in French rather than Engligh.</li><li>Keep your wallet tucked away at all times as pickpocketers are huge in tourist cities.</li><li>Call 112 in case of emergencies.</li><li> Go shopping in one of the fashion capitals of the world. There are amazing shops and pharmacies to get the best skin care and beauty products.</li><li> Don't forget your passport or photo id while you're in France as there can be regular security checks in malls and other places to heighten security.</li><li> Adpaters are a must as the outlets are a little different than American outlets. Most adapters are available in airports.</li><li>The French like to take their time during the day. In small cities all shops, banks and businesses close 2 hours for lunch. In other areas, places can be closed from 1-4pm.</li><li>French sightseeing can be expensive so it would be in your best interest to gethte Paris Museum Pass as it will let you skip the lines to most of the top attractions.</li></ul>";

                        translated.innerHTML = "<strong>Good Words to Know</strong><br><ul><li>Good morning = Bonjour</li><li>Do you speak Engligh? = Parlez-vous anglais?</li><li>I don't speak French = Je ne parle pas fran&ccedil;ais</li><li>Thank you (very much) = Merci (beaucoup)</li><li>I don't understand = Je ne comprends pas</li></ul>"
                    };
                    //germany
                    germany.onclick = function () {
                        info.style.visibility = "visible";
                        moreFacts.style.visibility = "visible";
                        translated.style.visibility = "visible";
                        countryName = JSONresult['0']['84']['name'];
                        countryCapital = JSONresult['0']['84']['capital'];
                        countryReigon = JSONresult['0']['84']['region'];
                        population = JSONresult['0']['84']['population'];
                        countryPop = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //regular expression to add commas in the number: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
                        countryMoney = JSONresult['0']['84']['currencies']['0']['name'];
                        let tempK = JSONresult['1']['main']['temp']
                        let tempF = Math.ceil((tempK - 273.15) * (9 / 5) + 32);
                        countryWeather = tempF;
                        countryWeatherDesc = JSONresult['1']['weather']['0']['description'];

                        info.innerHTML = "In " + countryName + ", the capital is " + countryCapital + " and is located in " + countryReigon + " <br>The population is " + countryPop + " <br>The currency is " + countryMoney + " <br>Currently the weather in " + countryCapital + " is " + countryWeather + "F with " + countryWeatherDesc;

                        moreFacts.innerHTML = "<strong>More Facts</strong><br><ul><li>Germany has one of the most modern transportation systems in the world and it offers a range of options from buses to trams to underground subways to commuter rails.</li><li>Make sure you carry cash with you as most places don't have a card machine so credit cards aren't widely accepted.</li><li>Recycling is a huge culture in Germany. Most grocery stores have deposits at the entrance.</li><li> Try and explore more than Berlin as there is more to Germay than city-life. There's the Bavarian Alps, the Black Forest and the Moselle valley in southwestern Germany are some ideal places to start.</li><li> Stores, supermarkets and pharmacies are closed on Sundays. Get out and explore a museum or a cafe/bar.</li><li> It's good to learn some German as most people don't speak English and most of the road and shop signs are in German as well. </li></ul>";

                        translated.innerHTML = "<strong>Good Words to Know</strong><br><ul><li>Good morning = Guten Morgen</li><li>Please = Bitte</li><li>Thank you = Danke</li><li>Do you speak Engligh? = Sprechen sie Englisch</li><li>How are you? = Wie ghet es dir?</li><li>I didn't understand you = Ich habe dich nicht verstanden</li><li>How much was that? = Was kostet das?</li></ul>"
                    };
                })
                .catch(function (error) {
                    console.log(error);
                })

        });
});


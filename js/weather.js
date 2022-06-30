// 완전 놀라워, 코드 20줄로 위치를 얻고 날씨를 알아냈어

const API_KEY = "127ddf035270d1edf59d13bea8010ff6";

function onGeoOk(position) {
  const lat = position.coords.latitude; // 위치
  const lon = position.coords.longitude; // 경도
  console.log("You live it", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const name = data.name;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// *** 코드 10줄로 user의 위치를 알 수 있어 ***
// 127ddf035270d1edf59d13bea8010ff6
// 127ddf035270d1edf59d13bea8010ff6

/* << 이거 지우면 설명 디테일 볼 수 있다 
const API_KEY = "127ddf035270d1edf59d13bea8010ff6";

function onGeoOk(position) {
  const lat = position.coords.latitude; // 위치
  const lon = position.coords.longitude; // 경도
  console.log("You live it", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log(url);
  // L 이건 API_KEY로 바꿀 거야

  // fetch(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.name, data.weather[0].main);
      // const weatherContainer = document.getElementById("weather");
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const name = data.name;
      // const weather = data.weather[0].main;
      city.innerText = data.name;
      // weather.innerText = data.weather[0].main;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

  // url을 부를 거야
  // L 이제 이 정보를 사용할 수 있어
  // L 이제 JavaScript는 이 URL을 불렀어
  // L 그치만 아직 얻은 정보를 사용하지 않았지

  // >> 이제 이걸 얻었을 때 뭘 하라고 JavaScript에게 말해줘야 돼
  // L fdtch가 작동하는 방법은 간단하지 않아

  // fetch는 promise야
  // L promise는 당장 뭔가 일어나지 않고, 시간이 좀 걸린 뒤에 일어나는 거야
  // L 서버에 뭔가 물어봤는데
  // - 서버가 응답하는데 5분 걸린다고 해보자 - 그러면 서버의 응담을 기다려야 해
  // >> 그래서 then을 사용해야 돼, 알겠지
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// 220629

// 코드가 20줄 밖에 안된다. 다시 정리해보자 내일

// 012
// 마지막 온도를 해보자.
// 그래서 weather는 문자열이 될 거구(스트링)
// 날씨 이름 / data.main.temp 야

// 011
// weatherContainer는 이 span에서 날씨를 줄 거야
// id가 weather이구 span의 첫번째 child를 얻어야 해
// 그리고 cityContainer를 얻을 건데.. container를 할 필요가 없네,, 좋아,, 그래떠여? 아아아
// weather.innerText는 이거구..

// 010 - index.html에서 태그를 만들자 -----

// 009 - 마지막 것
// fetch안에 data안에 변수를 만들어 주자

// 008
// 내 좌표를 얻어서 API로 DB에 질문을 던질 거야

// 007
// 이제 어떤일이 일어나냐면,
// URL을 fetch하고, 그 다음으로 response를 받아야 해
// 그리고 response의 json을 얻어야해

// 그리고 내용을 추출했으면 data를 얻을 거야
// 그리고 여기에 console.log로 우리가 원하는 걸 볼 수 있어.

// data를 보면 data에 name을 해보자
// weather의 경우 arry라서, --- array의 첫번째 요소의 main을 얻어야 해
// 그래서 array의 첫번째 element를 얻구, main을 해야 돼, 잘 되는 지 보자

/* */
// 006
// URL을 얻고,

// 005
// 문서를 보면 예를 들어.. unit을 URL에 같이 보낼 수 있어

// 004
// 3번 결과를 통해서, 내가 있는 장소의 이름을 얻고 싶고,
// 두 번째로 날씨를 얻고 싶어
// L 날씨에는 많은 정보가 array안에 있어
// L 그래서 main에 이쓴 흐림을 나에게 줄 수 있어
// - 네가 원한다면 온도, 습도, 기업 등등도 보여줄수 있어
// (humidity, pressure)
// >>> 그래서 API weather map에 가서 어떻게 바꿀 수 있는지 확인해야 돼

// 003
// 이 세 변수는 반드시 값이 있어야 돼. ****** API key, lat, lon, // lng? lon?

// allow하고, 위치를 얻을 거구, 우리가 부를 URL이야 !
// URL을 만들어서 이걸 클릭해서 열어보고 잘 되면
// 다음 것도 계속 할 수 있어
// >>> 만약 이걸 클릭해서 브라우저가 URL로 이동해서 응답을 얻어 그치?
// fetch를 사용해서 URL을 얻을 거야

// 아무것도 일어나지 않았지만, 내 위치를 얻고
// 보다시피, 누군가 URL로 요청을 했어. 그건 JavaScript야 fetch를 사용했지
// >>> 실제로 URL에 갈 필요 없이 JavaScript가 대신 URL을 부를 거야

// 002
// 이제 URL을 부르는 방법을 보여 줄 거야 -- JavaScript에서 말이야,,

// https://api.openweathermap.org/data/2.5/weather?lat=35.206512&lon=128.6856769&appid=127ddf035270d1edf59d13bea8010ff6
// L latitude를 gdolocation에서 얻은 값으로 바꾸자.
// url 변수를 만들고 백틱(`)으로 감쌀거야

// API_KEY를 선언해서 key를 넣자
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// latitude 도 바꾸자
// geolocation에서 얻은 lat로 바꾸자
// longitude도 geolocation에서 얻은 lon으로 바꿀 거야

//001
// 날씨 -- 이어서
// 지금은 open weather map 서버와 얘기할 거야

// 220628
// 날씨
// 005
// *** 두 번째 단계는 이 숫자들을 장소로 바꿔줄 서비스를 사용해야 돼
// >>> 이따가 하구
// *** 일단 API 계정을 열어야 해 https://openweathermap.org/
// 우리가 원하는 Geocoding이 있구 Air Pollution
// @ Road API, Solar radiation APi,,,
// 암툰, 이건(사이트에 잇는것들) 우리 위치의 날씨를 알려줄거야
// L 우리가 있는 장소의 이름과 현재 날씨를 줄 거야
//
/* */

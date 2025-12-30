
// const is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // mobile check
let is_mobile = $(window).innerWidth() <= 1200 ? true : false;

let item_list = [{
  title: "기만의 번역기 (모스 부호)",
  id: "morse",
  icon: "images/app__morse.svg",
  since_year: "2013",
  since_month: "01",
  since_date: "19",
  url: "/morse/",
  description: "왠지 쿨함. 어째선지 멋짐. 알 수 없지만 끌림.",
  tag: ["web", "lang"],
  theme: "#4284f3"
}, {
  title: "기만의 번역기 (점자)",
  id: "braille",
  icon: "images/app__braille.svg",
  since_year: "2019",
  since_month: "12",
  since_date: "06",
  url: "/braille/",
  description: "문자 ⇄ 브라유 점자 - 정체성에 혼란이 오지만 일단 가능!",
  tag: ["web", "lang"],
  theme: "#f44336"
}, {
  title: "#qualify",
  id: "qualify",
  icon: "images/icon__grade.svg",
  since_year: "2018",
  since_month: "09",
  since_date: "29",
  url: "/qualify/",
  description: "이 프로젝트는 버킷리스트의 하위 프로젝트로 개발되었습니다.",
  tag: ["web", "qualified"],
  theme: "#ffffff"
}, {
  title: "기만의 모스 부호",
  id: "morse_android",
  icon: "images/app__morse.svg",
  since_year: 2013,
  since_month: 2,
  since_date: 28,
  url: "//play.google.com/store/apps/details?id=com.morsecode.translator.jinh&hl=ko",
  description: "기만의 모스는 [기적의 만능 모스]의 준말입니다.",
  tag: ["android", "lang"],
  theme: "#4caf50"
}, {
  title: "8-BIT Icon Theme",
  id: "bit",
  icon: "images/icon__android.svg",
  since_year: 2013,
  since_month: 8,
  since_date: 17,
  url: "/apps/8-BIT/",
  description: "[8-BIT]는 [8-BIT Icon Theme]의 약자입니다.",
  tag: ["web", "art"],
  theme: "#00c853"
}, {
  title: "대학수학능력시험 카운터",
  id: "SAT_kr",
  icon: "images/app__satkr.svg",
  since_year: 2008,
  since_month: 11,
  since_date: 13,
  url: "/SAT_kr/",
  description: "화학공학과 특) 육각형 잘 그림.",
  tag: ["web", "qualified"],
  theme: "#d32f2f"
}, {
  title: "로또 번호 생성기",
  id: "lotto",
  icon: "images/icon__counter_6.svg",
  since_year: 2011,
  since_month: 4,
  since_date: 29,
  url: "/lotto/",
  description: "로또6/45의 예상 추첨 번호를 스마트하게 생성합니다.",
  tag: ["web", "game"],
  theme: "#ffb300"
}, {
  title: "전투 시뮬레이터",
  id: "battle",
  icon: "images/icon__swords.svg",
  since_year: 2009,
  since_month: 1,
  since_date: 3,
  url: "//blog.jinh.kr/297",
  description: "쉽고 빠른 모의 전투 실험. 나이스한 체력 게이지 표시로 직관적임. 능력치 설정 가능.",
  tag: ["web", "game"],
  theme: "#3f51b5"
}, {
  title: "네모네모 멈뭄미믜 저주가 걸린 글",
  id: "mmm",
  icon: "images/icon__pets.svg",
  since_year: 2016,
  since_month: 6,
  since_date: 19,
  url: "//blog.jinh.kr/835",
  description: "담신믄 네모네모 멈뭄미뫄 눈미 마주치고 말맜습니다. 담신믄 미제 네모네모 멈뭄미믜 저주로 돔그란 글자를 칠 수 멊습니다. 멈멈!",
  tag: ["web", "lang"],
  theme: "#009688"
},
// {
//   title: "<span class='spoiler'>jw　　</span> 초보자 가이드 4.0",
//   id: "jw",
//   icon: "images/jw.svg",
//   since_year: 2017,
//   since_month: 1,
//   since_date: 19,
//   url: "//jw.jinh.kr/",
//   description: "powered by team Cartel.",
//   tag: ["web", "work"],
//   theme: "#424242"
// },
// {
//   title: "Sample",
//   id: "blog",
//   icon: "images/rss_feed-white-18dp.svg",
//   since_year: 2007,
//   since_month: 3,
//   since_date: 21,
//   url: "//blog.jinh.kr/",
//   description: "본격 변방 블로그.",
//   tag: ["web"],
//   theme: "#212121"
// }, 
{
  title: "버킷 리스트",
  id: "bucket",
  icon: "images/app__bucket.svg",
  since_year: 2014,
  since_month: 10,
  since_date: 3,
  url: "/bucket/",
  description: "만들었다. 버킷리스트!",
  tag: ["web", "qualified"],
  theme: "#ff5722"
}, {
  title: "Instagram",
  id: "instagram",
  icon: "images/app__instagram.svg",
  since_year: 2015,
  since_month: 12,
  since_date: 25,
  url: "//www.instagram.com/enf_unity/",
  description: "You are what you eat.",
  tag: ["alcohol"],
  theme: "#C13584"
}, {
  title: "이력서",
  id: "resume",
  icon: "images/icon__work.svg",
  since_year: 2020,
  since_month: 8,
  since_date: 15,
  url: "//jinh.kr/resume/",
  description: "연락 기다립니다.",
  tag: ["web", "work", "art"],
  theme: "#607d8b"
}, {
  title: "퇴근 시간을 알려주는 고양이",
  id: "owo",
  icon: "images/icon__cat.svg",
  since_year: 2023,
  since_month: 11,
  since_date: 25,
  url: "/owo/",
  description: "집에 가고싶다 증후군: 강력한 귀소 본능을 느낌 (심한 경우 집에서도 환상통을 겪음)",
  tag: ["web", "work"],
  theme: "#2e6cb8"
}, {
  title: "디오니소스 프로젝트",
  id: "cocktail",
  icon: "images/icon__cocktail.svg",
  since_year: 2025,
  since_month: 5,
  since_date: 15,
  url: "/qualify/조주기능사/",
  description: "조주기능사 국가기술자격 실기시험문제: 칵테일 과제",
  tag: ["web", "qualified", "alcohol"],
  theme: "#35E5A0"
}, {
  title: "블랙야크",
  id: "blackyak",
  icon: "images/icon__hiking.svg",
  since_year: 2025,
  since_month: 10,
  since_date: 10,
  url: "/bucket/블랙야크/",
  description: "블랙야크 제품은 비싸도 좀 봐준다.",
  tag: ["web", "qualified", "fitness"],
  theme: "#e60019"
}, {
  title: "잔디심기",
  id: "commit",
  icon: "images/icon__run.svg",
  since_year: 2025,
  since_month: 10,
  since_date: 10,
  url: "/bucket/잔디심기/",
  description: "나란 인간 어디까지 꾸준할 수 있을까 평가 기록.",
  tag: ["web", "qualified", "fitness"],
  theme: "#004d40"
}

  // {
  //   title: "<span class='spoiler'>재원산업</span>주식회사",
  //   id: "jw_card",
  //   icon: "images/jw.svg",
  //   since_year: 2017,
  //   since_month: 1,
  //   since_date: 19,
  //   url: "",
  //   description: "Here's my card.",
  //   tag: [],
  //   theme: "ffffff",
  //   html: "<span class='corp'><img src='images/logo_jaewon.png'>재원산업주식회사</span><span class='dept'>품질경영실</span><span class='name'>정　진　희</span><span class='addr'><span style='text-decoration:underline; font-weight:bold;'>본사 · 공장</span>\r전남 여수시 낙포단지길 79\r<span>직통전화 (061)690-9284 C·P 010-2031-3222</span>\r<span>대표전화 (061) 690-9200 FAX (061) 686-5345</span>\r<span>E-mail : jhjeong@jaewon.co.kr</span>\r\r<span style='text-decoration:underline;'>서울사무소</span>\r<span>서울시 강남구 영동대로 511, 4008호</span>\r<span>대표전화 (02) 6000-6787~8 FAX (02) 6000-6885</span></span>"
  // },

  //  {
  // title: "　　0000-0000-0000-0000",
  // id: "bucket",
  // icon: "images/web-24px.svg",
  // since_year: 2020,
  // since_month: 10,
  // since_date: 3,
  // url: "/test/",
  // description: "",
  // tag: [""],
  // theme: "212121"
  // },
];

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function rad2deg(rad) {
  return rad * 180 / Math.PI;
}

function hex2hsl(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  return [h, s, l];
}

for (var i = 0; i < item_list.length; i++) {
  let hsl = hex2hsl(item_list[i].theme);
  // item_list[i].hue = hsl[0];
  item_list[i].hue = hsl[1] == 0 ? 360 + hsl[2] : hsl[0];
  item_list[i].lightness = hsl[2];
}

function sort(data, key, type) {
  if (type == undefined) type = "asc";
  data.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    if (type == "desc") {
      return x > y ? -1 : x < y ? 1 : 0;
    } else if (type == "asc") {
      return x < y ? -1 : x > y ? 1 : 0;
    }
  });
}

sort(item_list, "hue")

function card_spread(data, key, type) {

  if ($("section > .item")[item_list.length - 1] != undefined) { $(".item").remove(); sort(data, key, type); }

  for (var i = 0; i < data.length; i++) {
    if ($("section > .item")[i] == undefined) {

      let year = data[i].since_year.toString().substring(2, 4);
      let month = (data[i].since_month.toString().length == 1) ? "0" + data[i].since_month : data[i].since_month;
      let is_light = data[i].lightness >= 70;
      // function tag(i) {
      //   let tag = "";
      //   for (var j = 0; j < item_list[i].tag.length; j++) {
      //     tag += "#" + item_list[i].tag[j] + " ";
      //   }
      //   return tag;
      // }
      let info = "<span class='ititle'>" + data[i].title + "</span><br>" +
        "<span class='idate'>" + monthNames[data[i].since_month - 1] /*.substring(0, 3).toUpperCase()*/ + "-" + data[i].since_year + "</span><br>" +
        "<span class='idescription'>" + data[i].description + "</span>"

      let tag =
        "<span class='tag'>" +
        (data[i].tag.indexOf("web") != -1 ? `<img title='웹 앱' class='${is_light ? "" : "dark"}' src='images/icon__globe.svg'>` : "") +
        (data[i].tag.indexOf("android") != -1 ? `<img title='안드로이드 앱' class='${is_light ? "" : "dark"}' src='images/icon__android.svg'>` : "") +
        (data[i].tag.indexOf("lang") != -1 ? `<img title='언어 / 문자 / 유니코드' class='${is_light ? "" : "dark"}' src='images/icon__language.svg'>` : "") +
        (data[i].tag.indexOf("art") != -1 ? `<img title='예술' class='${is_light ? "" : "dark"}' src='images/icon__pallete.svg'>` : "") +
        (data[i].tag.indexOf("game") != -1 ? `<img title='확률 / 주사위 굴림' class='${is_light ? "" : "dark"}' src='images/icon__dice.svg'>` : "") +
        (data[i].tag.indexOf("work") != -1 ? `<img title='업무' class='${is_light ? "" : "dark"}' src='images/icon__work.svg'>` : "") +
        (data[i].tag.indexOf("qualified") != -1 ? `<img title='자기개발' class='${is_light ? "" : "dark"}' src='images/icon__verified.svg'>` : "") +
        (data[i].tag.indexOf("alcohol") != -1 ? `<img title='한잔해' class='${is_light ? "" : "dark"}' src='images/icon__cocktail.svg'>` : "") +
        (data[i].tag.indexOf("fitness") != -1 ? `<img title='피트니스' class='${is_light ? "" : "dark"}' src='images/icon__cardiology.svg'>` : "") +
        "</span>"
      // + "<br><span class='itag'>" + tag(i) + "</span>"

      $("section").append(
        `<div class='item ${data[i].id}'>
          <a href='${data[i].url}' class='card ${(is_light ? "light" : "")}' style='background:${data[i].theme}'>
            <img class='icon ${is_light ? "" : "dark"}' src='${data[i].icon}'>
              <span class='title'>${data[i].title.toUpperCase()}</span>
              <span class='date'>${month}/${year}</span>
              <span class='url'>${data[i].url.toUpperCase()}</span>
              <div class='info'>${info}</div>${tag}${(data[i].html != undefined ? `"<div class='html'>${data[i].html}</div>"` : "")}</a></div>`);
    } else {
      // console.log(`${$("section > .item")[i].name} is already defined`);
    }
  }

  if (!is_mobile) {
    card_rotate.desktop(-window.pageYOffset / scroll_unit);
  } else {
    card_rotate.mobile(window.pageYOffset);
  };
}

const card_width = 200;
let rotate_list = [];
let rotate_unit = 15; //rotate origin
let scroll_unit = 20;

let card_rotate = {
  'desktop': function (val) {
    let rotate_origin = window.innerWidth / 200; //rotate origin
    $(".item").each(function () {
      let i = $(this).index();
      // let rotate = -3.75 + (i + .5) * rotate_unit / 2 + val;
      let rotate = i * rotate_unit / 2 + val;
      rotate_list[i] = Math.abs(rotate);
      rotate = rotate < 45 ? rotate : rotate < -45 ? -45 : 45;
      // let pos_x = Math.abs(Math.sin(deg2rad(rotate > -45 ? rotate : -45)) * card_width * rotate_origin);

      function get_r(rotate) {
        if (rotate - i < -30) { // left end
          return -30 + i;
        } else if (rotate - i > 31 - item_list.length) { // right end
          return 31 + i - item_list.length;
        } else {
          return rotate;
        }
      }

      $(this).css({
        "transform": "rotate(" + get_r(rotate) + "deg)",
        "transform-origin": "50% " + rotate_origin * 100 + "%"
      });
      // if (i == 9) console.log([
      //   // $(this).parent().children().length,
      //   i,
      //   // window.innerWidth / 2,
      //   $(this).offset().left,
      //   get_r(rotate)
      // ]);
    });

    let target = rotate_list.indexOf(Math.min.apply(null, rotate_list));
    $('.item').removeClass("on");
    $('.item:nth(' + target + ')').addClass("on");

    $('body').height(window.innerHeight + (item_list.length - 1) * rotate_unit * scroll_unit / 2);
    // console.log(11 * rotate_unit / 2 - window.pageYOffset / scroll_unit);
  },

  'mobile': function (val) {
    $(".item").each(function () {
      let COLUMNS = Math.floor(window.innerWidth / (316 + 16 * 2));
      let POSITION_SCROLL_0to1 = (window.pageYOffset + window.innerHeight) / $(document).height()
      let i = $(this).index();
      i = (i - i % COLUMNS) / COLUMNS; //  for multi-columns ex) 1, 2, 3, 4 --> 1, 1, 2, 2 @2columns
      let rotate = i * rotate_unit / 2 - val / scroll_unit;
      rotate = rotate > 60 ? 60 : rotate < 0 ? 0 : rotate;

      // console.log([i, i%COLUMNS,  rotate]); 
      // if (i == 13) console.log([i, item_list[i].id, "rotate: "+Math.round(rotate, 0)]);

      $(this).css({
        "bottom": (-i * i / (item_list.length) * (1 - POSITION_SCROLL_0to1)) - (COLUMNS * 2) + "em",
        "transform": "perspective(" + (50 - i) + "em) rotateX(" + -rotate + "deg)"
      });
    });
  }
}

card_spread(item_list, "hue");

if (!is_mobile) {

  window.addEventListener('scroll', _.throttle(function () {
    card_rotate.desktop(-window.pageYOffset / scroll_unit);
  }, 100));

  window.addEventListener('resize', _.throttle(function () {
    card_rotate.desktop(-window.pageYOffset / scroll_unit);
  }, 100));

  // $(document).ready(function() {
  //   $("#splash").addClass("off");
  // });
  $(window).on('load', function () {
    setTimeout(function () {
      window.scroll({
        top: 30 * scroll_unit,
        behavior: 'smooth'
      });
    }, 500);
  });
} else {
  window.addEventListener('scroll', _.throttle(function () {
    card_rotate.mobile(window.pageYOffset);
  }, 100));

  window.addEventListener('resize', _.throttle(function () {
    card_rotate.mobile(window.pageYOffset);
  }, 100));

  $(window).on('load', function () {
    setTimeout(function () {
      card_rotate.mobile(window.pageYOffset);
    }, 0);
  });
}

function card_add(num) {
  for (let i = 0; i < num; i++) {
    let theme_temp = (Math.random() * 0xFFFFFF << 0).toString(16);
    item_list.push({
      title: `#${theme_temp}`,
      id: "",
      icon: "images/icon__favorite.svg",
      since_year: new Date().getFullYear(),
      since_month: new Date().getMonth() + 1,
      since_date: new Date().getDate(),
      url: "",
      description: "All right, so listen. Why don't you give me a call when you wanna take things a little more seriously. Here's my card.",
      tag: [],
      theme: `#${theme_temp}`,
      hue: hex2hsl(theme_temp)[1] == 0 ? 360 + hex2hsl(theme_temp)[2] : hex2hsl(theme_temp)[0],
      lightness: hex2hsl(theme_temp)[2]
    });
    // console.log(item_list[item_list.length-1]);
  }
  card_spread(item_list, "hue");
}

$(window).on('load', function () {
  $("#splash").addClass("off");
  // is_mobile = $(window).innerWidth() <= 1200 ? true : false;
  if (is_mobile) {
    $("body").addClass('mobile');
  }
  console.log('is_mobile: ' + is_mobile);
});

// $(window).on('resize', function() {
//   is_mobile = $(window).innerWidth() <= 1200 ? true : false;
//   console.log(is_mobile);
// })

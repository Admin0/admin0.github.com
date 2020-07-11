const is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // mobile check

let item_list = [{
    title: "기만의 번역기 (모스 부호)",
    id: "morse",
    icon: "images/morse.svg",
    since_year: "2013",
    since_month: "01",
    since_date: "19",
    url: "/morse/",
    description: "왠지 쿨함. 어째선지 멋짐. 알 수 없지만 끌림.",
    tag: ["morse", "translator"],
    theme: "4284f3"
  }, {
    title: "기만의 번역기 (점자)",
    id: "braille",
    icon: "images/braille.svg",
    since_year: "2019",
    since_month: "12",
    since_date: "06",
    url: "/braille/",
    description: "문자 ⇄ 브라유 점자 - 정체성에 혼란이 오지만 일단 가능!",
    tag: ["braille", "translator"],
    theme: "f44336"
  }, {
    title: "#qualify",
    id: "qualify",
    icon: "images/grade-24px.svg",
    since_year: "2018",
    since_month: "09",
    since_date: "29",
    url: "/qualify/",
    description: "이 프로젝트는 버킷리스트의 하위 프로젝트로 개발되었습니다.",
    tag: ["qualification", "exam"],
    theme: "ffffff"
  }, {
    title: "기만의 모스 부호",
    id: "morse_android",
    icon: "images/morse.svg",
    since_year: 2018,
    since_month: 2,
    since_date: 28,
    url: "https://play.google.com/store/apps/details?id=com.morsecode.translator.jinh&hl=ko",
    description: "기만의 모스는 [기적의 만능 모스]의 준말입니다.",
    tag: ["android"],
    theme: "4caf50"
  }, {
    title: "8-BIT Icon Theme",
    id: "bit",
    icon: "images/android-white-18dp.svg",
    since_year: 2013,
    since_month: 8,
    since_date: 17,
    url: "/apps/8-BIT/",
    description: "[8-BIT]는 [8-BIT Icon Theme]의 약자입니다.",
    tag: ["android"],
    theme: "00c853"
  }, {
    title: "대학수학능력시험 카운터",
    id: "SAT_kr",
    icon: "images/timer-white-18dp.svg",
    since_year: 2008,
    since_month: 11,
    since_date: 13,
    url: "/SAT_kr/",
    description: "화학공학과 특) 육각형 잘 그림.",
    tag: ["SAT"],
    theme: "d32f2f"
  }, {
    title: "로또 번호 생성기",
    id: "lotto",
    icon: "images/looks_6-24px.svg",
    since_year: 2011,
    since_month: 4,
    since_date: 29,
    url: "/lotto/",
    description: "나눔로또6/45의 예상 추첨 번호를 스마트하게 생성합니다.",
    tag: ["로또"],
    theme: "ffb300"
  }, {
    title: "전투 시뮬레이터",
    id: "battle",
    icon: "images/sports_kabaddi-white-18dp.svg",
    since_year: 2009,
    since_month: 1,
    since_date: 3,
    url: "//blog.jinh.kr/297",
    description: "쉽고 빠른 모의 전투 실험. 나이스한 체력 게이지 표시로 직관적임. 능력치 설정 가능.",
    tag: [""],
    theme: "3f51b5"
  }, {
    title: "네모네모 멈멈미의 저주",
    id: "mmm",
    icon: "images/pets-white-18dp.svg",
    since_year: 2016,
    since_month: 6,
    since_date: 19,
    url: "//blog.jinh.kr/835",
    description: "담신믄 네모네모 멈뭄미뫄 눈미 마주치고 말맜습니다. 담신믄 미제 네모네모 멈뭄미믜 저주로 돔그란 글자를 칠 수 멊습니다. 멈멈!",
    tag: [""],
    theme: "009688"
  }, {
    title: "<span class='spoiler'>ㅈㅇㅅㅇ</span> 초보자 가이드 2.0",
    id: "jw",
    icon: "images/jw.svg",
    since_year: 2017,
    since_month: 1,
    since_date: 19,
    url: "//**.jinh.kr/",
    description: "powered by team Cartel.",
    tag: [""],
    theme: "424242"
  }, {
    title: "Sample",
    id: "blog",
    icon: "images/rss_feed-white-18dp.svg",
    since_year: 2007,
    since_month: 3,
    since_date: 21,
    url: "//blog.jinh.kr/",
    description: "본격 변방 블로그.",
    tag: [""],
    theme: "212121"
  }, {
    title: "버킷 리스트",
    id: "bucket",
    icon: "images/playlist_add_check-24px.svg",
    since_year: 2014,
    since_month: 10,
    since_date: 3,
    url: "/bucket/",
    description: "만들었다. 버킷리스트!",
    tag: [""],
    theme: "ff5722"
  },

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

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

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
  item_list[i].hue = hex2hsl(item_list[i].theme)[1] == 0 ? 255 + hex2hsl(item_list[i].theme)[2] : hex2hsl(item_list[i].theme)[0];
}

function card_spread(data, key, type) {
  if (type == undefined) {
    type = "asc";
  }
  data.sort(function(a, b) {
    var x = a[key];
    var y = b[key];
    if (type == "desc") {
      return x > y ? -1 : x < y ? 1 : 0;
    } else if (type == "asc") {
      return x < y ? -1 : x > y ? 1 : 0;
    }
  });

  $(".item").remove();

  for (var i = 0; i < data.length; i++) {
    let year = data[i].since_year.toString().substring(2, 4);
    let month = (data[i].since_month.toString().length == 1) ? "0" + data[i].since_month : data[i].since_month;

    // function tag(i) {
    //   let tag = "";
    //   for (var j = 0; j < item_list[i].tag.length; j++) {
    //     tag += "#" + item_list[i].tag[j] + " ";
    //   }
    //   return tag;
    // }
    let info = "<span class='ititle'>" + item_list[i].title + "</span><br>" +
      "<span class='idate'>" + monthNames[item_list[i].since_month - 1] /*.substring(0, 3).toUpperCase()*/ + "-" + item_list[i].since_year + "</span><br>" +
      "<span class='idescription'>" + item_list[i].description + "</span>"
      // + "<br><span class='itag'>" + tag(i) + "</span>"

    $("section").append("<div class='item " + data[i].id + "'><div class='card' style='background:#" + data[i].theme + "' onclick='location.href=\"" + data[i].url + "\"'><span class='arrow'>‹</span><img class='icon' src='" + data[i].icon + "'><span class='title'>" + data[i].title + "</span><span class='date'>" + month + "/" + year + "</span><span class='url'>" + data[i].url + "</span><div class='info'>" + info + "</div></div></div>");
  }

  card_rotate(-window.scrollY / 20)
}

const card_width = 200;
let rotate_list = [];

function card_rotate(val) {
  let rotate_unit = 15; //rotate origin
  let rotate_origin = window.innerWidth / 200; //rotate origin
  $(".item").each(function() {
    let i = $(this).index();
    let rotate = -30 + (i + .5) * rotate_unit / 2 + val;
    rotate_list[i] = Math.abs(rotate);
    rotate = rotate < 45 ? rotate : rotate < -45 ? -45 : 45;
    // let pos_x = Math.abs(Math.sin(deg2rad(rotate > -45 ? rotate : -45)) * card_width * rotate_origin);

    function get_r(rotate) {
      if (rotate - i < -30) { // left end
        return -30 + i;
      } else if (rotate - i > 29 - item_list.length) { // right end
        return 29 + i - item_list.length;
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

  $('body').height(item_list.length * 2300 / rotate_unit);

}
card_spread(item_list, "hue");

window.addEventListener('scroll', (event) => {
  // console.log('Scrolling...');
  card_rotate(-window.scrollY / 20)
});
window.addEventListener('resize', (event) => {
  // console.log('Scrolling...');
  card_rotate(-window.scrollY / 20)
});

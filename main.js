const is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // mobile check

let item_list = [{
    title: "기만의 번역기 (모스 부호)",
    id: "morse",
    icon: "images/morse.svg",
    since_year: "2013",
    since_month: "01",
    since_date: "19",
    url: "/morse/",
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
    tag: ["android"],
    theme: "4caf50"
  }, {
    title: "8-BIT Icon Theme",
    id: "bit",
    icon: "images/android-white-18dp.svg",
    since_year: 2013,
    since_month: 8,
    since_date: 17,
    url: "/app/8-BIT/",
    description: "",
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
    description: "",
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
    description: "",
    tag: ["로또"],
    theme: "ffb300"
  }, {
    title: "전투 시뮬레이터",
    id: "battle",
    icon: "images/sports_kabaddi-white-18dp.svg",
    since_year: 2009,
    since_month: 1,
    since_date: 3,
    url: "/battle/",
    description: "",
    tag: [""],
    theme: "3f51b5"
  }, {
    title: "네모네모 멈멈미의 저주",
    id: "mmm",
    icon: "images/pets-white-18dp.svg",
    since_year: 2016,
    since_month: 6,
    since_date: 19,
    url: "//blog.jinh.kr/835/",
    description: "",
    tag: [""],
    theme: "009688"
  }, {
    title: "<span class='spoiler'>재원산업</span> 초보자 가이드 2.0",
    id: "jw",
    icon: "images/jw.svg",
    since_year: 2017,
    since_month: 1,
    since_date: 19,
    url: "****",
    description: "",
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
    description: "",
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
    description: "",
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
    $("section").append("<div class='item " + data[i].id + "'><div class='card' style='background:#" + data[i].theme + "' onclick='location.replace(\"" + data[i].url + "\")'><span class='arrow'>‹</span><img class='icon' src='" + data[i].icon + "'><span class='title'>" + data[i].title + "</span><span class='date'>" + month + "/" + year + "</span><span class='url'>" + data[i].url + "</span></div></div>");
  }

  card_rotate(0);
}

function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function rad2deg(rad) {
  return rad * 180 / Math.PI;
}


const card_width = 200;

function card_rotate(val) {
  let rotate_unit = 15; //rotate origin
  let rotate_origin = window.innerWidth / 200; //rotate origin
  $(".item").each(function() {
    let i = $(this).index();
    let rotate = -30 + (i + .5) * rotate_unit / 2 + val;
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
  $('body').height(item_list.length * 2300 / rotate_unit);
  // $('.info').text(window.scrollY);
}
card_spread(item_list, "theme");

window.addEventListener('scroll', (event) => {
  // console.log('Scrolling...');
  card_rotate(-window.scrollY / 20)
});
window.addEventListener('resize', (event) => {
  // console.log('Scrolling...');
  card_rotate(-window.scrollY / 20)
});

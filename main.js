const is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // mobile check

if (!is_mobile) {

  $(".item").each(function() {
    let i = $(this).index();
    $(this).css({
      "transform": "rotate(" + (-$(this).parent().children().length * 2.5 + i * 5 + 2.5) + "deg)",
      "transform-origin": "50% " + (-$(this).parent().children().length * 2.5 + i * 5 + 2.5) + "deg)"
    })
    console.log($(this).parent().children().length);
  });

}

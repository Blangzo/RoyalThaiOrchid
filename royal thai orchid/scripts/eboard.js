// When the document has loaded
$(document).ready(function() {

  function revealInfo(meminfo) {
    function f() {
      var showninfolist = document.getElementsByClassName("shown");
      // console.log("showninfolist: " + showninfolist);
      var showninfo = showninfolist.item(0);
      // console.log("showninfo: " + showninfo);
      if(showninfo != null) {
        $(showninfo).removeClass('shown');
        // console.log("showninfo_removed: " + document.getElementsByClassName("shown"));
      } else {
        // console.log("showninfo_removed: no element with class shown");
      }

      var focuslist = document.getElementsByClassName("focus");
      for (let x in focuslist) {
        $(focuslist[x]).removeClass('focus');
      }
      // console.log("reveal/hide info ---------------------");
      // console.log("meminfo: " + meminfo);
      var info = document.getElementById(meminfo);
      // console.log("info: " + info);
      if(info.classList.contains('hidden')) {
        $(this).addClass('focus');
        $(info).removeClass('hidden');
        $(info).addClass('shown');
        if(showninfo != null) {
          $(showninfo).addClass('hidden');
        }
      } else {
        $(this).removeClass('focus');
        console.log(this);
        $(info).addClass('hidden');
      }
      return;
    }
    return f;
  }

  $("#a1").click(new revealInfo("t1"));
  $("#a2").click(new revealInfo("t2"));
  $("#a3").click(new revealInfo("t3"));
  $("#a4").click(new revealInfo("t4"));
  $("#a5").click(new revealInfo("t5"));
  $("#a6").click(new revealInfo("t6"));
  $("#a7").click(new revealInfo("t7"));
});

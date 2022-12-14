function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active"),
    document.getElementById("popup-1").classList[1]
      ? (document.getElementById("overflow_body").style.overflow = "hidden")
      : (document.getElementById("overflow_body").style.overflow = "auto");
}
function togglePopupModal() {
  document.getElementById("popup-1_modal").classList.toggle("active"),
    document.getElementById("popup-1_modal").classList[1]
      ? (document.getElementById("overflow_body").style.overflow = "hidden")
      : (document.getElementById("overflow_body").style.overflow = "auto");
}
function validateFormModal() {
  var a = !0;
  let b = document.getElementById("full_name_modal").value,
    c = document.getElementById("company_modal").value,
    d = document.getElementById("email_modal").value;
  return (
    "" === b || null === b
      ? ((document.getElementById("name_text_modal").style.display = "block"),
        (document.getElementById("name_text_modal").style.visibility =
          "visible"),
        (document.getElementById("special_text_modal").style.visibility =
          "hidden"),
        (a = !1))
      : /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+/.test(b)
      ? ((document.getElementById("name_text_modal").style.display = "none"),
        (document.getElementById("special_text_modal").style.visibility =
          "visible"),
        (a = !1))
      : ((document.getElementById("name_text_modal").style.visibility =
          "hidden"),
        (document.getElementById("special_text_modal").style.visibility =
          "hidden"),
        (a = !0)),
    "" === c || null === c
      ? ((document.getElementById("name_company_modal").style.display =
          "block"),
        (document.getElementById("name_company_modal").style.visibility =
          "visible"),
        (document.getElementById("special_company_modal").style.visibility =
          "hidden"),
        (a = !1))
      : /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(c)
      ? ((document.getElementById("name_company_modal").style.display = "none"),
        (document.getElementById("special_company_modal").style.visibility =
          "visible"),
        (a = !1))
      : ((document.getElementById("name_company_modal").style.visibility =
          "hidden"),
        (document.getElementById("special_company_modal").style.visibility =
          "hidden"),
        (a = !0)),
    "" === d || null === d
      ? ((document.getElementById("name_email_modal").style.display = "block"),
        (document.getElementById("name_email_modal").style.visibility =
          "visible"),
        (document.getElementById("special_email_modal").style.visibility =
          "hidden"),
        (a = !1))
      : /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          d
        )
      ? ((document.getElementById("name_email_modal").style.visibility =
          "hidden"),
        (document.getElementById("special_email_modal").style.visibility =
          "hidden"),
        (a = !0))
      : ((document.getElementById("name_email_modal").style.display = "none"),
        (document.getElementById("special_email_modal").style.visibility =
          "visible"),
        (a = !1)),
    a
  );
}
async function userCreateModal() {
  await validateFormModal();
  let b = document.getElementById("full_name_modal").value,
    c = document.getElementById("company_modal").value,
    d = document.getElementById("email_modal").value,
    e = document.getElementById("note_modal").value;
  if (
    validateFormModal() &&
    !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+/.test(b) &&
    !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(c) &&
    "" !== c &&
    "" !== b
  ) {
    let a = new XMLHttpRequest();
    a.open("POST", "https://tso.vn/api/contact"),
      a.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
      a.send(
        JSON.stringify({
          full_name: b,
          company: c,
          email: d,
          note: e,
          type: "data science",
        })
      ),
      (a.onreadystatechange = function () {
        togglePopupModal(),
          4 == this.readyState &&
            200 === this.status &&
            (JSON.parse(this.responseText), loadTable());
      });
  }
}
function validateForm() {
  var a = !0;
  let b = document.getElementById("full_name").value,
    c = document.getElementById("company").value,
    d = document.getElementById("email").value;
  return (
    "" === b || null === b
      ? ((document.getElementById("name_text").style.display = "block"),
        (document.getElementById("name_text").style.visibility = "visible"),
        (document.getElementById("special_text").style.visibility = "hidden"),
        (a = !1))
      : /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+/.test(b)
      ? ((document.getElementById("name_text").style.display = "none"),
        (document.getElementById("special_text").style.visibility = "visible"),
        (a = !1))
      : ((document.getElementById("name_text").style.visibility = "hidden"),
        (document.getElementById("special_text").style.visibility = "hidden"),
        (a = !0)),
    "" === c || null === c
      ? ((document.getElementById("company_text").style.display = "block"),
        (document.getElementById("company_text").style.visibility = "visible"),
        (document.getElementById("special_company").style.visibility =
          "hidden"),
        (a = !1))
      : /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(c)
      ? ((document.getElementById("company_text").style.display = "none"),
        (document.getElementById("special_company").style.visibility =
          "visible"),
        (a = !1))
      : ((document.getElementById("company_text").style.visibility = "hidden"),
        (document.getElementById("special_company").style.visibility =
          "hidden"),
        (a = !0)),
    "" === d || null === d
      ? ((document.getElementById("email_text").style.display = "block"),
        (document.getElementById("email_text").style.visibility = "visible"),
        (document.getElementById("special_email").style.visibility = "hidden"),
        (a = !1))
      : /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          d
        )
      ? ((document.getElementById("email_text").style.visibility = "hidden"),
        (document.getElementById("special_email").style.visibility = "hidden"),
        (a = !0))
      : ((document.getElementById("email_text").style.display = "none"),
        (document.getElementById("special_email").style.visibility = "visible"),
        (a = !1)),
    a
  );
}
async function userCreate() {
  await validateForm();
  let b = document.getElementById("full_name").value,
    c = document.getElementById("company").value,
    d = document.getElementById("email").value,
    e = document.getElementById("note").value;
  if (
    validateForm() &&
    !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+/.test(b) &&
    !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(c) &&
    "" !== c &&
    "" !== b
  ) {
    let a = new XMLHttpRequest();
    a.open("POST", "https://tso.vn/api/contact"),
      a.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
      a.send(
        JSON.stringify({
          full_name: b,
          company: c,
          email: d,
          note: e,
          type: "data science",
        })
      ),
      (a.onreadystatechange = function () {
        togglePopup(),
          4 == this.readyState &&
            200 === this.status &&
            (JSON.parse(this.responseText), loadTable());
      });
  }
}
function openPopup() {
  $("body").addClass("showPopup");
}
function closePopup() {
  $("body").removeClass("showPopup removePopup");
}
function closePopupScreen() {
  $("body").addClass("removePopup"), setTimeout(closePopup, 200);
}
function openPopupSecond() {
  console.log("a hi hi"), $("body").addClass("showPopupSecond");
}
function closePopupSecond() {
  $("body").removeClass("showPopupSecond removePopupSecond");
}
function closePopupScreenSecond() {
  $("body").addClass("removePopupSecond"), setTimeout(closePopupSecond, 200);
}
function openPopupThirt() {
  $("body").addClass("showPopupThirt");
}
function closePopupThirt() {
  $("body").removeClass("showPopupThirt removePopupThirt");
}
function closePopupScreenThirt() {
  $("body").addClass("removePopupThirt"), setTimeout(closePopupThirt, 200);
}
$(".owl-carousel").owlCarousel({
  loop: !0,
  margin: 10,
  nav: !0,
  navText: [
    "<img class='img_owl' src='./images/bi_arrow-right-circle-fill.webp' alt='prev'>",
    "<img class='img_owl' src='./images/bi_arrow-right-circle-fill (1).webp' alt='next'>",
  ],
  autoplay: !0,
  autoplayHoverPause: !0,
  responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 3 } },
}),
  $(document).ready(function () {
    $(window).scroll(function () {
      $(this).scrollTop() > 50
        ? $(".header__nav-container").addClass("header__nav-solid")
        : $(".header__nav-container").removeClass("header__nav-solid");
    });
  }),
  $(function () {
    let a = 0;
    (a = window.innerWidth <= 1280 ? 60 : 70),
      $("a.header__nav-link").bind("click", function (b) {
        document.getElementById("menu").checked =
          !document.getElementById("menu").checked;
        var c = $(this);
        $("html, body")
          .stop()
          .animate(
            { scrollTop: $(c.attr("href")).offset().top - a },
            0,
            "easeInOutExpo"
          ),
          b.preventDefault();
      });
  }),
  $(".popup .close").on("click", function () {
    closePopupScreen();
  }),
  $(document).keyup(function (a) {
    "Escape" === a.key && closePopup();
  }),
  $(".popup-2 .close-2").on("click", function () {
    closePopupScreenSecond();
  }),
  $(document).keyup(function (a) {
    "Escape" === a.key && closePopupSecond();
  }),
  $(".popup-3 .close-3").on("click", function () {
    closePopupScreenThirt();
  }),
  $(document).keyup(function (a) {
    "Escape" === a.key && closePopupThirt();
  });

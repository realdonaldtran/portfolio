<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.5">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">const cards = document.querySelectorAll(".card");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">cards.forEach(card =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>card.addEventListener("click", () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>alert("This will link to detailed project pages.");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>});</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
const themeRoot = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const year = document.querySelector("#year");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  themeRoot.setAttribute("data-theme", savedTheme);
}

const updateThemeIcon = () => {
  const isDark = themeRoot.getAttribute("data-theme") === "dark";
  themeToggle.querySelector(".theme-toggle__icon").textContent = isDark ? "☀️" : "🌙";
};

updateThemeIcon();

themeToggle?.addEventListener("click", () => {
  const current = themeRoot.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  if (next === "light") {
    themeRoot.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    themeRoot.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }

  updateThemeIcon();
});

if (year) {
  year.textContent = new Date().getFullYear();
}

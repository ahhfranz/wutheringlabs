window.onscroll = function () {
  const btn = document.getElementById("btn-ir-arriba");
  if (!btn) return;
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

const btn = document.getElementById("btn-ir-arriba");
if (btn) {
  btn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}
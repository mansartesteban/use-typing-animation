const r = (t, e) => Math.random() * (e - t) + t, l = (t) => new Promise((e) => setTimeout(e, t)), p = {
  displayDuration: 2e3
}, u = (t = [], e = {}) => {
  e = { ...p, ...e };
  let a = "";
  const n = async (i, g = 0) => {
    i.classList.toggle("typing-animation__writer", !0), i.classList.toggle("typing-animation__typing", !0);
    let o = [...t[g]];
    for (let s = 0; s < o.length; s++)
      a += o[s], i.innerText = a, await l(r(50, 150));
    for (i.classList.toggle("typing-animation__typing", !1), await l(e.displayDuration), i.classList.toggle("typing-animation__typing", !0); a.length > 0; )
      a = a.substr(0, a.length - 1), i.innerText = a, await l(r(50, 150));
    n(i, (g + 1) % t.length);
  };
  return {
    animate: n
  };
};
export {
  u as default
};

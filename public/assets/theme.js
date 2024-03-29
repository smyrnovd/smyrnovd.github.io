(() => {
    "use strict";
    const t = "theme",
        e = {
            LIGHT: "light",
            DARK: "dark",
            AUTO: "auto"
        },
        s = document.body,
        i = s.getAttribute("data-theme"),
        o = () => {
            const s = localStorage.getItem(t);
            if (s) return s;
            let n;
            switch (i) {
                case e.DARK:
                    n = e.DARK;
                    break;
                case e.LIGHT:
                    n = e.LIGHT;
                    break;
                case e.AUTO:
                default:
                    n = window.matchMedia("(prefers-color-scheme: dark)").matches ? e.DARK : e.LIGHT;
                    break
            }
            return n
        },
        n = t => {
            t === e.DARK ? (document.documentElement.classList.add(e.DARK), document.documentElement.classList.remove(e.LIGHT)) : t === e.LIGHT && (document.documentElement.classList.remove(e.DARK), document.documentElement.classList.add(e.LIGHT))
        };
    n(o()), requestAnimationFrame(() => s.classList.remove("notransition"));
    const a = () => {
        const s = o();
        s === e.DARK ? (localStorage.setItem(t, e.LIGHT), n(e.LIGHT)) : s === e.LIGHT && (localStorage.setItem(t, e.DARK), n(e.DARK))
    };
    window.addEventListener("DOMContentLoaded", () => {
        const e = document.getElementById("mode");
        e.addEventListener("click", () => a());
        const t = document.getElementById("menu-trigger");
        t.addEventListener("change", function() {
            const e = document.querySelector(".wrapper");
            if (this.checked) return e.classList.add("blurry");
            e.classList.remove("blurry")
        })
    })
})()
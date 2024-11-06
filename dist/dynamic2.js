import { B as i, u as a, p as m, _ as r, k as h } from "./hooks.module-D3T0iSRI.js";
const l = () => {
  const [n, s] = m([]);
  return r(() => {
    fetch(
      "https://ruj56hpsooydu4jmctx5u7gdra0mbszw.lambda-url.eu-north-1.on.aws/?codefreeze=2025"
    ).then((t) => t.json()).then((t) => {
      s(t.sort(
        (o, c) => o.name.localeCompare(c.name)
      ));
    }).catch(console.error);
  }, []), /* @__PURE__ */ a(h, { children: n.map((t) => /* @__PURE__ */ a(d, { profile: t })) });
}, d = ({ profile: n }) => /* @__PURE__ */ a("div", { class: "participant", children: [
  /* @__PURE__ */ a("img", { class: "avatar", src: n.photoThumbnail ?? "/images/avatar.jpg", alt: n.name }),
  /* @__PURE__ */ a("h3", { children: [
    n.name,
    n.pronouns && /* @__PURE__ */ a("small", { children: [
      /* @__PURE__ */ a("br", {}),
      n.pronouns
    ] })
  ] }),
  /* @__PURE__ */ a("nav", { children: [
    n.homepage && /* @__PURE__ */ a(e, { icon: /* @__PURE__ */ a("i", { class: "fas fa-home" }), href: n.homepage, title: `Homepage of ${n.name}` }),
    n.linkedin && /* @__PURE__ */ a(e, { icon: /* @__PURE__ */ a("i", { class: "fab fa-linkedin" }), href: n.linkedin, title: `${n.name}'s LinkedIn profile` }),
    n.mastodon && /* @__PURE__ */ a(e, { icon: /* @__PURE__ */ a("img", { src: "/logos/mastodon.svg", alt: "mastodon", class: "icon" }), href: n.mastodon, title: `${n.name} on Mastodon` }),
    n.matrix && /* @__PURE__ */ a(e, { icon: /* @__PURE__ */ a("img", { src: "/logos/matrix.svg", alt: "matrix", class: "icon" }), href: n.matrix, title: `${n.name} on Matrix` }),
    n.github && /* @__PURE__ */ a(e, { icon: /* @__PURE__ */ a("i", { class: "fab fa-github" }), href: n.github, title: `${n.name} on GitHub` })
  ] })
] }), e = ({ href: n, title: s, icon: t }) => /* @__PURE__ */ a("a", { href: n, target: "_blank", rel: "noopener noreferrer", title: s, children: t });
i(
  /* @__PURE__ */ a(l, {}),
  document.getElementById("participants-container")
);
console.log(document.getElementById("participants"));

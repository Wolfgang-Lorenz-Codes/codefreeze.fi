import { B as c, u as t, p as m, _ as r } from "./hooks.module-D3T0iSRI.js";
const d = () => {
  const [n, a] = m([]);
  return r(() => {
    fetch("/status.json").then((e) => e.json()).then((e) => {
      const l = e.map(({ media: s, content: i }) => (s ?? []).map((o) => ({ filename: o, content: i }))).flat().filter((s) => !s.filename.endsWith("mp4")).sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 10);
      a(l);
    }).catch(console.error);
  }, []), /* @__PURE__ */ t("div", { class: "gallery", children: n.map((e) => /* @__PURE__ */ t(u, { filename: e.filename, content: e.content })) });
}, u = ({ filename: n, content: a }) => /* @__PURE__ */ t(
  "div",
  {
    style: {
      backgroundImage: `url(/images/status/thumb-500-${n})`
    },
    children: /* @__PURE__ */ t(
      "div",
      {
        class: "content",
        dangerouslySetInnerHTML: {
          __html: a
        }
      }
    )
  }
);
c(/* @__PURE__ */ t(d, {}), document.getElementById("status"));

var __dsPreview = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // <define:process.env>
  var init_define_process_env = __esm({
    "<define:process.env>"() {
    }
  });

  // tedi-namespace:tedi-namespace
  var require_tedi_namespace = __commonJS({
    "tedi-namespace:tedi-namespace"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      module.exports = window.Tedi;
    }
  });

  // react-global:react/jsx-runtime
  var require_jsx_runtime = __commonJS({
    "react-global:react/jsx-runtime"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      var R = window.React;
      function jsx3(type, props, key) {
        return R.createElement(type, key === void 0 ? props : Object.assign({}, props, { key }));
      }
      module.exports = { jsx: jsx3, jsxs: jsx3, jsxDEV: jsx3, Fragment: R.Fragment };
    }
  });

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      module.exports = window.React;
    }
  });

  // Carousel.preview.tsx
  var Carousel_preview_exports = {};
  __export(Carousel_preview_exports, {
    BoundedOverlayNavigation: () => BoundedOverlayNavigation2,
    CenteredBottomPaginationHasDots: () => CenteredBottomPaginationHasDots2,
    CenteredBottomPaginationHasNumbers: () => CenteredBottomPaginationHasNumbers2,
    CenteredHasDots: () => CenteredHasDots2,
    CenteredHasNumbers: () => CenteredHasNumbers2,
    CombinationsTopNavigationBottomDots: () => CombinationsTopNavigationBottomDots2,
    Default: () => Default2,
    Examples: () => Examples2,
    Faded: () => Faded2,
    FadedBothSides: () => FadedBothSides2,
    Peeking: () => Peeking2,
    PeekingBothSides: () => PeekingBothSides2,
    SeparatedBottomPaginationHasDots: () => SeparatedBottomPaginationHasDots2,
    SeparatedBottomPaginationHasNumbers: () => SeparatedBottomPaginationHasNumbers2,
    TopPaginationArrowsOnly: () => TopPaginationArrowsOnly2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/content/carousel/carousel.stories.tsx
  var carousel_stories_exports = {};
  __export(carousel_stories_exports, {
    BoundedOverlayNavigation: () => BoundedOverlayNavigation,
    CenteredBottomPaginationHasDots: () => CenteredBottomPaginationHasDots,
    CenteredBottomPaginationHasNumbers: () => CenteredBottomPaginationHasNumbers,
    CenteredHasDots: () => CenteredHasDots,
    CenteredHasNumbers: () => CenteredHasNumbers,
    CombinationsTopNavigationBottomDots: () => CombinationsTopNavigationBottomDots,
    Default: () => Default,
    Examples: () => Examples,
    Faded: () => Faded,
    FadedBothSides: () => FadedBothSides,
    Peeking: () => Peeking,
    PeekingBothSides: () => PeekingBothSides,
    SeparatedBottomPaginationHasDots: () => SeparatedBottomPaginationHasDots,
    SeparatedBottomPaginationHasNumbers: () => SeparatedBottomPaginationHasNumbers,
    TopPaginationArrowsOnly: () => TopPaginationArrowsOnly,
    default: () => carousel_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/icon/icon.tsx
  var icon_exports = {};
  __export(icon_exports, {
    default: () => icon_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(icon_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var icon_default = ns["Icon"] ?? ns;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var text_default = ns2["Text"] ?? ns2;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/buttons/floating-button/floating-button.tsx
  var floating_button_exports = {};
  __export(floating_button_exports, {
    default: () => floating_button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(floating_button_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var floating_button_default = ns3["FloatingButton"] ?? ns3;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/card/card.tsx
  var card_exports = {};
  __export(card_exports, {
    default: () => card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var card_default = ns4["Card"] ?? ns4;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/hide-at/hide-at.tsx
  var hide_at_exports = {};
  __export(hide_at_exports, {
    default: () => hide_at_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(hide_at_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var hide_at_default = ns5["HideAt"] ?? ns5;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/show-at/show-at.tsx
  var show_at_exports = {};
  __export(show_at_exports, {
    default: () => show_at_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(show_at_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var show_at_default = ns6["ShowAt"] ?? ns6;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var vertical_spacing_default = ns7["VerticalSpacing"] ?? ns7;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/misc/stretch-content/stretch-content.tsx
  var stretch_content_exports = {};
  __export(stretch_content_exports, {
    default: () => stretch_content_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(stretch_content_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var stretch_content_default = ns8["StretchContent"] ?? ns8;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/navigation/link/link.tsx
  var link_exports = {};
  __export(link_exports, {
    default: () => link_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(link_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var link_default = ns9["Link"] ?? ns9;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/tags/status-badge/status-badge.tsx
  var status_badge_exports = {};
  __export(status_badge_exports, {
    default: () => status_badge_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(status_badge_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var status_badge_default = ns10["StatusBadge"] ?? ns10;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/carousel/carousel.tsx
  var carousel_exports = {};
  __export(carousel_exports, {
    default: () => carousel_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(carousel_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var carousel_default = ns11["Carousel"] ?? ns11;

  // src/tedi/components/content/carousel/carousel.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: carousel_exports.Carousel,
    title: "TEDI-Ready/Content/Carousel",
    subcomponents: {
      "Carousel.Content": carousel_exports.Carousel.Content,
      "Carousel.Navigation": carousel_exports.Carousel.Navigation,
      "Carousel.Indicators": carousel_exports.Carousel.Indicators
    },
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.20.28?node-id=26296-151359&m=dev"
      }
    }
  };
  var carousel_stories_default = meta;
  var RESPONSIVE_SLIDES = { xs: 1, sm: 2, md: 2.5, lg: 3, xl: 3.5, xxl: 4 };
  var DemoSlide = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        minHeight: "8rem"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "spa", size: 36, color: "tertiary" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "secondary", element: "span", children: "Asenda oma sisuga" })
      ]
    }
  ) }) });
  var slides = (count) => Array.from({ length: count }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoSlide, {}, i));
  var NEWS = [
    {
      id: 1,
      image: "https://picsum.photos/seed/tedi-news-1/480/240",
      category: "Tervis",
      title: "Uued digiretsepti v\xF5imalused patsientidele",
      excerpt: "Alates s\xFCgisest saab retsepte pikendada otse patsiendiportaalis ilma vastuv\xF5tuta."
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/tedi-news-2/480/240",
      category: "Teenused",
      title: "Perearstikeskused laiendavad lahtiolekuaegu",
      excerpt: "\xD5htused ja n\xE4dalavahetuse vastuv\xF5tud muutuvad k\xE4ttesaadavamaks kogu Eestis."
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/tedi-news-3/480/240",
      category: "Uuringud",
      title: "Ennetav tervisekontroll annab varase hoiatuse",
      excerpt: "Personaalsed soovitused aitavad m\xE4rgata riske enne, kui need probleemiks muutuvad."
    },
    {
      id: 4,
      image: "https://picsum.photos/seed/tedi-news-4/480/240",
      category: "Vaktsineerimine",
      title: "S\xFCgisene gripihooaeg l\xE4heneb",
      excerpt: "Vaktsineerima saab registreeruda nii perearsti kui ka apteegi kaudu."
    },
    {
      id: 5,
      image: "https://picsum.photos/seed/tedi-news-5/480/240",
      category: "Tervis",
      title: "Vaimse tervise tugi muutub paindlikumaks",
      excerpt: "Kaugn\xF5ustamine v\xF5imaldab abi saada ka v\xE4ljaspool suuremaid keskusi."
    }
  ];
  var NewsCard = ({ image, category, title, excerpt }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(card_exports.Card, { padding: 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "img",
      {
        src: image,
        alt: "",
        style: {
          display: "block",
          width: "100%",
          height: 140,
          objectFit: "cover",
          borderTopLeftRadius: "var(--card-radius-rounded)",
          borderTopRightRadius: "var(--card-radius-rounded)"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { padding: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.25, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "p", modifiers: "small", color: "brand", children: category }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "p", modifiers: "bold", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "p", modifiers: "small", color: "secondary", children: excerpt })
    ] }) })
  ] });
  var HERO = [
    {
      id: 1,
      image: "https://picsum.photos/seed/tedi-hero-1/1200/480",
      title: "Sinu terviseandmed \xFChes kohas",
      text: "Vaata oma retsepte, saatekirju ja uuringute tulemusi mugavalt patsiendiportaalis."
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/tedi-hero-2/1200/480",
      title: "Broneeri vastuv\xF5tt m\xF5ne klikiga",
      text: "Leia sobiv aeg perearsti v\xF5i eriarsti juurde ja kinnita see kohe."
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/tedi-hero-3/1200/480",
      title: "Ennetus algab teadlikkusest",
      text: "Personaalsed soovitused aitavad sul oma tervise eest paremini hoolt kanda."
    }
  ];
  var HeroSlide = ({ image, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "relative", flex: 1, minHeight: 280, overflow: "hidden", borderRadius: 8 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "img",
      {
        src: image,
        alt: "",
        style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgb(0 0 0 / 65%), rgb(0 0 0 / 0%) 60%)"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: 4,
          minHeight: 280,
          padding: "1.5rem"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h3", modifiers: "h2", color: "white", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "white", children: text })
        ]
      }
    )
  ] });
  var MAP_ITEMS = [
    {
      id: 1,
      image: "https://picsum.photos/seed/tedi-map-1/320/200?grayscale",
      title: "Ajalooline kaart 1939",
      place: "Tallinn"
    },
    { id: 2, image: "https://picsum.photos/seed/tedi-map-2/320/200?grayscale", title: "Katastrikaart", place: "Tartu" },
    { id: 3, image: "https://picsum.photos/seed/tedi-map-3/320/200?grayscale", title: "Reljeefikaart", place: "P\xE4rnu" },
    { id: 4, image: "https://picsum.photos/seed/tedi-map-4/320/200?grayscale", title: "Ortofoto 2024", place: "Narva" },
    {
      id: 5,
      image: "https://picsum.photos/seed/tedi-map-5/320/200?grayscale",
      title: "Mullastiku kaart",
      place: "Viljandi"
    },
    {
      id: 6,
      image: "https://picsum.photos/seed/tedi-map-6/320/200?grayscale",
      title: "Ajalooline kaart 1900",
      place: "Rakvere"
    },
    {
      id: 7,
      image: "https://picsum.photos/seed/tedi-map-7/320/200?grayscale",
      title: "H\xFCbriidkaart",
      place: "Kuressaare"
    },
    { id: 8, image: "https://picsum.photos/seed/tedi-map-8/320/200?grayscale", title: "P\xF5hikaart", place: "Haapsalu" }
  ];
  var MapCard = ({ image, title, place }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(card_exports.Card, { padding: 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "img",
      {
        src: image,
        alt: "",
        style: {
          display: "block",
          width: "100%",
          height: 88,
          objectFit: "cover",
          borderTopLeftRadius: "var(--card-radius-rounded)",
          borderTopRightRadius: "var(--card-radius-rounded)"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(card_exports.Card.Content, { padding: 0.75, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "p", modifiers: ["small", "bold"], children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "flex", alignItems: "center", gap: 4 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "location_on", size: 16, color: "secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "secondary", children: place })
      ] })
    ] })
  ] });
  var EVENTS = [
    {
      id: 1,
      image: "https://picsum.photos/seed/tedi-event-1/600/360",
      badge: "Tervisep\xE4ev",
      title: "Kogukonna tervisep\xE4ev",
      by: "Korraldab Tartu LV"
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/tedi-event-2/600/360",
      badge: "Sport",
      title: "Autovaba p\xE4ev",
      by: "Korraldab Tallinn"
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/tedi-event-3/600/360",
      badge: "Ennetus",
      title: "Vaktsineerimise n\xE4dal",
      by: "Korraldab Terviseamet"
    },
    {
      id: 4,
      image: "https://picsum.photos/seed/tedi-event-4/600/360",
      badge: "Perele",
      title: "Perep\xE4ev pargis",
      by: "Korraldab P\xE4rnu LV"
    }
  ];
  var EventCard = ({ image, badge, title, by }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "relative", flex: 1, minHeight: 180, overflow: "hidden", borderRadius: 8 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "img",
      {
        src: image,
        alt: "",
        style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgb(0 0 0 / 70%), rgb(0 0 0 / 0%) 65%)"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: 180,
          padding: "1rem",
          gap: 8
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "accent", children: badge }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "p", modifiers: "bold", color: "white", children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "p", modifiers: "small", color: "white", children: by })
          ] })
        ]
      }
    )
  ] });
  var SERVICES = [
    { id: 1, icon: "prescriptions", title: "Retseptid", text: "Vaata ja pikenda oma kehtivaid retsepte." },
    { id: 2, icon: "vaccines", title: "Vaktsineerimised", text: "Immuniseerimiskava ja varasemad vaktsiinid." },
    { id: 3, icon: "calendar_month", title: "Vastuv\xF5tud", text: "Broneeri ja halda oma vastuv\xF5tuaegu." },
    { id: 4, icon: "lab_panel", title: "Uuringud", text: "Laboritulemused ja saatekirjad \xFChes kohas." }
  ];
  var ServiceCard = ({ icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(card_exports.Card.Content, { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: icon, size: 36, color: "brand" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "p", modifiers: "bold", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "p", modifiers: "small", color: "secondary", children: text })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", iconRight: "arrow_forward", children: "Loe edasi" }) })
  ] }) });
  var Default = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Header, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Pealkiri" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Navigation, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: RESPONSIVE_SLIDES, children: slides(5) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Footer, { style: { justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, {}) })
    ] })
  };
  var TopPaginationArrowsOnly = {
    name: "Top pagination - arrows only",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Header, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Pealkiri" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Navigation, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: RESPONSIVE_SLIDES, children: slides(5) })
    ] })
  };
  var SeparatedBottomPaginationHasDots = {
    name: "Separated bottom pagination - has dots",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Pealkiri" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: RESPONSIVE_SLIDES, children: slides(5) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Footer, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { variant: "numbers" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Navigation, {})
      ] })
    ] })
  };
  var SeparatedBottomPaginationHasNumbers = {
    name: "Separated bottom pagination - has numbers",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Pealkiri" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: RESPONSIVE_SLIDES, children: slides(10) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Footer, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { variant: "numbers" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Navigation, {})
      ] })
    ] })
  };
  var CenteredBottomPaginationHasDots = {
    name: "Centered bottom pagination - has dots",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Pealkiri" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: RESPONSIVE_SLIDES, children: slides(6) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Footer, { style: { justifyContent: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { variant: "numbers", withArrows: true }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { withArrows: true }) })
      ] })
    ] })
  };
  var CenteredBottomPaginationHasNumbers = {
    name: "Centered bottom pagination - has numbers",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Pealkiri" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: RESPONSIVE_SLIDES, children: slides(6) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Footer, { style: { justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { variant: "numbers", withArrows: true }) })
    ] })
  };
  var CombinationsTopNavigationBottomDots = {
    name: "Combinations - top navigation, bottom dots",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Header, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Pealkiri" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Navigation, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: RESPONSIVE_SLIDES, children: slides(6) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Footer, { style: { justifyContent: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { variant: "numbers" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, {}) })
      ] })
    ] })
  };
  var CenteredHasDots = {
    name: "Centered - has dots",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 400 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Pealkiri" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { children: slides(3) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Footer, { style: { justifyContent: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { variant: "numbers", withArrows: true }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { withArrows: true }) })
      ] })
    ] }) })
  };
  var CenteredHasNumbers = {
    name: "Centered - has numbers",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 400 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Pealkiri" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { children: slides(10) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Footer, { style: { justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { variant: "numbers", withArrows: true }) })
    ] }) })
  };
  var Faded = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Header, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Pealkiri" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Navigation, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: RESPONSIVE_SLIDES, fade: true, children: slides(6) })
    ] })
  };
  var FadedBothSides = {
    name: "Faded - both sides",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Header, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Pealkiri" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Navigation, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: { xs: 1.3, sm: 2.4, lg: 4.4 }, centered: true, fade: "both", children: slides(8) })
    ] })
  };
  var Peeking = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Header, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Pealkiri" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Navigation, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: { xs: 1.15, sm: 2.25, lg: 3.25 }, children: slides(8) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Footer, { style: { justifyContent: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { variant: "numbers" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, {}) })
      ] })
    ] })
  };
  var PeekingBothSides = {
    name: "Peeking - both sides (centered)",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Header, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Pealkiri" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Navigation, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: { xs: 1.3, sm: 2.4, lg: 3.4 }, centered: true, children: slides(8) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Footer, { style: { justifyContent: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { variant: "numbers" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, {}) })
      ] })
    ] })
  };
  var BoundedOverlayNavigation = {
    name: "Bounded - overlay arrows (no loop)",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: { xs: 2, sm: 3, md: 4, lg: 6 }, gap: 0.5, loop: false, children: MAP_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapCard, { ...item }, item.id)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        carousel_exports.Carousel.Navigation,
        {
          overlay: true,
          renderButton: ({ buttonProps }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(floating_button_exports.FloatingButton, { ...buttonProps, position: "static", visualType: "secondary" })
        }
      )
    ] })
  };
  var Examples = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 4, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { ariaLabel: "Uudised", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Header, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Uudised" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Navigation, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: { xs: 1, sm: 2, lg: 3 }, children: NEWS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, { ...item }, item.id)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Footer, { style: { justifyContent: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { variant: "numbers" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, {}) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { ariaLabel: "S\xFCndmused", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Header, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "S\xFCndmused" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Navigation, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: { xs: 1.2, sm: 2, md: 3 }, children: EVENTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { ...item }, item.id)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Footer, { style: { justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { variant: "numbers" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { ariaLabel: "Teenused", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Header, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "h2", modifiers: "h1", children: "Teenused" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Navigation, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: { xs: 1, sm: 2, lg: 4 }, children: SERVICES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stretch_content_exports.StretchContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { ...item }) }, item.id)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Footer, { style: { justifyContent: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { variant: "numbers" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, {}) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel, { ariaLabel: "Esilet\xF5stetud", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Content, { slidesPerView: 1, children: HERO.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlide, { ...item }, item.id)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(carousel_exports.Carousel.Footer, { style: { justifyContent: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { variant: "numbers", withArrows: true }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(carousel_exports.Carousel.Indicators, { withArrows: true }) })
        ] })
      ] })
    ] })
  };

  // .design-sync/artifact/compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  function compose(stories, key, globalDefaults, backgrounds) {
    const meta2 = stories.default ?? {};
    const story = stories[key];
    const args = { ...meta2.args ?? {}, ...story?.args ?? {} };
    const argTypes = { ...meta2.argTypes ?? {}, ...story?.argTypes ?? {} };
    for (const name of Object.keys(args)) {
      const mapping = argTypes[name]?.mapping;
      if (mapping && typeof mapping === "object" && args[name] in mapping) args[name] = mapping[args[name]];
    }
    const title = typeof meta2.title === "string" ? meta2.title : "";
    const context = {
      args,
      name: key,
      title,
      kind: title,
      id: "",
      componentId: "",
      globals: { ...globalDefaults, ...meta2.globals ?? {}, ...story?.globals ?? {} },
      viewMode: "story",
      parameters: { ...meta2.parameters ?? {}, ...story?.parameters ?? {} }
    };
    let render = null;
    if (typeof story?.render === "function") render = () => story.render(args, context);
    else if (typeof story === "function") render = () => story(args, context);
    else if (typeof meta2.render === "function") render = () => meta2.render(args, context);
    else {
      const Component = story?.component ?? meta2.component;
      if (Component) render = () => React.createElement(Component, args);
    }
    if (!render) return () => null;
    const decorators = [].concat(story?.decorators ?? []).concat(meta2.decorators ?? []);
    const decorated = decorators.reduce(
      (inner, decorator) => () => decorator(inner, context) ?? inner(),
      render
    );
    const background = backgrounds[context.globals.backgrounds?.value];
    const Story = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: decorated() });
    if (!background) return Story;
    return () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { background }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Story, {}) });
  }

  // Carousel.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(carousel_stories_exports, "Default", G, B);
  var TopPaginationArrowsOnly2 = compose(carousel_stories_exports, "TopPaginationArrowsOnly", G, B);
  var SeparatedBottomPaginationHasDots2 = compose(carousel_stories_exports, "SeparatedBottomPaginationHasDots", G, B);
  var SeparatedBottomPaginationHasNumbers2 = compose(carousel_stories_exports, "SeparatedBottomPaginationHasNumbers", G, B);
  var CenteredBottomPaginationHasDots2 = compose(carousel_stories_exports, "CenteredBottomPaginationHasDots", G, B);
  var CenteredBottomPaginationHasNumbers2 = compose(carousel_stories_exports, "CenteredBottomPaginationHasNumbers", G, B);
  var CombinationsTopNavigationBottomDots2 = compose(carousel_stories_exports, "CombinationsTopNavigationBottomDots", G, B);
  var CenteredHasDots2 = compose(carousel_stories_exports, "CenteredHasDots", G, B);
  var CenteredHasNumbers2 = compose(carousel_stories_exports, "CenteredHasNumbers", G, B);
  var Faded2 = compose(carousel_stories_exports, "Faded", G, B);
  var FadedBothSides2 = compose(carousel_stories_exports, "FadedBothSides", G, B);
  var Peeking2 = compose(carousel_stories_exports, "Peeking", G, B);
  var PeekingBothSides2 = compose(carousel_stories_exports, "PeekingBothSides", G, B);
  var BoundedOverlayNavigation2 = compose(carousel_stories_exports, "BoundedOverlayNavigation", G, B);
  var Examples2 = compose(carousel_stories_exports, "Examples", G, B);
  return __toCommonJS(Carousel_preview_exports);
})();

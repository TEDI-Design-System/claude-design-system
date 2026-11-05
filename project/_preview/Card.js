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
      function jsx5(type, props, key) {
        return R.createElement(type, key === void 0 ? props : Object.assign({}, props, { key }));
      }
      module.exports = { jsx: jsx5, jsxs: jsx5, jsxDEV: jsx5, Fragment: R.Fragment };
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

  // Card.preview.tsx
  var Card_preview_exports = {};
  __export(Card_preview_exports, {
    AlternativeCards: () => AlternativeCards2,
    Backgrounds: () => Backgrounds2,
    BorderRadius: () => BorderRadius2,
    Borderless: () => Borderless2,
    BreakpointProps: () => BreakpointProps2,
    CardInfo: () => CardInfo2,
    Default: () => Default2,
    DefaultCard: () => DefaultCard2,
    EqualHeight: () => EqualHeight2,
    HeaderTypes: () => HeaderTypes2,
    MultipleContent: () => MultipleContent2,
    Spacing: () => Spacing2,
    SplitCardBody: () => SplitCardBody2,
    TimelineCard: () => TimelineCard2,
    TwoTonedCard: () => TwoTonedCard2,
    WithNotification: () => WithNotification2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/content/card/card.stories.tsx
  var card_stories_exports = {};
  __export(card_stories_exports, {
    AlternativeCards: () => AlternativeCards,
    Backgrounds: () => Backgrounds,
    BorderRadius: () => BorderRadius,
    Borderless: () => Borderless,
    BreakpointProps: () => BreakpointProps,
    CardInfo: () => CardInfo,
    Default: () => Default,
    DefaultCard: () => DefaultCard,
    EqualHeight: () => EqualHeight,
    HeaderTypes: () => HeaderTypes,
    MultipleContent: () => MultipleContent,
    Spacing: () => Spacing,
    SplitCardBody: () => SplitCardBody,
    TimelineCard: () => TimelineCard,
    TwoTonedCard: () => TwoTonedCard,
    WithNotification: () => WithNotification,
    default: () => card_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // .storybook/subcomponent-controls.ts
  init_define_import_meta_env();
  init_define_process_env();
  var SEP = "__";
  var ALWAYS_EXCLUDE = ["style", "ref", "key", "defaultServerBreakpoint", "xs", "sm", "md", "lg", "xl", "xxl"];
  var stripQuotes = (value) => value.replace(/^['"]|['"]$/g, "");
  var isNumericLiteral = (value) => /^-?\d+(?:\.\d+)?$/.test(value);
  var inferControl = (type) => {
    switch (type?.name) {
      case "boolean":
        return { control: "boolean" };
      case "number":
        return { control: "number" };
      case "string":
        return { control: "text" };
      case "enum": {
        const literals = (type.value ?? []).map((entry) => stripQuotes(entry.value)).filter((value) => value !== "undefined" && value !== "null");
        if (literals.length === 0) return { control: "text" };
        if (literals.every((value) => value === "true" || value === "false")) return { control: "boolean" };
        if (literals.every(isNumericLiteral)) return { control: "select", options: literals.map(Number) };
        return { control: "select", options: literals };
      }
      default:
        return { control: "object" };
    }
  };
  var subcomponentArgTypes = (component, options) => {
    const { category, prefix, include, exclude = [] } = options;
    const docgen = component;
    const props = docgen.__docgenInfo?.props;
    if (!props) {
      console.warn(
        `[subcomponentArgTypes] No __docgenInfo for "${docgen.displayName ?? category}". Controls will not be generated. Check the react-docgen-typescript config in .storybook/main.ts.`
      );
      return {};
    }
    const skip = /* @__PURE__ */ new Set([...ALWAYS_EXCLUDE, ...exclude]);
    const argTypes = {};
    for (const [name, prop] of Object.entries(props)) {
      if (include && !include.includes(name)) continue;
      if (skip.has(name)) continue;
      const { control, options: controlOptions } = inferControl(prop.type);
      const defaultValue = prop.defaultValue?.value;
      argTypes[`${prefix}${SEP}${name}`] = {
        name,
        description: prop.description || void 0,
        control,
        options: controlOptions,
        table: {
          category,
          type: prop.type ? { summary: prop.type.raw ?? prop.type.name } : void 0,
          defaultValue: defaultValue !== void 0 && defaultValue !== null ? { summary: String(defaultValue) } : void 0
        }
      };
    }
    return argTypes;
  };
  var getSubcomponentProps = (args, prefix) => {
    const head = `${prefix}${SEP}`;
    const props = {};
    for (const [key, value] of Object.entries(args)) {
      if (key.startsWith(head) && value !== void 0 && value !== "") {
        props[key.slice(head.length)] = value;
      }
    }
    return props;
  };
  var getPrimaryComponentProps = (args) => {
    const props = {};
    for (const [key, value] of Object.entries(args)) {
      if (!key.includes(SEP)) props[key] = value;
    }
    return props;
  };

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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/heading/heading.tsx
  var heading_exports = {};
  __export(heading_exports, {
    default: () => heading_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(heading_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var heading_default = ns2["Heading"] ?? ns2;

  // src/tedi/components/layout/grid/index.ts
  var grid_exports = {};
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/grid/row.tsx
  var row_exports = {};
  __export(row_exports, {
    default: () => row_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(row_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var row_default = ns3["Row"] ?? ns3;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, row_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/grid/col.tsx
  var col_exports = {};
  __export(col_exports, {
    default: () => col_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(col_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var col_default = ns4["Col"] ?? ns4;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, col_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/misc/separator/separator.tsx
  var separator_exports = {};
  __export(separator_exports, {
    default: () => separator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(separator_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var separator_default = ns5["Separator"] ?? ns5;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/misc/stretch-content/stretch-content.tsx
  var stretch_content_exports = {};
  __export(stretch_content_exports, {
    default: () => stretch_content_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(stretch_content_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var stretch_content_default = ns6["StretchContent"] ?? ns6;

  // src/tedi/components/misc/stretch-content/stretch-content.stories.tsx
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var button_default = ns7["Button"] ?? ns7;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/card/index.ts
  var card_exports = {};
  __export(card_exports, {
    default: () => card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var card_default = ns8["Card"] ?? ns8;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var vertical_spacing_default = ns9["VerticalSpacing"] ?? ns9;

  // src/tedi/components/misc/stretch-content/stretch-content.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var CardsExample = {
    render: (_args) => {
      const lorem = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad expedita iste itaque laborum magnam non nulla tempora ullam! A consequuntur dicta et incidunt nisi pariatur sapiente, temporibus unde voluptatem?" });
      const card = (title, content) => {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(card_exports.Card, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.CardHeader, { background: "brand-primary", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h2", children: title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stretch_content_default, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { direction: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { children: content }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { children: "Click me" }) })
          ] }) }) })
        ] });
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stretch_content_default, { children: card(
          "Card with longer content",
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            lorem,
            lorem
          ] })
        ) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: card("Card that is not stretched", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: lorem })) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stretch_content_default, { children: card("Card where content is also stretched", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: lorem })) }) })
      ] });
    }
  };

  // src/tedi/components/content/card/card-stories-templates.tsx
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var text_default = ns10["Text"] ?? ns10;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/heading-with-icon/heading-with-icon.tsx
  var heading_with_icon_exports = {};
  __export(heading_with_icon_exports, {
    default: () => heading_with_icon_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(heading_with_icon_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var heading_with_icon_default = ns11["HeadingWithIcon"] ?? ns11;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/navigation/link/link.tsx
  var link_exports = {};
  __export(link_exports, {
    default: () => link_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(link_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var link_default = ns12["Link"] ?? ns12;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/tags/status-badge/status-badge.tsx
  var status_badge_exports = {};
  __export(status_badge_exports, {
    default: () => status_badge_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(status_badge_exports, __toESM(require_tedi_namespace()));
  var ns13 = window.Tedi;
  var status_badge_default = ns13["StatusBadge"] ?? ns13;

  // src/tedi/components/content/card/card-stories-templates.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var HeaderTypesTemplate = (_args) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Header, { background: "primary", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(heading_exports.Heading, { element: "h3", children: "Pealkiri" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card.Header, { background: "primary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(heading_exports.Heading, { element: "h3", children: "Pealkiri" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card.Header, { background: "primary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(heading_exports.Heading, { element: "h3", children: "Pealkiri" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { children: "Loo" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" }) }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card.Header, { background: "primary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(heading_exports.Heading, { element: "h3", children: "Pealkiri" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { width: "auto", style: { display: "flex", gap: 10 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { visualType: "secondary", iconLeft: { name: "share" }, children: "Jaga" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { visualType: "secondary", iconLeft: { name: "print" }, children: "Prindi" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" }) }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card.Header, { background: "primary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(heading_exports.Heading, { element: "h3", children: "Pealkiri" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(link_exports.Link, { id: "card-link", iconRight: { name: "arrow_right_alt" }, href: "#", children: "Vaata tulemust" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" }) }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card.Header, { background: "primary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(heading_exports.Heading, { element: "h3", children: "Pealkiri" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(status_badge_exports.StatusBadge, { color: "brand", children: "Kinnitatud" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" }) }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card.Header, { background: "secondary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(heading_exports.Heading, { element: "h3", children: "Pealkiri" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { children: "Loo" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" }) }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card.Header, { background: "tertiary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(heading_exports.Heading, { element: "h3", children: "Pealkiri" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { children: "Loo" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" }) }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card.Header, { background: "brand-primary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(heading_exports.Heading, { element: "h3", children: "Pealkiri" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { visualType: "secondary", children: "Loo" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { children: "Kirjeldus" }) }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card.Header, { background: "brand-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(heading_exports.Heading, { element: "h3", children: "Pealkiri" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { visualType: "secondary", children: "Loo" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { children: "Kirjeldus" }) }) })
    ] }) })
  ] });
  var DefaultCardTemplates = (_args) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card.Content, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(status_badge_exports.StatusBadge, { color: "brand", children: "Kinnitatud" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card.Content, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Pealkiri" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card.Content, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Pealkiri" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(status_badge_exports.StatusBadge, { color: "brand", children: "Kinnitatud" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { className: "flex align-items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(icon_exports.Icon, { name: "monitor_heart" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" })
    ] }) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { className: "flex align-items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(icon_exports.Icon, { name: "monitor_heart" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Pealkiri" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { className: "flex align-items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(icon_exports.Icon, { name: "monitor_heart" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Pealkiri" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { children: "Loo" }) })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { lg: 6, sm: 12, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Pealkiri" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(separator_exports.Separator, { spacing: 1.5 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { justifyContent: "center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { children: "Loo" }) }) })
    ] }) }) }) }) }) })
  ] });
  var CardInfoTemplate = (_args) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { background: "brand-tertiary", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { width: "auto", className: "flex align-items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(icon_exports.Icon, { background: "primary", name: "assignment_late" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Pealkiri" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      card_exports.Card.Content,
      {
        background: "brand-tertiary",
        backgroundImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzUiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA3NSA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC43NSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01OC41Njc0IDE5LjAzNjFDNjAuMjMzOCAyMC42MTAzIDYxLjU3NzYgMjIuNSA2Mi41ODk1IDI0LjcwODhDNjQuNDM2MiAyOC43NDMxIDY0LjgzNjkgMzIuOTUzMyA2My42NDM1IDM3LjI1MzdDNjMuMzk1NyAzOC4xNDgxIDYzLjAzNTEgMzkuMDEyOSA2Mi42NzQ1IDM5Ljg3NzdDNjIuNTE1NSA0MC4yNjEgNjIuMzU1MSA0MC42NDM1IDYyLjIwNjQgNDEuMDI3NEM2Mi4wNTI4IDQxLjQyMjcgNjEuODI3IDQxLjQ0NzIgNjEuNDYwNiA0MS4yNDA5QzYwLjA1MjUgNDAuNDQyMiA1OC42NDA2IDM5LjY1MDIgNTcuMjI3MyAzOC44NTc0QzU1LjMyMTQgMzcuNzg3MyA1My40MTQ4IDM2LjcxODUgNTEuNTE2IDM1LjYzMjlDNDguOTg2NyAzNC4xODg2IDQ3LjY5MDQgMzAuNzc4MiA0OC41ODcxIDI3Ljk4OTdDNDguNzY0NyAyNy40MzU3IDQ5LjAwNDYgMjYuODkwOSA0OS4yODc4IDI2LjM4MThDNTAuNDgwNiAyNC4yMzU4IDUxLjY4MzQgMjIuMDkzOSA1Mi44ODc2IDE5Ljk1MjdDNTMuMzc4NCAxOS4wODEyIDUzLjg2ODUgMTguMjA3NSA1NC4zNTc5IDE3LjMzNTNDNTQuMzY5NSAxNy4zMTUyIDU0LjM4MSAxNy4yOTUyIDU0LjM5MTIgMTcuMjc0NEM1NC4zNzc4IDE3LjI1NzcgNTQuMzY2NCAxNy4yNDA1IDU0LjM1MjkgMTcuMjIzOEM1MS4wOTY3IDIxLjk3MDQgNDYuNjQ2MSAyNC43OTk2IDQwLjkwODIgMjUuNTc5NUMzNi41OTY5IDI2LjE2NTIgMzIuMTQ4MiAyNC45NTI3IDI5Ljc1NjUgMjMuMzY1NEMyOS44MzUzIDIzLjIyNTkgMjkuOTA5NiAyMy4wODE5IDI5Ljk4NDQgMjIuOTRDMzAuMTQ1MiAyMi42MzA3IDMwLjMwNiAyMi4zMjE0IDMwLjUwODUgMjIuMDQxNUMzNC4yMDAxIDE2Ljk0MTMgMzkuMTc5NSAxNC4yMDAzIDQ1LjQ3MzQgMTMuOTg1MkM0OC4zMDM5IDEzLjg4OCA1MS4wMTY3IDE0LjQ3NTUgNTMuNTkxMiAxNS42ODQ0QzUzLjA0MzQgMTMuNzIyMSA1My44NDkzIDExLjU1OTIgNTUuNjg0NSAxMC40NjkyQzU3Ljg3ODMgOS4xNjQ1NiA2MC43MTQ4IDkuODg1ODEgNjIuMDE3NCAxMi4wODFDNjMuMzIwNyAxNC4yNzQ4IDYyLjU5ODQgMTcuMTEyMyA2MC40MDMyIDE4LjQxNjJDNTkuODIxNCAxOC43NjE4IDU5LjE5NTYgMTguOTY0NiA1OC41NjUzIDE5LjAzNjZMNTguNTY3NCAxOS4wMzYxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC43NSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMS4yMjQ3IDU2Ljk0OThDMjAuMzc4NiA1NC4xMTY3IDIwLjA5NjMgNTEuMTM5MiAyMC4zOTA1IDQ4LjAxOTJDMjAuOTI5NCA0Mi4zMjE4IDIzLjE5NyAzNy4zNjA1IDI3LjMwMzYgMzMuMzI2NUMyOC4xNTcxIDMyLjQ4NzMgMjkuMTE3NyAzMS43NTM4IDMwLjA3ODIgMzEuMDIwM0MzMC41MDMgMzAuNjk0NyAzMC45Mjg4IDMwLjM3MDkgMzEuMzQyNiAzMC4wMzhDMzEuNzY5IDI5LjY5NTQgMzIuMDM3IDI5LjgxMzYgMzIuMzEzNCAzMC4yODA0QzMzLjM3MTEgMzIuMDgwNyAzNC40Mzc1IDMzLjg3NiAzNS41MDQ4IDM1LjY3M0MzNi45NDM2IDM4LjA5NzUgMzguMzg0MiA0MC41MjEgMzkuODA1IDQyLjk1ODJDNDEuNjk4OSA0Ni4yMDI3IDQwLjk0NzUgNTAuODQ4MyAzOC4xNDc1IDUzLjM4NDhDMzcuNTkxOCA1My44ODkxIDM2Ljk3MjUgNTQuMzQzIDM2LjMyNzcgNTQuNzI5QzMzLjYxMTQgNTYuMzU2OSAzMC44ODY0IDU3Ljk3MzggMjguMTYwNCA1OS41ODg5QzI3LjA1MDIgNjAuMjQ2IDI1LjkzOTMgNjAuOTA1NyAyNC44MyA2MS41NjQ1QzI0LjgwNDIgNjEuNTc5NCAyNC43Nzg0IDYxLjU5NDMgMjQuNzUzNiA2MS42MTA5QzI0Ljc1NzkgNjEuNjM4MyAyNC43NTk1IDYxLjY2NDkgMjQuNzYzOCA2MS42OTIyQzMxLjQ2MjIgNTguNDkwMSAzOC4yNTgzIDU4LjIwMDEgNDUuMTcwNyA2MS4wMjkzQzUwLjM2NDMgNjMuMTU1NSA1NC41NTE3IDY3LjM3OTEgNTYuMTk5NiA3MC42OTQ1QzU2LjAyMTYgNzAuNzk5NiA1NS44NDU4IDcwLjkxMjUgNTUuNjcwNyA3MS4wMjI4QzU1LjI5MTYgNzEuMjY0NiA1NC45MTI1IDcxLjUwNjQgNTQuNTA1OCA3MS42ODg0QzQ3LjA5MyA3NS4wMDQ4IDM5Ljc2MyA3NC44NTUyIDMyLjU5MzggNzEuMDM2NUMyOS4zNjkzIDY5LjMxOTUgMjYuNzE4IDY2LjkxMzcgMjQuNjIxOCA2My45MDNDMjMuOTY4MiA2Ni40NDgyIDIxLjY3MzEgNjguMzQ0NSAxOC45MjAyIDY4LjM3ODZDMTUuNjI4MiA2OC40MjExIDEyLjkyNDkgNjUuNzg2MSAxMi44ODU1IDYyLjQ5NEMxMi44NDQ1IDU5LjIwMjggMTUuNDgxMyA1Ni40OTkxIDE4Ljc3NDMgNTYuNDU4M0MxOS42NDcyIDU2LjQ0NzYgMjAuNDc2OSA1Ni42MjQ2IDIxLjIyNzUgNTYuOTUwNkwyMS4yMjQ3IDU2Ljk0OThaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjc1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuOTg2MjEgMjQuMjE2NEM4LjUzNjM5IDIzLjg3MTggNy4xNjU2NyAyMy4yNDQ3IDUuODc4MDYgMjIuMzMwMUMzLjUyNzExIDIwLjY1OTEgMS45MzMxMSAxOC40MTkyIDEuMjA3MiAxNS42MTAyQzEuMDU2MDEgMTUuMDI2MiAwLjk3NzkxMiAxNC40MjIxIDAuODk5ODE0IDEzLjgxODFDMC44NjQ3NyAxMy41NTA2IDAuODMwNzI2IDEzLjI4MzEgMC43ODk2NzYgMTMuMDE4N0MwLjc0NzYyMyAxMi43NDYyIDAuODY2NzcxIDEyLjY1OSAxLjE0MDExIDEyLjY1NkMyLjE5MjQ0IDEyLjY0OCAzLjI0NDc1IDEyLjYzNSA0LjI5ODA4IDEyLjYyMkM1LjcxODg2IDEyLjYwNDkgNy4xMzk2NCAxMi41ODY5IDguNTYxNDIgMTIuNTgwOUMxMC40NTQ4IDEyLjU3MTkgMTIuMjkzMSAxNC4wNzA1IDEyLjY5NDYgMTUuOTMxOEMxMi43NzQ3IDE2LjMwMTUgMTIuODE2OCAxNi42ODYxIDEyLjgyMjggMTcuMDY0OEMxMi44NDg4IDE4LjY2MDYgMTIuODY3OCAyMC4yNTc0IDEyLjg4NTggMjEuODU0M0MxMi44OTI5IDIyLjUwNDQgMTIuOTAwOSAyMy4xNTU1IDEyLjkwODkgMjMuODA1N0MxMi45MDg5IDIzLjgyMDcgMTIuOTA4OSAyMy44MzU4IDEyLjkwOTkgMjMuODUwOEMxMi45MjI5IDIzLjg1NTggMTIuOTM0OSAyMy44NjE4IDEyLjk0NzkgMjMuODY2OEMxMy4yMzgzIDIwLjEzNjIgMTQuODI0MyAxNy4wOTY5IDE3LjgwMSAxNC43OTI4QzIwLjAzNzggMTMuMDYxNyAyMi45MzY1IDEyLjI5ODQgMjQuNzk4OCAxMi40MTQ2QzI0Ljc5OTggMTIuNTE4OCAyNC44MDQ4IDEyLjYyNCAyNC44MDg4IDEyLjcyODJDMjQuODE4OCAxMi45NTQ2IDI0LjgyODggMTMuMTgxIDI0LjgwNTggMTMuNDA0M0MyNC4zODUzIDE3LjQ3NTUgMjIuNDcyOSAyMC42MzcxIDE4Ljk5OTUgMjIuODAzOUMxNy40Mzc2IDIzLjc3ODYgMTUuNzE5NCAyNC4zMjk2IDEzLjg3NzEgMjQuNDg1OUMxNC44MjMzIDI1LjQxMjUgMTUuMDcyNiAyNi44OTIxIDE0LjM5MzcgMjguMTAyM0MxMy41ODI3IDI5LjU0OTggMTEuNzUxNCAzMC4wNjU3IDEwLjMwNDYgMjkuMjUzM0M4Ljg1Nzc5IDI4LjQ0MTkgOC4zNDIxNSAyNi42MDk2IDkuMTU0MTYgMjUuMTYyMUM5LjM2OTQzIDI0Ljc3ODQgOS42NTU3OSAyNC40NjA5IDkuOTg3MjEgMjQuMjE1NEw5Ljk4NjIxIDI0LjIxNjRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
        backgroundSize: "75px",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { width: "auto", className: "flex align-items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(icon_exports.Icon, { background: "primary", name: "assignment_late" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Pealkiri" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" })
          ] })
        ] }) })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { border: "accent", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { background: "accent", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { width: "auto", className: "flex align-items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(icon_exports.Icon, { background: "primary", name: "assignment_late" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Pealkiri" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Kirjeldus" })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { border: "neutral-primary", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { background: "neutral-primary", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { width: "auto", className: "flex align-items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(icon_exports.Icon, { background: "primary", name: "calendar_today", filled: true }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(text_exports.Text, { color: "secondary", children: [
        "Haigusleht: ",
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: "118." }),
        " p\xE4ev"
      ] })
    ] }) }) }) })
  ] });
  var AlternativeCardsTemplate = (_args) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { lg: 6, sm: 12, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Header, { background: "primary", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(heading_with_icon_exports.HeadingWithIcon, { name: "assignment_ind", headingColor: "brand", iconColor: "brand", children: "Minu tahteavaldus" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { padding: { top: 0, right: 1, bottom: 1, left: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "N\xE4iteks elundidoonorlus ja vere\xFClekanne" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(separator_exports.Separator, { spacing: 1.5 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { visualType: "secondary", children: "Vaata tahteavaldusi" })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { lg: 6, sm: 12, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Pealkiri" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "N\xE4iteks elundidoonorlus ja vere\xFClekanne" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(separator_exports.Separator, { spacing: 1.5 }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { visualType: "secondary", children: "Vaata tahteavaldusi" })
      ] }) }) }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { lg: 6, sm: 12, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(card_exports.Card, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Header, { background: "brand-primary", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(heading_exports.Heading, { element: "h3", color: "white", children: "L\xFChike pealkiri" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "N\xE4iteks elundidoonorlus ja vere\xFClekanne" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { visualType: "secondary", children: "Vaata tahteavaldusi" })
        ] }) }) }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { lg: 6, sm: 12, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "N\xE4iteks elundidoonorlus ja vere\xFClekanne" }) }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { border: "left-danger-secondary", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { children: "Oluline kaart" }) }) }) }) })
  ] });
  var SpacingTemplate = (_args) => {
    const paddings = [
      { top: 0.5, left: 0.5, right: 0.5, bottom: 0.5 },
      { top: 1, left: 1, right: 1, bottom: 1 },
      { top: 1.5, left: 1.5, right: 1.5, bottom: 1.5 }
    ];
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: paddings.map((padding, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { lg: 4, sm: 12, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { padding, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { children: "Cabbage, comprising several cultivars of Brassica oleracea, is a leafy green, red (purple), or white (pale green) biennial plant grown as an annual vegetable crop for its dense-leaved heads." }) }) }) }, index)) });
  };
  var BackgroundColorsTemplate = (_args) => {
    const backgroundColors = [
      "primary",
      "secondary",
      "tertiary",
      "brand-primary",
      "brand-secondary",
      "brand-tertiary",
      "brand-quaternary",
      "success-primary",
      "accent"
    ];
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: backgroundColors.map((color, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { lg: 4, sm: 12, style: { marginBottom: "1.5rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { background: color, borderless: color !== "primary" ? true : false, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { children: "Cabbage, comprising several cultivars of Brassica oleracea, is a leafy green, red (purple), or white (pale green) biennial plant grown as an annual vegetable crop for its dense-leaved heads." }) }) }) }, index)) });
  };

  // src/tedi/components/content/card/card.stories.tsx
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  var card_stories_default = {
    title: "TEDI-Ready/Content/Card",
    component: card_exports.Card,
    subcomponents: {
      "Card.Content": card_exports.Card.Content,
      "Card.Header": card_exports.Card.Header,
      "Card.Notification": card_exports.Card.Notification
    },
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      docs: {
        source: {
          transform: (code) => {
            return code.replaceAll("CardContent", "Card.Content").replaceAll("CardHeader", "Card.Header").replaceAll("CardNotification", "Card.Notification");
          }
        }
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-(work-in-progress)?node-id=163-19532&m=dev"
      }
    }
  };
  var GeneralTemplate = (args) => {
    const getSplitContent = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { padding: 0, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(grid_exports.Row, { gutter: 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { borderless: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(card_exports.Card.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Left" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis mollis augue, vitae aliquet elit congue a. Donec vitae sagittis odio, et maximus nulla. Quisque metus augue, euismod non auctor sed, consequat in ligula. Pellentesque consectetur, justo in luctus sagittis, metus justo ultricies leo, et mollis enim ipsum id erat. Pellentesque congue ante metus, ut tempor tortor lobortis non. Proin in ligula sed ante accumsan viverra. Ut et tempor neque." })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(stretch_content_exports.StretchContent, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { borderless: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { background: "secondary", children: "Right" }) }) }) })
    ] }) });
    const getDefaultContent = (cardContent) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { ...cardContent, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Kirjeldus" }) });
    const getNotification = (notification) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Notification, { ...notification, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Kaardi teavitus" }) });
    const getContent2 = (content) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { ...content });
    const getCardHeader = (header) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Header, { ...header, children: header.children });
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(card_exports.Card, { ...args.card, children: [
      args.cardHeader && getCardHeader(typeof args.cardHeader === "boolean" ? {} : args.cardHeader),
      args.cardNotification && getNotification(typeof args.cardNotification === "boolean" ? {} : args.cardNotification),
      args.splitContent ? getSplitContent() : args.cardContent === false ? null : getDefaultContent(typeof args.cardContent === "boolean" ? {} : args.cardContent),
      args.cardContent2 && getContent2(typeof args.cardContent2 === "boolean" ? {} : args.cardContent2)
    ] });
  };
  var Default = {
    argTypes: {
      ...subcomponentArgTypes(card_exports.Card.Header, { category: "Card.Header", prefix: "header", exclude: ["children"] }),
      ...subcomponentArgTypes(card_exports.Card.Content, { category: "Card.Content", prefix: "content", exclude: ["children"] })
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(card_exports.Card, { ...getPrimaryComponentProps(args), children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Header, { ...getSubcomponentProps(args, "header"), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(heading_exports.Heading, { element: "h3", children: "Kaardi pealkiri" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { ...getSubcomponentProps(args, "content"), children: "Kirjeldus" })
    ] })
  };
  var HeaderTypes = {
    render: HeaderTypesTemplate
  };
  var DefaultCard = {
    render: DefaultCardTemplates
  };
  var CardInfo = {
    render: CardInfoTemplate
  };
  var AlternativeCards = {
    render: AlternativeCardsTemplate
  };
  var Spacing = {
    render: SpacingTemplate
  };
  var Backgrounds = {
    render: BackgroundColorsTemplate
  };
  var MultipleContent = {
    render: GeneralTemplate,
    args: {
      ...Default.args,
      cardContent: {
        hasSeparator: true
      },
      cardContent2: {
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Kirjeldus 2" })
      },
      cardHeader: false
    }
  };
  var SplitCard = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(grid_exports.Row, { gutter: 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { borderless: true, borderRadius: { right: false }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(card_exports.Card.Content, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Left" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis mollis augue, vitae aliquet elit congue a. Donec vitae sagittis odio, et maximus nulla. Quisque metus augue, euismod non auctor sed, consequat in ligula. Pellentesque consectetur, justo in luctus sagittis, metus justo ultricies leo, et mollis enim ipsum id erat. Pellentesque congue ante metus, ut tempor tortor lobortis non. Proin in ligula sed ante accumsan viverra. Ut et tempor neque." })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(stretch_content_exports.StretchContent, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { borderless: true, borderRadius: { left: false }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { background: "secondary", children: "Right" }) }) }) })
  ] }) });
  var SplitCardBody = {
    render: SplitCard
  };
  var Borderless = {
    render: GeneralTemplate,
    args: {
      ...Default.args,
      card: {
        borderless: true
      },
      cardHeader: false
    }
  };
  var BorderRadius = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { children: "Default radius" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { borderRadius: false, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { children: "No radius" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { borderRadius: { top: false }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { children: "No top radius" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { borderRadius: { bottom: false }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { children: "No bottom radius" }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(separator_exports.Separator, { spacing: 1.5 }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { borderRadius: { left: false }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { children: "No left radius" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { borderRadius: { right: false }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { children: "No right radius" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { borderRadius: { topLeft: false }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { children: "No top-left" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { borderRadius: { bottomRight: false }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { children: "No bottom-right" }) }) })
      ] })
    ] });
  };
  var BreakpointProps = {
    render: GeneralTemplate,
    args: {
      card: {
        background: "success-primary",
        border: "brand-primary"
      },
      cardContent: {
        className: "test123",
        background: void 0,
        sm: {
          background: "brand-secondary",
          padding: 0
        },
        md: {
          background: "brand-tertiary",
          padding: 1
        },
        lg: {
          background: void 0,
          padding: 1.5
        }
      }
    }
  };
  var EqualHeight = {
    ...CardsExample
  };
  var WithNotification = {
    render: GeneralTemplate,
    args: {
      card: {
        padding: 0.75
      },
      cardHeader: {
        background: "primary",
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(heading_exports.Heading, { element: "h3", children: "Kaardi pealkiri" })
      },
      cardNotification: true
    }
  };
  var Timeline = (args) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { ...args, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(grid_exports.Row, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { width: 3, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Kaardi sisu" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(separator_exports.Separator, { axis: "vertical", color: "accent", variant: "dotted", dotPosition: "center", isStretched: true }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Kaardi sisu" }) })
  ] }) }) });
  var TimelineCard = {
    render: Timeline,
    args: {}
  };
  var TwoToned = (_args) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(grid_exports.Row, { gutter: 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(stretch_content_exports.StretchContent, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { borderRadius: { right: false }, borderless: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card.Content, { background: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(icon_exports.Icon, { name: "straighten", className: "text-disabled" }) }) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(separator_exports.Separator, { axis: "vertical" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(card_exports.Card, { borderRadius: { left: false }, borderless: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(card_exports.Card.Content, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-bold", children: "Mingi statistika: x kg" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Mingi kirjeldus" })
    ] }) }) })
  ] }) });
  var TwoTonedCard = {
    render: TwoToned,
    args: {}
  };

  // .design-sync/artifact/compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  function compose(stories, key, globalDefaults, backgrounds) {
    const meta = stories.default ?? {};
    const story = stories[key];
    const args = { ...meta.args ?? {}, ...story?.args ?? {} };
    const argTypes = { ...meta.argTypes ?? {}, ...story?.argTypes ?? {} };
    for (const name of Object.keys(args)) {
      const mapping = argTypes[name]?.mapping;
      if (mapping && typeof mapping === "object" && args[name] in mapping) args[name] = mapping[args[name]];
    }
    const title = typeof meta.title === "string" ? meta.title : "";
    const context = {
      args,
      name: key,
      title,
      kind: title,
      id: "",
      componentId: "",
      globals: { ...globalDefaults, ...meta.globals ?? {}, ...story?.globals ?? {} },
      viewMode: "story",
      parameters: { ...meta.parameters ?? {}, ...story?.parameters ?? {} }
    };
    let render = null;
    if (typeof story?.render === "function") render = () => story.render(args, context);
    else if (typeof story === "function") render = () => story(args, context);
    else if (typeof meta.render === "function") render = () => meta.render(args, context);
    else {
      const Component = story?.component ?? meta.component;
      if (Component) render = () => React.createElement(Component, args);
    }
    if (!render) return () => null;
    const decorators = [].concat(story?.decorators ?? []).concat(meta.decorators ?? []);
    const decorated = decorators.reduce(
      (inner, decorator) => () => decorator(inner, context) ?? inner(),
      render
    );
    const background = backgrounds[context.globals.backgrounds?.value];
    const Story = () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: decorated() });
    if (!background) return Story;
    return () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { background }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Story, {}) });
  }

  // Card.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(card_stories_exports, "Default", G, B);
  var HeaderTypes2 = compose(card_stories_exports, "HeaderTypes", G, B);
  var DefaultCard2 = compose(card_stories_exports, "DefaultCard", G, B);
  var CardInfo2 = compose(card_stories_exports, "CardInfo", G, B);
  var AlternativeCards2 = compose(card_stories_exports, "AlternativeCards", G, B);
  var Spacing2 = compose(card_stories_exports, "Spacing", G, B);
  var Backgrounds2 = compose(card_stories_exports, "Backgrounds", G, B);
  var MultipleContent2 = compose(card_stories_exports, "MultipleContent", G, B);
  var SplitCardBody2 = compose(card_stories_exports, "SplitCardBody", G, B);
  var Borderless2 = compose(card_stories_exports, "Borderless", G, B);
  var BorderRadius2 = compose(card_stories_exports, "BorderRadius", G, B);
  var BreakpointProps2 = compose(card_stories_exports, "BreakpointProps", G, B);
  var EqualHeight2 = compose(card_stories_exports, "EqualHeight", G, B);
  var WithNotification2 = compose(card_stories_exports, "WithNotification", G, B);
  var TimelineCard2 = compose(card_stories_exports, "TimelineCard", G, B);
  var TwoTonedCard2 = compose(card_stories_exports, "TwoTonedCard", G, B);
  return __toCommonJS(Card_preview_exports);
})();

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

  // Breadcrumbs.preview.tsx
  var Breadcrumbs_preview_exports = {};
  __export(Breadcrumbs_preview_exports, {
    Condensed: () => Condensed2,
    CustomAriaLabel: () => CustomAriaLabel2,
    CustomSeparator: () => CustomSeparator2,
    Default: () => Default2,
    Long: () => Long2,
    ResponsiveVariant: () => ResponsiveVariant2,
    Short: () => Short2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/navigation/breadcrumbs/breadcrumbs.stories.tsx
  var breadcrumbs_stories_exports = {};
  __export(breadcrumbs_stories_exports, {
    Condensed: () => Condensed,
    CustomAriaLabel: () => CustomAriaLabel,
    CustomSeparator: () => CustomSeparator,
    Default: () => Default,
    Long: () => Long,
    ResponsiveVariant: () => ResponsiveVariant,
    Short: () => Short,
    default: () => breadcrumbs_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:src/tedi/components/base/icon/icon.tsx
  var icon_exports = {};
  __export(icon_exports, {
    default: () => icon_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(icon_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var icon_default = ns["Icon"] ?? ns;

  // tedi:src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var vertical_spacing_default = ns2["VerticalSpacing"] ?? ns2;

  // tedi:src/tedi/components/navigation/link/link.tsx
  var link_exports = {};
  __export(link_exports, {
    default: () => link_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(link_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var link_default = ns3["Link"] ?? ns3;

  // tedi:src/tedi/components/navigation/breadcrumbs/breadcrumbs.tsx
  var breadcrumbs_exports = {};
  __export(breadcrumbs_exports, {
    default: () => breadcrumbs_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(breadcrumbs_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var breadcrumbs_default = ns4["Breadcrumbs"] ?? ns4;

  // src/tedi/components/navigation/breadcrumbs/breadcrumbs.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var separatorOptions = {
    Chevron: void 0,
    Slash: "/",
    Arrow: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_forward", color: "inherit", size: 16, "aria-hidden": true }),
    Dash: "\u2014",
    Dot: "\xB7"
  };
  var breadcrumbs_stories_default = {
    title: "TEDI-Ready/Components/Navigation/Breadcrumbs",
    component: breadcrumbs_default,
    argTypes: {
      separator: {
        description: "Node rendered between crumbs. Pass a string for text separators (e.g. `/` or `\u203A`) or any React node for custom markup. Hidden from assistive technology \u2014 screen readers announce only the crumbs themselves.",
        control: { type: "select" },
        options: Object.keys(separatorOptions),
        mapping: separatorOptions,
        table: {
          type: { summary: "ReactNode" },
          defaultValue: { summary: '<Icon name="chevron_right" size={16} color="brand" />' }
        }
      }
    },
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.45.70?node-id=2409-21799&m=dev"
      }
    }
  };
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(breadcrumbs_default, { ...args });
  var Default = {
    render: Template,
    args: {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Dashboard" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Applications" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-current": "page", children: "Application nr 506" })
      ] })
    }
  };
  var Long = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(breadcrumbs_default, { ariaLabel: "Applications trail", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Dashboard" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Applications" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-current": "page", children: "Application nr 506" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(breadcrumbs_default, { ariaLabel: "Documents trail", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Dashboard" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Documents" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "My documents" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Application nr 506" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-current": "page", children: "Restrictions" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(breadcrumbs_default, { ariaLabel: "Medications trail", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Medications" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-current": "page", children: "Ibuprofen" })
      ] })
    ] })
  };
  var Short = {
    render: Template,
    args: {
      variant: "short",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Dashboard" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-current": "page", children: "Current page" })
      ] })
    }
  };
  var CustomAriaLabel = {
    render: Template,
    args: {
      ariaLabel: "Site path",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Dashboard" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Documents" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-current": "page", children: "Restrictions" })
      ] })
    }
  };
  var Condensed = {
    render: Template,
    args: {
      maxItems: 4,
      itemsBeforeCollapse: 1,
      itemsAfterCollapse: 2,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Dashboard" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Patients" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Anna Tamm" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Visits" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "2024-05-12" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-current": "page", children: "Restrictions" })
      ] })
    }
  };
  var ResponsiveVariant = {
    render: Template,
    args: {
      variant: "short",
      md: { variant: "long" },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Dashboard" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Documents" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "My documents" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Application nr 506" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-current": "page", children: "Restrictions" })
      ] })
    }
  };
  var CustomSeparator = {
    // Distinct `ariaLabel`s keep the three `<nav>` landmarks unique (axe `landmark-unique`).
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(breadcrumbs_default, { separator: "/", ariaLabel: "Slash separator", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Dashboard" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Documents" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-current": "page", children: "Restrictions" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        breadcrumbs_default,
        {
          separator: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_forward", color: "inherit", size: 16, "aria-hidden": true }),
          ariaLabel: "Arrow separator",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Dashboard" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Documents" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-current": "page", children: "Restrictions" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(breadcrumbs_default, { separator: "\u2014", ariaLabel: "Dash separator", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Dashboard" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Documents" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-current": "page", children: "Restrictions" })
      ] })
    ] })
  };

  // tedi-compose:compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react());
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
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
    const Story = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: decorated() });
    if (!background) return Story;
    return () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { background }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Story, {}) });
  }

  // Breadcrumbs.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(breadcrumbs_stories_exports, "Default", G, B);
  var Long2 = compose(breadcrumbs_stories_exports, "Long", G, B);
  var Short2 = compose(breadcrumbs_stories_exports, "Short", G, B);
  var CustomAriaLabel2 = compose(breadcrumbs_stories_exports, "CustomAriaLabel", G, B);
  var Condensed2 = compose(breadcrumbs_stories_exports, "Condensed", G, B);
  var ResponsiveVariant2 = compose(breadcrumbs_stories_exports, "ResponsiveVariant", G, B);
  var CustomSeparator2 = compose(breadcrumbs_stories_exports, "CustomSeparator", G, B);
  return __toCommonJS(Breadcrumbs_preview_exports);
})();

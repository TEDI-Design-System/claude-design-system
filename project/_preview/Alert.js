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

  // Alert.preview.tsx
  var Alert_preview_exports = {};
  __export(Alert_preview_exports, {
    AlertTypes: () => AlertTypes2,
    Default: () => Default2,
    Global: () => Global2,
    Headless: () => Headless2,
    Sizes: () => Sizes2,
    WithActionButton: () => WithActionButton2,
    WithCloseButton: () => WithCloseButton2,
    WithIcon: () => WithIcon2,
    WithTitleLongTextAndClosingButton: () => WithTitleLongTextAndClosingButton2,
    WithoutSideBorders: () => WithoutSideBorders2,
    WithoutTitleLongText: () => WithoutTitleLongText2,
    WithoutTitleLongTextAndClosingButton: () => WithoutTitleLongTextAndClosingButton2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/notifications/alert/alert.stories.tsx
  var alert_stories_exports = {};
  __export(alert_stories_exports, {
    AlertTypes: () => AlertTypes,
    Default: () => Default,
    Global: () => Global,
    Headless: () => Headless,
    Sizes: () => Sizes,
    WithActionButton: () => WithActionButton,
    WithCloseButton: () => WithCloseButton,
    WithIcon: () => WithIcon,
    WithTitleLongTextAndClosingButton: () => WithTitleLongTextAndClosingButton,
    WithoutSideBorders: () => WithoutSideBorders,
    WithoutTitleLongText: () => WithoutTitleLongText,
    WithoutTitleLongTextAndClosingButton: () => WithoutTitleLongTextAndClosingButton,
    default: () => alert_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var text_default = ns["Text"] ?? ns;

  // tedi:src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var button_default = ns2["Button"] ?? ns2;

  // src/tedi/components/layout/grid/index.ts
  var grid_exports = {};
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:src/tedi/components/layout/grid/row.tsx
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

  // tedi:src/tedi/components/layout/grid/col.tsx
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

  // tedi:src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var vertical_spacing_default = ns5["VerticalSpacing"] ?? ns5;

  // tedi:src/tedi/components/navigation/link/link.tsx
  var link_exports = {};
  __export(link_exports, {
    default: () => link_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(link_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var link_default = ns6["Link"] ?? ns6;

  // tedi:src/tedi/components/notifications/alert/alert.tsx
  var alert_exports = {};
  __export(alert_exports, {
    default: () => alert_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(alert_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var alert_default = ns7["Alert"] ?? ns7;

  // src/tedi/components/notifications/alert/alert.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: alert_default,
    title: "TEDI-Ready/Components/Notifications/Alert",
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-(work-in-progress)?node-id=4263-61880&m=dev"
      }
    }
  };
  var alert_stories_default = meta;
  var alertTypes = [
    { type: "info", icon: "info" },
    { type: "success", icon: "check_circle" },
    { type: "warning", icon: "warning" },
    { type: "danger", icon: "error" }
  ];
  var sizeArray = ["default", "small"];
  var TypesTemplate = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: alertTypes.map(({ type, icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(alert_default, { type, icon, ...args, children: [
    "This is a ",
    type,
    " alert."
  ] }, type)) });
  var TemplateColumn = (args) => {
    const { array, ...alertProps } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list", children: array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === array.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: value ? value.charAt(0).toUpperCase() + value.slice(1) : "" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { className: "d-flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_default, { ...alertProps, size: array[key], children: "Content description" }, alertProps.type) })
    ] }, key)) });
  };
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_default, { ...args });
  var Default = {
    args: {
      title: "Title",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        "Content description. ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_default, { href: "#", children: "Inline link example" })
      ] })
    }
  };
  var WithAndWithoutHeading = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_default, { title: "Title", ...args, children: args.children }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_default, { ...args, children: args.children })
    ] });
  };
  var Sizes = {
    render: TemplateColumn,
    args: {
      array: sizeArray,
      type: "info",
      children: "Content description",
      onClose: () => null
    }
  };
  var Headless = {
    render: Template,
    args: {
      children: "Content description"
    }
  };
  var Global = {
    render: WithAndWithoutHeading,
    args: {
      children: "Content description",
      isGlobal: true
    }
  };
  var WithoutSideBorders = {
    render: WithAndWithoutHeading,
    args: {
      children: "Content description",
      noSideBorders: true
    }
  };
  var WithIcon = {
    render: WithAndWithoutHeading,
    args: {
      children: "Content description",
      icon: "check_circle"
    }
  };
  var WithCloseButton = {
    render: WithAndWithoutHeading,
    args: {
      children: "Content description",
      onClose: () => null
    }
  };
  var AlertTypes = {
    render: TypesTemplate,
    args: {
      children: "Content description",
      onClose: () => null
    }
  };
  var WithoutTitleLongText = {
    args: {
      children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis nisi purus, quis bibendum lectus finibus in. Sed sed tellus eu augue finibus efficitur sit amet a velit. Donec vitae ex et ligula commodo luctus. Phasellus accumsan ligula quis nibh hendrerit, ac rutrum velit dictum. Curabitur ut vulputate justo. Proin eu sapien tellus. Morbi quis dapibus felis. Quisque commodo tempus vulputate.",
      type: "warning",
      icon: "warning"
    },
    render: (args) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_default, { ...args });
    }
  };
  var WithoutTitleLongTextAndClosingButton = {
    args: {
      children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis nisi purus, quis bibendum lectus finibus in. Sed sed tellus eu augue finibus efficitur sit amet a velit. Donec vitae ex et ligula commodo luctus. Phasellus accumsan ligula quis nibh hendrerit, ac rutrum velit dictum. Curabitur ut vulputate justo. Proin eu sapien tellus. Morbi quis dapibus felis. Quisque commodo tempus vulputate.",
      type: "info",
      icon: "info",
      onClose: () => null
    },
    render: (args) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_default, { ...args });
    }
  };
  var WithTitleLongTextAndClosingButton = {
    args: {
      children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis nisi purus, quis bibendum lectus finibus in. Sed sed tellus eu augue finibus efficitur sit amet a velit. Donec vitae ex et ligula commodo luctus. Phasellus accumsan ligula quis nibh hendrerit, ac rutrum velit dictum. Curabitur ut vulputate justo. Proin eu sapien tellus. Morbi quis dapibus felis. Quisque commodo tempus vulputate.",
      type: "danger",
      title: "Title",
      icon: "error",
      onClose: () => null
    },
    render: (args) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_default, { ...args });
    }
  };
  var WithActionButton = {
    args: {
      type: "warning",
      icon: "warning",
      children: "Your account is missing a profile photo \u2014 add one so colleagues can recognise you in shared documents.",
      action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", iconRight: "arrow_forward", children: "Open profile" })
    }
  };

  // tedi-compose:compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react());
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
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

  // Alert.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(alert_stories_exports, "Default", G, B);
  var Sizes2 = compose(alert_stories_exports, "Sizes", G, B);
  var Headless2 = compose(alert_stories_exports, "Headless", G, B);
  var Global2 = compose(alert_stories_exports, "Global", G, B);
  var WithoutSideBorders2 = compose(alert_stories_exports, "WithoutSideBorders", G, B);
  var WithIcon2 = compose(alert_stories_exports, "WithIcon", G, B);
  var WithCloseButton2 = compose(alert_stories_exports, "WithCloseButton", G, B);
  var AlertTypes2 = compose(alert_stories_exports, "AlertTypes", G, B);
  var WithoutTitleLongText2 = compose(alert_stories_exports, "WithoutTitleLongText", G, B);
  var WithoutTitleLongTextAndClosingButton2 = compose(alert_stories_exports, "WithoutTitleLongTextAndClosingButton", G, B);
  var WithTitleLongTextAndClosingButton2 = compose(alert_stories_exports, "WithTitleLongTextAndClosingButton", G, B);
  var WithActionButton2 = compose(alert_stories_exports, "WithActionButton", G, B);
  return __toCommonJS(Alert_preview_exports);
})();

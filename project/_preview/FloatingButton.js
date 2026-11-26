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

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      module.exports = window.React;
    }
  });

  // react-global:react/jsx-runtime
  var require_jsx_runtime = __commonJS({
    "react-global:react/jsx-runtime"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      var R = window.React;
      function jsx4(type, props, key) {
        return R.createElement(type, key === void 0 ? props : Object.assign({}, props, { key }));
      }
      module.exports = { jsx: jsx4, jsxs: jsx4, jsxDEV: jsx4, Fragment: R.Fragment };
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

  // FloatingButton.preview.tsx
  var FloatingButton_preview_exports = {};
  __export(FloatingButton_preview_exports, {
    Default: () => Default2,
    PrimaryHorizontal: () => PrimaryHorizontal2,
    PrimaryVertical: () => PrimaryVertical2,
    SecondaryHorizontal: () => SecondaryHorizontal2,
    SecondaryVertical: () => SecondaryVertical2,
    VisualTest: () => VisualTest2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/buttons/floating-button/floating-button.stories.tsx
  var floating_button_stories_exports = {};
  __export(floating_button_stories_exports, {
    Default: () => Default,
    PrimaryHorizontal: () => PrimaryHorizontal,
    PrimaryVertical: () => PrimaryVertical,
    SecondaryHorizontal: () => SecondaryHorizontal,
    SecondaryVertical: () => SecondaryVertical,
    VisualTest: () => VisualTest,
    default: () => floating_button_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // .storybook/visual-test-story.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var VISUAL_TEST_VIEWPORTS = [375, 1200];
  var VisualTestStory = ({ story, component, props }) => {
    const args = { ...story.args };
    if (story.render) {
      const node = story.render(args, {});
      if (!props) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: node });
      }
      if (!(0, import_react.isValidElement)(node)) {
        throw new Error("VisualTestStory: `props` needs a story whose `render` returns a single element.");
      }
      return (0, import_react.cloneElement)(node, props);
    }
    if (component) {
      return (0, import_react.createElement)(component, { ...args, ...props });
    }
    throw new Error("VisualTestStory: the story has no `render`; pass the `component` to render its args with.");
  };

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
  var ns2 = window.Tedi;
  var row_default = ns2["Row"] ?? ns2;

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
  var ns3 = window.Tedi;
  var col_default = ns3["Col"] ?? ns3;

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
  var ns4 = window.Tedi;
  var vertical_spacing_default = ns4["VerticalSpacing"] ?? ns4;

  // tedi:src/tedi/components/buttons/floating-button/floating-button.tsx
  var floating_button_exports = {};
  __export(floating_button_exports, {
    default: () => floating_button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(floating_button_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var floating_button_default = ns5["FloatingButton"] ?? ns5;

  // src/tedi/components/buttons/floating-button/floating-button.stories.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: floating_button_default,
    title: "Tedi-ready/Components/Buttons/FloatingButton",
    parameters: {
      chromatic: { disableSnapshot: true },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-(work-in-progress)?node-id=4514-73451&m=dev"
      }
    }
  };
  var floating_button_stories_default = meta;
  var buttonSizeArray = ["Default", "Large"];
  var buttonStateArray = ["Default", "Hover", "Active", "Focus"];
  var TemplateColumn = (args) => {
    const { array, idPrefix, ...buttonProps } = args;
    const getId = (size, value, index) => idPrefix ? `${idPrefix}${size}-${value}-${index}` : value;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { style: { gap: buttonProps.axis === "vertical" ? 100 : 0 }, children: buttonSizeArray.map((size) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { md: 12, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { style: { paddingBottom: 16 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { md: 12, lg: 6, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: size }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { style: { gap: buttonProps.axis === "vertical" ? 100 : 16, paddingBottom: 16 }, children: array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { xs: 12, style: { display: buttonProps.axis === "vertical" ? "flex" : void 0 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { xs: 2, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { children: value }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { className: "flex align-items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            floating_button_default,
            {
              id: getId(size, value, 1),
              size: size === "Large" ? "large" : "medium",
              ...buttonProps,
              children: "Scroll up"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            floating_button_default,
            {
              id: getId(size, value, 2),
              size: size === "Large" ? "large" : "medium",
              ...buttonProps,
              iconRight: "arrow_upward",
              children: "Scroll up"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            floating_button_default,
            {
              id: getId(size, value, 3),
              size: size === "Large" ? "large" : "medium",
              ...buttonProps,
              iconLeft: "arrow_upward",
              children: "Scroll up"
            }
          ),
          buttonProps.axis === "horizontal" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            floating_button_default,
            {
              id: getId(size, value, 4),
              size: size === "Large" ? "large" : "medium",
              ...buttonProps,
              icon: "arrow_upward",
              children: "Scroll up"
            }
          )
        ] })
      ] }, key)) })
    ] }, size)) });
  };
  var Default = {
    args: {
      children: "Scroll up",
      position: "static"
    }
  };
  var PrimaryHorizontal = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      axis: "horizontal",
      visualType: "primary",
      position: "static"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focusVisible: "#Focus"
      }
    }
  };
  var PrimaryVertical = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      axis: "vertical",
      visualType: "primary",
      position: "static"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focusVisible: "#Focus"
      }
    }
  };
  var SecondaryHorizontal = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      axis: "horizontal",
      visualType: "secondary",
      position: "static"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focusVisible: "#Focus"
      }
    }
  };
  var SecondaryVertical = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      axis: "vertical",
      visualType: "secondary",
      position: "static"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focusVisible: "#Focus"
      }
    }
  };
  var VisualTest = {
    tags: ["!dev", "!autodocs"],
    parameters: {
      chromatic: { disableSnapshot: false, viewports: VISUAL_TEST_VIEWPORTS },
      pseudo: {
        hover: '[id^="vt-"][id*="-Hover-"]',
        active: '[id^="vt-"][id*="-Active-"]',
        focusVisible: '[id^="vt-"][id*="-Focus-"]'
      }
    },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Default" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: Default, component: floating_button_default })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Primary horizontal" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: { ...PrimaryHorizontal, args: { ...PrimaryHorizontal.args, idPrefix: "vt-primary-horizontal-" } }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Primary vertical" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: { ...PrimaryVertical, args: { ...PrimaryVertical.args, idPrefix: "vt-primary-vertical-" } }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Secondary horizontal" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: {
              ...SecondaryHorizontal,
              args: { ...SecondaryHorizontal.args, idPrefix: "vt-secondary-horizontal-" }
            }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Secondary vertical" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: { ...SecondaryVertical, args: { ...SecondaryVertical.args, idPrefix: "vt-secondary-vertical-" } }
          }
        )
      ] })
    ] })
  };

  // tedi-compose:compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react());
  var import_jsx_runtime3 = __toESM(require_jsx_runtime());
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
    const Story = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: decorated() });
    if (!background) return Story;
    return () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { background }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Story, {}) });
  }

  // FloatingButton.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(floating_button_stories_exports, "Default", G, B);
  var PrimaryHorizontal2 = compose(floating_button_stories_exports, "PrimaryHorizontal", G, B);
  var PrimaryVertical2 = compose(floating_button_stories_exports, "PrimaryVertical", G, B);
  var SecondaryHorizontal2 = compose(floating_button_stories_exports, "SecondaryHorizontal", G, B);
  var SecondaryVertical2 = compose(floating_button_stories_exports, "SecondaryVertical", G, B);
  var VisualTest2 = compose(floating_button_stories_exports, "VisualTest", G, B);
  return __toCommonJS(FloatingButton_preview_exports);
})();

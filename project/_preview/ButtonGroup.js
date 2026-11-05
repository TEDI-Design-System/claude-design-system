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

  // ButtonGroup.preview.tsx
  var ButtonGroup_preview_exports = {};
  __export(ButtonGroup_preview_exports, {
    Default: () => Default2,
    DifferentWidthButtons: () => DifferentWidthButtons2,
    IconOnly: () => IconOnly2,
    Primary: () => Primary2,
    Secondary: () => Secondary2,
    Sizes: () => Sizes2,
    Stretched: () => Stretched2,
    Types: () => Types2,
    WithIcon: () => WithIcon2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/buttons/button-group/button-group.stories.tsx
  var button_group_stories_exports = {};
  __export(button_group_stories_exports, {
    Default: () => Default,
    DifferentWidthButtons: () => DifferentWidthButtons,
    IconOnly: () => IconOnly,
    Primary: () => Primary,
    Secondary: () => Secondary,
    Sizes: () => Sizes,
    Stretched: () => Stretched,
    Types: () => Types,
    WithIcon: () => WithIcon,
    default: () => button_group_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/base/typography/text/text.tsx
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

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/layout/grid/row.tsx
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

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/layout/grid/col.tsx
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

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var vertical_spacing_default = ns4["VerticalSpacing"] ?? ns4;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var button_default = ns5["Button"] ?? ns5;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/buttons/button-group/button-group.tsx
  var button_group_exports = {};
  __export(button_group_exports, {
    default: () => button_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_group_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var button_group_default = ns6["ButtonGroup"] ?? ns6;

  // src/tedi/components/buttons/button-group/button-group.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    title: "TEDI-Ready/Components/Buttons/ButtonGroup",
    component: button_group_default
  };
  var button_group_stories_default = meta;
  var buttonStates = ["Default", "Hover", "Active", "Focus", "Disabled"];
  var sizeArray = ["default", "small"];
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_group_default, { ...args, ariaLabel: "Button group example", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "1", children: "Details" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "2", isActive: true, children: "Updates" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "3", children: "Settings" })
  ] });
  var TemplateSizes = (args) => {
    const { array, property, ...buttonGroupProps } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list", children: array.map((value, key) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === array.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: value ? value.charAt(0).toUpperCase() + value.slice(1) : "" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_group_default, { type: "primary", ...buttonGroupProps, ...{ [property]: value }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "01", children: "Tab 1" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "02", isActive: true, children: "Tab 2" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "03", children: "Tab 3" })
        ] }) })
      ] }, key);
    }) });
  };
  var TemplateTypes = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_group_default, { type: "primary", stretch: false, ariaLabel: "Button group example", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "1", ...args, children: "Tab 1" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "2", isActive: true, ...args, children: "Tab 2" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "3", ...args, children: "Tab 3" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_group_default, { type: "secondary", stretch: false, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "1", ...args, children: "Tab 1" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "2", isActive: true, ...args, children: "Tab 2" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "3", ...args, children: "Tab 3" })
      ] }) })
    ] });
  };
  var TemplateWithIcons = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_group_default, { ...args, stretch: false, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "1", iconLeft: "table", children: "Tab 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "2", iconLeft: "refresh", isActive: true, children: "Tab 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "3", iconLeft: "settings", children: "Tab 3" })
    ] });
  };
  var TemplateIconOnly = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_group_default, { ...args, stretch: false, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "1", icon: "table", showTooltip: true, children: "Tab 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "2", icon: "refresh", isActive: true, showTooltip: true, children: "Tab 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "3", icon: "settings", showTooltip: true, children: "Tab 3" })
    ] });
  };
  var Default = {
    render: Template,
    args: {
      type: "primary",
      stretch: false,
      dropdownLabel: "Text",
      enableMobileDropdown: true
    }
  };
  var Sizes = {
    render: TemplateSizes,
    args: {
      property: "size",
      array: sizeArray,
      dropdownLabel: "Text",
      enableMobileDropdown: true
    }
  };
  var Types = {
    render: TemplateTypes
  };
  var WithIcon = {
    render: TemplateWithIcons,
    args: {
      type: "primary",
      enableMobileDropdown: true,
      dropdownLabelMode: "active"
    }
  };
  var IconOnly = {
    render: TemplateIconOnly,
    args: {
      type: "primary"
    }
  };
  var TemplateColumn = (args) => {
    const [selectedId, setSelectedId] = (0, import_react.useState)(null);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: args.states.map((state, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 1, md: 2, sm: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: state }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, md: 10, sm: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_group_default, { type: args.type, onSelectionChange: setSelectedId, ariaLabel: "Button group example", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          button_exports.Button,
          {
            id: `${state}-${args.type}`,
            isActive: state === "Active" || selectedId === `${state}-1-${args.type}`,
            onClick: () => setSelectedId(`${state}-1-${args.type}`),
            disabled: state === "Disabled",
            children: "Details"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: `${state}-2-${args.type}`, onClick: () => setSelectedId(`${state}-2-${args.type}`), children: "Updates" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: `${state}-3-${args.type}`, onClick: () => setSelectedId(`${state}-3-${args.type}`), children: "Settings" })
      ] }) })
    ] }, index)) });
  };
  var Primary = {
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplateColumn, { ...args, type: "primary" }),
    args: {
      states: buttonStates
    },
    parameters: {
      pseudo: {
        hover: ["#Hover-primary"],
        active: ["#Active-primary"],
        focusVisible: ["#Focus-primary"]
      }
    }
  };
  var Secondary = {
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplateColumn, { ...args, type: "secondary" }),
    args: {
      states: buttonStates
    },
    parameters: {
      pseudo: {
        hover: ["#Hover-secondary"],
        active: ["#Active-secondary"],
        focusVisible: ["#Focus-secondary"]
      }
    }
  };
  var DifferentWidthButtons = {
    render: (args) => {
      const [selectedId, setSelectedId] = (0, import_react.useState)(null);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        button_group_default,
        {
          ...args,
          stretch: false,
          onSelectionChange: setSelectedId,
          ariaLabel: "Button group example",
          enableMobileDropdown: true,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "1", isActive: selectedId === "1", onClick: () => setSelectedId("1"), children: "Text" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "2", isActive: selectedId === "2", children: "Longer text" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "3", isActive: selectedId === "3", children: "Even longer text" })
          ]
        }
      ) }) });
    },
    args: {
      type: "primary"
    }
  };
  var Stretched = {
    render: Template,
    args: {
      stretch: true,
      dropdownLabel: "Text",
      enableMobileDropdown: true
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

  // ButtonGroup.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(button_group_stories_exports, "Default", G, B);
  var Sizes2 = compose(button_group_stories_exports, "Sizes", G, B);
  var Types2 = compose(button_group_stories_exports, "Types", G, B);
  var WithIcon2 = compose(button_group_stories_exports, "WithIcon", G, B);
  var IconOnly2 = compose(button_group_stories_exports, "IconOnly", G, B);
  var Primary2 = compose(button_group_stories_exports, "Primary", G, B);
  var Secondary2 = compose(button_group_stories_exports, "Secondary", G, B);
  var DifferentWidthButtons2 = compose(button_group_stories_exports, "DifferentWidthButtons", G, B);
  var Stretched2 = compose(button_group_stories_exports, "Stretched", G, B);
  return __toCommonJS(ButtonGroup_preview_exports);
})();

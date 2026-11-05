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

  // InfoButton.preview.tsx
  var InfoButton_preview_exports = {};
  __export(InfoButton_preview_exports, {
    Default: () => Default2,
    Inverted: () => Inverted2,
    States: () => States2,
    UsageWithTooltipAndPopover: () => UsageWithTooltipAndPopover2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/buttons/info-button/info-button.stories.tsx
  var info_button_stories_exports = {};
  __export(info_button_stories_exports, {
    Default: () => Default,
    Inverted: () => Inverted,
    States: () => States,
    UsageWithTooltipAndPopover: () => UsageWithTooltipAndPopover,
    default: () => info_button_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

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

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/content/label/label.tsx
  var label_exports = {};
  __export(label_exports, {
    default: () => label_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(label_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var label_default = ns2["Label"] ?? ns2;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/content/text-group/text-group.tsx
  var text_group_exports = {};
  __export(text_group_exports, {
    default: () => text_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_group_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var text_group_default = ns3["TextGroup"] ?? ns3;

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
  var ns4 = window.Tedi;
  var row_default = ns4["Row"] ?? ns4;

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
  var ns5 = window.Tedi;
  var col_default = ns5["Col"] ?? ns5;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, col_exports);

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/layout/hide-at/hide-at.tsx
  var hide_at_exports = {};
  __export(hide_at_exports, {
    default: () => hide_at_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(hide_at_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var hide_at_default = ns6["HideAt"] ?? ns6;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/layout/show-at/show-at.tsx
  var show_at_exports = {};
  __export(show_at_exports, {
    default: () => show_at_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(show_at_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var show_at_default = ns7["ShowAt"] ?? ns7;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var vertical_spacing_default = ns8["VerticalSpacing"] ?? ns8;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/misc/separator/separator.tsx
  var separator_exports = {};
  __export(separator_exports, {
    default: () => separator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(separator_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var separator_default = ns9["Separator"] ?? ns9;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/navigation/link/link.tsx
  var link_exports = {};
  __export(link_exports, {
    default: () => link_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(link_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var link_default = ns10["Link"] ?? ns10;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/overlays/popover/popover.tsx
  var popover_exports = {};
  __export(popover_exports, {
    default: () => popover_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(popover_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var popover_default = ns11["Popover"] ?? ns11;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/overlays/tooltip/tooltip.tsx
  var tooltip_exports = {};
  __export(tooltip_exports, {
    default: () => tooltip_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(tooltip_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var tooltip_default = ns12["Tooltip"] ?? ns12;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/buttons/info-button/info-button.tsx
  var info_button_exports = {};
  __export(info_button_exports, {
    default: () => info_button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(info_button_exports, __toESM(require_tedi_namespace()));
  var ns13 = window.Tedi;
  var info_button_default = ns13["InfoButton"] ?? ns13;

  // src/tedi/components/buttons/info-button/info-button.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: info_button_default,
    title: "Tedi-Ready/Components/Buttons/InfoButton",
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-(work-in-progress)?node-id=4514-72997&m=dev"
      },
      controls: { include: ["isSmall", "color", "aria-label"] }
    },
    args: {
      "aria-label": "Rohkem infot"
    }
  };
  var info_button_stories_default = meta;
  var buttonStateArray = ["Default", "Hover", "Active", "Focus"];
  var TemplateColumn = (args) => {
    const { array, color = "default", ...buttonProps } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { children: array.map((state, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 4, md: 1, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", color: color === "inverted" ? "white" : "primary", children: state }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 2, md: 1, className: "text-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info_button_default, { color, ...buttonProps, "aria-label": `Info button ${state}`, id: state }) })
    ] }, index)) });
  };
  var Default = {};
  var States = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focusVisible: "#Focus"
      }
    }
  };
  var Inverted = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      color: "inverted"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focusVisible: "#Focus"
      }
    },
    globals: { backgrounds: { value: "brand" } }
  };
  var labelStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--layout-grid-gutters-04)"
  };
  var UsageWithTooltipAndPopover = {
    name: "Usage with tooltip and popover",
    parameters: { controls: { disable: true } },
    render: () => {
      const bloodGroup = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        text_group_exports.TextGroup,
        {
          type: "vertical",
          label: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: labelStyle, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(label_exports.Label, { children: "Veregrupp" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info_button_default, { "aria-label": "Rohkem infot veregrupi kohta" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Veregrupp m\xE4\xE4ratakse vereanal\xFC\xFCsiga ning see ei muutu elu jooksul." })
            ] })
          ] }),
          value: "AB-"
        }
      );
      const dentalBenefit = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        text_group_exports.TextGroup,
        {
          type: "vertical",
          label: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: labelStyle, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(label_exports.Label, { children: "Hambaravih\xFCvitise j\xE4\xE4k" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info_button_default, { "aria-label": "Rohkem infot h\xFCvitise kohta" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { width: "medium", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Hambaravih\xFCvitist saab kasutada jooksva kalendriaasta jooksul. Kasutamata j\xE4\xE4k j\xE4rgmisesse aastasse ei kandu." }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { textAlign: "right" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", underline: false, iconRight: "arrow_forward", children: "Loe rohkem" }) })
              ] }) })
            ] })
          ] }),
          value: "24\u20AC"
        }
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "1.5rem" }, children: [
          bloodGroup,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "vertical", isStretched: true }),
          dentalBenefit
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
          bloodGroup,
          dentalBenefit
        ] }) })
      ] });
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

  // InfoButton.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(info_button_stories_exports, "Default", G, B);
  var States2 = compose(info_button_stories_exports, "States", G, B);
  var Inverted2 = compose(info_button_stories_exports, "Inverted", G, B);
  var UsageWithTooltipAndPopover2 = compose(info_button_stories_exports, "UsageWithTooltipAndPopover", G, B);
  return __toCommonJS(InfoButton_preview_exports);
})();

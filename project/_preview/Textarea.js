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

  // Textarea.preview.tsx
  var Textarea_preview_exports = {};
  __export(Textarea_preview_exports, {
    ClearButtonOnInteraction: () => ClearButtonOnInteraction2,
    Default: () => Default2,
    DefaultValue: () => DefaultValue2,
    HeightExamples: () => HeightExamples2,
    HintTextAndCharacterCount: () => HintTextAndCharacterCount2,
    OnlyCharacterCount: () => OnlyCharacterCount2,
    Placeholder: () => Placeholder2,
    Sizes: () => Sizes2,
    States: () => States2,
    TextValue: () => TextValue2,
    WithHint: () => WithHint2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/textarea/textarea.stories.tsx
  var textarea_stories_exports = {};
  __export(textarea_stories_exports, {
    ClearButtonOnInteraction: () => ClearButtonOnInteraction,
    Default: () => Default,
    DefaultValue: () => DefaultValue,
    HeightExamples: () => HeightExamples,
    HintTextAndCharacterCount: () => HintTextAndCharacterCount,
    OnlyCharacterCount: () => OnlyCharacterCount,
    Placeholder: () => Placeholder,
    Sizes: () => Sizes,
    States: () => States,
    TextValue: () => TextValue,
    WithHint: () => WithHint,
    default: () => textarea_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

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

  // tedi:src/tedi/components/form/textarea/textarea.tsx
  var textarea_exports = {};
  __export(textarea_exports, {
    default: () => textarea_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(textarea_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var textarea_default = ns5["Textarea"] ?? ns5;

  // src/tedi/components/form/textarea/textarea.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: textarea_default,
    title: "TEDI-Ready/Components/Form/Textarea",
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-(work-in-progress)?node-id=3486-37618&m=dev"
      }
    }
  };
  var textarea_stories_default = meta;
  var stateArray = ["Default", "Hover", "Focus", "Active", "Disabled"];
  var TemplateColumnWithStates = (args) => {
    const { array, ...textFieldProps } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      array.map((state, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: state }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textarea_default, { disabled: state === "Disabled", ...textFieldProps, id: state }) })
      ] }, index)),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Success" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          textarea_default,
          {
            ...textFieldProps,
            id: "success-textarea",
            helper: {
              text: "Feedback text",
              type: "valid"
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Error" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          textarea_default,
          {
            ...textFieldProps,
            id: "error-textarea",
            helper: {
              text: "Feedback text",
              type: "error"
            }
          }
        ) })
      ] })
    ] });
  };
  var sizesArray = ["default", "small"];
  var TemplateSizes = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list", children: sizesArray.map((size, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === sizesArray.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, sm: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: size.charAt(0).toUpperCase() + size.slice(1) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, sm: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textarea_default, { ...args, size, id: `textarea-size-${size}` }) })
    ] }, key)) });
  };
  var TemplateTextValue = (args) => {
    const { value, ...props } = args;
    const [text, setText] = (0, import_react.useState)(value ?? "");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textarea_default, { value: text, onChange: (t) => setText(t), ...props });
  };
  var Default = {
    args: {
      id: "textarea-default",
      label: "Label"
    }
  };
  var Sizes = {
    render: TemplateSizes,
    args: {
      id: "textarea-sizes",
      label: "Label"
    }
  };
  var States = {
    render: TemplateColumnWithStates,
    args: {
      array: stateArray,
      label: "Label"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        focus: "#Focus",
        active: "#Active"
      }
    }
  };
  var WithHint = {
    args: {
      id: "textarea-with-hint",
      label: "Label",
      helper: { text: "Hint text" }
    }
  };
  var HintTextAndCharacterCount = {
    args: {
      id: "textarea-hint-and-count",
      label: "Label",
      characterLimit: 400,
      helper: [{ text: "Hint text" }]
    }
  };
  var OnlyCharacterCount = {
    args: {
      id: "textarea-only-count",
      label: "Label",
      characterLimit: 400
    }
  };
  var TextValue = {
    render: TemplateTextValue,
    args: {
      id: "textarea-text-value",
      label: "Label",
      value: "Text value"
    }
  };
  var Placeholder = {
    args: {
      id: "textarea-placeholder",
      label: "Label",
      placeholder: "Text value"
    }
  };
  var DefaultValue = {
    args: {
      id: "textarea-default-value",
      label: "Label",
      defaultValue: "Text value"
    }
  };
  var ClearButtonOnInteraction = {
    args: {
      id: "example-clear-on-interaction",
      label: "Label",
      defaultValue: "Rebane on v\xE4ikese koera suurune ja pika koheva sabaga. Joostes hoiab ta saba horisontaalselt. Tema selja karvad on oran\u017Eid. Eestis eelistab ta elupaigana metsatukkasid. Rebane toitub peamiselt n\xE4rilistest. Ta on ettevaatlik ja oskab h\xE4sti p\xF5geneda. Rebase urul on alati mitu v\xE4ljap\xE4\xE4su. Urud on p\xF5hiliselt kutsikate kasvatamiseks. Ta kaevab urud ise v\xF5i kohendab m\xE4gra urge.",
      isClearable: true,
      showClearOnInteraction: true
    }
  };
  var heightExamples = [
    {
      title: "Default (7.5rem)",
      id: "sizing-default",
      placeholder: "Rests at 7.5rem, drag to resize"
    },
    {
      title: "Exact height (10rem)",
      id: "sizing-exact",
      height: "10rem",
      placeholder: "Rests at 10rem"
    },
    {
      title: "Auto grow (defaults: minRows 3, no row limit)",
      id: "sizing-auto-grow",
      autoGrow: true,
      placeholder: "Type multiple lines to see it grow"
    },
    {
      title: "Auto grow (minRows 3, maxRows 8)",
      id: "sizing-auto-grow-bounded",
      autoGrow: true,
      maxRows: 8,
      placeholder: "Grows up to eight rows, then scrolls"
    },
    {
      title: "Auto grow, capped at 200px",
      id: "sizing-auto-grow-capped",
      autoGrow: true,
      maxHeight: "200px",
      placeholder: "Grows until 200px, then scrolls"
    }
  ];
  var TemplateHeights = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { children: heightExamples.map(({ title, ...example }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: title }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textarea_default, { ...args, ...example, label: "Label" }) })
  ] }, example.id)) });
  var HeightExamples = {
    render: TemplateHeights,
    parameters: {
      docs: {
        description: {
          story: "Without `autoGrow` the textarea rests at `height` (7.5rem by default) and can be dragged taller. With `autoGrow` it grows with its content from `minRows`, up to `maxRows` if set; leave `maxRows` unset for no row limit. `maxHeight` caps the height in both modes."
        }
      }
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

  // Textarea.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(textarea_stories_exports, "Default", G, B);
  var Sizes2 = compose(textarea_stories_exports, "Sizes", G, B);
  var States2 = compose(textarea_stories_exports, "States", G, B);
  var WithHint2 = compose(textarea_stories_exports, "WithHint", G, B);
  var HintTextAndCharacterCount2 = compose(textarea_stories_exports, "HintTextAndCharacterCount", G, B);
  var OnlyCharacterCount2 = compose(textarea_stories_exports, "OnlyCharacterCount", G, B);
  var TextValue2 = compose(textarea_stories_exports, "TextValue", G, B);
  var Placeholder2 = compose(textarea_stories_exports, "Placeholder", G, B);
  var DefaultValue2 = compose(textarea_stories_exports, "DefaultValue", G, B);
  var ClearButtonOnInteraction2 = compose(textarea_stories_exports, "ClearButtonOnInteraction", G, B);
  var HeightExamples2 = compose(textarea_stories_exports, "HeightExamples", G, B);
  return __toCommonJS(Textarea_preview_exports);
})();

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

  // Button.preview.tsx
  var Button_preview_exports = {};
  __export(Button_preview_exports, {
    Danger: () => Danger2,
    DangerNeutral: () => DangerNeutral2,
    Default: () => Default2,
    ExtraSmallIconOnly: () => ExtraSmallIconOnly2,
    FullWidth: () => FullWidth2,
    LongTextButtonThatWrapsIntoMultipleLines: () => LongTextButtonThatWrapsIntoMultipleLines2,
    Neutral: () => Neutral2,
    NeutralInverted: () => NeutralInverted2,
    NoStyleTemplate: () => NoStyleTemplate2,
    Primary: () => Primary2,
    PrimaryInverted: () => PrimaryInverted2,
    ResponsiveButton: () => ResponsiveButton2,
    Secondary: () => Secondary2,
    SecondaryInverted: () => SecondaryInverted2,
    Success: () => Success2,
    VisualTest: () => VisualTest2,
    VisualTypeLink: () => VisualTypeLink2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/buttons/button/button.stories.tsx
  var button_stories_exports = {};
  __export(button_stories_exports, {
    Danger: () => Danger,
    DangerNeutral: () => DangerNeutral,
    Default: () => Default,
    ExtraSmallIconOnly: () => ExtraSmallIconOnly,
    FullWidth: () => FullWidth,
    LongTextButtonThatWrapsIntoMultipleLines: () => LongTextButtonThatWrapsIntoMultipleLines,
    Neutral: () => Neutral,
    NeutralInverted: () => NeutralInverted,
    NoStyleTemplate: () => NoStyleTemplate,
    Primary: () => Primary,
    PrimaryInverted: () => PrimaryInverted,
    ResponsiveButton: () => ResponsiveButton,
    Secondary: () => Secondary,
    SecondaryInverted: () => SecondaryInverted,
    Success: () => Success,
    VisualTest: () => VisualTest,
    VisualTypeLink: () => VisualTypeLink,
    default: () => button_stories_default
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

  // tedi:src/tedi/components/content/card/index.ts
  var card_exports = {};
  __export(card_exports, {
    default: () => card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var card_default = ns2["Card"] ?? ns2;

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

  // tedi:src/tedi/components/notifications/alert/alert.tsx
  var alert_exports = {};
  __export(alert_exports, {
    default: () => alert_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(alert_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var alert_default = ns6["Alert"] ?? ns6;

  // tedi:src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var button_default = ns7["Button"] ?? ns7;

  // src/tedi/components/buttons/button/button.stories.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: button_exports.Button,
    title: "TEDI-Ready/Components/Buttons/Button",
    parameters: {
      chromatic: { disableSnapshot: true },
      a11y: {
        config: {
          // TODO: [Button]: Review storybook a11y violations #843
          rules: [{ id: "color-contrast", enabled: false }]
        }
      },
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-(work-in-progress)?node-id=136-19706&m=dev"
      }
    }
  };
  var button_stories_default = meta;
  var buttonStateArray = ["Default", "Hover", "Active", "Loading", "Disabled"];
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { ...args });
  var Default = {
    render: Template,
    argTypes: {
      as: {
        control: false,
        table: {
          type: { summary: "ElementType" }
        }
      }
    },
    args: {
      children: "Button"
    }
  };
  var TemplateColumn = (args) => {
    const { array, titleColor, idPrefix, ...buttonProps } = args;
    const getId = (value, index) => idPrefix ? `${idPrefix}-${value}-${index}` : value;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { md: 1 }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: titleColor, modifiers: "bold", children: "Default" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { className: "text-bold", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: titleColor, modifiers: "bold", children: "Small" }) })
      ] }),
      array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { md: 1, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: titleColor, modifiers: "bold", children: value }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { className: "flex align-items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            button_exports.Button,
            {
              id: getId(value, 1),
              ...buttonProps,
              disabled: value === "Disabled",
              isLoading: value === "Loading",
              children: "Create"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            button_exports.Button,
            {
              id: getId(value, 2),
              ...buttonProps,
              iconRight: "arrow_right_alt",
              disabled: value === "Disabled",
              isLoading: value === "Loading",
              children: "Continue"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            button_exports.Button,
            {
              id: getId(value, 3),
              ...buttonProps,
              iconLeft: "edit",
              disabled: value === "Disabled",
              isLoading: value === "Loading",
              children: "Edit"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            button_exports.Button,
            {
              id: getId(value, 4),
              ...buttonProps,
              icon: "arrow_right_alt",
              disabled: value === "Disabled",
              isLoading: value === "Loading",
              showTooltip: true,
              children: "Icon Only"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { className: "flex align-items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            button_exports.Button,
            {
              id: getId(value, 5),
              size: "small",
              ...buttonProps,
              disabled: value === "Disabled",
              isLoading: value === "Loading",
              children: "Create"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            button_exports.Button,
            {
              id: getId(value, 6),
              size: "small",
              ...buttonProps,
              iconRight: "arrow_right_alt",
              disabled: value === "Disabled",
              isLoading: value === "Loading",
              children: "Continue"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            button_exports.Button,
            {
              id: getId(value, 7),
              size: "small",
              ...buttonProps,
              iconLeft: "edit",
              disabled: value === "Disabled",
              isLoading: value === "Loading",
              children: "Edit"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            button_exports.Button,
            {
              id: getId(value, 8),
              size: "small",
              ...buttonProps,
              icon: "arrow_right_alt",
              disabled: value === "Disabled",
              isLoading: value === "Loading",
              showTooltip: true,
              children: "Icon Only"
            }
          )
        ] })
      ] }, key))
    ] }) });
  };
  var Primary = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      visualType: "primary"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focus: "#Focus"
      }
    }
  };
  var PrimaryInverted = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      visualType: "primary",
      color: "inverted",
      titleColor: "white"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focus: "#Focus"
      }
    },
    globals: { backgrounds: { value: "brand" } }
  };
  var Secondary = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      visualType: "secondary"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focus: "#Focus"
      }
    }
  };
  var SecondaryInverted = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      visualType: "secondary",
      color: "inverted",
      titleColor: "white"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focus: "#Focus"
      }
    },
    globals: { backgrounds: { value: "brand" } }
  };
  var Neutral = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      visualType: "neutral"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focus: "#Focus"
      }
    }
  };
  var NeutralInverted = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      visualType: "neutral",
      color: "inverted",
      titleColor: "white"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focus: "#Focus"
      }
    },
    globals: { backgrounds: { value: "brand" } }
  };
  var Success = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      color: "success"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focus: "#Focus"
      }
    }
  };
  var Danger = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      color: "danger"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focus: "#Focus"
      }
    }
  };
  var DangerNeutral = {
    render: TemplateColumn,
    args: {
      array: buttonStateArray,
      color: "danger",
      visualType: "neutral"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focus: "#Focus"
      }
    }
  };
  var ExtraSmallIconOnly = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex align-items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { size: "extra-small", icon: "close", showTooltip: true, children: "Close" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { size: "extra-small", icon: "edit", visualType: "secondary", showTooltip: true, children: "Edit" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { size: "extra-small", icon: "more_vert", visualType: "neutral", showTooltip: true, children: "More" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { size: "extra-small", icon: "close", disabled: true, showTooltip: true, children: "Close" })
    ] })
  };
  var NoStyleTemplate = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { ...args, noStyle: true, children: "Button without styles" });
  };
  var FullWidth = {
    args: {
      fullWidth: true,
      children: "Button"
    }
  };
  var ResponsiveTemplate = (args) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { lg: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { ...args, lg: { color: "default" }, sm: { color: "success", visualType: "primary" }, children: "Button - Success (sm)" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { lg: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      button_exports.Button,
      {
        ...args,
        lg: { color: "default", visualType: "primary" },
        md: { color: "danger", visualType: "neutral" },
        sm: { color: "danger", visualType: "primary" },
        children: "Button - Danger neutral (md)"
      }
    ) })
  ] });
  var ResponsiveButton = {
    render: ResponsiveTemplate,
    args: {
      children: "Responsive Button"
    },
    parameters: {
      viewport: {
        defaultViewport: "responsive"
      }
    }
  };
  var LongTextTemplate = (args) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { md: 6, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(alert_default, { type: "warning", children: "Please avoid long text. This is fallback for emergencies \u2014 use only with caution." }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { md: 4, width: 12, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { children: args.children }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { md: 4, width: 12, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { iconLeft: "edit", children: args.children }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { md: 3, width: 12, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { children: args.children }) })
    ] })
  ] });
  var LongTextButtonThatWrapsIntoMultipleLines = {
    args: {
      children: "This is a very long button text that should wrap into multiple lines"
    },
    render: LongTextTemplate
  };
  var VisualTypeLinkTemplate = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(vertical_spacing_exports.VerticalSpacing, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { gap: 3, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { visualType: "link", children: "Add file" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { visualType: "link", iconLeft: "add", children: "Add file" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_exports.Button, { visualType: "link", iconRight: "add", children: "Add file" }) })
  ] }) });
  var VisualTypeLink = {
    render: VisualTypeLinkTemplate
  };
  var visualTestVariants = [
    { label: "Primary", idPrefix: "vt-primary", story: Primary },
    { label: "Primary inverted", idPrefix: "vt-primary-inverted", inverted: true, story: PrimaryInverted },
    { label: "Secondary", idPrefix: "vt-secondary", story: Secondary },
    { label: "Secondary inverted", idPrefix: "vt-secondary-inverted", inverted: true, story: SecondaryInverted },
    { label: "Neutral", idPrefix: "vt-neutral", story: Neutral },
    { label: "Neutral inverted", idPrefix: "vt-neutral-inverted", inverted: true, story: NeutralInverted },
    { label: "Success", idPrefix: "vt-success", story: Success },
    { label: "Danger", idPrefix: "vt-danger", story: Danger },
    { label: "Danger neutral", idPrefix: "vt-danger-neutral", story: DangerNeutral }
  ];
  var VisualTest = {
    tags: ["!dev", "!autodocs"],
    parameters: {
      chromatic: { disableSnapshot: false, viewports: VISUAL_TEST_VIEWPORTS },
      pseudo: {
        hover: '[id^="vt-"][id*="-Hover-"]',
        active: '[id^="vt-"][id*="-Active-"]'
      }
    },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Default" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: Default })
      ] }),
      visualTestVariants.map(
        ({ label, idPrefix, inverted, story }) => inverted ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { background: "brand-primary", borderless: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", color: "white", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: { ...story, args: { ...story.args, idPrefix } } })
        ] }) }) }, idPrefix) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: { ...story, args: { ...story.args, idPrefix } } })
        ] }, idPrefix)
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Extra small icon only" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: ExtraSmallIconOnly })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "No style" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: { render: NoStyleTemplate } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Full width" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: FullWidth, component: button_exports.Button })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Responsive" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: ResponsiveButton })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Long text" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: LongTextButtonThatWrapsIntoMultipleLines })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Visual type link" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: VisualTypeLink })
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

  // Button.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(button_stories_exports, "Default", G, B);
  var Primary2 = compose(button_stories_exports, "Primary", G, B);
  var PrimaryInverted2 = compose(button_stories_exports, "PrimaryInverted", G, B);
  var Secondary2 = compose(button_stories_exports, "Secondary", G, B);
  var SecondaryInverted2 = compose(button_stories_exports, "SecondaryInverted", G, B);
  var Neutral2 = compose(button_stories_exports, "Neutral", G, B);
  var NeutralInverted2 = compose(button_stories_exports, "NeutralInverted", G, B);
  var Success2 = compose(button_stories_exports, "Success", G, B);
  var Danger2 = compose(button_stories_exports, "Danger", G, B);
  var DangerNeutral2 = compose(button_stories_exports, "DangerNeutral", G, B);
  var ExtraSmallIconOnly2 = compose(button_stories_exports, "ExtraSmallIconOnly", G, B);
  var NoStyleTemplate2 = compose(button_stories_exports, "NoStyleTemplate", G, B);
  var FullWidth2 = compose(button_stories_exports, "FullWidth", G, B);
  var ResponsiveButton2 = compose(button_stories_exports, "ResponsiveButton", G, B);
  var LongTextButtonThatWrapsIntoMultipleLines2 = compose(button_stories_exports, "LongTextButtonThatWrapsIntoMultipleLines", G, B);
  var VisualTypeLink2 = compose(button_stories_exports, "VisualTypeLink", G, B);
  var VisualTest2 = compose(button_stories_exports, "VisualTest", G, B);
  return __toCommonJS(Button_preview_exports);
})();

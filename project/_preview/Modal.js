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

  // Modal.preview.tsx
  var Modal_preview_exports = {};
  __export(Modal_preview_exports, {
    AlertDialog: () => AlertDialog3,
    Controlled: () => Controlled3,
    CustomWidth: () => CustomWidth2,
    Default: () => Default2,
    FooterVariants: () => FooterVariants2,
    Fullscreen: () => Fullscreen2,
    NoBackdropClose: () => NoBackdropClose2,
    NoCloseButton: () => NoCloseButton2,
    OpenForVisualTest: () => OpenForVisualTest2,
    OpenFullscreenEdgeForVisualTest: () => OpenFullscreenEdgeForVisualTest2,
    OpenPositionDrawerForVisualTest: () => OpenPositionDrawerForVisualTest2,
    OpenPositionTopForVisualTest: () => OpenPositionTopForVisualTest2,
    OpenSmallForVisualTest: () => OpenSmallForVisualTest2,
    OpenWideScrollingForVisualTest: () => OpenWideScrollingForVisualTest2,
    Position: () => Position2,
    ResponsiveProps: () => ResponsiveProps2,
    ScrollableContent: () => ScrollableContent2,
    Size: () => Size2,
    Width: () => Width2,
    WithDescription: () => WithDescription2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/overlays/modal/modal.stories.tsx
  var modal_stories_exports = {};
  __export(modal_stories_exports, {
    AlertDialog: () => AlertDialog,
    Controlled: () => Controlled,
    CustomWidth: () => CustomWidth,
    Default: () => Default,
    FooterVariants: () => FooterVariants,
    Fullscreen: () => Fullscreen,
    NoBackdropClose: () => NoBackdropClose,
    NoCloseButton: () => NoCloseButton,
    OpenForVisualTest: () => OpenForVisualTest,
    OpenFullscreenEdgeForVisualTest: () => OpenFullscreenEdgeForVisualTest,
    OpenPositionDrawerForVisualTest: () => OpenPositionDrawerForVisualTest,
    OpenPositionTopForVisualTest: () => OpenPositionTopForVisualTest,
    OpenSmallForVisualTest: () => OpenSmallForVisualTest,
    OpenWideScrollingForVisualTest: () => OpenWideScrollingForVisualTest,
    Position: () => Position,
    ResponsiveProps: () => ResponsiveProps,
    ScrollableContent: () => ScrollableContent,
    Size: () => Size,
    Width: () => Width,
    WithDescription: () => WithDescription,
    default: () => modal_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

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

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/base/typography/heading/heading.tsx
  var heading_exports = {};
  __export(heading_exports, {
    default: () => heading_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(heading_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var heading_default = ns["Heading"] ?? ns;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var text_default = ns2["Text"] ?? ns2;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var button_default = ns3["Button"] ?? ns3;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/form/textfield/textfield.tsx
  var textfield_exports = {};
  __export(textfield_exports, {
    default: () => textfield_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(textfield_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var textfield_default = ns4["TextField"] ?? ns4;

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
  var ns5 = window.Tedi;
  var row_default = ns5["Row"] ?? ns5;

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
  var ns6 = window.Tedi;
  var col_default = ns6["Col"] ?? ns6;

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
  var ns7 = window.Tedi;
  var vertical_spacing_default = ns7["VerticalSpacing"] ?? ns7;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/misc/scroll-fade/scroll-fade.tsx
  var scroll_fade_exports = {};
  __export(scroll_fade_exports, {
    default: () => scroll_fade_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(scroll_fade_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var scroll_fade_default = ns8["ScrollFade"] ?? ns8;

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

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/overlays/modal/modal.tsx
  var modal_exports = {};
  __export(modal_exports, {
    default: () => modal_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(modal_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var modal_default = ns10["Modal"] ?? ns10;

  // src/tedi/components/overlays/modal/modal.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: modal_exports.Modal,
    subcomponents: {
      "Modal.Trigger": modal_exports.Modal.Trigger,
      "Modal.Content": modal_exports.Modal.Content,
      "Modal.Header": modal_exports.Modal.Header,
      "Modal.Body": modal_exports.Modal.Body,
      "Modal.Footer": modal_exports.Modal.Footer,
      "Modal.Closer": modal_exports.Modal.Closer
    },
    title: "TEDI-Ready/Components/Overlay/Modal",
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.45.70?node-id=4624-94325&m=dev"
      }
    }
  };
  var modal_stories_default = meta;
  var SampleForm = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: "modal-field-1", label: "Label" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: "modal-field-2", label: "Label" })
  ] });
  var ScrollableForm = ({ idPrefix }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h3", modifiers: "h5", children: "Teenus" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-service`, label: "Teenus" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-institution`, label: "Asutus" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-persons`, label: "Isikud" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-priority`, label: "Prioriteet" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-description`, label: "Probleemi kirjeldus" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-start-date`, label: "Alguskuup\xE4ev" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-end-date`, label: "L\xF5ppkuup\xE4ev" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h3", modifiers: "h5", children: "Kontaktisik" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-contact-first-name`, label: "Eesnimi" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-contact-last-name`, label: "Perenimi" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-contact-id`, label: "Isikukood" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-contact-phone`, label: "Telefon" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-contact-email`, label: "E-post" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-contact-address`, label: "Aadress" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h3", modifiers: "h5", children: "Esindaja" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-rep-first-name`, label: "Eesnimi" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-rep-last-name`, label: "Perenimi" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-rep-id`, label: "Isikukood" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-rep-phone`, label: "Telefon" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-rep-email`, label: "E-post" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-rep-address`, label: "Aadress" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${idPrefix}-rep-relation`, label: "Seos isikuga" })
  ] });
  var DefaultFooter = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Footer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Cancel" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Continue" }) })
  ] });
  var Default = {
    argTypes: {
      ...subcomponentArgTypes(modal_exports.Modal.Content, {
        category: "Modal.Content",
        prefix: "content",
        exclude: ["children", "initialFocus", "aria-labelledby", "aria-describedby", "aria-label"]
      })
    },
    render: (args) => {
      const { heading = "Modal title", description, closeButton = true, ...rest } = args;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { ...getPrimaryComponentProps(rest), children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Open modal" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { ...getSubcomponentProps(args, "content"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            modal_exports.Modal.Header,
            {
              title: heading,
              description,
              closeButton
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
        ] })
      ] });
    }
  };
  var Position = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { gutterY: 2, children: ["center", "top", "right", "left"].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: p === "center" ? "Center" : p === "top" ? "Top-aligned" : `Side (${p})` }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { position: p, width: p === "right" || p === "left" ? "sm" : "md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          modal_exports.Modal.Header,
          {
            title: p === "center" ? "Center modal" : p === "top" ? "Top-aligned modal" : `Side modal (${p})`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
      ] })
    ] }) }, p)) })
  };
  var Size = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Open small modal" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { size: "small", width: "sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Small modal" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Open default modal" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { size: "default", width: "sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Default modal" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
        ] })
      ] }) })
    ] })
  };
  var Width = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { gutterY: 2, children: ["xs", "sm", "md", "lg", "xl"].map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: w }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: w, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: `Width: ${w}` }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
      ] })
    ] }) }, w)) })
  };
  var CustomWidth = {
    parameters: { chromatic: { disableSnapshot: true } },
    name: "Custom width",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Open modal" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "800px", maxWidth: "75%", position: "left", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Width: 800px, max: 75%" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
      ] })
    ] })
  };
  var Fullscreen = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => {
      const variants = [
        { label: "Normal (default)", value: false },
        { label: "Padded fullscreen", value: true },
        { label: "Edge-to-edge fullscreen", value: "edge" }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { gutterY: 2, children: variants.map(({ label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: label }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "md", fullscreen: value, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: label }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
        ] })
      ] }) }, label)) });
    }
  };
  var ScrollableContent = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Content scrollbar" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "md", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Uus toiming" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollableForm, { idPrefix: "scroll" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Footer, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Katkesta" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Lisa" }) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Content fade" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "md", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Uus toiming" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(scroll_fade_exports.ScrollFade, { fadePosition: "both", fadeSize: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { padding: "var(--modal-body-padding)" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollableForm, { idPrefix: "fade" }) }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Footer, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Katkesta" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Lisa" }) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Page scroll" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "md", scrollBehavior: "page", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Uus toiming" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { noScroll: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollableForm, { idPrefix: "page" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Footer, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Katkesta" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Lisa" }) })
          ] })
        ] })
      ] }) })
    ] })
  };
  var WithDescription = {
    parameters: { chromatic: { disableSnapshot: true } },
    name: "With header description",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "With description" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          modal_exports.Modal.Header,
          {
            title: "With description",
            description: "This modal has additional description text in the header."
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
      ] })
    ] })
  };
  var NoBackdropClose = {
    parameters: { chromatic: { disableSnapshot: true } },
    name: "No backdrop close",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { closeOnBackdropClick: false, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "No backdrop close" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "No backdrop close" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
      ] })
    ] })
  };
  var NoCloseButton = {
    parameters: { chromatic: { disableSnapshot: true } },
    name: "No close button",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "No close button" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "No close button", closeButton: false }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
      ] })
    ] })
  };
  var FooterVariants = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Open modal" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Title" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Left right buttons" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Title" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            modal_exports.Modal.Footer,
            {
              left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Cancel" }) }),
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Continue" }) })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Three buttons" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Title" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            modal_exports.Modal.Footer,
            {
              left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "neutral", iconLeft: "arrow_back", children: "Back" }) }),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Cancel" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Continue" }) })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "No footer" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Title" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) })
        ] })
      ] }) })
    ] })
  };
  var ResponsiveProps = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Side on desktop, centered on mobile" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { position: "center", width: "sm", md: { position: "right" }, defaultServerBreakpoint: "md", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Responsive position" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Body, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Side drawer at `md` and up; centered modal below `md`." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {})
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "lg on desktop, fullscreen on mobile" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "lg", fullscreen: "edge", md: { fullscreen: false }, defaultServerBreakpoint: "md", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Responsive width" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Body, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Wide `lg` modal on desktop; edge-to-edge fullscreen below `md`. Width presets don't differentiate on phone viewports \u2014 every preset is wider than a 375px screen and clamps to viewport width \u2014 so the responsive payoff is usually a fullscreen flip, not a width swap." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {})
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
        ] })
      ] }) })
    ] })
  };
  var AlertDialog = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: function AlertDialog2() {
      const cancelRef = (0, import_react.useRef)(null);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { role: "alertdialog", closeOnBackdropClick: false, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "neutral", color: "danger", children: "Delete account" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "xs", initialFocus: cancelRef, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            modal_exports.Modal.Header,
            {
              title: "Delete your account?",
              description: "This action is permanent and cannot be undone.",
              closeButton: false
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Footer, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { ref: cancelRef, visualType: "secondary", children: "Cancel" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { color: "danger", children: "Delete" }) })
          ] })
        ] })
      ] });
    }
  };
  var Controlled = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: function Controlled2() {
      const [open, setOpen] = (0, import_react.useState)(false);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", onClick: () => setOpen(true), children: "External open" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal, { open, onToggle: setOpen, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Controlled modal" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "The trigger lives outside the Modal subtree \u2014 open state is held by the parent." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Footer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Close" }) }) })
        ] }) })
      ] });
    }
  };
  var OpenForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { defaultOpen: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Open modal" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Modal title", description: "Supporting description text." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
      ] })
    ] })
  };
  var OpenSmallForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { defaultOpen: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Open modal" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "sm", size: "small", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Modal title", description: "Supporting description text." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          modal_exports.Modal.Footer,
          {
            left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "neutral", iconLeft: "arrow_back", children: "Back" }) }),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Cancel" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Continue" }) })
            ]
          }
        )
      ] })
    ] })
  };
  var OpenWideScrollingForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { defaultOpen: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Open modal" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "xl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Modal title" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollableForm, { idPrefix: "visual-test-wide" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
      ] })
    ] })
  };
  var OpenPositionTopForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { defaultOpen: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Open modal" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "sm", position: "top", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Modal title" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
      ] })
    ] })
  };
  var OpenPositionDrawerForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { defaultOpen: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Open modal" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { width: "sm", position: "right", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Modal title" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
      ] })
    ] })
  };
  var OpenFullscreenEdgeForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal, { defaultOpen: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Open modal" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_exports.Modal.Content, { fullscreen: "edge", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Header, { title: "Modal title" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(modal_exports.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleForm, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultFooter, {})
      ] })
    ] })
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

  // Modal.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(modal_stories_exports, "Default", G, B);
  var Position2 = compose(modal_stories_exports, "Position", G, B);
  var Size2 = compose(modal_stories_exports, "Size", G, B);
  var Width2 = compose(modal_stories_exports, "Width", G, B);
  var CustomWidth2 = compose(modal_stories_exports, "CustomWidth", G, B);
  var Fullscreen2 = compose(modal_stories_exports, "Fullscreen", G, B);
  var ScrollableContent2 = compose(modal_stories_exports, "ScrollableContent", G, B);
  var WithDescription2 = compose(modal_stories_exports, "WithDescription", G, B);
  var NoBackdropClose2 = compose(modal_stories_exports, "NoBackdropClose", G, B);
  var NoCloseButton2 = compose(modal_stories_exports, "NoCloseButton", G, B);
  var FooterVariants2 = compose(modal_stories_exports, "FooterVariants", G, B);
  var ResponsiveProps2 = compose(modal_stories_exports, "ResponsiveProps", G, B);
  var AlertDialog3 = compose(modal_stories_exports, "AlertDialog", G, B);
  var Controlled3 = compose(modal_stories_exports, "Controlled", G, B);
  var OpenForVisualTest2 = compose(modal_stories_exports, "OpenForVisualTest", G, B);
  var OpenSmallForVisualTest2 = compose(modal_stories_exports, "OpenSmallForVisualTest", G, B);
  var OpenWideScrollingForVisualTest2 = compose(modal_stories_exports, "OpenWideScrollingForVisualTest", G, B);
  var OpenPositionTopForVisualTest2 = compose(modal_stories_exports, "OpenPositionTopForVisualTest", G, B);
  var OpenPositionDrawerForVisualTest2 = compose(modal_stories_exports, "OpenPositionDrawerForVisualTest", G, B);
  var OpenFullscreenEdgeForVisualTest2 = compose(modal_stories_exports, "OpenFullscreenEdgeForVisualTest", G, B);
  return __toCommonJS(Modal_preview_exports);
})();

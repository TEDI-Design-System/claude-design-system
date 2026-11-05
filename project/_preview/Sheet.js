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

  // sb-inert:storybook/test
  var require_test = __commonJS({
    "sb-inert:storybook/test"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      var inert = new Proxy(function() {
      }, {
        get: function(t, k) {
          if (k === "then") return void 0;
          if (k === "prototype") return t.prototype;
          if (k === Symbol.toPrimitive || k === "toString" || k === "valueOf") return function() {
            return "";
          };
          return inert;
        },
        apply: function() {
          return inert;
        },
        construct: function() {
          return {};
        }
      });
      var named = {};
      "fn action actions expect userEvent within waitFor screen fireEvent spyOn".split(" ").forEach(function(k) {
        named[k] = inert;
      });
      var passthrough = function(p) {
        return p && p.children !== void 0 ? p.children : null;
      };
      Object.assign(passthrough, named);
      module.exports = new Proxy(passthrough, { get: function(t, k) {
        if (k === "then" || k === "__esModule") return void 0;
        if (k === "prototype") return t.prototype;
        return k in named ? named[k] : inert;
      } });
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

  // Sheet.preview.tsx
  var Sheet_preview_exports = {};
  __export(Sheet_preview_exports, {
    ActionsSlot: () => ActionsSlot2,
    CollapsedForVisualTest: () => CollapsedForVisualTest2,
    ContentNavigation: () => ContentNavigation2,
    Controlled: () => Controlled2,
    ControlledCollapse: () => ControlledCollapse3,
    CornerRadius: () => CornerRadius2,
    Default: () => Default2,
    DockedPeek: () => DockedPeek2,
    FooterAlignment: () => FooterAlignment2,
    HeaderType: () => HeaderType2,
    HeaderVariant: () => HeaderVariant2,
    KeepMounted: () => KeepMounted2,
    OpenBrandForVisualTest: () => OpenBrandForVisualTest2,
    OpenForVisualTest: () => OpenForVisualTest2,
    OpenScrollableForVisualTest: () => OpenScrollableForVisualTest2,
    OpenSmallForVisualTest: () => OpenSmallForVisualTest2,
    OpenSnapPointForVisualTest: () => OpenSnapPointForVisualTest2,
    OpenWithoutHandleForVisualTest: () => OpenWithoutHandleForVisualTest2,
    Padding: () => Padding2,
    ScrollableContent: () => ScrollableContent2,
    SnapPoints: () => SnapPoints2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/overlays/sheet/sheet.stories.tsx
  var sheet_stories_exports = {};
  __export(sheet_stories_exports, {
    ActionsSlot: () => ActionsSlot,
    CollapsedForVisualTest: () => CollapsedForVisualTest,
    ContentNavigation: () => ContentNavigation,
    Controlled: () => Controlled,
    ControlledCollapse: () => ControlledCollapse,
    CornerRadius: () => CornerRadius,
    Default: () => Default,
    DockedPeek: () => DockedPeek,
    FooterAlignment: () => FooterAlignment,
    HeaderType: () => HeaderType,
    HeaderVariant: () => HeaderVariant,
    KeepMounted: () => KeepMounted,
    OpenBrandForVisualTest: () => OpenBrandForVisualTest,
    OpenForVisualTest: () => OpenForVisualTest,
    OpenScrollableForVisualTest: () => OpenScrollableForVisualTest,
    OpenSmallForVisualTest: () => OpenSmallForVisualTest,
    OpenSnapPointForVisualTest: () => OpenSnapPointForVisualTest,
    OpenWithoutHandleForVisualTest: () => OpenWithoutHandleForVisualTest,
    Padding: () => Padding,
    ScrollableContent: () => ScrollableContent,
    SnapPoints: () => SnapPoints,
    default: () => sheet_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);
  var import_test = __toESM(require_test(), 1);

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

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/base/icon/icon.tsx
  var icon_exports = {};
  __export(icon_exports, {
    default: () => icon_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(icon_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var icon_default = ns["Icon"] ?? ns;

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

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/content/accordion/accordion.tsx
  var accordion_exports = {};
  __export(accordion_exports, {
    default: () => accordion_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(accordion_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var accordion_default = ns4["Accordion"] ?? ns4;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/content/text-group/text-group.tsx
  var text_group_exports = {};
  __export(text_group_exports, {
    default: () => text_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_group_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var text_group_default = ns5["TextGroup"] ?? ns5;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/form/checkbox/checkbox.tsx
  var checkbox_exports = {};
  __export(checkbox_exports, {
    default: () => checkbox_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(checkbox_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var checkbox_default = ns6["Checkbox"] ?? ns6;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/form/choice-group/choice-group.tsx
  var choice_group_exports = {};
  __export(choice_group_exports, {
    default: () => choice_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(choice_group_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var choice_group_default = ns7["ChoiceGroup"] ?? ns7;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/form/date-field/date-field.tsx
  var date_field_exports = {};
  __export(date_field_exports, {
    default: () => date_field_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(date_field_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var date_field_default = ns8["DateField"] ?? ns8;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/form/search/search.tsx
  var search_exports = {};
  __export(search_exports, {
    default: () => search_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(search_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var search_default = ns9["Search"] ?? ns9;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/form/textfield/textfield.tsx
  var textfield_exports = {};
  __export(textfield_exports, {
    default: () => textfield_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(textfield_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var textfield_default = ns10["TextField"] ?? ns10;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/form/time-field/time-field.tsx
  var time_field_exports = {};
  __export(time_field_exports, {
    default: () => time_field_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(time_field_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var time_field_default = ns11["TimeField"] ?? ns11;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var vertical_spacing_default = ns12["VerticalSpacing"] ?? ns12;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/misc/separator/separator.tsx
  var separator_exports = {};
  __export(separator_exports, {
    default: () => separator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(separator_exports, __toESM(require_tedi_namespace()));
  var ns13 = window.Tedi;
  var separator_default = ns13["Separator"] ?? ns13;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/tags/tag/tag.tsx
  var tag_exports = {};
  __export(tag_exports, {
    default: () => tag_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(tag_exports, __toESM(require_tedi_namespace()));
  var ns14 = window.Tedi;
  var tag_default = ns14["Tag"] ?? ns14;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/overlays/sheet/sheet.tsx
  var sheet_exports = {};
  __export(sheet_exports, {
    default: () => sheet_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(sheet_exports, __toESM(require_tedi_namespace()));
  var ns15 = window.Tedi;
  var sheet_default = ns15["Sheet"] ?? ns15;

  // src/tedi/components/overlays/sheet/sheet.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var FIGMA_URL = "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.102.102?node-id=65376-125297&m=dev";
  var meta = {
    component: sheet_exports.Sheet,
    subcomponents: {
      "Sheet.Trigger": sheet_exports.Sheet.Trigger,
      "Sheet.Content": sheet_exports.Sheet.Content,
      "Sheet.Header": sheet_exports.Sheet.Header,
      "Sheet.Body": sheet_exports.Sheet.Body,
      "Sheet.Footer": sheet_exports.Sheet.Footer,
      "Sheet.Closer": sheet_exports.Sheet.Closer
    },
    title: "TEDI-Ready/Components/Overlay/Sheet",
    parameters: {
      chromatic: { disableSnapshot: true },
      design: {
        type: "figma",
        url: FIGMA_URL
      }
    }
  };
  var sheet_stories_default = meta;
  var visualTest = {
    parameters: { chromatic: { disableSnapshot: false, viewports: [375, 1280] } },
    play: async ({ canvasElement }) => {
      const body = (0, import_test.within)(canvasElement.ownerDocument.body);
      await (0, import_test.waitFor)(() => (0, import_test.expect)(body.getByRole("dialog")).toHaveAttribute("data-status", "open"));
    }
  };
  var exampleRowStyles = `
  .sheet-example-row {
    display: flex;
    gap: var(--layout-grid-gutters-08);
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: var(--dropdown-item-padding-y) var(--tedi-sheet-padding-x);
    font: inherit;
    color: var(--dropdown-item-default-text);
    text-align: left;
    cursor: pointer;
    background: none;
    border: none;
  }

  .sheet-example-row:hover {
    color: var(--dropdown-item-hover-text);
    background: var(--dropdown-item-hover-background);
  }

  .sheet-example-row--bleed {
    width: calc(100% + 2 * var(--tedi-sheet-padding-x));
    margin-inline: calc(-1 * var(--tedi-sheet-padding-x));
  }
`;
  var SheetSection = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { padding: "var(--tedi-sheet-padding-x)" }, children });
  var moreActions = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", icon: "more_vert", children: "Rohkem valikuid" });
  var ApplyFooter = ({ more = false }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Footer, { fullWidth: true, endSlot: more ? moreActions : void 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", children: "T\xFChista" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { children: "Rakenda" })
  ] });
  var labeledTrigger = (caption, content, trigger = {}, sheetProps = {}) => {
    const { label = "Seaded", icon = "tune", visualType = "secondary" } = trigger;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.25, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "small", color: "secondary", children: caption }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet, { ...sheetProps, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType, iconLeft: icon, children: label }) }),
        content
      ] }) })
    ] }, caption);
  };
  var ExampleRow = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "1rem" }, children });
  var exampleRow = (examples) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExampleRow, { children: examples.map(
    (ex) => labeledTrigger(
      ex.caption,
      ex.content,
      { label: ex.label, icon: ex.icon, visualType: ex.visualType },
      ex.sheetProps
    )
  ) });
  var exampleGroup = (label, examples) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.75, children: [
    (examples.length > 1 || examples.some((example) => example.caption !== label)) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: label }) }),
    exampleRow(examples)
  ] }) }, label);
  var settingsBody = (idPrefix) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      checkbox_exports.Checkbox,
      {
        id: `${idPrefix}-lengths`,
        name: `${idPrefix}-lengths`,
        value: "lengths",
        label: "N\xE4ita pikkusi",
        defaultChecked: true
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(checkbox_exports.Checkbox, { id: `${idPrefix}-angles`, name: `${idPrefix}-angles`, value: "angles", label: "N\xE4ita nurki" })
  ] });
  var notificationsBody = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.75, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { type: "vertical", label: "T\xE4na, 09:12", value: "Teie taotlus on menetlusse v\xF5etud" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { type: "vertical", label: "Eile, 16:40", value: "Uus dokument on allkirjastamiseks valmis" })
  ] });
  var filterChoices = (idPrefix) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      choice_group_exports.ChoiceGroup,
      {
        id: `${idPrefix}-status`,
        name: `${idPrefix}-status`,
        label: "Kirjade olek",
        hideLabel: true,
        inputType: "radio",
        defaultValue: "all",
        items: [
          { id: `${idPrefix}-status-all`, label: "K\xF5ik", value: "all" },
          { id: `${idPrefix}-status-unread`, label: "Ainult lugemata", value: "unread" }
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_exports.Separator, { spacing: 0 }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      choice_group_exports.ChoiceGroup,
      {
        id: `${idPrefix}-sort`,
        name: `${idPrefix}-sort`,
        label: "J\xE4rjestus",
        hideLabel: true,
        inputType: "radio",
        defaultValue: "unread-top",
        items: [
          { id: `${idPrefix}-sort-unread`, label: "Lugemata k\xF5ige \xFCleval", value: "unread-top" },
          { id: `${idPrefix}-sort-date`, label: "Kuup\xE4eva j\xE4rgi", value: "date" }
        ]
      }
    ) })
  ] });
  var dateTimeBody = (idPrefix) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(date_field_exports.DateField, { id: `${idPrefix}-date`, label: "Kuup\xE4ev" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { id: `${idPrefix}-time`, label: "Aeg" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(checkbox_exports.Checkbox, { id: `${idPrefix}-reminder`, name: `${idPrefix}-reminder`, value: "reminder", label: "Lisa meeldetuletus" })
  ] });
  var headerExample = (idPrefix, header, contentProps = {}) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { ...contentProps, children: [
    header,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: settingsBody(idPrefix) })
  ] });
  var notificationsExample = (header) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { children: [
    header,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: notificationsBody })
  ] });
  var ALL_SENDERS = [
    "SK ID Solutions AS",
    "Politsei- ja Piirivalveamet",
    "Sihtasutus Kutsekoda",
    "Siseministeerium",
    "Riigi Infos\xFCsteemide Amet"
  ];
  var SENDER_GROUPS = [
    { title: "Maksu- ja Tolliamet", senders: ["Maksu- ja Tolliamet", "Maksu- ja Tolliamet registrid", "Tolliosakond"] },
    { title: "Tartu Maakohus", senders: ["Tartu Maakohus registriosakond", "Tartu Maakohus kinnistusosakond"] }
  ];
  var SENDERS = [...ALL_SENDERS, ...SENDER_GROUPS.flatMap((group) => group.senders)];
  var SenderSelection = ({ idPrefix, selected, onChange }) => {
    const [query, setQuery] = (0, import_react.useState)("");
    const matches = (label) => label.toLowerCase().includes(query.trim().toLowerCase());
    const visibleSenders = ALL_SENDERS.filter(matches);
    const visibleGroups = SENDER_GROUPS.map((group) => ({
      ...group,
      senders: group.senders.filter((sender) => matches(group.title) || matches(sender))
    })).filter((group) => group.senders.length > 0);
    const senderCheckbox = (sender) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      checkbox_exports.Checkbox,
      {
        id: `${idPrefix}-${SENDERS.indexOf(sender)}`,
        name: `${idPrefix}-senders`,
        value: sender,
        label: sender,
        checked: selected.includes(sender),
        onChange: (_, checked) => onChange(checked ? [...selected, sender] : selected.filter((value) => value !== sender))
      },
      sender
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        search_exports.Search,
        {
          id: `${idPrefix}-search`,
          label: "Otsi saatjat",
          hideLabel: true,
          placeholder: "Otsi",
          value: query,
          onChange: setQuery
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        checkbox_exports.Checkbox,
        {
          id: `${idPrefix}-all`,
          name: `${idPrefix}-all`,
          value: "all",
          label: "K\xF5ik saatjad",
          checked: selected.length === SENDERS.length,
          indeterminate: selected.length > 0 && selected.length < SENDERS.length,
          onChange: (_, checked) => onChange(checked ? SENDERS : [])
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_exports.Separator, { spacing: 0 }),
      visibleSenders.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: visibleSenders.map(senderCheckbox) }),
      visibleGroups.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(accordion_exports.Accordion, { children: visibleGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        accordion_exports.Accordion.Item,
        {
          defaultExpanded: group.title === "Tartu Maakohus",
          expanded: query.trim() ? true : void 0,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              accordion_exports.Accordion.Item.Header,
              {
                showExpandLabel: false,
                title: group.title,
                afterTitle: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { color: "primary", children: group.senders.length }),
                expandActionPosition: "end"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(accordion_exports.Accordion.Item.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: group.senders.map(senderCheckbox) }) })
          ]
        },
        group.title
      )) }),
      visibleSenders.length === 0 && visibleGroups.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Saatjaid ei leitud." })
    ] });
  };
  function ContentNavigationSheet() {
    const [step, setStep] = (0, import_react.useState)("filters");
    const [selected, setSelected] = (0, import_react.useState)(ALL_SENDERS.slice(0, 2));
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      sheet_exports.Sheet,
      {
        onToggle: (open) => {
          if (open) setStep("filters");
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: exampleRowStyles }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", iconLeft: "tune", children: "Filtreeri" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              sheet_exports.Sheet.Header,
              {
                title: step === "filters" ? "Filtreerimine" : "Saatja",
                variant: "default",
                startSlot: step === "senders" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", size: "small", icon: "arrow_back", onClick: () => setStep("filters"), children: "Tagasi" }) : void 0
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Body, { padding: "none", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { hidden: step !== "filters", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "button",
                  {
                    type: "button",
                    onClick: () => setStep("senders"),
                    className: "sheet-example-row sheet-example-row--bleed",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Saatja" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
                        selected.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { color: "primary", children: selected.length }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_forward", color: "brand" })
                      ] })
                    ]
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_exports.Separator, { spacing: 0 }),
                filterChoices("sheet-filter")
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { hidden: step !== "senders", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SenderSelection, { idPrefix: "sheet-filter-senders", selected, onChange: setSelected }) }) })
            ] }),
            step === "filters" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyFooter, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Footer, { fullWidth: true, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", onClick: () => setStep("filters"), children: "Tagasi" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { onClick: () => setStep("filters"), children: "Rakenda" })
            ] })
          ] })
        ]
      }
    );
  }
  var dockedSheetProps = { closeOnBackdropClick: false };
  var dockedContentProps = { showOverlay: false, trapFocus: false, lockScroll: false };
  var MAP_LAYERS = ["H\xFCbriidkaart", "Reljeef", "Katastri\xFCksused", "Kitsendused", "Aadressandmed"];
  var scrollableForm = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: ["Eesnimi", "Perekonnanimi", "E-post", "Telefon", "Aadress", "Sihtnumber", "Linn", "Maakond", "Lisainfo"].map(
    (label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `sheet-scroll-field-${index}`, label }, label)
  ) });
  var Default = {
    argTypes: {
      ...subcomponentArgTypes(sheet_exports.Sheet.Content, {
        category: "Sheet.Content",
        prefix: "content",
        exclude: ["children", "initialFocus", "aria-labelledby", "aria-label", "snapPoints", "defaultSnapPoint"]
      }),
      ...subcomponentArgTypes(sheet_exports.Sheet.Header, {
        category: "Sheet.Header",
        prefix: "header",
        include: ["title", "headingLevel", "variant", "titlePosition", "collapsible", "closeButton"]
      }),
      ...subcomponentArgTypes(sheet_exports.Sheet.Footer, {
        category: "Sheet.Footer",
        prefix: "footer",
        include: ["align", "fullWidth"]
      })
    },
    args: {
      header__title: "Filtreerimine",
      header__variant: "default",
      footer__fullWidth: true
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet, { ...getPrimaryComponentProps(args), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", iconLeft: "tune", children: "Filtreeri" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { ...getSubcomponentProps(args, "content"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { ...getSubcomponentProps(args, "header") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { padding: "none", children: filterChoices("sheet-default") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Footer, { ...getSubcomponentProps(args, "footer"), endSlot: moreActions, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", children: "T\xFChista" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { children: "Rakenda" })
        ] })
      ] })
    ] })
  };
  var ActionsSlot = {
    name: "Actions slot",
    render: () => exampleRow([
      {
        caption: "With footer",
        content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: settingsBody("sheet-actions-footer") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyFooter, { more: true })
        ] })
      },
      {
        caption: "Without footer",
        label: "Loe l\xE4hemalt",
        icon: "menu_book",
        content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Loe l\xE4hemalt", variant: "default" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Orav ehk harilik orav ehk punaorav on oravlaste sugukonda kuuluv n\xE4riline. See on ainus Eestis p\xE4rismaisena elav orava perekonna liik. Orava karvastiku v\xE4rvus varieerub ka Eesti ulatuses: Saaremaal on see valdavalt hallikam, mandril punakam." }) })
        ] })
      }
    ])
  };
  var CornerRadius = {
    name: "Corner radius",
    render: () => exampleRow([
      ...[
        ["24px", "default"],
        ["4px", "card"],
        ["0px", "none"]
      ].map(([caption, radius]) => ({
        caption,
        content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { radius, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: settingsBody(`sheet-radius-${radius}`) })
        ] })
      })),
      {
        caption: "0px \u2192 4px from md",
        content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { radius: "none", md: { radius: "card" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: settingsBody("sheet-radius-responsive") })
        ] })
      }
    ])
  };
  var HeaderVariant = {
    name: "Header variant",
    render: () => exampleRow([
      {
        caption: "Default",
        content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: settingsBody("sheet-variant-default") })
        ] })
      },
      {
        caption: "Brand",
        visualType: "primary",
        content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "brand" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: settingsBody("sheet-variant-brand") })
        ] })
      }
    ])
  };
  var HeaderType = {
    name: "Header type",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 2, children: [
      exampleGroup("Default", [
        {
          caption: "Default",
          content: headerExample("sheet-type-default", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default" }))
        }
      ]),
      exampleGroup("Collapsible", [
        {
          caption: "Heading left",
          content: headerExample(
            "sheet-type-collapsible",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default", collapsible: true })
          )
        },
        {
          caption: "Heading center",
          content: headerExample(
            "sheet-type-collapsible-center",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default", titlePosition: "center", collapsible: true })
          )
        }
      ]),
      exampleGroup("Heading center", [
        {
          caption: "Heading center",
          content: headerExample(
            "sheet-type-center",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default", titlePosition: "center" })
          )
        }
      ]),
      exampleGroup("Without closing button", [
        {
          caption: "Heading left",
          content: headerExample(
            "sheet-type-no-close",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default", closeButton: false })
          )
        },
        {
          caption: "Heading center",
          content: headerExample(
            "sheet-type-no-close-center",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default", titlePosition: "center", closeButton: false })
          )
        }
      ]),
      exampleGroup("Without handle", [
        {
          caption: "Heading left",
          content: headerExample("sheet-type-no-handle", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default" }), {
            showHandle: false
          })
        },
        {
          caption: "Heading center",
          content: headerExample(
            "sheet-type-no-handle-center",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default", titlePosition: "center" }),
            { showHandle: false }
          )
        }
      ]),
      exampleGroup("With custom button", [
        {
          caption: "Secondary closing button",
          content: headerExample(
            "sheet-type-custom-close",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              sheet_exports.Sheet.Header,
              {
                title: "Seaded",
                variant: "default",
                titlePosition: "center",
                closeButton: false,
                actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", icon: "close", children: "Sulge" }) })
              }
            )
          )
        }
      ]),
      exampleGroup("With slot", [
        {
          caption: "Right slot",
          label: "Teated",
          icon: "notifications",
          content: notificationsExample(
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Teated", variant: "default", endSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { color: "primary", children: "2 uut teadet" }) })
          )
        },
        {
          caption: "Left slot",
          label: "Teated",
          icon: "notifications",
          content: notificationsExample(
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Teated", variant: "default", startSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { color: "primary", children: "2" }) })
          )
        },
        {
          caption: "Left and right slots",
          label: "Teated",
          icon: "notifications",
          content: notificationsExample(
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              sheet_exports.Sheet.Header,
              {
                title: "Teated",
                variant: "default",
                titlePosition: "center",
                startSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", size: "small", icon: "arrow_back", children: "Tagasi" }) }),
                endSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { color: "primary", children: "2" })
              }
            )
          )
        }
      ])
    ] })
  };
  var Padding = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExampleRow, { children: ["default", "small"].map(
      (padding) => labeledTrigger(
        `padding="${padding}"`,
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { padding, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: settingsBody(`sheet-padding-${padding}`) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyFooter, { more: true })
        ] })
      )
    ) })
  };
  var FooterAlignment = {
    name: "Footer alignment",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ExampleRow, { children: [
      ["left", "center", "right"].map(
        (align) => labeledTrigger(
          `align="${align}"`,
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: settingsBody(`sheet-footer-${align}`) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Footer, { align, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", children: "T\xFChista" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { children: "Rakenda" })
            ] })
          ] })
        )
      ),
      labeledTrigger(
        "fullWidth",
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: settingsBody("sheet-footer-full") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyFooter, {})
        ] })
      ),
      labeledTrigger(
        "fullWidth + right",
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: settingsBody("sheet-footer-full-right") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyFooter, { more: true })
        ] })
      )
    ] })
  };
  var DockedPeek = {
    name: "Docked peek",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet, { ...dockedSheetProps, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { iconLeft: "calendar_month", children: "Vali aeg" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { ...dockedContentProps, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Vali aeg", variant: "brand", collapsible: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: dateTimeBody("sheet-docked") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyFooter, {})
      ] })
    ] })
  };
  var SnapPoints = {
    name: "Snap points",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { iconLeft: "layers", children: "Kihid" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { snapPoints: [0.4, 0.9], children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Kihid", variant: "default", collapsible: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: MAP_LAYERS.concat(MAP_LAYERS).map((layer, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(checkbox_exports.Checkbox, { id: `snap-layer-${i}`, name: `snap-layer-${i}`, value: layer, label: layer }, i)) }) })
      ] })
    ] })
  };
  var KeepMounted = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { iconLeft: "edit_note", children: "M\xE4rkmed" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { keepMounted: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "M\xE4rkmed", variant: "default" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: "sheet-persisted-note", label: "M\xE4rkus", placeholder: "Kirjuta midagi\u2026" }) })
      ] })
    ] })
  };
  var Controlled = {
    render: function ControlledSheet() {
      const [open, setOpen] = (0, import_react.useState)(false);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { onClick: () => setOpen(true), children: "Ava seaded" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet, { open, onToggle: setOpen, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Seaded", variant: "default" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: settingsBody("sheet-controlled") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Footer, { fullWidth: true, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", children: "T\xFChista" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { onClick: () => setOpen(false), children: "Salvesta" })
          ] })
        ] }) })
      ] });
    }
  };
  var ControlledCollapse = {
    name: "Controlled collapse",
    render: function ControlledCollapse2() {
      const [open, setOpen] = (0, import_react.useState)(false);
      const [collapsed, setCollapsed] = (0, import_react.useState)(false);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            button_exports.Button,
            {
              visualType: "neutral",
              iconLeft: "edit",
              onClick: () => {
                setOpen(true);
                setCollapsed(true);
              },
              children: "Alusta joonistamist"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", iconLeft: "check", onClick: () => setCollapsed(false), disabled: !open, children: "Kinnita joonis" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          sheet_exports.Sheet,
          {
            open,
            onToggle: setOpen,
            collapsed,
            onCollapsedChange: setCollapsed,
            ...dockedSheetProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { ...dockedContentProps, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Uus ala", variant: "brand", collapsible: true }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: "sheet-controlled-collapse-name", label: "Ala nimi" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Footer, { fullWidth: true, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", children: "T\xFChista" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { children: "Salvesta" })
              ] })
            ] })
          }
        )
      ] });
    }
  };
  var ContentNavigation = {
    name: "Content navigation",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentNavigationSheet, {})
  };
  var ScrollableContent = {
    name: "Scrollable content",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { iconLeft: "edit", children: "Ava vorm" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { maxHeight: "32rem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Andmete sisestamine", variant: "default" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: scrollableForm }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyFooter, {})
      ] })
    ] })
  };
  var OpenForVisualTest = {
    ...visualTest,
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet, { defaultOpen: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Filtreerimine", variant: "default" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { padding: "none", children: filterChoices("sheet-visual-default") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyFooter, { more: true })
    ] }) })
  };
  var OpenBrandForVisualTest = {
    ...visualTest,
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet, { defaultOpen: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Vali aeg", variant: "brand", collapsible: true }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: dateTimeBody("sheet-visual-brand") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyFooter, {})
    ] }) })
  };
  var OpenSmallForVisualTest = {
    ...visualTest,
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet, { defaultOpen: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { padding: "small", radius: "card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Teated", variant: "default", startSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { color: "primary", children: "2" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: notificationsBody }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Footer, { align: "right", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", children: "T\xFChista" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { children: "Rakenda" })
      ] })
    ] }) })
  };
  var OpenWithoutHandleForVisualTest = {
    ...visualTest,
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet, { defaultOpen: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { showHandle: false, radius: "none", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        sheet_exports.Sheet.Header,
        {
          title: "Seaded",
          variant: "default",
          titlePosition: "center",
          closeButton: false,
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Closer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", icon: "close", children: "Sulge" }) })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: settingsBody("sheet-visual-no-handle") })
    ] }) })
  };
  var CollapsedForVisualTest = {
    ...visualTest,
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet, { defaultOpen: true, defaultCollapsed: true, ...dockedSheetProps, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { ...dockedContentProps, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Vali aeg", variant: "brand", collapsible: true }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: dateTimeBody("sheet-visual-collapsed") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyFooter, {})
    ] }) })
  };
  var OpenSnapPointForVisualTest = {
    ...visualTest,
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet, { defaultOpen: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { snapPoints: [0.4, 0.9], defaultSnapPoint: 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Kihid", variant: "default", collapsible: true }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: MAP_LAYERS.concat(MAP_LAYERS).map((layer, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        checkbox_exports.Checkbox,
        {
          id: `visual-layer-${index}`,
          name: `visual-layer-${index}`,
          value: layer,
          label: layer
        },
        index
      )) }) })
    ] }) })
  };
  var OpenScrollableForVisualTest = {
    ...visualTest,
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet, { defaultOpen: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(sheet_exports.Sheet.Content, { maxHeight: "32rem", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Header, { title: "Andmete sisestamine", variant: "default" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(sheet_exports.Sheet.Body, { children: scrollableForm }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyFooter, {})
    ] }) })
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

  // Sheet.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(sheet_stories_exports, "Default", G, B);
  var ActionsSlot2 = compose(sheet_stories_exports, "ActionsSlot", G, B);
  var CornerRadius2 = compose(sheet_stories_exports, "CornerRadius", G, B);
  var HeaderVariant2 = compose(sheet_stories_exports, "HeaderVariant", G, B);
  var HeaderType2 = compose(sheet_stories_exports, "HeaderType", G, B);
  var Padding2 = compose(sheet_stories_exports, "Padding", G, B);
  var FooterAlignment2 = compose(sheet_stories_exports, "FooterAlignment", G, B);
  var DockedPeek2 = compose(sheet_stories_exports, "DockedPeek", G, B);
  var SnapPoints2 = compose(sheet_stories_exports, "SnapPoints", G, B);
  var KeepMounted2 = compose(sheet_stories_exports, "KeepMounted", G, B);
  var Controlled2 = compose(sheet_stories_exports, "Controlled", G, B);
  var ControlledCollapse3 = compose(sheet_stories_exports, "ControlledCollapse", G, B);
  var ContentNavigation2 = compose(sheet_stories_exports, "ContentNavigation", G, B);
  var ScrollableContent2 = compose(sheet_stories_exports, "ScrollableContent", G, B);
  var OpenForVisualTest2 = compose(sheet_stories_exports, "OpenForVisualTest", G, B);
  var OpenBrandForVisualTest2 = compose(sheet_stories_exports, "OpenBrandForVisualTest", G, B);
  var OpenSmallForVisualTest2 = compose(sheet_stories_exports, "OpenSmallForVisualTest", G, B);
  var OpenWithoutHandleForVisualTest2 = compose(sheet_stories_exports, "OpenWithoutHandleForVisualTest", G, B);
  var CollapsedForVisualTest2 = compose(sheet_stories_exports, "CollapsedForVisualTest", G, B);
  var OpenSnapPointForVisualTest2 = compose(sheet_stories_exports, "OpenSnapPointForVisualTest", G, B);
  var OpenScrollableForVisualTest2 = compose(sheet_stories_exports, "OpenScrollableForVisualTest", G, B);
  return __toCommonJS(Sheet_preview_exports);
})();

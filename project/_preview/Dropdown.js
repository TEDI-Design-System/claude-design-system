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

  // Dropdown.preview.tsx
  var Dropdown_preview_exports = {};
  __export(Dropdown_preview_exports, {
    CustomContent: () => CustomContent2,
    CustomWidth: () => CustomWidth2,
    Default: () => Default2,
    Divided: () => Divided2,
    OpenChromeForVisualTest: () => OpenChromeForVisualTest2,
    OpenControlItemsForVisualTest: () => OpenControlItemsForVisualTest2,
    OpenItemsForVisualTest: () => OpenItemsForVisualTest2,
    RestrictedHeight: () => RestrictedHeight2,
    Tree: () => Tree2,
    WithAction: () => WithAction2,
    WithActiveItem: () => WithActiveItem2,
    WithCheckbox: () => WithCheckbox2,
    WithDescription: () => WithDescription2,
    WithIcon: () => WithIcon2,
    WithIndentedItems: () => WithIndentedItems2,
    WithRadio: () => WithRadio2,
    WithSeparatorAndOpensRight: () => WithSeparatorAndOpensRight2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/overlays/dropdown/dropdown.stories.tsx
  var dropdown_stories_exports = {};
  __export(dropdown_stories_exports, {
    CustomContent: () => CustomContent,
    CustomWidth: () => CustomWidth,
    Default: () => Default,
    Divided: () => Divided,
    OpenChromeForVisualTest: () => OpenChromeForVisualTest,
    OpenControlItemsForVisualTest: () => OpenControlItemsForVisualTest,
    OpenItemsForVisualTest: () => OpenItemsForVisualTest,
    RestrictedHeight: () => RestrictedHeight,
    Tree: () => Tree,
    WithAction: () => WithAction,
    WithActiveItem: () => WithActiveItem,
    WithCheckbox: () => WithCheckbox,
    WithDescription: () => WithDescription,
    WithIcon: () => WithIcon,
    WithIndentedItems: () => WithIndentedItems,
    WithRadio: () => WithRadio,
    WithSeparatorAndOpensRight: () => WithSeparatorAndOpensRight,
    default: () => dropdown_stories_default
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

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/form/checkbox/checkbox.tsx
  var checkbox_exports = {};
  __export(checkbox_exports, {
    default: () => checkbox_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(checkbox_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var checkbox_default = ns4["Checkbox"] ?? ns4;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/form/radio/radio.tsx
  var radio_exports = {};
  __export(radio_exports, {
    default: () => radio_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(radio_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var radio_default = ns5["Radio"] ?? ns5;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/form/search/search.tsx
  var search_exports = {};
  __export(search_exports, {
    default: () => search_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(search_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var search_default = ns6["Search"] ?? ns6;

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
  var ns7 = window.Tedi;
  var row_default = ns7["Row"] ?? ns7;

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
  var ns8 = window.Tedi;
  var col_default = ns8["Col"] ?? ns8;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, col_exports);

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/misc/option-content/option-content.tsx
  var option_content_exports = {};
  __export(option_content_exports, {
    default: () => option_content_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(option_content_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var option_content_default = ns9["OptionContent"] ?? ns9;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/misc/separator/separator.tsx
  var separator_exports = {};
  __export(separator_exports, {
    default: () => separator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(separator_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var separator_default = ns10["Separator"] ?? ns10;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/overlays/dropdown/dropdown.tsx
  var dropdown_exports = {};
  __export(dropdown_exports, {
    default: () => dropdown_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(dropdown_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var dropdown_default = ns11["Dropdown"] ?? ns11;

  // src/tedi/components/overlays/dropdown/dropdown.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var dropdown_stories_default = {
    title: "TEDI-Ready/Components/Overlay/Dropdown",
    component: dropdown_exports.Dropdown,
    subcomponents: {
      "Dropdown.Trigger": dropdown_exports.Dropdown.Trigger,
      "Dropdown.Content": dropdown_exports.Dropdown.Content,
      "Dropdown.Item": dropdown_exports.Dropdown.Item,
      "Dropdown.Separator": dropdown_exports.Dropdown.Separator
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
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.35.54?node-id=12185-156201&t=xqukY4r7lJRpWTby-4"
      }
    }
  };
  var Default = {
    argTypes: {
      ...subcomponentArgTypes(dropdown_exports.Dropdown.Item, {
        category: "Dropdown.Item",
        prefix: "item",
        exclude: ["children", "onClick", "index"]
      })
    },
    args: {
      item__active: true
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { ...getPrimaryComponentProps(args), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconRight: "keyboard_arrow_down", children: "Create" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, onClick: () => console.log("Lisa p\xF6\xF6rdumine"), children: "Access to health data" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, ...getSubcomponentProps(args, "item"), onClick: () => console.log("Lisa toetus"), children: "Declaration of intent" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, children: "Contacts" })
      ] })
    ] })
  };
  var WithActiveItem = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => {
      const [lang, setLang] = import_react.default.useState("ENG");
      const [filter, setFilter] = import_react.default.useState("Newest first");
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "link", iconRight: "expand_more", children: lang }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: ["EST", "ENG", "RUS"].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: i, active: lang === l, onClick: () => setLang(l), children: l }, l)) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { width: 200, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_exports.Button, { visualType: "link", iconRight: "expand_more", children: [
            "Sort: ",
            filter
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: ["Newest first", "Oldest first", "Application name A\u2013Z", "Application name Z\u2013A"].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: i, active: filter === f, onClick: () => setFilter(f), children: f }, f)) })
        ] }) })
      ] });
    }
  };
  var WithAction = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", icon: "add", children: "Add" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, onClick: () => console.log("Lisa p\xF6\xF6rdumine"), children: "Create contact" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, onClick: () => console.log("Lisa toetus"), children: "Create application" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, children: "Create invoice" })
      ] })
    ] })
  };
  var WithIcon = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconLeft: "more_vert", children: "More" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "download", color: "inherit", display: "inline" }),
          " Download"
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "add", color: "inherit", display: "inline" }),
          " Add"
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "delete", color: "inherit", display: "inline" }),
          " Delete"
        ] }) })
      ] })
    ] })
  };
  var WithCheckbox = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => {
      const [cities, setCities] = import_react.default.useState([]);
      const toggle = (value) => (_value, checked) => {
        setCities((prev) => checked ? [...prev.filter((v) => v !== value), value] : prev.filter((v) => v !== value));
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_exports.Button, { visualType: "primary", iconRight: "keyboard_arrow_down", children: [
          "Locations (",
          cities.length,
          ")"
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, asChild: true, closeOnSelect: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            checkbox_default,
            {
              id: "parnu",
              label: "P\xE4rnu",
              value: "parnu",
              checked: cities.includes("parnu"),
              onChange: toggle("parnu"),
              name: ""
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, asChild: true, closeOnSelect: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            checkbox_default,
            {
              id: "tartu",
              label: "Tartu",
              value: "tartu",
              checked: cities.includes("tartu"),
              onChange: toggle("tartu"),
              name: ""
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, asChild: true, closeOnSelect: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            checkbox_default,
            {
              id: "tallinn",
              label: "Tallinn",
              value: "tallinn",
              checked: cities.includes("tallinn"),
              onChange: toggle("tallinn"),
              name: ""
            }
          ) })
        ] })
      ] });
    }
  };
  var allCities = ["tallinn", "tartu", "parnu"];
  var WithIndentedItems = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => {
      const [selected, setSelected] = import_react.default.useState([]);
      const allChecked = selected.length === allCities.length;
      const noneChecked = selected.length === 0;
      const indeterminate = !allChecked && !noneChecked;
      const toggleAll = (_, checked) => {
        setSelected(checked ? allCities : []);
      };
      const toggleOne = (value) => (_, checked) => {
        setSelected((prev) => checked ? [...prev.filter((v) => v !== value), value] : prev.filter((v) => v !== value));
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_exports.Button, { visualType: "secondary", iconRight: "keyboard_arrow_down", children: [
          "Locations (",
          selected.length,
          ")"
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, asChild: true, closeOnSelect: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            checkbox_default,
            {
              id: "all",
              label: "All locations",
              checked: allChecked,
              indeterminate,
              onChange: toggleAll,
              name: "",
              value: ""
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, asChild: true, closeOnSelect: false, indent: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            checkbox_default,
            {
              id: "tallinn",
              label: "Tallinn",
              value: "tallinn",
              checked: selected.includes("tallinn"),
              onChange: toggleOne("tallinn"),
              name: ""
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, asChild: true, closeOnSelect: false, indent: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            checkbox_default,
            {
              id: "tartu",
              label: "Tartu",
              value: "tartu",
              checked: selected.includes("tartu"),
              onChange: toggleOne("tartu"),
              name: ""
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 3, asChild: true, closeOnSelect: false, indent: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            checkbox_default,
            {
              id: "parnu",
              label: "P\xE4rnu",
              value: "parnu",
              checked: selected.includes("parnu"),
              onChange: toggleOne("parnu"),
              name: ""
            }
          ) })
        ] })
      ] });
    }
  };
  var WithRadio = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => {
      const [city, setCity] = import_react.default.useState("tallinn");
      const cities = {
        tallinn: "Tallinn",
        tartu: "Tartu",
        parnu: "P\xE4rnu"
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_exports.Button, { visualType: "link", iconRight: "keyboard_arrow_down", children: [
          "City: ",
          cities[city]
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, asChild: true, closeOnSelect: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            radio_default,
            {
              id: "city-tallinn",
              name: "city",
              value: "tallinn",
              label: "Tallinn",
              checked: city === "tallinn",
              onChange: (value) => setCity(value)
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, asChild: true, closeOnSelect: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            radio_default,
            {
              id: "city-tartu",
              name: "city",
              value: "tartu",
              label: "Tartu",
              checked: city === "tartu",
              onChange: (value) => setCity(value)
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, asChild: true, closeOnSelect: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            radio_default,
            {
              id: "city-parnu",
              name: "city",
              value: "parnu",
              label: "P\xE4rnu",
              checked: city === "parnu",
              onChange: (value) => setCity(value)
            }
          ) })
        ] })
      ] });
    }
  };
  var CustomWidth = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { width: 300, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconRight: "keyboard_arrow_down", children: "Actions" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, active: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex align-items-center justify-content-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Access to health data" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_forward", color: "inherit", size: 16 })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex align-items-center justify-content-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Declaration of intent" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_forward", color: "inherit", size: 16 })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex align-items-center justify-content-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Contacts" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_forward", color: "inherit", size: 16 })
        ] }) })
      ] })
    ] }) }) })
  };
  var RestrictedHeight = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { maxHeight: 240, width: 280, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconRight: "keyboard_arrow_down", children: "Vali raviasutus" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: [
        "Fertilitas",
        "Ida-Tallinna Keskhaigla",
        "L\xE4\xE4ne-Tallinna Keskhaigla",
        "P\xF5hja-Eesti Regionaalhaigla",
        "Tallinna Lastehaigla",
        "Tartu \xDClikooli Kliinikum",
        "P\xE4rnu Haigla",
        "Narva Haigla",
        "Viljandi Haigla",
        "Kuressaare Haigla"
      ].map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index, children: label }, label)) })
    ] }) }) })
  };
  var WithDescription = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { width: 400, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconLeft: "share", iconRight: "keyboard_arrow_down", children: "Share access" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, active: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-column", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Access to health data" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "tertiary", modifiers: "small", children: "Doctors will be able to see your health data" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-column", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Access to medications and health data" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "tertiary", modifiers: "small", children: "Doctors will be able to see your medications and health data" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-column", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Access to all" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "tertiary", modifiers: "small", children: "Doctors will be able to see all your information, including declaration of health and other medical info" })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { width: 300, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconRight: "keyboard_arrow_down", children: "Choose location" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, active: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex align-items-center justify-content-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Tallinn" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "tertiary", modifiers: "small", children: "3 timeslots available" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex align-items-center justify-content-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Tartu" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "tertiary", modifiers: "small", children: "4 timeslots available" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex align-items-center justify-content-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Elva" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "tertiary", modifiers: "small", children: "7 timeslots available" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex align-items-center justify-content-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Rakvere" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "tertiary", modifiers: "small", children: "3 timeslots available" })
          ] }) })
        ] })
      ] }) })
    ] })
  };
  var Divided = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { divided: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconLeft: "account_circle", iconRight: "keyboard_arrow_down", children: "Account" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, children: "Profile" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, children: "Security" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, children: "Billing" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "logout", color: "inherit", display: "inline" }),
          " Log out"
        ] }) })
      ] })
    ] })
  };
  var WithSeparatorAndOpensRight = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { placement: "right-start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconRight: "keyboard_arrow_down", children: "More actions" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "edit", display: "inline", color: "inherit" }),
          " Edit"
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "content_copy", display: "inline", color: "inherit" }),
          " Duplicate"
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Separator, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "archive", display: "inline", color: "inherit" }),
          " Archive"
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "delete", display: "inline", color: "inherit" }),
          " Delete"
        ] }) })
      ] })
    ] })
  };
  var CustomContent = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => {
      const [query, setQuery] = import_react.default.useState("");
      const representatives = [
        { name: "Lauri Lepp", code: "49504080254" },
        { name: "Mart Mardivere", code: "39504080254" },
        { name: "Madis Mets", code: "39504080254" },
        { name: "Kalle Kaasik", code: "39504080254" },
        { name: "Pille Porgand", code: "49504080254" },
        { name: "Kert Kasemets", code: "39504080254" }
      ];
      const filtered = query.trim() === "" ? representatives : representatives.filter(
        (rep) => rep.name.toLowerCase().includes(query.toLowerCase()) || rep.code.includes(query)
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { width: 300, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "link", iconRight: "keyboard_arrow_down", children: "Choose representative" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, closeOnSelect: false, asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(search_exports.Search, { id: "dropdown-search", label: "Otsi", value: query, onChange: (value) => setQuery(value) }) }),
          filtered.map((rep, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: i + 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(option_content_exports.OptionContent.Label, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "bold", children: rep.name }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              separator_default,
              {
                axis: "vertical",
                color: "secondary",
                display: "inline",
                dotSize: "small",
                element: "span",
                spacing: 0.5,
                variant: "dot-only"
              }
            ),
            rep.code
          ] }) }) }, rep.name))
        ] })
      ] });
    }
  };
  var Tree = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { variant: "tree", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { iconRight: "keyboard_arrow_down", children: "Open Tree Dropdown" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { asChild: true, children: "Parent" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { indent: 1, children: "Child 1" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { indent: 1, children: "Child 2" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { indent: 1, children: "Child 3" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { variant: "tree", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { iconRight: "keyboard_arrow_down", children: "Open Tree Dropdown" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { asChild: true, indent: 1, isParent: true, children: "Parent" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { indent: 1, children: "Child 1" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { indent: 1, children: "Child 2" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { indent: 1, children: "Child 3" })
        ] })
      ] }) })
    ] })
  };
  var OpenItemsForVisualTest = {
    tags: ["!dev", "!autodocs"],
    parameters: {
      a11y: {
        config: {
          rules: [
            // `aria-hidden-focus`: @floating-ui/react wraps a non-modal floating element in two
            // `data-floating-ui-focus-guard` spans that carry tabindex="0" with aria-hidden="true"
            // by its own design. Pre-existing in every open dropdown.
            { id: "aria-hidden-focus", enabled: false },
            // `aria-valid-attr-value`: the open menu sets aria-activedescendant="dropdown-item-N"
            // once an item takes focus, but no `Dropdown.Item` renders that id. A component bug,
            // reported separately; these are the first stories that render a focused open menu.
            { id: "aria-valid-attr-value", enabled: false }
          ]
        }
      }
    },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { defaultOpen: true, width: 260, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconRight: "keyboard_arrow_down", children: "Create" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, children: "Access to health data" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, active: true, children: "Declaration of intent" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, disabled: true, children: "Contacts" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { defaultOpen: true, width: 260, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconLeft: "more_vert", children: "More" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "download", color: "inherit", display: "inline" }),
            " Download"
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "add", color: "inherit", display: "inline" }),
            " Add"
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "delete", color: "inherit", display: "inline" }),
            " Delete"
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { defaultOpen: true, width: 320, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconLeft: "share", iconRight: "keyboard_arrow_down", children: "Share access" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, active: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-column", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Access to health data" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "tertiary", modifiers: "small", children: "Doctors will be able to see your health data" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex align-items-center justify-content-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Tallinn" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "tertiary", modifiers: "small", children: "3 timeslots" })
          ] }) })
        ] })
      ] }) })
    ] })
  };
  var OpenChromeForVisualTest = {
    tags: ["!dev", "!autodocs"],
    parameters: {
      a11y: {
        config: {
          rules: [
            // `aria-hidden-focus`: @floating-ui/react wraps a non-modal floating element in two
            // `data-floating-ui-focus-guard` spans that carry tabindex="0" with aria-hidden="true"
            // by its own design. Pre-existing in every open dropdown.
            { id: "aria-hidden-focus", enabled: false },
            // `aria-valid-attr-value`: the open menu sets aria-activedescendant="dropdown-item-N"
            // once an item takes focus, but no `Dropdown.Item` renders that id. A component bug,
            // reported separately; these are the first stories that render a focused open menu.
            { id: "aria-valid-attr-value", enabled: false }
          ]
        }
      }
    },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { defaultOpen: true, divided: true, width: 240, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconLeft: "account_circle", iconRight: "keyboard_arrow_down", children: "Account" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, children: "Profile" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, children: "Security" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, children: "Billing" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { defaultOpen: true, width: 240, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconRight: "keyboard_arrow_down", children: "More actions" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "edit", display: "inline", color: "inherit" }),
            " Edit"
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Separator, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "delete", display: "inline", color: "inherit" }),
            " Delete"
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { defaultOpen: true, maxHeight: 200, width: 280, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconRight: "keyboard_arrow_down", children: "Vali raviasutus" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: [
          "Fertilitas",
          "Ida-Tallinna Keskhaigla",
          "L\xE4\xE4ne-Tallinna Keskhaigla",
          "P\xF5hja-Eesti Regionaalhaigla",
          "Tallinna Lastehaigla",
          "Tartu \xDClikooli Kliinikum",
          "P\xE4rnu Haigla"
        ].map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index, children: label }, label)) })
      ] }) })
    ] })
  };
  var OpenControlItemsForVisualTest = {
    tags: ["!dev", "!autodocs"],
    parameters: {
      a11y: {
        config: {
          rules: [
            // `aria-hidden-focus`: @floating-ui/react wraps a non-modal floating element in two
            // `data-floating-ui-focus-guard` spans that carry tabindex="0" with aria-hidden="true"
            // by its own design. Pre-existing in every open dropdown.
            { id: "aria-hidden-focus", enabled: false },
            // `aria-valid-attr-value`: the open menu sets aria-activedescendant="dropdown-item-N"
            // once an item takes focus, but no `Dropdown.Item` renders that id. A component bug,
            // reported separately; these are the first stories that render a focused open menu.
            { id: "aria-valid-attr-value", enabled: false },
            // `aria-required-children`: with `closeOnSelect={false}` the item wraps the control in a
            // `div` without a menu item role. Moving the role and focus onto the control is #1006.
            { id: "aria-required-children", enabled: false }
          ]
        }
      }
    },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { defaultOpen: true, width: 240, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "primary", iconRight: "keyboard_arrow_down", children: "Locations (1)" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, asChild: true, closeOnSelect: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(checkbox_default, { id: "vt-parnu", label: "P\xE4rnu", value: "parnu", name: "", defaultChecked: true }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, asChild: true, closeOnSelect: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(checkbox_default, { id: "vt-tartu", label: "Tartu", value: "tartu", name: "" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { defaultOpen: true, width: 240, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "link", iconRight: "keyboard_arrow_down", children: "City: Tallinn" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, asChild: true, closeOnSelect: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default, { id: "vt-city-tallinn", name: "vt-city", value: "tallinn", label: "Tallinn", defaultChecked: true }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, asChild: true, closeOnSelect: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default, { id: "vt-city-tartu", name: "vt-city", value: "tartu", label: "Tartu" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { defaultOpen: true, width: 240, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconRight: "keyboard_arrow_down", children: "All locations" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, asChild: true, closeOnSelect: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(checkbox_default, { id: "vt-all", label: "All locations", value: "", name: "", indeterminate: true }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, asChild: true, closeOnSelect: false, indent: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(checkbox_default, { id: "vt-ind-tallinn", label: "Tallinn", value: "tallinn", name: "", defaultChecked: true }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, asChild: true, closeOnSelect: false, indent: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(checkbox_default, { id: "vt-ind-tartu", label: "Tartu", value: "tartu", name: "" }) })
        ] })
      ] }) })
    ] })
  };

  // tedi-compose:compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React2 = __toESM(require_react());
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
      if (Component) render = () => React2.createElement(Component, args);
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

  // Dropdown.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(dropdown_stories_exports, "Default", G, B);
  var WithActiveItem2 = compose(dropdown_stories_exports, "WithActiveItem", G, B);
  var WithAction2 = compose(dropdown_stories_exports, "WithAction", G, B);
  var WithIcon2 = compose(dropdown_stories_exports, "WithIcon", G, B);
  var WithCheckbox2 = compose(dropdown_stories_exports, "WithCheckbox", G, B);
  var WithIndentedItems2 = compose(dropdown_stories_exports, "WithIndentedItems", G, B);
  var WithRadio2 = compose(dropdown_stories_exports, "WithRadio", G, B);
  var CustomWidth2 = compose(dropdown_stories_exports, "CustomWidth", G, B);
  var RestrictedHeight2 = compose(dropdown_stories_exports, "RestrictedHeight", G, B);
  var WithDescription2 = compose(dropdown_stories_exports, "WithDescription", G, B);
  var Divided2 = compose(dropdown_stories_exports, "Divided", G, B);
  var WithSeparatorAndOpensRight2 = compose(dropdown_stories_exports, "WithSeparatorAndOpensRight", G, B);
  var CustomContent2 = compose(dropdown_stories_exports, "CustomContent", G, B);
  var Tree2 = compose(dropdown_stories_exports, "Tree", G, B);
  var OpenItemsForVisualTest2 = compose(dropdown_stories_exports, "OpenItemsForVisualTest", G, B);
  var OpenChromeForVisualTest2 = compose(dropdown_stories_exports, "OpenChromeForVisualTest", G, B);
  var OpenControlItemsForVisualTest2 = compose(dropdown_stories_exports, "OpenControlItemsForVisualTest", G, B);
  return __toCommonJS(Dropdown_preview_exports);
})();

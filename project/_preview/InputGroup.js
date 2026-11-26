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

  // InputGroup.preview.tsx
  var InputGroup_preview_exports = {};
  __export(InputGroup_preview_exports, {
    EndDynamic: () => EndDynamic2,
    EndStatic: () => EndStatic2,
    StartDynamic: () => StartDynamic2,
    StartStatic: () => StartStatic2,
    States: () => States2,
    WithButtonAddons: () => WithButtonAddons2,
    WithFeedbackText: () => WithFeedbackText2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/input-group/input-group.stories.tsx
  var input_group_stories_exports = {};
  __export(input_group_stories_exports, {
    EndDynamic: () => EndDynamic,
    EndStatic: () => EndStatic,
    StartDynamic: () => StartDynamic,
    StartStatic: () => StartStatic,
    States: () => States,
    WithButtonAddons: () => WithButtonAddons,
    WithFeedbackText: () => WithFeedbackText,
    default: () => input_group_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

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

  // tedi:src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var text_default = ns2["Text"] ?? ns2;

  // tedi:src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var button_default = ns3["Button"] ?? ns3;

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
  var ns4 = window.Tedi;
  var row_default = ns4["Row"] ?? ns4;

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
  var ns5 = window.Tedi;
  var col_default = ns5["Col"] ?? ns5;

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
  var ns6 = window.Tedi;
  var vertical_spacing_default = ns6["VerticalSpacing"] ?? ns6;

  // tedi:src/tedi/components/overlays/dropdown/index.ts
  var dropdown_exports = {};
  __export(dropdown_exports, {
    default: () => dropdown_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(dropdown_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var dropdown_default = ns7["Dropdown"] ?? ns7;

  // tedi:src/tedi/components/form/field/field.tsx
  var field_exports = {};
  __export(field_exports, {
    default: () => field_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(field_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var field_default = ns8["Field"] ?? ns8;

  // tedi:src/tedi/components/form/file-upload/index.ts
  var file_upload_exports = {};
  __export(file_upload_exports, {
    default: () => file_upload_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(file_upload_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var file_upload_default = ns9["FileUpload"] ?? ns9;

  // tedi:src/tedi/components/form/search/search.tsx
  var search_exports = {};
  __export(search_exports, {
    default: () => search_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(search_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var search_default = ns10["Search"] ?? ns10;

  // tedi:src/tedi/components/form/select/select.tsx
  var select_exports = {};
  __export(select_exports, {
    default: () => select_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(select_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var select_default = ns11["Select"] ?? ns11;

  // tedi:src/tedi/components/form/input-group/input-group.tsx
  var input_group_exports = {};
  __export(input_group_exports, {
    default: () => input_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(input_group_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var input_group_default = ns12["InputGroup"] ?? ns12;

  // src/tedi/components/form/input-group/input-group.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    title: "TEDI-Ready/Components/Form/InputGroup",
    component: input_group_default,
    subcomponents: {
      "InputGroup.Prefix": input_group_default.Prefix,
      "InputGroup.Input": input_group_default.Input,
      "InputGroup.Suffix": input_group_default.Suffix
    },
    parameters: {
      a11y: {
        config: {
          rules: [{ id: "color-contrast", enabled: false }]
        }
      }
    }
  };
  var input_group_stories_default = meta;
  var StartStatic = {
    args: {
      label: "Address"
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { ...args, id: "start-static", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Prefix, { children: "Street" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, {}) })
    ] })
  };
  var COUNTRIES = [
    { code: "EE", name: "Estonia", dial: "372" },
    { code: "LV", name: "Latvia", dial: "371" },
    { code: "LT", name: "Lithuania", dial: "370" },
    { code: "FI", name: "Finland", dial: "358" }
  ];
  var CURRENCIES = [
    { code: "EUR", name: "Euro" },
    { code: "USD", name: "US Dollar" },
    { code: "GBP", name: "British Pound" },
    { code: "SEK", name: "Swedish Krona" }
  ];
  var ACCOUNTS = [
    { label: "Checking \xB7 EE38 2200 2210 2014 5685", value: "checking" },
    { label: "Savings \xB7 EE96 2200 2210 2014 7283", value: "savings" },
    { label: "Investment \xB7 EE27 2200 2210 2014 8120", value: "investment" }
  ];
  var FILE_FORMATS = ["PDF", "XLSX", "DOCX", "CSV", "TXT"];
  var SEARCH_CATEGORIES = ["All", "Articles", "People", "Files", "Projects"];
  var PhonePrefixRow = () => {
    const [country, setCountry] = (0, import_react.useState)(COUNTRIES[0]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 4, md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Phone number", id: "start-phone", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Prefix, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_exports.Button, { noStyle: true, className: "flex align-items-center", children: [
          "+",
          country.dial,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_drop_down", color: "inherit" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: COUNTRIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Item, { active: c.code === country.code, onClick: () => setCountry(c), children: [
          c.name,
          " (+",
          c.dial,
          ")"
        ] }, c.code)) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, { type: "tel" }) })
    ] }) }) });
  };
  var CurrencyPrefixSelectRow = () => {
    const [currency, setCurrency] = (0, import_react.useState)(CURRENCIES[0]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 4, md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Transfer from", id: "start-transfer-from", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Prefix, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_exports.Button, { noStyle: true, className: "flex align-items-center", children: [
          currency.code,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_drop_down", color: "inherit" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: CURRENCIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Item, { active: c.code === currency.code, onClick: () => setCurrency(c), children: [
          c.name,
          " (",
          c.code,
          ")"
        ] }, c.code)) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(select_default, { isClearIndicatorVisible: true, options: ACCOUNTS }) })
    ] }) }) });
  };
  var FileFormatPrefixRow = () => {
    const [format, setFormat] = (0, import_react.useState)(FILE_FORMATS[0]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Report", id: "start-file-format", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Prefix, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_exports.Button, { noStyle: true, className: "flex align-items-center", children: [
          format,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_drop_down", color: "inherit" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: FILE_FORMATS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { active: f === format, onClick: () => setFormat(f), children: f }, f)) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(file_upload_exports.FileUpload, { name: "start-file-upload" }) })
    ] }) }) });
  };
  var SearchCategoryPrefixRow = () => {
    const [category, setCategory] = (0, import_react.useState)(SEARCH_CATEGORIES[0]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Search", id: "start-search-category", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Prefix, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_exports.Button, { noStyle: true, className: "flex align-items-center", children: [
          category,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_drop_down", color: "inherit" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: SEARCH_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { active: c === category, onClick: () => setCategory(c), children: c }, c)) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(search_exports.Search, { name: "start-search" }) })
    ] }) }) });
  };
  var StartDynamic = {
    parameters: {
      a11y: {
        options: {
          // react-select's whole control is the pointer target, so axe flagging its inner input is a false positive.
          rules: { "target-size": { enabled: false } }
        }
      }
    },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhonePrefixRow, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencyPrefixSelectRow, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileFormatPrefixRow, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchCategoryPrefixRow, {})
    ] })
  };
  var EndStatic = {
    args: {
      label: "Cost"
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { ...args, id: "end-static", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Suffix, { children: "EUR" })
    ] })
  };
  var TIMEZONES = [
    { code: "UTC", label: "UTC" },
    { code: "EET", label: "EET (UTC+2)" },
    { code: "CET", label: "CET (UTC+1)" },
    { code: "EST", label: "EST (UTC\u22125)" }
  ];
  var MEETINGS = [
    { label: "Weekly sync \xB7 Mon 09:00", value: "weekly-sync" },
    { label: "Product review \xB7 Wed 14:00", value: "product-review" },
    { label: "All-hands \xB7 Fri 11:00", value: "all-hands" }
  ];
  var CostUnitSuffixRow = () => {
    const [currency, setCurrency] = (0, import_react.useState)(CURRENCIES[0]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 4, md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Cost", id: "end-cost-currency", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, { type: "tel" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Suffix, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_exports.Button, { noStyle: true, className: "flex align-items-center", children: [
          currency.code,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_drop_down", color: "inherit" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: CURRENCIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Item, { active: c.code === currency.code, onClick: () => setCurrency(c), children: [
          c.name,
          " (",
          c.code,
          ")"
        ] }, c.code)) })
      ] }) })
    ] }) }) });
  };
  var TimezoneSuffixSelectRow = () => {
    const [timezone, setTimezone] = (0, import_react.useState)(TIMEZONES[0]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 4, md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Schedule", id: "end-schedule-timezone", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(select_default, { isClearIndicatorVisible: true, options: MEETINGS }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Suffix, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_exports.Button, { noStyle: true, className: "flex align-items-center", children: [
          timezone.code,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_drop_down", color: "inherit" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: TIMEZONES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { active: t.code === timezone.code, onClick: () => setTimezone(t), children: t.label }, t.code)) })
      ] }) })
    ] }) }) });
  };
  var FileFormatSuffixRow = () => {
    const [format, setFormat] = (0, import_react.useState)(FILE_FORMATS[0]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Report", id: "end-file-format", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(file_upload_exports.FileUpload, { name: "end-file-upload" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Suffix, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_exports.Button, { noStyle: true, className: "flex align-items-center", children: [
          format,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_drop_down", color: "inherit" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: FILE_FORMATS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { active: f === format, onClick: () => setFormat(f), children: f }, f)) })
      ] }) })
    ] }) }) });
  };
  var SearchCategorySuffixRow = () => {
    const [category, setCategory] = (0, import_react.useState)(SEARCH_CATEGORIES[0]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Search", id: "end-search-category", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(search_exports.Search, { name: "end-search" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Suffix, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_exports.Button, { noStyle: true, className: "flex align-items-center", children: [
          category,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_drop_down", color: "inherit" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: SEARCH_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { active: c === category, onClick: () => setCategory(c), children: c }, c)) })
      ] }) })
    ] }) }) });
  };
  var EndDynamic = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostUnitSuffixRow, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimezoneSuffixSelectRow, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileFormatSuffixRow, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchCategorySuffixRow, {})
    ] })
  };
  var stateArray = ["Default", "Hover", "Focus", "Active", "Disabled"];
  var TemplateColumnWithStates = (args) => {
    const { array } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      array.map((state, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 2, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: state }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Label", id: `state-${state}-prefix`, disabled: state === "Disabled", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Prefix, { children: "Street" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, {}) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Label", id: `state-${state}-suffix`, disabled: state === "Disabled", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Suffix, { children: "EUR" })
        ] }) })
      ] }, index)),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 2, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Error" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Label", id: "state-error-prefix", invalid: true, helper: { text: "Feedback text", type: "error" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Prefix, { children: "Street" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, {}) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Label", id: "state-error-suffix", invalid: true, helper: { text: "Feedback text", type: "error" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Suffix, { children: "EUR" })
        ] }) })
      ] })
    ] });
  };
  var States = {
    render: TemplateColumnWithStates,
    args: {
      array: stateArray
    },
    parameters: {
      pseudo: {
        hover: ["#state-Hover-prefix", "#state-Hover-suffix"],
        focus: ["#state-Focus-prefix", "#state-Focus-suffix"],
        active: ["#state-Active-prefix", "#state-Active-suffix"]
      }
    }
  };
  var WithButtonAddons = {
    args: {
      label: "Promo code",
      addons: false
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { ...args, id: "input-group-button", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, { placeholder: "Enter promo code" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Suffix, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { children: "Apply" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { ...args, disabled: true, id: "input-group-button-disabled", label: "Promo code (disabled)", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, { placeholder: "Enter promo code" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Suffix, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { children: "Apply" }) })
      ] })
    ] })
  };
  var WithFeedbackText = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Amount", id: "feedback-hint", helper: { text: "Enter the amount in euros", type: "hint" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, { placeholder: "0.00" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Suffix, { children: "EUR" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { label: "Amount", id: "feedback-error", invalid: true, helper: { text: "This field is required", type: "error" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, { placeholder: "0.00" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Suffix, { children: "EUR" })
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

  // InputGroup.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var StartStatic2 = compose(input_group_stories_exports, "StartStatic", G, B);
  var StartDynamic2 = compose(input_group_stories_exports, "StartDynamic", G, B);
  var EndStatic2 = compose(input_group_stories_exports, "EndStatic", G, B);
  var EndDynamic2 = compose(input_group_stories_exports, "EndDynamic", G, B);
  var States2 = compose(input_group_stories_exports, "States", G, B);
  var WithButtonAddons2 = compose(input_group_stories_exports, "WithButtonAddons", G, B);
  var WithFeedbackText2 = compose(input_group_stories_exports, "WithFeedbackText", G, B);
  return __toCommonJS(InputGroup_preview_exports);
})();

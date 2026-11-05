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

  // TextGroup.preview.tsx
  var TextGroup_preview_exports = {};
  __export(TextGroup_preview_exports, {
    CustomLabel: () => CustomLabel2,
    Default: () => Default2,
    HasSlot: () => HasSlot2,
    HorizontalLabelLength: () => HorizontalLabelLength2,
    LongTextValues: () => LongTextValues2,
    PositionType: () => PositionType2,
    Responsive: () => Responsive2,
    TextWeight: () => TextWeight2,
    Types: () => Types2,
    WithList: () => WithList2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/content/text-group/text-group.stories.tsx
  var text_group_stories_exports = {};
  __export(text_group_stories_exports, {
    CustomLabel: () => CustomLabel,
    Default: () => Default,
    HasSlot: () => HasSlot,
    HorizontalLabelLength: () => HorizontalLabelLength,
    LongTextValues: () => LongTextValues,
    PositionType: () => PositionType,
    Responsive: () => Responsive,
    TextWeight: () => TextWeight,
    Types: () => Types,
    WithList: () => WithList,
    default: () => text_group_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/icon/icon.tsx
  var icon_exports = {};
  __export(icon_exports, {
    default: () => icon_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(icon_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var icon_default = ns["Icon"] ?? ns;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var text_default = ns2["Text"] ?? ns2;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/buttons/info-button/info-button.tsx
  var info_button_exports = {};
  __export(info_button_exports, {
    default: () => info_button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(info_button_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var info_button_default = ns3["InfoButton"] ?? ns3;

  // src/tedi/components/layout/grid/index.ts
  var grid_exports = {};
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/grid/row.tsx
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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/grid/col.tsx
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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var vertical_spacing_default = ns6["VerticalSpacing"] ?? ns6;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/navigation/link/link.tsx
  var link_exports = {};
  __export(link_exports, {
    default: () => link_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(link_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var link_default = ns7["Link"] ?? ns7;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/tags/status-badge/status-badge.tsx
  var status_badge_exports = {};
  __export(status_badge_exports, {
    default: () => status_badge_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(status_badge_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var status_badge_default = ns8["StatusBadge"] ?? ns8;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/label/label.tsx
  var label_exports = {};
  __export(label_exports, {
    default: () => label_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(label_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var label_default = ns9["Label"] ?? ns9;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/text-group/text-group.tsx
  var text_group_exports = {};
  __export(text_group_exports, {
    default: () => text_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_group_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var text_group_default = ns10["TextGroup"] ?? ns10;

  // src/tedi/components/content/text-group/text-group.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: text_group_exports.TextGroup,
    title: "Tedi-Ready/Content/TextGroup",
    subcomponents: { "TextGroup.List": text_group_exports.TextGroup.List },
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      //TODO: #827 a11y violations here are tracked for review in a separate issue — report as todo, don't fail CI.
      a11y: { test: "todo" },
      design: {
        type: "figma",
        url: "https://www.figma.com/file/jWiRIXhHRxwVdMSimKX2FF/TEDI-Design-System-(draft)?type=design&node-id=45-30752&mode=dev"
      }
    },
    argTypes: {
      labelAlign: {
        control: "radio",
        options: ["left", "right"],
        if: { arg: "type", neq: "vertical" },
        table: {
          disable: false
        }
      },
      type: {
        control: "radio",
        options: ["vertical", "horizontal"]
      }
    }
  };
  var text_group_stories_default = meta;
  var TemplateWithLayouts = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1.5, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { ...args, type: "vertical", labelAlign: "left" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { ...args, type: "horizontal", labelWidth: "150px" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { ...args, type: "horizontal", labelWidth: "150px", labelAlign: "right" })
    ] });
  };
  var MultipleTextGroupsTemplate = (args) => {
    const groups = [
      {
        labelWidth: "150px",
        items: [
          {
            label: "Patsient",
            value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "person", size: 18, color: "secondary" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Mari Maasikas" })
            ] })
          },
          {
            label: "Aadress",
            value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "location_on", size: 16, color: "secondary" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Tulbi tn 4, Tallinn, 23562, Eesti" })
            ] })
          }
        ]
      },
      {
        labelWidth: "180px",
        items: [
          {
            label: "Vaktsiin",
            value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Mari Maasikas" })
          },
          {
            label: "J\xE4rgmine vaktsineerimine",
            value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Vaktsineerimine l\xF5petatud" })
          }
        ]
      },
      {
        labelWidth: "200px",
        items: [
          {
            label: "Tervishoiuteenuse osutaja",
            value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "SA P\xF5hja-Eesti Regionaalhaigla" })
          },
          {
            label: "Tervishoiut\xF6\xF6taja",
            value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Mart Mets" })
          },
          {
            label: "Dokumendi loomise aeg",
            value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "16.08.2023 14:51:48" })
          }
        ]
      }
    ];
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: groups.map((group, groupIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: group.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { ...args, label: item.label, labelWidth: group.labelWidth, value: item.value }, index)) }) }, groupIndex)) });
  };
  var ExampleRows = ({ rows }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { className: "example-list", children: rows.map((row, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === rows.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, md: 3, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: row.title }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, md: 9, children: row.content })
  ] }, key)) }) });
  var Default = {
    args: {
      label: "Ligip\xE4\xE4setavus",
      value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Arstile ja esindajale n\xE4htav" })
    }
  };
  var PositionType = {
    name: "Position",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ExampleRows,
      {
        rows: [
          {
            title: "Vertical",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { type: "vertical", label: "Ligip\xE4\xE4setavus", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Arstile ja esindajale n\xE4htav" }) })
          },
          {
            title: "Horizontal, label left",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              text_group_exports.TextGroup,
              {
                type: "horizontal",
                labelWidth: "150px",
                label: "Ligip\xE4\xE4setavus",
                value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Arstile ja esindajale n\xE4htav" })
              }
            )
          },
          {
            title: "Horizontal, label right",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              text_group_exports.TextGroup,
              {
                type: "horizontal",
                labelWidth: "150px",
                labelAlign: "right",
                label: "Ligip\xE4\xE4setavus",
                value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Arstile ja esindajale n\xE4htav" })
              }
            )
          }
        ]
      }
    )
  };
  var TextWeight = {
    name: "Text weight",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ExampleRows,
      {
        rows: [
          {
            title: "Regular label",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { label: "Ligip\xE4\xE4setavus", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Arstile ja esindajale n\xE4htav" }) })
          },
          {
            title: "Bold label",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { label: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(label_exports.Label, { isBold: true, children: "Ligip\xE4\xE4setavus" }), value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "N\xE4htav arstile ja esindajale" }) })
          },
          {
            title: "Regular value",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { label: "Ligip\xE4\xE4setavus", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "N\xE4htav arstile ja esindajale" }) })
          },
          {
            title: "Bold value",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { label: "Ligip\xE4\xE4setavus", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "N\xE4htav arstile ja esindajale" }) })
          }
        ]
      }
    )
  };
  var Types = {
    name: "Type",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ExampleRows,
      {
        rows: [
          {
            title: "Has link",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { label: "Ligip\xE4\xE4setavus", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "N\xE4htav arstile ja esindajale" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                text_group_exports.TextGroup,
                {
                  label: "Ligip\xE4\xE4setavus",
                  value: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "N\xE4htav arstile ja esindajale" }, "v"),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "Vaata dokumenti" }, "l")
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                text_group_exports.TextGroup,
                {
                  label: "Ligip\xE4\xE4setavus",
                  value: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "N\xE4htav arstile ja esindajale" }, "v"),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", children: "dokument nr 4534" }, "l")
                  ]
                }
              )
            ] })
          },
          {
            title: "Has icon",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                text_group_exports.TextGroup,
                {
                  label: "Ligip\xE4\xE4setavus",
                  value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "lock", size: 16, color: "secondary" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "N\xE4htav arstile ja esindajale" })
                  ] })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                text_group_exports.TextGroup,
                {
                  label: "Patsient",
                  value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "person", size: 18, color: "secondary" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Mari Maasikas" })
                  ] })
                }
              )
            ] })
          },
          {
            title: "Has status",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              text_group_exports.TextGroup,
              {
                label: "Ligip\xE4\xE4s",
                value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.25, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Arstile ja esindajale n\xE4htav" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "brand", children: "Esitatud" })
                ] })
              }
            )
          }
        ]
      }
    )
  };
  var HasSlot = {
    name: "Has slot",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        text_group_exports.TextGroup,
        {
          label: "Ligip\xE4\xE4s",
          value: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Arstile ja esindajale n\xE4htav" }, "v"),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info_button_default, { "aria-label": "Lisainfo ligip\xE4\xE4su kohta" }, "s")
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        text_group_exports.TextGroup,
        {
          label: "Nimi",
          value: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Mari Maasikas" }, "v"),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", children: "Ligip\xE4\xE4s lubatud" }, "s")
          ]
        }
      )
    ] })
  };
  var HorizontalLabelLength = {
    render: MultipleTextGroupsTemplate,
    args: {
      type: "horizontal"
    }
  };
  var LongTextValues = {
    render: TemplateWithLayouts,
    args: {
      label: "Accessibility",
      labelWidth: "150px",
      value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar malesuada tellus, nec efficitur orci interdum vitae. Proin semper venenatis est, vel malesuada sapien ornare at. Vestibulum egestas in lectus non finibus. Donec rhoncus sapien vel justo elementum vestibulum. Vivamus euismod dui vel erat semper luctus. Nulla egestas purus elit, non fermentum sapien sagittis nec. Pellentesque ac sapien non justo vehicula porta." })
    }
  };
  var Responsive = {
    render: () => {
      const rows = [
        { label: "Patsient", value: "Mari Maasikas" },
        { label: "Aadress", value: "Tulbi tn 4, Tallinn, 23562, Eesti" },
        { label: "Vaktsiin", value: "Mari Maasikas" },
        { label: "J\xE4rgmine vaktsineerimine", value: "Immuniseerimine l\xF5petatud" },
        { label: "Tervishoiuteenuse osutaja", value: "SA P\xF5hja-Eesti Regionaalhaigla" },
        { label: "Tervishoiut\xF6\xF6taja", value: "Mart Mets" },
        { label: "Dokumendi loomise aeg", value: "16.08.2023 14:51:48" }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 0.25, children: rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        text_group_exports.TextGroup,
        {
          type: "vertical",
          sm: { type: "horizontal", labelWidth: "120px" },
          md: { labelWidth: "200px" },
          lg: { labelWidth: "25%" },
          label: row.label,
          value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: row.value })
        },
        index
      )) });
    }
  };
  var CustomLabel = {
    name: "Custom label",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ExampleRows,
      {
        rows: [
          {
            title: "With info button",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              text_group_exports.TextGroup,
              {
                label: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { modifiers: "bold", color: "secondary", children: [
                  "Volitused ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info_button_default, { "aria-label": "Rohkem infot" })
                ] }),
                value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Arstile ja esindajale n\xE4htav" })
              }
            )
          },
          {
            title: "With status badge",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              text_group_exports.TextGroup,
              {
                type: "horizontal",
                labelWidth: "150px",
                label: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex align-items-center gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "bold", color: "secondary", children: "Olek" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", children: "Aktiivne" })
                ] }),
                value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Olekuga seotud tekst" })
              }
            )
          }
        ]
      }
    )
  };
  var WithList = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ExampleRows,
      {
        rows: [
          {
            title: "Vertical list (default)",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              text_group_exports.TextGroup.List,
              {
                items: [
                  { label: "Patsient", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Mari Maasikas" }) },
                  { label: "Aadress", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Tulbi tn 4, Tallinn, 23562, Eesti" }) },
                  { label: "Vaktsiin", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "COVID-19 mRNA" }) },
                  { label: "J\xE4rgmine vaktsineerimine", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Immuniseerimine l\xF5petatud" }) }
                ]
              }
            )
          },
          {
            title: "Horizontal list with shared label column",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              text_group_exports.TextGroup.List,
              {
                type: "horizontal",
                labelWidth: "220px",
                items: [
                  {
                    label: "Patsient",
                    value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "person", size: 18, color: "secondary" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Mari Maasikas" })
                    ] })
                  },
                  {
                    label: "Aadress",
                    value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "location_on", size: 16, color: "secondary" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Tulbi tn 4, Tallinn, 23562, Eesti" })
                    ] })
                  },
                  { label: "Tervishoiuteenuse osutaja", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "SA P\xF5hja-Eesti Regionaalhaigla" }) },
                  { label: "Tervishoiut\xF6\xF6taja", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Mart Mets" }) },
                  { label: "Dokumendi loomise aeg", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "16.08.2023 14:51:48" }) }
                ]
              }
            )
          },
          {
            title: "Per-row labelAlign / labelWidth overrides",
            content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              text_group_exports.TextGroup.List,
              {
                type: "horizontal",
                labelWidth: "160px",
                items: [
                  { label: "Toode", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "USB-C laadimiskaabel" }) },
                  { label: "Kogus", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "2" }) },
                  { label: "\xDChiku hind", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "12.50 \u20AC" }), labelAlign: "right", labelWidth: "220px" },
                  {
                    label: "Kokku",
                    value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "25.00 \u20AC" }),
                    labelAlign: "right",
                    labelWidth: "220px"
                  }
                ]
              }
            )
          }
        ]
      }
    )
  };

  // .design-sync/artifact/compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
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

  // TextGroup.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(text_group_stories_exports, "Default", G, B);
  var PositionType2 = compose(text_group_stories_exports, "PositionType", G, B);
  var TextWeight2 = compose(text_group_stories_exports, "TextWeight", G, B);
  var Types2 = compose(text_group_stories_exports, "Types", G, B);
  var HasSlot2 = compose(text_group_stories_exports, "HasSlot", G, B);
  var HorizontalLabelLength2 = compose(text_group_stories_exports, "HorizontalLabelLength", G, B);
  var LongTextValues2 = compose(text_group_stories_exports, "LongTextValues", G, B);
  var Responsive2 = compose(text_group_stories_exports, "Responsive", G, B);
  var CustomLabel2 = compose(text_group_stories_exports, "CustomLabel", G, B);
  var WithList2 = compose(text_group_stories_exports, "WithList", G, B);
  return __toCommonJS(TextGroup_preview_exports);
})();

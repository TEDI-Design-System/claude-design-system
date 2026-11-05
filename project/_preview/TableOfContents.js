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

  // TableOfContents.preview.tsx
  var TableOfContents_preview_exports = {};
  __export(TableOfContents_preview_exports, {
    Bordered: () => Bordered2,
    Collapsible: () => Collapsible2,
    CollapsibleHideOnScroll: () => CollapsibleHideOnScroll2,
    Default: () => Default2,
    Headless: () => Headless2,
    ItemStates: () => ItemStates2,
    Numbered: () => Numbered2,
    StickyInLayout: () => StickyInLayout3,
    Transparent: () => Transparent2,
    WithIcon: () => WithIcon2,
    WithSeparator: () => WithSeparator2,
    WithSlot: () => WithSlot2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/navigation/table-of-contents/table-of-contents.stories.tsx
  var table_of_contents_stories_exports = {};
  __export(table_of_contents_stories_exports, {
    Bordered: () => Bordered,
    Collapsible: () => Collapsible,
    CollapsibleHideOnScroll: () => CollapsibleHideOnScroll,
    Default: () => Default,
    Headless: () => Headless,
    ItemStates: () => ItemStates,
    Numbered: () => Numbered,
    StickyInLayout: () => StickyInLayout,
    Transparent: () => Transparent,
    WithIcon: () => WithIcon,
    WithSeparator: () => WithSeparator,
    WithSlot: () => WithSlot,
    default: () => table_of_contents_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

  // src/tedi/helpers/index.ts
  var helpers_exports = {};
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-is-mounted.ts
  var use_is_mounted_exports = {};
  __export(use_is_mounted_exports, {
    default: () => use_is_mounted_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_is_mounted_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var use_is_mounted_default = ns["useIsMounted"] ?? ns;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_is_mounted_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-safe-id.ts
  var use_safe_id_exports = {};
  __export(use_safe_id_exports, {
    default: () => use_safe_id_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_safe_id_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var use_safe_id_default = ns2["useSafeId"] ?? ns2;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_safe_id_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-breakpoint.ts
  var use_breakpoint_exports = {};
  __export(use_breakpoint_exports, {
    default: () => use_breakpoint_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_breakpoint_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var use_breakpoint_default = ns3["useBreakpoint"] ?? ns3;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_breakpoint_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-breakpoint-props.ts
  var use_breakpoint_props_exports = {};
  __export(use_breakpoint_props_exports, {
    default: () => use_breakpoint_props_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_breakpoint_props_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var use_breakpoint_props_default = ns4["useBreakpointProps"] ?? ns4;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_breakpoint_props_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-element-size.ts
  var use_element_size_exports = {};
  __export(use_element_size_exports, {
    default: () => use_element_size_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_element_size_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var use_element_size_default = ns5["useElementSize"] ?? ns5;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_element_size_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-scroll.ts
  var use_scroll_exports = {};
  __export(use_scroll_exports, {
    default: () => use_scroll_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_scroll_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var use_scroll_default = ns6["useScroll"] ?? ns6;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_scroll_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-is-touch-device.ts
  var use_is_touch_device_exports = {};
  __export(use_is_touch_device_exports, {
    default: () => use_is_touch_device_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_is_touch_device_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var use_is_touch_device_default = ns7["useIsTouchDevice"] ?? ns7;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_is_touch_device_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-file-upload.ts
  var use_file_upload_exports = {};
  __export(use_file_upload_exports, {
    default: () => use_file_upload_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_file_upload_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var use_file_upload_default = ns8["useFileUpload"] ?? ns8;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_file_upload_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-what-input.ts
  var use_what_input_exports = {};
  __export(use_what_input_exports, {
    default: () => use_what_input_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_what_input_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var use_what_input_default = ns9["useWhatInput"] ?? ns9;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_what_input_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-scroll-fade.ts
  var use_scroll_fade_exports = {};
  __export(use_scroll_fade_exports, {
    default: () => use_scroll_fade_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_scroll_fade_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var use_scroll_fade_default = ns10["useScrollFade"] ?? ns10;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_scroll_fade_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/polymorphic/types.ts
  var types_exports = {};
  __export(types_exports, {
    default: () => types_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(types_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var types_default = ns11["types.ts"] ?? ns11;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, types_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/heading/heading.tsx
  var heading_exports = {};
  __export(heading_exports, {
    default: () => heading_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(heading_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var heading_default = ns12["Heading"] ?? ns12;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns13 = window.Tedi;
  var text_default = ns13["Text"] ?? ns13;

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
  var ns14 = window.Tedi;
  var row_default = ns14["Row"] ?? ns14;

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
  var ns15 = window.Tedi;
  var col_default = ns15["Col"] ?? ns15;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, col_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/hide-at/hide-at.tsx
  var hide_at_exports = {};
  __export(hide_at_exports, {
    default: () => hide_at_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(hide_at_exports, __toESM(require_tedi_namespace()));
  var ns16 = window.Tedi;
  var hide_at_default = ns16["HideAt"] ?? ns16;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/show-at/show-at.tsx
  var show_at_exports = {};
  __export(show_at_exports, {
    default: () => show_at_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(show_at_exports, __toESM(require_tedi_namespace()));
  var ns17 = window.Tedi;
  var show_at_default = ns17["ShowAt"] ?? ns17;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns18 = window.Tedi;
  var vertical_spacing_default = ns18["VerticalSpacing"] ?? ns18;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/tags/tag/tag.tsx
  var tag_exports = {};
  __export(tag_exports, {
    default: () => tag_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(tag_exports, __toESM(require_tedi_namespace()));
  var ns19 = window.Tedi;
  var tag_default = ns19["Tag"] ?? ns19;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/navigation/link/link.tsx
  var link_exports = {};
  __export(link_exports, {
    default: () => link_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(link_exports, __toESM(require_tedi_namespace()));
  var ns20 = window.Tedi;
  var link_default = ns20["Link"] ?? ns20;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/navigation/table-of-contents/table-of-contents.tsx
  var table_of_contents_exports = {};
  __export(table_of_contents_exports, {
    default: () => table_of_contents_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(table_of_contents_exports, __toESM(require_tedi_namespace()));
  var ns21 = window.Tedi;
  var table_of_contents_default = ns21["TableOfContents"] ?? ns21;

  // src/tedi/components/navigation/table-of-contents/table-of-contents.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: table_of_contents_exports.TableOfContents,
    subcomponents: {
      "TableOfContents.Item": table_of_contents_exports.TableOfContents.Item,
      "TableOfContents.Collapsible": table_of_contents_exports.TableOfContents.Collapsible
    },
    title: "TEDI-Ready/Components/Navigation/TableOfContents",
    parameters: {
      layout: "padded",
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: { exclude: ["children", "sm", "md", "lg", "xl", "xxl", "defaultServerBreakpoint"] },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.60.78?node-id=8469-72329&m=dev"
      }
    },
    decorators: [
      (Story, context) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: context.parameters.fullWidth ? void 0 : 320 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}) })
    ]
  };
  var table_of_contents_stories_default = meta;
  var sections = ["Sissejuhatus", "Taust", "Meetodid", "Tulemused", "Arutelu", "Kokkuv\xF5te"];
  var subSections = {
    2: ["Andmete kogumine", "Anal\xFC\xFCs"],
    3: ["Joonised", "Tabelid"]
  };
  var sectionItems = (lastIcon, separatorBeforeLast = false) => sections.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    table_of_contents_exports.TableOfContents.Item,
    {
      id: `section-${index + 1}`,
      separator: separatorBeforeLast && index === sections.length - 2,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          link_exports.Link,
          {
            href: `#section-${index + 1}`,
            underline: false,
            iconLeft: index === sections.length - 1 ? lastIcon : void 0,
            iconStandalone: index === sections.length - 1 && !!lastIcon,
            children: label
          }
        ),
        subSections[index]?.map((childLabel, childIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: `section-${index + 1}-${childIndex + 1}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: `#section-${index + 1}-${childIndex + 1}`, underline: false, children: childLabel }) }, childLabel))
      ]
    },
    label
  ));
  var Default = {
    args: {
      heading: "Sisukord",
      activeId: "section-3",
      variant: "default",
      headingLevel: "h3",
      sticky: false,
      numbered: false,
      bordered: false,
      defaultOpen: true
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents, { ...args, children: sectionItems() })
  };
  var ItemStates = {
    parameters: { fullWidth: true },
    render: () => {
      const rows = [
        { id: "default", label: "Default", linkProps: {} },
        // "Hover" forces the hover state via `isHovered`; "Selected" is the active item (via activeId).
        { id: "hover", label: "Hover", linkProps: { isHovered: true } },
        { id: "selected", label: "Selected", linkProps: {} }
      ];
      const stateItems = (options, withFiller = false) => {
        const iconProps = options?.icon ? { iconLeft: "mail", iconStandalone: true } : {};
        const items = rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: row.id, separator: options?.separator, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: `#${row.id}`, underline: false, ...iconProps, ...row.linkProps, children: row.label }) }, row.id));
        if (withFiller) {
          items.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "filler" }, "filler"));
        }
        return items;
      };
      const columns = [
        { header: "Default" },
        { header: "With number", numbered: true },
        { header: "With icon", options: { icon: true } },
        { header: "With separator", options: { separator: true } },
        { header: "With border", bordered: true }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "flex-start" }, children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: "1 1 12rem", minWidth: "11rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: column.header }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          table_of_contents_exports.TableOfContents,
          {
            heading: null,
            ariaLabel: `${column.header} item states`,
            sticky: false,
            numbered: column.numbered,
            bordered: column.bordered,
            activeId: "selected",
            children: stateItems(column.options, column.bordered)
          }
        )
      ] }) }, column.header)) });
    }
  };
  var Transparent = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents, { heading: "Sisukord", variant: "transparent", sticky: false, activeId: "section-3", children: sectionItems() })
  };
  var WithSlot = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents, { heading: "Sisukord", sticky: false, activeId: "section-3", children: sections.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      table_of_contents_exports.TableOfContents.Item,
      {
        id: `section-${index + 1}`,
        slot: index === sections.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { color: "primary", children: "43 tulemust" }) : void 0,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: `#section-${index + 1}`, underline: false, children: label }),
          index === 2 && [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "section-3-1", slot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { color: "primary", children: "12" }), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#section-3-1", underline: false, children: "Andmete kogumine" }) }, "collection"),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "section-3-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#section-3-2", underline: false, children: "Anal\xFC\xFCs" }) }, "analysis")
          ]
        ]
      },
      label
    )) })
  };
  var Numbered = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(table_of_contents_exports.TableOfContents, { heading: "Sisukord", sticky: false, numbered: true, activeId: "methods", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "intro", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#intro", underline: false, children: "Sissejuhatus" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(table_of_contents_exports.TableOfContents.Item, { id: "methods", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#methods", underline: false, children: "Meetodid" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "methods-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#methods-1", underline: false, children: "Andmete kogumine" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "methods-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#methods-2", underline: false, children: "Anal\xFC\xFCs" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "results", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#results", underline: false, children: "Tulemused" }) })
    ] })
  };
  var WithIcon = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(table_of_contents_exports.TableOfContents, { heading: "Sisukord", sticky: false, activeId: "section-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "section-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#section-1", underline: false, children: "Sissejuhatus" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "section-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#section-2", underline: false, children: "Taust" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(table_of_contents_exports.TableOfContents.Item, { id: "section-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#section-3", underline: false, children: "Meetodid" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "section-3-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#section-3-1", underline: false, children: "Andmete kogumine" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "section-3-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#section-3-2", underline: false, children: "Anal\xFC\xFCs" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "section-6", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#section-6", underline: false, iconLeft: "description", iconStandalone: true, children: "Kokkuv\xF5te" }) })
    ] })
  };
  var Headless = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents, { heading: null, sticky: false, numbered: true, activeId: "section-3", children: sectionItems() })
  };
  var WithSeparator = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents, { heading: "Sisukord", sticky: false, activeId: "section-3", children: sectionItems("description", true) })
  };
  var Bordered = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents, { heading: "Sisukord", sticky: false, activeId: "section-3", bordered: true, children: sectionItems("description") })
  };
  var LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.";
  var layoutTree = [
    { id: "sec-1", label: "Sissejuhatus" },
    {
      id: "sec-2",
      label: "Taust",
      children: [
        { id: "sec-2-1", label: "Varasem uurimus" },
        { id: "sec-2-2", label: "Probleemip\xFCstitus" }
      ]
    },
    {
      id: "sec-3",
      label: "Meetodid",
      children: [
        { id: "sec-3-1", label: "Andmete kogumine" },
        { id: "sec-3-2", label: "Anal\xFC\xFCs" }
      ]
    },
    {
      id: "sec-4",
      label: "Tulemused",
      children: [
        { id: "sec-4-1", label: "Joonised" },
        { id: "sec-4-2", label: "Tabelid" }
      ]
    },
    { id: "sec-5", label: "Arutelu" },
    {
      id: "sec-6",
      label: "J\xE4reldused",
      children: [
        { id: "sec-6-1", label: "Piirangud" },
        { id: "sec-6-2", label: "Edasine t\xF6\xF6" }
      ]
    },
    { id: "sec-7", label: "Kokkuv\xF5te" },
    { id: "sec-8", label: "Viited" }
  ];
  var layoutFlat = layoutTree.flatMap((node) => [
    { id: node.id, label: node.label, depth: 0 },
    ...(node.children ?? []).map((child) => ({ id: child.id, label: child.label, depth: 1 }))
  ]);
  var layoutIds = layoutFlat.map((node) => node.id);
  var StickyInLayout = {
    parameters: { fullWidth: true },
    render: function StickyInLayout2() {
      const scrollRef = (0, import_react.useRef)(null);
      const [activeId, setActiveId] = (0, import_react.useState)("sec-1");
      const isMobile = (0, helpers_exports.isBreakpointBelow)((0, helpers_exports.useBreakpoint)(), "lg");
      (0, import_react.useEffect)(() => {
        const container = scrollRef.current;
        if (typeof IntersectionObserver === "undefined") return void 0;
        if (!isMobile && !container) return void 0;
        const observerRoot = isMobile ? null : container;
        const ids = layoutIds;
        const visibility = /* @__PURE__ */ new Map();
        const atBottom = () => isMobile ? window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2 : !!container && container.scrollTop + container.clientHeight >= container.scrollHeight - 2;
        const pickActive = () => {
          if (atBottom()) {
            setActiveId(ids[ids.length - 1]);
            return;
          }
          const active = ids.find((id) => visibility.get(id));
          if (active) setActiveId(active);
        };
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => visibility.set(entry.target.id, entry.isIntersecting));
            pickActive();
          },
          { root: observerRoot, rootMargin: "0px 0px -55% 0px" }
        );
        ids.forEach((id) => {
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        });
        const scroller = isMobile ? window : container;
        scroller.addEventListener("scroll", pickActive, { passive: true });
        return () => {
          observer.disconnect();
          scroller.removeEventListener("scroll", pickActive);
        };
      }, [isMobile]);
      const selectSection = (id) => (event) => {
        event.preventDefault();
        const target = document.getElementById(id);
        if (!target) return;
        if (isMobile) {
          target.scrollIntoView({ block: "start" });
        } else {
          const root = scrollRef.current;
          if (!root) return;
          const paddingTop = parseFloat(getComputedStyle(root).paddingTop) || 0;
          root.scrollTo({
            top: root.scrollTop + target.getBoundingClientRect().top - root.getBoundingClientRect().top - paddingTop
          });
        }
        setActiveId(id);
      };
      const renderItems = (nodes) => nodes.map((node) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(table_of_contents_exports.TableOfContents.Item, { id: node.id, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: `#${node.id}`, underline: false, onClick: selectSection(node.id), children: node.label }),
        node.children && renderItems(node.children)
      ] }, node.id));
      const items = renderItems(layoutTree);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { alignItems: "start", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, md: 8, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              ref: scrollRef,
              style: isMobile ? { paddingBottom: "5rem" } : { maxHeight: "24rem", overflowY: "auto" },
              ...isMobile ? {} : { tabIndex: 0, role: "region", "aria-label": "Artikli sisu" },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 1.5, children: layoutFlat.map(({ id, label, depth }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { id, tabIndex: -1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: depth === 0 ? "h2" : "h3", modifiers: depth === 0 ? "h3" : "h4", children: label }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: LOREM })
              ] }) }, id)) })
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { lg: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxHeight: "24rem", overflowY: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents, { heading: "Sisukord", sticky: false, numbered: true, activeId, scrollActiveIntoView: true, children: items }) }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { lg: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Collapsible, { heading: "Sisukord", numbered: true, activeId, children: items }) })
      ] });
    }
  };
  var Collapsible = {
    parameters: { layout: "fullscreen", fullWidth: true },
    render: () => {
      const items = [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "intro", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#intro", underline: false, children: "Sissejuhatus" }) }, "intro"),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(table_of_contents_exports.TableOfContents.Item, { id: "methods", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#methods", underline: false, children: "Meetodid" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "methods-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#methods-1", underline: false, children: "Andmete kogumine" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "methods-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#methods-2", underline: false, children: "Anal\xFC\xFCs" }) })
        ] }, "methods"),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(table_of_contents_exports.TableOfContents.Item, { id: "results", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#results", underline: false, children: "Tulemused" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "results-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#results-1", underline: false, children: "Joonised" }) })
        ] }, "results"),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "discussion", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#discussion", underline: false, children: "Arutelu" }) }, "discussion"),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "conclusion", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#conclusion", underline: false, iconStandalone: true, children: "Kokkuv\xF5te" }) }, "conclusion")
      ];
      const intro = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h2", modifiers: "h1", children: "Tervisedeklaratsioon" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "secondary", children: "Tervisedeklaratsioon koosneb 22 kohustuslikust k\xFCsimusest. Alusta v\xF5i j\xE4tka selle koostamisega allpool." })
      ] });
      const placeholder = (extraStyle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            background: "var(--general-surface-primary)",
            border: "1px solid var(--general-border-primary)",
            borderRadius: "var(--card-radius-rounded)",
            ...extraStyle
          }
        }
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { lg: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { background: "var(--general-surface-primary)", padding: "2rem" }, children: [
          intro,
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) 340px",
                gap: "1.5rem",
                alignItems: "start",
                marginTop: "1.5rem"
              },
              children: [
                placeholder({ minHeight: "35rem" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents, { heading: "Sisukord", sticky: false, activeId: "methods", children: items })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { lg: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              gap: "3px",
              background: "var(--general-surface-tertiary)"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  style: {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    padding: "var(--layout-page-spacing-top) var(--layout-page-spacing-x) 0 var(--layout-page-spacing-x)"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", underline: false, iconLeft: "arrow_back", children: "Terviset\xF5endid ja -deklaratsioonid" }),
                      intro
                    ] }),
                    placeholder({ flex: "1 1 auto", marginTop: "1rem" })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Collapsible, { heading: "Sisukord", activeId: "methods", sticky: false, children: items })
            ]
          }
        ) })
      ] });
    }
  };
  var CollapsibleHideOnScroll = {
    name: "Collapsible: hide on scroll",
    parameters: { layout: "fullscreen", fullWidth: true },
    render: () => {
      const items = [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "intro", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#intro", underline: false, children: "Sissejuhatus" }) }, "intro"),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(table_of_contents_exports.TableOfContents.Item, { id: "methods", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#methods", underline: false, children: "Meetodid" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "methods-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#methods-1", underline: false, children: "Andmete kogumine" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "methods-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#methods-2", underline: false, children: "Anal\xFC\xFCs" }) })
        ] }, "methods"),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(table_of_contents_exports.TableOfContents.Item, { id: "results", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#results", underline: false, children: "Tulemused" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "results-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#results-1", underline: false, children: "Joonised" }) })
        ] }, "results"),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "discussion", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#discussion", underline: false, children: "Arutelu" }) }, "discussion"),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Item, { id: "conclusion", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#conclusion", underline: false, iconStandalone: true, children: "Kokkuv\xF5te" }) }, "conclusion")
      ];
      const intro = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h2", modifiers: "h1", children: "Tervisedeklaratsioon" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "secondary", children: "Tervisedeklaratsioon koosneb 22 kohustuslikust k\xFCsimusest. Alusta v\xF5i j\xE4tka selle koostamisega allpool." })
      ] });
      const placeholder = (extraStyle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            background: "var(--general-surface-primary)",
            border: "1px solid var(--general-border-primary)",
            borderRadius: "var(--card-radius-rounded)",
            ...extraStyle
          }
        }
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { lg: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { background: "var(--general-surface-primary)", padding: "2rem" }, children: [
          intro,
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) 340px",
                gap: "1.5rem",
                alignItems: "start",
                marginTop: "1.5rem"
              },
              children: [
                placeholder({ minHeight: "35rem" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents, { heading: "Sisukord", sticky: false, activeId: "methods", children: items })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { lg: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              gap: "3px",
              background: "var(--general-surface-tertiary)"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    padding: "var(--layout-page-spacing-top) var(--layout-page-spacing-x) 0 var(--layout-page-spacing-x)"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", underline: false, iconLeft: "arrow_back", children: "Terviset\xF5endid ja -deklaratsioonid" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "secondary", children: "Scroll down \u2014 the bar hides. Scroll up \u2014 it reappears." }),
                      intro
                    ] }),
                    placeholder({ minHeight: "150vh", marginTop: "1rem" })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_of_contents_exports.TableOfContents.Collapsible, { heading: "Sisukord", activeId: "methods", hideOnScroll: true, children: items })
            ]
          }
        ) })
      ] });
    }
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

  // TableOfContents.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(table_of_contents_stories_exports, "Default", G, B);
  var ItemStates2 = compose(table_of_contents_stories_exports, "ItemStates", G, B);
  var Transparent2 = compose(table_of_contents_stories_exports, "Transparent", G, B);
  var WithSlot2 = compose(table_of_contents_stories_exports, "WithSlot", G, B);
  var Numbered2 = compose(table_of_contents_stories_exports, "Numbered", G, B);
  var WithIcon2 = compose(table_of_contents_stories_exports, "WithIcon", G, B);
  var Headless2 = compose(table_of_contents_stories_exports, "Headless", G, B);
  var WithSeparator2 = compose(table_of_contents_stories_exports, "WithSeparator", G, B);
  var Bordered2 = compose(table_of_contents_stories_exports, "Bordered", G, B);
  var StickyInLayout3 = compose(table_of_contents_stories_exports, "StickyInLayout", G, B);
  var Collapsible2 = compose(table_of_contents_stories_exports, "Collapsible", G, B);
  var CollapsibleHideOnScroll2 = compose(table_of_contents_stories_exports, "CollapsibleHideOnScroll", G, B);
  return __toCommonJS(TableOfContents_preview_exports);
})();

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

  // Pagination.preview.tsx
  var Pagination_preview_exports = {};
  __export(Pagination_preview_exports, {
    AllPropertiesShown: () => AllPropertiesShown3,
    ArrowsPrimaryVariant: () => ArrowsPrimaryVariant3,
    ArrowsWithLabels: () => ArrowsWithLabels2,
    Borders: () => Borders2,
    ControlledPage: () => ControlledPage3,
    CustomArrowIcons: () => CustomArrowIcons2,
    CustomLabels: () => CustomLabels2,
    Default: () => Default2,
    DisabledBoundaryArrows: () => DisabledBoundaryArrows3,
    FewPages: () => FewPages2,
    First: () => First2,
    HugePageCount: () => HugePageCount2,
    Last: () => Last2,
    ManyPagesEllipsis: () => ManyPagesEllipsis2,
    MobilePicker: () => MobilePicker2,
    ResponsiveVisibility: () => ResponsiveVisibility2,
    ShowAllPageSize: () => ShowAllPageSize3,
    TopBottomSplit: () => TopBottomSplit2,
    Transparent: () => Transparent2,
    VisualTest: () => VisualTest2,
    WiderSiblings: () => WiderSiblings2,
    WithoutDropdown: () => WithoutDropdown2,
    WithoutResultsNumber: () => WithoutResultsNumber3
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/navigation/pagination/pagination.stories.tsx
  var pagination_stories_exports = {};
  __export(pagination_stories_exports, {
    AllPropertiesShown: () => AllPropertiesShown,
    ArrowsPrimaryVariant: () => ArrowsPrimaryVariant,
    ArrowsWithLabels: () => ArrowsWithLabels,
    Borders: () => Borders,
    ControlledPage: () => ControlledPage,
    CustomArrowIcons: () => CustomArrowIcons,
    CustomLabels: () => CustomLabels,
    Default: () => Default,
    DisabledBoundaryArrows: () => DisabledBoundaryArrows,
    FewPages: () => FewPages,
    First: () => First,
    HugePageCount: () => HugePageCount,
    Last: () => Last,
    ManyPagesEllipsis: () => ManyPagesEllipsis,
    MobilePicker: () => MobilePicker,
    ResponsiveVisibility: () => ResponsiveVisibility,
    ShowAllPageSize: () => ShowAllPageSize,
    TopBottomSplit: () => TopBottomSplit,
    Transparent: () => Transparent,
    VisualTest: () => VisualTest,
    WiderSiblings: () => WiderSiblings,
    WithoutDropdown: () => WithoutDropdown,
    WithoutResultsNumber: () => WithoutResultsNumber,
    default: () => pagination_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react2 = __toESM(require_react(), 1);

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

  // tedi:src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var vertical_spacing_default = ns3["VerticalSpacing"] ?? ns3;

  // tedi:src/tedi/components/navigation/pagination/pagination.tsx
  var pagination_exports = {};
  __export(pagination_exports, {
    default: () => pagination_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(pagination_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var pagination_default = ns4["Pagination"] ?? ns4;

  // src/tedi/components/navigation/pagination/pagination.stories.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: pagination_exports.Pagination,
    title: "TEDI-Ready/Components/Navigation/Pagination",
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.45.70?node-id=8478-72385&m=dev"
      },
      chromatic: { disableSnapshot: true }
    }
  };
  var pagination_stories_default = meta;
  var Default = {
    args: {
      pageCount: 10,
      defaultPage: 3
    }
  };
  var First = {
    args: {
      pageCount: 10,
      defaultPage: 1
    }
  };
  var Last = {
    args: {
      pageCount: 10,
      defaultPage: 10
    }
  };
  var AllPropertiesShown = {
    render: function AllPropertiesShown2() {
      const [page, setPage] = (0, import_react2.useState)(3);
      const [pageSize, setPageSize] = (0, import_react2.useState)(10);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        pagination_exports.Pagination,
        {
          pageCount: Math.ceil(97 / pageSize),
          page,
          onPageChange: setPage,
          totalItems: 97,
          pageSize,
          pageSizeOptions: [10, 25, 50, 100],
          onPageSizeChange: (next) => {
            setPageSize(next);
            setPage(1);
          }
        }
      );
    }
  };
  var WithoutResultsNumber = {
    render: function WithoutResultsNumber2() {
      const [page, setPage] = (0, import_react2.useState)(3);
      const [pageSize, setPageSize] = (0, import_react2.useState)(10);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        pagination_exports.Pagination,
        {
          pageCount: Math.ceil(97 / pageSize),
          page,
          onPageChange: setPage,
          pageSize,
          pageSizeOptions: [10, 25, 50, 100],
          onPageSizeChange: (next) => {
            setPageSize(next);
            setPage(1);
          }
        }
      );
    }
  };
  var WithoutDropdown = {
    args: {
      pageCount: 10,
      defaultPage: 3,
      totalItems: 97
    }
  };
  var ControlledPage = {
    parameters: { visualTest: false },
    render: function ControlledPage2() {
      const [page, setPage] = (0, import_react2.useState)(3);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(pagination_exports.Pagination, { pageCount: 10, page, onPageChange: setPage });
    }
  };
  var FewPages = {
    args: {
      pageCount: 4,
      defaultPage: 2
    }
  };
  var ManyPagesEllipsis = {
    args: {
      pageCount: 50,
      defaultPage: 12
    }
  };
  var HugePageCount = {
    args: {
      pageCount: 5e3,
      defaultPage: 2500
    }
  };
  var WiderSiblings = {
    args: {
      pageCount: 40,
      defaultPage: 20,
      siblingCount: 2,
      boundaryCount: 2
    }
  };
  var Transparent = {
    args: {
      pageCount: 10,
      defaultPage: 3,
      totalItems: 97,
      pageSize: 10,
      pageSizeOptions: [10, 25, 50, 100],
      background: "transparent"
    },
    decorators: [
      (StoryEl) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { background: "var(--general-surface-secondary)", padding: "1rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StoryEl, {}) })
    ]
  };
  var TopBottomSplitTemplate = ({ ariaLabels }) => {
    const [page, setPage] = (0, import_react2.useState)(3);
    const [pageSize, setPageSize] = (0, import_react2.useState)(10);
    const sharedProps = {
      pageCount: Math.ceil(97 / pageSize),
      page,
      onPageChange: setPage,
      totalItems: 97,
      pageSize,
      pageSizeOptions: [10, 25, 50, 100],
      onPageSizeChange: (next) => {
        setPageSize(next);
        setPage(1);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        pagination_exports.Pagination,
        {
          ...sharedProps,
          hidePager: true,
          borders: "bottom",
          labels: ariaLabels ? { ariaLabel: ariaLabels.top } : void 0
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { padding: "1.5rem 0", color: "var(--general-text-tertiary)", textAlign: "center" }, children: "\u2014 table content goes here \u2014" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        pagination_exports.Pagination,
        {
          ...sharedProps,
          hideResults: true,
          hidePageSize: true,
          borders: "top",
          labels: ariaLabels ? { ariaLabel: ariaLabels.bottom } : void 0
        }
      )
    ] });
  };
  var TopBottomSplit = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TopBottomSplitTemplate, {})
  };
  var DisabledBoundaryArrows = {
    render: function DisabledBoundaryArrows2() {
      const [page, setPage] = (0, import_react2.useState)(1);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(pagination_exports.Pagination, { pageCount: 5, page, onPageChange: setPage, showPrevNextButtons: true });
    }
  };
  var ArrowsWithLabels = {
    args: {
      pageCount: 8,
      defaultPage: 3,
      showEdgeNavLabels: true
    }
  };
  var CustomArrowIcons = {
    args: {
      pageCount: 10,
      defaultPage: 4,
      previousIcon: "chevron_left",
      nextIcon: "chevron_right"
    }
  };
  var ArrowsPrimaryVariant = {
    parameters: {
      status: {
        type: "mobileViewDifference"
      }
    },
    render: function ArrowsPrimaryVariant2() {
      const [page, setPage] = (0, import_react2.useState)(3);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        pagination_exports.Pagination,
        {
          pageCount: 10,
          page,
          onPageChange: setPage,
          arrowVariant: "default",
          showPrevNextButtons: true,
          md: { arrowVariant: "primary" }
        }
      );
    }
  };
  var Borders = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "2rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: { margin: "0 0 0.5rem", color: "var(--general-text-secondary)" }, children: 'borders="top" (default)' }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          pagination_exports.Pagination,
          {
            pageCount: 10,
            defaultPage: 3,
            totalItems: 97,
            pageSize: 10,
            pageSizeOptions: [10, 25, 50],
            labels: { ariaLabel: "Lehed: \xFClemine eraldusjoon" }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: { margin: "0 0 0.5rem", color: "var(--general-text-secondary)" }, children: 'borders="bottom"' }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          pagination_exports.Pagination,
          {
            pageCount: 10,
            defaultPage: 3,
            totalItems: 97,
            pageSize: 10,
            pageSizeOptions: [10, 25, 50],
            borders: "bottom",
            labels: { ariaLabel: "Lehed: alumine eraldusjoon" }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: { margin: "0 0 0.5rem", color: "var(--general-text-secondary)" }, children: 'borders="both"' }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          pagination_exports.Pagination,
          {
            pageCount: 10,
            defaultPage: 3,
            totalItems: 97,
            pageSize: 10,
            pageSizeOptions: [10, 25, 50],
            borders: "both",
            labels: { ariaLabel: "Lehed: m\xF5lemad eraldusjooned" }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: { margin: "0 0 0.5rem", color: "var(--general-text-secondary)" }, children: 'borders="none"' }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          pagination_exports.Pagination,
          {
            pageCount: 10,
            defaultPage: 3,
            totalItems: 97,
            pageSize: 10,
            pageSizeOptions: [10, 25, 50],
            borders: "none",
            labels: { ariaLabel: "Lehed: eraldusjooneta" }
          }
        )
      ] })
    ] })
  };
  var ResponsiveVisibility = {
    args: {
      pageCount: 10,
      defaultPage: 3,
      totalItems: 97,
      pageSize: 10,
      pageSizeOptions: [10, 25, 50, 100],
      hidePageSize: "md"
    }
  };
  var MobilePicker = {
    args: {
      pageCount: 24,
      defaultPage: 7,
      totalItems: 240,
      pageSize: 10,
      pageSizeOptions: [10, 25, 50, 100]
    }
  };
  var CustomLabels = {
    args: {
      pageCount: 24,
      defaultPage: 3,
      totalItems: 1234,
      pageSize: 50,
      pageSizeOptions: [25, 50, 100],
      labels: {
        results: (count) => count > 999 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: "1000+" }),
          " tulemust"
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: count }),
          " tulemust"
        ] }),
        previous: "Eelmine",
        next: "J\xE4rgmine",
        pageSize: "Tulemusi lehel"
      }
    }
  };
  var ShowAllPageSize = {
    render: function ShowAllPageSize2() {
      const totalItems = 97;
      const [page, setPage] = (0, import_react2.useState)(1);
      const [pageSize, setPageSize] = (0, import_react2.useState)(10);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        pagination_exports.Pagination,
        {
          pageCount: Math.max(1, Math.ceil(totalItems / pageSize)),
          page,
          onPageChange: setPage,
          totalItems,
          pageSize,
          pageSizeOptions: [10, 25, 50, { value: totalItems, label: "Show all" }],
          onPageSizeChange: (next) => {
            setPageSize(next);
            setPage(1);
          }
        }
      );
    }
  };
  var VisualTest = {
    tags: ["!dev", "!autodocs"],
    parameters: { chromatic: { disableSnapshot: false, viewports: VISUAL_TEST_VIEWPORTS } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Default" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: Default, component: pagination_exports.Pagination, props: { labels: { ariaLabel: "Default" } } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "First" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: First, component: pagination_exports.Pagination, props: { labels: { ariaLabel: "First" } } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Last" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: Last, component: pagination_exports.Pagination, props: { labels: { ariaLabel: "Last" } } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "All properties shown" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: AllPropertiesShown, props: { labels: { ariaLabel: "All properties shown" } } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Without results number" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: WithoutResultsNumber, props: { labels: { ariaLabel: "Without results number" } } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Without dropdown" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: WithoutDropdown,
            component: pagination_exports.Pagination,
            props: { labels: { ariaLabel: "Without dropdown" } }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Few pages" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: FewPages, component: pagination_exports.Pagination, props: { labels: { ariaLabel: "Few pages" } } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Many pages ellipsis" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: ManyPagesEllipsis,
            component: pagination_exports.Pagination,
            props: { labels: { ariaLabel: "Many pages ellipsis" } }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Huge page count" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: HugePageCount,
            component: pagination_exports.Pagination,
            props: { labels: { ariaLabel: "Huge page count" } }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Wider siblings" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: WiderSiblings,
            component: pagination_exports.Pagination,
            props: { labels: { ariaLabel: "Wider siblings" } }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Transparent" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { borderless: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { background: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: Transparent,
            component: pagination_exports.Pagination,
            props: { labels: { ariaLabel: "Transparent" } }
          }
        ) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Top bottom split" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TopBottomSplitTemplate, { ariaLabels: { top: "Top bottom split, top", bottom: "Top bottom split, bottom" } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Disabled boundary arrows" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: DisabledBoundaryArrows, props: { labels: { ariaLabel: "Disabled boundary arrows" } } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Arrows with labels" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: ArrowsWithLabels,
            component: pagination_exports.Pagination,
            props: { labels: { ariaLabel: "Arrows with labels" } }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Custom arrow icons" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: CustomArrowIcons,
            component: pagination_exports.Pagination,
            props: { labels: { ariaLabel: "Custom arrow icons" } }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Arrows primary variant" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: ArrowsPrimaryVariant, props: { labels: { ariaLabel: "Arrows primary variant" } } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Borders" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: Borders })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Custom labels" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: CustomLabels,
            component: pagination_exports.Pagination,
            props: { labels: { ...CustomLabels.args?.labels, ariaLabel: "Custom labels" } }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Show all page size" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: ShowAllPageSize, props: { labels: { ariaLabel: "Show all page size" } } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Responsive visibility" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: ResponsiveVisibility,
            component: pagination_exports.Pagination,
            props: { labels: { ariaLabel: "Responsive visibility" } }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Mobile picker" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: MobilePicker,
            component: pagination_exports.Pagination,
            props: { labels: { ariaLabel: "Mobile picker" } }
          }
        )
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

  // Pagination.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(pagination_stories_exports, "Default", G, B);
  var First2 = compose(pagination_stories_exports, "First", G, B);
  var Last2 = compose(pagination_stories_exports, "Last", G, B);
  var AllPropertiesShown3 = compose(pagination_stories_exports, "AllPropertiesShown", G, B);
  var WithoutResultsNumber3 = compose(pagination_stories_exports, "WithoutResultsNumber", G, B);
  var WithoutDropdown2 = compose(pagination_stories_exports, "WithoutDropdown", G, B);
  var ControlledPage3 = compose(pagination_stories_exports, "ControlledPage", G, B);
  var FewPages2 = compose(pagination_stories_exports, "FewPages", G, B);
  var ManyPagesEllipsis2 = compose(pagination_stories_exports, "ManyPagesEllipsis", G, B);
  var HugePageCount2 = compose(pagination_stories_exports, "HugePageCount", G, B);
  var WiderSiblings2 = compose(pagination_stories_exports, "WiderSiblings", G, B);
  var Transparent2 = compose(pagination_stories_exports, "Transparent", G, B);
  var TopBottomSplit2 = compose(pagination_stories_exports, "TopBottomSplit", G, B);
  var DisabledBoundaryArrows3 = compose(pagination_stories_exports, "DisabledBoundaryArrows", G, B);
  var ArrowsWithLabels2 = compose(pagination_stories_exports, "ArrowsWithLabels", G, B);
  var CustomArrowIcons2 = compose(pagination_stories_exports, "CustomArrowIcons", G, B);
  var ArrowsPrimaryVariant3 = compose(pagination_stories_exports, "ArrowsPrimaryVariant", G, B);
  var Borders2 = compose(pagination_stories_exports, "Borders", G, B);
  var ResponsiveVisibility2 = compose(pagination_stories_exports, "ResponsiveVisibility", G, B);
  var MobilePicker2 = compose(pagination_stories_exports, "MobilePicker", G, B);
  var CustomLabels2 = compose(pagination_stories_exports, "CustomLabels", G, B);
  var ShowAllPageSize3 = compose(pagination_stories_exports, "ShowAllPageSize", G, B);
  var VisualTest2 = compose(pagination_stories_exports, "VisualTest", G, B);
  return __toCommonJS(Pagination_preview_exports);
})();

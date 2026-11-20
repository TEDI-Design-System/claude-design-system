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

  // List.preview.tsx
  var List_preview_exports = {};
  __export(List_preview_exports, {
    Default: () => Default2,
    NoStyleList: () => NoStyleList2,
    OrderedList: () => OrderedList2,
    OrderedListWithStart: () => OrderedListWithStart2,
    ReversedOrderedList: () => ReversedOrderedList2,
    UnorderedList: () => UnorderedList2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/content/list/list.stories.tsx
  var list_stories_exports = {};
  __export(list_stories_exports, {
    Default: () => Default,
    NoStyleList: () => NoStyleList,
    OrderedList: () => OrderedList,
    OrderedListWithStart: () => OrderedListWithStart,
    ReversedOrderedList: () => ReversedOrderedList,
    UnorderedList: () => UnorderedList,
    default: () => list_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:src/tedi/components/content/list/list.tsx
  var list_exports = {};
  __export(list_exports, {
    default: () => list_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(list_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var list_default = ns["List"] ?? ns;

  // src/tedi/components/content/list/list.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: list_default,
    title: "Tedi-Ready/Content/List",
    subcomponents: { "List.Item": list_default.Item },
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      docs: {
        source: {
          transform: (code) => {
            return code.replaceAll("ListItem", "List.Item");
          }
        }
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/file/jWiRIXhHRxwVdMSimKX2FF/TEDI-Design-System-(draft)?type=design&node-id=2137-19322&m=dev"
      }
    }
  };
  var list_stories_default = meta;
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default, { ...args, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Caesar salad" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default.Item, { children: [
      "Caesar salad",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default, { ...args, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Dressing" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default.Item, { children: [
      "Caesar salad",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default, { ...args, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default.Item, { children: [
        "Dressing",
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default, { ...args, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Lemon juice" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Anchovies" })
        ] })
      ] }) })
    ] })
  ] });
  var TemplateUnorderedList = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default, { ...args, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Potato" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Caesar salad" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default.Item, { children: [
      "Caesar salad",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default, { ...args, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default.Item, { children: [
        "Dressing",
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default, { ...args, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Lemon juice" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Anchovies" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Parmesan cheese" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Worcestershire sauce" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Mustard" })
        ] })
      ] }) })
    ] })
  ] });
  var TemplateOrderedList = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default, { ...args, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "School homework" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default.Item, { children: [
      "Chores",
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Wash dishes" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default.Item, { children: [
          "Fold laundry",
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default, { ...args, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Iron the sheets" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Hang dresses" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Walk the dog" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Water the flowers" })
  ] });
  var TemplateNoStyleList = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default, { ...args, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default.Item, { children: [
    "Caesar salad",
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default, { ...args, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default.Item, { children: [
      "Dressing",
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Lemon juice" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Anchovies" })
      ] })
    ] }) })
  ] }) });
  var Default = {
    render: Template,
    args: {
      style: "styled",
      element: "ul"
    }
  };
  var UnorderedList = {
    render: TemplateUnorderedList,
    args: {
      style: "styled"
    }
  };
  var OrderedList = {
    render: TemplateOrderedList,
    args: {
      element: "ol",
      style: "styled"
    }
  };
  var OrderedListWithStart = {
    name: "Ordered list with start / value",
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default, { ...args, element: "ol", start: 5, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Starts at five" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Six" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { value: 10, children: "Jumps to ten" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Eleven" })
    ] }),
    args: {
      style: "styled"
    }
  };
  var ReversedOrderedList = {
    name: "Reversed ordered list",
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(list_default, { ...args, element: "ol", reversed: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Third" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "Second" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(list_default.Item, { children: "First" })
    ] }),
    args: {
      style: "styled"
    }
  };
  var NoStyleList = {
    render: TemplateNoStyleList,
    args: {
      style: "none"
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

  // List.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(list_stories_exports, "Default", G, B);
  var UnorderedList2 = compose(list_stories_exports, "UnorderedList", G, B);
  var OrderedList2 = compose(list_stories_exports, "OrderedList", G, B);
  var OrderedListWithStart2 = compose(list_stories_exports, "OrderedListWithStart", G, B);
  var ReversedOrderedList2 = compose(list_stories_exports, "ReversedOrderedList", G, B);
  var NoStyleList2 = compose(list_stories_exports, "NoStyleList", G, B);
  return __toCommonJS(List_preview_exports);
})();

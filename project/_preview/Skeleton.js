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

  // Skeleton.preview.tsx
  var Skeleton_preview_exports = {};
  __export(Skeleton_preview_exports, {
    Accessibility: () => Accessibility2,
    Default: () => Default2,
    SkeletonHeight: () => SkeletonHeight2,
    SkeletonWidth: () => SkeletonWidth2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/loaders/skeleton/skeleton.stories.tsx
  var skeleton_stories_exports = {};
  __export(skeleton_stories_exports, {
    Accessibility: () => Accessibility,
    Default: () => Default,
    SkeletonHeight: () => SkeletonHeight,
    SkeletonWidth: () => SkeletonWidth,
    default: () => skeleton_stories_default
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

  // tedi:src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var button_default = ns["Button"] ?? ns;

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

  // src/tedi/components/loaders/skeleton/index.tsx
  var skeleton_exports2 = {};
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:src/tedi/components/loaders/skeleton/skeleton.tsx
  var skeleton_exports = {};
  __export(skeleton_exports, {
    default: () => skeleton_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(skeleton_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var skeleton_default = ns5["Skeleton"] ?? ns5;

  // src/tedi/components/loaders/skeleton/index.tsx
  __reExport(skeleton_exports2, skeleton_exports);

  // tedi:src/tedi/components/loaders/skeleton/skeleton-block/skeleton-block.tsx
  var skeleton_block_exports = {};
  __export(skeleton_block_exports, {
    default: () => skeleton_block_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(skeleton_block_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var skeleton_block_default = ns6["SkeletonBlock"] ?? ns6;

  // src/tedi/components/loaders/skeleton/index.tsx
  __reExport(skeleton_exports2, skeleton_block_exports);

  // src/tedi/components/loaders/skeleton/skeleton.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: skeleton_exports2.Skeleton,
    title: "TEDI-Ready/Components/Loader/Skeleton",
    subcomponents: {
      "Skeleton.Block": skeleton_exports2.Skeleton.Block
    },
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
            return code.replaceAll("SkeletonBlock", "Skeleton.Block");
          }
        }
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/file/jWiRIXhHRxwVdMSimKX2FF/TEDI-Design-System-(draft)?type=design&node-id=2188-34298&m=dev"
      }
    }
  };
  var skeleton_stories_default = meta;
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton, { ...args, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { height: "p" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { height: "h3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { height: "h2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { height: "h1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { height: 100 })
  ] }) });
  var TemplateWidth = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton, { ...args, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { width: 50, height: "p" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { width: 75, height: "h3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { width: "36px", height: "h2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { width: "auto", height: "h1" })
  ] }) });
  var Default = {
    argTypes: {
      ...subcomponentArgTypes(skeleton_exports2.Skeleton.Block, {
        category: "Skeleton.Block",
        prefix: "block",
        exclude: ["children"]
      })
    },
    args: {
      label: "Loading something",
      block__width: 50,
      block__height: "h2"
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton, { ...getPrimaryComponentProps(args), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { ...getSubcomponentProps(args, "block") }) })
  };
  var SkeletonHeight = {
    render: Template,
    args: {
      label: "Loading something"
    }
  };
  var SkeletonWidth = {
    render: TemplateWidth,
    args: {
      label: "Loading something"
    }
  };
  var AccessibilityTemplate = ({ style, id, remove, delay = 3e3, ...args }) => {
    import_react.default.useEffect(() => {
      const timeout = setTimeout(() => {
        remove(id);
      }, delay);
      return () => {
        clearTimeout(timeout);
      };
    }, [delay, id, remove]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton, { ...args, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { width: 100, height: "p", style }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { width: 75, height: 29, style }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { width: 40, height: 50, style }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(skeleton_exports2.Skeleton.Block, { width: 80, style })
    ] }) });
  };
  var Accessibility = {
    render: (args) => {
      const [skeletons, setSkeletons] = import_react.default.useState([]);
      const removeSkeleton = (id) => setSkeletons((prevState) => prevState.filter((skeleton) => skeleton.id !== id));
      const addSkeleton = (skeleton) => {
        setSkeletons((prevState) => [...prevState, { ...skeleton, remove: removeSkeleton }]);
      };
      const renderButton = (label, options) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { onClick: () => addSkeleton(options), children: label }) });
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterX: 2, children: [
          renderButton("Add a short loading block", { id: `skeleton-${skeletons.length}`, delay: 900 }),
          renderButton("Add a long loading block", {
            id: `skeleton-${skeletons.length}`,
            style: { "--loader-skeleton-color": "var(--tedi-red-600)" }
          }),
          renderButton("Render loading block with custom labels", {
            id: `skeleton-${skeletons.length}`,
            style: { "--loader-skeleton-color": "var(--tedi-green-600)" },
            label: "Custom block is loading",
            completedLabel: "Custom block has finished loading"
          })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: skeletons?.length ? skeletons.map((skeleton) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, md: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessibilityTemplate, { ...args, ...skeleton }) }, skeleton.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: "No loaders" }) })
      ] });
    }
  };

  // tedi-compose:compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React2 = __toESM(require_react());
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
      if (Component) render = () => React2.createElement(Component, args);
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

  // Skeleton.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(skeleton_stories_exports, "Default", G, B);
  var SkeletonHeight2 = compose(skeleton_stories_exports, "SkeletonHeight", G, B);
  var SkeletonWidth2 = compose(skeleton_stories_exports, "SkeletonWidth", G, B);
  var Accessibility2 = compose(skeleton_stories_exports, "Accessibility", G, B);
  return __toCommonJS(Skeleton_preview_exports);
})();

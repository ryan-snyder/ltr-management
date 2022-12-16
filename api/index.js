var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_cache = __toESM(require("@emotion/cache")), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3, handleRequest = (request, responseStatusCode, responseHeaders, remixContext) => (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) : handleBrowserRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
), entry_server_default = handleRequest, handleBotRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, emotionCache = (0, import_cache.default)({ key: "css" }), { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
      value: emotionCache,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    {
      onAllReady: () => {
        let reactBody = new import_stream.PassThrough(), bodyWithStyles = (0, import_create_instance.default)(emotionCache).renderStylesToNodeStream();
        reactBody.pipe(bodyWithStyles), responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(bodyWithStyles, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(reactBody);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
}), handleBrowserRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, emotionCache = (0, import_cache.default)({ key: "css" }), { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
      value: emotionCache,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    {
      onShellReady: () => {
        let reactBody = new import_stream.PassThrough(), bodyWithStyles = (0, import_create_instance.default)(emotionCache).renderStylesToNodeStream();
        reactBody.pipe(bodyWithStyles), responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(bodyWithStyles, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(reactBody);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
});

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default,
  loader: () => loader
});
var import_react4 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix = require("@clerk/remix"), import_react5 = require("@chakra-ui/react");

// app/theme/theme.ts
var import_react3 = require("@chakra-ui/react");

// app/theme/components/button.ts
var baseStyle = {
  rounded: "lg"
}, defaultProps = {
  colorScheme: "green"
}, sizes = {
  md: {
    px: 8
  }
}, variants = {}, Button = {
  baseStyle,
  defaultProps,
  sizes,
  variants
};

// app/theme/components/index.ts
var components = {
  Button
};

// app/theme/foundations/colors.ts
var colors = {
  gray: {
    50: "#B0B5C0",
    100: "#A5ABB6",
    200: "#8E96A4",
    300: "#788192",
    400: "#646D7D",
    500: "#525966",
    600: "#393E47",
    700: "#202328",
    800: "#070809",
    900: "#000000"
  },
  green: {
    50: "#50FF95",
    100: "#3BFF89",
    200: "#12FF70",
    300: "#00E95C",
    400: "#00C04C",
    500: "#00973C",
    600: "#005F26",
    700: "#00270F",
    800: "#000000",
    900: "#000000"
  }
};

// app/theme/theme.ts
var theme = (0, import_react3.extendTheme)({
  colors,
  components
});

// app/root.tsx
var import_focus_visible = require("focus-visible"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), loader = (args) => (0, import_ssr.rootAuthLoader)(args, { loadUser: !0 }), CatchBoundary = (0, import_remix.ClerkCatchBoundary)();
function Document({
  children,
  title = "LRT Management"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", {
            children: title
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 34,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 41,
            columnNumber: 25
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.ChakraProvider, {
      theme,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.Box, {
        as: "main",
        minH: "100vh",
        pos: "relative",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 53,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.Image, {
            src: "images/cover.png",
            alt: "Bossa Nova Stack cover",
            boxSize: "full",
            objectFit: "cover",
            pos: "absolute",
            top: 0,
            zIndex: -1
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 55,
            columnNumber: 21
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this);
}
var root_default = (0, import_remix.ClerkApp)(App);

// app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInRoute
});
var import_react6 = require("@chakra-ui/react"), import_remix2 = require("@clerk/remix"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function SignInRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react6.Center, {
    height: "100vh",
    p: 10,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_remix2.SignIn, {
      routing: "path",
      path: "/sign-in",
      signUpUrl: "/sign-up"
    }, void 0, !1, {
      fileName: "app/routes/sign-in/$.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/sign-in/$.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/sign-up/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => SignUpRoute
});
var import_react7 = require("@chakra-ui/react"), import_remix3 = require("@clerk/remix"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function SignUpRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Center, {
    height: "100vh",
    p: 10,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_remix3.SignUp, {
      routing: "path",
      path: "/sign-up",
      signInUrl: "/sign-in"
    }, void 0, !1, {
      fileName: "app/routes/sign-up/$.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/sign-up/$.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader2
});
var import_react9 = require("@remix-run/react"), import_node2 = require("@remix-run/node"), import_remix4 = require("@clerk/remix"), import_ssr3 = require("@clerk/remix/ssr.server"), import_react10 = require("@chakra-ui/react");

// app/components/logo-banner.tsx
var import_react8 = require("@chakra-ui/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function LogoBanner() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Flex, {
    direction: { base: "column", md: "row" },
    align: "center",
    justify: "center",
    bg: "white",
    gap: 8,
    py: 4,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Image, {
        h: 6,
        src: "images/remix.svg"
      }, void 0, !1, {
        fileName: "app/components/logo-banner.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Image, {
        h: 8,
        src: "images/clerk.svg"
      }, void 0, !1, {
        fileName: "app/components/logo-banner.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Image, {
        h: 8,
        src: "images/supabase.svg"
      }, void 0, !1, {
        fileName: "app/components/logo-banner.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Image, {
        h: 8,
        src: "images/chakra.png"
      }, void 0, !1, {
        fileName: "app/components/logo-banner.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Image, {
        h: 8,
        src: "images/vercel.svg"
      }, void 0, !1, {
        fileName: "app/components/logo-banner.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/logo-banner.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/utils/db.server.ts
var import_ssr2 = require("@clerk/remix/ssr.server"), import_supabase_js = require("@supabase/supabase-js"), getDB = async (request) => {
  try {
    let { userId, getToken } = await (0, import_ssr2.getAuth)(request);
    if (!userId)
      return null;
    let secret = await getToken({ template: "supabase" });
    if (!secret)
      return null;
    let supabaseUrl = process.env.SUPABASE_URL || "", supabaseKey = process.env.SUPABASE_ANON_KEY || "";
    return (0, import_supabase_js.createClient)(supabaseUrl, supabaseKey, {
      global: {
        headers: {
          Authorization: `Bearer ${secret}`
        }
      }
    });
  } catch {
    return null;
  }
};

// app/routes/index.tsx
var import_luxon = require("luxon"), import_clerk_sdk_node = require("@clerk/clerk-sdk-node"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), dbErrorMessage = 'Something is missing.<br/>Did you set up Supabase yet?<br/>You can find the <a href="https://github.com/clerkinc/remix-bossa-nova-stack#configuring-the-database" target="_blank">instructions in the README file</a>.', loader2 = async ({ request }) => {
  let { userId } = await (0, import_ssr3.getAuth)(request);
  if (console.log(userId), !userId)
    return (0, import_node2.redirect)("/sign-in");
  let { firstName, lastName } = await import_clerk_sdk_node.users.getUser(userId);
  console.log("Got user in loader..."), console.log(`${firstName} ${lastName}`);
  let db = await getDB(request);
  if (!db)
    return (0, import_node2.json)({ error: dbErrorMessage });
  let { data } = await db.from("songs").select();
  return data ? (0, import_node2.json)({ firstName, lastName }) : (0, import_node2.json)({ error: dbErrorMessage });
}, action = async ({ request }) => {
  let formData = await request.formData(), { userId } = await (0, import_ssr3.getAuth)(request), song = formData.get("add-song"), db = await getDB(request);
  return db && await db.from("songs").insert({ body: song, user_id: userId }), null;
};
function Index() {
  let { signOut } = (0, import_remix4.useAuth)(), data = (0, import_react9.useLoaderData)(), headingSize = (0, import_react10.useBreakpointValue)({ base: "lg", sm: "2xl", lg: "4xl" }), current = import_luxon.DateTime.now(), weekdays = import_luxon.Info.weekdays().slice(0, 5);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Stack, {
    justify: "center",
    textAlign: "center",
    h: "100vh",
    flex: 1,
    color: "white",
    gap: 20,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Stack, {
        gap: 4,
        p: { base: 4, md: 8 },
        align: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Heading, {
            as: "h1",
            size: headingSize,
            textTransform: "uppercase",
            color: "green.400",
            children: `Welcome ${data.firstName} ${data.lastName}`
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 90,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_remix4.SignedIn, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Stack, {
                spacing: 4,
                align: "center",
                direction: "row",
                children: weekdays.map(
                  (day, ind) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Card, {
                    variant: "filled",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.CardHeader, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Heading, {
                          size: "md",
                          children: day
                        }, void 0, !1, {
                          fileName: "app/routes/index.tsx",
                          lineNumber: 103,
                          columnNumber: 41
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 102,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.CardBody, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Text, {
                          children: "X hours worked"
                        }, void 0, !1, {
                          fileName: "app/routes/index.tsx",
                          lineNumber: 106,
                          columnNumber: 41
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 105,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.CardFooter, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Text, {
                          children: current.minus({ days: current.weekday - 1 - ind }).toLocaleString(import_luxon.DateTime.DATE_MED)
                        }, void 0, !1, {
                          fileName: "app/routes/index.tsx",
                          lineNumber: 109,
                          columnNumber: 41
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 108,
                        columnNumber: 37
                      }, this)
                    ]
                  }, ind, !0, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 101,
                    columnNumber: 33
                  }, this)
                )
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 99,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Stack, {
                align: "center",
                gap: 4,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Button, {
                  onClick: () => signOut(),
                  bg: "gray.500",
                  children: "Sign out"
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 115,
                  columnNumber: 25
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 114,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LogoBanner, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 81,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "409ebb9e", entry: { module: "/build/entry.client-BMVQNKB3.js", imports: ["/build/_shared/chunk-DOZEDBE6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-OU773XT6.js", imports: ["/build/_shared/chunk-WCDRYRY5.js", "/build/_shared/chunk-J4N2SAV2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-AVTHBLFR.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-WXDXPEI3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-MVKVKSGW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-409EBB9E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sign-in/$": {
    id: "routes/sign-in/$",
    parentId: "root",
    path: "sign-in/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/sign-up/$": {
    id: "routes/sign-up/$",
    parentId: "root",
    path: "sign-up/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map

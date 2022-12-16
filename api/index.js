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
var import_react5 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix = require("@clerk/remix"), import_react6 = require("@chakra-ui/react");

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
var import_focus_visible = require("focus-visible");

// app/components/sidebar-with-header.tsx
var import_react4 = require("@chakra-ui/react"), import_icons = require("@chakra-ui/icons"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Links = ["Dashboard", "Projects", "Team"], NavLink = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Link, {
  px: 2,
  py: 1,
  rounded: "md",
  _hover: {
    textDecoration: "none",
    bg: (0, import_react4.useColorModeValue)("gray.200", "gray.700")
  },
  href: "#",
  children
}, void 0, !1, {
  fileName: "app/components/sidebar-with-header.tsx",
  lineNumber: 24,
  columnNumber: 3
}, this);
function NavBar({ children }) {
  let { isOpen, onOpen, onClose } = (0, import_react4.useDisclosure)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Box, {
        bg: (0, import_react4.useColorModeValue)("gray.100", "gray.900"),
        px: 4,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Flex, {
            h: 16,
            alignItems: "center",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.IconButton, {
                size: "md",
                icon: isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.CloseIcon, {}, void 0, !1, {
                  fileName: "app/components/sidebar-with-header.tsx",
                  lineNumber: 50,
                  columnNumber: 28
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.HamburgerIcon, {}, void 0, !1, {
                  fileName: "app/components/sidebar-with-header.tsx",
                  lineNumber: 50,
                  columnNumber: 44
                }, this),
                "aria-label": "Open Menu",
                display: { md: "none" },
                onClick: isOpen ? onClose : onOpen
              }, void 0, !1, {
                fileName: "app/components/sidebar-with-header.tsx",
                lineNumber: 48,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.HStack, {
                spacing: 8,
                alignItems: "center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Box, {
                    children: "Logo"
                  }, void 0, !1, {
                    fileName: "app/components/sidebar-with-header.tsx",
                    lineNumber: 56,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.HStack, {
                    as: "nav",
                    spacing: 4,
                    display: { base: "none", md: "flex" },
                    children: Links.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, {
                      children: link
                    }, link, !1, {
                      fileName: "app/components/sidebar-with-header.tsx",
                      lineNumber: 62,
                      columnNumber: 17
                    }, this))
                  }, void 0, !1, {
                    fileName: "app/components/sidebar-with-header.tsx",
                    lineNumber: 57,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/sidebar-with-header.tsx",
                lineNumber: 55,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Flex, {
                alignItems: "center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Button, {
                    variant: "solid",
                    colorScheme: "teal",
                    size: "sm",
                    mr: 4,
                    leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.AddIcon, {}, void 0, !1, {
                      fileName: "app/components/sidebar-with-header.tsx",
                      lineNumber: 72,
                      columnNumber: 25
                    }, this),
                    children: "Action"
                  }, void 0, !1, {
                    fileName: "app/components/sidebar-with-header.tsx",
                    lineNumber: 67,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Menu, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.MenuButton, {
                        as: import_react4.Button,
                        rounded: "full",
                        variant: "link",
                        cursor: "pointer",
                        minW: 0,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Avatar, {
                          size: "sm",
                          src: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        }, void 0, !1, {
                          fileName: "app/components/sidebar-with-header.tsx",
                          lineNumber: 82,
                          columnNumber: 17
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/sidebar-with-header.tsx",
                        lineNumber: 76,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.MenuList, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.MenuItem, {
                            children: "Link 1"
                          }, void 0, !1, {
                            fileName: "app/components/sidebar-with-header.tsx",
                            lineNumber: 90,
                            columnNumber: 17
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.MenuItem, {
                            children: "Link 2"
                          }, void 0, !1, {
                            fileName: "app/components/sidebar-with-header.tsx",
                            lineNumber: 91,
                            columnNumber: 17
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.MenuDivider, {}, void 0, !1, {
                            fileName: "app/components/sidebar-with-header.tsx",
                            lineNumber: 92,
                            columnNumber: 17
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.MenuItem, {
                            children: "Link 3"
                          }, void 0, !1, {
                            fileName: "app/components/sidebar-with-header.tsx",
                            lineNumber: 93,
                            columnNumber: 17
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/components/sidebar-with-header.tsx",
                        lineNumber: 89,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/sidebar-with-header.tsx",
                    lineNumber: 75,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/sidebar-with-header.tsx",
                lineNumber: 66,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/sidebar-with-header.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Box, {
            pb: 4,
            display: { md: "none" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Stack, {
              as: "nav",
              spacing: 4,
              children: Links.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, {
                children: link
              }, link, !1, {
                fileName: "app/components/sidebar-with-header.tsx",
                lineNumber: 103,
                columnNumber: 17
              }, this))
            }, void 0, !1, {
              fileName: "app/components/sidebar-with-header.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/sidebar-with-header.tsx",
            lineNumber: 100,
            columnNumber: 11
          }, this) : null
        ]
      }, void 0, !0, {
        fileName: "app/components/sidebar-with-header.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Box, {
        children
      }, void 0, !1, {
        fileName: "app/components/sidebar-with-header.tsx",
        lineNumber: 110,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/sidebar-with-header.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader = (args) => (0, import_ssr.rootAuthLoader)(args, ({ request }) => {
  let { sessionId, userId, getToken } = request.auth;
  return { cookie: request.headers.get("cookie") ?? "" };
}), CatchBoundary = (0, import_remix.ClerkCatchBoundary)();
function Document({
  children,
  title = "LRT Management"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 40,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", {
            children: title
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 46,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 47,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 49,
            columnNumber: 25
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this);
}
function App() {
  let { cookie } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react6.ChakraProvider, {
      theme,
      colorModeManager: typeof cookie == "string" ? (0, import_react6.cookieStorageManagerSSR)(cookie) : import_react6.localStorageManager,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavBar, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react6.Box, {
          as: "main",
          minH: "100vh",
          pos: "relative",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 68,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react6.Image, {
              src: "images/cover.png",
              alt: "Bossa Nova Stack cover",
              boxSize: "full",
              objectFit: "cover",
              pos: "absolute",
              top: 0,
              zIndex: -1
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 70,
              columnNumber: 21
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 15
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 60,
    columnNumber: 9
  }, this);
}
var root_default = (0, import_remix.ClerkApp)(App);

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader2
});
var import_react8 = require("@remix-run/react"), import_node2 = require("@remix-run/node"), import_remix2 = require("@clerk/remix"), import_ssr3 = require("@clerk/remix/ssr.server"), import_react9 = require("@chakra-ui/react");

// app/components/logo-banner.tsx
var import_react7 = require("@chakra-ui/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function LogoBanner() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Flex, {
    direction: { base: "column", md: "row" },
    align: "center",
    justify: "center",
    bg: "white",
    gap: 8,
    py: 4,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Image, {
        h: 6,
        src: "images/remix.svg"
      }, void 0, !1, {
        fileName: "app/components/logo-banner.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Image, {
        h: 8,
        src: "images/clerk.svg"
      }, void 0, !1, {
        fileName: "app/components/logo-banner.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Image, {
        h: 8,
        src: "images/supabase.svg"
      }, void 0, !1, {
        fileName: "app/components/logo-banner.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Image, {
        h: 8,
        src: "images/chakra.png"
      }, void 0, !1, {
        fileName: "app/components/logo-banner.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Image, {
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

// app/routes/dashboard.tsx
var import_clerk_sdk_node = require("@clerk/clerk-sdk-node"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), dbErrorMessage = 'Something is missing.<br/>Did you set up Supabase yet?<br/>You can find the <a href="https://github.com/clerkinc/remix-bossa-nova-stack#configuring-the-database" target="_blank">instructions in the README file</a>.', loader2 = async ({ request }) => {
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
  let { signOut } = (0, import_remix2.useAuth)(), data = (0, import_react8.useLoaderData)(), headingSize = (0, import_react9.useBreakpointValue)({ base: "lg", sm: "2xl", lg: "4xl" });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react9.Stack, {
    justify: "center",
    textAlign: "center",
    h: "100vh",
    flex: 1,
    color: "white",
    gap: 20,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react9.Stack, {
        gap: 4,
        p: { base: 4, md: 8 },
        align: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react9.Heading, {
            as: "h1",
            size: headingSize,
            textTransform: "uppercase",
            color: "green.400",
            children: `Welcome ${data.firstName} ${data.lastName}`
          }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_remix2.SignedIn, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 87,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react9.Stack, {
                align: "center",
                gap: 4,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react9.Button, {
                  onClick: () => signOut(),
                  bg: "gray.500",
                  children: "Sign out"
                }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 89,
                  columnNumber: 25
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 88,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LogoBanner, {}, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => Dashboard,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node"), import_ssr4 = require("@clerk/remix/ssr.server"), import_react10 = require("@chakra-ui/react"), import_luxon = require("luxon"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  let { userId } = await (0, import_ssr4.getAuth)(request);
  return console.log(userId), userId ? null : (0, import_node3.redirect)("/sign-in");
};
function Dashboard() {
  let current = import_luxon.DateTime.now(), weekdays = import_luxon.Info.weekdays().slice(0, 5);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Stack, {
    spacing: 4,
    align: "center",
    direction: "row",
    children: weekdays.map(
      (day, ind) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Card, {
        bgColor: ind == current.weekday - 1 ? "darkgray" : "white",
        textColor: "black",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.CardHeader, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Heading, {
              size: "md",
              children: day
            }, void 0, !1, {
              fileName: "app/routes/dashboard/index.tsx",
              lineNumber: 41,
              columnNumber: 41
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/index.tsx",
            lineNumber: 40,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.CardBody, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Text, {
              children: "X hours worked"
            }, void 0, !1, {
              fileName: "app/routes/dashboard/index.tsx",
              lineNumber: 44,
              columnNumber: 41
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/index.tsx",
            lineNumber: 43,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.CardFooter, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Text, {
              children: current.minus({ days: current.weekday - 1 - ind }).toLocaleString(import_luxon.DateTime.DATE_MED)
            }, void 0, !1, {
              fileName: "app/routes/dashboard/index.tsx",
              lineNumber: 47,
              columnNumber: 41
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/index.tsx",
            lineNumber: 46,
            columnNumber: 37
          }, this)
        ]
      }, ind, !0, {
        fileName: "app/routes/dashboard/index.tsx",
        lineNumber: 39,
        columnNumber: 33
      }, this)
    )
  }, void 0, !1, {
    fileName: "app/routes/dashboard/index.tsx",
    lineNumber: 37,
    columnNumber: 21
  }, this);
}

// app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInRoute
});
var import_react11 = require("@chakra-ui/react"), import_remix3 = require("@clerk/remix"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function SignInRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react11.Center, {
    height: "100vh",
    p: 10,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_remix3.SignIn, {
      routing: "path",
      path: "/sign-in",
      signUpUrl: "/sign-up",
      afterSignInUrl: "/dashboard"
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
var import_react12 = require("@chakra-ui/react"), import_remix4 = require("@clerk/remix"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function SignUpRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react12.Center, {
    height: "100vh",
    p: 10,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_remix4.SignUp, {
      routing: "path",
      path: "/sign-up",
      signInUrl: "/sign-in",
      afterSignUpUrl: "/dashboard"
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
  action: () => action2,
  default: () => Index2,
  loader: () => loader4
});
var import_react13 = require("@remix-run/react"), import_node4 = require("@remix-run/node"), import_remix5 = require("@clerk/remix"), import_ssr5 = require("@clerk/remix/ssr.server"), import_react14 = require("@chakra-ui/react");
var import_clerk_sdk_node2 = require("@clerk/clerk-sdk-node"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), dbErrorMessage2 = 'Something is missing.<br/>Did you set up Supabase yet?<br/>You can find the <a href="https://github.com/clerkinc/remix-bossa-nova-stack#configuring-the-database" target="_blank">instructions in the README file</a>.', loader4 = async ({ request }) => {
  let { userId } = await (0, import_ssr5.getAuth)(request);
  if (console.log(userId), !userId)
    return (0, import_node4.redirect)("/sign-in");
  let { firstName, lastName } = await import_clerk_sdk_node2.users.getUser(userId);
  console.log("Got user in loader..."), console.log(`${firstName} ${lastName}`);
  let db = await getDB(request);
  if (!db)
    return (0, import_node4.json)({ error: dbErrorMessage2 });
  let { data } = await db.from("songs").select();
  return data ? (0, import_node4.json)({ firstName, lastName }) : (0, import_node4.json)({ error: dbErrorMessage2 });
}, action2 = async ({ request }) => {
  let formData = await request.formData(), { userId } = await (0, import_ssr5.getAuth)(request), song = formData.get("add-song"), db = await getDB(request);
  return db && await db.from("songs").insert({ body: song, user_id: userId }), null;
};
function Index2() {
  let { signOut } = (0, import_remix5.useAuth)(), data = (0, import_react13.useLoaderData)(), headingSize = (0, import_react14.useBreakpointValue)({ base: "lg", sm: "2xl", lg: "4xl" });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react14.Stack, {
    justify: "center",
    textAlign: "center",
    h: "100vh",
    flex: 1,
    color: "white",
    gap: 20,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react14.Stack, {
        gap: 4,
        p: { base: 4, md: 8 },
        align: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react14.Heading, {
            as: "h1",
            size: headingSize,
            textTransform: "uppercase",
            color: "green.400",
            children: `Welcome ${data.firstName} ${data.lastName}`
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_remix5.SignedIn, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react14.Stack, {
              align: "center",
              gap: 4,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react14.Text, {
                  children: "On root page, with nav?"
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 84,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react14.Button, {
                  onClick: () => signOut(),
                  bg: "gray.500",
                  children: "Sign out"
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 85,
                  columnNumber: 25
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 83,
              columnNumber: 21
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(LogoBanner, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 65,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "bedb9a71", entry: { module: "/build/entry.client-DEUSACYR.js", imports: ["/build/_shared/chunk-LZV3VLMK.js", "/build/_shared/chunk-TVFDCZJH.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RVBO472S.js", imports: ["/build/_shared/chunk-TSY52VUB.js", "/build/_shared/chunk-72T7ZQZP.js", "/build/_shared/chunk-IWXAX4EM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-XZV65PAA.js", imports: ["/build/_shared/chunk-VVA43QMU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-ZEK3CFL7.js", imports: ["/build/_shared/chunk-TSY52VUB.js", "/build/_shared/chunk-IWXAX4EM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-6HAJDARZ.js", imports: ["/build/_shared/chunk-VVA43QMU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-M3O45TR6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-TU4JJNTX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-BEDB9A71.js" };

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
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports2
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

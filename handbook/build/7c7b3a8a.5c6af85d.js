(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{132:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(r),m=t,b=l["".concat(s,".").concat(m)]||l[m]||d[m]||o;return r?a.a.createElement(b,i(i({ref:n},c),{},{components:r})):a.a.createElement(b,i({ref:n},c))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return p}));var t=r(2),a=r(6),o=(r(0),r(132)),s={id:"dbcontext-query",title:"8.9 \u67e5\u8be2\u64cd\u4f5c",sidebar_label:"8.9 \u67e5\u8be2\u64cd\u4f5c"},i={unversionedId:"dbcontext-query",id:"dbcontext-query",isDocsHomePage:!1,title:"8.9 \u67e5\u8be2\u64cd\u4f5c",description:"8.9.1 \u6839\u636e\u4e3b\u952e\u67e5\u8be2\u4e00\u6761",source:"@site/docs\\dbcontext-query.mdx",slug:"/dbcontext-query",permalink:"/fur/docs/dbcontext-query",editUrl:"https://gitee.com/monksoul/Fur/tree/rc1/handbook/docs/dbcontext-query.mdx",version:"current",sidebar_label:"8.9 \u67e5\u8be2\u64cd\u4f5c",sidebar:"docs",previous:{title:"8.8 \u5220\u9664\u64cd\u4f5c",permalink:"/fur/docs/dbcontext-delete"},next:{title:"8.10 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",permalink:"/fur/docs/dbcontext-hight-query"}},u=[{value:"8.9.1 \u6839\u636e\u4e3b\u952e\u67e5\u8be2\u4e00\u6761",id:"891-\u6839\u636e\u4e3b\u952e\u67e5\u8be2\u4e00\u6761",children:[]},{value:"8.9.2 \u6839\u636e\u6761\u4ef6\u67e5\u8be2\u4e00\u6761",id:"892-\u6839\u636e\u6761\u4ef6\u67e5\u8be2\u4e00\u6761",children:[]},{value:"8.9.3 \u67e5\u8be2\u6240\u6709\u6570\u636e",id:"893-\u67e5\u8be2\u6240\u6709\u6570\u636e",children:[]},{value:"8.9.4 \u6839\u636e\u6761\u4ef6\u67e5\u8be2\u6240\u6709\u6570\u636e",id:"894-\u6839\u636e\u6761\u4ef6\u67e5\u8be2\u6240\u6709\u6570\u636e",children:[]},{value:"8.9.5 \u5206\u9875\u67e5\u8be2",id:"895-\u5206\u9875\u67e5\u8be2",children:[]},{value:"8.9.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"896-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],c={rightToc:u};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"891-\u6839\u636e\u4e3b\u952e\u67e5\u8be2\u4e00\u6761"},"8.9.1 \u6839\u636e\u4e3b\u952e\u67e5\u8be2\u4e00\u6761"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar person = repository.Find(1);\n\n// \u793a\u4f8b\u4e8c\nvar person = repository.FindOrDefault(1);\n\n// \u793a\u4f8b\u4e09\nvar person = repository.Entities.Find(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar person = await repository.FindAsync(1);\n\n// \u793a\u4f8b\u4e8c\nvar person = await repository.FindOrDefaultAsync(1);\n\n// \u793a\u4f8b\u4e09\nvar person = await repository.Entities.FindAsync(1);\n\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u63d0\u793a")),Object(o.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u53ef\u4ee5\u652f\u6301\u591a\u4e2a\u952e\u67e5\u8be2\uff0c\u5982\u4e3b\u952e\u3001\u8054\u5408\u952e\u3002",Object(o.b)("inlineCode",{parentName:"p"},'repository.Find(1, "\u767e\u5c0f\u50e7")'),";"))),Object(o.b)("h2",{id:"892-\u6839\u636e\u6761\u4ef6\u67e5\u8be2\u4e00\u6761"},"8.9.2 \u6839\u636e\u6761\u4ef6\u67e5\u8be2\u4e00\u6761"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cs"}),'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar person = repository.Single(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u4e8c\nvar person = repository.SingleOrDefault(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u4e09\nvar person = repository.First(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u56db\nvar person = repository.FirstOrDefault(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u4e94\nvar person = repository.Last(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u516d\nvar person = repository.LastOrDefault(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u4e03\nvar person = repository.Entities.Single(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u516b\nvar person = repository.Entities.First(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u4e5d\nvar person = repository.Entities.FirstOrDefault(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u5341\nvar person = repository.Entities.Last(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u5341\u4e00\nvar person = repository.Entities.LastOrDefault(u => u.Name == "Fur");\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar person = await repository.SingleAsync(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u4e8c\nvar person = await repository.SingleOrDefaultAsync(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u4e09\nvar person = await repository.FirstAsync(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u56db\nvar person = await repository.FirstOrDefaultAsync(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u4e94\nvar person = await repository.LastAsync(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u516d\nvar person = await repository.LastOrDefaultAsync(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u4e03\nvar person = await repository.Entities.SingleAsync(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u516b\nvar person = await repository.Entities.FirstAsync(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u4e5d\nvar person = await repository.Entities.FirstOrDefaultAsync(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u5341\nvar person = await repository.Entities.LastAsync(u => u.Name == "Fur");\n\n// \u793a\u4f8b\u5341\u4e00\nvar person = await repository.Entities.LastOrDefaultAsync(u => u.Name == "Fur");\n')),Object(o.b)("h2",{id:"893-\u67e5\u8be2\u6240\u6709\u6570\u636e"},"8.9.3 \u67e5\u8be2\u6240\u6709\u6570\u636e"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar persons = repository.Entities;\n\n// \u793a\u4f8b\u4e8c\nvar persons = repository.DetachedEntities;\n\n// \u793a\u4f8b\u4e09\nvar persons = repository.AsQueryable();\n\n// \u793a\u4f8b\u56db\nvar persons = repository.AsEnumerable();\n\n// \u793a\u4f8b\u4e94\nvar persons = await AsAsyncEnumerable();\n")),Object(o.b)("h2",{id:"894-\u6839\u636e\u6761\u4ef6\u67e5\u8be2\u6240\u6709\u6570\u636e"},"8.9.4 \u6839\u636e\u6761\u4ef6\u67e5\u8be2\u6240\u6709\u6570\u636e"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cs"}),'// \u793a\u4f8b\u4e00\nvar persons = repository.Where(u => u.Id > 10);\n\n// \u793a\u4f8b\u4e8c\nvar persons = repository.Where(u => u.Id > 10 && u.Name.Equals("Fur"));\n\n// \u793a\u4f8b\u4e09\nvar persons = repository.Where(u => u.Id > 10).Where(u => u.Name.Equals("Fur"));\n\n// \u793a\u4f8b\u56db\nvar persons = repository.WhereIf(!string.IsNullOrEmpty(name), u => u.Id > 10 && u.Name.Equals("Fur"));\n\n// \u793a\u4f8b\u4e94\nvar persons = repository.WhereIf(!string.IsNullOrEmpty(name), u => u.Id > 10)\n                        .WhereIf(age > 18, u => u.Name.Containes("\u767e\u5c0f\u50e7"))\n                        .Where(u => u.Age > 18);\n\n// \u793a\u4f8b\u516d\nvar persons = repository.WhereOr(u => u.Name == "Fur",\n                                 u => u.Name == "\u767e\u5c0f\u50e7",\n                                 u => u.Name == "MonkSoul");\n\n// \u793a\u4f8b\u4e03\nvar persons = repository.Where(u => u.Id > 10).Where(u => u.Name.Equals("Fur"));\n                        .WhereIf(age > 18, u => u.Name.Containes("\u767e\u5c0f\u50e7"))\n                        .WhereOr(u => u.Name == "Fur",\n                                 u => u.Name == "\u767e\u5c0f\u50e7",\n                                 u => u.Name == "MonkSoul");\n\n// \u793a\u4f8b\u516b\nvar persons = repository.WhereOrIf((age > 18, u => u.Name == "Fur"),\n                                   (!string.IsNullOrEmpty(name), u => u.Id > 10));\n\n// \u793a\u4f8b\u4e5d\nvar persons = repository.Where(u => u.Id > 10).Where(u => u.Name.Equals("Fur"));\n                        .WhereIf(age > 18, u => u.Name.Containes("\u767e\u5c0f\u50e7"))\n                        .WhereOr(u => u.Name == "Fur",\n                                 u => u.Name == "\u767e\u5c0f\u50e7",\n                                 u => u.Name == "MonkSoul")\n                        .WhereOrIf((age > 18, u => u.Name == "Fur"),\n                                   (!string.IsNullOrEmpty(name), u => u.Id > 10));\n\n// \u793a\u4f8b\u5341\nvar persons = repository.Entities.Where(u => u.Id > 10)\n                                 .WhereIf(age > 18, u => u.Name.Containes("\u767e\u5c0f\u50e7"));\n\n// \u793a\u4f8b\u5341\u4e00\nvar persons = repository.DetachedEntities.Where(u => u.Id > 20);\n\n// \u793a\u4f8b\u5341\u4e8c\nvar persons = repository.AsQueryable(u => u.Id > 20).Where(u => u.Name == "Fur");\n')),Object(o.b)("h2",{id:"895-\u5206\u9875\u67e5\u8be2"},"8.9.5 \u5206\u9875\u67e5\u8be2"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar persons = repository.Where(u => u.Id > 10).ToPagedList();\n\n// \u793a\u4f8b\u4e8c\nvar persons = repository.Where(u => u.Id > 10).ToPagedList(1, 10);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar persons = await repository.Where(u => u.Id > 10).ToPagedListAsync();\n\n// \u793a\u4f8b\u4e8c\nvar persons = await repository.Where(u => u.Id > 10).ToPagedListAsync(1, 10);\n")),Object(o.b)("h2",{id:"896-\u53cd\u9988\u4e0e\u5efa\u8bae"},"8.9.6 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(o.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u7ed9 Fur \u63d0 ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Fur/issues/new?issue"}),"Issue"),"\u3002"))))}p.isMDXComponent=!0}}]);
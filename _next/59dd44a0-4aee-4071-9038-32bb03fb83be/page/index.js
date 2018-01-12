
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([2],{241:function(e,t,l){e.exports=l(242)},242:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(243),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=r.default},243:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(16),n=a(r),i=l(0),o=a(i),u=l(7),s=a(u),m=l(8),c=a(m),d=l(9),f=a(d),p=l(72),g=a(p),h=l(74),b=a(h),_="/Users/ted/Code/idyll/docs-redux/pages/introduction.js",N=function(){return(0,c.default)(function(e){return o.default.createElement("div",{className:"_markdown_",__source:{fileName:_,lineNumber:1}},o.default.createElement(e.h1,{__source:{fileName:_,lineNumber:1}},"Introducing Idyll"),o.default.createElement(e.p,{__source:{fileName:_,lineNumber:2}},"Idyll is a tool that makes it easier to author interactive narratives for the web. The goal of the project is to provide a friendly markup language — and an associated toolchain — that can be used to create dynamic, text-driven web pages."),o.default.createElement(e.p,{__source:{fileName:_,lineNumber:6}},"Idyll helps you create documents that use common narrative techniques such as embedding interactive charts and graphs, responding to scroll events, and ",o.default.createElement(e.a,{href:"http://explorableexplanations.com/",__source:{fileName:_,lineNumber:8}},"explorable explanations"),". Additionally, its readable syntax facilitates collaboration between writers, editors, designers, and programmers on complex projects."),o.default.createElement(e.p,{__source:{fileName:_,lineNumber:12}},o.default.createElement(e.strong,{__source:{fileName:_,lineNumber:12}},o.default.createElement(e.a,{href:"https://idyll-lang.github.io/editor/",__source:{fileName:_,lineNumber:12}},"Try Idyll in your browser")),"."))})},x=[{title:"Full articles",examples:[{label:"The Etymology of Trig Functions",href:"https://mathisonian.github.io/trig/etymology/",image:"trig.png"},{label:"Seattle PD’s Dashcam Problem",href:"https://mathisonian.github.io/dashcam/",image:"https://mathisonian.github.io/dashcam/images/share.png"},{label:"The United Complaints of America",href:"https://mathisonian.github.io/consumer-complaints/",image:"complaints-2.gif"}]},{title:"With popular JavaScript libraries",examples:[{label:"D3",href:"https://idyll-lang.github.io/idyll-d3-component/",image:"d3.png"},{label:"regl",href:"https://idyll-lang.github.io/idyll-regl-component/",image:"regl.png"},{label:"Vega Lite",href:"https://idyll-lang.github.io/examples/csv/",image:"vl.png"}]},{title:"Other examples",examples:[{label:"Lorenz Attractor",href:"https://mathisonian.github.io/lorenz/",image:"lorenz.png"},{label:"Nonlinear Sliders",href:"https://mathisonian.github.io/idyll/nonlinear-sliders/",image:"nonlinear.png"},{label:"Scrolly Idyll",href:"https://idyll-lang.github.io/idyll/scroll/",image:"scroll.gif"}]}],y=function(){return o.default.createElement("section",{__source:{fileName:_,lineNumber:92}},o.default.createElement("h3",{__source:{fileName:_,lineNumber:93}},"Examples"),x.map(function(e){return o.default.createElement(g.default,(0,n.default)({},e,{key:e.title,__source:{fileName:_,lineNumber:95}}))}))};t.default=function(){return o.default.createElement(f.default,{__source:{fileName:_,lineNumber:102}},o.default.createElement(N,{__source:{fileName:_,lineNumber:103}}),o.default.createElement(y,{__source:{fileName:_,lineNumber:104}}),o.default.createElement("p",{__source:{fileName:_,lineNumber:105}},"In Idyll the entire document is reactive, built on top of Facebook's React framework. Changes immediately propagate through the entire page, taking the pain out of creating data-driven experiences that respond to reader input. You don't need to know anything about React to use Idyll, but if you do, it is easy to extend with your own custom components."),o.default.createElement(b.default,{__source:{fileName:_,lineNumber:111}}),o.default.createElement("p",{__source:{fileName:_,lineNumber:112}},"Continue to the ",o.default.createElement(s.default,{href:"/getting-started",__source:{fileName:_,lineNumber:113}},o.default.createElement("a",{__source:{fileName:_,lineNumber:113}},"next section"))," to start using Idyll."))}},72:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(16),n=a(r),i=l(29),o=a(i),u=l(0),s=a(u),m=l(73),c=a(m),d="/Users/ted/Code/idyll/docs-redux/components/example-group.js";t.default=function(e){var t=e.title,l=e.examples;return s.default.createElement("div",{className:"jsx-685422656 example-group",__source:{fileName:d,lineNumber:4}},s.default.createElement("h5",{className:"jsx-685422656",__source:{fileName:d,lineNumber:5}},t),s.default.createElement("div",{className:"jsx-685422656 examples",__source:{fileName:d,lineNumber:6}},l.map(function(e){return s.default.createElement(c.default,(0,n.default)({},e,{key:e.href,__source:{fileName:d,lineNumber:8}}))})),s.default.createElement(o.default,{styleId:"685422656",css:".examples.jsx-685422656{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:6px;}@media all and (max-width:600px){.examples.jsx-685422656{grid-template-columns:1fr;}}"}))}},73:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(29),n=a(r),i=l(0),o=a(i),u="/Users/ted/Code/idyll/docs-redux/components/example.js",s=function(e){return/^http/.test(e)?e:"/static/images/"+e};t.default=function(e){var t=e.href,l=e.label,a=e.image;return o.default.createElement("div",{className:"jsx-2130977316 example",__source:{fileName:u,lineNumber:6}},o.default.createElement("a",{href:t,className:"jsx-2130977316",__source:{fileName:u,lineNumber:7}},o.default.createElement("div",{style:{backgroundImage:"url("+s(a)+")"},className:"jsx-2130977316 example-image",__source:{fileName:u,lineNumber:8}}),o.default.createElement("div",{className:"jsx-2130977316 example-label",__source:{fileName:u,lineNumber:12}},l)),o.default.createElement(n.default,{styleId:"2130977316",css:".example.jsx-2130977316{background-color:#f7f7f7;padding:15px;}.example.jsx-2130977316 a.jsx-2130977316{display:block;text-decoration:none;}.example-label.jsx-2130977316{color:black;text-align:center;font-weight:bold;}.example-image.jsx-2130977316{width:100%;height:275px;background-size:cover;background-repeat:no-repeat;background-position:center;margin-bottom:10px;}"}))}},74:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),n="/Users/ted/Code/idyll/docs-redux/components/donate-link.js",i={margin:"30px 0"};t.default=function(){return r.default.createElement("a",{href:"https://opencollective.com/idyll/donate",target:"_blank",__source:{fileName:n,lineNumber:7}},r.default.createElement("img",{src:"https://opencollective.com/idyll/donate/button@2x.png?color=blue",width:"200",style:i,__source:{fileName:n,lineNumber:8}}))}}},[241]);
            return { page: comp.default }
          })
        
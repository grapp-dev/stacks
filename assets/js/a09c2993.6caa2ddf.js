"use strict";(self.webpackChunkstacks_docs=self.webpackChunkstacks_docs||[]).push([[128],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>d});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"introduction",title:"Introduction",slug:"/"},s=void 0,c={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Motivation",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/stacks/docs/",editUrl:"https://github.com/mobily/stacks/edit/master/docs/docs/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",slug:"/"},sidebar:"sidebar",next:{title:"Installation",permalink:"/stacks/docs/getting-started/installation"}},p=[{value:"Motivation",id:"motivation",children:[],level:3},{value:"Compatibility",id:"compatibility",children:[],level:3}],u={toc:p};function d(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mxstbr"},"Max Stoiber")," wrote an interesting ",(0,a.kt)("a",{parentName:"p",href:"https://mxstbr.com/thoughts/margin"},"article")," some time ago about why margin is considered harmful. There are three main disadvantages of using margin:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"margin breaks component encapsulation"),(0,a.kt)("li",{parentName:"ul"},"margin makes reusability harder"),(0,a.kt)("li",{parentName:"ul"},"margin conflicts with how designers think")),(0,a.kt)("p",null,"Obviously, handling margins across the entire project is simply difficult and may not be scalable. For web projects, a design system called ",(0,a.kt)("a",{parentName:"p",href:"https://seek-oss.github.io/braid-design-system/foundations/layout"},"Braid")," has developer-friendly API for building layouts. However, a similar library was missing for React Native based projects. Therefore, ",(0,a.kt)("strong",{parentName:"p"},"Stacks")," has been created and it adopts Braid Layouts API with subtle differences."),(0,a.kt)("h3",{id:"compatibility"},"Compatibility"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Stacks")," is written in ",(0,a.kt)("a",{parentName:"p",href:"https://rescript-lang.org/"},"ReScript"),". It's compiled using BuckleScript to plain JavaScript and has typings for TypeScript and Flow."),(0,a.kt)("p",null,"This means that out of the box ",(0,a.kt)("inlineCode",{parentName:"p"},"Stacks")," is usable in any project that use the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"plain JavaScript"),(0,a.kt)("li",{parentName:"ul"},"TypeScript"),(0,a.kt)("li",{parentName:"ul"},"Flow"),(0,a.kt)("li",{parentName:"ul"},"ReScript")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Stacks")," can be used in React Native and React Native Web projects."))}d.isMDXComponent=!0}}]);
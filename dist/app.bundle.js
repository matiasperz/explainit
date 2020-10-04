!function(n){var e={};function t(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return n[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(a,i,function(e){return n[e]}.bind(null,i));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=2)}([function(n,e,t){"use strict";var a=t(1),i=t.n(a)()(!1);i.push([n.i,"@import url(https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css);"]),i.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap);"]),i.push([n.i,":root {\n  --green-100: #CDF5EE;\n  --green-300: #91E9D9;\n  --green-500: #5FDEC7;\n  --green-700: #29CBAD;\n  --green-900: #1D8E79;\n  \n  --gray-100: #F7F7F7;\n  --gray-300: #D3D3D3;\n  --gray-500: #C8C8C8;\n  --gray-700: #808080;\n  --gray-900: #393939;\n  \n  --link-blue: #2222EC;\n  --black: #000000;\n  --white: #FFFFFF;\n\n  --border-radius-sm: 4px;\n  --border-radius-md: 6px;\n  --border-radius-lg: 8px;\n  --border-radius-full: 50%;\n\n  --pattern-hideout: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  --pattern-hexagons: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffffff' fill-opacity='0.2' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  --pattern-dots: url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\");\n\n  --box-shadow-sm: 0px 1px 6px #00000010;\n  --box-shadow-lg: 0px 0px 20px 4px #00000025;\n  --background: --var(--gray-100);\n}\n\n#main {\n  width: 100%;\n  height: 100vh;\n  background-color: var(--background);\n}\n\n.explainit {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: flex-end;\n  position: absolute;\n  bottom: 20px;\n  right: 35px;\n  font-family: 'Nunito Sans';\n}\n\n.explainit__frame {\n  display: none;\n  height: calc(100vh - 120px);\n  min-height: 256px;\n  max-height: 650px;\n  background-color: var(--white);\n  border-radius: var(--border-radius-lg);\n  box-shadow: var(--box-shadow-lg);\n  margin-bottom: 20px;\n  width: 360px;\n  overflow: hidden;\n  animation: .3s fadeInUp forwards;\n}\n\n.explainit__frame--opened {\n  display: block;\n}\n\n.frame__inner {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n}\n\n.frame__inner::-webkit-scrollbar {\n  width: 8px;\n  background: transparent;\n  background-color: #00000015;\n}\n\n.frame__inner::-webkit-scrollbar-thumb {\n  background-color: #00000033;\n  width: 8px;\n  border: 1px solid #EAEAEA;\n  border-radius: 20px;\n}\n\n.header {\n  position: relative;\n  background: linear-gradient(to bottom, var(--green-500), var(--green-700));\n  width: 100%;\n  padding: 25px 28px;\n  padding-bottom: 60px;\n}\n\n.content {\n  flex: 1;\n  background-color: var(--gray-100);\n  position: relative;\n  padding: 0px 10px;\n}\n\n.content__inner {\n  margin-top: -35px;\n}\n\n.header__bg {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-image: var(--pattern-hideout);\n  z-index: 1;\n}\n\n.header__close {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border: none;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  border-radius: var(--border-radius-md);\n  background-color: #00000020;\n  z-index: 10;\n}\n\n.header__close svg {\n  width: 12px;\n  height: 12px;\n}\n\n.header__content {\n  position: relative;\n  z-index: 5;\n}\n\n.title {\n  font-size: 34px;\n  font-weight: 700;\n  color: var(--white);\n}\n\n.shortDescription {\n  margin-top: .3rem;\n  font-size: 15px;\n  color: white;\n}\n\n.card {\n  background-color: var(--white);\n  border-radius: var(--border-radius-md);\n  padding: 16px 15px;\n  box-shadow: var(--box-shadow-sm);\n  margin-bottom: 12px;\n}\n\n.card__head {\n  margin-bottom: 8px;\n  background-color: var(--white);\n  border-radius: var(--border-radius-md);\n}\n\n.card__head h2 {\n  font-weight: 600;\n}\n\n.card__content {\n  font-size: 15px;\n}\n\n.explainit__launcher {\n  cursor: pointer;\n  display: flex;\n  width: 60px;\n  height: 60px;\n  justify-content: center;\n  align-items: center;\n  border-radius: var(--border-radius-full);\n  background-color: var(--green-500);\n  box-shadow: var(--box-shadow-lg);\n}\n\n.explainit__launcher svg {\n  width: 20px;\n}\n\n.stack {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.stack__item {\n  margin: 0 .4rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.stack__item svg {\n  width: 28px;\n}\n\n.stack__item:first-child {\n  margin-left: 0;\n}\n\n.stack__item:last-child {\n  margin-right: 0;\n}\n\n.media {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.media__item {\n  margin: 0 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.media__item svg {\n  width: 18px;\n  fill: var(--gray-300);\n}\n\n.media__item:hover svg {\n  width: 18px;\n  fill: var(--gray-700);\n}\n\n.media__item:first-child {\n  margin-left: 0;\n}\n\n.media__item:last-child {\n  margin-right: 0;\n}\n\n/* Description styles */\n.description h1,\n.description h2,\n.description h3,\n.description h4,\n.description h5,\n.description h6 {\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n\n.description h1,\n.description h2,\n.description h3 {\n  margin-top: 14px;\n}\n\n.description ul {\n  margin-bottom: 12px;\n  padding-left: 1.7rem;\n  list-style-type: disc;\n}\n\n.description a,\n.description a:visited {\n  color: var(--link-blue);\n}\n\n.description p {\n  margin-bottom: 8px;\n}\n\n/* Animations */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(35px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@media (max-width: 460px) {\n  .explainit {\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n  }\n\n  .explainit__launcher {\n    width: 50px;\n    height: 50px;\n    margin-bottom: 14px;\n    margin-right: 14px;\n  }\n\n  .explainit__frame {\n    width: 100vw;\n    flex-basis: 100%;\n    max-height: none;\n    flex: 1;\n    border-radius: 0;\n    margin-bottom: 0;\n  }\n\n  .explainit__launcher.explainit__launcher--open {\n    display: none;\n  }\n\n  .header__close {\n    display: flex;\n  }\n}\n",""]),e.a=i},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",a=n[3];if(!a)return t;if(e&&"function"==typeof btoa){var i=(o=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[t].concat(r).concat([i]).join("\n")}var o,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(a)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);a&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){"use strict";t.r(e);var a=t(0).a.toString(),i=document.createElement("style");i.innerHTML=a,document.head.appendChild(i);var r={gatsby:{name:"gatsby",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n    <path d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0ZM3.438,16.167l12.4,12.4A12.563,12.563,0,0,1,3.438,16.167ZM18.812,28.248,3.752,13.188A12.566,12.566,0,0,1,26.158,8.606l-1.74,1.535A10.259,10.259,0,0,0,6.354,12.508L19.492,25.646a10.278,10.278,0,0,0,6.466-7.185H20.513V16h8.051A12.569,12.569,0,0,1,18.812,28.248Z" fill="#744c9e"/>\n  </svg>',test:function(n){return new RegExp("gatsby|gatsbyjs").test(n)}},graphql:{name:"graphql",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.998 35.952">\n    <path d="M2339.537,146.948a3.157,3.157,0,0,1,.129-.906l-7.393-4.267a3.2,3.2,0,1,1-3.918-4.99,3.192,3.192,0,0,1,.844-.338v-8.54a3.205,3.205,0,1,1,2.348-5.895,3.116,3.116,0,0,1,.725.572l7.395-4.269a3.206,3.206,0,1,1,6.279-.911,3.22,3.22,0,0,1-.133.916l7.393,4.268a3.166,3.166,0,0,1,.727-.575,3.206,3.206,0,1,1,2.352,5.895v8.54a3.206,3.206,0,1,1-2.359,5.892,3.251,3.251,0,0,1-.795-.643l-7.346,4.242a3.252,3.252,0,0,1,.162,1.01,3.2,3.2,0,1,1-6.408,0Zm5.572-2.159,7.363-4.251c-.023-.069-.041-.139-.061-.21h-19.344c-.01.042-.023.083-.033.124l7.4,4.271a3.208,3.208,0,0,1,4.678.065Zm7.3-5.985a3.19,3.19,0,0,1,.9-1.564l-9.676-16.759a3.227,3.227,0,0,1-1.785,0l-9.68,16.762a3.158,3.158,0,0,1,.563.715,3.2,3.2,0,0,1,.338.845Zm-21.561-2.32,9.676-16.763c-.031-.03-.059-.06-.09-.091l-7.408,4.277a3.2,3.2,0,0,1-2.3,3.991v8.551C2330.764,136.462,2330.809,136.473,2330.85,136.485Zm23.785,0c.041-.012.082-.023.125-.033V127.9a3.2,3.2,0,0,1-2.309-3.986l-7.41-4.278c-.029.029-.057.057-.086.085Z" transform="translate(-2326.741 -114.2)" fill="#e10098"/>\n  </svg>',test:function(n){return new RegExp("graphql").test(n)}},nest:{name:"nest",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 31.874">\n    <path d="M24.848,45.652a2.028,2.028,0,0,0-.645.116,1.82,1.82,0,0,1,.769,1.074c.008.058.025.1.033.157a.908.908,0,0,1,.017.149c.033.727-.19.818-.347,1.248a1.766,1.766,0,0,0,.116,1.628.987.987,0,0,0,.1.182c-.314-2.091,1.43-2.4,1.752-3.058a1.524,1.524,0,0,0-.818-1.215,1.826,1.826,0,0,0-.975-.281Zm2.628.471a.956.956,0,0,0-.017.24c-.008.066-.008.149-.017.215a1.8,1.8,0,0,1-.058.2,1.857,1.857,0,0,1-.066.2c-.033.066-.058.124-.091.19-.025.033-.041.066-.066.1l-.05.074c-.041.058-.083.116-.124.165a1.265,1.265,0,0,1-.149.149v.008c-.05.041-.1.091-.157.132-.174.132-.372.231-.554.355a1.232,1.232,0,0,0-.165.124,1.208,1.208,0,0,0-.157.132,1.337,1.337,0,0,0-.149.157,1.232,1.232,0,0,0-.124.165c-.041.058-.083.116-.116.174s-.058.124-.091.19a1.73,1.73,0,0,0-.066.19c-.025.074-.041.14-.058.207-.008.033-.008.074-.017.107s-.008.066-.017.1c0,.066-.008.14-.008.207a.9.9,0,0,0,.008.149.938.938,0,0,0,.025.207,1.694,1.694,0,0,0,.041.2c.025.066.041.132.066.2.017.041.041.083.058.116l-1.9-.736c-.322-.091-.636-.174-.959-.248l-.521-.124c-.5-.1-1-.174-1.5-.223-.017,0-.025-.008-.041-.008a14.776,14.776,0,0,0-1.479-.074c-.364,0-.727.017-1.083.041-.5.033-1.008.1-1.512.182-.124.017-.248.041-.372.066-.256.05-.5.107-.744.165l-.372.1c-.124.05-.24.107-.355.157l-.273.124c-.017.008-.033.008-.041.017-.083.041-.157.074-.231.116a.4.4,0,0,0-.058.025c-.091.041-.182.091-.256.132-.058.025-.116.058-.165.083a.746.746,0,0,1-.074.041c-.074.041-.149.083-.215.124a2.079,2.079,0,0,0-.2.124c-.058.041-.116.074-.165.116-.008.008-.017.008-.025.017a1.91,1.91,0,0,0-.157.116l-.017.017-.124.1c-.017.008-.033.025-.05.033-.041.033-.083.074-.124.107-.008.017-.025.025-.033.033-.05.05-.1.091-.149.14-.008,0-.008.008-.017.017-.05.041-.1.091-.149.14-.008.008-.008.017-.017.017-.041.041-.083.083-.124.132-.017.017-.041.033-.058.05-.041.05-.091.1-.14.149-.008.017-.025.025-.033.041-.066.066-.124.132-.19.2l-.025.025a4.878,4.878,0,0,1-.421.4,4.7,4.7,0,0,1-.463.364c-.165.116-.322.215-.5.314a5.036,5.036,0,0,1-.521.248c-.174.074-.355.14-.537.2a9.248,9.248,0,0,1-1.008.24,1.758,1.758,0,0,0-.207.025c-.074.017-.14.033-.207.05l-.2.074a2.113,2.113,0,0,0-.2.091c-.058.041-.124.074-.182.116a1.349,1.349,0,0,0-.165.14,1.415,1.415,0,0,0-.165.149c-.05.058-.1.107-.14.165s-.091.124-.124.19a1.456,1.456,0,0,0-.116.19c-.033.074-.066.14-.091.215s-.05.14-.074.215a1.692,1.692,0,0,0-.041.2c0,.008-.008.017-.008.025-.017.074-.017.174-.025.223a1.118,1.118,0,0,0-.017.165.47.47,0,0,0,.008.107.877.877,0,0,0,.033.157,1.1,1.1,0,0,0,.058.149v.008a1.438,1.438,0,0,0,.091.149,1.679,1.679,0,0,0,.107.149c.041.041.091.091.14.132a1.208,1.208,0,0,0,.157.132,1.923,1.923,0,0,0,.5.364c.041.025.083.041.132.066.008,0,.017.008.025.008a.074.074,0,0,0,.008.041,1.7,1.7,0,0,0,.041.2,1.114,1.114,0,0,0,.066.2c.025.05.041.1.066.149a.18.18,0,0,0,.025.041c.033.066.066.124.1.182l.124.174c.041.05.091.107.14.157s.1.091.157.14a.029.029,0,0,0,.017.008,1.814,1.814,0,0,0,.149.116,1.315,1.315,0,0,0,.182.107,1.344,1.344,0,0,0,.19.091.972.972,0,0,0,.165.058c.008.008.017.008.033.017l.107.025a3.288,3.288,0,0,0,.033,1.016c.074.165.438-.339.8-.917a5.043,5.043,0,0,0,0,1.438c.091.207.587-.438,1.016-1.149a9.551,9.551,0,0,1,11.768,8.413,1.619,1.619,0,0,0-1.711-1.264,4.31,4.31,0,0,1-1.347,1.884,5.3,5.3,0,0,0-.083-1.653,5.345,5.345,0,0,1-1.025,2.083,2.308,2.308,0,0,1-1.983-.893c-.033-.025-.041-.074-.066-.107a1.49,1.49,0,0,1-.066-.174.686.686,0,0,1-.05-.174,1.277,1.277,0,0,1-.008-.182v-.124a1.323,1.323,0,0,1,.041-.174,1.425,1.425,0,0,1,.058-.174,1.86,1.86,0,0,1,.1-.174c.14-.4.14-.719-.116-.909a.941.941,0,0,0-.157-.083c-.033-.008-.074-.025-.107-.033s-.041-.017-.066-.025a1.32,1.32,0,0,0-.174-.041.63.63,0,0,0-.174-.025,1.348,1.348,0,0,0-.182-.017c-.041,0-.083.008-.124.008A.645.645,0,0,0,15.03,66a1.282,1.282,0,0,0-.174.033,1.422,1.422,0,0,0-.174.058c-.058.025-.107.05-.165.074s-.1.058-.157.083c-1.926,1.256-.777,4.2.537,5.049a4.126,4.126,0,0,0-1.14.306l-.017.017a7.787,7.787,0,0,0,1.116.554c.529.174,1.091.331,1.339.4v.008a8,8,0,0,0,2.083.149,7.861,7.861,0,0,0,7.206-6.71c.017.074.033.14.05.215.025.149.058.306.074.463V66.7c.017.074.025.149.033.215v.033a2.029,2.029,0,0,1,.017.215c.008.091.017.182.017.273v.132c0,.041.008.091.008.132s-.008.1-.008.149v.116c0,.058-.008.107-.008.165a.508.508,0,0,1-.008.107c0,.058-.008.116-.008.182a.228.228,0,0,0-.008.074c-.008.066-.017.124-.025.19a.229.229,0,0,1-.008.074c-.008.083-.025.157-.033.24v.017c-.017.074-.033.157-.05.231v.025l-.05.223c0,.008-.008.025-.008.033a2.218,2.218,0,0,1-.058.223v.025c-.025.083-.05.157-.066.231a.026.026,0,0,0-.008.017l-.074.248c-.033.083-.058.157-.091.24s-.058.165-.091.24-.066.157-.1.24h-.008c-.033.074-.066.157-.107.231a.4.4,0,0,1-.025.058c-.008.008-.008.017-.017.025A7.822,7.822,0,0,1,22.5,74.081c-.066.041-.132.091-.2.14-.017.017-.041.025-.058.041-.058.041-.116.083-.182.124l.025.05H22.1l.347-.05h.008c.215-.033.43-.074.645-.116a1.441,1.441,0,0,0,.182-.041l.116-.025c.058-.008.116-.025.174-.033s.1-.025.149-.041a15.662,15.662,0,0,0,2.4-.793,13.235,13.235,0,0,1-5.132,4.19,13.6,13.6,0,0,0,2.818-.488,13.2,13.2,0,0,0,7.81-6.239,13.191,13.191,0,0,1-2.223,5.314,12.987,12.987,0,0,0,5.686-8.859,13.16,13.16,0,0,1,.24,3.983c5.967-8.322.5-16.95-1.793-19.222-.008-.017-.017-.025-.017-.041-.008.008-.008.008-.008.017,0-.008,0-.008-.008-.017,0,.1-.008.2-.017.3-.025.19-.05.372-.083.554s-.091.364-.14.545-.124.355-.2.529-.157.339-.248.5-.19.322-.3.471-.223.306-.339.446-.256.281-.388.413c-.083.074-.157.14-.24.207l-.19.165a4.612,4.612,0,0,1-.463.322c-.157.1-.322.2-.488.281s-.347.157-.521.231-.355.124-.537.174-.372.091-.554.124-.38.05-.562.066c-.132.008-.264.017-.4.017-.19,0-.38-.017-.562-.033a5.562,5.562,0,0,1-1.116-.223h-.008c.182-.017.364-.033.545-.066s.372-.074.554-.124.364-.107.537-.174a4.961,4.961,0,0,0,.521-.231c.174-.083.331-.174.5-.273s.314-.215.463-.331a6.746,6.746,0,0,0,.81-.777q.186-.223.347-.446c.017-.025.033-.058.05-.083.083-.132.165-.264.24-.4.091-.165.174-.331.248-.5s.14-.347.2-.529.1-.355.14-.537.066-.372.083-.554.033-.38.033-.562c0-.132-.008-.264-.017-.4-.017-.19-.041-.372-.066-.554s-.074-.372-.124-.554-.116-.355-.182-.529-.149-.347-.231-.512-.182-.331-.281-.488-.215-.306-.331-.455-.248-.281-.38-.421c-.066-.066-.14-.14-.215-.207-.372-.289-.76-.562-1.149-.81a1.538,1.538,0,0,0-.165-.083,3.22,3.22,0,0,0-.785-.347Z" transform="translate(-6.006 -45.652)" fill="#e0234e" fill-rule="evenodd"/>\n  </svg>',test:function(n){return new RegExp("nest").test(n)}},next:{name:"next",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 21.772">\n    <path d="M8.642,5.885h6.792v.541H9.265V10.5h5.8v.541h-5.8v4.47H15.5v.541H8.642Zm7.4,0h.722l3.2,4.47,3.269-4.47L27.676.207l-7.3,10.619,3.764,5.225h-.75L19.962,11.3l-3.438,4.755h-.736l3.792-5.225-3.537-4.94Zm8.363.541V5.885h7.74v.541H28.579v9.624h-.623V6.427H24.405ZM.145,5.885H.923L11.655,21.979,7.22,16.051.8,6.654l-.028,9.4H.145Z" transform="translate(-0.145 -0.207)" fill="#000"/>\n  </svg>',test:function(n){return new RegExp("next|nextjs").test(n)}},react:{name:"react",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28.387">\n    <path d="M2251.924,229.7q-.443-.382-.865-.787-.335.323-.667.614c-2.808,2.447-5.691,3.462-7.409,2.475-1.663-.957-2.186-3.747-1.517-7.262q.109-.573.251-1.139-.436-.124-.865-.27c-3.529-1.2-5.851-3.186-5.851-5.163,0-1.914,2.164-3.76,5.552-4.938.378-.131.775-.255,1.184-.371q-.131-.525-.237-1.056c-.7-3.577-.208-6.435,1.46-7.4,1.739-1,4.635.074,7.525,2.633q.27.239.53.488.389-.374.8-.729c2.757-2.392,5.488-3.393,7.156-2.433,1.741,1,2.251,4.041,1.471,7.815q-.073.351-.159.7.519.149,1.03.323c3.456,1.186,5.69,3.045,5.69,4.966,0,2-2.387,3.963-6.055,5.175q-.292.1-.595.185.108.435.191.853c.725,3.648.167,6.645-1.55,7.636a2.95,2.95,0,0,1-1.5.371C2255.923,232.387,2253.933,231.423,2251.924,229.7Zm2.769-5.161a32.02,32.02,0,0,1-2.682,3.4q.405.389.8.732c2.326,2,4.482,2.752,5.491,2.17a2.812,2.812,0,0,0,1.048-1.981,11.509,11.509,0,0,0-.154-4.211c-.051-.252-.108-.509-.173-.772A32.081,32.081,0,0,1,2254.693,224.539Zm-11.885.454c-.572,3.005-.153,5.246.857,5.827a2.833,2.833,0,0,0,2.244-.084,11.589,11.589,0,0,0,3.582-2.236q.312-.273.61-.56a33.158,33.158,0,0,1-2.747-3.383,32.2,32.2,0,0,1-4.312-.623Q2242.91,224.46,2242.808,224.993Zm8.245,1.966a28.89,28.89,0,0,0,1.879-2.3q-.953.043-1.932.043-.953,0-1.872-.036C2249.759,225.491,2250.4,226.262,2251.053,226.959Zm-2.967-13.794q-.823,1.2-1.552,2.463t-1.361,2.572q.634,1.311,1.365,2.571t1.563,2.474c.933.06,1.9.091,2.9.091s1.981-.035,2.93-.1q.808-1.211,1.535-2.47h0q.734-1.267,1.375-2.583-.648-1.3-1.379-2.56t-1.542-2.454c-.952-.072-1.928-.11-2.919-.11S2249.038,213.093,2248.086,213.165Zm-4.675,9.454a29.141,29.141,0,0,0,2.949.473q-.522-.807-1-1.639-.473-.815-.907-1.651C2244.042,220.763,2243.693,221.709,2243.411,222.619Zm13.238-1.175q-.475.822-.982,1.624a29.193,29.193,0,0,0,2.985-.508,29.026,29.026,0,0,0-1.075-2.807Q2257.132,220.609,2256.649,221.444ZM2241,214.516c-2.9,1.007-4.634,2.489-4.634,3.651a2.815,2.815,0,0,0,1.194,1.9,11.6,11.6,0,0,0,3.732,1.977q.392.133.79.246a33.166,33.166,0,0,1,1.579-4.087,32.666,32.666,0,0,1-1.56-4.03Q2241.547,214.327,2241,214.516Zm17.355,3.658a31.961,31.961,0,0,1,1.621,4.042c.183-.054.362-.11.537-.167h0c3.167-1.047,5.118-2.648,5.118-3.881,0-1.158-1.806-2.661-4.767-3.677q-.46-.158-.951-.3A31.838,31.838,0,0,1,2258.356,218.174Zm-1.712-3.237q.477.821.92,1.66a28.815,28.815,0,0,0,1.024-2.747c-.918-.209-1.9-.38-2.917-.508Q2256.174,214.129,2256.644,214.937Zm-13.214-1.1c.278.894.619,1.819,1.017,2.761q.432-.836.9-1.65t.981-1.607C2245.316,213.466,2244.343,213.632,2243.43,213.836Zm9.279-6.013q-.376.327-.736.673a32.08,32.08,0,0,1,2.7,3.366,32.876,32.876,0,0,1,4.279.674q.078-.315.144-.634c.673-3.258.257-5.743-.815-6.359a1.565,1.565,0,0,0-.787-.182C2256.341,205.36,2254.573,206.2,2252.709,207.823Zm-9.648,4.7a33.459,33.459,0,0,1,4.27-.662,32.694,32.694,0,0,1,2.726-3.363c-.161-.153-.321-.3-.481-.442-2.495-2.209-4.862-3.09-5.933-2.472-1.005.58-1.4,2.892-.8,5.956h0Q2242.938,212.033,2243.061,212.522Zm9.837-.785a29.087,29.087,0,0,0-1.883-2.266c-.64.689-1.277,1.448-1.9,2.266q.941-.044,1.881-.044T2252.9,211.737Zm-4.756,6.429a2.858,2.858,0,1,1,2.858,2.85A2.854,2.854,0,0,1,2248.142,218.166Z" transform="translate(-2235 -204)" fill="#61dafb"/>\n  </svg>',test:function(n){return new RegExp("react|reactjs").test(n)}},redwood:{name:"redwood",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 34.909">\n    <path d="M18.712,11.047l6.778,4.627a.959.959,0,0,0,.515.161.928.928,0,0,0,.515-.161L33.3,11.032a.927.927,0,0,0-.129-1.582L26.4,6.094a.932.932,0,0,0-.814,0L18.825,9.45a.926.926,0,0,0-.113,1.6Zm9.6,6.079a.936.936,0,0,0,.4.768l5.434,3.714a.912.912,0,0,0,1.128-.073l4.558-4.077a.927.927,0,0,0-.041-1.416l-4.352-3.481a.922.922,0,0,0-1.092-.041l-5.635,3.854A.935.935,0,0,0,28.308,17.126ZM14.792,22.179a.932.932,0,0,1,.3.783.908.908,0,0,1-.458.705l-3.245,1.945a.917.917,0,0,1-1.044-.071.932.932,0,0,1-.306-1.008l1.2-3.776a.92.92,0,0,1,.634-.612.892.892,0,0,1,.855.2Zm17.6.394-5.867-4.015a.922.922,0,0,0-1.03,0l-5.867,4.015a.94.94,0,0,0-.4.705.958.958,0,0,0,.309.757L25.4,29.28a.921.921,0,0,0,1.226,0l5.862-5.244a.937.937,0,0,0,.3-.757A.92.92,0,0,0,32.392,22.573ZM16.744,21.535l-4.553-4.077a.947.947,0,0,1-.309-.731.915.915,0,0,1,.345-.7l4.352-3.5a.932.932,0,0,1,1.1-.041l5.63,3.854a.932.932,0,0,1,0,1.556l-5.429,3.714A.922.922,0,0,1,16.744,21.535Zm23.379,5.856-4.636-2.775a.912.912,0,0,0-1.082.1L28.74,29.778a.932.932,0,0,0,.268,1.556l7.86,3.185a.882.882,0,0,0,.34.067.922.922,0,0,0,.845-.55l2.436-5.457A.932.932,0,0,0,40.123,27.392Zm.644-6.634,1.2,3.776h-.01a.934.934,0,0,1-.136.829.92.92,0,0,1-.745.379.9.9,0,0,1-.469-.13l-3.25-1.945a.9.9,0,0,1-.443-.705.922.922,0,0,1,.3-.783l2.06-1.836a.917.917,0,0,1,.855-.2A.935.935,0,0,1,40.767,20.757ZM23.574,30.628a.927.927,0,0,0-.294-.851L17.615,24.72a.912.912,0,0,0-1.082-.1L11.9,27.392a.942.942,0,0,0-.371,1.183l2.441,5.457a.92.92,0,0,0,1.185.482l7.855-3.185A.927.927,0,0,0,23.574,30.628Zm2.781,1.556,6.3,2.552a.936.936,0,0,1,.165,1.624l-6.31,4.383a.912.912,0,0,1-.515.166.93.93,0,0,1-.515-.166l-6.3-4.383a.926.926,0,0,1-.4-.866.943.943,0,0,1,.577-.757l6.3-2.552A.931.931,0,0,1,26.356,32.184Z" transform="translate(-10 -6)" fill="#bf4722" fill-rule="evenodd"/>\n  </svg>',test:function(n){return new RegExp("redwood|redwood").test(n)}}},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.charAt(0).toUpperCase()+n.slice(1)},s='<svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 25.34 15.499">\n    <g id="arrow" transform="translate(-25.672 -607.672)">\n      <line x2="9.842" y2="9.842" transform="translate(28.5 610.5)" fill="none" stroke="var(--green-900)" stroke-linecap="round" stroke-width="4"/>\n      <line x1="9.842" y2="9.842" transform="translate(38.342 610.5)" fill="none" stroke="var(--green-900)" stroke-linecap="round" stroke-width="4"/>\n    </g>\n  </svg>',c='<svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 23.73 5.405">\n    <path\n      id="more"\n      d="M1.9-2.426A2.7,2.7,0,0,1,2.624-4.4a2.628,2.628,0,0,1,1.964-.738A2.628,2.628,0,0,1,6.552-4.4a2.7,2.7,0,0,1,.725,1.978A2.654,2.654,0,0,1,6.552-.461,2.654,2.654,0,0,1,4.588.264,2.654,2.654,0,0,1,2.624-.461,2.654,2.654,0,0,1,1.9-2.426Zm9.176,0A2.7,2.7,0,0,1,11.8-4.4a2.628,2.628,0,0,1,1.964-.738,2.628,2.628,0,0,1,1.964.738,2.7,2.7,0,0,1,.725,1.978,2.654,2.654,0,0,1-.725,1.964,2.654,2.654,0,0,1-1.964.725A2.654,2.654,0,0,1,11.8-.461,2.654,2.654,0,0,1,11.074-2.426Zm9.176,0A2.7,2.7,0,0,1,20.975-4.4a2.628,2.628,0,0,1,1.964-.738A2.628,2.628,0,0,1,24.9-4.4a2.7,2.7,0,0,1,.725,1.978A2.654,2.654,0,0,1,24.9-.461a2.654,2.654,0,0,1-1.964.725,2.654,2.654,0,0,1-1.964-.725A2.654,2.654,0,0,1,20.25-2.426Z"\n      transform="translate(-1.898 5.142)"\n      fill="var(--green-900)"\n    />\n  </svg>',l='<svg id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">\n    <path d="M9.9,8,15.61,2.284A1.339,1.339,0,0,0,13.717.39L8,6.106,2.288.39A1.339,1.339,0,1,0,.394,2.284L6.108,8,.394,13.716A1.339,1.339,0,1,0,2.288,15.61L8,9.894l5.715,5.716a1.339,1.339,0,1,0,1.894-1.894Z" transform="translate(0 0)" fill="#fff"/>\n  </svg>';function d(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function h(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var g={facebook:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n    <path id="facebook-icon" d="M28.571,2.25H3.429A3.429,3.429,0,0,0,0,5.679V30.821A3.429,3.429,0,0,0,3.429,34.25h9.8V23.371h-4.5V18.25h4.5v-3.9c0-4.439,2.643-6.891,6.691-6.891a27.262,27.262,0,0,1,3.966.346v4.357H21.655a2.561,2.561,0,0,0-2.887,2.766V18.25h4.913L22.9,23.371H18.768V34.25h9.8A3.429,3.429,0,0,0,32,30.821V5.679A3.429,3.429,0,0,0,28.571,2.25Z" transform="translate(0 -2.25)"/>\n  </svg>',website:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n    <path id="link-icon" d="M20.413,11.587A9.5,9.5,0,0,1,20.436,25l-.022.023-4.2,4.2A9.5,9.5,0,0,1,2.778,15.787L5.1,13.468a1,1,0,0,1,1.706.663,11.517,11.517,0,0,0,.606,3.3,1.006,1.006,0,0,1-.236,1.038l-.818.818a4.5,4.5,0,1,0,6.323,6.4l4.2-4.2a4.5,4.5,0,0,0,0-6.364,4.682,4.682,0,0,0-.646-.536A1,1,0,0,1,15.8,13.8a2.489,2.489,0,0,1,.731-1.863l1.316-1.316a1,1,0,0,1,1.287-.108,9.53,9.53,0,0,1,1.283,1.075Zm8.808-8.809a9.511,9.511,0,0,0-13.435,0l-4.2,4.2L11.564,7a9.5,9.5,0,0,0,1.305,14.487,1,1,0,0,0,1.286-.108l1.316-1.316A2.489,2.489,0,0,0,16.2,18.2a1,1,0,0,0-.434-.788,4.682,4.682,0,0,1-.646-.536,4.5,4.5,0,0,1,0-6.364l4.2-4.2a4.5,4.5,0,1,1,6.323,6.4l-.818.818a1.006,1.006,0,0,0-.236,1.038,11.517,11.517,0,0,1,.606,3.3,1,1,0,0,0,1.706.663l2.319-2.319a9.51,9.51,0,0,0,0-13.435Z" transform="translate(0 0)"/>\n  </svg>',linkedIn:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 31.999">\n    <path id="linkedin-icon" d="M7.163,32H.529V10.636H7.163ZM3.842,7.721A3.86,3.86,0,1,1,7.684,3.843,3.875,3.875,0,0,1,3.842,7.721ZM31.993,32h-6.62V21.6c0-2.479-.05-5.657-3.449-5.657-3.449,0-3.978,2.693-3.978,5.479V32H11.319V10.636h6.363V13.55h.093a6.971,6.971,0,0,1,6.277-3.45C30.766,10.1,32,14.521,32,20.264V32Z" transform="translate(0 -0.001)"/>\n  </svg>',twitter:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 25.99">\n    <path id="twitter-icon" d="M28.711,9.858c.02.284.02.569.02.853,0,8.67-6.6,18.66-18.66,18.66A18.533,18.533,0,0,1,0,26.427a13.567,13.567,0,0,0,1.584.081,13.135,13.135,0,0,0,8.142-2.8,6.57,6.57,0,0,1-6.132-4.548,8.271,8.271,0,0,0,1.239.1,6.936,6.936,0,0,0,1.726-.223A6.559,6.559,0,0,1,1.3,12.6v-.081a6.6,6.6,0,0,0,2.964.832,6.568,6.568,0,0,1-2.03-8.772,18.642,18.642,0,0,0,13.523,6.863,7.4,7.4,0,0,1-.162-1.5,6.565,6.565,0,0,1,11.35-4.487,12.912,12.912,0,0,0,4.162-1.584,6.541,6.541,0,0,1-2.883,3.614A13.148,13.148,0,0,0,32,6.467a14.1,14.1,0,0,1-3.289,3.391Z" transform="translate(0 -3.381)"/>\n  </svg>',github:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 31.208">\n    <path d="M16,.445a16,16,0,0,0-5.06,31.18c.8.151,1.093-.344,1.093-.769,0-.38-.013-1.387-.02-2.72-4.451.965-5.389-2.147-5.389-2.147a4.241,4.241,0,0,0-1.78-2.34c-1.449-.992.112-.972.112-.972a3.355,3.355,0,0,1,2.451,1.648,3.41,3.41,0,0,0,4.66,1.331,3.411,3.411,0,0,1,1.013-2.14c-3.553-.4-7.288-1.776-7.288-7.907a6.173,6.173,0,0,1,1.647-4.293,5.689,5.689,0,0,1,.14-4.235s1.34-.429,4.4,1.64a15.085,15.085,0,0,1,8,0c3.04-2.069,4.38-1.64,4.38-1.64a5.846,5.846,0,0,1,.16,4.235,6.2,6.2,0,0,1,1.64,4.293c0,6.147-3.74,7.5-7.3,7.893a3.831,3.831,0,0,1,1.08,2.96c0,2.141-.02,3.861-.02,4.381,0,.42.28.92,1.1.76A15.98,15.98,0,0,0,16,.445" transform="translate(0 -0.445)"/>\n  </svg>'};new(function(){function n(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.title,i=void 0===a?"":a,h=t.shortDescription,u=void 0===h?"":h,v=t.description,m=void 0===v?"":v,f=t.stack,w=void 0===f?[]:f,x=t.rootElm,_=void 0===x?null:x,b=t.media,y=void 0===b?{website:null,linkedIn:null,twitter:null,facebook:null,github:null}:b;d(this,n),p(this,"_normalizeStackNames",(function(n){return n.map((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.toLowerCase()}))})),p(this,"_getStackHTML",(function(n){var e,t=r[Object.keys(r).find((function(e){return r[e].test(n)}))];return t?(e=t.svg,'<li class="stack__item" title="'.concat(o(n),'">').concat(e,"</li>")):null})),p(this,"_getMediaHTML",(function(n,e){var t;return t=g[n],'<a class="media__item" target="_blank" href="'.concat(e,'">').concat(t,"</a>")})),p(this,"_renderStack",(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e._normalizeStackNames(n).reduce((function(n,t){return n+(e._getStackHTML(t)||"")}),"")})),p(this,"_renderMedia",(function(n){return Object.keys(n).filter((function(e){return Boolean(n[e])})).reduce((function(t,a){return t+e._getMediaHTML(a,n[a])}),"")})),p(this,"_hasMedia",(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).some((function(e){return n[e]}))})),p(this,"_renderStackCard",(function(n){return n.length>0?'<div class="card">\n        <div class="card__head">\n          <h2>Stack</h2>\n        </div>\n        <div class="card__content">\n          <ul class="stack">\n            '.concat(e._renderStack(n),"\n          </ul>\n        </div>\n      </div>"):""})),p(this,"_renderDescriptionCard",(function(n){return n.length>0?'<div class="card">\n        <div class="card__head">\n          <h2>Description</h2>\n        </div>\n        <div class="card__content">\n          <article class="description">\n            '.concat(n,"\n          </article>\n        </div>\n      </div>"):""})),p(this,"_renderMediaCard",(function(n){return e._hasMedia(n)?'<div class="card">\n        <div class="card__content">\n          <ul class="media">\n            '.concat(e._renderMedia(n),"\n          </ul>\n        </div>\n      </div>"):""})),p(this,"_renderShortDescription",(function(n){return n.length>0?'<p class="shortDescription">\n          '.concat(n,"\n        </p>"):""})),p(this,"getWidgetHTML",(function(n){var t=n.title,a=n.shortDescription,i=n.description,r=n.stack,o=n.media;return'\n    <div id="explainit" class="explainit">\n      <div id="explainit__frame" class="explainit__frame'.concat(e.isOpen?" explainit__frame--opened":"",'">\n        <div class="frame__inner">\n          <div class="header">\n            <button id="explainit__close" class="header__close">\n              ').concat(l,'\n            </button>\n            <div class="header__bg"></div>\n            <div class="header__content">\n              <h1 class="title">').concat(t,"</h1>\n              ").concat(e._renderShortDescription(a),'\n            </div>\n          </div>\n          <div class="content">\n            <div class="content__inner">\n              ').concat(e._renderStackCard(r),"\n              ").concat(e._renderDescriptionCard(i),"\n              ").concat(e._renderMediaCard(o),'\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id="explainit__launcher" class="explainit__launcher ').concat(e.isOpen?" explainit__launcher--open":"",'">\n        ').concat(e.isOpen?s:c,"\n      </div>\n    </div>\n  ")})),this.title=i,this.shortDescription=u,this.description=m,this.stack=w,this.rootElm=_||document.querySelector("body"),this.media={website:y.website,linkedIn:y.linkedIn,twitter:y.twitter,facebook:y.facebook,github:y.github},this.isOpen=!1,this._initWidget()}var e,t,a;return e=n,(t=[{key:"_render",value:function(){this._removePreviousNode(),this._initWidget()}},{key:"_removePreviousNode",value:function(){var n;null===(n=document.getElementById("explainit"))||void 0===n||n.remove()}},{key:"_initWidget",value:function(){var n=this;this.rootElm.insertAdjacentHTML("beforeend",this.getWidgetHTML({title:this.title,shortDescription:this.shortDescription,description:this.description,stack:this.stack,media:{website:this.media.website,linkedIn:this.media.linkedIn,twitter:this.media.twitter,facebook:this.media.facebook,github:this.media.github}}));var e=document.getElementById("explainit__launcher"),t=document.getElementById("explainit__close");e.addEventListener("click",(function(){n.toggle()})),t.addEventListener("click",(function(){n.close()}))}},{key:"close",value:function(){this.isOpen=!1,this._render()}},{key:"open",value:function(){this.isOpen=!0,this._render()}},{key:"toggle",value:function(){this.isOpen?this.close():this.open()}}])&&h(e.prototype,t),a&&h(e,a),n}())({title:"Petgram",shortDescription:"Petgram es una aplicación realizada en el curso de React Avanzado en Platzi. Es una aplicación similar a Instagram con el detalle que las imágenes que se muestran son de mascotas 🐶.",stack:["graphql","react","redwood","next"],description:'\n    <p>\n      Petgram es una PWA(Progressive Web App) de aspecto similar a instagram donde podés encontrar fotos de\n      mascotas.\n    </p>\n    <h3>¿Con que esta hecho?</h3>\n    <ul>\n      <li>\n        ⚛️ React\n      </li>\n      <li>\n        🚀 Apollo client (GraphQL)\n      </li>\n      <li>\n        💅 Styled components\n      </li>\n      <li>\n        🔍 Cypress\n      </li>\n    </ul>\n    <h3>¿Que puedo hacer con Petgram?</h3>\n    <p>\n      Con Petgram podés crearte una cuenta y likear todas las publicaciones de gatitos que quieras 😉.\n    </p>\n    <h3>¿Dónde puedo verla?</h3>\n    <p>Justo aca 👉 <a href="https://petgram-seven-ochre.vercel.app">https://petgram-seven-ochre.vercel.app</a></p>\n  ',media:{website:"https://mtprz.dev",twitter:"https://twitter.com/matiasperz_",linkedIn:"https://www.linkedin.com/in/matias-sebastian-perez-24012b180/",github:"https://github.com/matias4205"}})}]);
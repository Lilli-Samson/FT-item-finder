!function r(n,s,o){function c(t,e){if(!s[t]){if(!n[t]){var a="function"==typeof require&&require;if(!e&&a)return a(t,!0);if(i)return i(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}a=s[t]={exports:{}},n[t][0].call(a.exports,function(e){return c(n[t][1][e]||e)},a,a.exports,r,n,s,o)}return s[t].exports}for(var i="function"==typeof require&&require,e=0;e<o.length;e++)c(o[e]);return c}({1:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getLeafStates=function e(t){let a={};for(const r of t.children)r instanceof HTMLInputElement?0===s(r).length&&(a[r.id]=r.checked):r instanceof HTMLUListElement&&(a={...a,...e(r)});return a},a.makeCheckboxTree=function(e){e=function t(a){{if("string"==typeof a){let e=!1;"-"===a[0]&&(a=a.substring(1),e=!0);const r=[(0,i.createHTML)(["input",{type:"checkbox",id:a,checked:"true"}]),(0,i.createHTML)(["label",{for:a},a])];return e&&(r[0].classList.add("disabled"),r[1].classList.add("disabled")),r}{const n=(0,i.createHTML)(["ul"]);for(let e=0;e<a.length;e++){const s=a[e],o=e===a.length-1;for(const c of t(s))n.appendChild(c);o||"string"!=typeof s||n.appendChild((0,i.createHTML)(["br"]))}return[n]}}}(e)[0];if(e instanceof HTMLUListElement)return e.classList.add("treeview"),function e(t){for(const a of t.children)a instanceof HTMLInputElement?r(a):a instanceof HTMLUListElement&&e(a)}(e),e;throw"Internal error"};var i=e("./html");function s(t){var a=t.parentElement;if(a instanceof HTMLUListElement)for(let e=0;e<a.children.length;e++)if(a.children[e]===t){var r=a.children[e+3];if(r instanceof HTMLUListElement)return Array.from(r.children).filter(e=>e instanceof HTMLInputElement);break}return[]}function o(r){r=function(t){var a=t.parentElement;if(a instanceof HTMLUListElement){t=a.parentElement;if(t instanceof HTMLUListElement){let e;for(const r of t.children)if(r instanceof HTMLInputElement)e=r;else if(r===a)return e}}}(r);if(r){let e=!1,t=!1,a=!1;for(const n of s(r))n.checked?e=!0:t=!0,n.indeterminate&&(a=!0);a||e&&t?r.indeterminate=!0:e?(r.checked=!0,r.indeterminate=!1):t&&(r.checked=!1,r.indeterminate=!1),o(r)}}function r(e){e.addEventListener("change",function(e){e=e.target;e instanceof HTMLInputElement&&(!function e(t){for(const a of s(t))a.checked!==t.checked&&(a.checked=t.checked,a.indeterminate=!1,e(a))}(e),o(e))})}},{"./html":2}],2:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.createHTML=function a(t){const r=document.createElement(t[0]);function n(e){if("string"==typeof e||e instanceof HTMLElement)r.append(e);else if(Array.isArray(e))r.append(a(e));else for(const t in e)r.setAttribute(t,e[t])}for(let e=1;e<t.length;e++)n(t[e]);return r}},{}],3:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ItemSource=a.Item=void 0,a.downloadItems=async function(){let e=1;var t=await s("https://raw.githubusercontent.com/sstokic-tgm/JFTSE/development/auth-server/src/main/resources/res/Item_Parts_Ini3.xml",e++),a=await s("https://raw.githubusercontent.com/sstokic-tgm/JFTSE/development/auth-server/src/main/resources/res/Shop_Ini3.xml",e++);(function(e){e.length<1e3&&console.warn(`Items file is only ${e.length} bytes long`);for(var[,t]of e.matchAll(/\<Item (.*)\/\>/g)){var a,r,n=new m;for([,a,r]of t.matchAll(/\s?([^=]*)="([^"]*)"/g))switch(a){case"Index":n.id=parseInt(r);break;case"_Name_":n.name_kr=r;break;case"Name_N":n.name_en=r;break;case"UseType":n.useType=r;break;case"MaxUse":n.maxUse=parseInt(r);break;case"Hide":n.hidden=!!parseInt(r);break;case"Resist":n.resist=r;break;case"Char":switch(r){case"NIKI":n.character="Niki";break;case"LUNLUN":n.character="LunLun";break;case"LUCY":n.character="Lucy";break;case"SHUA":n.character="Shua";break;case"DHANPIR":n.character="Dhanpir";break;case"POCHI":n.character="Pochi";break;case"AL":n.character="Al";break;default:console.warn(`Found unknown character "${r}"`)}break;case"Part":switch(String(r)){case"BAG":n.part="Backpack";break;case"GLASSES":n.part="Face";break;case"HAND":n.part="Hand";break;case"SOCKS":n.part="Socks";break;case"FOOT":n.part="Shoes";break;case"CAP":n.part="Hat";break;case"PANTS":n.part="Lower";break;case"RACKET":n.part="Racket";break;case"BODY":n.part="Upper";break;case"HAIR":n.part="Hair";break;case"DYE":n.part="Dye";break;default:console.warn("Found unknown part "+r)}break;case"Level":n.level=parseInt(r);break;case"STR":n.str=parseInt(r);break;case"STA":n.sta=parseInt(r);break;case"DEX":n.dex=parseInt(r);break;case"WIL":n.wil=parseInt(r);break;case"AddHP":n.hp=parseInt(r);break;case"AddQuick":n.quickslots=parseInt(r);break;case"AddBuff":n.buffslots=parseInt(r);break;case"SmashSpeed":n.smash=parseInt(r);break;case"MoveSpeed":n.movement=parseInt(r);break;case"ChargeshotSpeed":n.charge=parseInt(r);break;case"LobSpeed":n.lob=parseInt(r);break;case"ServeSpeed":n.serve=parseInt(r);break;case"MAX_STR":n.max_str=parseInt(r);break;case"MAX_STA":n.max_sta=parseInt(r);break;case"MAX_DEX":n.max_dex=parseInt(r);break;case"MAX_WIL":n.max_wil=parseInt(r);break;case"EnchantElement":n.element_enchantable=!!parseInt(r);break;case"EnableParcel":n.parcel_enabled=!!parseInt(r);break;case"BallSpin":n.spin=parseInt(r);break;case"ATSS":n.atss=parseInt(r);break;case"DFSS":n.dfss=parseInt(r);break;case"Socket":n.socket=parseInt(r);break;case"Gauge":n.gauge=parseInt(r);break;case"GaugeBattle":n.gauge_battle=parseInt(r);break;default:console.warn(`Found unknown item attribute "${a}"`)}h.set(n.id,n)}})(t),function(e){e.length<1e3&&console.warn(`Shop file is only ${e.length} bytes long`);let t=0,a=0;for(const d of e.matchAll(/<Product DISPLAY="\d+" HIT_DISPLAY="\d+" Index="(?<index>\d+)" Enable="(?<enabled>0|1)" New="\d+" Hit="\d+" Free="\d+" Sale="\d+" Event="\d+" Couple="\d+" Nobuy="\d+" Rand="[^"]+" UseType="[^"]+" Use0="\d+" Use1="\d+" Use2="\d+" PriceType="(?<price_type>(?:MINT)|(?:GOLD))" OldPrice0="-?\d+" OldPrice1="-?\d+" OldPrice2="-?\d+" Price0="(?<price>-?\d+)" Price1="-?\d+" Price2="-?\d+" CouplePrice="-?\d+" Category="(?<category>[^"]*)" Name="(?<name>[^"]*)" GoldBack="-?\d+" EnableParcel="(?<parcel_from_shop>0|1)" Char="-?\d+" Item0="(?<item0>-?\d+)" Item1="(?<item1>-?\d+)" Item2="(?<item2>-?\d+)" Item3="(?<item3>-?\d+)" Item4="(?<item4>-?\d+)" Item5="(?<item5>-?\d+)" Item6="(?<item6>-?\d+)" Item7="(?<item7>-?\d+)" Item8="(?<item8>-?\d+)" Item9="(?<item9>-?\d+)" ?(?:Icon="[^"]*" ?)?(?:Name_kr="[^"]*" ?)?(?:Name_en="(?<name_en>[^"]*)" ?)?(?:Name_th="[^"]*" ?)?\/>/g))if(d.groups){var r=parseInt(d.groups.index),n=(a,a=r,d.groups.name),s=d.groups.category,o=("LOTTERY"===s&&g.push({name:n,id:parseInt(d.groups.item0)}),!!parseInt(d.groups.enabled)),c="MINT"===d.groups.price_type?"ap":"GOLD"===d.groups.price_type?"gold":"none",i=parseInt(d.groups.price);parseInt(d.groups.parcel_from_shop);for(const p of[parseInt(d.groups.item0),parseInt(d.groups.item1),parseInt(d.groups.item2),parseInt(d.groups.item3),parseInt(d.groups.item4),parseInt(d.groups.item5),parseInt(d.groups.item6),parseInt(d.groups.item7),parseInt(d.groups.item8),parseInt(d.groups.item9)])if(0!==p){let e=h.get(p);var l=new m;l.name_en=d.groups.name_en??"",e=e||l,"PARTS"===s?(o&&e.sources.push(new u(n===l.name_en?"":n,i,"ap"==c)),f.set(r,e)):f.set(r,l)}t++}console.log(`Found ${t} shop items`)}(a),console.log(`Found ${g.length} gachas`);for(const n of g){var r=`https://raw.githubusercontent.com/sstokic-tgm/JFTSE/development/emulator/src/main/resources/res/lottery/Ini3_Lot_${(""+n.id).padStart(2,"0")}.xml`;try{!function(e,t){var a=[];for(const s of e.matchAll(/<LotteryItem_[^ ]* Index="\d+" _Name_="[^"]*" ShopIndex="(?<shop_id>\d+)" QuantityMin="\d+" QuantityMax="\d+" ChansPer="(?<probability>\d+\.?\d*)" Effect="\d+" ProductOpt="\d+"\/>/g))s.groups&&a.push({id:parseInt(s.groups.shop_id),chance:parseFloat(s.groups.probability)});var r=a.map(e=>e.chance).reduce((e,t)=>e+t,0);for(const o of a){var n=f.get(o.id);n?n.sources.push(new u(t,0,!1,r/o.chance)):console.warn(`Failed to find item ${o.id} from "${t}" in shop`)}}(await s(r,e++,g.length+2),n.name)}catch(e){console.warn(`Failed downloading ${r} because `+e)}}console.log(`Loaded ${h.size} items`)},a.getMaxItemLevel=function(){let e=0;for(var[,t]of h)e=Math.max(e,t.level);return e},a.getResultsTable=function(e,t,a){var r={Hat:[],Hair:[],Dye:[],Upper:[],Lower:[],Shoes:[],Socks:[],Hand:[],Backpack:[],Face:[],Racket:[]};for(var[,n]of h)e(n)&&(r[n.part]=a(r[n.part],n));var s=(0,i.createHTML)(["table",["col"],["col"],["col"],["col"],["col"],["col"],["col"],["col"],["col"],["col"],["col"],["col"],["col"],["col"],["col"],["col"],["tr",["th","Name"],["th","ID"],["th","Character"],["th","Part"],["th","Str"],["th","Sta"],["th","Dex"],["th","Wil"],["th","Smash"],["th","Movement"],["th","Charge"],["th","Lob"],["th","Serve"],["th","HP"],["th","Level"],["th","Source"]]]);for(const o of Object.values(r))for(const c of o)s.appendChild(function(e,t){e=(0,i.createHTML)(["tr",["td",e.name_en],["td",""+e.id],["td",e.character],["td",e.part],["td",""+e.str],["td",""+e.sta],["td",""+e.dex],["td",""+e.wil],["td",""+e.smash],["td",""+e.movement],["td",""+e.charge],["td",""+e.lob],["td",""+e.serve],["td",""+e.hp],["td",""+e.level],["td",e.sources.filter(t).map(e=>e.display_string()).join(", ")]]);return e}(c,t));return s};var i=e("./html");class u{constructor(e,t,a=!1,r=0){this.item_name=e,this.price=t,a&&(this.price*=-1),this.gacha_factor=r}display_string(){var e,t;if(this.price)return e=this.is_ap?"AP":"Gold",t=Math.abs(this.price),`${this.item_name?`"${this.item_name}" `:""}Shop ${t} `+e+(this.gacha_factor?` x ${this.gacha_factor} ≈ ${this.gacha_factor*t} `+e:"");let a=this.gacha_factor.toFixed(1);return a.endsWith(".0")&&(a=a.substring(0,a.length-2)),this.item_name+" x "+a}get is_ap(){return this.price<0}get is_gold(){return 0<this.price}get is_gacha(){return 0!==this.gacha_factor}item_name;price;gacha_factor}a.ItemSource=u;class m{id=0;name_kr="";name_en="";name_shop="";useType="";maxUse=0;hidden=!1;resist="";character="Niki";part="Hat";level=0;str=0;sta=0;dex=0;wil=0;hp=0;quickslots=0;buffslots=0;smash=0;movement=0;charge=0;lob=0;serve=0;max_str=0;max_sta=0;max_dex=0;max_wil=0;element_enchantable=!1;parcel_enabled=!1;parcel_from_shop=!1;spin=0;atss=0;dfss=0;socket=0;gauge=0;gauge_battle=0;sources=[]}a.Item=m;let h=new Map,f=new Map,g=[];async function s(e,t=void 0,a=void 0){var r=e.slice(e.lastIndexOf("/")+1),n=document.getElementById("loading"),n=(n instanceof HTMLElement&&(n.textContent=`Loading ${r}, please wait...`),document.getElementById("progressbar")),r=(n instanceof HTMLProgressElement&&(t&&(n.value=t),a)&&(n.max=a),await fetch(e));return r.ok?r.text():""}},{"./html":2}],4:[function(e,t,a){"use strict";var p=e("./checkboxTree"),u=e("./itemLookup"),i=e("./html");const l=["All","Niki","LunLun","Lucy","Shua","Dhanpir","Pochi","Al"],d=["Parts",["Head",["Hat","Hair","Dye"],"Upper","Lower","Legs",["Shoes","Socks"],"Aux",["Hand","Backpack","Face"],"Racket"]],m=["Availability",["Shop",["Gold","AP"],"Allow gacha","-Guardian","Parcel enabled","Parcel disabled","Exclude unavailable items","Exclude statless items"]];!function(){const t=document.getElementById("characterFilters");if(t){let e=!0;for(const c of l){var a="characterSelectors_"+c,r=(0,i.createHTML)(["input",{id:a,type:"radio",name:"characterSelectors",value:c}]);r.addEventListener("input",f),t.appendChild(r),t.appendChild((0,i.createHTML)(["label",{for:a},c])),t.appendChild((0,i.createHTML)(["br"])),e&&(r.checked=!0,e=!1)}var n,s;for([n,s]of[[d,"partsFilter"],[m,"availabilityFilter"]]){const t=document.getElementById(s);if(!t)return;var o=(0,p.makeCheckboxTree)(n);o.addEventListener("change",f),t.innerText="",t.appendChild(o)}}}();let r;function h(e,t){return e==t?0:e<t?-1:1}function f(){const e=[],a=[];for(const s of document.getElementsByName("characterSelectors")){if(!(s instanceof HTMLInputElement))throw"Internal error";if(s.checked){const o=s.value;"All"!==o&&e.push(e=>e.character===o);break}}{var t=document.getElementById("partsFilter")?.children[0];if(!(t instanceof HTMLUListElement))throw"Internal error";const c=(0,p.getLeafStates)(t);e.push(e=>c[e.part])}t=document.getElementById("availabilityFilter")?.children[0];if(!(t instanceof HTMLUListElement))throw"Internal error";t=(0,p.getLeafStates)(t);t.Gold||a.push(e=>!e.is_gold),t.AP||a.push(e=>!e.is_ap),t["Parcel enabled"]||e.push(e=>!e.parcel_enabled),t["Parcel disabled"]||e.push(e=>e.parcel_enabled),t["Allow gacha"]||a.push(e=>!e.is_gacha),t["Exclude statless items"]&&e.push(e=>!!(e.buffslots||e.charge||e.dex||e.hp||e.lob||e.movement||e.quickslots||e.serve||e.smash||e.sta||e.str||e.wil)),t["Exclude unavailable items"]&&e.push(e=>0<e.sources.filter(t=>a.every(e=>e(t))).length);{t=document.getElementById("levelrange");if(!(t instanceof HTMLInputElement))throw"Internal error";const i=parseInt(t.value);e.push(e=>e.level<=i);t=document.getElementById("nameFilter");if(!(t instanceof HTMLInputElement))throw"Internal error";const l=t.value;l&&e.push(e=>e.name_en.toLowerCase().includes(l.toLowerCase()))}const r=[];t=document.getElementById("priority list");if(!(t instanceof HTMLOListElement))throw"Internal error";for(const d of Array.from(t.childNodes).filter(e=>!e.textContent?.includes("\n")).map(e=>e.textContent))switch(d){case"Movement Speed":r.push((e,t)=>h(e.movement,t.movement));break;case"Charge":r.push((e,t)=>h(e.charge,t.charge));break;case"Lob":r.push((e,t)=>h(e.lob,t.lob));break;case"Str":r.push((e,t)=>h(e.str,t.str));break;case"Dex":r.push((e,t)=>h(e.dex,t.dex));break;case"Sta":r.push((e,t)=>h(e.sta,t.sta));break;case"Will":r.push((e,t)=>h(e.wil,t.wil));break;case"Serve":r.push((e,t)=>h(e.serve,t.serve));break;case"Quickslots":r.push((e,t)=>h(e.quickslots,t.quickslots));break;case"Buffslots":r.push((e,t)=>h(e.buffslots,t.buffslots));break;case"HP":r.push((e,t)=>h(e.hp,t.hp))}var t=(0,u.getResultsTable)(t=>e.every(e=>e(t)),t=>a.every(e=>e(t)),(e,t)=>{if(0===e.length)return[t];for(const a of r)switch(a(e[0],t)){case-1:return[t];case 1:return e}return[...e,t]}),n=document.getElementById("results");n&&(n.innerText="",n.appendChild(t))}document.addEventListener("dragstart",({target:e})=>{e instanceof HTMLElement&&(r=e)}),document.addEventListener("dragover",e=>{e.preventDefault()}),document.addEventListener("drop",({target:e})=>{var t,a;e instanceof HTMLElement&&"dropzone"==e.className&&e!==r&&r.parentNode===e.parentNode&&(a=(t=Array.from(r.parentNode?.children??new HTMLCollection)).indexOf(r),r.remove(),a>t.indexOf(e)?e.before(r):e.after(r),f())}),(0,u.downloadItems)().then(()=>{for(const t of document.getElementsByClassName("show_after_load"))t instanceof HTMLElement&&(t.hidden=!1);for(const a of document.getElementsByClassName("hide_after_load"))a instanceof HTMLElement&&(a.style.display="none");var e=document.getElementById("levelrange");if(!(e instanceof HTMLInputElement))throw"Internal error";e.max=""+(0,u.getMaxItemLevel)(),e.value=e.max,e.dispatchEvent(new Event("input")),f()});{const n=document.getElementById("levelDisplay");if(!(n instanceof HTMLLabelElement))throw"Internal error";const s=document.getElementById("levelrange");if(!(s instanceof HTMLInputElement))throw"Internal error";e=()=>{n.textContent="Max level requirement: "+s.value,f()};s.addEventListener("input",e),e()}if(!((e=document.getElementById("nameFilter"))instanceof HTMLElement))throw"Internal error";e.addEventListener("input",f)},{"./checkboxTree":1,"./html":2,"./itemLookup":3}]},{},[4]);

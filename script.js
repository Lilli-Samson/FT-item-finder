!function r(n,s,c){function o(t,e){if(!s[t]){if(!n[t]){var a="function"==typeof require&&require;if(!e&&a)return a(t,!0);if(i)return i(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}a=s[t]={exports:{}},n[t][0].call(a.exports,function(e){return o(n[t][1][e]||e)},a,a.exports,r,n,s,c)}return s[t].exports}for(var i="function"==typeof require&&require,e=0;e<c.length;e++)o(c[e]);return o}({1:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getLeafStates=function e(t){let a={};for(const r of t.children){const n=r.children[0];n instanceof HTMLInputElement?0===s(n).length&&(a[n.id.replaceAll("_"," ")]=n.checked):n instanceof HTMLUListElement&&(a={...a,...e(n)})}return a},a.makeCheckboxTree=function(e){e=function t(a){{if("string"==typeof a){let e=!1;"-"===a[0]&&(a=a.substring(1),e=!0);const r=(0,c.createHTML)(["li",(0,c.createHTML)(["input",{type:"checkbox",id:a.replaceAll(" ","_"),checked:"checked"}]),(0,c.createHTML)(["label",{for:a.replaceAll(" ","_")},a])]);return e&&r.classList.add("disabled"),r}{const n=(0,c.createHTML)(["ul",{class:"checkbox"}]);for(let e=0;e<a.length;e++){const s=a[e];n.appendChild(t(s))}return(0,c.createHTML)(["li",n])}}}(e).children[0];if(e instanceof HTMLUListElement)return function e(t){for(const a of t.children)a instanceof HTMLLIElement?r(a.children[0]):a instanceof HTMLUListElement&&e(a)}(e),e;throw"Internal error"};var c=e("./html");function s(e){var t=e.parentElement;if(t instanceof HTMLLIElement){var a=t.parentElement;if(a instanceof HTMLUListElement)for(let e=0;e<a.children.length;e++)if(a.children[e]===t){var r=a.children[e+1]?.children[0];if(r instanceof HTMLUListElement)return Array.from(r.children).filter(e=>e instanceof HTMLLIElement&&e.children[0]instanceof HTMLInputElement).map(e=>e.children[0]);break}}return[]}function o(r){r=function(t){var a=t.parentElement?.parentElement?.parentElement;if(a instanceof HTMLLIElement){t=a.parentElement;if(t instanceof HTMLUListElement){let e;for(const r of t.children)if(r instanceof HTMLLIElement&&r.children[0]instanceof HTMLInputElement)e=r;else if(r===a&&e)return e.children[0]}}}(r);if(r){let e=!1,t=!1,a=!1;for(const n of s(r))n.checked?e=!0:t=!0,n.indeterminate&&(a=!0);a||e&&t?r.indeterminate=!0:e?(r.checked=!0,r.indeterminate=!1):t&&(r.checked=!1,r.indeterminate=!1),o(r)}}function r(e){e.addEventListener("change",function(e){e=e.target;e instanceof HTMLInputElement&&(!function e(t){for(const a of s(t))a.checked!==t.checked&&(a.checked=t.checked,a.indeterminate=!1,e(a))}(e),o(e))})}},{"./html":2}],2:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.createHTML=function a(t){const r=document.createElement(t[0]);function n(e){if("string"==typeof e||e instanceof HTMLElement)r.append(e);else if(Array.isArray(e))r.append(a(e));else for(const t in e)r.setAttribute(t,e[t])}for(let e=1;e<t.length;e++)n(t[e]);return r}},{}],3:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ItemSource=a.Item=void 0,a.downloadItems=async function(){let e=1;var t=await c("https://raw.githubusercontent.com/sstokic-tgm/JFTSE/development/auth-server/src/main/resources/res/Item_Parts_Ini3.xml",e++),a=await c("https://raw.githubusercontent.com/sstokic-tgm/JFTSE/development/auth-server/src/main/resources/res/Shop_Ini3.xml",e++),r=await c("https://raw.githubusercontent.com/sstokic-tgm/JFTSE/development/emulator/src/main/resources/res//GuardianStages.json",e++);(function(e){e.length<1e3&&console.warn(`Items file is only ${e.length} bytes long`);for(var[,t]of e.matchAll(/\<Item (.*)\/\>/g)){var a,r,n=new v;for([,a,r]of t.matchAll(/\s?([^=]*)="([^"]*)"/g))switch(a){case"Index":n.id=parseInt(r);break;case"_Name_":n.name_kr=r;break;case"Name_N":n.name_en=r;break;case"UseType":n.useType=r;break;case"MaxUse":n.maxUse=parseInt(r);break;case"Hide":n.hidden=!!parseInt(r);break;case"Resist":n.resist=r;break;case"Char":switch(r){case"NIKI":n.character="Niki";break;case"LUNLUN":n.character="LunLun";break;case"LUCY":n.character="Lucy";break;case"SHUA":n.character="Shua";break;case"DHANPIR":n.character="Dhanpir";break;case"POCHI":n.character="Pochi";break;case"AL":n.character="Al";break;default:console.warn(`Found unknown character "${r}"`)}break;case"Part":switch(String(r)){case"BAG":n.part="Backpack";break;case"GLASSES":n.part="Face";break;case"HAND":n.part="Hand";break;case"SOCKS":n.part="Socks";break;case"FOOT":n.part="Shoes";break;case"CAP":n.part="Hat";break;case"PANTS":n.part="Lower";break;case"RACKET":n.part="Racket";break;case"BODY":n.part="Upper";break;case"HAIR":n.part="Hair";break;case"DYE":n.part="Dye";break;default:console.warn("Found unknown part "+r)}break;case"Level":n.level=parseInt(r);break;case"STR":n.str=parseInt(r);break;case"STA":n.sta=parseInt(r);break;case"DEX":n.dex=parseInt(r);break;case"WIL":n.wil=parseInt(r);break;case"AddHP":n.hp=parseInt(r);break;case"AddQuick":n.quickslots=parseInt(r);break;case"AddBuff":n.buffslots=parseInt(r);break;case"SmashSpeed":n.smash=parseInt(r);break;case"MoveSpeed":n.movement=parseInt(r);break;case"ChargeshotSpeed":n.charge=parseInt(r);break;case"LobSpeed":n.lob=parseInt(r);break;case"ServeSpeed":n.serve=parseInt(r);break;case"MAX_STR":n.max_str=parseInt(r);break;case"MAX_STA":n.max_sta=parseInt(r);break;case"MAX_DEX":n.max_dex=parseInt(r);break;case"MAX_WIL":n.max_wil=parseInt(r);break;case"EnchantElement":n.element_enchantable=!!parseInt(r);break;case"EnableParcel":n.parcel_enabled=!!parseInt(r);break;case"BallSpin":n.spin=parseInt(r);break;case"ATSS":n.atss=parseInt(r);break;case"DFSS":n.dfss=parseInt(r);break;case"Socket":n.socket=parseInt(r);break;case"Gauge":n.gauge=parseInt(r);break;case"GaugeBattle":n.gauge_battle=parseInt(r);break;default:console.warn(`Found unknown item attribute "${a}"`)}L.set(n.id,n)}})(t),function(e){e.length<1e3&&console.warn(`Shop file is only ${e.length} bytes long`);let t=0,a=0;for(const d of e.matchAll(/<Product DISPLAY="\d+" HIT_DISPLAY="\d+" Index="(?<index>\d+)" Enable="(?<enabled>0|1)" New="\d+" Hit="\d+" Free="\d+" Sale="\d+" Event="\d+" Couple="\d+" Nobuy="\d+" Rand="[^"]+" UseType="[^"]+" Use0="\d+" Use1="\d+" Use2="\d+" PriceType="(?<price_type>(?:MINT)|(?:GOLD))" OldPrice0="-?\d+" OldPrice1="-?\d+" OldPrice2="-?\d+" Price0="(?<price>-?\d+)" Price1="-?\d+" Price2="-?\d+" CouplePrice="-?\d+" Category="(?<category>[^"]*)" Name="(?<name>[^"]*)" GoldBack="-?\d+" EnableParcel="(?<parcel_from_shop>0|1)" Char="-?\d+" Item0="(?<item0>-?\d+)" Item1="(?<item1>-?\d+)" Item2="(?<item2>-?\d+)" Item3="(?<item3>-?\d+)" Item4="(?<item4>-?\d+)" Item5="(?<item5>-?\d+)" Item6="(?<item6>-?\d+)" Item7="(?<item7>-?\d+)" Item8="(?<item8>-?\d+)" Item9="(?<item9>-?\d+)" ?(?:Icon="[^"]*" ?)?(?:Name_kr="[^"]*" ?)?(?:Name_en="(?<name_en>[^"]*)" ?)?(?:Name_th="[^"]*" ?)?\/>/g))if(d.groups){var r=parseInt(d.groups.index),n=(a,a=r,d.groups.name),s=d.groups.category,n=("LOTTERY"===s&&k.set(r,new b(r,parseInt(d.groups.item0),n)),!!parseInt(d.groups.enabled)),c="MINT"===d.groups.price_type?"ap":"GOLD"===d.groups.price_type?"gold":"none",o=parseInt(d.groups.price),i=(parseInt(d.groups.parcel_from_shop),[parseInt(d.groups.item0),parseInt(d.groups.item1),parseInt(d.groups.item2),parseInt(d.groups.item3),parseInt(d.groups.item4),parseInt(d.groups.item5),parseInt(d.groups.item6),parseInt(d.groups.item7),parseInt(d.groups.item8),parseInt(d.groups.item9)].filter(e=>!!e&&L.get(e)).map(e=>L.get(e)));if("PARTS"===s){var l=_.forShop(r,o,"ap"==c);if(1===i.length)I.set(r,i[0]),n&&i[0].sources.push(l);else{var u=new v,m=(u.name_en=d.groups.name_en||d.groups.name,I.set(r,u),n&&u.sources.push(l),_.forSet(r,i));for(const p of i)p.sources.push(m)}}else"LOTTERY"===s?((u=new v).name_en=d.groups.name_en||d.groups.name,I.set(r,u),n&&u.sources.push(_.forShop(r,o,"ap"==c))):((l=new v).name_en=d.groups.name_en||d.groups.name,I.set(r,l));t++}console.log(`Found ${t} shop items`)}(a),function(e){e=JSON.parse(e);if(Array.isArray(e))for(const n of e)if("object"==typeof n){var t=n.Name;if("string"==typeof t){var a,r=n.Rewards;if(Array.isArray(r))for(const s of r)"number"==typeof s&&(a=I.get(s))&&a.sources.push(_.forGuardian(t))}}}(r),console.log(`Found ${k.size} gachas`);for(var[,n]of k){var s=`https://raw.githubusercontent.com/sstokic-tgm/JFTSE/development/game-server/src/main/resources/res/lottery/Ini3_Lot_${(""+n.gacha_index).padStart(2,"0")}.xml`;try{!function(e,t){for(const c of e.split("\n"))if(c.includes("<LotteryItem_")){var a,r=c.match(/\s*<LotteryItem_(?<character>[^ ]*) Index="\d+" _Name_="[^"]*" ShopIndex="(?<shop_id>\d+)" QuantityMin="\d+" QuantityMax="\d+" ChansPer="(?<probability>\d+\.?\d*)\s*" Effect="\d+" ProductOpt="\d+"\/>/);if(r){if(r.groups){let e=r.groups.character;g(e="Lunlun"===e?"LunLun":e)?(a=I.get(parseInt(r.groups.shop_id)))?t.add(a,parseFloat(r.groups.probability),e):console.warn(`Found unknown shop item id ${r.groups.shop_id} in lottery file `+t.gacha_index):console.warn(`Found unknown character "${e}" in lottery file `+t.gacha_index)}}else console.warn(`Failed parsing gacha ${t.gacha_index}:
`+c)}for(var[,n]of t.shop_items)for(var[s]of n)s.sources.push(_.forGacha(t.shop_index))}(await c(s,e++,k.size+3),n)}catch(e){console.warn(`Failed downloading ${s} because `+e)}}console.log(`Loaded ${L.size} items`)},a.getMaxItemLevel=function(){let e=0;for(var[,t]of L)e=Math.max(e,t.level);return e},a.getResultsTable=function(e,t,a,r){var n={Hat:[],Hair:[],Dye:[],Upper:[],Lower:[],Shoes:[],Socks:[],Hand:[],Backpack:[],Face:[],Racket:[]};for(var[,s]of L)e(s)&&(n[s.part]=a(n[s.part],s));var c=(0,h.createHTML)(["table",["tr",["th",{class:"Name_column"},"Name"],["th",{class:"ID_column numeric"},"ID"],["th",{class:"Character_column"},"Character"],["th",{class:"Part_column"},"Part"],["th",{class:"Str_column numeric"},"Str"],["th",{class:"Sta_column numeric"},"Sta"],["th",{class:"Dex_column numeric"},"Dex"],["th",{class:"Wil_column numeric"},"Wil"],["th",{class:"Smash_column numeric"},"Smash"],["th",{class:"Movement_column numeric"},"Movement"],["th",{class:"Charge_column numeric"},"Charge"],["th",{class:"Lob_column numeric"},"Lob"],["th",{class:"Serve_column numeric"},"Serve"],["th",{class:"HP_column numeric"},"HP"],["th",{class:"Level_column numeric"},"Level"],["th",{class:"Source_column"},"Source"]]]),o={characters:new Set,Str:0,Sta:0,Dex:0,Wil:0,Smash:0,Movement:0,Charge:0,Lob:0,Serve:0,HP:0,Level:0};for(const i of Object.values(n))if(0!==i.length){o.Str+=i[0].str,o.Sta+=i[0].sta,o.Dex+=i[0].dex,o.Wil+=i[0].wil,o.Smash+=i[0].smash,o.Movement+=i[0].movement,o.Charge+=i[0].charge,o.Lob+=i[0].lob,o.Serve+=i[0].serve,o.HP+=i[0].hp,o.Level=Math.max(i[0].level,o.Level);for(const l of i)for(const u of l.character?[l.character]:f)o.characters.add(u),c.appendChild(function(t,e,a){e=t.sources.filter(e).map(e=>function t(e,a,r){switch(a.type){case"gacha":const n=a.item.sources.map(e=>t(a.item,e,r));return(0,h.createHTML)(["a",M(e,a,r),["a"," x ",T(a.gachaTries(e,r))],0===n.length?"":" from ",...S(n)]);case"shop":const s=a.price+" "+(a.ap?"AP":"Gold");return(0,h.createHTML)(["a","Shop "+s]);case"guardian":return(0,h.createHTML)(["a",a.guardian_map]);case"set":const c=a.item.sources.map(e=>t(a.item,e,r));return(0,h.createHTML)(["a",y(e,a),0===c.length?"":" from ",...S(c)])}}(t,e,a)),e=(0,h.createHTML)(["tr",["td",{class:"Name_column"},function(e,t){return(0,h.createHTML)(["div",(0,h.createHTML)(["button",{class:"item_removal","data-item_index":""+t},"X"]),e])}(t.name_en,t.id)],["td",{class:"ID_column numeric"},""+t.id],["td",{class:"Character_column"},t.character??"All"],["td",{class:"Part_column"},t.part],["td",{class:"Str_column numeric"},""+t.str],["td",{class:"Sta_column numeric"},""+t.sta],["td",{class:"Dex_column numeric"},""+t.dex],["td",{class:"Wil_column numeric"},""+t.wil],["td",{class:"Smash_column numeric"},""+t.smash],["td",{class:"Movement_column numeric"},""+t.movement],["td",{class:"Charge_column numeric"},""+t.charge],["td",{class:"Lob_column numeric"},""+t.lob],["td",{class:"Serve_column numeric"},""+t.serve],["td",{class:"HP_column numeric"},""+t.hp],["td",{class:"Level_column numeric"},""+t.level],["td",{class:"Source_column"},...S(e)]]);return e}(l,t,g(r)?r:void 0))}if(1===o.characters.size){c.appendChild((0,h.createHTML)(["tr",["td",{class:"total Name_column"},"Total:"],["td",{class:"total ID_column numeric"}],["td",{class:"total Character_column"}],["td",{class:"total Part_column"}],["td",{class:"total Str_column numeric"},""+o.Str],["td",{class:"total Sta_column numeric"},""+o.Sta],["td",{class:"total Dex_column numeric"},""+o.Dex],["td",{class:"total Wil_column numeric"},""+o.Wil],["td",{class:"total Smash_column numeric"},""+o.Smash],["td",{class:"total Movement_column numeric"},""+o.Movement],["td",{class:"total Charge_column numeric"},""+o.Charge],["td",{class:"total Lob_column numeric"},""+o.Lob],["td",{class:"total Serve_column numeric"},""+o.Serve],["td",{class:"total HP_column numeric"},""+o.HP],["td",{class:"total Level_column numeric"},""+o.Level],["td",{class:"total Source_column"}]]));for(const m of c.getElementsByClassName("Character_column"))m instanceof HTMLElement&&(m.hidden=!0)}for(const d of["Str","Sta","Dex","Wil","Smash","Movement","Charge","Lob","Serve","HP"])if(0===o[d])for(const p of c.getElementsByClassName(d+"_column"))p instanceof HTMLElement&&(p.hidden=!0);return c},a.shop_items=a.items=void 0;var h=e("./html");const f=["Niki","LunLun","Lucy","Shua","Dhanpir","Pochi","Al"];function g(e){return f.includes(e)}class _{type;shop_id;price;ap;guardian_map;items;constructor(e,t,a,r,n="",s=[]){this.type=e,this.shop_id=t,this.price=a,this.ap=r,this.guardian_map=n,this.items=s}static forShop(e,t,a){return new _("shop",e,t,a)}static forSet(e,t){return new _("set",e,0,!1,"",t)}static forGacha(e){return new _("gacha",e,0,!1)}static forGuardian(e){return new _("guardian",0,0,!1,e)}get requiresAP(){return this.ap&&!!this.price}get requiresGold(){return!this.ap&&!!this.price}get requiresGuardian(){switch(this.type){case"guardian":return!0;case"shop":return!1;case"gacha":case"set":return!this.item.sources.every(e=>e.requiresGuardian)}}get is_parcel_enabled(){return this.item.parcel_enabled}get item(){var e=I.get(this.shop_id);if(e)return e;throw console.error("Failed finding item of itemSource "+this.shop_id),"Internal error"}gachaTries(e,t){var a=k.get(this.shop_id);if(a)return a.average_tries(e,t);throw"Internal error"}}a.ItemSource=_;class v{id=0;name_kr="";name_en="";useType="";maxUse=0;hidden=!1;resist="";character;part="Hat";level=0;str=0;sta=0;dex=0;wil=0;hp=0;quickslots=0;buffslots=0;smash=0;movement=0;charge=0;lob=0;serve=0;max_str=0;max_sta=0;max_dex=0;max_wil=0;element_enchantable=!1;parcel_enabled=!1;parcel_from_shop=!1;spin=0;atss=0;dfss=0;socket=0;gauge=0;gauge_battle=0;sources=[]}a.Item=v;class b{shop_index;gacha_index;name;constructor(e,t,a){this.shop_index=e,this.gacha_index=t,this.name=a;for(const r of f)this.shop_items.set(r,new Map)}add(e,t,a){e.character&&e.character!==a&&(a=e.character),this.shop_items.get(a).set(e,t),this.character_probability.set(a,t+(this.character_probability.get(a)||0))}average_tries(a,e=void 0){var e=e?[e]:f,t=e.reduce((e,t)=>e+(this.shop_items.get(t).get(a)||0),0);return 0===t?0:e.reduce((e,t)=>e+this.character_probability.get(t),0)/t}character_probability=new Map;shop_items=new Map}let L=new Map,I=(a.items=L,new Map),k=(a.shop_items=I,new Map),r;function i(e,t){let a=e.toFixed(t);for(;a.endsWith("0");)a=a.slice(0,-1);return a=a.endsWith(".")?a.slice(0,-1):a}async function c(e,t=void 0,a=void 0){var r=e.slice(e.lastIndexOf("/")+1),n=document.getElementById("loading"),n=(n instanceof HTMLElement&&(n.textContent=`Loading ${r}, please wait...`),document.getElementById("progressbar")),r=(n instanceof HTMLProgressElement&&(t&&(n.value=t),a)&&(n.max=a),await fetch(e));return r.ok?r.text():""}function l(e,a){e=(0,h.createHTML)(["a",{class:"popup_link"},e]);return e.addEventListener("click",e=>{var t;e instanceof MouseEvent&&(t=document.getElementById("top_div"))instanceof HTMLDivElement&&(e.stopPropagation(),r&&(r.close(),r.remove()),r=Array.isArray(a)?(0,h.createHTML)(["dialog",...a]):(0,h.createHTML)(["dialog",a]),t.appendChild(r),r.style.position="absolute",r.style.top=e.pageY+"px",r.style.left=e.pageX-300+"px",r.show())}),e}function T(e){var t,a=(0,h.createHTML)(["table",["tr",["th","Number of gachas"],["th","Chance for item"]]]);for(const n of[.1,.5,1,2,5,10]){var r=Math.round(e*n);0!==r&&a.appendChild((0,h.createHTML)(["tr",["td",{class:"numeric"},""+r],["td",{class:"numeric"},(100*(t=1/e,1-Math.pow(1-t,r))).toFixed(4)+"%"]]))}return a.appendChild((0,h.createHTML)(["tr"])),l(""+i(e,2),a)}function M(e,t,a){var r=(0,h.createHTML)(["table",["tr",["th","Item"],["th","Average Tries"]]]),n=k.get(t.shop_id);if(!n)throw"Internal error";for(const o of void 0===a?f:[a]){var s=n.shop_items.get(o);if(s)for(var[c]of s)r.appendChild((0,h.createHTML)(["tr",e===c?{class:"highlighted"}:"",["td",c.name_en],["td",{class:"numeric"},""+i(n.average_tries(c,a),2)]]))}return l(t.item.name_en,[(0,h.createHTML)(["a",n.name]),r])}function y(e,t){var a=(0,h.createHTML)(["table",["tr",["th","Contents"]]]);for(const r of t.items)a.appendChild((0,h.createHTML)(["tr",r===e?{class:"highlighted"}:"",["td",r.name_en]]));return l(t.item.name_en,[(0,h.createHTML)(["a",t.item.name_en,a])])}function S(e){var t=[];let a=!0;for(const r of e)a?a=!1:t.push((0,h.createHTML)(["a",", "])),t.push(r);return t}document.body.addEventListener("click",e=>{r&&r!==e.target&&(r.close(),r.remove(),r=void 0)})},{"./html":2}],4:[function(e,t,a){"use strict";var f=e("./checkboxTree"),g=e("./itemLookup"),_=e("./html");const i=["All","Niki","LunLun","Lucy","Shua","Dhanpir","Pochi","Al"],l=["Parts",["Head",["Hat","Hair","Dye"],"Upper","Lower","Legs",["Shoes","Socks"],"Aux",["Hand","Backpack","Face"],"Racket"]],u=["Availability",["Shop",["Gold","AP"],"Allow gacha","Guardian","Parcel enabled","Parcel disabled","Exclude statless items","Exclude unavailable items"]],v=new Set;!function(){const t=document.getElementById("characterFilters");if(t){let e=!0;for(const o of i){var a="characterSelectors_"+o,r=(0,_.createHTML)(["input",{id:a,type:"radio",name:"characterSelectors",value:o}]);r.addEventListener("input",m),t.appendChild(r),t.appendChild((0,_.createHTML)(["label",{for:a},o])),t.appendChild((0,_.createHTML)(["br"])),e&&(r.checked=!0,e=!1)}var n,s;for([n,s]of[[l,"partsFilter"],[u,"availabilityFilter"]]){const t=document.getElementById(s);if(!t)return;var c=(0,f.makeCheckboxTree)(n);c.addEventListener("change",m),t.innerText="",t.appendChild(c)}}}();let r;function b(e,t){return e==t?0:e<t?-1:1}function m(){const e=[],r=[];let t="";for(const i of document.getElementsByName("characterSelectors")){if(!(i instanceof HTMLInputElement))throw"Internal error";if(i.checked){"All"!==(t=i.value)&&e.push(e=>e.character===t);break}}{var a=document.getElementById("partsFilter")?.children[0];if(!(a instanceof HTMLUListElement))throw"Internal error";const l=(0,f.getLeafStates)(a);e.push(e=>l[e.part])}a=document.getElementById("availabilityFilter")?.children[0];if(!(a instanceof HTMLUListElement))throw"Internal error";a=(0,f.getLeafStates)(a);if(a.Gold||r.push(e=>!e.requiresGold),a.AP||r.push(e=>!e.requiresAP),a["Parcel enabled"]||e.push(e=>!e.parcel_enabled),a["Parcel disabled"]||e.push(e=>e.parcel_enabled),a["Allow gacha"]||r.push(e=>"gacha"!==e.type),a["Exclude statless items"]&&e.push(e=>!!(e.buffslots||e.charge||e.dex||e.hp||e.lob||e.movement||e.quickslots||e.serve||e.smash||e.sta||e.str||e.wil)),a.Guardian||r.push(e=>!e.requiresGuardian),a["Exclude unavailable items"])e.push(function e(t){for(const a of t.sources)if((t=>r.every(e=>e(t)))(a)){if("gacha"===a.type){if(!e(a.item))continue}else if("set"===a.type&&!e(a.item))continue;return!0}return!1});{a=document.getElementById("levelrange");if(!(a instanceof HTMLInputElement))throw"Internal error";const u=parseInt(a.value);e.push(e=>e.level<=u);a=document.getElementById("nameFilter");if(!(a instanceof HTMLInputElement))throw"Internal error";const m=a.value;m&&e.push(e=>e.name_en.toLowerCase().includes(m.toLowerCase()))}e.push(e=>!v.has(e.id));var n=document.getElementById("itemFilter");if(!(n instanceof HTMLDivElement))throw"Internal error";for(const d of n.children)d.remove();for(const p of v){var s=g.items.get(p);s&&n.appendChild((0,_.createHTML)(["div",(0,_.createHTML)(["button",{class:"item_removal_removal","data-item_index":""+p},"X"]),s.name_en]))}const c=[];a=document.getElementById("priority_list");if(!(a instanceof HTMLOListElement))throw"Internal error";for(const h of Array.from(a.childNodes).filter(e=>!e.textContent?.includes("\n")).map(e=>e.textContent))switch(h){case"Movement Speed":c.push((e,t)=>b(e.movement,t.movement));break;case"Charge":c.push((e,t)=>b(e.charge,t.charge));break;case"Lob":c.push((e,t)=>b(e.lob,t.lob));break;case"Str":c.push((e,t)=>b(e.str,t.str));break;case"Dex":c.push((e,t)=>b(e.dex,t.dex));break;case"Sta":c.push((e,t)=>b(e.sta,t.sta));break;case"Will":c.push((e,t)=>b(e.wil,t.wil));break;case"Serve":c.push((e,t)=>b(e.serve,t.serve));break;case"Quickslots":c.push((e,t)=>b(e.quickslots,t.quickslots));break;case"Buffslots":c.push((e,t)=>b(e.buffslots,t.buffslots));break;case"HP":c.push((e,t)=>b(e.hp,t.hp))}var a=(0,g.getResultsTable)(t=>e.every(e=>e(t)),t=>r.every(e=>e(t)),(e,t)=>{if(0===e.length)return[t];for(const a of c)switch(a(e[0],t)){case-1:return[t];case 1:return e}return[...e,t]},t),o=document.getElementById("results");o&&(o.innerText="",o.appendChild(a))}document.addEventListener("dragstart",({target:e})=>{e instanceof HTMLElement&&(r=e)}),document.addEventListener("dragover",e=>{e.preventDefault()}),document.addEventListener("drop",({target:e})=>{var t,a;e instanceof HTMLElement&&"dropzone"==e.className&&e!==r&&r.parentNode===e.parentNode&&(a=(t=Array.from(r.parentNode?.children??new HTMLCollection)).indexOf(r),r.remove(),a>t.indexOf(e)?e.before(r):e.after(r),m())});{const n=document.getElementById("levelDisplay");if(!(n instanceof HTMLLabelElement))throw"Internal error";const s=document.getElementById("levelrange");if(!(s instanceof HTMLInputElement))throw"Internal error";e=()=>{n.textContent="Max level requirement: "+s.value,m()};s.addEventListener("input",e),e()}if(!((e=document.getElementById("nameFilter"))instanceof HTMLElement))throw"Internal error";e.addEventListener("input",m),window.addEventListener("load",async()=>{await(0,g.downloadItems)();for(const t of document.getElementsByClassName("show_after_load"))t instanceof HTMLElement&&(t.hidden=!1);for(const a of document.getElementsByClassName("hide_after_load"))a instanceof HTMLElement&&(a.style.display="none");var e=document.getElementById("levelrange");if(!(e instanceof HTMLInputElement))throw"Internal error";e.max=""+(0,g.getMaxItemLevel)(),e.value=e.max,e.dispatchEvent(new Event("input")),m()}),document.body.addEventListener("click",e=>{e.target instanceof HTMLElement&&("item_removal"===e.target.className?e.target.dataset.item_index&&(v.add(parseInt(e.target.dataset.item_index)),m()):"item_removal_removal"===e.target.className&&e.target.dataset.item_index&&(v.delete(parseInt(e.target.dataset.item_index)),m()))})},{"./checkboxTree":1,"./html":2,"./itemLookup":3}]},{},[4]);

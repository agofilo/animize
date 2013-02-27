goog.provide('c2.dom');
goog.require('cljs.core');
goog.require('goog.style');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('singult.core');
goog.require('clojure.string');
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
return cljs.core.array_seq.call(null,array,0);
});
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
return cljs.core.array_seq.call(null,array,0);
});
Node.prototype.cljs$core$IHash$ = true;
Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (x){
return x;
});
void 0;
void 0;c2.dom.IDom = {};
c2.dom.__GT_dom = (function __GT_dom(x){
if((function (){var and__3822__auto____22901 = x;
if(and__3822__auto____22901)
{return x.c2$dom$IDom$__GT_dom$arity$1;
} else
{return and__3822__auto____22901;
}
})())
{return x.c2$dom$IDom$__GT_dom$arity$1(x);
} else
{return (function (){var or__3824__auto____22902 = (c2.dom.__GT_dom[goog.typeOf(x)]);
if(or__3824__auto____22902)
{return or__3824__auto____22902;
} else
{var or__3824__auto____22903 = (c2.dom.__GT_dom["_"]);
if(or__3824__auto____22903)
{return or__3824__auto____22903;
} else
{throw cljs.core.missing_protocol.call(null,"IDom.->dom",x);
}
}
})().call(null,x);
}
});
void 0;cljs.core.PersistentVector.prototype.c2$dom$IDom$ = true;
cljs.core.PersistentVector.prototype.c2$dom$IDom$__GT_dom$arity$1 = (function (v){
return singult.core.render.call(null,v);
});
Node.prototype.c2$dom$IDom$ = true;
Node.prototype.c2$dom$IDom$__GT_dom$arity$1 = (function (node){
return node;
});
(c2.dom.IDom["string"] = true);
(c2.dom.__GT_dom["string"] = (function (selector){
return c2.dom.select.call(null,selector);
}));
/**
* Select a single DOM node via CSS selector, optionally scoped by second arg.
*/
c2.dom.select = (function() {
var select = null;
var select__1 = (function (selector){
return document.querySelector(selector);
});
var select__2 = (function (selector,container){
return c2.dom.__GT_dom.call(null,container).querySelector(selector);
});
select = function(selector,container){
switch(arguments.length){
case 1:
return select__1.call(this,selector);
case 2:
return select__2.call(this,selector,container);
}
throw('Invalid arity: ' + arguments.length);
};
select.cljs$lang$arity$1 = select__1;
select.cljs$lang$arity$2 = select__2;
return select;
})()
;
/**
* Like select, but returns a collection of nodes.
*/
c2.dom.select_all = (function() {
var select_all = null;
var select_all__1 = (function (selector){
return document.querySelectorAll(selector);
});
var select_all__2 = (function (selector,container){
return c2.dom.__GT_dom.call(null,container).querySelectorAll(selector);
});
select_all = function(selector,container){
switch(arguments.length){
case 1:
return select_all__1.call(this,selector);
case 2:
return select_all__2.call(this,selector,container);
}
throw('Invalid arity: ' + arguments.length);
};
select_all.cljs$lang$arity$1 = select_all__1;
select_all.cljs$lang$arity$2 = select_all__2;
return select_all;
})()
;
/**
* Does live `node` match CSS `selector`?
*/
c2.dom.matches_selector_QMARK_ = (function matches_selector_QMARK_(node,selector){
return node.webkitMatchesSelector(selector);
});
/**
* Return the children of a live DOM element.
*/
c2.dom.children = (function children(node){
return c2.dom.__GT_dom.call(null,node).children;
});
/**
* Return parent of a live DOM node.
*/
c2.dom.parent = (function parent(node){
return c2.dom.__GT_dom.call(null,node).parentNode;
});
/**
* Make element last child of container.
* Returns live child.
*/
c2.dom.append_BANG_ = (function append_BANG_(container,el){
var el__22905 = c2.dom.__GT_dom.call(null,el);
goog.dom.appendChild(c2.dom.__GT_dom.call(null,container),el__22905);
return el__22905;
});
/**
* Make element first child of container.
* Returns live DOM child.
*/
c2.dom.prepend_BANG_ = (function prepend_BANG_(container,el){
var el__22907 = c2.dom.__GT_dom.call(null,el);
goog.dom.insertChildAt(c2.dom.__GT_dom.call(null,container),el__22907,0);
return el__22907;
});
/**
* Remove element from DOM and return it.
* > *el* CSS selector or live DOM node
*/
c2.dom.remove_BANG_ = (function remove_BANG_(el){
return goog.dom.removeNode(c2.dom.__GT_dom.call(null,el));
});
/**
* Replace live DOM node with a new one, returning the latter.
* > *old* CSS selector or live DOM node
* > *new* CSS selector, live DOM node, or hiccup vector
*/
c2.dom.replace_BANG_ = (function replace_BANG_(old,new$){
var new__22909 = c2.dom.__GT_dom.call(null,new$);
goog.dom.replaceNode(new__22909,c2.dom.__GT_dom.call(null,old));
return new__22909;
});
/**
* Get or set inline element style.
* 
* `(style el)`                map of inline element styles
* 
* `(style el :keyword)`       value of style :keyword
* 
* `(style el {:keyword val})` sets inline style according to map, returns element
* 
* `(style el :keyword val)`   sets single style, returns element
*/
c2.dom.style = (function() {
var style = null;
var style__1 = (function (el){
throw (new Error("TODO: return map of element styles"));
});
var style__2 = (function (el,x){
var el__22942 = c2.dom.__GT_dom.call(null,el);
try{if(cljs.core.keyword_QMARK_.call(null,x))
{var k__22967 = x;
return goog.style.getComputedStyle(el__22942,cljs.core.name.call(null,k__22967));
} else
{if("\uFDD0'else")
{throw 0;
} else
{return null;
}
}
}catch (e__21540__auto__){if((e__21540__auto__ === 0))
{try{if(cljs.core.map_QMARK_.call(null,x))
{var m__22947 = x;
var G__22948__22949 = cljs.core.seq.call(null,m__22947);
if(G__22948__22949)
{var G__22951__22953 = cljs.core.first.call(null,G__22948__22949);
var vec__22952__22954 = G__22951__22953;
var k__22955 = cljs.core.nth.call(null,vec__22952__22954,0,null);
var v__22956 = cljs.core.nth.call(null,vec__22952__22954,1,null);
var G__22948__22957 = G__22948__22949;
var G__22951__22958 = G__22951__22953;
var G__22948__22959 = G__22948__22957;
while(true){
var vec__22960__22961 = G__22951__22958;
var k__22962 = cljs.core.nth.call(null,vec__22960__22961,0,null);
var v__22963 = cljs.core.nth.call(null,vec__22960__22961,1,null);
var G__22948__22964 = G__22948__22959;
style.call(null,el__22942,k__22962,v__22963);
var temp__3974__auto____22965 = cljs.core.next.call(null,G__22948__22964);
if(temp__3974__auto____22965)
{var G__22948__22966 = temp__3974__auto____22965;
{
var G__22974 = cljs.core.first.call(null,G__22948__22966);
var G__22975 = G__22948__22966;
G__22951__22958 = G__22974;
G__22948__22959 = G__22975;
continue;
}
} else
{}
break;
}
} else
{}
return el__22942;
} else
{if("\uFDD0'else")
{throw 0;
} else
{return null;
}
}
}catch (e__21540__auto__){if((e__21540__auto__ === 0))
{var G__22943__22946 = x;
return null;
} else
{throw e__21540__auto__;
}
}} else
{throw e__21540__auto__;
}
}});
var style__3 = (function (el,k,v){
goog.style.setStyle(c2.dom.__GT_dom.call(null,el),cljs.core.name.call(null,k),(function (){try{if(cljs.core.string_QMARK_.call(null,v))
{var s__22973 = v;
return s__22973;
} else
{if("\uFDD0'else")
{throw 0;
} else
{return null;
}
}
}catch (e__21540__auto__){if((e__21540__auto__ === 0))
{try{if(cljs.core.number_QMARK_.call(null,v))
{var n__22972 = v;
if(cljs.core.truth_(cljs.core.set(["\uFDD0'bottom","\uFDD0'width","\uFDD0'top","\uFDD0'right","\uFDD0'left","\uFDD0'height"]).call(null,cljs.core.keyword.call(null,k))))
{return [cljs.core.str(n__22972),cljs.core.str("px")].join('');
} else
{return n__22972;
}
} else
{if("\uFDD0'else")
{throw 0;
} else
{return null;
}
}
}catch (e__21540__auto__){if((e__21540__auto__ === 0))
{var G__22968__22971 = v;
return null;
} else
{throw e__21540__auto__;
}
}} else
{throw e__21540__auto__;
}
}})());
return el;
});
style = function(el,k,v){
switch(arguments.length){
case 1:
return style__1.call(this,el);
case 2:
return style__2.call(this,el,k);
case 3:
return style__3.call(this,el,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
style.cljs$lang$arity$1 = style__1;
style.cljs$lang$arity$2 = style__2;
style.cljs$lang$arity$3 = style__3;
return style;
})()
;
/**
* Get or set element attributes.
* 
* `(attr el)`                map of element attributes
* 
* `(attr el :keyword)`       value of attr :keyword
* 
* `(attr el {:keyword val})` sets element attributes according to map, returns element
* 
* `(attr el :keyword val)`   sets single attr, returns element
*/
c2.dom.attr = (function() {
var attr = null;
var attr__1 = (function (el){
var attrs__23011 = c2.dom.__GT_dom.call(null,el).attributes;
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2510__auto____23018 = (function iter__23012(s__23013){
return (new cljs.core.LazySeq(null,false,(function (){
var s__23013__23016 = s__23013;
while(true){
if(cljs.core.seq.call(null,s__23013__23016))
{var i__23017 = cljs.core.first.call(null,s__23013__23016);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,(attrs__23011[i__23017]).name),(attrs__23011[i__23017]).value], true),iter__23012.call(null,cljs.core.rest.call(null,s__23013__23016)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2510__auto____23018.call(null,cljs.core.range.call(null,attrs__23011.length));
})());
});
var attr__2 = (function (el,x){
var el__23019 = c2.dom.__GT_dom.call(null,el);
try{if(cljs.core.keyword_QMARK_.call(null,x))
{var k__23044 = x;
return el__23019.getAttribute(cljs.core.name.call(null,k__23044));
} else
{if("\uFDD0'else")
{throw 0;
} else
{return null;
}
}
}catch (e__21540__auto__){if((e__21540__auto__ === 0))
{try{if(cljs.core.map_QMARK_.call(null,x))
{var m__23024 = x;
var G__23025__23026 = cljs.core.seq.call(null,m__23024);
if(G__23025__23026)
{var G__23028__23030 = cljs.core.first.call(null,G__23025__23026);
var vec__23029__23031 = G__23028__23030;
var k__23032 = cljs.core.nth.call(null,vec__23029__23031,0,null);
var v__23033 = cljs.core.nth.call(null,vec__23029__23031,1,null);
var G__23025__23034 = G__23025__23026;
var G__23028__23035 = G__23028__23030;
var G__23025__23036 = G__23025__23034;
while(true){
var vec__23037__23038 = G__23028__23035;
var k__23039 = cljs.core.nth.call(null,vec__23037__23038,0,null);
var v__23040 = cljs.core.nth.call(null,vec__23037__23038,1,null);
var G__23025__23041 = G__23025__23036;
attr.call(null,el__23019,k__23039,v__23040);
var temp__3974__auto____23042 = cljs.core.next.call(null,G__23025__23041);
if(temp__3974__auto____23042)
{var G__23025__23043 = temp__3974__auto____23042;
{
var G__23046 = cljs.core.first.call(null,G__23025__23043);
var G__23047 = G__23025__23043;
G__23028__23035 = G__23046;
G__23025__23036 = G__23047;
continue;
}
} else
{}
break;
}
} else
{}
return el__23019;
} else
{if("\uFDD0'else")
{throw 0;
} else
{return null;
}
}
}catch (e__21540__auto__){if((e__21540__auto__ === 0))
{var G__23020__23023 = x;
return null;
} else
{throw e__21540__auto__;
}
}} else
{throw e__21540__auto__;
}
}});
var attr__3 = (function (el,k,v){
var el__23045 = c2.dom.__GT_dom.call(null,el);
if((v == null))
{el__23045.removeAttribute(cljs.core.name.call(null,k));
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'style",k))
{c2.dom.style.call(null,el__23045,v);
} else
{el__23045.setAttribute(cljs.core.name.call(null,k),v);
}
}
return el__23045;
});
attr = function(el,k,v){
switch(arguments.length){
case 1:
return attr__1.call(this,el);
case 2:
return attr__2.call(this,el,k);
case 3:
return attr__3.call(this,el,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
attr.cljs$lang$arity$1 = attr__1;
attr.cljs$lang$arity$2 = attr__2;
attr.cljs$lang$arity$3 = attr__3;
return attr;
})()
;
/**
* Get or set element text, returning element
*/
c2.dom.text = (function() {
var text = null;
var text__1 = (function (el){
return goog.dom.getTextContent(c2.dom.__GT_dom.call(null,el));
});
var text__2 = (function (el,v){
var el__23049 = c2.dom.__GT_dom.call(null,el);
goog.dom.setTextContent(el__23049,v);
return el__23049;
});
text = function(el,v){
switch(arguments.length){
case 1:
return text__1.call(this,el);
case 2:
return text__2.call(this,el,v);
}
throw('Invalid arity: ' + arguments.length);
};
text.cljs$lang$arity$1 = text__1;
text.cljs$lang$arity$2 = text__2;
return text;
})()
;
/**
* Get or set element value.
*/
c2.dom.val = (function() {
var val = null;
var val__1 = (function (el){
return goog.dom.forms.getValue(c2.dom.__GT_dom.call(null,el));
});
var val__2 = (function (el,v){
var el__23051 = c2.dom.__GT_dom.call(null,el);
goog.dom.forms.setValue(el__23051,v);
return el__23051;
});
val = function(el,v){
switch(arguments.length){
case 1:
return val__1.call(this,el);
case 2:
return val__2.call(this,el,v);
}
throw('Invalid arity: ' + arguments.length);
};
val.cljs$lang$arity$1 = val__1;
val.cljs$lang$arity$2 = val__2;
return val;
})()
;
/**
* Add or remove `class` to element based on boolean `classed?`, returning element.
*/
c2.dom.classed_BANG_ = (function classed_BANG_(el,class$,classed_QMARK_){
return goog.dom.classes.enable(c2.dom.__GT_dom.call(null,el),cljs.core.name.call(null,class$),classed_QMARK_);
});
c2.dom.add_class_BANG_ = (function add_class_BANG_(el,class$){
return c2.dom.classed_BANG_.call(null,el,class$,true);
});
c2.dom.remove_class_BANG_ = (function remove_class_BANG_(el,class$){
return c2.dom.classed_BANG_.call(null,el,class$,false);
});
c2.dom.request_animation_frame = (function (){var or__3824__auto____23053 = window.requestAnimationFrame;
if(cljs.core.truth_(or__3824__auto____23053))
{return or__3824__auto____23053;
} else
{var or__3824__auto____23054 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3824__auto____23054))
{return or__3824__auto____23054;
} else
{return (function (p1__23052_SHARP_){
return setTimeout((function (){
return p1__23052_SHARP_.call(null);
}),10);
});
}
}
})();

goog.provide('c2.svg');
goog.require('cljs.core');
goog.require('c2.core');
goog.require('c2.maths');
goog.require('c2.dom');
/**
* Convert coordinates (potentially map of `{:x :y}`) to 2-vector.
*/
c2.svg.__GT_xy = (function __GT_xy(coordinates){
try{if(cljs.core.vector_QMARK_.call(null,coordinates))
{try{if((function (){var and__3822__auto____23378 = cljs.core.vector_QMARK_.call(null,coordinates);
if(and__3822__auto____23378)
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,coordinates),2);
} else
{return and__3822__auto____23378;
}
})())
{var x__23379 = cljs.core.nth.call(null,coordinates,0);
var y__23380 = cljs.core.nth.call(null,coordinates,1);
return cljs.core.PersistentVector.fromArray([x__23379,y__23380], true);
} else
{if("\uFDD0'else")
{throw 0;
} else
{return null;
}
}
}catch (e__21540__auto__){if((e__21540__auto__ === 0))
{throw 0;
} else
{throw e__21540__auto__;
}
}} else
{if((function (){var G__23381__23382 = coordinates;
if(G__23381__23382)
{if((function (){var or__3824__auto____23383 = (G__23381__23382.cljs$lang$protocol_mask$partition0$ & 256);
if(or__3824__auto____23383)
{return or__3824__auto____23383;
} else
{return G__23381__23382.cljs$core$ILookup$;
}
})())
{return true;
} else
{if((!G__23381__23382.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ILookup,G__23381__23382);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ILookup,G__23381__23382);
}
})())
{var y__23385 = (function (){var val__21107__auto____23384 = cljs.core._lookup.call(null,coordinates,"\uFDD0'y","\uFDD0'clojure.core.match/not-found");
if(cljs.core._EQ_.call(null,val__21107__auto____23384,"\uFDD0'clojure.core.match/not-found"))
{throw 0;
} else
{return val__21107__auto____23384;
}
})();
var x__23387 = (function (){var val__21107__auto____23386 = cljs.core._lookup.call(null,coordinates,"\uFDD0'x","\uFDD0'clojure.core.match/not-found");
if(cljs.core._EQ_.call(null,val__21107__auto____23386,"\uFDD0'clojure.core.match/not-found"))
{throw 0;
} else
{return val__21107__auto____23386;
}
})();
return cljs.core.PersistentVector.fromArray([x__23387,y__23385], true);
} else
{if("\uFDD0'else")
{throw 0;
} else
{return null;
}
}
}
}catch (e__21540__auto__){if((e__21540__auto__ === 0))
{var G__23370__23376 = coordinates;
return null;
} else
{throw e__21540__auto__;
}
}});
c2.svg.translate = (function translate(coordinates){
var vec__23392__23393 = c2.svg.__GT_xy.call(null,coordinates);
var x__23394 = cljs.core.nth.call(null,vec__23392__23393,0,null);
var y__23395 = cljs.core.nth.call(null,vec__23392__23393,1,null);
return [cljs.core.str("translate("),cljs.core.str(x__23394),cljs.core.str(","),cljs.core.str(y__23395),cljs.core.str(")")].join('');
});
c2.svg.scale = (function scale(coordinates){
while(true){
if(cljs.core.vector_QMARK_.call(null,coordinates))
{if((function (){var and__3822__auto____23417 = cljs.core.vector_QMARK_.call(null,coordinates);
if(and__3822__auto____23417)
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,coordinates),2);
} else
{return and__3822__auto____23417;
}
})())
{var x__23418 = cljs.core.nth.call(null,coordinates,0);
var y__23419 = cljs.core.nth.call(null,coordinates,1);
return [cljs.core.str("scale("),cljs.core.str(x__23418),cljs.core.str(","),cljs.core.str(y__23419),cljs.core.str(")")].join('');
} else
{if("\uFDD0'else")
{throw (new java.lang.Exception([cljs.core.str("No match found. "),cljs.core.str("Followed "),cljs.core.str(1),cljs.core.str(" branches."),cljs.core.str(" Breadcrumbs: "),cljs.core.str(cljs.core.vec([cljs.core.list("\uFDD1'clojure.core/vector?","\uFDD1'coordinates")]))].join('')));
} else
{return null;
}
}
} else
{if((function (){var G__23420__23421 = coordinates;
if(G__23420__23421)
{if((function (){var or__3824__auto____23422 = (G__23420__23421.cljs$lang$protocol_mask$partition0$ & 256);
if(or__3824__auto____23422)
{return or__3824__auto____23422;
} else
{return G__23420__23421.cljs$core$ILookup$;
}
})())
{return true;
} else
{if((!G__23420__23421.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ILookup,G__23420__23421);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ILookup,G__23420__23421);
}
})())
{var y__23424 = (function (){var val__21107__auto____23423 = cljs.core._lookup.call(null,coordinates,"\uFDD0'y","\uFDD0'clojure.core.match/not-found");
if(cljs.core._EQ_.call(null,val__21107__auto____23423,"\uFDD0'clojure.core.match/not-found"))
{throw 0;
} else
{return val__21107__auto____23423;
}
})();
var x__23426 = (function (){var val__21107__auto____23425 = cljs.core._lookup.call(null,coordinates,"\uFDD0'x","\uFDD0'clojure.core.match/not-found");
if(cljs.core._EQ_.call(null,val__21107__auto____23425,"\uFDD0'clojure.core.match/not-found"))
{throw 0;
} else
{return val__21107__auto____23425;
}
})();
{
var G__23428 = cljs.core.PersistentVector.fromArray([x__23426,y__23424], true);
coordinates = G__23428;
continue;
}
} else
{if("\uFDD0'else")
{var s__23427 = coordinates;
return [cljs.core.str("scale("),cljs.core.str(s__23427),cljs.core.str(")")].join('');
} else
{return null;
}
}
}
break;
}
});
c2.svg.rotate = (function() {
var rotate = null;
var rotate__1 = (function (angle){
return rotate.call(null,angle,cljs.core.PersistentVector.fromArray([0,0], true));
});
var rotate__2 = (function (angle,coordinates){
var vec__23433__23434 = c2.svg.__GT_xy.call(null,coordinates);
var x__23435 = cljs.core.nth.call(null,vec__23433__23434,0,null);
var y__23436 = cljs.core.nth.call(null,vec__23433__23434,1,null);
return [cljs.core.str("rotate("),cljs.core.str(angle),cljs.core.str(","),cljs.core.str(x__23435),cljs.core.str(","),cljs.core.str(y__23436),cljs.core.str(")")].join('');
});
rotate = function(angle,coordinates){
switch(arguments.length){
case 1:
return rotate__1.call(this,angle);
case 2:
return rotate__2.call(this,angle,coordinates);
}
throw('Invalid arity: ' + arguments.length);
};
rotate.cljs$lang$arity$1 = rotate__1;
rotate.cljs$lang$arity$2 = rotate__2;
return rotate;
})()
;
/**
* Returns map of `{:x :y :width :height}` containing SVG element bounding box.
* All coordinates are in userspace. Ref [SVG spec](http://www.w3.org/TR/SVG/types.html#InterfaceSVGLocatable)
*/
c2.svg.get_bounds = (function get_bounds($svg_el){
var b__23438 = $svg_el.getBBox();
return cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'width","\uFDD0'height"],{"\uFDD0'x":b__23438.x,"\uFDD0'y":b__23438.y,"\uFDD0'width":b__23438.width,"\uFDD0'height":b__23438.height});
});
/**
* Returns a transform string that will scale and center provided element `{:width :height :x :y}` within container `{:width :height}`.
*/
c2.svg.transform_to_center = (function transform_to_center(element,container){
var map__23452__23454 = element;
var map__23452__23455 = ((cljs.core.seq_QMARK_.call(null,map__23452__23454))?cljs.core.apply.call(null,cljs.core.hash_map,map__23452__23454):map__23452__23454);
var ew__23456 = cljs.core._lookup.call(null,map__23452__23455,"\uFDD0'width",null);
var eh__23457 = cljs.core._lookup.call(null,map__23452__23455,"\uFDD0'height",null);
var x__23458 = cljs.core._lookup.call(null,map__23452__23455,"\uFDD0'x",null);
var y__23459 = cljs.core._lookup.call(null,map__23452__23455,"\uFDD0'y",null);
var map__23453__23460 = container;
var map__23453__23461 = ((cljs.core.seq_QMARK_.call(null,map__23453__23460))?cljs.core.apply.call(null,cljs.core.hash_map,map__23453__23460):map__23453__23460);
var w__23462 = cljs.core._lookup.call(null,map__23453__23461,"\uFDD0'width",null);
var h__23463 = cljs.core._lookup.call(null,map__23453__23461,"\uFDD0'height",null);
var s__23464 = (((h__23463 / eh__23457) < (w__23462 / ew__23456)) ? (h__23463 / eh__23457) : (w__23462 / ew__23456));
return [cljs.core.str(c2.svg.translate.call(null,cljs.core.PersistentVector.fromArray([((w__23462 / 2) - (s__23464 * (ew__23456 / 2))),((h__23463 / 2) - (s__23464 * (eh__23457 / 2)))], true))),cljs.core.str(" "),cljs.core.str(c2.svg.scale.call(null,s__23464)),cljs.core.str(" "),cljs.core.str(c2.svg.translate.call(null,cljs.core.PersistentVector.fromArray([(- x__23458),(- y__23459)], true)))].join('');
});
/**
* Scales and centers `$svg-el` within its parent SVG container.
* Uses parent's width and height attributes only.
*/
c2.svg.transform_to_center_BANG_ = (function transform_to_center_BANG_($svg_el){
var $svg__23467 = $svg_el.ownerSVGElement;
var t__23468 = c2.svg.transform_to_center.call(null,c2.svg.get_bounds.call(null,$svg_el),cljs.core.ObjMap.fromObject(["\uFDD0'width","\uFDD0'height"],{"\uFDD0'width":parseFloat(c2.dom.attr.call(null,$svg__23467,"\uFDD0'width")),"\uFDD0'height":parseFloat(c2.dom.attr.call(null,$svg__23467,"\uFDD0'height"))}));
return c2.dom.attr.call(null,$svg_el,"\uFDD0'transform",t__23468);
});
/**
* Returns axis <g> hiccup vector for provided input `scale` and collection of `ticks` (numbers).
* Direction away from the data frame is defined to be positive; use negative margins and widths to render axis inside of data frame.
* 
* Kwargs:
* 
* > *:orientation* &in; (`:top`, `:bottom`, `:left`, `:right`), where the axis should be relative to the data frame, defaults to `:left`
* 
* > *:formatter* fn run on tick values, defaults to `str`
* 
* > *:major-tick-width* width of ticks (minor ticks not yet implemented), defaults to 6
* 
* > *:text-margin* distance between axis and start of text, defaults to 9
* 
* > *:label* axis label, centered on axis; :left and :right orientation labels are rotated by +/- pi/2, respectively
* 
* > *:label-margin* distance between axis and label, defaults to 28
* @param {...*} var_args
*/
c2.svg.axis = (function() { 
var axis__delegate = function (scale,ticks,p__23469){
var map__23494__23495 = p__23469;
var map__23494__23496 = ((cljs.core.seq_QMARK_.call(null,map__23494__23495))?cljs.core.apply.call(null,cljs.core.hash_map,map__23494__23495):map__23494__23495);
var label_margin__23497 = cljs.core._lookup.call(null,map__23494__23496,"\uFDD0'label-margin",28);
var label__23498 = cljs.core._lookup.call(null,map__23494__23496,"\uFDD0'label",null);
var text_margin__23499 = cljs.core._lookup.call(null,map__23494__23496,"\uFDD0'text-margin",9);
var major_tick_width__23500 = cljs.core._lookup.call(null,map__23494__23496,"\uFDD0'major-tick-width",6);
var formatter__23501 = cljs.core._lookup.call(null,map__23494__23496,"\uFDD0'formatter",cljs.core.str);
var orientation__23502 = cljs.core._lookup.call(null,map__23494__23496,"\uFDD0'orientation","\uFDD0'left");
var vec__23503__23506 = (function (){var G__23504__23505 = orientation__23502;
if(cljs.core._EQ_.call(null,"\uFDD0'bottom",G__23504__23505))
{return cljs.core.PersistentVector.fromArray(["\uFDD0'y","\uFDD0'x","\uFDD0'y1","\uFDD0'y2","\uFDD0'x1","\uFDD0'x2"], true);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'top",G__23504__23505))
{return cljs.core.PersistentVector.fromArray(["\uFDD0'y","\uFDD0'x","\uFDD0'y1","\uFDD0'y2","\uFDD0'x1","\uFDD0'x2"], true);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'right",G__23504__23505))
{return cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'x1","\uFDD0'x2","\uFDD0'y1","\uFDD0'y2"], true);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'left",G__23504__23505))
{return cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'x1","\uFDD0'x2","\uFDD0'y1","\uFDD0'y2"], true);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation__23502)].join('')));
} else
{return null;
}
}
}
}
}
})();
var x__23507 = cljs.core.nth.call(null,vec__23503__23506,0,null);
var y__23508 = cljs.core.nth.call(null,vec__23503__23506,1,null);
var x1__23509 = cljs.core.nth.call(null,vec__23503__23506,2,null);
var x2__23510 = cljs.core.nth.call(null,vec__23503__23506,3,null);
var y1__23511 = cljs.core.nth.call(null,vec__23503__23506,4,null);
var y2__23512 = cljs.core.nth.call(null,vec__23503__23506,5,null);
var parity__23515 = (function (){var G__23513__23514 = orientation__23502;
if(cljs.core._EQ_.call(null,"\uFDD0'bottom",G__23513__23514))
{return 1;
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'right",G__23513__23514))
{return 1;
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'top",G__23513__23514))
{return -1;
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'left",G__23513__23514))
{return -1;
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation__23502)].join('')));
} else
{return null;
}
}
}
}
}
})();
return cljs.core.PersistentVector.fromArray(["\uFDD0'g",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":[cljs.core.str("axis "),cljs.core.str(cljs.core.name.call(null,orientation__23502))].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'line.rule",cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,cljs.core.PersistentVector.fromArray([y1__23511,y2__23512], true),(new cljs.core.Keyword("\uFDD0'range")).call(null,scale)))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'g.ticks",c2.core.unify.call(null,ticks,(function (d){
return cljs.core.PersistentVector.fromArray(["\uFDD0'g.tick.major-tick",cljs.core.ObjMap.fromObject(["\uFDD0'transform"],{"\uFDD0'transform":c2.svg.translate.call(null,cljs.core.PersistentArrayMap.fromArrays([x__23507,y__23508],[0,scale.call(null,d)]))}),cljs.core.PersistentVector.fromArray(["\uFDD0'text",cljs.core.PersistentArrayMap.fromArrays([x__23507],[(parity__23515 * text_margin__23499)]),formatter__23501.call(null,d)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'line",cljs.core.PersistentArrayMap.fromArrays([x1__23509,x2__23510],[0,(parity__23515 * major_tick_width__23500)])], true)], true);
}))], true),(cljs.core.truth_(label__23498)?cljs.core.PersistentVector.fromArray(["\uFDD0'text.label",cljs.core.ObjMap.fromObject(["\uFDD0'transform"],{"\uFDD0'transform":[cljs.core.str(c2.svg.translate.call(null,cljs.core.PersistentArrayMap.fromArrays([x__23507,y__23508],[(parity__23515 * label_margin__23497),c2.maths.mean.call(null,(new cljs.core.Keyword("\uFDD0'range")).call(null,scale))]))),cljs.core.str(" "),cljs.core.str((function (){var G__23516__23517 = orientation__23502;
if(cljs.core._EQ_.call(null,"\uFDD0'right",G__23516__23517))
{return c2.svg.rotate.call(null,90);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'left",G__23516__23517))
{return c2.svg.rotate.call(null,-90);
} else
{if("\uFDD0'else")
{return "";
} else
{return null;
}
}
}
})())].join('')}),label__23498], true):null)], true);
};
var axis = function (scale,ticks,var_args){
var p__23469 = null;
if (goog.isDef(var_args)) {
  p__23469 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return axis__delegate.call(this, scale, ticks, p__23469);
};
axis.cljs$lang$maxFixedArity = 2;
axis.cljs$lang$applyTo = (function (arglist__23518){
var scale = cljs.core.first(arglist__23518);
var ticks = cljs.core.first(cljs.core.next(arglist__23518));
var p__23469 = cljs.core.rest(cljs.core.next(arglist__23518));
return axis__delegate(scale, ticks, p__23469);
});
axis.cljs$lang$arity$variadic = axis__delegate;
return axis;
})()
;
c2.svg.ArcMax = (c2.maths.Tau - 1.0E-7);
/**
* Calculate SVG path data for a circle of `radius` starting at 3 o'clock and sweeping in positive y.
*/
c2.svg.circle = (function() {
var circle = null;
var circle__1 = (function (radius){
return circle.call(null,cljs.core.PersistentVector.fromArray([0,0], true),radius);
});
var circle__2 = (function (coordinates,radius){
var vec__23523__23524 = c2.svg.__GT_xy.call(null,coordinates);
var x__23525 = cljs.core.nth.call(null,vec__23523__23524,0,null);
var y__23526 = cljs.core.nth.call(null,vec__23523__23524,1,null);
return [cljs.core.str("M"),cljs.core.str((x__23525 + radius)),cljs.core.str(","),cljs.core.str(y__23526),cljs.core.str("A"),cljs.core.str((x__23525 + radius)),cljs.core.str(","),cljs.core.str((y__23526 + radius)),cljs.core.str(" 0 1,1"),cljs.core.str((- (x__23525 + radius))),cljs.core.str(","),cljs.core.str(y__23526),cljs.core.str("A"),cljs.core.str((x__23525 + radius)),cljs.core.str(","),cljs.core.str((y__23526 + radius)),cljs.core.str(" 0 1,1"),cljs.core.str((x__23525 + radius)),cljs.core.str(","),cljs.core.str(y__23526)].join('');
});
circle = function(coordinates,radius){
switch(arguments.length){
case 1:
return circle__1.call(this,coordinates);
case 2:
return circle__2.call(this,coordinates,radius);
}
throw('Invalid arity: ' + arguments.length);
};
circle.cljs$lang$arity$1 = circle__1;
circle.cljs$lang$arity$2 = circle__2;
return circle;
})()
;
/**
* Calculate SVG path data for an arc.
* @param {...*} var_args
*/
c2.svg.arc = (function() { 
var arc__delegate = function (p__23527){
var map__23548__23549 = p__23527;
var map__23548__23550 = ((cljs.core.seq_QMARK_.call(null,map__23548__23549))?cljs.core.apply.call(null,cljs.core.hash_map,map__23548__23549):map__23548__23549);
var angle_offset__23551 = cljs.core._lookup.call(null,map__23548__23550,"\uFDD0'angle-offset",0);
var end_angle__23552 = cljs.core._lookup.call(null,map__23548__23550,"\uFDD0'end-angle",c2.maths.Pi);
var start_angle__23553 = cljs.core._lookup.call(null,map__23548__23550,"\uFDD0'start-angle",0);
var outer_radius__23554 = cljs.core._lookup.call(null,map__23548__23550,"\uFDD0'outer-radius",1);
var inner_radius__23555 = cljs.core._lookup.call(null,map__23548__23550,"\uFDD0'inner-radius",0);
var r0__23557 = inner_radius__23555;
var r1__23558 = outer_radius__23554;
var vec__23556__23559 = cljs.core.sort.call(null,cljs.core.PersistentVector.fromArray([(angle_offset__23551 + start_angle__23553),(angle_offset__23551 + end_angle__23552)], true));
var a0__23560 = cljs.core.nth.call(null,vec__23556__23559,0,null);
var a1__23561 = cljs.core.nth.call(null,vec__23556__23559,1,null);
var da__23562 = (a1__23561 - a0__23560);
var large_arc_flag__23563 = (((da__23562 < c2.maths.Pi))?"0":"1");
var s0__23564 = c2.maths.sin.call(null,a0__23560);
var c0__23565 = c2.maths.cos.call(null,a0__23560);
var s1__23566 = c2.maths.sin.call(null,a1__23561);
var c1__23567 = c2.maths.cos.call(null,a1__23561);
if((da__23562 >= c2.svg.ArcMax))
{return [cljs.core.str("M0,"),cljs.core.str(r1__23558),cljs.core.str("A"),cljs.core.str(r1__23558),cljs.core.str(","),cljs.core.str(r1__23558),cljs.core.str(" 0 1,1 0,"),cljs.core.str((- r1__23558)),cljs.core.str("A"),cljs.core.str(r1__23558),cljs.core.str(","),cljs.core.str(r1__23558),cljs.core.str(" 0 1,1 0,"),cljs.core.str(r1__23558),cljs.core.str(((cljs.core.not_EQ_.call(null,0,r0__23557))?[cljs.core.str("M0,"),cljs.core.str(r0__23557),cljs.core.str("A"),cljs.core.str(r0__23557),cljs.core.str(","),cljs.core.str(r0__23557),cljs.core.str(" 0 1,0 0,"),cljs.core.str((- r0__23557)),cljs.core.str("A"),cljs.core.str(r0__23557),cljs.core.str(","),cljs.core.str(r0__23557),cljs.core.str(" 0 1,0 0,"),cljs.core.str(r0__23557)].join(''):null)),cljs.core.str("Z")].join('');
} else
{return [cljs.core.str("M"),cljs.core.str((r1__23558 * c0__23565)),cljs.core.str(","),cljs.core.str((r1__23558 * s0__23564)),cljs.core.str("A"),cljs.core.str(r1__23558),cljs.core.str(","),cljs.core.str(r1__23558),cljs.core.str(" 0 "),cljs.core.str(large_arc_flag__23563),cljs.core.str(",1 "),cljs.core.str((r1__23558 * c1__23567)),cljs.core.str(","),cljs.core.str((r1__23558 * s1__23566)),cljs.core.str(((cljs.core.not_EQ_.call(null,0,r0__23557))?[cljs.core.str("L"),cljs.core.str((r0__23557 * c1__23567)),cljs.core.str(","),cljs.core.str((r0__23557 * s1__23566)),cljs.core.str("A"),cljs.core.str(r0__23557),cljs.core.str(","),cljs.core.str(r0__23557),cljs.core.str(" 0 "),cljs.core.str(large_arc_flag__23563),cljs.core.str(",0 "),cljs.core.str((r0__23557 * c0__23565)),cljs.core.str(","),cljs.core.str((r0__23557 * s0__23564))].join(''):"L0,0")),cljs.core.str("Z")].join('');
}
};
var arc = function (var_args){
var p__23527 = null;
if (goog.isDef(var_args)) {
  p__23527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return arc__delegate.call(this, p__23527);
};
arc.cljs$lang$maxFixedArity = 0;
arc.cljs$lang$applyTo = (function (arglist__23568){
var p__23527 = cljs.core.seq(arglist__23568);;
return arc__delegate(p__23527);
});
arc.cljs$lang$arity$variadic = arc__delegate;
return arc;
})()
;

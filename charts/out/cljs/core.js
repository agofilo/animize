goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
void 0;/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
if((p[goog.typeOf(x)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
void 0;cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__6094__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6094 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6094__delegate.call(this, array, i, idxs);
};
G__6094.cljs$lang$maxFixedArity = 2;
G__6094.cljs$lang$applyTo = (function (arglist__6095){
var array = cljs.core.first(arglist__6095);
var i = cljs.core.first(cljs.core.next(arglist__6095));
var idxs = cljs.core.rest(cljs.core.next(arglist__6095));
return G__6094__delegate(array, i, idxs);
});
G__6094.cljs$lang$arity$variadic = G__6094__delegate;
return G__6094;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
void 0;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
void 0;cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____6159 = this$;
if(and__3822__auto____6159)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6159;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____6160 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6160)
{return or__3824__auto____6160;
} else
{var or__3824__auto____6161 = (cljs.core._invoke["_"]);
if(or__3824__auto____6161)
{return or__3824__auto____6161;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6162 = this$;
if(and__3822__auto____6162)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6162;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____6163 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6163)
{return or__3824__auto____6163;
} else
{var or__3824__auto____6164 = (cljs.core._invoke["_"]);
if(or__3824__auto____6164)
{return or__3824__auto____6164;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6165 = this$;
if(and__3822__auto____6165)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6165;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____6166 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6166)
{return or__3824__auto____6166;
} else
{var or__3824__auto____6167 = (cljs.core._invoke["_"]);
if(or__3824__auto____6167)
{return or__3824__auto____6167;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6168 = this$;
if(and__3822__auto____6168)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6168;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____6169 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6169)
{return or__3824__auto____6169;
} else
{var or__3824__auto____6170 = (cljs.core._invoke["_"]);
if(or__3824__auto____6170)
{return or__3824__auto____6170;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6171 = this$;
if(and__3822__auto____6171)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6171;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____6172 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6172)
{return or__3824__auto____6172;
} else
{var or__3824__auto____6173 = (cljs.core._invoke["_"]);
if(or__3824__auto____6173)
{return or__3824__auto____6173;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6174 = this$;
if(and__3822__auto____6174)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6174;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____6175 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6175)
{return or__3824__auto____6175;
} else
{var or__3824__auto____6176 = (cljs.core._invoke["_"]);
if(or__3824__auto____6176)
{return or__3824__auto____6176;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6177 = this$;
if(and__3822__auto____6177)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6177;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____6178 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6178)
{return or__3824__auto____6178;
} else
{var or__3824__auto____6179 = (cljs.core._invoke["_"]);
if(or__3824__auto____6179)
{return or__3824__auto____6179;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6180 = this$;
if(and__3822__auto____6180)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6180;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____6181 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6181)
{return or__3824__auto____6181;
} else
{var or__3824__auto____6182 = (cljs.core._invoke["_"]);
if(or__3824__auto____6182)
{return or__3824__auto____6182;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6183 = this$;
if(and__3822__auto____6183)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6183;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____6184 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6184)
{return or__3824__auto____6184;
} else
{var or__3824__auto____6185 = (cljs.core._invoke["_"]);
if(or__3824__auto____6185)
{return or__3824__auto____6185;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6186 = this$;
if(and__3822__auto____6186)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6186;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____6187 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6187)
{return or__3824__auto____6187;
} else
{var or__3824__auto____6188 = (cljs.core._invoke["_"]);
if(or__3824__auto____6188)
{return or__3824__auto____6188;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6189 = this$;
if(and__3822__auto____6189)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6189;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____6190 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6190)
{return or__3824__auto____6190;
} else
{var or__3824__auto____6191 = (cljs.core._invoke["_"]);
if(or__3824__auto____6191)
{return or__3824__auto____6191;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6192 = this$;
if(and__3822__auto____6192)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6192;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____6193 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6193)
{return or__3824__auto____6193;
} else
{var or__3824__auto____6194 = (cljs.core._invoke["_"]);
if(or__3824__auto____6194)
{return or__3824__auto____6194;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6195 = this$;
if(and__3822__auto____6195)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6195;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____6196 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6196)
{return or__3824__auto____6196;
} else
{var or__3824__auto____6197 = (cljs.core._invoke["_"]);
if(or__3824__auto____6197)
{return or__3824__auto____6197;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6198 = this$;
if(and__3822__auto____6198)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6198;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____6199 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6199)
{return or__3824__auto____6199;
} else
{var or__3824__auto____6200 = (cljs.core._invoke["_"]);
if(or__3824__auto____6200)
{return or__3824__auto____6200;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6201 = this$;
if(and__3822__auto____6201)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6201;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____6202 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6202)
{return or__3824__auto____6202;
} else
{var or__3824__auto____6203 = (cljs.core._invoke["_"]);
if(or__3824__auto____6203)
{return or__3824__auto____6203;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6204 = this$;
if(and__3822__auto____6204)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6204;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____6205 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6205)
{return or__3824__auto____6205;
} else
{var or__3824__auto____6206 = (cljs.core._invoke["_"]);
if(or__3824__auto____6206)
{return or__3824__auto____6206;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6207 = this$;
if(and__3822__auto____6207)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6207;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____6208 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6208)
{return or__3824__auto____6208;
} else
{var or__3824__auto____6209 = (cljs.core._invoke["_"]);
if(or__3824__auto____6209)
{return or__3824__auto____6209;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6210 = this$;
if(and__3822__auto____6210)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6210;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____6211 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6211)
{return or__3824__auto____6211;
} else
{var or__3824__auto____6212 = (cljs.core._invoke["_"]);
if(or__3824__auto____6212)
{return or__3824__auto____6212;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6213 = this$;
if(and__3822__auto____6213)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6213;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____6214 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6214)
{return or__3824__auto____6214;
} else
{var or__3824__auto____6215 = (cljs.core._invoke["_"]);
if(or__3824__auto____6215)
{return or__3824__auto____6215;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6216 = this$;
if(and__3822__auto____6216)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6216;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____6217 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6217)
{return or__3824__auto____6217;
} else
{var or__3824__auto____6218 = (cljs.core._invoke["_"]);
if(or__3824__auto____6218)
{return or__3824__auto____6218;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6219 = this$;
if(and__3822__auto____6219)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6219;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____6220 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6220)
{return or__3824__auto____6220;
} else
{var or__3824__auto____6221 = (cljs.core._invoke["_"]);
if(or__3824__auto____6221)
{return or__3824__auto____6221;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
void 0;void 0;cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6225 = coll;
if(and__3822__auto____6225)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6225;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____6226 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____6226)
{return or__3824__auto____6226;
} else
{var or__3824__auto____6227 = (cljs.core._count["_"]);
if(or__3824__auto____6227)
{return or__3824__auto____6227;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6231 = coll;
if(and__3822__auto____6231)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6231;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____6232 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____6232)
{return or__3824__auto____6232;
} else
{var or__3824__auto____6233 = (cljs.core._empty["_"]);
if(or__3824__auto____6233)
{return or__3824__auto____6233;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6237 = coll;
if(and__3822__auto____6237)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6237;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____6238 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____6238)
{return or__3824__auto____6238;
} else
{var or__3824__auto____6239 = (cljs.core._conj["_"]);
if(or__3824__auto____6239)
{return or__3824__auto____6239;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;void 0;cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6246 = coll;
if(and__3822__auto____6246)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6246;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____6247 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6247)
{return or__3824__auto____6247;
} else
{var or__3824__auto____6248 = (cljs.core._nth["_"]);
if(or__3824__auto____6248)
{return or__3824__auto____6248;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6249 = coll;
if(and__3822__auto____6249)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6249;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____6250 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6250)
{return or__3824__auto____6250;
} else
{var or__3824__auto____6251 = (cljs.core._nth["_"]);
if(or__3824__auto____6251)
{return or__3824__auto____6251;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
void 0;void 0;cljs.core.ASeq = {};
void 0;void 0;cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6255 = coll;
if(and__3822__auto____6255)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6255;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6256 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____6256)
{return or__3824__auto____6256;
} else
{var or__3824__auto____6257 = (cljs.core._first["_"]);
if(or__3824__auto____6257)
{return or__3824__auto____6257;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6261 = coll;
if(and__3822__auto____6261)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6261;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6262 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____6262)
{return or__3824__auto____6262;
} else
{var or__3824__auto____6263 = (cljs.core._rest["_"]);
if(or__3824__auto____6263)
{return or__3824__auto____6263;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6267 = coll;
if(and__3822__auto____6267)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6267;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6268 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____6268)
{return or__3824__auto____6268;
} else
{var or__3824__auto____6269 = (cljs.core._next["_"]);
if(or__3824__auto____6269)
{return or__3824__auto____6269;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6276 = o;
if(and__3822__auto____6276)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6276;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____6277 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6277)
{return or__3824__auto____6277;
} else
{var or__3824__auto____6278 = (cljs.core._lookup["_"]);
if(or__3824__auto____6278)
{return or__3824__auto____6278;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6279 = o;
if(and__3822__auto____6279)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6279;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____6280 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6280)
{return or__3824__auto____6280;
} else
{var or__3824__auto____6281 = (cljs.core._lookup["_"]);
if(or__3824__auto____6281)
{return or__3824__auto____6281;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
void 0;void 0;cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6285 = coll;
if(and__3822__auto____6285)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6285;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6286 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____6286)
{return or__3824__auto____6286;
} else
{var or__3824__auto____6287 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6287)
{return or__3824__auto____6287;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6291 = coll;
if(and__3822__auto____6291)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6291;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____6292 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____6292)
{return or__3824__auto____6292;
} else
{var or__3824__auto____6293 = (cljs.core._assoc["_"]);
if(or__3824__auto____6293)
{return or__3824__auto____6293;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6297 = coll;
if(and__3822__auto____6297)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6297;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6298 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____6298)
{return or__3824__auto____6298;
} else
{var or__3824__auto____6299 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6299)
{return or__3824__auto____6299;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6303 = coll;
if(and__3822__auto____6303)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6303;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____6304 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____6304)
{return or__3824__auto____6304;
} else
{var or__3824__auto____6305 = (cljs.core._key["_"]);
if(or__3824__auto____6305)
{return or__3824__auto____6305;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6309 = coll;
if(and__3822__auto____6309)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6309;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____6310 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____6310)
{return or__3824__auto____6310;
} else
{var or__3824__auto____6311 = (cljs.core._val["_"]);
if(or__3824__auto____6311)
{return or__3824__auto____6311;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6315 = coll;
if(and__3822__auto____6315)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6315;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____6316 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____6316)
{return or__3824__auto____6316;
} else
{var or__3824__auto____6317 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6317)
{return or__3824__auto____6317;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6321 = coll;
if(and__3822__auto____6321)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6321;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____6322 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____6322)
{return or__3824__auto____6322;
} else
{var or__3824__auto____6323 = (cljs.core._peek["_"]);
if(or__3824__auto____6323)
{return or__3824__auto____6323;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6327 = coll;
if(and__3822__auto____6327)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6327;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____6328 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____6328)
{return or__3824__auto____6328;
} else
{var or__3824__auto____6329 = (cljs.core._pop["_"]);
if(or__3824__auto____6329)
{return or__3824__auto____6329;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6333 = coll;
if(and__3822__auto____6333)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6333;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____6334 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____6334)
{return or__3824__auto____6334;
} else
{var or__3824__auto____6335 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6335)
{return or__3824__auto____6335;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6339 = o;
if(and__3822__auto____6339)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6339;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____6340 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____6340)
{return or__3824__auto____6340;
} else
{var or__3824__auto____6341 = (cljs.core._deref["_"]);
if(or__3824__auto____6341)
{return or__3824__auto____6341;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6345 = o;
if(and__3822__auto____6345)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6345;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____6346 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____6346)
{return or__3824__auto____6346;
} else
{var or__3824__auto____6347 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6347)
{return or__3824__auto____6347;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6351 = o;
if(and__3822__auto____6351)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6351;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____6352 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____6352)
{return or__3824__auto____6352;
} else
{var or__3824__auto____6353 = (cljs.core._meta["_"]);
if(or__3824__auto____6353)
{return or__3824__auto____6353;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6357 = o;
if(and__3822__auto____6357)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6357;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____6358 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____6358)
{return or__3824__auto____6358;
} else
{var or__3824__auto____6359 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6359)
{return or__3824__auto____6359;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;void 0;cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6366 = coll;
if(and__3822__auto____6366)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6366;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____6367 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6367)
{return or__3824__auto____6367;
} else
{var or__3824__auto____6368 = (cljs.core._reduce["_"]);
if(or__3824__auto____6368)
{return or__3824__auto____6368;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6369 = coll;
if(and__3822__auto____6369)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6369;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____6370 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6370)
{return or__3824__auto____6370;
} else
{var or__3824__auto____6371 = (cljs.core._reduce["_"]);
if(or__3824__auto____6371)
{return or__3824__auto____6371;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
void 0;void 0;cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6375 = coll;
if(and__3822__auto____6375)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6375;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____6376 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____6376)
{return or__3824__auto____6376;
} else
{var or__3824__auto____6377 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6377)
{return or__3824__auto____6377;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6381 = o;
if(and__3822__auto____6381)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6381;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____6382 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____6382)
{return or__3824__auto____6382;
} else
{var or__3824__auto____6383 = (cljs.core._equiv["_"]);
if(or__3824__auto____6383)
{return or__3824__auto____6383;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6387 = o;
if(and__3822__auto____6387)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6387;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____6388 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____6388)
{return or__3824__auto____6388;
} else
{var or__3824__auto____6389 = (cljs.core._hash["_"]);
if(or__3824__auto____6389)
{return or__3824__auto____6389;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6393 = o;
if(and__3822__auto____6393)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6393;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____6394 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____6394)
{return or__3824__auto____6394;
} else
{var or__3824__auto____6395 = (cljs.core._seq["_"]);
if(or__3824__auto____6395)
{return or__3824__auto____6395;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISequential = {};
void 0;void 0;cljs.core.IList = {};
void 0;void 0;cljs.core.IRecord = {};
void 0;void 0;cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6399 = coll;
if(and__3822__auto____6399)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6399;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____6400 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____6400)
{return or__3824__auto____6400;
} else
{var or__3824__auto____6401 = (cljs.core._rseq["_"]);
if(or__3824__auto____6401)
{return or__3824__auto____6401;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6405 = coll;
if(and__3822__auto____6405)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6405;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6406 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____6406)
{return or__3824__auto____6406;
} else
{var or__3824__auto____6407 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6407)
{return or__3824__auto____6407;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6411 = coll;
if(and__3822__auto____6411)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6411;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6412 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____6412)
{return or__3824__auto____6412;
} else
{var or__3824__auto____6413 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6413)
{return or__3824__auto____6413;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6417 = coll;
if(and__3822__auto____6417)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6417;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____6418 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____6418)
{return or__3824__auto____6418;
} else
{var or__3824__auto____6419 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6419)
{return or__3824__auto____6419;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6423 = coll;
if(and__3822__auto____6423)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6423;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____6424 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____6424)
{return or__3824__auto____6424;
} else
{var or__3824__auto____6425 = (cljs.core._comparator["_"]);
if(or__3824__auto____6425)
{return or__3824__auto____6425;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6429 = o;
if(and__3822__auto____6429)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6429;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____6430 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____6430)
{return or__3824__auto____6430;
} else
{var or__3824__auto____6431 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6431)
{return or__3824__auto____6431;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6435 = d;
if(and__3822__auto____6435)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6435;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____6436 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____6436)
{return or__3824__auto____6436;
} else
{var or__3824__auto____6437 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6437)
{return or__3824__auto____6437;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6441 = this$;
if(and__3822__auto____6441)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6441;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____6442 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____6442)
{return or__3824__auto____6442;
} else
{var or__3824__auto____6443 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6443)
{return or__3824__auto____6443;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6447 = this$;
if(and__3822__auto____6447)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6447;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____6448 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____6448)
{return or__3824__auto____6448;
} else
{var or__3824__auto____6449 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6449)
{return or__3824__auto____6449;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6453 = this$;
if(and__3822__auto____6453)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6453;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____6454 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____6454)
{return or__3824__auto____6454;
} else
{var or__3824__auto____6455 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6455)
{return or__3824__auto____6455;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6459 = coll;
if(and__3822__auto____6459)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6459;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____6460 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____6460)
{return or__3824__auto____6460;
} else
{var or__3824__auto____6461 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6461)
{return or__3824__auto____6461;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6465 = tcoll;
if(and__3822__auto____6465)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6465;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____6466 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6466)
{return or__3824__auto____6466;
} else
{var or__3824__auto____6467 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6467)
{return or__3824__auto____6467;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6471 = tcoll;
if(and__3822__auto____6471)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6471;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6472 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6472)
{return or__3824__auto____6472;
} else
{var or__3824__auto____6473 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6473)
{return or__3824__auto____6473;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6477 = tcoll;
if(and__3822__auto____6477)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6477;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____6478 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6478)
{return or__3824__auto____6478;
} else
{var or__3824__auto____6479 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6479)
{return or__3824__auto____6479;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6483 = tcoll;
if(and__3822__auto____6483)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6483;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____6484 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6484)
{return or__3824__auto____6484;
} else
{var or__3824__auto____6485 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6485)
{return or__3824__auto____6485;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6489 = tcoll;
if(and__3822__auto____6489)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6489;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____6490 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6490)
{return or__3824__auto____6490;
} else
{var or__3824__auto____6491 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6491)
{return or__3824__auto____6491;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6495 = tcoll;
if(and__3822__auto____6495)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6495;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6496 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6496)
{return or__3824__auto____6496;
} else
{var or__3824__auto____6497 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6497)
{return or__3824__auto____6497;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6501 = tcoll;
if(and__3822__auto____6501)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6501;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____6502 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6502)
{return or__3824__auto____6502;
} else
{var or__3824__auto____6503 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6503)
{return or__3824__auto____6503;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6507 = x;
if(and__3822__auto____6507)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6507;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____6508 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____6508)
{return or__3824__auto____6508;
} else
{var or__3824__auto____6509 = (cljs.core._compare["_"]);
if(or__3824__auto____6509)
{return or__3824__auto____6509;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6513 = coll;
if(and__3822__auto____6513)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6513;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6514 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____6514)
{return or__3824__auto____6514;
} else
{var or__3824__auto____6515 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6515)
{return or__3824__auto____6515;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6519 = coll;
if(and__3822__auto____6519)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6519;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6520 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____6520)
{return or__3824__auto____6520;
} else
{var or__3824__auto____6521 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____6521)
{return or__3824__auto____6521;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____6525 = coll;
if(and__3822__auto____6525)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____6525;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6526 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____6526)
{return or__3824__auto____6526;
} else
{var or__3824__auto____6527 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____6527)
{return or__3824__auto____6527;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____6531 = coll;
if(and__3822__auto____6531)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____6531;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6532 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____6532)
{return or__3824__auto____6532;
} else
{var or__3824__auto____6533 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____6533)
{return or__3824__auto____6533;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
void 0;/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____6535 = (x === y);
if(or__3824__auto____6535)
{return or__3824__auto____6535;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__6536__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6537 = y;
var G__6538 = cljs.core.first.call(null,more);
var G__6539 = cljs.core.next.call(null,more);
x = G__6537;
y = G__6538;
more = G__6539;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6536 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6536__delegate.call(this, x, y, more);
};
G__6536.cljs$lang$maxFixedArity = 2;
G__6536.cljs$lang$applyTo = (function (arglist__6540){
var x = cljs.core.first(arglist__6540);
var y = cljs.core.first(cljs.core.next(arglist__6540));
var more = cljs.core.rest(cljs.core.next(arglist__6540));
return G__6536__delegate(x, y, more);
});
G__6536.cljs$lang$arity$variadic = G__6536__delegate;
return G__6536;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__6541 = null;
var G__6541__2 = (function (o,k){
return null;
});
var G__6541__3 = (function (o,k,not_found){
return not_found;
});
G__6541 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6541__2.call(this,o,k);
case 3:
return G__6541__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6541;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__6542 = null;
var G__6542__2 = (function (_,f){
return f.call(null);
});
var G__6542__3 = (function (_,f,start){
return start;
});
G__6542 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6542__2.call(this,_,f);
case 3:
return G__6542__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6542;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__6543 = null;
var G__6543__2 = (function (_,n){
return null;
});
var G__6543__3 = (function (_,n,not_found){
return not_found;
});
G__6543 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6543__2.call(this,_,n);
case 3:
return G__6543__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6543;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
void 0;
void 0;
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__6556 = cljs.core._count.call(null,cicoll);
if((cnt__6556 === 0))
{return f.call(null);
} else
{var val__6557 = cljs.core._nth.call(null,cicoll,0);
var n__6558 = 1;
while(true){
if((n__6558 < cnt__6556))
{var nval__6559 = f.call(null,val__6557,cljs.core._nth.call(null,cicoll,n__6558));
if(cljs.core.reduced_QMARK_.call(null,nval__6559))
{return cljs.core.deref.call(null,nval__6559);
} else
{{
var G__6568 = nval__6559;
var G__6569 = (n__6558 + 1);
val__6557 = G__6568;
n__6558 = G__6569;
continue;
}
}
} else
{return val__6557;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__6560 = cljs.core._count.call(null,cicoll);
var val__6561 = val;
var n__6562 = 0;
while(true){
if((n__6562 < cnt__6560))
{var nval__6563 = f.call(null,val__6561,cljs.core._nth.call(null,cicoll,n__6562));
if(cljs.core.reduced_QMARK_.call(null,nval__6563))
{return cljs.core.deref.call(null,nval__6563);
} else
{{
var G__6570 = nval__6563;
var G__6571 = (n__6562 + 1);
val__6561 = G__6570;
n__6562 = G__6571;
continue;
}
}
} else
{return val__6561;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__6564 = cljs.core._count.call(null,cicoll);
var val__6565 = val;
var n__6566 = idx;
while(true){
if((n__6566 < cnt__6564))
{var nval__6567 = f.call(null,val__6565,cljs.core._nth.call(null,cicoll,n__6566));
if(cljs.core.reduced_QMARK_.call(null,nval__6567))
{return cljs.core.deref.call(null,nval__6567);
} else
{{
var G__6572 = nval__6567;
var G__6573 = (n__6566 + 1);
val__6565 = G__6572;
n__6566 = G__6573;
continue;
}
}
} else
{return val__6565;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__6586 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__6587 = (arr[0]);
var n__6588 = 1;
while(true){
if((n__6588 < cnt__6586))
{var nval__6589 = f.call(null,val__6587,(arr[n__6588]));
if(cljs.core.reduced_QMARK_.call(null,nval__6589))
{return cljs.core.deref.call(null,nval__6589);
} else
{{
var G__6598 = nval__6589;
var G__6599 = (n__6588 + 1);
val__6587 = G__6598;
n__6588 = G__6599;
continue;
}
}
} else
{return val__6587;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__6590 = arr.length;
var val__6591 = val;
var n__6592 = 0;
while(true){
if((n__6592 < cnt__6590))
{var nval__6593 = f.call(null,val__6591,(arr[n__6592]));
if(cljs.core.reduced_QMARK_.call(null,nval__6593))
{return cljs.core.deref.call(null,nval__6593);
} else
{{
var G__6600 = nval__6593;
var G__6601 = (n__6592 + 1);
val__6591 = G__6600;
n__6592 = G__6601;
continue;
}
}
} else
{return val__6591;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__6594 = arr.length;
var val__6595 = val;
var n__6596 = idx;
while(true){
if((n__6596 < cnt__6594))
{var nval__6597 = f.call(null,val__6595,(arr[n__6596]));
if(cljs.core.reduced_QMARK_.call(null,nval__6597))
{return cljs.core.deref.call(null,nval__6597);
} else
{{
var G__6602 = nval__6597;
var G__6603 = (n__6596 + 1);
val__6595 = G__6602;
n__6596 = G__6603;
continue;
}
}
} else
{return val__6595;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6604 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__6605 = this;
if(((this__6605.i + 1) < this__6605.a.length))
{return (new cljs.core.IndexedSeq(this__6605.a,(this__6605.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6606 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6607 = this;
var c__6608 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__6608 > 0))
{return (new cljs.core.RSeq(coll,(c__6608 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__6609 = this;
var this__6610 = this;
return cljs.core.pr_str.call(null,this__6610);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6611 = this;
if(cljs.core.counted_QMARK_.call(null,this__6611.a))
{return cljs.core.ci_reduce.call(null,this__6611.a,f,(this__6611.a[this__6611.i]),(this__6611.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__6611.a[this__6611.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6612 = this;
if(cljs.core.counted_QMARK_.call(null,this__6612.a))
{return cljs.core.ci_reduce.call(null,this__6612.a,f,start,this__6612.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6613 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6614 = this;
return (this__6614.a.length - this__6614.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__6615 = this;
return (this__6615.a[this__6615.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__6616 = this;
if(((this__6616.i + 1) < this__6616.a.length))
{return (new cljs.core.IndexedSeq(this__6616.a,(this__6616.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6617 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__6618 = this;
var i__6619 = (n + this__6618.i);
if((i__6619 < this__6618.a.length))
{return (this__6618.a[i__6619]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__6620 = this;
var i__6621 = (n + this__6620.i);
if((i__6621 < this__6620.a.length))
{return (this__6620.a[i__6621]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__6622 = null;
var G__6622__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6622__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6622 = function(array,f,start){
switch(arguments.length){
case 2:
return G__6622__2.call(this,array,f);
case 3:
return G__6622__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6622;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6623 = null;
var G__6623__2 = (function (array,k){
return (array[k]);
});
var G__6623__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6623 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__6623__2.call(this,array,k);
case 3:
return G__6623__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6623;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6624 = null;
var G__6624__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__6624__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__6624 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__6624__2.call(this,array,n);
case 3:
return G__6624__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6624;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6625 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6626 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__6627 = this;
var this__6628 = this;
return cljs.core.pr_str.call(null,this__6628);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6629 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6630 = this;
return (this__6630.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6631 = this;
return cljs.core._nth.call(null,this__6631.ci,this__6631.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6632 = this;
if((this__6632.i > 0))
{return (new cljs.core.RSeq(this__6632.ci,(this__6632.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6633 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__6634 = this;
return (new cljs.core.RSeq(this__6634.ci,this__6634.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6635 = this;
return this__6635.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6639__6640 = coll;
if(G__6639__6640)
{if((function (){var or__3824__auto____6641 = (G__6639__6640.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____6641)
{return or__3824__auto____6641;
} else
{return G__6639__6640.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6639__6640.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6639__6640);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6639__6640);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6646__6647 = coll;
if(G__6646__6647)
{if((function (){var or__3824__auto____6648 = (G__6646__6647.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6648)
{return or__3824__auto____6648;
} else
{return G__6646__6647.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6646__6647.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6646__6647);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6646__6647);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__6649 = cljs.core.seq.call(null,coll);
if((s__6649 == null))
{return null;
} else
{return cljs.core._first.call(null,s__6649);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__6654__6655 = coll;
if(G__6654__6655)
{if((function (){var or__3824__auto____6656 = (G__6654__6655.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6656)
{return or__3824__auto____6656;
} else
{return G__6654__6655.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6654__6655.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6654__6655);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6654__6655);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__6657 = cljs.core.seq.call(null,coll);
if(!((s__6657 == null)))
{return cljs.core._rest.call(null,s__6657);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6661__6662 = coll;
if(G__6661__6662)
{if((function (){var or__3824__auto____6663 = (G__6661__6662.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____6663)
{return or__3824__auto____6663;
} else
{return G__6661__6662.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__6661__6662.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6661__6662);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6661__6662);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__6665 = cljs.core.next.call(null,s);
if(!((sn__6665 == null)))
{{
var G__6666 = sn__6665;
s = G__6666;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__6667__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6668 = conj.call(null,coll,x);
var G__6669 = cljs.core.first.call(null,xs);
var G__6670 = cljs.core.next.call(null,xs);
coll = G__6668;
x = G__6669;
xs = G__6670;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6667 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6667__delegate.call(this, coll, x, xs);
};
G__6667.cljs$lang$maxFixedArity = 2;
G__6667.cljs$lang$applyTo = (function (arglist__6671){
var coll = cljs.core.first(arglist__6671);
var x = cljs.core.first(cljs.core.next(arglist__6671));
var xs = cljs.core.rest(cljs.core.next(arglist__6671));
return G__6667__delegate(coll, x, xs);
});
G__6667.cljs$lang$arity$variadic = G__6667__delegate;
return G__6667;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
void 0;
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__6674 = cljs.core.seq.call(null,coll);
var acc__6675 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__6674))
{return (acc__6675 + cljs.core._count.call(null,s__6674));
} else
{{
var G__6676 = cljs.core.next.call(null,s__6674);
var G__6677 = (acc__6675 + 1);
s__6674 = G__6676;
acc__6675 = G__6677;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
void 0;
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__6684__6685 = coll;
if(G__6684__6685)
{if((function (){var or__3824__auto____6686 = (G__6684__6685.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6686)
{return or__3824__auto____6686;
} else
{return G__6684__6685.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6684__6685.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6684__6685);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6684__6685);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__6687__6688 = coll;
if(G__6687__6688)
{if((function (){var or__3824__auto____6689 = (G__6687__6688.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6689)
{return or__3824__auto____6689;
} else
{return G__6687__6688.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6687__6688.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6687__6688);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6687__6688);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__6692__delegate = function (coll,k,v,kvs){
while(true){
var ret__6691 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__6693 = ret__6691;
var G__6694 = cljs.core.first.call(null,kvs);
var G__6695 = cljs.core.second.call(null,kvs);
var G__6696 = cljs.core.nnext.call(null,kvs);
coll = G__6693;
k = G__6694;
v = G__6695;
kvs = G__6696;
continue;
}
} else
{return ret__6691;
}
break;
}
};
var G__6692 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6692__delegate.call(this, coll, k, v, kvs);
};
G__6692.cljs$lang$maxFixedArity = 3;
G__6692.cljs$lang$applyTo = (function (arglist__6697){
var coll = cljs.core.first(arglist__6697);
var k = cljs.core.first(cljs.core.next(arglist__6697));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6697)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6697)));
return G__6692__delegate(coll, k, v, kvs);
});
G__6692.cljs$lang$arity$variadic = G__6692__delegate;
return G__6692;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__6700__delegate = function (coll,k,ks){
while(true){
var ret__6699 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6701 = ret__6699;
var G__6702 = cljs.core.first.call(null,ks);
var G__6703 = cljs.core.next.call(null,ks);
coll = G__6701;
k = G__6702;
ks = G__6703;
continue;
}
} else
{return ret__6699;
}
break;
}
};
var G__6700 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6700__delegate.call(this, coll, k, ks);
};
G__6700.cljs$lang$maxFixedArity = 2;
G__6700.cljs$lang$applyTo = (function (arglist__6704){
var coll = cljs.core.first(arglist__6704);
var k = cljs.core.first(cljs.core.next(arglist__6704));
var ks = cljs.core.rest(cljs.core.next(arglist__6704));
return G__6700__delegate(coll, k, ks);
});
G__6700.cljs$lang$arity$variadic = G__6700__delegate;
return G__6700;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__6708__6709 = o;
if(G__6708__6709)
{if((function (){var or__3824__auto____6710 = (G__6708__6709.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____6710)
{return or__3824__auto____6710;
} else
{return G__6708__6709.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6708__6709.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6708__6709);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6708__6709);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__6713__delegate = function (coll,k,ks){
while(true){
var ret__6712 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6714 = ret__6712;
var G__6715 = cljs.core.first.call(null,ks);
var G__6716 = cljs.core.next.call(null,ks);
coll = G__6714;
k = G__6715;
ks = G__6716;
continue;
}
} else
{return ret__6712;
}
break;
}
};
var G__6713 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6713__delegate.call(this, coll, k, ks);
};
G__6713.cljs$lang$maxFixedArity = 2;
G__6713.cljs$lang$applyTo = (function (arglist__6717){
var coll = cljs.core.first(arglist__6717);
var k = cljs.core.first(cljs.core.next(arglist__6717));
var ks = cljs.core.rest(cljs.core.next(arglist__6717));
return G__6713__delegate(coll, k, ks);
});
G__6713.cljs$lang$arity$variadic = G__6713__delegate;
return G__6713;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__6719 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__6719);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__6719;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__6721 = (cljs.core.string_hash_cache[k]);
if(!((h__6721 == null)))
{return h__6721;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____6723 = goog.isString(o);
if(and__3822__auto____6723)
{return check_cache;
} else
{return and__3822__auto____6723;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6727__6728 = x;
if(G__6727__6728)
{if((function (){var or__3824__auto____6729 = (G__6727__6728.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____6729)
{return or__3824__auto____6729;
} else
{return G__6727__6728.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__6727__6728.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6727__6728);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6727__6728);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6733__6734 = x;
if(G__6733__6734)
{if((function (){var or__3824__auto____6735 = (G__6733__6734.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____6735)
{return or__3824__auto____6735;
} else
{return G__6733__6734.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__6733__6734.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6733__6734);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6733__6734);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__6739__6740 = x;
if(G__6739__6740)
{if((function (){var or__3824__auto____6741 = (G__6739__6740.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____6741)
{return or__3824__auto____6741;
} else
{return G__6739__6740.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__6739__6740.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6739__6740);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6739__6740);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__6745__6746 = x;
if(G__6745__6746)
{if((function (){var or__3824__auto____6747 = (G__6745__6746.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____6747)
{return or__3824__auto____6747;
} else
{return G__6745__6746.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__6745__6746.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6745__6746);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6745__6746);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__6751__6752 = x;
if(G__6751__6752)
{if((function (){var or__3824__auto____6753 = (G__6751__6752.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____6753)
{return or__3824__auto____6753;
} else
{return G__6751__6752.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__6751__6752.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6751__6752);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6751__6752);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__6757__6758 = x;
if(G__6757__6758)
{if((function (){var or__3824__auto____6759 = (G__6757__6758.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6759)
{return or__3824__auto____6759;
} else
{return G__6757__6758.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6757__6758.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6757__6758);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6757__6758);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__6763__6764 = x;
if(G__6763__6764)
{if((function (){var or__3824__auto____6765 = (G__6763__6764.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6765)
{return or__3824__auto____6765;
} else
{return G__6763__6764.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6763__6764.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6763__6764);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6763__6764);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6769__6770 = x;
if(G__6769__6770)
{if((function (){var or__3824__auto____6771 = (G__6769__6770.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____6771)
{return or__3824__auto____6771;
} else
{return G__6769__6770.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__6769__6770.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6769__6770);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6769__6770);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__6775__6776 = x;
if(G__6775__6776)
{if((function (){var or__3824__auto____6777 = (G__6775__6776.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____6777)
{return or__3824__auto____6777;
} else
{return G__6775__6776.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__6775__6776.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6775__6776);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6775__6776);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__6781__6782 = x;
if(G__6781__6782)
{if(cljs.core.truth_((function (){var or__3824__auto____6783 = null;
if(cljs.core.truth_(or__3824__auto____6783))
{return or__3824__auto____6783;
} else
{return G__6781__6782.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__6781__6782.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6781__6782);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6781__6782);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__6784__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__6784 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6784__delegate.call(this, keyvals);
};
G__6784.cljs$lang$maxFixedArity = 0;
G__6784.cljs$lang$applyTo = (function (arglist__6785){
var keyvals = cljs.core.seq(arglist__6785);;
return G__6784__delegate(keyvals);
});
G__6784.cljs$lang$arity$variadic = G__6784__delegate;
return G__6784;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__6787 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__6787.push(key);
}));
return keys__6787;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__6791 = i;
var j__6792 = j;
var len__6793 = len;
while(true){
if((len__6793 === 0))
{return to;
} else
{(to[j__6792] = (from[i__6791]));
{
var G__6794 = (i__6791 + 1);
var G__6795 = (j__6792 + 1);
var G__6796 = (len__6793 - 1);
i__6791 = G__6794;
j__6792 = G__6795;
len__6793 = G__6796;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__6800 = (i + (len - 1));
var j__6801 = (j + (len - 1));
var len__6802 = len;
while(true){
if((len__6802 === 0))
{return to;
} else
{(to[j__6801] = (from[i__6800]));
{
var G__6803 = (i__6800 - 1);
var G__6804 = (j__6801 - 1);
var G__6805 = (len__6802 - 1);
i__6800 = G__6803;
j__6801 = G__6804;
len__6802 = G__6805;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__6809__6810 = s;
if(G__6809__6810)
{if((function (){var or__3824__auto____6811 = (G__6809__6810.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6811)
{return or__3824__auto____6811;
} else
{return G__6809__6810.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6809__6810.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6809__6810);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6809__6810);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__6815__6816 = s;
if(G__6815__6816)
{if((function (){var or__3824__auto____6817 = (G__6815__6816.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____6817)
{return or__3824__auto____6817;
} else
{return G__6815__6816.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6815__6816.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6815__6816);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6815__6816);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____6820 = goog.isString(x);
if(and__3822__auto____6820)
{return !((function (){var or__3824__auto____6821 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____6821)
{return or__3824__auto____6821;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____6820;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____6823 = goog.isString(x);
if(and__3822__auto____6823)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____6823;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____6825 = goog.isString(x);
if(and__3822__auto____6825)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____6825;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____6830 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____6830)
{return or__3824__auto____6830;
} else
{var G__6831__6832 = f;
if(G__6831__6832)
{if((function (){var or__3824__auto____6833 = (G__6831__6832.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____6833)
{return or__3824__auto____6833;
} else
{return G__6831__6832.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__6831__6832.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6831__6832);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6831__6832);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____6835 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____6835)
{return (n == n.toFixed());
} else
{return and__3822__auto____6835;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____6838 = coll;
if(cljs.core.truth_(and__3822__auto____6838))
{var and__3822__auto____6839 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____6839)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____6839;
}
} else
{return and__3822__auto____6838;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__6848__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__6844 = cljs.core.set([y,x]);
var xs__6845 = more;
while(true){
var x__6846 = cljs.core.first.call(null,xs__6845);
var etc__6847 = cljs.core.next.call(null,xs__6845);
if(cljs.core.truth_(xs__6845))
{if(cljs.core.contains_QMARK_.call(null,s__6844,x__6846))
{return false;
} else
{{
var G__6849 = cljs.core.conj.call(null,s__6844,x__6846);
var G__6850 = etc__6847;
s__6844 = G__6849;
xs__6845 = G__6850;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__6848 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6848__delegate.call(this, x, y, more);
};
G__6848.cljs$lang$maxFixedArity = 2;
G__6848.cljs$lang$applyTo = (function (arglist__6851){
var x = cljs.core.first(arglist__6851);
var y = cljs.core.first(cljs.core.next(arglist__6851));
var more = cljs.core.rest(cljs.core.next(arglist__6851));
return G__6848__delegate(x, y, more);
});
G__6848.cljs$lang$arity$variadic = G__6848__delegate;
return G__6848;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__6855__6856 = x;
if(G__6855__6856)
{if(cljs.core.truth_((function (){var or__3824__auto____6857 = null;
if(cljs.core.truth_(or__3824__auto____6857))
{return or__3824__auto____6857;
} else
{return G__6855__6856.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__6855__6856.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6855__6856);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6855__6856);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__6862 = cljs.core.count.call(null,xs);
var yl__6863 = cljs.core.count.call(null,ys);
if((xl__6862 < yl__6863))
{return -1;
} else
{if((xl__6862 > yl__6863))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__6862,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__6864 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____6865 = (d__6864 === 0);
if(and__3822__auto____6865)
{return ((n + 1) < len);
} else
{return and__3822__auto____6865;
}
})())
{{
var G__6866 = xs;
var G__6867 = ys;
var G__6868 = len;
var G__6869 = (n + 1);
xs = G__6866;
ys = G__6867;
len = G__6868;
n = G__6869;
continue;
}
} else
{return d__6864;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__6871 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__6871))
{return r__6871;
} else
{if(cljs.core.truth_(r__6871))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__6873 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__6873,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__6873);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____6879 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____6879)
{var s__6880 = temp__3971__auto____6879;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__6880),cljs.core.next.call(null,s__6880));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__6881 = val;
var coll__6882 = cljs.core.seq.call(null,coll);
while(true){
if(coll__6882)
{var nval__6883 = f.call(null,val__6881,cljs.core.first.call(null,coll__6882));
if(cljs.core.reduced_QMARK_.call(null,nval__6883))
{return cljs.core.deref.call(null,nval__6883);
} else
{{
var G__6884 = nval__6883;
var G__6885 = cljs.core.next.call(null,coll__6882);
val__6881 = G__6884;
coll__6882 = G__6885;
continue;
}
}
} else
{return val__6881;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
void 0;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__6887 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__6887);
return cljs.core.vec.call(null,a__6887);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__6894__6895 = coll;
if(G__6894__6895)
{if((function (){var or__3824__auto____6896 = (G__6894__6895.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6896)
{return or__3824__auto____6896;
} else
{return G__6894__6895.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6894__6895.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6894__6895);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6894__6895);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__6897__6898 = coll;
if(G__6897__6898)
{if((function (){var or__3824__auto____6899 = (G__6897__6898.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6899)
{return or__3824__auto____6899;
} else
{return G__6897__6898.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6897__6898.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6897__6898);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6897__6898);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__6900 = this;
return this__6900.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__6901__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__6901 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6901__delegate.call(this, x, y, more);
};
G__6901.cljs$lang$maxFixedArity = 2;
G__6901.cljs$lang$applyTo = (function (arglist__6902){
var x = cljs.core.first(arglist__6902);
var y = cljs.core.first(cljs.core.next(arglist__6902));
var more = cljs.core.rest(cljs.core.next(arglist__6902));
return G__6901__delegate(x, y, more);
});
G__6901.cljs$lang$arity$variadic = G__6901__delegate;
return G__6901;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__6903__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__6903 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6903__delegate.call(this, x, y, more);
};
G__6903.cljs$lang$maxFixedArity = 2;
G__6903.cljs$lang$applyTo = (function (arglist__6904){
var x = cljs.core.first(arglist__6904);
var y = cljs.core.first(cljs.core.next(arglist__6904));
var more = cljs.core.rest(cljs.core.next(arglist__6904));
return G__6903__delegate(x, y, more);
});
G__6903.cljs$lang$arity$variadic = G__6903__delegate;
return G__6903;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__6905__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__6905 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6905__delegate.call(this, x, y, more);
};
G__6905.cljs$lang$maxFixedArity = 2;
G__6905.cljs$lang$applyTo = (function (arglist__6906){
var x = cljs.core.first(arglist__6906);
var y = cljs.core.first(cljs.core.next(arglist__6906));
var more = cljs.core.rest(cljs.core.next(arglist__6906));
return G__6905__delegate(x, y, more);
});
G__6905.cljs$lang$arity$variadic = G__6905__delegate;
return G__6905;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__6907__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__6907 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6907__delegate.call(this, x, y, more);
};
G__6907.cljs$lang$maxFixedArity = 2;
G__6907.cljs$lang$applyTo = (function (arglist__6908){
var x = cljs.core.first(arglist__6908);
var y = cljs.core.first(cljs.core.next(arglist__6908));
var more = cljs.core.rest(cljs.core.next(arglist__6908));
return G__6907__delegate(x, y, more);
});
G__6907.cljs$lang$arity$variadic = G__6907__delegate;
return G__6907;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__6909__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__6910 = y;
var G__6911 = cljs.core.first.call(null,more);
var G__6912 = cljs.core.next.call(null,more);
x = G__6910;
y = G__6911;
more = G__6912;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6909 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6909__delegate.call(this, x, y, more);
};
G__6909.cljs$lang$maxFixedArity = 2;
G__6909.cljs$lang$applyTo = (function (arglist__6913){
var x = cljs.core.first(arglist__6913);
var y = cljs.core.first(cljs.core.next(arglist__6913));
var more = cljs.core.rest(cljs.core.next(arglist__6913));
return G__6909__delegate(x, y, more);
});
G__6909.cljs$lang$arity$variadic = G__6909__delegate;
return G__6909;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__6914__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__6915 = y;
var G__6916 = cljs.core.first.call(null,more);
var G__6917 = cljs.core.next.call(null,more);
x = G__6915;
y = G__6916;
more = G__6917;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6914 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6914__delegate.call(this, x, y, more);
};
G__6914.cljs$lang$maxFixedArity = 2;
G__6914.cljs$lang$applyTo = (function (arglist__6918){
var x = cljs.core.first(arglist__6918);
var y = cljs.core.first(cljs.core.next(arglist__6918));
var more = cljs.core.rest(cljs.core.next(arglist__6918));
return G__6914__delegate(x, y, more);
});
G__6914.cljs$lang$arity$variadic = G__6914__delegate;
return G__6914;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__6919__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__6920 = y;
var G__6921 = cljs.core.first.call(null,more);
var G__6922 = cljs.core.next.call(null,more);
x = G__6920;
y = G__6921;
more = G__6922;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6919 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6919__delegate.call(this, x, y, more);
};
G__6919.cljs$lang$maxFixedArity = 2;
G__6919.cljs$lang$applyTo = (function (arglist__6923){
var x = cljs.core.first(arglist__6923);
var y = cljs.core.first(cljs.core.next(arglist__6923));
var more = cljs.core.rest(cljs.core.next(arglist__6923));
return G__6919__delegate(x, y, more);
});
G__6919.cljs$lang$arity$variadic = G__6919__delegate;
return G__6919;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__6924__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__6925 = y;
var G__6926 = cljs.core.first.call(null,more);
var G__6927 = cljs.core.next.call(null,more);
x = G__6925;
y = G__6926;
more = G__6927;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6924 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6924__delegate.call(this, x, y, more);
};
G__6924.cljs$lang$maxFixedArity = 2;
G__6924.cljs$lang$applyTo = (function (arglist__6928){
var x = cljs.core.first(arglist__6928);
var y = cljs.core.first(cljs.core.next(arglist__6928));
var more = cljs.core.rest(cljs.core.next(arglist__6928));
return G__6924__delegate(x, y, more);
});
G__6924.cljs$lang$arity$variadic = G__6924__delegate;
return G__6924;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__6929__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__6929 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6929__delegate.call(this, x, y, more);
};
G__6929.cljs$lang$maxFixedArity = 2;
G__6929.cljs$lang$applyTo = (function (arglist__6930){
var x = cljs.core.first(arglist__6930);
var y = cljs.core.first(cljs.core.next(arglist__6930));
var more = cljs.core.rest(cljs.core.next(arglist__6930));
return G__6929__delegate(x, y, more);
});
G__6929.cljs$lang$arity$variadic = G__6929__delegate;
return G__6929;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__6931__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__6931 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6931__delegate.call(this, x, y, more);
};
G__6931.cljs$lang$maxFixedArity = 2;
G__6931.cljs$lang$applyTo = (function (arglist__6932){
var x = cljs.core.first(arglist__6932);
var y = cljs.core.first(cljs.core.next(arglist__6932));
var more = cljs.core.rest(cljs.core.next(arglist__6932));
return G__6931__delegate(x, y, more);
});
G__6931.cljs$lang$arity$variadic = G__6931__delegate;
return G__6931;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__6934 = (n % d);
return cljs.core.fix.call(null,((n - rem__6934) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__6936 = cljs.core.quot.call(null,n,d);
return (n - (d * q__6936));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__6939 = (v - ((v >> 1) & 1431655765));
var v__6940 = ((v__6939 & 858993459) + ((v__6939 >> 2) & 858993459));
return ((((v__6940 + (v__6940 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__6941__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6942 = y;
var G__6943 = cljs.core.first.call(null,more);
var G__6944 = cljs.core.next.call(null,more);
x = G__6942;
y = G__6943;
more = G__6944;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6941 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6941__delegate.call(this, x, y, more);
};
G__6941.cljs$lang$maxFixedArity = 2;
G__6941.cljs$lang$applyTo = (function (arglist__6945){
var x = cljs.core.first(arglist__6945);
var y = cljs.core.first(cljs.core.next(arglist__6945));
var more = cljs.core.rest(cljs.core.next(arglist__6945));
return G__6941__delegate(x, y, more);
});
G__6941.cljs$lang$arity$variadic = G__6941__delegate;
return G__6941;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__6949 = n;
var xs__6950 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6951 = xs__6950;
if(and__3822__auto____6951)
{return (n__6949 > 0);
} else
{return and__3822__auto____6951;
}
})()))
{{
var G__6952 = (n__6949 - 1);
var G__6953 = cljs.core.next.call(null,xs__6950);
n__6949 = G__6952;
xs__6950 = G__6953;
continue;
}
} else
{return xs__6950;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__6954__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6955 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__6956 = cljs.core.next.call(null,more);
sb = G__6955;
more = G__6956;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__6954 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6954__delegate.call(this, x, ys);
};
G__6954.cljs$lang$maxFixedArity = 1;
G__6954.cljs$lang$applyTo = (function (arglist__6957){
var x = cljs.core.first(arglist__6957);
var ys = cljs.core.rest(arglist__6957);
return G__6954__delegate(x, ys);
});
G__6954.cljs$lang$arity$variadic = G__6954__delegate;
return G__6954;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__6958__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6959 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__6960 = cljs.core.next.call(null,more);
sb = G__6959;
more = G__6960;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__6958 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6958__delegate.call(this, x, ys);
};
G__6958.cljs$lang$maxFixedArity = 1;
G__6958.cljs$lang$applyTo = (function (arglist__6961){
var x = cljs.core.first(arglist__6961);
var ys = cljs.core.rest(arglist__6961);
return G__6958__delegate(x, ys);
});
G__6958.cljs$lang$arity$variadic = G__6958__delegate;
return G__6958;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__6964 = cljs.core.seq.call(null,x);
var ys__6965 = cljs.core.seq.call(null,y);
while(true){
if((xs__6964 == null))
{return (ys__6965 == null);
} else
{if((ys__6965 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__6964),cljs.core.first.call(null,ys__6965)))
{{
var G__6966 = cljs.core.next.call(null,xs__6964);
var G__6967 = cljs.core.next.call(null,ys__6965);
xs__6964 = G__6966;
ys__6965 = G__6967;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__6968_SHARP_,p2__6969_SHARP_){
return cljs.core.hash_combine.call(null,p1__6968_SHARP_,cljs.core.hash.call(null,p2__6969_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__6973 = 0;
var s__6974 = cljs.core.seq.call(null,m);
while(true){
if(s__6974)
{var e__6975 = cljs.core.first.call(null,s__6974);
{
var G__6976 = ((h__6973 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__6975)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__6975)))) % 4503599627370496);
var G__6977 = cljs.core.next.call(null,s__6974);
h__6973 = G__6976;
s__6974 = G__6977;
continue;
}
} else
{return h__6973;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__6981 = 0;
var s__6982 = cljs.core.seq.call(null,s);
while(true){
if(s__6982)
{var e__6983 = cljs.core.first.call(null,s__6982);
{
var G__6984 = ((h__6981 + cljs.core.hash.call(null,e__6983)) % 4503599627370496);
var G__6985 = cljs.core.next.call(null,s__6982);
h__6981 = G__6984;
s__6982 = G__6985;
continue;
}
} else
{return h__6981;
}
break;
}
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7006__7007 = cljs.core.seq.call(null,fn_map);
if(G__7006__7007)
{var G__7009__7011 = cljs.core.first.call(null,G__7006__7007);
var vec__7010__7012 = G__7009__7011;
var key_name__7013 = cljs.core.nth.call(null,vec__7010__7012,0,null);
var f__7014 = cljs.core.nth.call(null,vec__7010__7012,1,null);
var G__7006__7015 = G__7006__7007;
var G__7009__7016 = G__7009__7011;
var G__7006__7017 = G__7006__7015;
while(true){
var vec__7018__7019 = G__7009__7016;
var key_name__7020 = cljs.core.nth.call(null,vec__7018__7019,0,null);
var f__7021 = cljs.core.nth.call(null,vec__7018__7019,1,null);
var G__7006__7022 = G__7006__7017;
var str_name__7023 = cljs.core.name.call(null,key_name__7020);
(obj[str_name__7023] = f__7021);
var temp__3974__auto____7024 = cljs.core.next.call(null,G__7006__7022);
if(temp__3974__auto____7024)
{var G__7006__7025 = temp__3974__auto____7024;
{
var G__7026 = cljs.core.first.call(null,G__7006__7025);
var G__7027 = G__7006__7025;
G__7009__7016 = G__7026;
G__7006__7017 = G__7027;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7028 = this;
var h__2236__auto____7029 = this__7028.__hash;
if(!((h__2236__auto____7029 == null)))
{return h__2236__auto____7029;
} else
{var h__2236__auto____7030 = cljs.core.hash_coll.call(null,coll);
this__7028.__hash = h__2236__auto____7030;
return h__2236__auto____7030;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7031 = this;
if((this__7031.count === 1))
{return null;
} else
{return this__7031.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7032 = this;
return (new cljs.core.List(this__7032.meta,o,coll,(this__7032.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7033 = this;
var this__7034 = this;
return cljs.core.pr_str.call(null,this__7034);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7035 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7036 = this;
return this__7036.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7037 = this;
return this__7037.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7038 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7039 = this;
return this__7039.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7040 = this;
if((this__7040.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7040.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7041 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7042 = this;
return (new cljs.core.List(meta,this__7042.first,this__7042.rest,this__7042.count,this__7042.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7043 = this;
return this__7043.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7044 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7045 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7046 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7047 = this;
return (new cljs.core.List(this__7047.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7048 = this;
var this__7049 = this;
return cljs.core.pr_str.call(null,this__7049);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7050 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7051 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7052 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7053 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7054 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7055 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7056 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7057 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7058 = this;
return this__7058.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7059 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7063__7064 = coll;
if(G__7063__7064)
{if((function (){var or__3824__auto____7065 = (G__7063__7064.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7065)
{return or__3824__auto____7065;
} else
{return G__7063__7064.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7063__7064.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7063__7064);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7063__7064);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__7066__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7066 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7066__delegate.call(this, x, y, z, items);
};
G__7066.cljs$lang$maxFixedArity = 3;
G__7066.cljs$lang$applyTo = (function (arglist__7067){
var x = cljs.core.first(arglist__7067);
var y = cljs.core.first(cljs.core.next(arglist__7067));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7067)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7067)));
return G__7066__delegate(x, y, z, items);
});
G__7066.cljs$lang$arity$variadic = G__7066__delegate;
return G__7066;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7068 = this;
var h__2236__auto____7069 = this__7068.__hash;
if(!((h__2236__auto____7069 == null)))
{return h__2236__auto____7069;
} else
{var h__2236__auto____7070 = cljs.core.hash_coll.call(null,coll);
this__7068.__hash = h__2236__auto____7070;
return h__2236__auto____7070;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7071 = this;
if((this__7071.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7071.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7072 = this;
return (new cljs.core.Cons(null,o,coll,this__7072.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7073 = this;
var this__7074 = this;
return cljs.core.pr_str.call(null,this__7074);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7075 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7076 = this;
return this__7076.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7077 = this;
if((this__7077.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7077.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7078 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7079 = this;
return (new cljs.core.Cons(meta,this__7079.first,this__7079.rest,this__7079.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7080 = this;
return this__7080.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7081 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7081.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7086 = (coll == null);
if(or__3824__auto____7086)
{return or__3824__auto____7086;
} else
{var G__7087__7088 = coll;
if(G__7087__7088)
{if((function (){var or__3824__auto____7089 = (G__7087__7088.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7089)
{return or__3824__auto____7089;
} else
{return G__7087__7088.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7087__7088.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7087__7088);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7087__7088);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7093__7094 = x;
if(G__7093__7094)
{if((function (){var or__3824__auto____7095 = (G__7093__7094.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7095)
{return or__3824__auto____7095;
} else
{return G__7093__7094.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7093__7094.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7093__7094);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7093__7094);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7096 = null;
var G__7096__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7096__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7096 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7096__2.call(this,string,f);
case 3:
return G__7096__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7096;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7097 = null;
var G__7097__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7097__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7097 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7097__2.call(this,string,k);
case 3:
return G__7097__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7097;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7098 = null;
var G__7098__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7098__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7098 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7098__2.call(this,string,n);
case 3:
return G__7098__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7098;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function (this_sym7101,coll){
var this__7102 = this;
var this_sym7101__7103 = this;
var ___7104 = this_sym7101__7103;
if((coll == null))
{return null;
} else
{var strobj__7105 = coll.strobj;
if((strobj__7105 == null))
{return cljs.core._lookup.call(null,coll,this__7102.k,null);
} else
{return (strobj__7105[this__7102.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym7099,args7100){
var this__7106 = this;
return this_sym7099.call.apply(this_sym7099,[this_sym7099].concat(args7100.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7115 = null;
var G__7115__2 = (function (this_sym7109,coll){
var this_sym7109__7111 = this;
var this__7112 = this_sym7109__7111;
return cljs.core._lookup.call(null,coll,this__7112.toString(),null);
});
var G__7115__3 = (function (this_sym7110,coll,not_found){
var this_sym7110__7113 = this;
var this__7114 = this_sym7110__7113;
return cljs.core._lookup.call(null,coll,this__7114.toString(),not_found);
});
G__7115 = function(this_sym7110,coll,not_found){
switch(arguments.length){
case 2:
return G__7115__2.call(this,this_sym7110,coll);
case 3:
return G__7115__3.call(this,this_sym7110,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7115;
})()
;
String.prototype.apply = (function (this_sym7107,args7108){
return this_sym7107.call.apply(this_sym7107,[this_sym7107].concat(args7108.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7117 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7117;
} else
{lazy_seq.x = x__7117.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7118 = this;
var h__2236__auto____7119 = this__7118.__hash;
if(!((h__2236__auto____7119 == null)))
{return h__2236__auto____7119;
} else
{var h__2236__auto____7120 = cljs.core.hash_coll.call(null,coll);
this__7118.__hash = h__2236__auto____7120;
return h__2236__auto____7120;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7121 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7122 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7123 = this;
var this__7124 = this;
return cljs.core.pr_str.call(null,this__7124);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7125 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7126 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7127 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7128 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7129 = this;
return (new cljs.core.LazySeq(meta,this__7129.realized,this__7129.x,this__7129.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7130 = this;
return this__7130.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7131 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7131.meta);
});
cljs.core.LazySeq;
void 0;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7132 = this;
return this__7132.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7133 = this;
var ___7134 = this;
(this__7133.buf[this__7133.end] = o);
return this__7133.end = (this__7133.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7135 = this;
var ___7136 = this;
var ret__7137 = (new cljs.core.ArrayChunk(this__7135.buf,0,this__7135.end));
this__7135.buf = null;
return ret__7137;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7138 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7138.arr[this__7138.off]),(this__7138.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7139 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7139.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7140 = this;
if((this__7140.off === this__7140.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7140.arr,(this__7140.off + 1),this__7140.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7141 = this;
return (this__7141.arr[(this__7141.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7142 = this;
if((function (){var and__3822__auto____7143 = (i >= 0);
if(and__3822__auto____7143)
{return (i < (this__7142.end - this__7142.off));
} else
{return and__3822__auto____7143;
}
})())
{return (this__7142.arr[(this__7142.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7144 = this;
return (this__7144.end - this__7144.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7145 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7146 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7147 = this;
return cljs.core._nth.call(null,this__7147.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7148 = this;
if((cljs.core._count.call(null,this__7148.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7148.chunk),this__7148.more,this__7148.meta));
} else
{if((this__7148.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7148.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7149 = this;
if((this__7149.more == null))
{return null;
} else
{return this__7149.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7150 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7151 = this;
return (new cljs.core.ChunkedCons(this__7151.chunk,this__7151.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7152 = this;
return this__7152.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7153 = this;
return this__7153.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7154 = this;
if((this__7154.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7154.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__7158__7159 = s;
if(G__7158__7159)
{if(cljs.core.truth_((function (){var or__3824__auto____7160 = null;
if(cljs.core.truth_(or__3824__auto____7160))
{return or__3824__auto____7160;
} else
{return G__7158__7159.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7158__7159.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7158__7159);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7158__7159);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7163 = [];
var s__7164 = s;
while(true){
if(cljs.core.seq.call(null,s__7164))
{ary__7163.push(cljs.core.first.call(null,s__7164));
{
var G__7165 = cljs.core.next.call(null,s__7164);
s__7164 = G__7165;
continue;
}
} else
{return ary__7163;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7169 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7170 = 0;
var xs__7171 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7171)
{(ret__7169[i__7170] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7171)));
{
var G__7172 = (i__7170 + 1);
var G__7173 = cljs.core.next.call(null,xs__7171);
i__7170 = G__7172;
xs__7171 = G__7173;
continue;
}
} else
{}
break;
}
return ret__7169;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7181 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7182 = cljs.core.seq.call(null,init_val_or_seq);
var i__7183 = 0;
var s__7184 = s__7182;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7185 = s__7184;
if(and__3822__auto____7185)
{return (i__7183 < size);
} else
{return and__3822__auto____7185;
}
})()))
{(a__7181[i__7183] = cljs.core.first.call(null,s__7184));
{
var G__7188 = (i__7183 + 1);
var G__7189 = cljs.core.next.call(null,s__7184);
i__7183 = G__7188;
s__7184 = G__7189;
continue;
}
} else
{return a__7181;
}
break;
}
} else
{var n__2575__auto____7186 = size;
var i__7187 = 0;
while(true){
if((i__7187 < n__2575__auto____7186))
{(a__7181[i__7187] = init_val_or_seq);
{
var G__7190 = (i__7187 + 1);
i__7187 = G__7190;
continue;
}
} else
{}
break;
}
return a__7181;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7198 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7199 = cljs.core.seq.call(null,init_val_or_seq);
var i__7200 = 0;
var s__7201 = s__7199;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7202 = s__7201;
if(and__3822__auto____7202)
{return (i__7200 < size);
} else
{return and__3822__auto____7202;
}
})()))
{(a__7198[i__7200] = cljs.core.first.call(null,s__7201));
{
var G__7205 = (i__7200 + 1);
var G__7206 = cljs.core.next.call(null,s__7201);
i__7200 = G__7205;
s__7201 = G__7206;
continue;
}
} else
{return a__7198;
}
break;
}
} else
{var n__2575__auto____7203 = size;
var i__7204 = 0;
while(true){
if((i__7204 < n__2575__auto____7203))
{(a__7198[i__7204] = init_val_or_seq);
{
var G__7207 = (i__7204 + 1);
i__7204 = G__7207;
continue;
}
} else
{}
break;
}
return a__7198;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7215 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7216 = cljs.core.seq.call(null,init_val_or_seq);
var i__7217 = 0;
var s__7218 = s__7216;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7219 = s__7218;
if(and__3822__auto____7219)
{return (i__7217 < size);
} else
{return and__3822__auto____7219;
}
})()))
{(a__7215[i__7217] = cljs.core.first.call(null,s__7218));
{
var G__7222 = (i__7217 + 1);
var G__7223 = cljs.core.next.call(null,s__7218);
i__7217 = G__7222;
s__7218 = G__7223;
continue;
}
} else
{return a__7215;
}
break;
}
} else
{var n__2575__auto____7220 = size;
var i__7221 = 0;
while(true){
if((i__7221 < n__2575__auto____7220))
{(a__7215[i__7221] = init_val_or_seq);
{
var G__7224 = (i__7221 + 1);
i__7221 = G__7224;
continue;
}
} else
{}
break;
}
return a__7215;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7229 = s;
var i__7230 = n;
var sum__7231 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7232 = (i__7230 > 0);
if(and__3822__auto____7232)
{return cljs.core.seq.call(null,s__7229);
} else
{return and__3822__auto____7232;
}
})()))
{{
var G__7233 = cljs.core.next.call(null,s__7229);
var G__7234 = (i__7230 - 1);
var G__7235 = (sum__7231 + 1);
s__7229 = G__7233;
i__7230 = G__7234;
sum__7231 = G__7235;
continue;
}
} else
{return sum__7231;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7240 = cljs.core.seq.call(null,x);
if(s__7240)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7240))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7240),concat.call(null,cljs.core.chunk_rest.call(null,s__7240),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7240),concat.call(null,cljs.core.rest.call(null,s__7240),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7244__delegate = function (x,y,zs){
var cat__7243 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7242 = cljs.core.seq.call(null,xys);
if(xys__7242)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7242))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7242),cat.call(null,cljs.core.chunk_rest.call(null,xys__7242),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7242),cat.call(null,cljs.core.rest.call(null,xys__7242),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__7243.call(null,concat.call(null,x,y),zs);
};
var G__7244 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7244__delegate.call(this, x, y, zs);
};
G__7244.cljs$lang$maxFixedArity = 2;
G__7244.cljs$lang$applyTo = (function (arglist__7245){
var x = cljs.core.first(arglist__7245);
var y = cljs.core.first(cljs.core.next(arglist__7245));
var zs = cljs.core.rest(cljs.core.next(arglist__7245));
return G__7244__delegate(x, y, zs);
});
G__7244.cljs$lang$arity$variadic = G__7244__delegate;
return G__7244;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7246__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7246 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7246__delegate.call(this, a, b, c, d, more);
};
G__7246.cljs$lang$maxFixedArity = 4;
G__7246.cljs$lang$applyTo = (function (arglist__7247){
var a = cljs.core.first(arglist__7247);
var b = cljs.core.first(cljs.core.next(arglist__7247));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7247)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7247))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7247))));
return G__7246__delegate(a, b, c, d, more);
});
G__7246.cljs$lang$arity$variadic = G__7246__delegate;
return G__7246;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
void 0;cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7289 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7290 = cljs.core._first.call(null,args__7289);
var args__7291 = cljs.core._rest.call(null,args__7289);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7290);
} else
{return f.call(null,a__7290);
}
} else
{var b__7292 = cljs.core._first.call(null,args__7291);
var args__7293 = cljs.core._rest.call(null,args__7291);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7290,b__7292);
} else
{return f.call(null,a__7290,b__7292);
}
} else
{var c__7294 = cljs.core._first.call(null,args__7293);
var args__7295 = cljs.core._rest.call(null,args__7293);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7290,b__7292,c__7294);
} else
{return f.call(null,a__7290,b__7292,c__7294);
}
} else
{var d__7296 = cljs.core._first.call(null,args__7295);
var args__7297 = cljs.core._rest.call(null,args__7295);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7290,b__7292,c__7294,d__7296);
} else
{return f.call(null,a__7290,b__7292,c__7294,d__7296);
}
} else
{var e__7298 = cljs.core._first.call(null,args__7297);
var args__7299 = cljs.core._rest.call(null,args__7297);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7290,b__7292,c__7294,d__7296,e__7298);
} else
{return f.call(null,a__7290,b__7292,c__7294,d__7296,e__7298);
}
} else
{var f__7300 = cljs.core._first.call(null,args__7299);
var args__7301 = cljs.core._rest.call(null,args__7299);
if((argc === 6))
{if(f__7300.cljs$lang$arity$6)
{return f__7300.cljs$lang$arity$6(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300);
}
} else
{var g__7302 = cljs.core._first.call(null,args__7301);
var args__7303 = cljs.core._rest.call(null,args__7301);
if((argc === 7))
{if(f__7300.cljs$lang$arity$7)
{return f__7300.cljs$lang$arity$7(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302);
}
} else
{var h__7304 = cljs.core._first.call(null,args__7303);
var args__7305 = cljs.core._rest.call(null,args__7303);
if((argc === 8))
{if(f__7300.cljs$lang$arity$8)
{return f__7300.cljs$lang$arity$8(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304);
}
} else
{var i__7306 = cljs.core._first.call(null,args__7305);
var args__7307 = cljs.core._rest.call(null,args__7305);
if((argc === 9))
{if(f__7300.cljs$lang$arity$9)
{return f__7300.cljs$lang$arity$9(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306);
}
} else
{var j__7308 = cljs.core._first.call(null,args__7307);
var args__7309 = cljs.core._rest.call(null,args__7307);
if((argc === 10))
{if(f__7300.cljs$lang$arity$10)
{return f__7300.cljs$lang$arity$10(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308);
}
} else
{var k__7310 = cljs.core._first.call(null,args__7309);
var args__7311 = cljs.core._rest.call(null,args__7309);
if((argc === 11))
{if(f__7300.cljs$lang$arity$11)
{return f__7300.cljs$lang$arity$11(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310);
}
} else
{var l__7312 = cljs.core._first.call(null,args__7311);
var args__7313 = cljs.core._rest.call(null,args__7311);
if((argc === 12))
{if(f__7300.cljs$lang$arity$12)
{return f__7300.cljs$lang$arity$12(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312);
}
} else
{var m__7314 = cljs.core._first.call(null,args__7313);
var args__7315 = cljs.core._rest.call(null,args__7313);
if((argc === 13))
{if(f__7300.cljs$lang$arity$13)
{return f__7300.cljs$lang$arity$13(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314);
}
} else
{var n__7316 = cljs.core._first.call(null,args__7315);
var args__7317 = cljs.core._rest.call(null,args__7315);
if((argc === 14))
{if(f__7300.cljs$lang$arity$14)
{return f__7300.cljs$lang$arity$14(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316);
}
} else
{var o__7318 = cljs.core._first.call(null,args__7317);
var args__7319 = cljs.core._rest.call(null,args__7317);
if((argc === 15))
{if(f__7300.cljs$lang$arity$15)
{return f__7300.cljs$lang$arity$15(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316,o__7318);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316,o__7318);
}
} else
{var p__7320 = cljs.core._first.call(null,args__7319);
var args__7321 = cljs.core._rest.call(null,args__7319);
if((argc === 16))
{if(f__7300.cljs$lang$arity$16)
{return f__7300.cljs$lang$arity$16(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316,o__7318,p__7320);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316,o__7318,p__7320);
}
} else
{var q__7322 = cljs.core._first.call(null,args__7321);
var args__7323 = cljs.core._rest.call(null,args__7321);
if((argc === 17))
{if(f__7300.cljs$lang$arity$17)
{return f__7300.cljs$lang$arity$17(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316,o__7318,p__7320,q__7322);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316,o__7318,p__7320,q__7322);
}
} else
{var r__7324 = cljs.core._first.call(null,args__7323);
var args__7325 = cljs.core._rest.call(null,args__7323);
if((argc === 18))
{if(f__7300.cljs$lang$arity$18)
{return f__7300.cljs$lang$arity$18(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316,o__7318,p__7320,q__7322,r__7324);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316,o__7318,p__7320,q__7322,r__7324);
}
} else
{var s__7326 = cljs.core._first.call(null,args__7325);
var args__7327 = cljs.core._rest.call(null,args__7325);
if((argc === 19))
{if(f__7300.cljs$lang$arity$19)
{return f__7300.cljs$lang$arity$19(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316,o__7318,p__7320,q__7322,r__7324,s__7326);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316,o__7318,p__7320,q__7322,r__7324,s__7326);
}
} else
{var t__7328 = cljs.core._first.call(null,args__7327);
var args__7329 = cljs.core._rest.call(null,args__7327);
if((argc === 20))
{if(f__7300.cljs$lang$arity$20)
{return f__7300.cljs$lang$arity$20(a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316,o__7318,p__7320,q__7322,r__7324,s__7326,t__7328);
} else
{return f__7300.call(null,a__7290,b__7292,c__7294,d__7296,e__7298,f__7300,g__7302,h__7304,i__7306,j__7308,k__7310,l__7312,m__7314,n__7316,o__7318,p__7320,q__7322,r__7324,s__7326,t__7328);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
void 0;/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7344 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7345 = cljs.core.bounded_count.call(null,args,(fixed_arity__7344 + 1));
if((bc__7345 <= fixed_arity__7344))
{return cljs.core.apply_to.call(null,f,bc__7345,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7346 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7347 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7348 = cljs.core.bounded_count.call(null,arglist__7346,(fixed_arity__7347 + 1));
if((bc__7348 <= fixed_arity__7347))
{return cljs.core.apply_to.call(null,f,bc__7348,arglist__7346);
} else
{return f.cljs$lang$applyTo(arglist__7346);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7346));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7349 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7350 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7351 = cljs.core.bounded_count.call(null,arglist__7349,(fixed_arity__7350 + 1));
if((bc__7351 <= fixed_arity__7350))
{return cljs.core.apply_to.call(null,f,bc__7351,arglist__7349);
} else
{return f.cljs$lang$applyTo(arglist__7349);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7349));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7352 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7353 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7354 = cljs.core.bounded_count.call(null,arglist__7352,(fixed_arity__7353 + 1));
if((bc__7354 <= fixed_arity__7353))
{return cljs.core.apply_to.call(null,f,bc__7354,arglist__7352);
} else
{return f.cljs$lang$applyTo(arglist__7352);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7352));
}
});
var apply__6 = (function() { 
var G__7358__delegate = function (f,a,b,c,d,args){
var arglist__7355 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7356 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7357 = cljs.core.bounded_count.call(null,arglist__7355,(fixed_arity__7356 + 1));
if((bc__7357 <= fixed_arity__7356))
{return cljs.core.apply_to.call(null,f,bc__7357,arglist__7355);
} else
{return f.cljs$lang$applyTo(arglist__7355);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7355));
}
};
var G__7358 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7358__delegate.call(this, f, a, b, c, d, args);
};
G__7358.cljs$lang$maxFixedArity = 5;
G__7358.cljs$lang$applyTo = (function (arglist__7359){
var f = cljs.core.first(arglist__7359);
var a = cljs.core.first(cljs.core.next(arglist__7359));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7359)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7359))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7359)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7359)))));
return G__7358__delegate(f, a, b, c, d, args);
});
G__7358.cljs$lang$arity$variadic = G__7358__delegate;
return G__7358;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7360){
var obj = cljs.core.first(arglist__7360);
var f = cljs.core.first(cljs.core.next(arglist__7360));
var args = cljs.core.rest(cljs.core.next(arglist__7360));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7361__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7361 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7361__delegate.call(this, x, y, more);
};
G__7361.cljs$lang$maxFixedArity = 2;
G__7361.cljs$lang$applyTo = (function (arglist__7362){
var x = cljs.core.first(arglist__7362);
var y = cljs.core.first(cljs.core.next(arglist__7362));
var more = cljs.core.rest(cljs.core.next(arglist__7362));
return G__7361__delegate(x, y, more);
});
G__7361.cljs$lang$arity$variadic = G__7361__delegate;
return G__7361;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7363 = pred;
var G__7364 = cljs.core.next.call(null,coll);
pred = G__7363;
coll = G__7364;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____7366 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7366))
{return or__3824__auto____7366;
} else
{{
var G__7367 = pred;
var G__7368 = cljs.core.next.call(null,coll);
pred = G__7367;
coll = G__7368;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7369 = null;
var G__7369__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7369__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7369__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7369__3 = (function() { 
var G__7370__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7370 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7370__delegate.call(this, x, y, zs);
};
G__7370.cljs$lang$maxFixedArity = 2;
G__7370.cljs$lang$applyTo = (function (arglist__7371){
var x = cljs.core.first(arglist__7371);
var y = cljs.core.first(cljs.core.next(arglist__7371));
var zs = cljs.core.rest(cljs.core.next(arglist__7371));
return G__7370__delegate(x, y, zs);
});
G__7370.cljs$lang$arity$variadic = G__7370__delegate;
return G__7370;
})()
;
G__7369 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7369__0.call(this);
case 1:
return G__7369__1.call(this,x);
case 2:
return G__7369__2.call(this,x,y);
default:
return G__7369__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7369.cljs$lang$maxFixedArity = 2;
G__7369.cljs$lang$applyTo = G__7369__3.cljs$lang$applyTo;
return G__7369;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7372__delegate = function (args){
return x;
};
var G__7372 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7372__delegate.call(this, args);
};
G__7372.cljs$lang$maxFixedArity = 0;
G__7372.cljs$lang$applyTo = (function (arglist__7373){
var args = cljs.core.seq(arglist__7373);;
return G__7372__delegate(args);
});
G__7372.cljs$lang$arity$variadic = G__7372__delegate;
return G__7372;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7380 = null;
var G__7380__0 = (function (){
return f.call(null,g.call(null));
});
var G__7380__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7380__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7380__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7380__4 = (function() { 
var G__7381__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7381 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7381__delegate.call(this, x, y, z, args);
};
G__7381.cljs$lang$maxFixedArity = 3;
G__7381.cljs$lang$applyTo = (function (arglist__7382){
var x = cljs.core.first(arglist__7382);
var y = cljs.core.first(cljs.core.next(arglist__7382));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7382)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7382)));
return G__7381__delegate(x, y, z, args);
});
G__7381.cljs$lang$arity$variadic = G__7381__delegate;
return G__7381;
})()
;
G__7380 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7380__0.call(this);
case 1:
return G__7380__1.call(this,x);
case 2:
return G__7380__2.call(this,x,y);
case 3:
return G__7380__3.call(this,x,y,z);
default:
return G__7380__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7380.cljs$lang$maxFixedArity = 3;
G__7380.cljs$lang$applyTo = G__7380__4.cljs$lang$applyTo;
return G__7380;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7383 = null;
var G__7383__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7383__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7383__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7383__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7383__4 = (function() { 
var G__7384__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7384 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7384__delegate.call(this, x, y, z, args);
};
G__7384.cljs$lang$maxFixedArity = 3;
G__7384.cljs$lang$applyTo = (function (arglist__7385){
var x = cljs.core.first(arglist__7385);
var y = cljs.core.first(cljs.core.next(arglist__7385));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7385)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7385)));
return G__7384__delegate(x, y, z, args);
});
G__7384.cljs$lang$arity$variadic = G__7384__delegate;
return G__7384;
})()
;
G__7383 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7383__0.call(this);
case 1:
return G__7383__1.call(this,x);
case 2:
return G__7383__2.call(this,x,y);
case 3:
return G__7383__3.call(this,x,y,z);
default:
return G__7383__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7383.cljs$lang$maxFixedArity = 3;
G__7383.cljs$lang$applyTo = G__7383__4.cljs$lang$applyTo;
return G__7383;
})()
});
var comp__4 = (function() { 
var G__7386__delegate = function (f1,f2,f3,fs){
var fs__7377 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7387__delegate = function (args){
var ret__7378 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7377),args);
var fs__7379 = cljs.core.next.call(null,fs__7377);
while(true){
if(fs__7379)
{{
var G__7388 = cljs.core.first.call(null,fs__7379).call(null,ret__7378);
var G__7389 = cljs.core.next.call(null,fs__7379);
ret__7378 = G__7388;
fs__7379 = G__7389;
continue;
}
} else
{return ret__7378;
}
break;
}
};
var G__7387 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7387__delegate.call(this, args);
};
G__7387.cljs$lang$maxFixedArity = 0;
G__7387.cljs$lang$applyTo = (function (arglist__7390){
var args = cljs.core.seq(arglist__7390);;
return G__7387__delegate(args);
});
G__7387.cljs$lang$arity$variadic = G__7387__delegate;
return G__7387;
})()
;
};
var G__7386 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7386__delegate.call(this, f1, f2, f3, fs);
};
G__7386.cljs$lang$maxFixedArity = 3;
G__7386.cljs$lang$applyTo = (function (arglist__7391){
var f1 = cljs.core.first(arglist__7391);
var f2 = cljs.core.first(cljs.core.next(arglist__7391));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7391)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7391)));
return G__7386__delegate(f1, f2, f3, fs);
});
G__7386.cljs$lang$arity$variadic = G__7386__delegate;
return G__7386;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7392__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7392 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7392__delegate.call(this, args);
};
G__7392.cljs$lang$maxFixedArity = 0;
G__7392.cljs$lang$applyTo = (function (arglist__7393){
var args = cljs.core.seq(arglist__7393);;
return G__7392__delegate(args);
});
G__7392.cljs$lang$arity$variadic = G__7392__delegate;
return G__7392;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7394__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7394 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7394__delegate.call(this, args);
};
G__7394.cljs$lang$maxFixedArity = 0;
G__7394.cljs$lang$applyTo = (function (arglist__7395){
var args = cljs.core.seq(arglist__7395);;
return G__7394__delegate(args);
});
G__7394.cljs$lang$arity$variadic = G__7394__delegate;
return G__7394;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7396__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7396 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7396__delegate.call(this, args);
};
G__7396.cljs$lang$maxFixedArity = 0;
G__7396.cljs$lang$applyTo = (function (arglist__7397){
var args = cljs.core.seq(arglist__7397);;
return G__7396__delegate(args);
});
G__7396.cljs$lang$arity$variadic = G__7396__delegate;
return G__7396;
})()
;
});
var partial__5 = (function() { 
var G__7398__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7399__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7399 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7399__delegate.call(this, args);
};
G__7399.cljs$lang$maxFixedArity = 0;
G__7399.cljs$lang$applyTo = (function (arglist__7400){
var args = cljs.core.seq(arglist__7400);;
return G__7399__delegate(args);
});
G__7399.cljs$lang$arity$variadic = G__7399__delegate;
return G__7399;
})()
;
};
var G__7398 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7398__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7398.cljs$lang$maxFixedArity = 4;
G__7398.cljs$lang$applyTo = (function (arglist__7401){
var f = cljs.core.first(arglist__7401);
var arg1 = cljs.core.first(cljs.core.next(arglist__7401));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7401)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7401))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7401))));
return G__7398__delegate(f, arg1, arg2, arg3, more);
});
G__7398.cljs$lang$arity$variadic = G__7398__delegate;
return G__7398;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7402 = null;
var G__7402__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7402__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7402__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7402__4 = (function() { 
var G__7403__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7403 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7403__delegate.call(this, a, b, c, ds);
};
G__7403.cljs$lang$maxFixedArity = 3;
G__7403.cljs$lang$applyTo = (function (arglist__7404){
var a = cljs.core.first(arglist__7404);
var b = cljs.core.first(cljs.core.next(arglist__7404));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7404)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7404)));
return G__7403__delegate(a, b, c, ds);
});
G__7403.cljs$lang$arity$variadic = G__7403__delegate;
return G__7403;
})()
;
G__7402 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7402__1.call(this,a);
case 2:
return G__7402__2.call(this,a,b);
case 3:
return G__7402__3.call(this,a,b,c);
default:
return G__7402__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7402.cljs$lang$maxFixedArity = 3;
G__7402.cljs$lang$applyTo = G__7402__4.cljs$lang$applyTo;
return G__7402;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7405 = null;
var G__7405__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7405__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7405__4 = (function() { 
var G__7406__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7406 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7406__delegate.call(this, a, b, c, ds);
};
G__7406.cljs$lang$maxFixedArity = 3;
G__7406.cljs$lang$applyTo = (function (arglist__7407){
var a = cljs.core.first(arglist__7407);
var b = cljs.core.first(cljs.core.next(arglist__7407));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7407)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7407)));
return G__7406__delegate(a, b, c, ds);
});
G__7406.cljs$lang$arity$variadic = G__7406__delegate;
return G__7406;
})()
;
G__7405 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7405__2.call(this,a,b);
case 3:
return G__7405__3.call(this,a,b,c);
default:
return G__7405__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7405.cljs$lang$maxFixedArity = 3;
G__7405.cljs$lang$applyTo = G__7405__4.cljs$lang$applyTo;
return G__7405;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7408 = null;
var G__7408__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7408__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7408__4 = (function() { 
var G__7409__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7409 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7409__delegate.call(this, a, b, c, ds);
};
G__7409.cljs$lang$maxFixedArity = 3;
G__7409.cljs$lang$applyTo = (function (arglist__7410){
var a = cljs.core.first(arglist__7410);
var b = cljs.core.first(cljs.core.next(arglist__7410));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7410)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7410)));
return G__7409__delegate(a, b, c, ds);
});
G__7409.cljs$lang$arity$variadic = G__7409__delegate;
return G__7409;
})()
;
G__7408 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7408__2.call(this,a,b);
case 3:
return G__7408__3.call(this,a,b,c);
default:
return G__7408__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7408.cljs$lang$maxFixedArity = 3;
G__7408.cljs$lang$applyTo = G__7408__4.cljs$lang$applyTo;
return G__7408;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__7426 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7434 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7434)
{var s__7435 = temp__3974__auto____7434;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7435))
{var c__7436 = cljs.core.chunk_first.call(null,s__7435);
var size__7437 = cljs.core.count.call(null,c__7436);
var b__7438 = cljs.core.chunk_buffer.call(null,size__7437);
var n__2575__auto____7439 = size__7437;
var i__7440 = 0;
while(true){
if((i__7440 < n__2575__auto____7439))
{cljs.core.chunk_append.call(null,b__7438,f.call(null,(idx + i__7440),cljs.core._nth.call(null,c__7436,i__7440)));
{
var G__7441 = (i__7440 + 1);
i__7440 = G__7441;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7438),mapi.call(null,(idx + size__7437),cljs.core.chunk_rest.call(null,s__7435)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7435)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7435)));
}
} else
{return null;
}
}),null));
});
return mapi__7426.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7451 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7451)
{var s__7452 = temp__3974__auto____7451;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7452))
{var c__7453 = cljs.core.chunk_first.call(null,s__7452);
var size__7454 = cljs.core.count.call(null,c__7453);
var b__7455 = cljs.core.chunk_buffer.call(null,size__7454);
var n__2575__auto____7456 = size__7454;
var i__7457 = 0;
while(true){
if((i__7457 < n__2575__auto____7456))
{var x__7458 = f.call(null,cljs.core._nth.call(null,c__7453,i__7457));
if((x__7458 == null))
{} else
{cljs.core.chunk_append.call(null,b__7455,x__7458);
}
{
var G__7460 = (i__7457 + 1);
i__7457 = G__7460;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7455),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7452)));
} else
{var x__7459 = f.call(null,cljs.core.first.call(null,s__7452));
if((x__7459 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7452));
} else
{return cljs.core.cons.call(null,x__7459,keep.call(null,f,cljs.core.rest.call(null,s__7452)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__7486 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7496 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7496)
{var s__7497 = temp__3974__auto____7496;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7497))
{var c__7498 = cljs.core.chunk_first.call(null,s__7497);
var size__7499 = cljs.core.count.call(null,c__7498);
var b__7500 = cljs.core.chunk_buffer.call(null,size__7499);
var n__2575__auto____7501 = size__7499;
var i__7502 = 0;
while(true){
if((i__7502 < n__2575__auto____7501))
{var x__7503 = f.call(null,(idx + i__7502),cljs.core._nth.call(null,c__7498,i__7502));
if((x__7503 == null))
{} else
{cljs.core.chunk_append.call(null,b__7500,x__7503);
}
{
var G__7505 = (i__7502 + 1);
i__7502 = G__7505;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7500),keepi.call(null,(idx + size__7499),cljs.core.chunk_rest.call(null,s__7497)));
} else
{var x__7504 = f.call(null,idx,cljs.core.first.call(null,s__7497));
if((x__7504 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7497));
} else
{return cljs.core.cons.call(null,x__7504,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7497)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7486.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7591 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7591))
{return p.call(null,y);
} else
{return and__3822__auto____7591;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7592 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7592))
{var and__3822__auto____7593 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____7593))
{return p.call(null,z);
} else
{return and__3822__auto____7593;
}
} else
{return and__3822__auto____7592;
}
})());
});
var ep1__4 = (function() { 
var G__7662__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7594 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7594))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____7594;
}
})());
};
var G__7662 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7662__delegate.call(this, x, y, z, args);
};
G__7662.cljs$lang$maxFixedArity = 3;
G__7662.cljs$lang$applyTo = (function (arglist__7663){
var x = cljs.core.first(arglist__7663);
var y = cljs.core.first(cljs.core.next(arglist__7663));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7663)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7663)));
return G__7662__delegate(x, y, z, args);
});
G__7662.cljs$lang$arity$variadic = G__7662__delegate;
return G__7662;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7606 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7606))
{return p2.call(null,x);
} else
{return and__3822__auto____7606;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7607 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7607))
{var and__3822__auto____7608 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7608))
{var and__3822__auto____7609 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7609))
{return p2.call(null,y);
} else
{return and__3822__auto____7609;
}
} else
{return and__3822__auto____7608;
}
} else
{return and__3822__auto____7607;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7610 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7610))
{var and__3822__auto____7611 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7611))
{var and__3822__auto____7612 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7612))
{var and__3822__auto____7613 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7613))
{var and__3822__auto____7614 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7614))
{return p2.call(null,z);
} else
{return and__3822__auto____7614;
}
} else
{return and__3822__auto____7613;
}
} else
{return and__3822__auto____7612;
}
} else
{return and__3822__auto____7611;
}
} else
{return and__3822__auto____7610;
}
})());
});
var ep2__4 = (function() { 
var G__7664__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7615 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7615))
{return cljs.core.every_QMARK_.call(null,(function (p1__7461_SHARP_){
var and__3822__auto____7616 = p1.call(null,p1__7461_SHARP_);
if(cljs.core.truth_(and__3822__auto____7616))
{return p2.call(null,p1__7461_SHARP_);
} else
{return and__3822__auto____7616;
}
}),args);
} else
{return and__3822__auto____7615;
}
})());
};
var G__7664 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7664__delegate.call(this, x, y, z, args);
};
G__7664.cljs$lang$maxFixedArity = 3;
G__7664.cljs$lang$applyTo = (function (arglist__7665){
var x = cljs.core.first(arglist__7665);
var y = cljs.core.first(cljs.core.next(arglist__7665));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7665)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7665)));
return G__7664__delegate(x, y, z, args);
});
G__7664.cljs$lang$arity$variadic = G__7664__delegate;
return G__7664;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7635 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7635))
{var and__3822__auto____7636 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7636))
{return p3.call(null,x);
} else
{return and__3822__auto____7636;
}
} else
{return and__3822__auto____7635;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7637 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7637))
{var and__3822__auto____7638 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7638))
{var and__3822__auto____7639 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7639))
{var and__3822__auto____7640 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7640))
{var and__3822__auto____7641 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7641))
{return p3.call(null,y);
} else
{return and__3822__auto____7641;
}
} else
{return and__3822__auto____7640;
}
} else
{return and__3822__auto____7639;
}
} else
{return and__3822__auto____7638;
}
} else
{return and__3822__auto____7637;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7642 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7642))
{var and__3822__auto____7643 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7643))
{var and__3822__auto____7644 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7644))
{var and__3822__auto____7645 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7645))
{var and__3822__auto____7646 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7646))
{var and__3822__auto____7647 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____7647))
{var and__3822__auto____7648 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7648))
{var and__3822__auto____7649 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____7649))
{return p3.call(null,z);
} else
{return and__3822__auto____7649;
}
} else
{return and__3822__auto____7648;
}
} else
{return and__3822__auto____7647;
}
} else
{return and__3822__auto____7646;
}
} else
{return and__3822__auto____7645;
}
} else
{return and__3822__auto____7644;
}
} else
{return and__3822__auto____7643;
}
} else
{return and__3822__auto____7642;
}
})());
});
var ep3__4 = (function() { 
var G__7666__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7650 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7650))
{return cljs.core.every_QMARK_.call(null,(function (p1__7462_SHARP_){
var and__3822__auto____7651 = p1.call(null,p1__7462_SHARP_);
if(cljs.core.truth_(and__3822__auto____7651))
{var and__3822__auto____7652 = p2.call(null,p1__7462_SHARP_);
if(cljs.core.truth_(and__3822__auto____7652))
{return p3.call(null,p1__7462_SHARP_);
} else
{return and__3822__auto____7652;
}
} else
{return and__3822__auto____7651;
}
}),args);
} else
{return and__3822__auto____7650;
}
})());
};
var G__7666 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7666__delegate.call(this, x, y, z, args);
};
G__7666.cljs$lang$maxFixedArity = 3;
G__7666.cljs$lang$applyTo = (function (arglist__7667){
var x = cljs.core.first(arglist__7667);
var y = cljs.core.first(cljs.core.next(arglist__7667));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7667)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7667)));
return G__7666__delegate(x, y, z, args);
});
G__7666.cljs$lang$arity$variadic = G__7666__delegate;
return G__7666;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__7668__delegate = function (p1,p2,p3,ps){
var ps__7653 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7463_SHARP_){
return p1__7463_SHARP_.call(null,x);
}),ps__7653);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7464_SHARP_){
var and__3822__auto____7658 = p1__7464_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7658))
{return p1__7464_SHARP_.call(null,y);
} else
{return and__3822__auto____7658;
}
}),ps__7653);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7465_SHARP_){
var and__3822__auto____7659 = p1__7465_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7659))
{var and__3822__auto____7660 = p1__7465_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____7660))
{return p1__7465_SHARP_.call(null,z);
} else
{return and__3822__auto____7660;
}
} else
{return and__3822__auto____7659;
}
}),ps__7653);
});
var epn__4 = (function() { 
var G__7669__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7661 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7661))
{return cljs.core.every_QMARK_.call(null,(function (p1__7466_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7466_SHARP_,args);
}),ps__7653);
} else
{return and__3822__auto____7661;
}
})());
};
var G__7669 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7669__delegate.call(this, x, y, z, args);
};
G__7669.cljs$lang$maxFixedArity = 3;
G__7669.cljs$lang$applyTo = (function (arglist__7670){
var x = cljs.core.first(arglist__7670);
var y = cljs.core.first(cljs.core.next(arglist__7670));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7670)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7670)));
return G__7669__delegate(x, y, z, args);
});
G__7669.cljs$lang$arity$variadic = G__7669__delegate;
return G__7669;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__7668 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7668__delegate.call(this, p1, p2, p3, ps);
};
G__7668.cljs$lang$maxFixedArity = 3;
G__7668.cljs$lang$applyTo = (function (arglist__7671){
var p1 = cljs.core.first(arglist__7671);
var p2 = cljs.core.first(cljs.core.next(arglist__7671));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7671)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7671)));
return G__7668__delegate(p1, p2, p3, ps);
});
G__7668.cljs$lang$arity$variadic = G__7668__delegate;
return G__7668;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____7752 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7752))
{return or__3824__auto____7752;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____7753 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7753))
{return or__3824__auto____7753;
} else
{var or__3824__auto____7754 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____7754))
{return or__3824__auto____7754;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__7823__delegate = function (x,y,z,args){
var or__3824__auto____7755 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7755))
{return or__3824__auto____7755;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7823 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7823__delegate.call(this, x, y, z, args);
};
G__7823.cljs$lang$maxFixedArity = 3;
G__7823.cljs$lang$applyTo = (function (arglist__7824){
var x = cljs.core.first(arglist__7824);
var y = cljs.core.first(cljs.core.next(arglist__7824));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7824)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7824)));
return G__7823__delegate(x, y, z, args);
});
G__7823.cljs$lang$arity$variadic = G__7823__delegate;
return G__7823;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____7767 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7767))
{return or__3824__auto____7767;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____7768 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7768))
{return or__3824__auto____7768;
} else
{var or__3824__auto____7769 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7769))
{return or__3824__auto____7769;
} else
{var or__3824__auto____7770 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7770))
{return or__3824__auto____7770;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____7771 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7771))
{return or__3824__auto____7771;
} else
{var or__3824__auto____7772 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7772))
{return or__3824__auto____7772;
} else
{var or__3824__auto____7773 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7773))
{return or__3824__auto____7773;
} else
{var or__3824__auto____7774 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7774))
{return or__3824__auto____7774;
} else
{var or__3824__auto____7775 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7775))
{return or__3824__auto____7775;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__7825__delegate = function (x,y,z,args){
var or__3824__auto____7776 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7776))
{return or__3824__auto____7776;
} else
{return cljs.core.some.call(null,(function (p1__7506_SHARP_){
var or__3824__auto____7777 = p1.call(null,p1__7506_SHARP_);
if(cljs.core.truth_(or__3824__auto____7777))
{return or__3824__auto____7777;
} else
{return p2.call(null,p1__7506_SHARP_);
}
}),args);
}
};
var G__7825 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7825__delegate.call(this, x, y, z, args);
};
G__7825.cljs$lang$maxFixedArity = 3;
G__7825.cljs$lang$applyTo = (function (arglist__7826){
var x = cljs.core.first(arglist__7826);
var y = cljs.core.first(cljs.core.next(arglist__7826));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7826)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7826)));
return G__7825__delegate(x, y, z, args);
});
G__7825.cljs$lang$arity$variadic = G__7825__delegate;
return G__7825;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____7796 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7796))
{return or__3824__auto____7796;
} else
{var or__3824__auto____7797 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7797))
{return or__3824__auto____7797;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____7798 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7798))
{return or__3824__auto____7798;
} else
{var or__3824__auto____7799 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7799))
{return or__3824__auto____7799;
} else
{var or__3824__auto____7800 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7800))
{return or__3824__auto____7800;
} else
{var or__3824__auto____7801 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7801))
{return or__3824__auto____7801;
} else
{var or__3824__auto____7802 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7802))
{return or__3824__auto____7802;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____7803 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7803))
{return or__3824__auto____7803;
} else
{var or__3824__auto____7804 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7804))
{return or__3824__auto____7804;
} else
{var or__3824__auto____7805 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7805))
{return or__3824__auto____7805;
} else
{var or__3824__auto____7806 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7806))
{return or__3824__auto____7806;
} else
{var or__3824__auto____7807 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7807))
{return or__3824__auto____7807;
} else
{var or__3824__auto____7808 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____7808))
{return or__3824__auto____7808;
} else
{var or__3824__auto____7809 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7809))
{return or__3824__auto____7809;
} else
{var or__3824__auto____7810 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____7810))
{return or__3824__auto____7810;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__7827__delegate = function (x,y,z,args){
var or__3824__auto____7811 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7811))
{return or__3824__auto____7811;
} else
{return cljs.core.some.call(null,(function (p1__7507_SHARP_){
var or__3824__auto____7812 = p1.call(null,p1__7507_SHARP_);
if(cljs.core.truth_(or__3824__auto____7812))
{return or__3824__auto____7812;
} else
{var or__3824__auto____7813 = p2.call(null,p1__7507_SHARP_);
if(cljs.core.truth_(or__3824__auto____7813))
{return or__3824__auto____7813;
} else
{return p3.call(null,p1__7507_SHARP_);
}
}
}),args);
}
};
var G__7827 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7827__delegate.call(this, x, y, z, args);
};
G__7827.cljs$lang$maxFixedArity = 3;
G__7827.cljs$lang$applyTo = (function (arglist__7828){
var x = cljs.core.first(arglist__7828);
var y = cljs.core.first(cljs.core.next(arglist__7828));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7828)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7828)));
return G__7827__delegate(x, y, z, args);
});
G__7827.cljs$lang$arity$variadic = G__7827__delegate;
return G__7827;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__7829__delegate = function (p1,p2,p3,ps){
var ps__7814 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7508_SHARP_){
return p1__7508_SHARP_.call(null,x);
}),ps__7814);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7509_SHARP_){
var or__3824__auto____7819 = p1__7509_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7819))
{return or__3824__auto____7819;
} else
{return p1__7509_SHARP_.call(null,y);
}
}),ps__7814);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7510_SHARP_){
var or__3824__auto____7820 = p1__7510_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7820))
{return or__3824__auto____7820;
} else
{var or__3824__auto____7821 = p1__7510_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____7821))
{return or__3824__auto____7821;
} else
{return p1__7510_SHARP_.call(null,z);
}
}
}),ps__7814);
});
var spn__4 = (function() { 
var G__7830__delegate = function (x,y,z,args){
var or__3824__auto____7822 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7822))
{return or__3824__auto____7822;
} else
{return cljs.core.some.call(null,(function (p1__7511_SHARP_){
return cljs.core.some.call(null,p1__7511_SHARP_,args);
}),ps__7814);
}
};
var G__7830 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7830__delegate.call(this, x, y, z, args);
};
G__7830.cljs$lang$maxFixedArity = 3;
G__7830.cljs$lang$applyTo = (function (arglist__7831){
var x = cljs.core.first(arglist__7831);
var y = cljs.core.first(cljs.core.next(arglist__7831));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7831)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7831)));
return G__7830__delegate(x, y, z, args);
});
G__7830.cljs$lang$arity$variadic = G__7830__delegate;
return G__7830;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__7829 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7829__delegate.call(this, p1, p2, p3, ps);
};
G__7829.cljs$lang$maxFixedArity = 3;
G__7829.cljs$lang$applyTo = (function (arglist__7832){
var p1 = cljs.core.first(arglist__7832);
var p2 = cljs.core.first(cljs.core.next(arglist__7832));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7832)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7832)));
return G__7829__delegate(p1, p2, p3, ps);
});
G__7829.cljs$lang$arity$variadic = G__7829__delegate;
return G__7829;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7851 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7851)
{var s__7852 = temp__3974__auto____7851;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7852))
{var c__7853 = cljs.core.chunk_first.call(null,s__7852);
var size__7854 = cljs.core.count.call(null,c__7853);
var b__7855 = cljs.core.chunk_buffer.call(null,size__7854);
var n__2575__auto____7856 = size__7854;
var i__7857 = 0;
while(true){
if((i__7857 < n__2575__auto____7856))
{cljs.core.chunk_append.call(null,b__7855,f.call(null,cljs.core._nth.call(null,c__7853,i__7857)));
{
var G__7869 = (i__7857 + 1);
i__7857 = G__7869;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7855),map.call(null,f,cljs.core.chunk_rest.call(null,s__7852)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__7852)),map.call(null,f,cljs.core.rest.call(null,s__7852)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7858 = cljs.core.seq.call(null,c1);
var s2__7859 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7860 = s1__7858;
if(and__3822__auto____7860)
{return s2__7859;
} else
{return and__3822__auto____7860;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7858),cljs.core.first.call(null,s2__7859)),map.call(null,f,cljs.core.rest.call(null,s1__7858),cljs.core.rest.call(null,s2__7859)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7861 = cljs.core.seq.call(null,c1);
var s2__7862 = cljs.core.seq.call(null,c2);
var s3__7863 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____7864 = s1__7861;
if(and__3822__auto____7864)
{var and__3822__auto____7865 = s2__7862;
if(and__3822__auto____7865)
{return s3__7863;
} else
{return and__3822__auto____7865;
}
} else
{return and__3822__auto____7864;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7861),cljs.core.first.call(null,s2__7862),cljs.core.first.call(null,s3__7863)),map.call(null,f,cljs.core.rest.call(null,s1__7861),cljs.core.rest.call(null,s2__7862),cljs.core.rest.call(null,s3__7863)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__7870__delegate = function (f,c1,c2,c3,colls){
var step__7868 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7867 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7867))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__7867),step.call(null,map.call(null,cljs.core.rest,ss__7867)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__7672_SHARP_){
return cljs.core.apply.call(null,f,p1__7672_SHARP_);
}),step__7868.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__7870 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7870__delegate.call(this, f, c1, c2, c3, colls);
};
G__7870.cljs$lang$maxFixedArity = 4;
G__7870.cljs$lang$applyTo = (function (arglist__7871){
var f = cljs.core.first(arglist__7871);
var c1 = cljs.core.first(cljs.core.next(arglist__7871));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7871)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7871))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7871))));
return G__7870__delegate(f, c1, c2, c3, colls);
});
G__7870.cljs$lang$arity$variadic = G__7870__delegate;
return G__7870;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____7874 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7874)
{var s__7875 = temp__3974__auto____7874;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__7875),take.call(null,(n - 1),cljs.core.rest.call(null,s__7875)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__7881 = (function (n,coll){
while(true){
var s__7879 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7880 = (n > 0);
if(and__3822__auto____7880)
{return s__7879;
} else
{return and__3822__auto____7880;
}
})()))
{{
var G__7882 = (n - 1);
var G__7883 = cljs.core.rest.call(null,s__7879);
n = G__7882;
coll = G__7883;
continue;
}
} else
{return s__7879;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7881.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__7886 = cljs.core.seq.call(null,coll);
var lead__7887 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__7887)
{{
var G__7888 = cljs.core.next.call(null,s__7886);
var G__7889 = cljs.core.next.call(null,lead__7887);
s__7886 = G__7888;
lead__7887 = G__7889;
continue;
}
} else
{return s__7886;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7895 = (function (pred,coll){
while(true){
var s__7893 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7894 = s__7893;
if(and__3822__auto____7894)
{return pred.call(null,cljs.core.first.call(null,s__7893));
} else
{return and__3822__auto____7894;
}
})()))
{{
var G__7896 = pred;
var G__7897 = cljs.core.rest.call(null,s__7893);
pred = G__7896;
coll = G__7897;
continue;
}
} else
{return s__7893;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7895.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7900 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7900)
{var s__7901 = temp__3974__auto____7900;
return cljs.core.concat.call(null,s__7901,cycle.call(null,s__7901));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7906 = cljs.core.seq.call(null,c1);
var s2__7907 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7908 = s1__7906;
if(and__3822__auto____7908)
{return s2__7907;
} else
{return and__3822__auto____7908;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__7906),cljs.core.cons.call(null,cljs.core.first.call(null,s2__7907),interleave.call(null,cljs.core.rest.call(null,s1__7906),cljs.core.rest.call(null,s2__7907))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__7910__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7909 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7909))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__7909),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__7909)));
} else
{return null;
}
}),null));
};
var G__7910 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7910__delegate.call(this, c1, c2, colls);
};
G__7910.cljs$lang$maxFixedArity = 2;
G__7910.cljs$lang$applyTo = (function (arglist__7911){
var c1 = cljs.core.first(arglist__7911);
var c2 = cljs.core.first(cljs.core.next(arglist__7911));
var colls = cljs.core.rest(cljs.core.next(arglist__7911));
return G__7910__delegate(c1, c2, colls);
});
G__7910.cljs$lang$arity$variadic = G__7910__delegate;
return G__7910;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__7921 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____7919 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7919)
{var coll__7920 = temp__3971__auto____7919;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__7920),cat.call(null,cljs.core.rest.call(null,coll__7920),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__7921.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__7922__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__7922 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7922__delegate.call(this, f, coll, colls);
};
G__7922.cljs$lang$maxFixedArity = 2;
G__7922.cljs$lang$applyTo = (function (arglist__7923){
var f = cljs.core.first(arglist__7923);
var coll = cljs.core.first(cljs.core.next(arglist__7923));
var colls = cljs.core.rest(cljs.core.next(arglist__7923));
return G__7922__delegate(f, coll, colls);
});
G__7922.cljs$lang$arity$variadic = G__7922__delegate;
return G__7922;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7933 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7933)
{var s__7934 = temp__3974__auto____7933;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7934))
{var c__7935 = cljs.core.chunk_first.call(null,s__7934);
var size__7936 = cljs.core.count.call(null,c__7935);
var b__7937 = cljs.core.chunk_buffer.call(null,size__7936);
var n__2575__auto____7938 = size__7936;
var i__7939 = 0;
while(true){
if((i__7939 < n__2575__auto____7938))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__7935,i__7939))))
{cljs.core.chunk_append.call(null,b__7937,cljs.core._nth.call(null,c__7935,i__7939));
} else
{}
{
var G__7942 = (i__7939 + 1);
i__7939 = G__7942;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7937),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__7934)));
} else
{var f__7940 = cljs.core.first.call(null,s__7934);
var r__7941 = cljs.core.rest.call(null,s__7934);
if(cljs.core.truth_(pred.call(null,f__7940)))
{return cljs.core.cons.call(null,f__7940,filter.call(null,pred,r__7941));
} else
{return filter.call(null,pred,r__7941);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__7945 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__7945.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__7943_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__7943_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__7949__7950 = to;
if(G__7949__7950)
{if((function (){var or__3824__auto____7951 = (G__7949__7950.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____7951)
{return or__3824__auto____7951;
} else
{return G__7949__7950.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__7949__7950.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7949__7950);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7949__7950);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__7952__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__7952 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7952__delegate.call(this, f, c1, c2, c3, colls);
};
G__7952.cljs$lang$maxFixedArity = 4;
G__7952.cljs$lang$applyTo = (function (arglist__7953){
var f = cljs.core.first(arglist__7953);
var c1 = cljs.core.first(cljs.core.next(arglist__7953));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7953)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7953))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7953))));
return G__7952__delegate(f, c1, c2, c3, colls);
});
G__7952.cljs$lang$arity$variadic = G__7952__delegate;
return G__7952;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7960 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7960)
{var s__7961 = temp__3974__auto____7960;
var p__7962 = cljs.core.take.call(null,n,s__7961);
if((n === cljs.core.count.call(null,p__7962)))
{return cljs.core.cons.call(null,p__7962,partition.call(null,n,step,cljs.core.drop.call(null,step,s__7961)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7963 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7963)
{var s__7964 = temp__3974__auto____7963;
var p__7965 = cljs.core.take.call(null,n,s__7964);
if((n === cljs.core.count.call(null,p__7965)))
{return cljs.core.cons.call(null,p__7965,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__7964)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__7965,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__7970 = cljs.core.lookup_sentinel;
var m__7971 = m;
var ks__7972 = cljs.core.seq.call(null,ks);
while(true){
if(ks__7972)
{var m__7973 = cljs.core._lookup.call(null,m__7971,cljs.core.first.call(null,ks__7972),sentinel__7970);
if((sentinel__7970 === m__7973))
{return not_found;
} else
{{
var G__7974 = sentinel__7970;
var G__7975 = m__7973;
var G__7976 = cljs.core.next.call(null,ks__7972);
sentinel__7970 = G__7974;
m__7971 = G__7975;
ks__7972 = G__7976;
continue;
}
}
} else
{return m__7971;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__7977,v){
var vec__7982__7983 = p__7977;
var k__7984 = cljs.core.nth.call(null,vec__7982__7983,0,null);
var ks__7985 = cljs.core.nthnext.call(null,vec__7982__7983,1);
if(cljs.core.truth_(ks__7985))
{return cljs.core.assoc.call(null,m,k__7984,assoc_in.call(null,cljs.core._lookup.call(null,m,k__7984,null),ks__7985,v));
} else
{return cljs.core.assoc.call(null,m,k__7984,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__7986,f,args){
var vec__7991__7992 = p__7986;
var k__7993 = cljs.core.nth.call(null,vec__7991__7992,0,null);
var ks__7994 = cljs.core.nthnext.call(null,vec__7991__7992,1);
if(cljs.core.truth_(ks__7994))
{return cljs.core.assoc.call(null,m,k__7993,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__7993,null),ks__7994,f,args));
} else
{return cljs.core.assoc.call(null,m,k__7993,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__7993,null),args));
}
};
var update_in = function (m,p__7986,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__7986, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__7995){
var m = cljs.core.first(arglist__7995);
var p__7986 = cljs.core.first(cljs.core.next(arglist__7995));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7995)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7995)));
return update_in__delegate(m, p__7986, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7998 = this;
var h__2236__auto____7999 = this__7998.__hash;
if(!((h__2236__auto____7999 == null)))
{return h__2236__auto____7999;
} else
{var h__2236__auto____8000 = cljs.core.hash_coll.call(null,coll);
this__7998.__hash = h__2236__auto____8000;
return h__2236__auto____8000;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8001 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8002 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8003 = this;
var new_array__8004 = this__8003.array.slice();
(new_array__8004[k] = v);
return (new cljs.core.Vector(this__8003.meta,new_array__8004,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8035 = null;
var G__8035__2 = (function (this_sym8005,k){
var this__8007 = this;
var this_sym8005__8008 = this;
var coll__8009 = this_sym8005__8008;
return coll__8009.cljs$core$ILookup$_lookup$arity$2(coll__8009,k);
});
var G__8035__3 = (function (this_sym8006,k,not_found){
var this__8007 = this;
var this_sym8006__8010 = this;
var coll__8011 = this_sym8006__8010;
return coll__8011.cljs$core$ILookup$_lookup$arity$3(coll__8011,k,not_found);
});
G__8035 = function(this_sym8006,k,not_found){
switch(arguments.length){
case 2:
return G__8035__2.call(this,this_sym8006,k);
case 3:
return G__8035__3.call(this,this_sym8006,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8035;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym7996,args7997){
var this__8012 = this;
return this_sym7996.call.apply(this_sym7996,[this_sym7996].concat(args7997.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8013 = this;
var new_array__8014 = this__8013.array.slice();
new_array__8014.push(o);
return (new cljs.core.Vector(this__8013.meta,new_array__8014,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8015 = this;
var this__8016 = this;
return cljs.core.pr_str.call(null,this__8016);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8017 = this;
return cljs.core.ci_reduce.call(null,this__8017.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8018 = this;
return cljs.core.ci_reduce.call(null,this__8018.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8019 = this;
if((this__8019.array.length > 0))
{var vector_seq__8020 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8019.array.length))
{return cljs.core.cons.call(null,(this__8019.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8020.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8021 = this;
return this__8021.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8022 = this;
var count__8023 = this__8022.array.length;
if((count__8023 > 0))
{return (this__8022.array[(count__8023 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8024 = this;
if((this__8024.array.length > 0))
{var new_array__8025 = this__8024.array.slice();
new_array__8025.pop();
return (new cljs.core.Vector(this__8024.meta,new_array__8025,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8026 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8027 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8028 = this;
return (new cljs.core.Vector(meta,this__8028.array,this__8028.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8029 = this;
return this__8029.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8030 = this;
if((function (){var and__3822__auto____8031 = (0 <= n);
if(and__3822__auto____8031)
{return (n < this__8030.array.length);
} else
{return and__3822__auto____8031;
}
})())
{return (this__8030.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8032 = this;
if((function (){var and__3822__auto____8033 = (0 <= n);
if(and__3822__auto____8033)
{return (n < this__8032.array.length);
} else
{return and__3822__auto____8033;
}
})())
{return (this__8032.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8034 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8034.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2354__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8037 = pv.cnt;
if((cnt__8037 < 32))
{return 0;
} else
{return (((cnt__8037 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8043 = level;
var ret__8044 = node;
while(true){
if((ll__8043 === 0))
{return ret__8044;
} else
{var embed__8045 = ret__8044;
var r__8046 = cljs.core.pv_fresh_node.call(null,edit);
var ___8047 = cljs.core.pv_aset.call(null,r__8046,0,embed__8045);
{
var G__8048 = (ll__8043 - 5);
var G__8049 = r__8046;
ll__8043 = G__8048;
ret__8044 = G__8049;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8055 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8056 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8055,subidx__8056,tailnode);
return ret__8055;
} else
{var child__8057 = cljs.core.pv_aget.call(null,parent,subidx__8056);
if(!((child__8057 == null)))
{var node_to_insert__8058 = push_tail.call(null,pv,(level - 5),child__8057,tailnode);
cljs.core.pv_aset.call(null,ret__8055,subidx__8056,node_to_insert__8058);
return ret__8055;
} else
{var node_to_insert__8059 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8055,subidx__8056,node_to_insert__8059);
return ret__8055;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8063 = (0 <= i);
if(and__3822__auto____8063)
{return (i < pv.cnt);
} else
{return and__3822__auto____8063;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8064 = pv.root;
var level__8065 = pv.shift;
while(true){
if((level__8065 > 0))
{{
var G__8066 = cljs.core.pv_aget.call(null,node__8064,((i >>> level__8065) & 31));
var G__8067 = (level__8065 - 5);
node__8064 = G__8066;
level__8065 = G__8067;
continue;
}
} else
{return node__8064.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8070 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8070,(i & 31),val);
return ret__8070;
} else
{var subidx__8071 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8070,subidx__8071,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8071),i,val));
return ret__8070;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8077 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8078 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8077));
if((function (){var and__3822__auto____8079 = (new_child__8078 == null);
if(and__3822__auto____8079)
{return (subidx__8077 === 0);
} else
{return and__3822__auto____8079;
}
})())
{return null;
} else
{var ret__8080 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8080,subidx__8077,new_child__8078);
return ret__8080;
}
} else
{if((subidx__8077 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8081 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8081,subidx__8077,null);
return ret__8081;
} else
{return null;
}
}
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8084 = this;
return (new cljs.core.TransientVector(this__8084.cnt,this__8084.shift,cljs.core.tv_editable_root.call(null,this__8084.root),cljs.core.tv_editable_tail.call(null,this__8084.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8085 = this;
var h__2236__auto____8086 = this__8085.__hash;
if(!((h__2236__auto____8086 == null)))
{return h__2236__auto____8086;
} else
{var h__2236__auto____8087 = cljs.core.hash_coll.call(null,coll);
this__8085.__hash = h__2236__auto____8087;
return h__2236__auto____8087;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8088 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8089 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8090 = this;
if((function (){var and__3822__auto____8091 = (0 <= k);
if(and__3822__auto____8091)
{return (k < this__8090.cnt);
} else
{return and__3822__auto____8091;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8092 = this__8090.tail.slice();
(new_tail__8092[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8090.meta,this__8090.cnt,this__8090.shift,this__8090.root,new_tail__8092,null));
} else
{return (new cljs.core.PersistentVector(this__8090.meta,this__8090.cnt,this__8090.shift,cljs.core.do_assoc.call(null,coll,this__8090.shift,this__8090.root,k,v),this__8090.tail,null));
}
} else
{if((k === this__8090.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8090.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8140 = null;
var G__8140__2 = (function (this_sym8093,k){
var this__8095 = this;
var this_sym8093__8096 = this;
var coll__8097 = this_sym8093__8096;
return coll__8097.cljs$core$ILookup$_lookup$arity$2(coll__8097,k);
});
var G__8140__3 = (function (this_sym8094,k,not_found){
var this__8095 = this;
var this_sym8094__8098 = this;
var coll__8099 = this_sym8094__8098;
return coll__8099.cljs$core$ILookup$_lookup$arity$3(coll__8099,k,not_found);
});
G__8140 = function(this_sym8094,k,not_found){
switch(arguments.length){
case 2:
return G__8140__2.call(this,this_sym8094,k);
case 3:
return G__8140__3.call(this,this_sym8094,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8140;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8082,args8083){
var this__8100 = this;
return this_sym8082.call.apply(this_sym8082,[this_sym8082].concat(args8083.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8101 = this;
var step_init__8102 = [0,init];
var i__8103 = 0;
while(true){
if((i__8103 < this__8101.cnt))
{var arr__8104 = cljs.core.array_for.call(null,v,i__8103);
var len__8105 = arr__8104.length;
var init__8109 = (function (){var j__8106 = 0;
var init__8107 = (step_init__8102[1]);
while(true){
if((j__8106 < len__8105))
{var init__8108 = f.call(null,init__8107,(j__8106 + i__8103),(arr__8104[j__8106]));
if(cljs.core.reduced_QMARK_.call(null,init__8108))
{return init__8108;
} else
{{
var G__8141 = (j__8106 + 1);
var G__8142 = init__8108;
j__8106 = G__8141;
init__8107 = G__8142;
continue;
}
}
} else
{(step_init__8102[0] = len__8105);
(step_init__8102[1] = init__8107);
return init__8107;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8109))
{return cljs.core.deref.call(null,init__8109);
} else
{{
var G__8143 = (i__8103 + (step_init__8102[0]));
i__8103 = G__8143;
continue;
}
}
} else
{return (step_init__8102[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8110 = this;
if(((this__8110.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8111 = this__8110.tail.slice();
new_tail__8111.push(o);
return (new cljs.core.PersistentVector(this__8110.meta,(this__8110.cnt + 1),this__8110.shift,this__8110.root,new_tail__8111,null));
} else
{var root_overflow_QMARK___8112 = ((this__8110.cnt >>> 5) > (1 << this__8110.shift));
var new_shift__8113 = ((root_overflow_QMARK___8112)?(this__8110.shift + 5):this__8110.shift);
var new_root__8115 = ((root_overflow_QMARK___8112)?(function (){var n_r__8114 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8114,0,this__8110.root);
cljs.core.pv_aset.call(null,n_r__8114,1,cljs.core.new_path.call(null,null,this__8110.shift,(new cljs.core.VectorNode(null,this__8110.tail))));
return n_r__8114;
})():cljs.core.push_tail.call(null,coll,this__8110.shift,this__8110.root,(new cljs.core.VectorNode(null,this__8110.tail))));
return (new cljs.core.PersistentVector(this__8110.meta,(this__8110.cnt + 1),new_shift__8113,new_root__8115,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8116 = this;
if((this__8116.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8116.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8117 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8118 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8119 = this;
var this__8120 = this;
return cljs.core.pr_str.call(null,this__8120);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8121 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8122 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8123 = this;
if((this__8123.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8124 = this;
return this__8124.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8125 = this;
if((this__8125.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8125.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8126 = this;
if((this__8126.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8126.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8126.meta);
} else
{if((1 < (this__8126.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8126.meta,(this__8126.cnt - 1),this__8126.shift,this__8126.root,this__8126.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8127 = cljs.core.array_for.call(null,coll,(this__8126.cnt - 2));
var nr__8128 = cljs.core.pop_tail.call(null,coll,this__8126.shift,this__8126.root);
var new_root__8129 = (((nr__8128 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8128);
var cnt_1__8130 = (this__8126.cnt - 1);
if((function (){var and__3822__auto____8131 = (5 < this__8126.shift);
if(and__3822__auto____8131)
{return (cljs.core.pv_aget.call(null,new_root__8129,1) == null);
} else
{return and__3822__auto____8131;
}
})())
{return (new cljs.core.PersistentVector(this__8126.meta,cnt_1__8130,(this__8126.shift - 5),cljs.core.pv_aget.call(null,new_root__8129,0),new_tail__8127,null));
} else
{return (new cljs.core.PersistentVector(this__8126.meta,cnt_1__8130,this__8126.shift,new_root__8129,new_tail__8127,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8132 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8133 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8134 = this;
return (new cljs.core.PersistentVector(meta,this__8134.cnt,this__8134.shift,this__8134.root,this__8134.tail,this__8134.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8135 = this;
return this__8135.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8136 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8137 = this;
if((function (){var and__3822__auto____8138 = (0 <= n);
if(and__3822__auto____8138)
{return (n < this__8137.cnt);
} else
{return and__3822__auto____8138;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8139 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8139.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8144 = xs.length;
var xs__8145 = (((no_clone === true))?xs:xs.slice());
if((l__8144 < 32))
{return (new cljs.core.PersistentVector(null,l__8144,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8145,null));
} else
{var node__8146 = xs__8145.slice(0,32);
var v__8147 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8146,null));
var i__8148 = 32;
var out__8149 = cljs.core._as_transient.call(null,v__8147);
while(true){
if((i__8148 < l__8144))
{{
var G__8150 = (i__8148 + 1);
var G__8151 = cljs.core.conj_BANG_.call(null,out__8149,(xs__8145[i__8148]));
i__8148 = G__8150;
out__8149 = G__8151;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8149);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__8152){
var args = cljs.core.seq(arglist__8152);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8153 = this;
if(((this__8153.off + 1) < this__8153.node.length))
{var s__8154 = cljs.core.chunked_seq.call(null,this__8153.vec,this__8153.node,this__8153.i,(this__8153.off + 1));
if((s__8154 == null))
{return null;
} else
{return s__8154;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8155 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8156 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8157 = this;
return (this__8157.node[this__8157.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8158 = this;
if(((this__8158.off + 1) < this__8158.node.length))
{var s__8159 = cljs.core.chunked_seq.call(null,this__8158.vec,this__8158.node,this__8158.i,(this__8158.off + 1));
if((s__8159 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8159;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8160 = this;
var l__8161 = this__8160.node.length;
var s__8162 = ((((this__8160.i + l__8161) < cljs.core._count.call(null,this__8160.vec)))?cljs.core.chunked_seq.call(null,this__8160.vec,(this__8160.i + l__8161),0):null);
if((s__8162 == null))
{return null;
} else
{return s__8162;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8163 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8164 = this;
return cljs.core.chunked_seq.call(null,this__8164.vec,this__8164.node,this__8164.i,this__8164.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8165 = this;
return this__8165.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8166 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8166.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8167 = this;
return cljs.core.array_chunk.call(null,this__8167.node,this__8167.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8168 = this;
var l__8169 = this__8168.node.length;
var s__8170 = ((((this__8168.i + l__8169) < cljs.core._count.call(null,this__8168.vec)))?cljs.core.chunked_seq.call(null,this__8168.vec,(this__8168.i + l__8169),0):null);
if((s__8170 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8170;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8173 = this;
var h__2236__auto____8174 = this__8173.__hash;
if(!((h__2236__auto____8174 == null)))
{return h__2236__auto____8174;
} else
{var h__2236__auto____8175 = cljs.core.hash_coll.call(null,coll);
this__8173.__hash = h__2236__auto____8175;
return h__2236__auto____8175;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8176 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8177 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8178 = this;
var v_pos__8179 = (this__8178.start + key);
return (new cljs.core.Subvec(this__8178.meta,cljs.core._assoc.call(null,this__8178.v,v_pos__8179,val),this__8178.start,((this__8178.end > (v_pos__8179 + 1)) ? this__8178.end : (v_pos__8179 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8205 = null;
var G__8205__2 = (function (this_sym8180,k){
var this__8182 = this;
var this_sym8180__8183 = this;
var coll__8184 = this_sym8180__8183;
return coll__8184.cljs$core$ILookup$_lookup$arity$2(coll__8184,k);
});
var G__8205__3 = (function (this_sym8181,k,not_found){
var this__8182 = this;
var this_sym8181__8185 = this;
var coll__8186 = this_sym8181__8185;
return coll__8186.cljs$core$ILookup$_lookup$arity$3(coll__8186,k,not_found);
});
G__8205 = function(this_sym8181,k,not_found){
switch(arguments.length){
case 2:
return G__8205__2.call(this,this_sym8181,k);
case 3:
return G__8205__3.call(this,this_sym8181,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8205;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8171,args8172){
var this__8187 = this;
return this_sym8171.call.apply(this_sym8171,[this_sym8171].concat(args8172.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8188 = this;
return (new cljs.core.Subvec(this__8188.meta,cljs.core._assoc_n.call(null,this__8188.v,this__8188.end,o),this__8188.start,(this__8188.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8189 = this;
var this__8190 = this;
return cljs.core.pr_str.call(null,this__8190);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8191 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8192 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8193 = this;
var subvec_seq__8194 = (function subvec_seq(i){
if((i === this__8193.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8193.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8194.call(null,this__8193.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8195 = this;
return (this__8195.end - this__8195.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8196 = this;
return cljs.core._nth.call(null,this__8196.v,(this__8196.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8197 = this;
if((this__8197.start === this__8197.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8197.meta,this__8197.v,this__8197.start,(this__8197.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8198 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8199 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8200 = this;
return (new cljs.core.Subvec(meta,this__8200.v,this__8200.start,this__8200.end,this__8200.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8201 = this;
return this__8201.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8202 = this;
return cljs.core._nth.call(null,this__8202.v,(this__8202.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8203 = this;
return cljs.core._nth.call(null,this__8203.v,(this__8203.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8204 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8204.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8207 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8207,0,tl.length);
return ret__8207;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8211 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8212 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8211,subidx__8212,(((level === 5))?tail_node:(function (){var child__8213 = cljs.core.pv_aget.call(null,ret__8211,subidx__8212);
if(!((child__8213 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8213,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8211;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8218 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8219 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8220 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8218,subidx__8219));
if((function (){var and__3822__auto____8221 = (new_child__8220 == null);
if(and__3822__auto____8221)
{return (subidx__8219 === 0);
} else
{return and__3822__auto____8221;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8218,subidx__8219,new_child__8220);
return node__8218;
}
} else
{if((subidx__8219 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8218,subidx__8219,null);
return node__8218;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8226 = (0 <= i);
if(and__3822__auto____8226)
{return (i < tv.cnt);
} else
{return and__3822__auto____8226;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8227 = tv.root;
var node__8228 = root__8227;
var level__8229 = tv.shift;
while(true){
if((level__8229 > 0))
{{
var G__8230 = cljs.core.tv_ensure_editable.call(null,root__8227.edit,cljs.core.pv_aget.call(null,node__8228,((i >>> level__8229) & 31)));
var G__8231 = (level__8229 - 5);
node__8228 = G__8230;
level__8229 = G__8231;
continue;
}
} else
{return node__8228.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8271 = null;
var G__8271__2 = (function (this_sym8234,k){
var this__8236 = this;
var this_sym8234__8237 = this;
var coll__8238 = this_sym8234__8237;
return coll__8238.cljs$core$ILookup$_lookup$arity$2(coll__8238,k);
});
var G__8271__3 = (function (this_sym8235,k,not_found){
var this__8236 = this;
var this_sym8235__8239 = this;
var coll__8240 = this_sym8235__8239;
return coll__8240.cljs$core$ILookup$_lookup$arity$3(coll__8240,k,not_found);
});
G__8271 = function(this_sym8235,k,not_found){
switch(arguments.length){
case 2:
return G__8271__2.call(this,this_sym8235,k);
case 3:
return G__8271__3.call(this,this_sym8235,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8271;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8232,args8233){
var this__8241 = this;
return this_sym8232.call.apply(this_sym8232,[this_sym8232].concat(args8233.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8242 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8243 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8244 = this;
if(this__8244.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8245 = this;
if((function (){var and__3822__auto____8246 = (0 <= n);
if(and__3822__auto____8246)
{return (n < this__8245.cnt);
} else
{return and__3822__auto____8246;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8247 = this;
if(this__8247.root.edit)
{return this__8247.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8248 = this;
if(this__8248.root.edit)
{if((function (){var and__3822__auto____8249 = (0 <= n);
if(and__3822__auto____8249)
{return (n < this__8248.cnt);
} else
{return and__3822__auto____8249;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8248.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8254 = (function go(level,node){
var node__8252 = cljs.core.tv_ensure_editable.call(null,this__8248.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8252,(n & 31),val);
return node__8252;
} else
{var subidx__8253 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8252,subidx__8253,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8252,subidx__8253)));
return node__8252;
}
}).call(null,this__8248.shift,this__8248.root);
this__8248.root = new_root__8254;
return tcoll;
}
} else
{if((n === this__8248.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8248.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8255 = this;
if(this__8255.root.edit)
{if((this__8255.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8255.cnt))
{this__8255.cnt = 0;
return tcoll;
} else
{if((((this__8255.cnt - 1) & 31) > 0))
{this__8255.cnt = (this__8255.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8256 = cljs.core.editable_array_for.call(null,tcoll,(this__8255.cnt - 2));
var new_root__8258 = (function (){var nr__8257 = cljs.core.tv_pop_tail.call(null,tcoll,this__8255.shift,this__8255.root);
if(!((nr__8257 == null)))
{return nr__8257;
} else
{return (new cljs.core.VectorNode(this__8255.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8259 = (5 < this__8255.shift);
if(and__3822__auto____8259)
{return (cljs.core.pv_aget.call(null,new_root__8258,1) == null);
} else
{return and__3822__auto____8259;
}
})())
{var new_root__8260 = cljs.core.tv_ensure_editable.call(null,this__8255.root.edit,cljs.core.pv_aget.call(null,new_root__8258,0));
this__8255.root = new_root__8260;
this__8255.shift = (this__8255.shift - 5);
this__8255.cnt = (this__8255.cnt - 1);
this__8255.tail = new_tail__8256;
return tcoll;
} else
{this__8255.root = new_root__8258;
this__8255.cnt = (this__8255.cnt - 1);
this__8255.tail = new_tail__8256;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8261 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8262 = this;
if(this__8262.root.edit)
{if(((this__8262.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8262.tail[(this__8262.cnt & 31)] = o);
this__8262.cnt = (this__8262.cnt + 1);
return tcoll;
} else
{var tail_node__8263 = (new cljs.core.VectorNode(this__8262.root.edit,this__8262.tail));
var new_tail__8264 = cljs.core.make_array.call(null,32);
(new_tail__8264[0] = o);
this__8262.tail = new_tail__8264;
if(((this__8262.cnt >>> 5) > (1 << this__8262.shift)))
{var new_root_array__8265 = cljs.core.make_array.call(null,32);
var new_shift__8266 = (this__8262.shift + 5);
(new_root_array__8265[0] = this__8262.root);
(new_root_array__8265[1] = cljs.core.new_path.call(null,this__8262.root.edit,this__8262.shift,tail_node__8263));
this__8262.root = (new cljs.core.VectorNode(this__8262.root.edit,new_root_array__8265));
this__8262.shift = new_shift__8266;
this__8262.cnt = (this__8262.cnt + 1);
return tcoll;
} else
{var new_root__8267 = cljs.core.tv_push_tail.call(null,tcoll,this__8262.shift,this__8262.root,tail_node__8263);
this__8262.root = new_root__8267;
this__8262.cnt = (this__8262.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8268 = this;
if(this__8268.root.edit)
{this__8268.root.edit = null;
var len__8269 = (this__8268.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8270 = cljs.core.make_array.call(null,len__8269);
cljs.core.array_copy.call(null,this__8268.tail,0,trimmed_tail__8270,0,len__8269);
return (new cljs.core.PersistentVector(null,this__8268.cnt,this__8268.shift,this__8268.root,trimmed_tail__8270,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8272 = this;
var h__2236__auto____8273 = this__8272.__hash;
if(!((h__2236__auto____8273 == null)))
{return h__2236__auto____8273;
} else
{var h__2236__auto____8274 = cljs.core.hash_coll.call(null,coll);
this__8272.__hash = h__2236__auto____8274;
return h__2236__auto____8274;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8275 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8276 = this;
var this__8277 = this;
return cljs.core.pr_str.call(null,this__8277);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8278 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8279 = this;
return cljs.core._first.call(null,this__8279.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8280 = this;
var temp__3971__auto____8281 = cljs.core.next.call(null,this__8280.front);
if(temp__3971__auto____8281)
{var f1__8282 = temp__3971__auto____8281;
return (new cljs.core.PersistentQueueSeq(this__8280.meta,f1__8282,this__8280.rear,null));
} else
{if((this__8280.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8280.meta,this__8280.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8283 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8284 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8284.front,this__8284.rear,this__8284.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8285 = this;
return this__8285.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8286 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8286.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8287 = this;
var h__2236__auto____8288 = this__8287.__hash;
if(!((h__2236__auto____8288 == null)))
{return h__2236__auto____8288;
} else
{var h__2236__auto____8289 = cljs.core.hash_coll.call(null,coll);
this__8287.__hash = h__2236__auto____8289;
return h__2236__auto____8289;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8290 = this;
if(cljs.core.truth_(this__8290.front))
{return (new cljs.core.PersistentQueue(this__8290.meta,(this__8290.count + 1),this__8290.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8291 = this__8290.rear;
if(cljs.core.truth_(or__3824__auto____8291))
{return or__3824__auto____8291;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8290.meta,(this__8290.count + 1),cljs.core.conj.call(null,this__8290.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8292 = this;
var this__8293 = this;
return cljs.core.pr_str.call(null,this__8293);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8294 = this;
var rear__8295 = cljs.core.seq.call(null,this__8294.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8296 = this__8294.front;
if(cljs.core.truth_(or__3824__auto____8296))
{return or__3824__auto____8296;
} else
{return rear__8295;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8294.front,cljs.core.seq.call(null,rear__8295),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8297 = this;
return this__8297.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8298 = this;
return cljs.core._first.call(null,this__8298.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8299 = this;
if(cljs.core.truth_(this__8299.front))
{var temp__3971__auto____8300 = cljs.core.next.call(null,this__8299.front);
if(temp__3971__auto____8300)
{var f1__8301 = temp__3971__auto____8300;
return (new cljs.core.PersistentQueue(this__8299.meta,(this__8299.count - 1),f1__8301,this__8299.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8299.meta,(this__8299.count - 1),cljs.core.seq.call(null,this__8299.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8302 = this;
return cljs.core.first.call(null,this__8302.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8303 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8304 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8305 = this;
return (new cljs.core.PersistentQueue(meta,this__8305.count,this__8305.front,this__8305.rear,this__8305.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8306 = this;
return this__8306.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8307 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8308 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8311 = array.length;
var i__8312 = 0;
while(true){
if((i__8312 < len__8311))
{if((k === (array[i__8312])))
{return i__8312;
} else
{{
var G__8313 = (i__8312 + incr);
i__8312 = G__8313;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8316 = cljs.core.hash.call(null,a);
var b__8317 = cljs.core.hash.call(null,b);
if((a__8316 < b__8317))
{return -1;
} else
{if((a__8316 > b__8317))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8325 = m.keys;
var len__8326 = ks__8325.length;
var so__8327 = m.strobj;
var out__8328 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8329 = 0;
var out__8330 = cljs.core.transient$.call(null,out__8328);
while(true){
if((i__8329 < len__8326))
{var k__8331 = (ks__8325[i__8329]);
{
var G__8332 = (i__8329 + 1);
var G__8333 = cljs.core.assoc_BANG_.call(null,out__8330,k__8331,(so__8327[k__8331]));
i__8329 = G__8332;
out__8330 = G__8333;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8330,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8339 = {};
var l__8340 = ks.length;
var i__8341 = 0;
while(true){
if((i__8341 < l__8340))
{var k__8342 = (ks[i__8341]);
(new_obj__8339[k__8342] = (obj[k__8342]));
{
var G__8343 = (i__8341 + 1);
i__8341 = G__8343;
continue;
}
} else
{}
break;
}
return new_obj__8339;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8346 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8347 = this;
var h__2236__auto____8348 = this__8347.__hash;
if(!((h__2236__auto____8348 == null)))
{return h__2236__auto____8348;
} else
{var h__2236__auto____8349 = cljs.core.hash_imap.call(null,coll);
this__8347.__hash = h__2236__auto____8349;
return h__2236__auto____8349;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8350 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8351 = this;
if((function (){var and__3822__auto____8352 = goog.isString(k);
if(and__3822__auto____8352)
{return !((cljs.core.scan_array.call(null,1,k,this__8351.keys) == null));
} else
{return and__3822__auto____8352;
}
})())
{return (this__8351.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8353 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8354 = (this__8353.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8354)
{return or__3824__auto____8354;
} else
{return (this__8353.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8353.keys) == null)))
{var new_strobj__8355 = cljs.core.obj_clone.call(null,this__8353.strobj,this__8353.keys);
(new_strobj__8355[k] = v);
return (new cljs.core.ObjMap(this__8353.meta,this__8353.keys,new_strobj__8355,(this__8353.update_count + 1),null));
} else
{var new_strobj__8356 = cljs.core.obj_clone.call(null,this__8353.strobj,this__8353.keys);
var new_keys__8357 = this__8353.keys.slice();
(new_strobj__8356[k] = v);
new_keys__8357.push(k);
return (new cljs.core.ObjMap(this__8353.meta,new_keys__8357,new_strobj__8356,(this__8353.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8358 = this;
if((function (){var and__3822__auto____8359 = goog.isString(k);
if(and__3822__auto____8359)
{return !((cljs.core.scan_array.call(null,1,k,this__8358.keys) == null));
} else
{return and__3822__auto____8359;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8381 = null;
var G__8381__2 = (function (this_sym8360,k){
var this__8362 = this;
var this_sym8360__8363 = this;
var coll__8364 = this_sym8360__8363;
return coll__8364.cljs$core$ILookup$_lookup$arity$2(coll__8364,k);
});
var G__8381__3 = (function (this_sym8361,k,not_found){
var this__8362 = this;
var this_sym8361__8365 = this;
var coll__8366 = this_sym8361__8365;
return coll__8366.cljs$core$ILookup$_lookup$arity$3(coll__8366,k,not_found);
});
G__8381 = function(this_sym8361,k,not_found){
switch(arguments.length){
case 2:
return G__8381__2.call(this,this_sym8361,k);
case 3:
return G__8381__3.call(this,this_sym8361,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8381;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8344,args8345){
var this__8367 = this;
return this_sym8344.call.apply(this_sym8344,[this_sym8344].concat(args8345.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8368 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8369 = this;
var this__8370 = this;
return cljs.core.pr_str.call(null,this__8370);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8371 = this;
if((this__8371.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8334_SHARP_){
return cljs.core.vector.call(null,p1__8334_SHARP_,(this__8371.strobj[p1__8334_SHARP_]));
}),this__8371.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8372 = this;
return this__8372.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8373 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8374 = this;
return (new cljs.core.ObjMap(meta,this__8374.keys,this__8374.strobj,this__8374.update_count,this__8374.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8375 = this;
return this__8375.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8376 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8376.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8377 = this;
if((function (){var and__3822__auto____8378 = goog.isString(k);
if(and__3822__auto____8378)
{return !((cljs.core.scan_array.call(null,1,k,this__8377.keys) == null));
} else
{return and__3822__auto____8378;
}
})())
{var new_keys__8379 = this__8377.keys.slice();
var new_strobj__8380 = cljs.core.obj_clone.call(null,this__8377.strobj,this__8377.keys);
new_keys__8379.splice(cljs.core.scan_array.call(null,1,k,new_keys__8379),1);
cljs.core.js_delete.call(null,new_strobj__8380,k);
return (new cljs.core.ObjMap(this__8377.meta,new_keys__8379,new_strobj__8380,(this__8377.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8385 = this;
var h__2236__auto____8386 = this__8385.__hash;
if(!((h__2236__auto____8386 == null)))
{return h__2236__auto____8386;
} else
{var h__2236__auto____8387 = cljs.core.hash_imap.call(null,coll);
this__8385.__hash = h__2236__auto____8387;
return h__2236__auto____8387;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8388 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8389 = this;
var bucket__8390 = (this__8389.hashobj[cljs.core.hash.call(null,k)]);
var i__8391 = (cljs.core.truth_(bucket__8390)?cljs.core.scan_array.call(null,2,k,bucket__8390):null);
if(cljs.core.truth_(i__8391))
{return (bucket__8390[(i__8391 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8392 = this;
var h__8393 = cljs.core.hash.call(null,k);
var bucket__8394 = (this__8392.hashobj[h__8393]);
if(cljs.core.truth_(bucket__8394))
{var new_bucket__8395 = bucket__8394.slice();
var new_hashobj__8396 = goog.object.clone(this__8392.hashobj);
(new_hashobj__8396[h__8393] = new_bucket__8395);
var temp__3971__auto____8397 = cljs.core.scan_array.call(null,2,k,new_bucket__8395);
if(cljs.core.truth_(temp__3971__auto____8397))
{var i__8398 = temp__3971__auto____8397;
(new_bucket__8395[(i__8398 + 1)] = v);
return (new cljs.core.HashMap(this__8392.meta,this__8392.count,new_hashobj__8396,null));
} else
{new_bucket__8395.push(k,v);
return (new cljs.core.HashMap(this__8392.meta,(this__8392.count + 1),new_hashobj__8396,null));
}
} else
{var new_hashobj__8399 = goog.object.clone(this__8392.hashobj);
(new_hashobj__8399[h__8393] = [k,v]);
return (new cljs.core.HashMap(this__8392.meta,(this__8392.count + 1),new_hashobj__8399,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8400 = this;
var bucket__8401 = (this__8400.hashobj[cljs.core.hash.call(null,k)]);
var i__8402 = (cljs.core.truth_(bucket__8401)?cljs.core.scan_array.call(null,2,k,bucket__8401):null);
if(cljs.core.truth_(i__8402))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8427 = null;
var G__8427__2 = (function (this_sym8403,k){
var this__8405 = this;
var this_sym8403__8406 = this;
var coll__8407 = this_sym8403__8406;
return coll__8407.cljs$core$ILookup$_lookup$arity$2(coll__8407,k);
});
var G__8427__3 = (function (this_sym8404,k,not_found){
var this__8405 = this;
var this_sym8404__8408 = this;
var coll__8409 = this_sym8404__8408;
return coll__8409.cljs$core$ILookup$_lookup$arity$3(coll__8409,k,not_found);
});
G__8427 = function(this_sym8404,k,not_found){
switch(arguments.length){
case 2:
return G__8427__2.call(this,this_sym8404,k);
case 3:
return G__8427__3.call(this,this_sym8404,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8427;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8383,args8384){
var this__8410 = this;
return this_sym8383.call.apply(this_sym8383,[this_sym8383].concat(args8384.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8411 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8412 = this;
var this__8413 = this;
return cljs.core.pr_str.call(null,this__8413);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8414 = this;
if((this__8414.count > 0))
{var hashes__8415 = cljs.core.js_keys.call(null,this__8414.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8382_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8414.hashobj[p1__8382_SHARP_])));
}),hashes__8415);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8416 = this;
return this__8416.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8417 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8418 = this;
return (new cljs.core.HashMap(meta,this__8418.count,this__8418.hashobj,this__8418.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8419 = this;
return this__8419.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8420 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8420.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8421 = this;
var h__8422 = cljs.core.hash.call(null,k);
var bucket__8423 = (this__8421.hashobj[h__8422]);
var i__8424 = (cljs.core.truth_(bucket__8423)?cljs.core.scan_array.call(null,2,k,bucket__8423):null);
if(cljs.core.not.call(null,i__8424))
{return coll;
} else
{var new_hashobj__8425 = goog.object.clone(this__8421.hashobj);
if((3 > bucket__8423.length))
{cljs.core.js_delete.call(null,new_hashobj__8425,h__8422);
} else
{var new_bucket__8426 = bucket__8423.slice();
new_bucket__8426.splice(i__8424,2);
(new_hashobj__8425[h__8422] = new_bucket__8426);
}
return (new cljs.core.HashMap(this__8421.meta,(this__8421.count - 1),new_hashobj__8425,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8428 = ks.length;
var i__8429 = 0;
var out__8430 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8429 < len__8428))
{{
var G__8431 = (i__8429 + 1);
var G__8432 = cljs.core.assoc.call(null,out__8430,(ks[i__8429]),(vs[i__8429]));
i__8429 = G__8431;
out__8430 = G__8432;
continue;
}
} else
{return out__8430;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8436 = m.arr;
var len__8437 = arr__8436.length;
var i__8438 = 0;
while(true){
if((len__8437 <= i__8438))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8436[i__8438]),k))
{return i__8438;
} else
{if("\uFDD0'else")
{{
var G__8439 = (i__8438 + 2);
i__8438 = G__8439;
continue;
}
} else
{return null;
}
}
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8442 = this;
return (new cljs.core.TransientArrayMap({},this__8442.arr.length,this__8442.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8443 = this;
var h__2236__auto____8444 = this__8443.__hash;
if(!((h__2236__auto____8444 == null)))
{return h__2236__auto____8444;
} else
{var h__2236__auto____8445 = cljs.core.hash_imap.call(null,coll);
this__8443.__hash = h__2236__auto____8445;
return h__2236__auto____8445;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8446 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8447 = this;
var idx__8448 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8448 === -1))
{return not_found;
} else
{return (this__8447.arr[(idx__8448 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8449 = this;
var idx__8450 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8450 === -1))
{if((this__8449.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8449.meta,(this__8449.cnt + 1),(function (){var G__8451__8452 = this__8449.arr.slice();
G__8451__8452.push(k);
G__8451__8452.push(v);
return G__8451__8452;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8449.arr[(idx__8450 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8449.meta,this__8449.cnt,(function (){var G__8453__8454 = this__8449.arr.slice();
(G__8453__8454[(idx__8450 + 1)] = v);
return G__8453__8454;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8455 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8487 = null;
var G__8487__2 = (function (this_sym8456,k){
var this__8458 = this;
var this_sym8456__8459 = this;
var coll__8460 = this_sym8456__8459;
return coll__8460.cljs$core$ILookup$_lookup$arity$2(coll__8460,k);
});
var G__8487__3 = (function (this_sym8457,k,not_found){
var this__8458 = this;
var this_sym8457__8461 = this;
var coll__8462 = this_sym8457__8461;
return coll__8462.cljs$core$ILookup$_lookup$arity$3(coll__8462,k,not_found);
});
G__8487 = function(this_sym8457,k,not_found){
switch(arguments.length){
case 2:
return G__8487__2.call(this,this_sym8457,k);
case 3:
return G__8487__3.call(this,this_sym8457,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8487;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8440,args8441){
var this__8463 = this;
return this_sym8440.call.apply(this_sym8440,[this_sym8440].concat(args8441.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8464 = this;
var len__8465 = this__8464.arr.length;
var i__8466 = 0;
var init__8467 = init;
while(true){
if((i__8466 < len__8465))
{var init__8468 = f.call(null,init__8467,(this__8464.arr[i__8466]),(this__8464.arr[(i__8466 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8468))
{return cljs.core.deref.call(null,init__8468);
} else
{{
var G__8488 = (i__8466 + 2);
var G__8489 = init__8468;
i__8466 = G__8488;
init__8467 = G__8489;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8469 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8470 = this;
var this__8471 = this;
return cljs.core.pr_str.call(null,this__8471);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8472 = this;
if((this__8472.cnt > 0))
{var len__8473 = this__8472.arr.length;
var array_map_seq__8474 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8473))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8472.arr[i]),(this__8472.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8474.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8475 = this;
return this__8475.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8476 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8477 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8477.cnt,this__8477.arr,this__8477.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8478 = this;
return this__8478.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8479 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8479.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8480 = this;
var idx__8481 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8481 >= 0))
{var len__8482 = this__8480.arr.length;
var new_len__8483 = (len__8482 - 2);
if((new_len__8483 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8484 = cljs.core.make_array.call(null,new_len__8483);
var s__8485 = 0;
var d__8486 = 0;
while(true){
if((s__8485 >= len__8482))
{return (new cljs.core.PersistentArrayMap(this__8480.meta,(this__8480.cnt - 1),new_arr__8484,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8480.arr[s__8485])))
{{
var G__8490 = (s__8485 + 2);
var G__8491 = d__8486;
s__8485 = G__8490;
d__8486 = G__8491;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8484[d__8486] = (this__8480.arr[s__8485]));
(new_arr__8484[(d__8486 + 1)] = (this__8480.arr[(s__8485 + 1)]));
{
var G__8492 = (s__8485 + 2);
var G__8493 = (d__8486 + 2);
s__8485 = G__8492;
d__8486 = G__8493;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__8494 = cljs.core.count.call(null,ks);
var i__8495 = 0;
var out__8496 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8495 < len__8494))
{{
var G__8497 = (i__8495 + 1);
var G__8498 = cljs.core.assoc_BANG_.call(null,out__8496,(ks[i__8495]),(vs[i__8495]));
i__8495 = G__8497;
out__8496 = G__8498;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8496);
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8499 = this;
if(cljs.core.truth_(this__8499.editable_QMARK_))
{var idx__8500 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8500 >= 0))
{(this__8499.arr[idx__8500] = (this__8499.arr[(this__8499.len - 2)]));
(this__8499.arr[(idx__8500 + 1)] = (this__8499.arr[(this__8499.len - 1)]));
var G__8501__8502 = this__8499.arr;
G__8501__8502.pop();
G__8501__8502.pop();
G__8501__8502;
this__8499.len = (this__8499.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8503 = this;
if(cljs.core.truth_(this__8503.editable_QMARK_))
{var idx__8504 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8504 === -1))
{if(((this__8503.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8503.len = (this__8503.len + 2);
this__8503.arr.push(key);
this__8503.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8503.len,this__8503.arr),key,val);
}
} else
{if((val === (this__8503.arr[(idx__8504 + 1)])))
{return tcoll;
} else
{(this__8503.arr[(idx__8504 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8505 = this;
if(cljs.core.truth_(this__8505.editable_QMARK_))
{if((function (){var G__8506__8507 = o;
if(G__8506__8507)
{if((function (){var or__3824__auto____8508 = (G__8506__8507.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8508)
{return or__3824__auto____8508;
} else
{return G__8506__8507.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8506__8507.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8506__8507);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8506__8507);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8509 = cljs.core.seq.call(null,o);
var tcoll__8510 = tcoll;
while(true){
var temp__3971__auto____8511 = cljs.core.first.call(null,es__8509);
if(cljs.core.truth_(temp__3971__auto____8511))
{var e__8512 = temp__3971__auto____8511;
{
var G__8518 = cljs.core.next.call(null,es__8509);
var G__8519 = tcoll__8510.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8510,cljs.core.key.call(null,e__8512),cljs.core.val.call(null,e__8512));
es__8509 = G__8518;
tcoll__8510 = G__8519;
continue;
}
} else
{return tcoll__8510;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8513 = this;
if(cljs.core.truth_(this__8513.editable_QMARK_))
{this__8513.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8513.len,2),this__8513.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8514 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8515 = this;
if(cljs.core.truth_(this__8515.editable_QMARK_))
{var idx__8516 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8516 === -1))
{return not_found;
} else
{return (this__8515.arr[(idx__8516 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8517 = this;
if(cljs.core.truth_(this__8517.editable_QMARK_))
{return cljs.core.quot.call(null,this__8517.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8522 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__8523 = 0;
while(true){
if((i__8523 < len))
{{
var G__8524 = cljs.core.assoc_BANG_.call(null,out__8522,(arr[i__8523]),(arr[(i__8523 + 1)]));
var G__8525 = (i__8523 + 2);
out__8522 = G__8524;
i__8523 = G__8525;
continue;
}
} else
{return out__8522;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2354__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__8530__8531 = arr.slice();
(G__8530__8531[i] = a);
return G__8530__8531;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8532__8533 = arr.slice();
(G__8532__8533[i] = a);
(G__8532__8533[j] = b);
return G__8532__8533;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__8535 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8535,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8535,(2 * i),(new_arr__8535.length - (2 * i)));
return new_arr__8535;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__8538 = inode.ensure_editable(edit);
(editable__8538.arr[i] = a);
return editable__8538;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8539 = inode.ensure_editable(edit);
(editable__8539.arr[i] = a);
(editable__8539.arr[j] = b);
return editable__8539;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__8546 = arr.length;
var i__8547 = 0;
var init__8548 = init;
while(true){
if((i__8547 < len__8546))
{var init__8551 = (function (){var k__8549 = (arr[i__8547]);
if(!((k__8549 == null)))
{return f.call(null,init__8548,k__8549,(arr[(i__8547 + 1)]));
} else
{var node__8550 = (arr[(i__8547 + 1)]);
if(!((node__8550 == null)))
{return node__8550.kv_reduce(f,init__8548);
} else
{return init__8548;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8551))
{return cljs.core.deref.call(null,init__8551);
} else
{{
var G__8552 = (i__8547 + 2);
var G__8553 = init__8551;
i__8547 = G__8552;
init__8548 = G__8553;
continue;
}
}
} else
{return init__8548;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8554 = this;
var inode__8555 = this;
if((this__8554.bitmap === bit))
{return null;
} else
{var editable__8556 = inode__8555.ensure_editable(e);
var earr__8557 = editable__8556.arr;
var len__8558 = earr__8557.length;
editable__8556.bitmap = (bit ^ editable__8556.bitmap);
cljs.core.array_copy.call(null,earr__8557,(2 * (i + 1)),earr__8557,(2 * i),(len__8558 - (2 * (i + 1))));
(earr__8557[(len__8558 - 2)] = null);
(earr__8557[(len__8558 - 1)] = null);
return editable__8556;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8559 = this;
var inode__8560 = this;
var bit__8561 = (1 << ((hash >>> shift) & 0x01f));
var idx__8562 = cljs.core.bitmap_indexed_node_index.call(null,this__8559.bitmap,bit__8561);
if(((this__8559.bitmap & bit__8561) === 0))
{var n__8563 = cljs.core.bit_count.call(null,this__8559.bitmap);
if(((2 * n__8563) < this__8559.arr.length))
{var editable__8564 = inode__8560.ensure_editable(edit);
var earr__8565 = editable__8564.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__8565,(2 * idx__8562),earr__8565,(2 * (idx__8562 + 1)),(2 * (n__8563 - idx__8562)));
(earr__8565[(2 * idx__8562)] = key);
(earr__8565[((2 * idx__8562) + 1)] = val);
editable__8564.bitmap = (editable__8564.bitmap | bit__8561);
return editable__8564;
} else
{if((n__8563 >= 16))
{var nodes__8566 = cljs.core.make_array.call(null,32);
var jdx__8567 = ((hash >>> shift) & 0x01f);
(nodes__8566[jdx__8567] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8568 = 0;
var j__8569 = 0;
while(true){
if((i__8568 < 32))
{if((((this__8559.bitmap >>> i__8568) & 1) === 0))
{{
var G__8622 = (i__8568 + 1);
var G__8623 = j__8569;
i__8568 = G__8622;
j__8569 = G__8623;
continue;
}
} else
{(nodes__8566[i__8568] = ((!(((this__8559.arr[j__8569]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__8559.arr[j__8569])),(this__8559.arr[j__8569]),(this__8559.arr[(j__8569 + 1)]),added_leaf_QMARK_):(this__8559.arr[(j__8569 + 1)])));
{
var G__8624 = (i__8568 + 1);
var G__8625 = (j__8569 + 2);
i__8568 = G__8624;
j__8569 = G__8625;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8563 + 1),nodes__8566));
} else
{if("\uFDD0'else")
{var new_arr__8570 = cljs.core.make_array.call(null,(2 * (n__8563 + 4)));
cljs.core.array_copy.call(null,this__8559.arr,0,new_arr__8570,0,(2 * idx__8562));
(new_arr__8570[(2 * idx__8562)] = key);
(new_arr__8570[((2 * idx__8562) + 1)] = val);
cljs.core.array_copy.call(null,this__8559.arr,(2 * idx__8562),new_arr__8570,(2 * (idx__8562 + 1)),(2 * (n__8563 - idx__8562)));
added_leaf_QMARK_.val = true;
var editable__8571 = inode__8560.ensure_editable(edit);
editable__8571.arr = new_arr__8570;
editable__8571.bitmap = (editable__8571.bitmap | bit__8561);
return editable__8571;
} else
{return null;
}
}
}
} else
{var key_or_nil__8572 = (this__8559.arr[(2 * idx__8562)]);
var val_or_node__8573 = (this__8559.arr[((2 * idx__8562) + 1)]);
if((key_or_nil__8572 == null))
{var n__8574 = val_or_node__8573.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8574 === val_or_node__8573))
{return inode__8560;
} else
{return cljs.core.edit_and_set.call(null,inode__8560,edit,((2 * idx__8562) + 1),n__8574);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8572))
{if((val === val_or_node__8573))
{return inode__8560;
} else
{return cljs.core.edit_and_set.call(null,inode__8560,edit,((2 * idx__8562) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__8560,edit,(2 * idx__8562),null,((2 * idx__8562) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__8572,val_or_node__8573,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8575 = this;
var inode__8576 = this;
return cljs.core.create_inode_seq.call(null,this__8575.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8577 = this;
var inode__8578 = this;
var bit__8579 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8577.bitmap & bit__8579) === 0))
{return inode__8578;
} else
{var idx__8580 = cljs.core.bitmap_indexed_node_index.call(null,this__8577.bitmap,bit__8579);
var key_or_nil__8581 = (this__8577.arr[(2 * idx__8580)]);
var val_or_node__8582 = (this__8577.arr[((2 * idx__8580) + 1)]);
if((key_or_nil__8581 == null))
{var n__8583 = val_or_node__8582.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8583 === val_or_node__8582))
{return inode__8578;
} else
{if(!((n__8583 == null)))
{return cljs.core.edit_and_set.call(null,inode__8578,edit,((2 * idx__8580) + 1),n__8583);
} else
{if((this__8577.bitmap === bit__8579))
{return null;
} else
{if("\uFDD0'else")
{return inode__8578.edit_and_remove_pair(edit,bit__8579,idx__8580);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8581))
{(removed_leaf_QMARK_[0] = true);
return inode__8578.edit_and_remove_pair(edit,bit__8579,idx__8580);
} else
{if("\uFDD0'else")
{return inode__8578;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8584 = this;
var inode__8585 = this;
if((e === this__8584.edit))
{return inode__8585;
} else
{var n__8586 = cljs.core.bit_count.call(null,this__8584.bitmap);
var new_arr__8587 = cljs.core.make_array.call(null,(((n__8586 < 0))?4:(2 * (n__8586 + 1))));
cljs.core.array_copy.call(null,this__8584.arr,0,new_arr__8587,0,(2 * n__8586));
return (new cljs.core.BitmapIndexedNode(e,this__8584.bitmap,new_arr__8587));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8588 = this;
var inode__8589 = this;
return cljs.core.inode_kv_reduce.call(null,this__8588.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8590 = this;
var inode__8591 = this;
var bit__8592 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8590.bitmap & bit__8592) === 0))
{return not_found;
} else
{var idx__8593 = cljs.core.bitmap_indexed_node_index.call(null,this__8590.bitmap,bit__8592);
var key_or_nil__8594 = (this__8590.arr[(2 * idx__8593)]);
var val_or_node__8595 = (this__8590.arr[((2 * idx__8593) + 1)]);
if((key_or_nil__8594 == null))
{return val_or_node__8595.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8594))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8594,val_or_node__8595], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__8596 = this;
var inode__8597 = this;
var bit__8598 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8596.bitmap & bit__8598) === 0))
{return inode__8597;
} else
{var idx__8599 = cljs.core.bitmap_indexed_node_index.call(null,this__8596.bitmap,bit__8598);
var key_or_nil__8600 = (this__8596.arr[(2 * idx__8599)]);
var val_or_node__8601 = (this__8596.arr[((2 * idx__8599) + 1)]);
if((key_or_nil__8600 == null))
{var n__8602 = val_or_node__8601.inode_without((shift + 5),hash,key);
if((n__8602 === val_or_node__8601))
{return inode__8597;
} else
{if(!((n__8602 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__8596.bitmap,cljs.core.clone_and_set.call(null,this__8596.arr,((2 * idx__8599) + 1),n__8602)));
} else
{if((this__8596.bitmap === bit__8598))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8596.bitmap ^ bit__8598),cljs.core.remove_pair.call(null,this__8596.arr,idx__8599)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8600))
{return (new cljs.core.BitmapIndexedNode(null,(this__8596.bitmap ^ bit__8598),cljs.core.remove_pair.call(null,this__8596.arr,idx__8599)));
} else
{if("\uFDD0'else")
{return inode__8597;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8603 = this;
var inode__8604 = this;
var bit__8605 = (1 << ((hash >>> shift) & 0x01f));
var idx__8606 = cljs.core.bitmap_indexed_node_index.call(null,this__8603.bitmap,bit__8605);
if(((this__8603.bitmap & bit__8605) === 0))
{var n__8607 = cljs.core.bit_count.call(null,this__8603.bitmap);
if((n__8607 >= 16))
{var nodes__8608 = cljs.core.make_array.call(null,32);
var jdx__8609 = ((hash >>> shift) & 0x01f);
(nodes__8608[jdx__8609] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8610 = 0;
var j__8611 = 0;
while(true){
if((i__8610 < 32))
{if((((this__8603.bitmap >>> i__8610) & 1) === 0))
{{
var G__8626 = (i__8610 + 1);
var G__8627 = j__8611;
i__8610 = G__8626;
j__8611 = G__8627;
continue;
}
} else
{(nodes__8608[i__8610] = ((!(((this__8603.arr[j__8611]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__8603.arr[j__8611])),(this__8603.arr[j__8611]),(this__8603.arr[(j__8611 + 1)]),added_leaf_QMARK_):(this__8603.arr[(j__8611 + 1)])));
{
var G__8628 = (i__8610 + 1);
var G__8629 = (j__8611 + 2);
i__8610 = G__8628;
j__8611 = G__8629;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8607 + 1),nodes__8608));
} else
{var new_arr__8612 = cljs.core.make_array.call(null,(2 * (n__8607 + 1)));
cljs.core.array_copy.call(null,this__8603.arr,0,new_arr__8612,0,(2 * idx__8606));
(new_arr__8612[(2 * idx__8606)] = key);
(new_arr__8612[((2 * idx__8606) + 1)] = val);
cljs.core.array_copy.call(null,this__8603.arr,(2 * idx__8606),new_arr__8612,(2 * (idx__8606 + 1)),(2 * (n__8607 - idx__8606)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__8603.bitmap | bit__8605),new_arr__8612));
}
} else
{var key_or_nil__8613 = (this__8603.arr[(2 * idx__8606)]);
var val_or_node__8614 = (this__8603.arr[((2 * idx__8606) + 1)]);
if((key_or_nil__8613 == null))
{var n__8615 = val_or_node__8614.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8615 === val_or_node__8614))
{return inode__8604;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8603.bitmap,cljs.core.clone_and_set.call(null,this__8603.arr,((2 * idx__8606) + 1),n__8615)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8613))
{if((val === val_or_node__8614))
{return inode__8604;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8603.bitmap,cljs.core.clone_and_set.call(null,this__8603.arr,((2 * idx__8606) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__8603.bitmap,cljs.core.clone_and_set.call(null,this__8603.arr,(2 * idx__8606),null,((2 * idx__8606) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__8613,val_or_node__8614,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8616 = this;
var inode__8617 = this;
var bit__8618 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8616.bitmap & bit__8618) === 0))
{return not_found;
} else
{var idx__8619 = cljs.core.bitmap_indexed_node_index.call(null,this__8616.bitmap,bit__8618);
var key_or_nil__8620 = (this__8616.arr[(2 * idx__8619)]);
var val_or_node__8621 = (this__8616.arr[((2 * idx__8619) + 1)]);
if((key_or_nil__8620 == null))
{return val_or_node__8621.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8620))
{return val_or_node__8621;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__8637 = array_node.arr;
var len__8638 = (2 * (array_node.cnt - 1));
var new_arr__8639 = cljs.core.make_array.call(null,len__8638);
var i__8640 = 0;
var j__8641 = 1;
var bitmap__8642 = 0;
while(true){
if((i__8640 < len__8638))
{if((function (){var and__3822__auto____8643 = !((i__8640 === idx));
if(and__3822__auto____8643)
{return !(((arr__8637[i__8640]) == null));
} else
{return and__3822__auto____8643;
}
})())
{(new_arr__8639[j__8641] = (arr__8637[i__8640]));
{
var G__8644 = (i__8640 + 1);
var G__8645 = (j__8641 + 2);
var G__8646 = (bitmap__8642 | (1 << i__8640));
i__8640 = G__8644;
j__8641 = G__8645;
bitmap__8642 = G__8646;
continue;
}
} else
{{
var G__8647 = (i__8640 + 1);
var G__8648 = j__8641;
var G__8649 = bitmap__8642;
i__8640 = G__8647;
j__8641 = G__8648;
bitmap__8642 = G__8649;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8642,new_arr__8639));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8650 = this;
var inode__8651 = this;
var idx__8652 = ((hash >>> shift) & 0x01f);
var node__8653 = (this__8650.arr[idx__8652]);
if((node__8653 == null))
{var editable__8654 = cljs.core.edit_and_set.call(null,inode__8651,edit,idx__8652,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8654.cnt = (editable__8654.cnt + 1);
return editable__8654;
} else
{var n__8655 = node__8653.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8655 === node__8653))
{return inode__8651;
} else
{return cljs.core.edit_and_set.call(null,inode__8651,edit,idx__8652,n__8655);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8656 = this;
var inode__8657 = this;
return cljs.core.create_array_node_seq.call(null,this__8656.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8658 = this;
var inode__8659 = this;
var idx__8660 = ((hash >>> shift) & 0x01f);
var node__8661 = (this__8658.arr[idx__8660]);
if((node__8661 == null))
{return inode__8659;
} else
{var n__8662 = node__8661.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8662 === node__8661))
{return inode__8659;
} else
{if((n__8662 == null))
{if((this__8658.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8659,edit,idx__8660);
} else
{var editable__8663 = cljs.core.edit_and_set.call(null,inode__8659,edit,idx__8660,n__8662);
editable__8663.cnt = (editable__8663.cnt - 1);
return editable__8663;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__8659,edit,idx__8660,n__8662);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8664 = this;
var inode__8665 = this;
if((e === this__8664.edit))
{return inode__8665;
} else
{return (new cljs.core.ArrayNode(e,this__8664.cnt,this__8664.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8666 = this;
var inode__8667 = this;
var len__8668 = this__8666.arr.length;
var i__8669 = 0;
var init__8670 = init;
while(true){
if((i__8669 < len__8668))
{var node__8671 = (this__8666.arr[i__8669]);
if(!((node__8671 == null)))
{var init__8672 = node__8671.kv_reduce(f,init__8670);
if(cljs.core.reduced_QMARK_.call(null,init__8672))
{return cljs.core.deref.call(null,init__8672);
} else
{{
var G__8691 = (i__8669 + 1);
var G__8692 = init__8672;
i__8669 = G__8691;
init__8670 = G__8692;
continue;
}
}
} else
{return null;
}
} else
{return init__8670;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8673 = this;
var inode__8674 = this;
var idx__8675 = ((hash >>> shift) & 0x01f);
var node__8676 = (this__8673.arr[idx__8675]);
if(!((node__8676 == null)))
{return node__8676.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8677 = this;
var inode__8678 = this;
var idx__8679 = ((hash >>> shift) & 0x01f);
var node__8680 = (this__8677.arr[idx__8679]);
if(!((node__8680 == null)))
{var n__8681 = node__8680.inode_without((shift + 5),hash,key);
if((n__8681 === node__8680))
{return inode__8678;
} else
{if((n__8681 == null))
{if((this__8677.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8678,null,idx__8679);
} else
{return (new cljs.core.ArrayNode(null,(this__8677.cnt - 1),cljs.core.clone_and_set.call(null,this__8677.arr,idx__8679,n__8681)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8677.cnt,cljs.core.clone_and_set.call(null,this__8677.arr,idx__8679,n__8681)));
} else
{return null;
}
}
}
} else
{return inode__8678;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8682 = this;
var inode__8683 = this;
var idx__8684 = ((hash >>> shift) & 0x01f);
var node__8685 = (this__8682.arr[idx__8684]);
if((node__8685 == null))
{return (new cljs.core.ArrayNode(null,(this__8682.cnt + 1),cljs.core.clone_and_set.call(null,this__8682.arr,idx__8684,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8686 = node__8685.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8686 === node__8685))
{return inode__8683;
} else
{return (new cljs.core.ArrayNode(null,this__8682.cnt,cljs.core.clone_and_set.call(null,this__8682.arr,idx__8684,n__8686)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8687 = this;
var inode__8688 = this;
var idx__8689 = ((hash >>> shift) & 0x01f);
var node__8690 = (this__8687.arr[idx__8689]);
if(!((node__8690 == null)))
{return node__8690.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8695 = (2 * cnt);
var i__8696 = 0;
while(true){
if((i__8696 < lim__8695))
{if(cljs.core.key_test.call(null,key,(arr[i__8696])))
{return i__8696;
} else
{{
var G__8697 = (i__8696 + 2);
i__8696 = G__8697;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8698 = this;
var inode__8699 = this;
if((hash === this__8698.collision_hash))
{var idx__8700 = cljs.core.hash_collision_node_find_index.call(null,this__8698.arr,this__8698.cnt,key);
if((idx__8700 === -1))
{if((this__8698.arr.length > (2 * this__8698.cnt)))
{var editable__8701 = cljs.core.edit_and_set.call(null,inode__8699,edit,(2 * this__8698.cnt),key,((2 * this__8698.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__8701.cnt = (editable__8701.cnt + 1);
return editable__8701;
} else
{var len__8702 = this__8698.arr.length;
var new_arr__8703 = cljs.core.make_array.call(null,(len__8702 + 2));
cljs.core.array_copy.call(null,this__8698.arr,0,new_arr__8703,0,len__8702);
(new_arr__8703[len__8702] = key);
(new_arr__8703[(len__8702 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__8699.ensure_editable_array(edit,(this__8698.cnt + 1),new_arr__8703);
}
} else
{if(((this__8698.arr[(idx__8700 + 1)]) === val))
{return inode__8699;
} else
{return cljs.core.edit_and_set.call(null,inode__8699,edit,(idx__8700 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__8698.collision_hash >>> shift) & 0x01f)),[null,inode__8699,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__8704 = this;
var inode__8705 = this;
return cljs.core.create_inode_seq.call(null,this__8704.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8706 = this;
var inode__8707 = this;
var idx__8708 = cljs.core.hash_collision_node_find_index.call(null,this__8706.arr,this__8706.cnt,key);
if((idx__8708 === -1))
{return inode__8707;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__8706.cnt === 1))
{return null;
} else
{var editable__8709 = inode__8707.ensure_editable(edit);
var earr__8710 = editable__8709.arr;
(earr__8710[idx__8708] = (earr__8710[((2 * this__8706.cnt) - 2)]));
(earr__8710[(idx__8708 + 1)] = (earr__8710[((2 * this__8706.cnt) - 1)]));
(earr__8710[((2 * this__8706.cnt) - 1)] = null);
(earr__8710[((2 * this__8706.cnt) - 2)] = null);
editable__8709.cnt = (editable__8709.cnt - 1);
return editable__8709;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__8711 = this;
var inode__8712 = this;
if((e === this__8711.edit))
{return inode__8712;
} else
{var new_arr__8713 = cljs.core.make_array.call(null,(2 * (this__8711.cnt + 1)));
cljs.core.array_copy.call(null,this__8711.arr,0,new_arr__8713,0,(2 * this__8711.cnt));
return (new cljs.core.HashCollisionNode(e,this__8711.collision_hash,this__8711.cnt,new_arr__8713));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__8714 = this;
var inode__8715 = this;
return cljs.core.inode_kv_reduce.call(null,this__8714.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8716 = this;
var inode__8717 = this;
var idx__8718 = cljs.core.hash_collision_node_find_index.call(null,this__8716.arr,this__8716.cnt,key);
if((idx__8718 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8716.arr[idx__8718])))
{return cljs.core.PersistentVector.fromArray([(this__8716.arr[idx__8718]),(this__8716.arr[(idx__8718 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__8719 = this;
var inode__8720 = this;
var idx__8721 = cljs.core.hash_collision_node_find_index.call(null,this__8719.arr,this__8719.cnt,key);
if((idx__8721 === -1))
{return inode__8720;
} else
{if((this__8719.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__8719.collision_hash,(this__8719.cnt - 1),cljs.core.remove_pair.call(null,this__8719.arr,cljs.core.quot.call(null,idx__8721,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8722 = this;
var inode__8723 = this;
if((hash === this__8722.collision_hash))
{var idx__8724 = cljs.core.hash_collision_node_find_index.call(null,this__8722.arr,this__8722.cnt,key);
if((idx__8724 === -1))
{var len__8725 = this__8722.arr.length;
var new_arr__8726 = cljs.core.make_array.call(null,(len__8725 + 2));
cljs.core.array_copy.call(null,this__8722.arr,0,new_arr__8726,0,len__8725);
(new_arr__8726[len__8725] = key);
(new_arr__8726[(len__8725 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__8722.collision_hash,(this__8722.cnt + 1),new_arr__8726));
} else
{if(cljs.core._EQ_.call(null,(this__8722.arr[idx__8724]),val))
{return inode__8723;
} else
{return (new cljs.core.HashCollisionNode(null,this__8722.collision_hash,this__8722.cnt,cljs.core.clone_and_set.call(null,this__8722.arr,(idx__8724 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__8722.collision_hash >>> shift) & 0x01f)),[null,inode__8723])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8727 = this;
var inode__8728 = this;
var idx__8729 = cljs.core.hash_collision_node_find_index.call(null,this__8727.arr,this__8727.cnt,key);
if((idx__8729 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8727.arr[idx__8729])))
{return (this__8727.arr[(idx__8729 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__8730 = this;
var inode__8731 = this;
if((e === this__8730.edit))
{this__8730.arr = array;
this__8730.cnt = count;
return inode__8731;
} else
{return (new cljs.core.HashCollisionNode(this__8730.edit,this__8730.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__8736 = cljs.core.hash.call(null,key1);
if((key1hash__8736 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8736,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8737 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__8736,key1,val1,added_leaf_QMARK___8737).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___8737);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__8738 = cljs.core.hash.call(null,key1);
if((key1hash__8738 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8738,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8739 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__8738,key1,val1,added_leaf_QMARK___8739).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___8739);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8740 = this;
var h__2236__auto____8741 = this__8740.__hash;
if(!((h__2236__auto____8741 == null)))
{return h__2236__auto____8741;
} else
{var h__2236__auto____8742 = cljs.core.hash_coll.call(null,coll);
this__8740.__hash = h__2236__auto____8742;
return h__2236__auto____8742;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8743 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__8744 = this;
var this__8745 = this;
return cljs.core.pr_str.call(null,this__8745);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8746 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8747 = this;
if((this__8747.s == null))
{return cljs.core.PersistentVector.fromArray([(this__8747.nodes[this__8747.i]),(this__8747.nodes[(this__8747.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__8747.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8748 = this;
if((this__8748.s == null))
{return cljs.core.create_inode_seq.call(null,this__8748.nodes,(this__8748.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__8748.nodes,this__8748.i,cljs.core.next.call(null,this__8748.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8749 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8750 = this;
return (new cljs.core.NodeSeq(meta,this__8750.nodes,this__8750.i,this__8750.s,this__8750.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8751 = this;
return this__8751.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8752 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8752.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__8759 = nodes.length;
var j__8760 = i;
while(true){
if((j__8760 < len__8759))
{if(!(((nodes[j__8760]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__8760,null,null));
} else
{var temp__3971__auto____8761 = (nodes[(j__8760 + 1)]);
if(cljs.core.truth_(temp__3971__auto____8761))
{var node__8762 = temp__3971__auto____8761;
var temp__3971__auto____8763 = node__8762.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8763))
{var node_seq__8764 = temp__3971__auto____8763;
return (new cljs.core.NodeSeq(null,nodes,(j__8760 + 2),node_seq__8764,null));
} else
{{
var G__8765 = (j__8760 + 2);
j__8760 = G__8765;
continue;
}
}
} else
{{
var G__8766 = (j__8760 + 2);
j__8760 = G__8766;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8767 = this;
var h__2236__auto____8768 = this__8767.__hash;
if(!((h__2236__auto____8768 == null)))
{return h__2236__auto____8768;
} else
{var h__2236__auto____8769 = cljs.core.hash_coll.call(null,coll);
this__8767.__hash = h__2236__auto____8769;
return h__2236__auto____8769;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8770 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__8771 = this;
var this__8772 = this;
return cljs.core.pr_str.call(null,this__8772);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8773 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8774 = this;
return cljs.core.first.call(null,this__8774.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8775 = this;
return cljs.core.create_array_node_seq.call(null,null,this__8775.nodes,this__8775.i,cljs.core.next.call(null,this__8775.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8776 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8777 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__8777.nodes,this__8777.i,this__8777.s,this__8777.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8778 = this;
return this__8778.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8779 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8779.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__8786 = nodes.length;
var j__8787 = i;
while(true){
if((j__8787 < len__8786))
{var temp__3971__auto____8788 = (nodes[j__8787]);
if(cljs.core.truth_(temp__3971__auto____8788))
{var nj__8789 = temp__3971__auto____8788;
var temp__3971__auto____8790 = nj__8789.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8790))
{var ns__8791 = temp__3971__auto____8790;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__8787 + 1),ns__8791,null));
} else
{{
var G__8792 = (j__8787 + 1);
j__8787 = G__8792;
continue;
}
}
} else
{{
var G__8793 = (j__8787 + 1);
j__8787 = G__8793;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8796 = this;
return (new cljs.core.TransientHashMap({},this__8796.root,this__8796.cnt,this__8796.has_nil_QMARK_,this__8796.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8797 = this;
var h__2236__auto____8798 = this__8797.__hash;
if(!((h__2236__auto____8798 == null)))
{return h__2236__auto____8798;
} else
{var h__2236__auto____8799 = cljs.core.hash_imap.call(null,coll);
this__8797.__hash = h__2236__auto____8799;
return h__2236__auto____8799;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8800 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8801 = this;
if((k == null))
{if(this__8801.has_nil_QMARK_)
{return this__8801.nil_val;
} else
{return not_found;
}
} else
{if((this__8801.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__8801.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8802 = this;
if((k == null))
{if((function (){var and__3822__auto____8803 = this__8802.has_nil_QMARK_;
if(and__3822__auto____8803)
{return (v === this__8802.nil_val);
} else
{return and__3822__auto____8803;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8802.meta,((this__8802.has_nil_QMARK_)?this__8802.cnt:(this__8802.cnt + 1)),this__8802.root,true,v,null));
}
} else
{var added_leaf_QMARK___8804 = (new cljs.core.Box(false));
var new_root__8805 = (((this__8802.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8802.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8804);
if((new_root__8805 === this__8802.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8802.meta,((added_leaf_QMARK___8804.val)?(this__8802.cnt + 1):this__8802.cnt),new_root__8805,this__8802.has_nil_QMARK_,this__8802.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8806 = this;
if((k == null))
{return this__8806.has_nil_QMARK_;
} else
{if((this__8806.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__8806.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__8829 = null;
var G__8829__2 = (function (this_sym8807,k){
var this__8809 = this;
var this_sym8807__8810 = this;
var coll__8811 = this_sym8807__8810;
return coll__8811.cljs$core$ILookup$_lookup$arity$2(coll__8811,k);
});
var G__8829__3 = (function (this_sym8808,k,not_found){
var this__8809 = this;
var this_sym8808__8812 = this;
var coll__8813 = this_sym8808__8812;
return coll__8813.cljs$core$ILookup$_lookup$arity$3(coll__8813,k,not_found);
});
G__8829 = function(this_sym8808,k,not_found){
switch(arguments.length){
case 2:
return G__8829__2.call(this,this_sym8808,k);
case 3:
return G__8829__3.call(this,this_sym8808,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8829;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym8794,args8795){
var this__8814 = this;
return this_sym8794.call.apply(this_sym8794,[this_sym8794].concat(args8795.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8815 = this;
var init__8816 = ((this__8815.has_nil_QMARK_)?f.call(null,init,null,this__8815.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__8816))
{return cljs.core.deref.call(null,init__8816);
} else
{if(!((this__8815.root == null)))
{return this__8815.root.kv_reduce(f,init__8816);
} else
{if("\uFDD0'else")
{return init__8816;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8817 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__8818 = this;
var this__8819 = this;
return cljs.core.pr_str.call(null,this__8819);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8820 = this;
if((this__8820.cnt > 0))
{var s__8821 = ((!((this__8820.root == null)))?this__8820.root.inode_seq():null);
if(this__8820.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__8820.nil_val], true),s__8821);
} else
{return s__8821;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8822 = this;
return this__8822.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8823 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8824 = this;
return (new cljs.core.PersistentHashMap(meta,this__8824.cnt,this__8824.root,this__8824.has_nil_QMARK_,this__8824.nil_val,this__8824.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8825 = this;
return this__8825.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8826 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__8826.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8827 = this;
if((k == null))
{if(this__8827.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__8827.meta,(this__8827.cnt - 1),this__8827.root,false,null,null));
} else
{return coll;
}
} else
{if((this__8827.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__8828 = this__8827.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__8828 === this__8827.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8827.meta,(this__8827.cnt - 1),new_root__8828,this__8827.has_nil_QMARK_,this__8827.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__8830 = ks.length;
var i__8831 = 0;
var out__8832 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__8831 < len__8830))
{{
var G__8833 = (i__8831 + 1);
var G__8834 = cljs.core.assoc_BANG_.call(null,out__8832,(ks[i__8831]),(vs[i__8831]));
i__8831 = G__8833;
out__8832 = G__8834;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8832);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8835 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8836 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__8837 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8838 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8839 = this;
if((k == null))
{if(this__8839.has_nil_QMARK_)
{return this__8839.nil_val;
} else
{return null;
}
} else
{if((this__8839.root == null))
{return null;
} else
{return this__8839.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8840 = this;
if((k == null))
{if(this__8840.has_nil_QMARK_)
{return this__8840.nil_val;
} else
{return not_found;
}
} else
{if((this__8840.root == null))
{return not_found;
} else
{return this__8840.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8841 = this;
if(this__8841.edit)
{return this__8841.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__8842 = this;
var tcoll__8843 = this;
if(this__8842.edit)
{if((function (){var G__8844__8845 = o;
if(G__8844__8845)
{if((function (){var or__3824__auto____8846 = (G__8844__8845.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8846)
{return or__3824__auto____8846;
} else
{return G__8844__8845.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8844__8845.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8844__8845);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8844__8845);
}
})())
{return tcoll__8843.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8847 = cljs.core.seq.call(null,o);
var tcoll__8848 = tcoll__8843;
while(true){
var temp__3971__auto____8849 = cljs.core.first.call(null,es__8847);
if(cljs.core.truth_(temp__3971__auto____8849))
{var e__8850 = temp__3971__auto____8849;
{
var G__8861 = cljs.core.next.call(null,es__8847);
var G__8862 = tcoll__8848.assoc_BANG_(cljs.core.key.call(null,e__8850),cljs.core.val.call(null,e__8850));
es__8847 = G__8861;
tcoll__8848 = G__8862;
continue;
}
} else
{return tcoll__8848;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__8851 = this;
var tcoll__8852 = this;
if(this__8851.edit)
{if((k == null))
{if((this__8851.nil_val === v))
{} else
{this__8851.nil_val = v;
}
if(this__8851.has_nil_QMARK_)
{} else
{this__8851.count = (this__8851.count + 1);
this__8851.has_nil_QMARK_ = true;
}
return tcoll__8852;
} else
{var added_leaf_QMARK___8853 = (new cljs.core.Box(false));
var node__8854 = (((this__8851.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8851.root).inode_assoc_BANG_(this__8851.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8853);
if((node__8854 === this__8851.root))
{} else
{this__8851.root = node__8854;
}
if(added_leaf_QMARK___8853.val)
{this__8851.count = (this__8851.count + 1);
} else
{}
return tcoll__8852;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__8855 = this;
var tcoll__8856 = this;
if(this__8855.edit)
{if((k == null))
{if(this__8855.has_nil_QMARK_)
{this__8855.has_nil_QMARK_ = false;
this__8855.nil_val = null;
this__8855.count = (this__8855.count - 1);
return tcoll__8856;
} else
{return tcoll__8856;
}
} else
{if((this__8855.root == null))
{return tcoll__8856;
} else
{var removed_leaf_QMARK___8857 = (new cljs.core.Box(false));
var node__8858 = this__8855.root.inode_without_BANG_(this__8855.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___8857);
if((node__8858 === this__8855.root))
{} else
{this__8855.root = node__8858;
}
if(cljs.core.truth_((removed_leaf_QMARK___8857[0])))
{this__8855.count = (this__8855.count - 1);
} else
{}
return tcoll__8856;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__8859 = this;
var tcoll__8860 = this;
if(this__8859.edit)
{this__8859.edit = null;
return (new cljs.core.PersistentHashMap(null,this__8859.count,this__8859.root,this__8859.has_nil_QMARK_,this__8859.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__8865 = node;
var stack__8866 = stack;
while(true){
if(!((t__8865 == null)))
{{
var G__8867 = ((ascending_QMARK_)?t__8865.left:t__8865.right);
var G__8868 = cljs.core.conj.call(null,stack__8866,t__8865);
t__8865 = G__8867;
stack__8866 = G__8868;
continue;
}
} else
{return stack__8866;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8869 = this;
var h__2236__auto____8870 = this__8869.__hash;
if(!((h__2236__auto____8870 == null)))
{return h__2236__auto____8870;
} else
{var h__2236__auto____8871 = cljs.core.hash_coll.call(null,coll);
this__8869.__hash = h__2236__auto____8871;
return h__2236__auto____8871;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8872 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__8873 = this;
var this__8874 = this;
return cljs.core.pr_str.call(null,this__8874);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8875 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8876 = this;
if((this__8876.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__8876.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__8877 = this;
return cljs.core.peek.call(null,this__8877.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__8878 = this;
var t__8879 = cljs.core.first.call(null,this__8878.stack);
var next_stack__8880 = cljs.core.tree_map_seq_push.call(null,((this__8878.ascending_QMARK_)?t__8879.right:t__8879.left),cljs.core.next.call(null,this__8878.stack),this__8878.ascending_QMARK_);
if(!((next_stack__8880 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__8880,this__8878.ascending_QMARK_,(this__8878.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8881 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8882 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__8882.stack,this__8882.ascending_QMARK_,this__8882.cnt,this__8882.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8883 = this;
return this__8883.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
void 0;
void 0;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____8885 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____8885)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____8885;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____8887 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____8887)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____8887;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__8891 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__8891))
{return cljs.core.deref.call(null,init__8891);
} else
{var init__8892 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__8891):init__8891);
if(cljs.core.reduced_QMARK_.call(null,init__8892))
{return cljs.core.deref.call(null,init__8892);
} else
{var init__8893 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__8892):init__8892);
if(cljs.core.reduced_QMARK_.call(null,init__8893))
{return cljs.core.deref.call(null,init__8893);
} else
{return init__8893;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8896 = this;
var h__2236__auto____8897 = this__8896.__hash;
if(!((h__2236__auto____8897 == null)))
{return h__2236__auto____8897;
} else
{var h__2236__auto____8898 = cljs.core.hash_coll.call(null,coll);
this__8896.__hash = h__2236__auto____8898;
return h__2236__auto____8898;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8899 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8900 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8901 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8901.key,this__8901.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__8949 = null;
var G__8949__2 = (function (this_sym8902,k){
var this__8904 = this;
var this_sym8902__8905 = this;
var node__8906 = this_sym8902__8905;
return node__8906.cljs$core$ILookup$_lookup$arity$2(node__8906,k);
});
var G__8949__3 = (function (this_sym8903,k,not_found){
var this__8904 = this;
var this_sym8903__8907 = this;
var node__8908 = this_sym8903__8907;
return node__8908.cljs$core$ILookup$_lookup$arity$3(node__8908,k,not_found);
});
G__8949 = function(this_sym8903,k,not_found){
switch(arguments.length){
case 2:
return G__8949__2.call(this,this_sym8903,k);
case 3:
return G__8949__3.call(this,this_sym8903,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8949;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym8894,args8895){
var this__8909 = this;
return this_sym8894.call.apply(this_sym8894,[this_sym8894].concat(args8895.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8910 = this;
return cljs.core.PersistentVector.fromArray([this__8910.key,this__8910.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8911 = this;
return this__8911.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8912 = this;
return this__8912.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__8913 = this;
var node__8914 = this;
return ins.balance_right(node__8914);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__8915 = this;
var node__8916 = this;
return (new cljs.core.RedNode(this__8915.key,this__8915.val,this__8915.left,this__8915.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__8917 = this;
var node__8918 = this;
return cljs.core.balance_right_del.call(null,this__8917.key,this__8917.val,this__8917.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__8919 = this;
var node__8920 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__8921 = this;
var node__8922 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8922,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__8923 = this;
var node__8924 = this;
return cljs.core.balance_left_del.call(null,this__8923.key,this__8923.val,del,this__8923.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__8925 = this;
var node__8926 = this;
return ins.balance_left(node__8926);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__8927 = this;
var node__8928 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__8928,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__8950 = null;
var G__8950__0 = (function (){
var this__8929 = this;
var this__8931 = this;
return cljs.core.pr_str.call(null,this__8931);
});
G__8950 = function(){
switch(arguments.length){
case 0:
return G__8950__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8950;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__8932 = this;
var node__8933 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8933,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__8934 = this;
var node__8935 = this;
return node__8935;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8936 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8937 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8938 = this;
return cljs.core.list.call(null,this__8938.key,this__8938.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8939 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8940 = this;
return this__8940.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8941 = this;
return cljs.core.PersistentVector.fromArray([this__8941.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8942 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8942.key,this__8942.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8943 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8944 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8944.key,this__8944.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8945 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8946 = this;
if((n === 0))
{return this__8946.key;
} else
{if((n === 1))
{return this__8946.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8947 = this;
if((n === 0))
{return this__8947.key;
} else
{if((n === 1))
{return this__8947.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8948 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8953 = this;
var h__2236__auto____8954 = this__8953.__hash;
if(!((h__2236__auto____8954 == null)))
{return h__2236__auto____8954;
} else
{var h__2236__auto____8955 = cljs.core.hash_coll.call(null,coll);
this__8953.__hash = h__2236__auto____8955;
return h__2236__auto____8955;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8956 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8957 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8958 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8958.key,this__8958.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9006 = null;
var G__9006__2 = (function (this_sym8959,k){
var this__8961 = this;
var this_sym8959__8962 = this;
var node__8963 = this_sym8959__8962;
return node__8963.cljs$core$ILookup$_lookup$arity$2(node__8963,k);
});
var G__9006__3 = (function (this_sym8960,k,not_found){
var this__8961 = this;
var this_sym8960__8964 = this;
var node__8965 = this_sym8960__8964;
return node__8965.cljs$core$ILookup$_lookup$arity$3(node__8965,k,not_found);
});
G__9006 = function(this_sym8960,k,not_found){
switch(arguments.length){
case 2:
return G__9006__2.call(this,this_sym8960,k);
case 3:
return G__9006__3.call(this,this_sym8960,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9006;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym8951,args8952){
var this__8966 = this;
return this_sym8951.call.apply(this_sym8951,[this_sym8951].concat(args8952.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8967 = this;
return cljs.core.PersistentVector.fromArray([this__8967.key,this__8967.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8968 = this;
return this__8968.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8969 = this;
return this__8969.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__8970 = this;
var node__8971 = this;
return (new cljs.core.RedNode(this__8970.key,this__8970.val,this__8970.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__8972 = this;
var node__8973 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__8974 = this;
var node__8975 = this;
return (new cljs.core.RedNode(this__8974.key,this__8974.val,this__8974.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__8976 = this;
var node__8977 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__8978 = this;
var node__8979 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8979,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__8980 = this;
var node__8981 = this;
return (new cljs.core.RedNode(this__8980.key,this__8980.val,del,this__8980.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__8982 = this;
var node__8983 = this;
return (new cljs.core.RedNode(this__8982.key,this__8982.val,ins,this__8982.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__8984 = this;
var node__8985 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8984.left))
{return (new cljs.core.RedNode(this__8984.key,this__8984.val,this__8984.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__8984.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8984.right))
{return (new cljs.core.RedNode(this__8984.right.key,this__8984.right.val,(new cljs.core.BlackNode(this__8984.key,this__8984.val,this__8984.left,this__8984.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__8984.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__8985,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9007 = null;
var G__9007__0 = (function (){
var this__8986 = this;
var this__8988 = this;
return cljs.core.pr_str.call(null,this__8988);
});
G__9007 = function(){
switch(arguments.length){
case 0:
return G__9007__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9007;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__8989 = this;
var node__8990 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8989.right))
{return (new cljs.core.RedNode(this__8989.key,this__8989.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8989.left,null)),this__8989.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8989.left))
{return (new cljs.core.RedNode(this__8989.left.key,this__8989.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8989.left.left,null)),(new cljs.core.BlackNode(this__8989.key,this__8989.val,this__8989.left.right,this__8989.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8990,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__8991 = this;
var node__8992 = this;
return (new cljs.core.BlackNode(this__8991.key,this__8991.val,this__8991.left,this__8991.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8993 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8994 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8995 = this;
return cljs.core.list.call(null,this__8995.key,this__8995.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8996 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8997 = this;
return this__8997.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8998 = this;
return cljs.core.PersistentVector.fromArray([this__8998.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8999 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8999.key,this__8999.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9000 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9001 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9001.key,this__9001.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9002 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9003 = this;
if((n === 0))
{return this__9003.key;
} else
{if((n === 1))
{return this__9003.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9004 = this;
if((n === 0))
{return this__9004.key;
} else
{if((n === 1))
{return this__9004.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9005 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9011 = comp.call(null,k,tree.key);
if((c__9011 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9011 < 0))
{var ins__9012 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9012 == null)))
{return tree.add_left(ins__9012);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9013 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9013 == null)))
{return tree.add_right(ins__9013);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__9016 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9016))
{return (new cljs.core.RedNode(app__9016.key,app__9016.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9016.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9016.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9016,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9017 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9017))
{return (new cljs.core.RedNode(app__9017.key,app__9017.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9017.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9017.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9017,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__9023 = comp.call(null,k,tree.key);
if((c__9023 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9023 < 0))
{var del__9024 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9025 = !((del__9024 == null));
if(or__3824__auto____9025)
{return or__3824__auto____9025;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9024,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9024,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9026 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9027 = !((del__9026 == null));
if(or__3824__auto____9027)
{return or__3824__auto____9027;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9026);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9026,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__9030 = tree.key;
var c__9031 = comp.call(null,k,tk__9030);
if((c__9031 === 0))
{return tree.replace(tk__9030,v,tree.left,tree.right);
} else
{if((c__9031 < 0))
{return tree.replace(tk__9030,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9030,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9034 = this;
var h__2236__auto____9035 = this__9034.__hash;
if(!((h__2236__auto____9035 == null)))
{return h__2236__auto____9035;
} else
{var h__2236__auto____9036 = cljs.core.hash_imap.call(null,coll);
this__9034.__hash = h__2236__auto____9036;
return h__2236__auto____9036;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9037 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9038 = this;
var n__9039 = coll.entry_at(k);
if(!((n__9039 == null)))
{return n__9039.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9040 = this;
var found__9041 = [null];
var t__9042 = cljs.core.tree_map_add.call(null,this__9040.comp,this__9040.tree,k,v,found__9041);
if((t__9042 == null))
{var found_node__9043 = cljs.core.nth.call(null,found__9041,0);
if(cljs.core._EQ_.call(null,v,found_node__9043.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9040.comp,cljs.core.tree_map_replace.call(null,this__9040.comp,this__9040.tree,k,v),this__9040.cnt,this__9040.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9040.comp,t__9042.blacken(),(this__9040.cnt + 1),this__9040.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9044 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9078 = null;
var G__9078__2 = (function (this_sym9045,k){
var this__9047 = this;
var this_sym9045__9048 = this;
var coll__9049 = this_sym9045__9048;
return coll__9049.cljs$core$ILookup$_lookup$arity$2(coll__9049,k);
});
var G__9078__3 = (function (this_sym9046,k,not_found){
var this__9047 = this;
var this_sym9046__9050 = this;
var coll__9051 = this_sym9046__9050;
return coll__9051.cljs$core$ILookup$_lookup$arity$3(coll__9051,k,not_found);
});
G__9078 = function(this_sym9046,k,not_found){
switch(arguments.length){
case 2:
return G__9078__2.call(this,this_sym9046,k);
case 3:
return G__9078__3.call(this,this_sym9046,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9078;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9032,args9033){
var this__9052 = this;
return this_sym9032.call.apply(this_sym9032,[this_sym9032].concat(args9033.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9053 = this;
if(!((this__9053.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9053.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9054 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9055 = this;
if((this__9055.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9055.tree,false,this__9055.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9056 = this;
var this__9057 = this;
return cljs.core.pr_str.call(null,this__9057);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9058 = this;
var coll__9059 = this;
var t__9060 = this__9058.tree;
while(true){
if(!((t__9060 == null)))
{var c__9061 = this__9058.comp.call(null,k,t__9060.key);
if((c__9061 === 0))
{return t__9060;
} else
{if((c__9061 < 0))
{{
var G__9079 = t__9060.left;
t__9060 = G__9079;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9080 = t__9060.right;
t__9060 = G__9080;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9062 = this;
if((this__9062.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9062.tree,ascending_QMARK_,this__9062.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9063 = this;
if((this__9063.cnt > 0))
{var stack__9064 = null;
var t__9065 = this__9063.tree;
while(true){
if(!((t__9065 == null)))
{var c__9066 = this__9063.comp.call(null,k,t__9065.key);
if((c__9066 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9064,t__9065),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9066 < 0))
{{
var G__9081 = cljs.core.conj.call(null,stack__9064,t__9065);
var G__9082 = t__9065.left;
stack__9064 = G__9081;
t__9065 = G__9082;
continue;
}
} else
{{
var G__9083 = stack__9064;
var G__9084 = t__9065.right;
stack__9064 = G__9083;
t__9065 = G__9084;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9066 > 0))
{{
var G__9085 = cljs.core.conj.call(null,stack__9064,t__9065);
var G__9086 = t__9065.right;
stack__9064 = G__9085;
t__9065 = G__9086;
continue;
}
} else
{{
var G__9087 = stack__9064;
var G__9088 = t__9065.left;
stack__9064 = G__9087;
t__9065 = G__9088;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9064 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9064,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9067 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9068 = this;
return this__9068.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9069 = this;
if((this__9069.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9069.tree,true,this__9069.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9070 = this;
return this__9070.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9071 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9072 = this;
return (new cljs.core.PersistentTreeMap(this__9072.comp,this__9072.tree,this__9072.cnt,meta,this__9072.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9073 = this;
return this__9073.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9074 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9074.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9075 = this;
var found__9076 = [null];
var t__9077 = cljs.core.tree_map_remove.call(null,this__9075.comp,this__9075.tree,k,found__9076);
if((t__9077 == null))
{if((cljs.core.nth.call(null,found__9076,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9075.comp,null,0,this__9075.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9075.comp,t__9077.blacken(),(this__9075.cnt - 1),this__9075.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__9091 = cljs.core.seq.call(null,keyvals);
var out__9092 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9091)
{{
var G__9093 = cljs.core.nnext.call(null,in__9091);
var G__9094 = cljs.core.assoc_BANG_.call(null,out__9092,cljs.core.first.call(null,in__9091),cljs.core.second.call(null,in__9091));
in__9091 = G__9093;
out__9092 = G__9094;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9092);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__9095){
var keyvals = cljs.core.seq(arglist__9095);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__9096){
var keyvals = cljs.core.seq(arglist__9096);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__9099 = cljs.core.seq.call(null,keyvals);
var out__9100 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9099)
{{
var G__9101 = cljs.core.nnext.call(null,in__9099);
var G__9102 = cljs.core.assoc.call(null,out__9100,cljs.core.first.call(null,in__9099),cljs.core.second.call(null,in__9099));
in__9099 = G__9101;
out__9100 = G__9102;
continue;
}
} else
{return out__9100;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__9103){
var keyvals = cljs.core.seq(arglist__9103);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__9106 = cljs.core.seq.call(null,keyvals);
var out__9107 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9106)
{{
var G__9108 = cljs.core.nnext.call(null,in__9106);
var G__9109 = cljs.core.assoc.call(null,out__9107,cljs.core.first.call(null,in__9106),cljs.core.second.call(null,in__9106));
in__9106 = G__9108;
out__9107 = G__9109;
continue;
}
} else
{return out__9107;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__9110){
var comparator = cljs.core.first(arglist__9110);
var keyvals = cljs.core.rest(arglist__9110);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__9111_SHARP_,p2__9112_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9114 = p1__9111_SHARP_;
if(cljs.core.truth_(or__3824__auto____9114))
{return or__3824__auto____9114;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9112_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__9115){
var maps = cljs.core.seq(arglist__9115);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__9123 = (function (m,e){
var k__9121 = cljs.core.first.call(null,e);
var v__9122 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9121))
{return cljs.core.assoc.call(null,m,k__9121,f.call(null,cljs.core._lookup.call(null,m,k__9121,null),v__9122));
} else
{return cljs.core.assoc.call(null,m,k__9121,v__9122);
}
});
var merge2__9125 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9123,(function (){var or__3824__auto____9124 = m1;
if(cljs.core.truth_(or__3824__auto____9124))
{return or__3824__auto____9124;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9125,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__9126){
var f = cljs.core.first(arglist__9126);
var maps = cljs.core.rest(arglist__9126);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9131 = cljs.core.ObjMap.EMPTY;
var keys__9132 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9132)
{var key__9133 = cljs.core.first.call(null,keys__9132);
var entry__9134 = cljs.core._lookup.call(null,map,key__9133,"\uFDD0'user/not-found");
{
var G__9135 = ((cljs.core.not_EQ_.call(null,entry__9134,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9131,key__9133,entry__9134):ret__9131);
var G__9136 = cljs.core.next.call(null,keys__9132);
ret__9131 = G__9135;
keys__9132 = G__9136;
continue;
}
} else
{return ret__9131;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9140 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9140.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9141 = this;
var h__2236__auto____9142 = this__9141.__hash;
if(!((h__2236__auto____9142 == null)))
{return h__2236__auto____9142;
} else
{var h__2236__auto____9143 = cljs.core.hash_iset.call(null,coll);
this__9141.__hash = h__2236__auto____9143;
return h__2236__auto____9143;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9144 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9145 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9145.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9166 = null;
var G__9166__2 = (function (this_sym9146,k){
var this__9148 = this;
var this_sym9146__9149 = this;
var coll__9150 = this_sym9146__9149;
return coll__9150.cljs$core$ILookup$_lookup$arity$2(coll__9150,k);
});
var G__9166__3 = (function (this_sym9147,k,not_found){
var this__9148 = this;
var this_sym9147__9151 = this;
var coll__9152 = this_sym9147__9151;
return coll__9152.cljs$core$ILookup$_lookup$arity$3(coll__9152,k,not_found);
});
G__9166 = function(this_sym9147,k,not_found){
switch(arguments.length){
case 2:
return G__9166__2.call(this,this_sym9147,k);
case 3:
return G__9166__3.call(this,this_sym9147,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9166;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9138,args9139){
var this__9153 = this;
return this_sym9138.call.apply(this_sym9138,[this_sym9138].concat(args9139.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9154 = this;
return (new cljs.core.PersistentHashSet(this__9154.meta,cljs.core.assoc.call(null,this__9154.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9155 = this;
var this__9156 = this;
return cljs.core.pr_str.call(null,this__9156);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9157 = this;
return cljs.core.keys.call(null,this__9157.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9158 = this;
return (new cljs.core.PersistentHashSet(this__9158.meta,cljs.core.dissoc.call(null,this__9158.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9159 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9160 = this;
var and__3822__auto____9161 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9161)
{var and__3822__auto____9162 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9162)
{return cljs.core.every_QMARK_.call(null,(function (p1__9137_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9137_SHARP_);
}),other);
} else
{return and__3822__auto____9162;
}
} else
{return and__3822__auto____9161;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9163 = this;
return (new cljs.core.PersistentHashSet(meta,this__9163.hash_map,this__9163.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9164 = this;
return this__9164.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9165 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9165.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9184 = null;
var G__9184__2 = (function (this_sym9170,k){
var this__9172 = this;
var this_sym9170__9173 = this;
var tcoll__9174 = this_sym9170__9173;
if((cljs.core._lookup.call(null,this__9172.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9184__3 = (function (this_sym9171,k,not_found){
var this__9172 = this;
var this_sym9171__9175 = this;
var tcoll__9176 = this_sym9171__9175;
if((cljs.core._lookup.call(null,this__9172.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9184 = function(this_sym9171,k,not_found){
switch(arguments.length){
case 2:
return G__9184__2.call(this,this_sym9171,k);
case 3:
return G__9184__3.call(this,this_sym9171,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9184;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9168,args9169){
var this__9177 = this;
return this_sym9168.call.apply(this_sym9168,[this_sym9168].concat(args9169.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9178 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9179 = this;
if((cljs.core._lookup.call(null,this__9179.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9180 = this;
return cljs.core.count.call(null,this__9180.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9181 = this;
this__9181.transient_map = cljs.core.dissoc_BANG_.call(null,this__9181.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9182 = this;
this__9182.transient_map = cljs.core.assoc_BANG_.call(null,this__9182.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9183 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9183.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9187 = this;
var h__2236__auto____9188 = this__9187.__hash;
if(!((h__2236__auto____9188 == null)))
{return h__2236__auto____9188;
} else
{var h__2236__auto____9189 = cljs.core.hash_iset.call(null,coll);
this__9187.__hash = h__2236__auto____9189;
return h__2236__auto____9189;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9190 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9191 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9191.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9217 = null;
var G__9217__2 = (function (this_sym9192,k){
var this__9194 = this;
var this_sym9192__9195 = this;
var coll__9196 = this_sym9192__9195;
return coll__9196.cljs$core$ILookup$_lookup$arity$2(coll__9196,k);
});
var G__9217__3 = (function (this_sym9193,k,not_found){
var this__9194 = this;
var this_sym9193__9197 = this;
var coll__9198 = this_sym9193__9197;
return coll__9198.cljs$core$ILookup$_lookup$arity$3(coll__9198,k,not_found);
});
G__9217 = function(this_sym9193,k,not_found){
switch(arguments.length){
case 2:
return G__9217__2.call(this,this_sym9193,k);
case 3:
return G__9217__3.call(this,this_sym9193,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9217;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9185,args9186){
var this__9199 = this;
return this_sym9185.call.apply(this_sym9185,[this_sym9185].concat(args9186.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9200 = this;
return (new cljs.core.PersistentTreeSet(this__9200.meta,cljs.core.assoc.call(null,this__9200.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9201 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9201.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9202 = this;
var this__9203 = this;
return cljs.core.pr_str.call(null,this__9203);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9204 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9204.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9205 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9205.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9206 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9207 = this;
return cljs.core._comparator.call(null,this__9207.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9208 = this;
return cljs.core.keys.call(null,this__9208.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9209 = this;
return (new cljs.core.PersistentTreeSet(this__9209.meta,cljs.core.dissoc.call(null,this__9209.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9210 = this;
return cljs.core.count.call(null,this__9210.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9211 = this;
var and__3822__auto____9212 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9212)
{var and__3822__auto____9213 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9213)
{return cljs.core.every_QMARK_.call(null,(function (p1__9167_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9167_SHARP_);
}),other);
} else
{return and__3822__auto____9213;
}
} else
{return and__3822__auto____9212;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9214 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9214.tree_map,this__9214.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9215 = this;
return this__9215.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9216 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9216.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__9220 = cljs.core.seq.call(null,coll);
var out__9221 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9220))
{{
var G__9222 = cljs.core.next.call(null,in__9220);
var G__9223 = cljs.core.conj_BANG_.call(null,out__9221,cljs.core.first.call(null,in__9220));
in__9220 = G__9222;
out__9221 = G__9223;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9221);
}
break;
}
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9224){
var keys = cljs.core.seq(arglist__9224);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9226){
var comparator = cljs.core.first(arglist__9226);
var keys = cljs.core.rest(arglist__9226);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9232 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9233 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9233))
{var e__9234 = temp__3971__auto____9233;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9234));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9232,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9225_SHARP_){
var temp__3971__auto____9235 = cljs.core.find.call(null,smap,p1__9225_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9235))
{var e__9236 = temp__3971__auto____9235;
return cljs.core.second.call(null,e__9236);
} else
{return p1__9225_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9266 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9259,seen){
while(true){
var vec__9260__9261 = p__9259;
var f__9262 = cljs.core.nth.call(null,vec__9260__9261,0,null);
var xs__9263 = vec__9260__9261;
var temp__3974__auto____9264 = cljs.core.seq.call(null,xs__9263);
if(temp__3974__auto____9264)
{var s__9265 = temp__3974__auto____9264;
if(cljs.core.contains_QMARK_.call(null,seen,f__9262))
{{
var G__9267 = cljs.core.rest.call(null,s__9265);
var G__9268 = seen;
p__9259 = G__9267;
seen = G__9268;
continue;
}
} else
{return cljs.core.cons.call(null,f__9262,step.call(null,cljs.core.rest.call(null,s__9265),cljs.core.conj.call(null,seen,f__9262)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9266.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9271 = cljs.core.PersistentVector.EMPTY;
var s__9272 = s;
while(true){
if(cljs.core.next.call(null,s__9272))
{{
var G__9273 = cljs.core.conj.call(null,ret__9271,cljs.core.first.call(null,s__9272));
var G__9274 = cljs.core.next.call(null,s__9272);
ret__9271 = G__9273;
s__9272 = G__9274;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9271);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____9277 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9277)
{return or__3824__auto____9277;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9278 = x.lastIndexOf("/");
if((i__9278 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9278 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____9281 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9281)
{return or__3824__auto____9281;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9282 = x.lastIndexOf("/");
if((i__9282 > -1))
{return cljs.core.subs.call(null,x,2,i__9282);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9289 = cljs.core.ObjMap.EMPTY;
var ks__9290 = cljs.core.seq.call(null,keys);
var vs__9291 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9292 = ks__9290;
if(and__3822__auto____9292)
{return vs__9291;
} else
{return and__3822__auto____9292;
}
})())
{{
var G__9293 = cljs.core.assoc.call(null,map__9289,cljs.core.first.call(null,ks__9290),cljs.core.first.call(null,vs__9291));
var G__9294 = cljs.core.next.call(null,ks__9290);
var G__9295 = cljs.core.next.call(null,vs__9291);
map__9289 = G__9293;
ks__9290 = G__9294;
vs__9291 = G__9295;
continue;
}
} else
{return map__9289;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9298__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9283_SHARP_,p2__9284_SHARP_){
return max_key.call(null,k,p1__9283_SHARP_,p2__9284_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9298 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9298__delegate.call(this, k, x, y, more);
};
G__9298.cljs$lang$maxFixedArity = 3;
G__9298.cljs$lang$applyTo = (function (arglist__9299){
var k = cljs.core.first(arglist__9299);
var x = cljs.core.first(cljs.core.next(arglist__9299));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9299)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9299)));
return G__9298__delegate(k, x, y, more);
});
G__9298.cljs$lang$arity$variadic = G__9298__delegate;
return G__9298;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9300__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9296_SHARP_,p2__9297_SHARP_){
return min_key.call(null,k,p1__9296_SHARP_,p2__9297_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9300 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9300__delegate.call(this, k, x, y, more);
};
G__9300.cljs$lang$maxFixedArity = 3;
G__9300.cljs$lang$applyTo = (function (arglist__9301){
var k = cljs.core.first(arglist__9301);
var x = cljs.core.first(cljs.core.next(arglist__9301));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9301)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9301)));
return G__9300__delegate(k, x, y, more);
});
G__9300.cljs$lang$arity$variadic = G__9300__delegate;
return G__9300;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9304 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9304)
{var s__9305 = temp__3974__auto____9304;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9305),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9305)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9308 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9308)
{var s__9309 = temp__3974__auto____9308;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9309))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9309),take_while.call(null,pred,cljs.core.rest.call(null,s__9309)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9311 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9311.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9323 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9324 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9324))
{var vec__9325__9326 = temp__3974__auto____9324;
var e__9327 = cljs.core.nth.call(null,vec__9325__9326,0,null);
var s__9328 = vec__9325__9326;
if(cljs.core.truth_(include__9323.call(null,e__9327)))
{return s__9328;
} else
{return cljs.core.next.call(null,s__9328);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9323,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9329 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9329))
{var vec__9330__9331 = temp__3974__auto____9329;
var e__9332 = cljs.core.nth.call(null,vec__9330__9331,0,null);
var s__9333 = vec__9330__9331;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9332))?s__9333:cljs.core.next.call(null,s__9333)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9345 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9346 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9346))
{var vec__9347__9348 = temp__3974__auto____9346;
var e__9349 = cljs.core.nth.call(null,vec__9347__9348,0,null);
var s__9350 = vec__9347__9348;
if(cljs.core.truth_(include__9345.call(null,e__9349)))
{return s__9350;
} else
{return cljs.core.next.call(null,s__9350);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9345,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9351 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9351))
{var vec__9352__9353 = temp__3974__auto____9351;
var e__9354 = cljs.core.nth.call(null,vec__9352__9353,0,null);
var s__9355 = vec__9352__9353;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9354))?s__9355:cljs.core.next.call(null,s__9355)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9356 = this;
var h__2236__auto____9357 = this__9356.__hash;
if(!((h__2236__auto____9357 == null)))
{return h__2236__auto____9357;
} else
{var h__2236__auto____9358 = cljs.core.hash_coll.call(null,rng);
this__9356.__hash = h__2236__auto____9358;
return h__2236__auto____9358;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9359 = this;
if((this__9359.step > 0))
{if(((this__9359.start + this__9359.step) < this__9359.end))
{return (new cljs.core.Range(this__9359.meta,(this__9359.start + this__9359.step),this__9359.end,this__9359.step,null));
} else
{return null;
}
} else
{if(((this__9359.start + this__9359.step) > this__9359.end))
{return (new cljs.core.Range(this__9359.meta,(this__9359.start + this__9359.step),this__9359.end,this__9359.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9360 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9361 = this;
var this__9362 = this;
return cljs.core.pr_str.call(null,this__9362);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9363 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9364 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9365 = this;
if((this__9365.step > 0))
{if((this__9365.start < this__9365.end))
{return rng;
} else
{return null;
}
} else
{if((this__9365.start > this__9365.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9366 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9366.end - this__9366.start) / this__9366.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9367 = this;
return this__9367.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9368 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9368.meta,(this__9368.start + this__9368.step),this__9368.end,this__9368.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9369 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9370 = this;
return (new cljs.core.Range(meta,this__9370.start,this__9370.end,this__9370.step,this__9370.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9371 = this;
return this__9371.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9372 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9372.start + (n * this__9372.step));
} else
{if((function (){var and__3822__auto____9373 = (this__9372.start > this__9372.end);
if(and__3822__auto____9373)
{return (this__9372.step === 0);
} else
{return and__3822__auto____9373;
}
})())
{return this__9372.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9374 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9374.start + (n * this__9374.step));
} else
{if((function (){var and__3822__auto____9375 = (this__9374.start > this__9374.end);
if(and__3822__auto____9375)
{return (this__9374.step === 0);
} else
{return and__3822__auto____9375;
}
})())
{return this__9374.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9376 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9376.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9379 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9379)
{var s__9380 = temp__3974__auto____9379;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9380),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9380)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9387 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9387)
{var s__9388 = temp__3974__auto____9387;
var fst__9389 = cljs.core.first.call(null,s__9388);
var fv__9390 = f.call(null,fst__9389);
var run__9391 = cljs.core.cons.call(null,fst__9389,cljs.core.take_while.call(null,(function (p1__9381_SHARP_){
return cljs.core._EQ_.call(null,fv__9390,f.call(null,p1__9381_SHARP_));
}),cljs.core.next.call(null,s__9388)));
return cljs.core.cons.call(null,run__9391,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9391),s__9388))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9406 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9406)
{var s__9407 = temp__3971__auto____9406;
return reductions.call(null,f,cljs.core.first.call(null,s__9407),cljs.core.rest.call(null,s__9407));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9408 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9408)
{var s__9409 = temp__3974__auto____9408;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9409)),cljs.core.rest.call(null,s__9409));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__9412 = null;
var G__9412__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9412__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9412__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9412__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9412__4 = (function() { 
var G__9413__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9413 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9413__delegate.call(this, x, y, z, args);
};
G__9413.cljs$lang$maxFixedArity = 3;
G__9413.cljs$lang$applyTo = (function (arglist__9414){
var x = cljs.core.first(arglist__9414);
var y = cljs.core.first(cljs.core.next(arglist__9414));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9414)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9414)));
return G__9413__delegate(x, y, z, args);
});
G__9413.cljs$lang$arity$variadic = G__9413__delegate;
return G__9413;
})()
;
G__9412 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9412__0.call(this);
case 1:
return G__9412__1.call(this,x);
case 2:
return G__9412__2.call(this,x,y);
case 3:
return G__9412__3.call(this,x,y,z);
default:
return G__9412__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9412.cljs$lang$maxFixedArity = 3;
G__9412.cljs$lang$applyTo = G__9412__4.cljs$lang$applyTo;
return G__9412;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9415 = null;
var G__9415__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9415__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9415__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9415__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9415__4 = (function() { 
var G__9416__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9416 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9416__delegate.call(this, x, y, z, args);
};
G__9416.cljs$lang$maxFixedArity = 3;
G__9416.cljs$lang$applyTo = (function (arglist__9417){
var x = cljs.core.first(arglist__9417);
var y = cljs.core.first(cljs.core.next(arglist__9417));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9417)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9417)));
return G__9416__delegate(x, y, z, args);
});
G__9416.cljs$lang$arity$variadic = G__9416__delegate;
return G__9416;
})()
;
G__9415 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9415__0.call(this);
case 1:
return G__9415__1.call(this,x);
case 2:
return G__9415__2.call(this,x,y);
case 3:
return G__9415__3.call(this,x,y,z);
default:
return G__9415__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9415.cljs$lang$maxFixedArity = 3;
G__9415.cljs$lang$applyTo = G__9415__4.cljs$lang$applyTo;
return G__9415;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9418 = null;
var G__9418__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9418__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9418__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9418__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9418__4 = (function() { 
var G__9419__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9419 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9419__delegate.call(this, x, y, z, args);
};
G__9419.cljs$lang$maxFixedArity = 3;
G__9419.cljs$lang$applyTo = (function (arglist__9420){
var x = cljs.core.first(arglist__9420);
var y = cljs.core.first(cljs.core.next(arglist__9420));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9420)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9420)));
return G__9419__delegate(x, y, z, args);
});
G__9419.cljs$lang$arity$variadic = G__9419__delegate;
return G__9419;
})()
;
G__9418 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9418__0.call(this);
case 1:
return G__9418__1.call(this,x);
case 2:
return G__9418__2.call(this,x,y);
case 3:
return G__9418__3.call(this,x,y,z);
default:
return G__9418__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9418.cljs$lang$maxFixedArity = 3;
G__9418.cljs$lang$applyTo = G__9418__4.cljs$lang$applyTo;
return G__9418;
})()
});
var juxt__4 = (function() { 
var G__9421__delegate = function (f,g,h,fs){
var fs__9411 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9422 = null;
var G__9422__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9392_SHARP_,p2__9393_SHARP_){
return cljs.core.conj.call(null,p1__9392_SHARP_,p2__9393_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9411);
});
var G__9422__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9394_SHARP_,p2__9395_SHARP_){
return cljs.core.conj.call(null,p1__9394_SHARP_,p2__9395_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9411);
});
var G__9422__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9396_SHARP_,p2__9397_SHARP_){
return cljs.core.conj.call(null,p1__9396_SHARP_,p2__9397_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9411);
});
var G__9422__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9398_SHARP_,p2__9399_SHARP_){
return cljs.core.conj.call(null,p1__9398_SHARP_,p2__9399_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9411);
});
var G__9422__4 = (function() { 
var G__9423__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9400_SHARP_,p2__9401_SHARP_){
return cljs.core.conj.call(null,p1__9400_SHARP_,cljs.core.apply.call(null,p2__9401_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9411);
};
var G__9423 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9423__delegate.call(this, x, y, z, args);
};
G__9423.cljs$lang$maxFixedArity = 3;
G__9423.cljs$lang$applyTo = (function (arglist__9424){
var x = cljs.core.first(arglist__9424);
var y = cljs.core.first(cljs.core.next(arglist__9424));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9424)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9424)));
return G__9423__delegate(x, y, z, args);
});
G__9423.cljs$lang$arity$variadic = G__9423__delegate;
return G__9423;
})()
;
G__9422 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9422__0.call(this);
case 1:
return G__9422__1.call(this,x);
case 2:
return G__9422__2.call(this,x,y);
case 3:
return G__9422__3.call(this,x,y,z);
default:
return G__9422__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9422.cljs$lang$maxFixedArity = 3;
G__9422.cljs$lang$applyTo = G__9422__4.cljs$lang$applyTo;
return G__9422;
})()
};
var G__9421 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9421__delegate.call(this, f, g, h, fs);
};
G__9421.cljs$lang$maxFixedArity = 3;
G__9421.cljs$lang$applyTo = (function (arglist__9425){
var f = cljs.core.first(arglist__9425);
var g = cljs.core.first(cljs.core.next(arglist__9425));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9425)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9425)));
return G__9421__delegate(f, g, h, fs);
});
G__9421.cljs$lang$arity$variadic = G__9421__delegate;
return G__9421;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__9428 = cljs.core.next.call(null,coll);
coll = G__9428;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9427 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9427)
{return (n > 0);
} else
{return and__3822__auto____9427;
}
})()))
{{
var G__9429 = (n - 1);
var G__9430 = cljs.core.next.call(null,coll);
n = G__9429;
coll = G__9430;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9432 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9432),s))
{if((cljs.core.count.call(null,matches__9432) === 1))
{return cljs.core.first.call(null,matches__9432);
} else
{return cljs.core.vec.call(null,matches__9432);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__9434 = re.exec(s);
if((matches__9434 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9434) === 1))
{return cljs.core.first.call(null,matches__9434);
} else
{return cljs.core.vec.call(null,matches__9434);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9439 = cljs.core.re_find.call(null,re,s);
var match_idx__9440 = s.search(re);
var match_str__9441 = ((cljs.core.coll_QMARK_.call(null,match_data__9439))?cljs.core.first.call(null,match_data__9439):match_data__9439);
var post_match__9442 = cljs.core.subs.call(null,s,(match_idx__9440 + cljs.core.count.call(null,match_str__9441)));
if(cljs.core.truth_(match_data__9439))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9439,re_seq.call(null,re,post_match__9442));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9449__9450 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9451 = cljs.core.nth.call(null,vec__9449__9450,0,null);
var flags__9452 = cljs.core.nth.call(null,vec__9449__9450,1,null);
var pattern__9453 = cljs.core.nth.call(null,vec__9449__9450,2,null);
return (new RegExp(pattern__9453,flags__9452));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9443_SHARP_){
return print_one.call(null,p1__9443_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9463 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9463))
{var and__3822__auto____9467 = (function (){var G__9464__9465 = obj;
if(G__9464__9465)
{if((function (){var or__3824__auto____9466 = (G__9464__9465.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9466)
{return or__3824__auto____9466;
} else
{return G__9464__9465.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9464__9465.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9464__9465);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9464__9465);
}
})();
if(cljs.core.truth_(and__3822__auto____9467))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9467;
}
} else
{return and__3822__auto____9463;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9468 = !((obj == null));
if(and__3822__auto____9468)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9468;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9469__9470 = obj;
if(G__9469__9470)
{if((function (){var or__3824__auto____9471 = (G__9469__9470.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9471)
{return or__3824__auto____9471;
} else
{return G__9469__9470.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9469__9470.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9469__9470);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9469__9470);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9486 = cljs.core.first.call(null,objs);
var sb__9487 = (new goog.string.StringBuffer());
var G__9488__9489 = cljs.core.seq.call(null,objs);
if(G__9488__9489)
{var obj__9490 = cljs.core.first.call(null,G__9488__9489);
var G__9488__9491 = G__9488__9489;
while(true){
if((obj__9490 === first_obj__9486))
{} else
{sb__9487.append(" ");
}
var G__9492__9493 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9490,opts));
if(G__9492__9493)
{var string__9494 = cljs.core.first.call(null,G__9492__9493);
var G__9492__9495 = G__9492__9493;
while(true){
sb__9487.append(string__9494);
var temp__3974__auto____9496 = cljs.core.next.call(null,G__9492__9495);
if(temp__3974__auto____9496)
{var G__9492__9497 = temp__3974__auto____9496;
{
var G__9500 = cljs.core.first.call(null,G__9492__9497);
var G__9501 = G__9492__9497;
string__9494 = G__9500;
G__9492__9495 = G__9501;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9498 = cljs.core.next.call(null,G__9488__9491);
if(temp__3974__auto____9498)
{var G__9488__9499 = temp__3974__auto____9498;
{
var G__9502 = cljs.core.first.call(null,G__9488__9499);
var G__9503 = G__9488__9499;
obj__9490 = G__9502;
G__9488__9491 = G__9503;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9487;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__9505 = cljs.core.pr_sb.call(null,objs,opts);
sb__9505.append("\n");
return [cljs.core.str(sb__9505)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9519 = cljs.core.first.call(null,objs);
var G__9520__9521 = cljs.core.seq.call(null,objs);
if(G__9520__9521)
{var obj__9522 = cljs.core.first.call(null,G__9520__9521);
var G__9520__9523 = G__9520__9521;
while(true){
if((obj__9522 === first_obj__9519))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9524__9525 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9522,opts));
if(G__9524__9525)
{var string__9526 = cljs.core.first.call(null,G__9524__9525);
var G__9524__9527 = G__9524__9525;
while(true){
cljs.core.string_print.call(null,string__9526);
var temp__3974__auto____9528 = cljs.core.next.call(null,G__9524__9527);
if(temp__3974__auto____9528)
{var G__9524__9529 = temp__3974__auto____9528;
{
var G__9532 = cljs.core.first.call(null,G__9524__9529);
var G__9533 = G__9524__9529;
string__9526 = G__9532;
G__9524__9527 = G__9533;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9530 = cljs.core.next.call(null,G__9520__9523);
if(temp__3974__auto____9530)
{var G__9520__9531 = temp__3974__auto____9530;
{
var G__9534 = cljs.core.first.call(null,G__9520__9531);
var G__9535 = G__9520__9531;
obj__9522 = G__9534;
G__9520__9523 = G__9535;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__9536){
var objs = cljs.core.seq(arglist__9536);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__9537){
var objs = cljs.core.seq(arglist__9537);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__9538){
var objs = cljs.core.seq(arglist__9538);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__9539){
var objs = cljs.core.seq(arglist__9539);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__9540){
var objs = cljs.core.seq(arglist__9540);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__9541){
var objs = cljs.core.seq(arglist__9541);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__9542){
var objs = cljs.core.seq(arglist__9542);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__9543){
var objs = cljs.core.seq(arglist__9543);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9544 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9544,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9545 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9545,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9546 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9546,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____9547 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9547))
{var nspc__9548 = temp__3974__auto____9547;
return [cljs.core.str(nspc__9548),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____9549 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9549))
{var nspc__9550 = temp__3974__auto____9549;
return [cljs.core.str(nspc__9550),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9551 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9551,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__9553 = (function (n,len){
var ns__9552 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__9552) < len))
{{
var G__9555 = [cljs.core.str("0"),cljs.core.str(ns__9552)].join('');
ns__9552 = G__9555;
continue;
}
} else
{return ns__9552;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__9553.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__9553.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__9553.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__9553.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__9553.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__9553.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9554 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9554,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9556 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__9557 = this;
var G__9558__9559 = cljs.core.seq.call(null,this__9557.watches);
if(G__9558__9559)
{var G__9561__9563 = cljs.core.first.call(null,G__9558__9559);
var vec__9562__9564 = G__9561__9563;
var key__9565 = cljs.core.nth.call(null,vec__9562__9564,0,null);
var f__9566 = cljs.core.nth.call(null,vec__9562__9564,1,null);
var G__9558__9567 = G__9558__9559;
var G__9561__9568 = G__9561__9563;
var G__9558__9569 = G__9558__9567;
while(true){
var vec__9570__9571 = G__9561__9568;
var key__9572 = cljs.core.nth.call(null,vec__9570__9571,0,null);
var f__9573 = cljs.core.nth.call(null,vec__9570__9571,1,null);
var G__9558__9574 = G__9558__9569;
f__9573.call(null,key__9572,this$,oldval,newval);
var temp__3974__auto____9575 = cljs.core.next.call(null,G__9558__9574);
if(temp__3974__auto____9575)
{var G__9558__9576 = temp__3974__auto____9575;
{
var G__9583 = cljs.core.first.call(null,G__9558__9576);
var G__9584 = G__9558__9576;
G__9561__9568 = G__9583;
G__9558__9569 = G__9584;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__9577 = this;
return this$.watches = cljs.core.assoc.call(null,this__9577.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__9578 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9578.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__9579 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__9579.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__9580 = this;
return this__9580.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9581 = this;
return this__9581.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9582 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__9596__delegate = function (x,p__9585){
var map__9591__9592 = p__9585;
var map__9591__9593 = ((cljs.core.seq_QMARK_.call(null,map__9591__9592))?cljs.core.apply.call(null,cljs.core.hash_map,map__9591__9592):map__9591__9592);
var validator__9594 = cljs.core._lookup.call(null,map__9591__9593,"\uFDD0'validator",null);
var meta__9595 = cljs.core._lookup.call(null,map__9591__9593,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__9595,validator__9594,null));
};
var G__9596 = function (x,var_args){
var p__9585 = null;
if (goog.isDef(var_args)) {
  p__9585 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9596__delegate.call(this, x, p__9585);
};
G__9596.cljs$lang$maxFixedArity = 1;
G__9596.cljs$lang$applyTo = (function (arglist__9597){
var x = cljs.core.first(arglist__9597);
var p__9585 = cljs.core.rest(arglist__9597);
return G__9596__delegate(x, p__9585);
});
G__9596.cljs$lang$arity$variadic = G__9596__delegate;
return G__9596;
})()
;
atom = function(x,var_args){
var p__9585 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____9601 = a.validator;
if(cljs.core.truth_(temp__3974__auto____9601))
{var validate__9602 = temp__3974__auto____9601;
if(cljs.core.truth_(validate__9602.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__9603 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9603,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__9604__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9604 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9604__delegate.call(this, a, f, x, y, z, more);
};
G__9604.cljs$lang$maxFixedArity = 5;
G__9604.cljs$lang$applyTo = (function (arglist__9605){
var a = cljs.core.first(arglist__9605);
var f = cljs.core.first(cljs.core.next(arglist__9605));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9605)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9605))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9605)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9605)))));
return G__9604__delegate(a, f, x, y, z, more);
});
G__9604.cljs$lang$arity$variadic = G__9604__delegate;
return G__9604;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9606){
var iref = cljs.core.first(arglist__9606);
var f = cljs.core.first(cljs.core.next(arglist__9606));
var args = cljs.core.rest(cljs.core.next(arglist__9606));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9607 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__9607.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9608 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__9608.state,(function (p__9609){
var curr_state__9610 = p__9609;
var curr_state__9611 = ((cljs.core.seq_QMARK_.call(null,curr_state__9610))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9610):curr_state__9610);
var done__9612 = cljs.core._lookup.call(null,curr_state__9611,"\uFDD0'done",null);
if(cljs.core.truth_(done__9612))
{return curr_state__9611;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9608.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__9633__9634 = options;
var map__9633__9635 = ((cljs.core.seq_QMARK_.call(null,map__9633__9634))?cljs.core.apply.call(null,cljs.core.hash_map,map__9633__9634):map__9633__9634);
var keywordize_keys__9636 = cljs.core._lookup.call(null,map__9633__9635,"\uFDD0'keywordize-keys",null);
var keyfn__9637 = (cljs.core.truth_(keywordize_keys__9636)?cljs.core.keyword:cljs.core.str);
var f__9652 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2510__auto____9651 = (function iter__9645(s__9646){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9646__9649 = s__9646;
while(true){
if(cljs.core.seq.call(null,s__9646__9649))
{var k__9650 = cljs.core.first.call(null,s__9646__9649);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9637.call(null,k__9650),thisfn.call(null,(x[k__9650]))], true),iter__9645.call(null,cljs.core.rest.call(null,s__9646__9649)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2510__auto____9651.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__9652.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9653){
var x = cljs.core.first(arglist__9653);
var options = cljs.core.rest(arglist__9653);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__9658 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__9662__delegate = function (args){
var temp__3971__auto____9659 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__9658),args,null);
if(cljs.core.truth_(temp__3971__auto____9659))
{var v__9660 = temp__3971__auto____9659;
return v__9660;
} else
{var ret__9661 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__9658,cljs.core.assoc,args,ret__9661);
return ret__9661;
}
};
var G__9662 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9662__delegate.call(this, args);
};
G__9662.cljs$lang$maxFixedArity = 0;
G__9662.cljs$lang$applyTo = (function (arglist__9663){
var args = cljs.core.seq(arglist__9663);;
return G__9662__delegate(args);
});
G__9662.cljs$lang$arity$variadic = G__9662__delegate;
return G__9662;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__9665 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__9665))
{{
var G__9666 = ret__9665;
f = G__9666;
continue;
}
} else
{return ret__9665;
}
break;
}
});
var trampoline__2 = (function() { 
var G__9667__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9667 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9667__delegate.call(this, f, args);
};
G__9667.cljs$lang$maxFixedArity = 1;
G__9667.cljs$lang$applyTo = (function (arglist__9668){
var f = cljs.core.first(arglist__9668);
var args = cljs.core.rest(arglist__9668);
return G__9667__delegate(f, args);
});
G__9667.cljs$lang$arity$variadic = G__9667__delegate;
return G__9667;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__9670 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__9670,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__9670,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____9679 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____9679)
{return or__3824__auto____9679;
} else
{var or__3824__auto____9680 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____9680)
{return or__3824__auto____9680;
} else
{var and__3822__auto____9681 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____9681)
{var and__3822__auto____9682 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____9682)
{var and__3822__auto____9683 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____9683)
{var ret__9684 = true;
var i__9685 = 0;
while(true){
if((function (){var or__3824__auto____9686 = cljs.core.not.call(null,ret__9684);
if(or__3824__auto____9686)
{return or__3824__auto____9686;
} else
{return (i__9685 === cljs.core.count.call(null,parent));
}
})())
{return ret__9684;
} else
{{
var G__9687 = isa_QMARK_.call(null,h,child.call(null,i__9685),parent.call(null,i__9685));
var G__9688 = (i__9685 + 1);
ret__9684 = G__9687;
i__9685 = G__9688;
continue;
}
}
break;
}
} else
{return and__3822__auto____9683;
}
} else
{return and__3822__auto____9682;
}
} else
{return and__3822__auto____9681;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6678))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6682))))].join('')));
}
var tp__9697 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__9698 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__9699 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__9700 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____9701 = ((cljs.core.contains_QMARK_.call(null,tp__9697.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__9699.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__9699.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__9697,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9700.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__9698,parent,ta__9699),"\uFDD0'descendants":tf__9700.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__9699,tag,td__9698)});
})());
if(cljs.core.truth_(or__3824__auto____9701))
{return or__3824__auto____9701;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__9706 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__9707 = (cljs.core.truth_(parentMap__9706.call(null,tag))?cljs.core.disj.call(null,parentMap__9706.call(null,tag),parent):cljs.core.set([]));
var newParents__9708 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9707))?cljs.core.assoc.call(null,parentMap__9706,tag,childsParents__9707):cljs.core.dissoc.call(null,parentMap__9706,tag));
var deriv_seq__9709 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9689_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9689_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9689_SHARP_),cljs.core.second.call(null,p1__9689_SHARP_)));
}),cljs.core.seq.call(null,newParents__9708)));
if(cljs.core.contains_QMARK_.call(null,parentMap__9706.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__9690_SHARP_,p2__9691_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9690_SHARP_,p2__9691_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9709));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__9717 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____9719 = (cljs.core.truth_((function (){var and__3822__auto____9718 = xprefs__9717;
if(cljs.core.truth_(and__3822__auto____9718))
{return xprefs__9717.call(null,y);
} else
{return and__3822__auto____9718;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____9719))
{return or__3824__auto____9719;
} else
{var or__3824__auto____9721 = (function (){var ps__9720 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__9720) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9720),prefer_table)))
{} else
{}
{
var G__9724 = cljs.core.rest.call(null,ps__9720);
ps__9720 = G__9724;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9721))
{return or__3824__auto____9721;
} else
{var or__3824__auto____9723 = (function (){var ps__9722 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__9722) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9722),y,prefer_table)))
{} else
{}
{
var G__9725 = cljs.core.rest.call(null,ps__9722);
ps__9722 = G__9725;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9723))
{return or__3824__auto____9723;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____9727 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____9727))
{return or__3824__auto____9727;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9745 = cljs.core.reduce.call(null,(function (be,p__9737){
var vec__9738__9739 = p__9737;
var k__9740 = cljs.core.nth.call(null,vec__9738__9739,0,null);
var ___9741 = cljs.core.nth.call(null,vec__9738__9739,1,null);
var e__9742 = vec__9738__9739;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9740))
{var be2__9744 = (cljs.core.truth_((function (){var or__3824__auto____9743 = (be == null);
if(or__3824__auto____9743)
{return or__3824__auto____9743;
} else
{return cljs.core.dominates.call(null,k__9740,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9742:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9744),k__9740,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__9740),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__9744)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__9744;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__9745))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9745));
return cljs.core.second.call(null,best_entry__9745);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____9749 = mf;
if(and__3822__auto____9749)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____9749;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____9750 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____9750)
{return or__3824__auto____9750;
} else
{var or__3824__auto____9751 = (cljs.core._reset["_"]);
if(or__3824__auto____9751)
{return or__3824__auto____9751;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____9755 = mf;
if(and__3822__auto____9755)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____9755;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____9756 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____9756)
{return or__3824__auto____9756;
} else
{var or__3824__auto____9757 = (cljs.core._add_method["_"]);
if(or__3824__auto____9757)
{return or__3824__auto____9757;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____9761 = mf;
if(and__3822__auto____9761)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____9761;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9762 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____9762)
{return or__3824__auto____9762;
} else
{var or__3824__auto____9763 = (cljs.core._remove_method["_"]);
if(or__3824__auto____9763)
{return or__3824__auto____9763;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____9767 = mf;
if(and__3822__auto____9767)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____9767;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____9768 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____9768)
{return or__3824__auto____9768;
} else
{var or__3824__auto____9769 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____9769)
{return or__3824__auto____9769;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____9773 = mf;
if(and__3822__auto____9773)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____9773;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9774 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____9774)
{return or__3824__auto____9774;
} else
{var or__3824__auto____9775 = (cljs.core._get_method["_"]);
if(or__3824__auto____9775)
{return or__3824__auto____9775;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____9779 = mf;
if(and__3822__auto____9779)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____9779;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____9780 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____9780)
{return or__3824__auto____9780;
} else
{var or__3824__auto____9781 = (cljs.core._methods["_"]);
if(or__3824__auto____9781)
{return or__3824__auto____9781;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____9785 = mf;
if(and__3822__auto____9785)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____9785;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____9786 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____9786)
{return or__3824__auto____9786;
} else
{var or__3824__auto____9787 = (cljs.core._prefers["_"]);
if(or__3824__auto____9787)
{return or__3824__auto____9787;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____9791 = mf;
if(and__3822__auto____9791)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____9791;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____9792 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____9792)
{return or__3824__auto____9792;
} else
{var or__3824__auto____9793 = (cljs.core._dispatch["_"]);
if(or__3824__auto____9793)
{return or__3824__auto____9793;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9796 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9797 = cljs.core._get_method.call(null,mf,dispatch_val__9796);
if(cljs.core.truth_(target_fn__9797))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__9796)].join('')));
}
return cljs.core.apply.call(null,target_fn__9797,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9798 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__9799 = this;
cljs.core.swap_BANG_.call(null,this__9799.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9799.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9799.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9799.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__9800 = this;
cljs.core.swap_BANG_.call(null,this__9800.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9800.method_cache,this__9800.method_table,this__9800.cached_hierarchy,this__9800.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__9801 = this;
cljs.core.swap_BANG_.call(null,this__9801.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9801.method_cache,this__9801.method_table,this__9801.cached_hierarchy,this__9801.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__9802 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9802.cached_hierarchy),cljs.core.deref.call(null,this__9802.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__9802.method_cache,this__9802.method_table,this__9802.cached_hierarchy,this__9802.hierarchy);
}
var temp__3971__auto____9803 = cljs.core.deref.call(null,this__9802.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____9803))
{var target_fn__9804 = temp__3971__auto____9803;
return target_fn__9804;
} else
{var temp__3971__auto____9805 = cljs.core.find_and_cache_best_method.call(null,this__9802.name,dispatch_val,this__9802.hierarchy,this__9802.method_table,this__9802.prefer_table,this__9802.method_cache,this__9802.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____9805))
{var target_fn__9806 = temp__3971__auto____9805;
return target_fn__9806;
} else
{return cljs.core.deref.call(null,this__9802.method_table).call(null,this__9802.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9807 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9807.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__9807.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__9807.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9807.method_cache,this__9807.method_table,this__9807.cached_hierarchy,this__9807.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__9808 = this;
return cljs.core.deref.call(null,this__9808.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__9809 = this;
return cljs.core.deref.call(null,this__9809.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__9810 = this;
return cljs.core.do_dispatch.call(null,mf,this__9810.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9812__delegate = function (_,args){
var self__9811 = this;
return cljs.core._dispatch.call(null,self__9811,args);
};
var G__9812 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9812__delegate.call(this, _, args);
};
G__9812.cljs$lang$maxFixedArity = 1;
G__9812.cljs$lang$applyTo = (function (arglist__9813){
var _ = cljs.core.first(arglist__9813);
var args = cljs.core.rest(arglist__9813);
return G__9812__delegate(_, args);
});
G__9812.cljs$lang$arity$variadic = G__9812__delegate;
return G__9812;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__9814 = this;
return cljs.core._dispatch.call(null,self__9814,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2353__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9815 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_9817,_){
var this__9816 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__9816.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__9818 = this;
return (this__9818.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__9819 = this;
var this__9820 = this;
return cljs.core.pr_str.call(null,this__9820);
});
cljs.core.UUID;

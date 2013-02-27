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
var G__16739__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__16739 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16739__delegate.call(this, array, i, idxs);
};
G__16739.cljs$lang$maxFixedArity = 2;
G__16739.cljs$lang$applyTo = (function (arglist__16740){
var array = cljs.core.first(arglist__16740);
var i = cljs.core.first(cljs.core.next(arglist__16740));
var idxs = cljs.core.rest(cljs.core.next(arglist__16740));
return G__16739__delegate(array, i, idxs);
});
G__16739.cljs$lang$arity$variadic = G__16739__delegate;
return G__16739;
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
if((function (){var and__3822__auto____16804 = this$;
if(and__3822__auto____16804)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____16804;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____16805 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16805)
{return or__3824__auto____16805;
} else
{var or__3824__auto____16806 = (cljs.core._invoke["_"]);
if(or__3824__auto____16806)
{return or__3824__auto____16806;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____16807 = this$;
if(and__3822__auto____16807)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____16807;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____16808 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16808)
{return or__3824__auto____16808;
} else
{var or__3824__auto____16809 = (cljs.core._invoke["_"]);
if(or__3824__auto____16809)
{return or__3824__auto____16809;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____16810 = this$;
if(and__3822__auto____16810)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____16810;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____16811 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16811)
{return or__3824__auto____16811;
} else
{var or__3824__auto____16812 = (cljs.core._invoke["_"]);
if(or__3824__auto____16812)
{return or__3824__auto____16812;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____16813 = this$;
if(and__3822__auto____16813)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____16813;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____16814 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16814)
{return or__3824__auto____16814;
} else
{var or__3824__auto____16815 = (cljs.core._invoke["_"]);
if(or__3824__auto____16815)
{return or__3824__auto____16815;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____16816 = this$;
if(and__3822__auto____16816)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____16816;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____16817 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16817)
{return or__3824__auto____16817;
} else
{var or__3824__auto____16818 = (cljs.core._invoke["_"]);
if(or__3824__auto____16818)
{return or__3824__auto____16818;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____16819 = this$;
if(and__3822__auto____16819)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____16819;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____16820 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16820)
{return or__3824__auto____16820;
} else
{var or__3824__auto____16821 = (cljs.core._invoke["_"]);
if(or__3824__auto____16821)
{return or__3824__auto____16821;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____16822 = this$;
if(and__3822__auto____16822)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____16822;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____16823 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16823)
{return or__3824__auto____16823;
} else
{var or__3824__auto____16824 = (cljs.core._invoke["_"]);
if(or__3824__auto____16824)
{return or__3824__auto____16824;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____16825 = this$;
if(and__3822__auto____16825)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____16825;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____16826 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16826)
{return or__3824__auto____16826;
} else
{var or__3824__auto____16827 = (cljs.core._invoke["_"]);
if(or__3824__auto____16827)
{return or__3824__auto____16827;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____16828 = this$;
if(and__3822__auto____16828)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____16828;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____16829 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16829)
{return or__3824__auto____16829;
} else
{var or__3824__auto____16830 = (cljs.core._invoke["_"]);
if(or__3824__auto____16830)
{return or__3824__auto____16830;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____16831 = this$;
if(and__3822__auto____16831)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____16831;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____16832 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16832)
{return or__3824__auto____16832;
} else
{var or__3824__auto____16833 = (cljs.core._invoke["_"]);
if(or__3824__auto____16833)
{return or__3824__auto____16833;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____16834 = this$;
if(and__3822__auto____16834)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____16834;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____16835 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16835)
{return or__3824__auto____16835;
} else
{var or__3824__auto____16836 = (cljs.core._invoke["_"]);
if(or__3824__auto____16836)
{return or__3824__auto____16836;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____16837 = this$;
if(and__3822__auto____16837)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____16837;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____16838 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16838)
{return or__3824__auto____16838;
} else
{var or__3824__auto____16839 = (cljs.core._invoke["_"]);
if(or__3824__auto____16839)
{return or__3824__auto____16839;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____16840 = this$;
if(and__3822__auto____16840)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____16840;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____16841 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16841)
{return or__3824__auto____16841;
} else
{var or__3824__auto____16842 = (cljs.core._invoke["_"]);
if(or__3824__auto____16842)
{return or__3824__auto____16842;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____16843 = this$;
if(and__3822__auto____16843)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____16843;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____16844 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16844)
{return or__3824__auto____16844;
} else
{var or__3824__auto____16845 = (cljs.core._invoke["_"]);
if(or__3824__auto____16845)
{return or__3824__auto____16845;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____16846 = this$;
if(and__3822__auto____16846)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____16846;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____16847 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16847)
{return or__3824__auto____16847;
} else
{var or__3824__auto____16848 = (cljs.core._invoke["_"]);
if(or__3824__auto____16848)
{return or__3824__auto____16848;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____16849 = this$;
if(and__3822__auto____16849)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____16849;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____16850 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16850)
{return or__3824__auto____16850;
} else
{var or__3824__auto____16851 = (cljs.core._invoke["_"]);
if(or__3824__auto____16851)
{return or__3824__auto____16851;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____16852 = this$;
if(and__3822__auto____16852)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____16852;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____16853 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16853)
{return or__3824__auto____16853;
} else
{var or__3824__auto____16854 = (cljs.core._invoke["_"]);
if(or__3824__auto____16854)
{return or__3824__auto____16854;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____16855 = this$;
if(and__3822__auto____16855)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____16855;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____16856 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16856)
{return or__3824__auto____16856;
} else
{var or__3824__auto____16857 = (cljs.core._invoke["_"]);
if(or__3824__auto____16857)
{return or__3824__auto____16857;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____16858 = this$;
if(and__3822__auto____16858)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____16858;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____16859 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16859)
{return or__3824__auto____16859;
} else
{var or__3824__auto____16860 = (cljs.core._invoke["_"]);
if(or__3824__auto____16860)
{return or__3824__auto____16860;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____16861 = this$;
if(and__3822__auto____16861)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____16861;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____16862 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16862)
{return or__3824__auto____16862;
} else
{var or__3824__auto____16863 = (cljs.core._invoke["_"]);
if(or__3824__auto____16863)
{return or__3824__auto____16863;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____16864 = this$;
if(and__3822__auto____16864)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____16864;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____16865 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16865)
{return or__3824__auto____16865;
} else
{var or__3824__auto____16866 = (cljs.core._invoke["_"]);
if(or__3824__auto____16866)
{return or__3824__auto____16866;
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
if((function (){var and__3822__auto____16870 = coll;
if(and__3822__auto____16870)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____16870;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____16871 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____16871)
{return or__3824__auto____16871;
} else
{var or__3824__auto____16872 = (cljs.core._count["_"]);
if(or__3824__auto____16872)
{return or__3824__auto____16872;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____16876 = coll;
if(and__3822__auto____16876)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____16876;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____16877 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____16877)
{return or__3824__auto____16877;
} else
{var or__3824__auto____16878 = (cljs.core._empty["_"]);
if(or__3824__auto____16878)
{return or__3824__auto____16878;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____16882 = coll;
if(and__3822__auto____16882)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____16882;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____16883 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____16883)
{return or__3824__auto____16883;
} else
{var or__3824__auto____16884 = (cljs.core._conj["_"]);
if(or__3824__auto____16884)
{return or__3824__auto____16884;
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
if((function (){var and__3822__auto____16891 = coll;
if(and__3822__auto____16891)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____16891;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____16892 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____16892)
{return or__3824__auto____16892;
} else
{var or__3824__auto____16893 = (cljs.core._nth["_"]);
if(or__3824__auto____16893)
{return or__3824__auto____16893;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____16894 = coll;
if(and__3822__auto____16894)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____16894;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____16895 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____16895)
{return or__3824__auto____16895;
} else
{var or__3824__auto____16896 = (cljs.core._nth["_"]);
if(or__3824__auto____16896)
{return or__3824__auto____16896;
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
if((function (){var and__3822__auto____16900 = coll;
if(and__3822__auto____16900)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____16900;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____16901 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____16901)
{return or__3824__auto____16901;
} else
{var or__3824__auto____16902 = (cljs.core._first["_"]);
if(or__3824__auto____16902)
{return or__3824__auto____16902;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____16906 = coll;
if(and__3822__auto____16906)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____16906;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____16907 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____16907)
{return or__3824__auto____16907;
} else
{var or__3824__auto____16908 = (cljs.core._rest["_"]);
if(or__3824__auto____16908)
{return or__3824__auto____16908;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____16912 = coll;
if(and__3822__auto____16912)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____16912;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____16913 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____16913)
{return or__3824__auto____16913;
} else
{var or__3824__auto____16914 = (cljs.core._next["_"]);
if(or__3824__auto____16914)
{return or__3824__auto____16914;
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
if((function (){var and__3822__auto____16921 = o;
if(and__3822__auto____16921)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____16921;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____16922 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____16922)
{return or__3824__auto____16922;
} else
{var or__3824__auto____16923 = (cljs.core._lookup["_"]);
if(or__3824__auto____16923)
{return or__3824__auto____16923;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____16924 = o;
if(and__3822__auto____16924)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____16924;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____16925 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____16925)
{return or__3824__auto____16925;
} else
{var or__3824__auto____16926 = (cljs.core._lookup["_"]);
if(or__3824__auto____16926)
{return or__3824__auto____16926;
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
if((function (){var and__3822__auto____16930 = coll;
if(and__3822__auto____16930)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____16930;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____16931 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____16931)
{return or__3824__auto____16931;
} else
{var or__3824__auto____16932 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____16932)
{return or__3824__auto____16932;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____16936 = coll;
if(and__3822__auto____16936)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____16936;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____16937 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____16937)
{return or__3824__auto____16937;
} else
{var or__3824__auto____16938 = (cljs.core._assoc["_"]);
if(or__3824__auto____16938)
{return or__3824__auto____16938;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____16942 = coll;
if(and__3822__auto____16942)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____16942;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____16943 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____16943)
{return or__3824__auto____16943;
} else
{var or__3824__auto____16944 = (cljs.core._dissoc["_"]);
if(or__3824__auto____16944)
{return or__3824__auto____16944;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____16948 = coll;
if(and__3822__auto____16948)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____16948;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____16949 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____16949)
{return or__3824__auto____16949;
} else
{var or__3824__auto____16950 = (cljs.core._key["_"]);
if(or__3824__auto____16950)
{return or__3824__auto____16950;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____16954 = coll;
if(and__3822__auto____16954)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____16954;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____16955 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____16955)
{return or__3824__auto____16955;
} else
{var or__3824__auto____16956 = (cljs.core._val["_"]);
if(or__3824__auto____16956)
{return or__3824__auto____16956;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____16960 = coll;
if(and__3822__auto____16960)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____16960;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____16961 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____16961)
{return or__3824__auto____16961;
} else
{var or__3824__auto____16962 = (cljs.core._disjoin["_"]);
if(or__3824__auto____16962)
{return or__3824__auto____16962;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____16966 = coll;
if(and__3822__auto____16966)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____16966;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____16967 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____16967)
{return or__3824__auto____16967;
} else
{var or__3824__auto____16968 = (cljs.core._peek["_"]);
if(or__3824__auto____16968)
{return or__3824__auto____16968;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____16972 = coll;
if(and__3822__auto____16972)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____16972;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____16973 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____16973)
{return or__3824__auto____16973;
} else
{var or__3824__auto____16974 = (cljs.core._pop["_"]);
if(or__3824__auto____16974)
{return or__3824__auto____16974;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____16978 = coll;
if(and__3822__auto____16978)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____16978;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____16979 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____16979)
{return or__3824__auto____16979;
} else
{var or__3824__auto____16980 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____16980)
{return or__3824__auto____16980;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____16984 = o;
if(and__3822__auto____16984)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____16984;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____16985 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____16985)
{return or__3824__auto____16985;
} else
{var or__3824__auto____16986 = (cljs.core._deref["_"]);
if(or__3824__auto____16986)
{return or__3824__auto____16986;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____16990 = o;
if(and__3822__auto____16990)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____16990;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____16991 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____16991)
{return or__3824__auto____16991;
} else
{var or__3824__auto____16992 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____16992)
{return or__3824__auto____16992;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____16996 = o;
if(and__3822__auto____16996)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____16996;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____16997 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____16997)
{return or__3824__auto____16997;
} else
{var or__3824__auto____16998 = (cljs.core._meta["_"]);
if(or__3824__auto____16998)
{return or__3824__auto____16998;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____17002 = o;
if(and__3822__auto____17002)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____17002;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____17003 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____17003)
{return or__3824__auto____17003;
} else
{var or__3824__auto____17004 = (cljs.core._with_meta["_"]);
if(or__3824__auto____17004)
{return or__3824__auto____17004;
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
if((function (){var and__3822__auto____17011 = coll;
if(and__3822__auto____17011)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____17011;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____17012 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____17012)
{return or__3824__auto____17012;
} else
{var or__3824__auto____17013 = (cljs.core._reduce["_"]);
if(or__3824__auto____17013)
{return or__3824__auto____17013;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____17014 = coll;
if(and__3822__auto____17014)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____17014;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____17015 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____17015)
{return or__3824__auto____17015;
} else
{var or__3824__auto____17016 = (cljs.core._reduce["_"]);
if(or__3824__auto____17016)
{return or__3824__auto____17016;
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
if((function (){var and__3822__auto____17020 = coll;
if(and__3822__auto____17020)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____17020;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____17021 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____17021)
{return or__3824__auto____17021;
} else
{var or__3824__auto____17022 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____17022)
{return or__3824__auto____17022;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____17026 = o;
if(and__3822__auto____17026)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____17026;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____17027 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____17027)
{return or__3824__auto____17027;
} else
{var or__3824__auto____17028 = (cljs.core._equiv["_"]);
if(or__3824__auto____17028)
{return or__3824__auto____17028;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____17032 = o;
if(and__3822__auto____17032)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____17032;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____17033 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____17033)
{return or__3824__auto____17033;
} else
{var or__3824__auto____17034 = (cljs.core._hash["_"]);
if(or__3824__auto____17034)
{return or__3824__auto____17034;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____17038 = o;
if(and__3822__auto____17038)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____17038;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____17039 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____17039)
{return or__3824__auto____17039;
} else
{var or__3824__auto____17040 = (cljs.core._seq["_"]);
if(or__3824__auto____17040)
{return or__3824__auto____17040;
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
if((function (){var and__3822__auto____17044 = coll;
if(and__3822__auto____17044)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____17044;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____17045 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____17045)
{return or__3824__auto____17045;
} else
{var or__3824__auto____17046 = (cljs.core._rseq["_"]);
if(or__3824__auto____17046)
{return or__3824__auto____17046;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____17050 = coll;
if(and__3822__auto____17050)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____17050;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____17051 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____17051)
{return or__3824__auto____17051;
} else
{var or__3824__auto____17052 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____17052)
{return or__3824__auto____17052;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____17056 = coll;
if(and__3822__auto____17056)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____17056;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____17057 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____17057)
{return or__3824__auto____17057;
} else
{var or__3824__auto____17058 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____17058)
{return or__3824__auto____17058;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____17062 = coll;
if(and__3822__auto____17062)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____17062;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____17063 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____17063)
{return or__3824__auto____17063;
} else
{var or__3824__auto____17064 = (cljs.core._entry_key["_"]);
if(or__3824__auto____17064)
{return or__3824__auto____17064;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____17068 = coll;
if(and__3822__auto____17068)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____17068;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____17069 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____17069)
{return or__3824__auto____17069;
} else
{var or__3824__auto____17070 = (cljs.core._comparator["_"]);
if(or__3824__auto____17070)
{return or__3824__auto____17070;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____17074 = o;
if(and__3822__auto____17074)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____17074;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____17075 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____17075)
{return or__3824__auto____17075;
} else
{var or__3824__auto____17076 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____17076)
{return or__3824__auto____17076;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____17080 = d;
if(and__3822__auto____17080)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____17080;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____17081 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____17081)
{return or__3824__auto____17081;
} else
{var or__3824__auto____17082 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____17082)
{return or__3824__auto____17082;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____17086 = this$;
if(and__3822__auto____17086)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____17086;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____17087 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____17087)
{return or__3824__auto____17087;
} else
{var or__3824__auto____17088 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____17088)
{return or__3824__auto____17088;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____17092 = this$;
if(and__3822__auto____17092)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____17092;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____17093 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____17093)
{return or__3824__auto____17093;
} else
{var or__3824__auto____17094 = (cljs.core._add_watch["_"]);
if(or__3824__auto____17094)
{return or__3824__auto____17094;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____17098 = this$;
if(and__3822__auto____17098)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____17098;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____17099 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____17099)
{return or__3824__auto____17099;
} else
{var or__3824__auto____17100 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____17100)
{return or__3824__auto____17100;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____17104 = coll;
if(and__3822__auto____17104)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____17104;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____17105 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____17105)
{return or__3824__auto____17105;
} else
{var or__3824__auto____17106 = (cljs.core._as_transient["_"]);
if(or__3824__auto____17106)
{return or__3824__auto____17106;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____17110 = tcoll;
if(and__3822__auto____17110)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____17110;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____17111 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____17111)
{return or__3824__auto____17111;
} else
{var or__3824__auto____17112 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____17112)
{return or__3824__auto____17112;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____17116 = tcoll;
if(and__3822__auto____17116)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____17116;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____17117 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____17117)
{return or__3824__auto____17117;
} else
{var or__3824__auto____17118 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____17118)
{return or__3824__auto____17118;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____17122 = tcoll;
if(and__3822__auto____17122)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____17122;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____17123 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____17123)
{return or__3824__auto____17123;
} else
{var or__3824__auto____17124 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____17124)
{return or__3824__auto____17124;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____17128 = tcoll;
if(and__3822__auto____17128)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____17128;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____17129 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____17129)
{return or__3824__auto____17129;
} else
{var or__3824__auto____17130 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____17130)
{return or__3824__auto____17130;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____17134 = tcoll;
if(and__3822__auto____17134)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____17134;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____17135 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____17135)
{return or__3824__auto____17135;
} else
{var or__3824__auto____17136 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____17136)
{return or__3824__auto____17136;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____17140 = tcoll;
if(and__3822__auto____17140)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____17140;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____17141 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____17141)
{return or__3824__auto____17141;
} else
{var or__3824__auto____17142 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____17142)
{return or__3824__auto____17142;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____17146 = tcoll;
if(and__3822__auto____17146)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____17146;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____17147 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____17147)
{return or__3824__auto____17147;
} else
{var or__3824__auto____17148 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____17148)
{return or__3824__auto____17148;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____17152 = x;
if(and__3822__auto____17152)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____17152;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____17153 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____17153)
{return or__3824__auto____17153;
} else
{var or__3824__auto____17154 = (cljs.core._compare["_"]);
if(or__3824__auto____17154)
{return or__3824__auto____17154;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____17158 = coll;
if(and__3822__auto____17158)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____17158;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____17159 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____17159)
{return or__3824__auto____17159;
} else
{var or__3824__auto____17160 = (cljs.core._drop_first["_"]);
if(or__3824__auto____17160)
{return or__3824__auto____17160;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____17164 = coll;
if(and__3822__auto____17164)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____17164;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____17165 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____17165)
{return or__3824__auto____17165;
} else
{var or__3824__auto____17166 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____17166)
{return or__3824__auto____17166;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____17170 = coll;
if(and__3822__auto____17170)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____17170;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____17171 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____17171)
{return or__3824__auto____17171;
} else
{var or__3824__auto____17172 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____17172)
{return or__3824__auto____17172;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____17176 = coll;
if(and__3822__auto____17176)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____17176;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____17177 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____17177)
{return or__3824__auto____17177;
} else
{var or__3824__auto____17178 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____17178)
{return or__3824__auto____17178;
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
var or__3824__auto____17180 = (x === y);
if(or__3824__auto____17180)
{return or__3824__auto____17180;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__17181__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__17182 = y;
var G__17183 = cljs.core.first.call(null,more);
var G__17184 = cljs.core.next.call(null,more);
x = G__17182;
y = G__17183;
more = G__17184;
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
var G__17181 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17181__delegate.call(this, x, y, more);
};
G__17181.cljs$lang$maxFixedArity = 2;
G__17181.cljs$lang$applyTo = (function (arglist__17185){
var x = cljs.core.first(arglist__17185);
var y = cljs.core.first(cljs.core.next(arglist__17185));
var more = cljs.core.rest(cljs.core.next(arglist__17185));
return G__17181__delegate(x, y, more);
});
G__17181.cljs$lang$arity$variadic = G__17181__delegate;
return G__17181;
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
var G__17186 = null;
var G__17186__2 = (function (o,k){
return null;
});
var G__17186__3 = (function (o,k,not_found){
return not_found;
});
G__17186 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__17186__2.call(this,o,k);
case 3:
return G__17186__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17186;
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
var G__17187 = null;
var G__17187__2 = (function (_,f){
return f.call(null);
});
var G__17187__3 = (function (_,f,start){
return start;
});
G__17187 = function(_,f,start){
switch(arguments.length){
case 2:
return G__17187__2.call(this,_,f);
case 3:
return G__17187__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17187;
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
var G__17188 = null;
var G__17188__2 = (function (_,n){
return null;
});
var G__17188__3 = (function (_,n,not_found){
return not_found;
});
G__17188 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__17188__2.call(this,_,n);
case 3:
return G__17188__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17188;
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
var cnt__17201 = cljs.core._count.call(null,cicoll);
if((cnt__17201 === 0))
{return f.call(null);
} else
{var val__17202 = cljs.core._nth.call(null,cicoll,0);
var n__17203 = 1;
while(true){
if((n__17203 < cnt__17201))
{var nval__17204 = f.call(null,val__17202,cljs.core._nth.call(null,cicoll,n__17203));
if(cljs.core.reduced_QMARK_.call(null,nval__17204))
{return cljs.core.deref.call(null,nval__17204);
} else
{{
var G__17213 = nval__17204;
var G__17214 = (n__17203 + 1);
val__17202 = G__17213;
n__17203 = G__17214;
continue;
}
}
} else
{return val__17202;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__17205 = cljs.core._count.call(null,cicoll);
var val__17206 = val;
var n__17207 = 0;
while(true){
if((n__17207 < cnt__17205))
{var nval__17208 = f.call(null,val__17206,cljs.core._nth.call(null,cicoll,n__17207));
if(cljs.core.reduced_QMARK_.call(null,nval__17208))
{return cljs.core.deref.call(null,nval__17208);
} else
{{
var G__17215 = nval__17208;
var G__17216 = (n__17207 + 1);
val__17206 = G__17215;
n__17207 = G__17216;
continue;
}
}
} else
{return val__17206;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__17209 = cljs.core._count.call(null,cicoll);
var val__17210 = val;
var n__17211 = idx;
while(true){
if((n__17211 < cnt__17209))
{var nval__17212 = f.call(null,val__17210,cljs.core._nth.call(null,cicoll,n__17211));
if(cljs.core.reduced_QMARK_.call(null,nval__17212))
{return cljs.core.deref.call(null,nval__17212);
} else
{{
var G__17217 = nval__17212;
var G__17218 = (n__17211 + 1);
val__17210 = G__17217;
n__17211 = G__17218;
continue;
}
}
} else
{return val__17210;
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
var cnt__17231 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__17232 = (arr[0]);
var n__17233 = 1;
while(true){
if((n__17233 < cnt__17231))
{var nval__17234 = f.call(null,val__17232,(arr[n__17233]));
if(cljs.core.reduced_QMARK_.call(null,nval__17234))
{return cljs.core.deref.call(null,nval__17234);
} else
{{
var G__17243 = nval__17234;
var G__17244 = (n__17233 + 1);
val__17232 = G__17243;
n__17233 = G__17244;
continue;
}
}
} else
{return val__17232;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__17235 = arr.length;
var val__17236 = val;
var n__17237 = 0;
while(true){
if((n__17237 < cnt__17235))
{var nval__17238 = f.call(null,val__17236,(arr[n__17237]));
if(cljs.core.reduced_QMARK_.call(null,nval__17238))
{return cljs.core.deref.call(null,nval__17238);
} else
{{
var G__17245 = nval__17238;
var G__17246 = (n__17237 + 1);
val__17236 = G__17245;
n__17237 = G__17246;
continue;
}
}
} else
{return val__17236;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__17239 = arr.length;
var val__17240 = val;
var n__17241 = idx;
while(true){
if((n__17241 < cnt__17239))
{var nval__17242 = f.call(null,val__17240,(arr[n__17241]));
if(cljs.core.reduced_QMARK_.call(null,nval__17242))
{return cljs.core.deref.call(null,nval__17242);
} else
{{
var G__17247 = nval__17242;
var G__17248 = (n__17241 + 1);
val__17240 = G__17247;
n__17241 = G__17248;
continue;
}
}
} else
{return val__17240;
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
var this__17249 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__17250 = this;
if(((this__17250.i + 1) < this__17250.a.length))
{return (new cljs.core.IndexedSeq(this__17250.a,(this__17250.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17251 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__17252 = this;
var c__17253 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__17253 > 0))
{return (new cljs.core.RSeq(coll,(c__17253 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__17254 = this;
var this__17255 = this;
return cljs.core.pr_str.call(null,this__17255);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__17256 = this;
if(cljs.core.counted_QMARK_.call(null,this__17256.a))
{return cljs.core.ci_reduce.call(null,this__17256.a,f,(this__17256.a[this__17256.i]),(this__17256.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__17256.a[this__17256.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__17257 = this;
if(cljs.core.counted_QMARK_.call(null,this__17257.a))
{return cljs.core.ci_reduce.call(null,this__17257.a,f,start,this__17257.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__17258 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__17259 = this;
return (this__17259.a.length - this__17259.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__17260 = this;
return (this__17260.a[this__17260.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__17261 = this;
if(((this__17261.i + 1) < this__17261.a.length))
{return (new cljs.core.IndexedSeq(this__17261.a,(this__17261.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17262 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__17263 = this;
var i__17264 = (n + this__17263.i);
if((i__17264 < this__17263.a.length))
{return (this__17263.a[i__17264]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__17265 = this;
var i__17266 = (n + this__17265.i);
if((i__17266 < this__17265.a.length))
{return (this__17265.a[i__17266]);
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
var G__17267 = null;
var G__17267__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__17267__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__17267 = function(array,f,start){
switch(arguments.length){
case 2:
return G__17267__2.call(this,array,f);
case 3:
return G__17267__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17267;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__17268 = null;
var G__17268__2 = (function (array,k){
return (array[k]);
});
var G__17268__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__17268 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__17268__2.call(this,array,k);
case 3:
return G__17268__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17268;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__17269 = null;
var G__17269__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__17269__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__17269 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__17269__2.call(this,array,n);
case 3:
return G__17269__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17269;
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
var this__17270 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17271 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__17272 = this;
var this__17273 = this;
return cljs.core.pr_str.call(null,this__17273);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17274 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17275 = this;
return (this__17275.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17276 = this;
return cljs.core._nth.call(null,this__17276.ci,this__17276.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17277 = this;
if((this__17277.i > 0))
{return (new cljs.core.RSeq(this__17277.ci,(this__17277.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17278 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__17279 = this;
return (new cljs.core.RSeq(this__17279.ci,this__17279.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17280 = this;
return this__17280.meta;
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
{if((function (){var G__17284__17285 = coll;
if(G__17284__17285)
{if((function (){var or__3824__auto____17286 = (G__17284__17285.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____17286)
{return or__3824__auto____17286;
} else
{return G__17284__17285.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__17284__17285.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__17284__17285);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__17284__17285);
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
{if((function (){var G__17291__17292 = coll;
if(G__17291__17292)
{if((function (){var or__3824__auto____17293 = (G__17291__17292.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____17293)
{return or__3824__auto____17293;
} else
{return G__17291__17292.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__17291__17292.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17291__17292);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17291__17292);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__17294 = cljs.core.seq.call(null,coll);
if((s__17294 == null))
{return null;
} else
{return cljs.core._first.call(null,s__17294);
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
{if((function (){var G__17299__17300 = coll;
if(G__17299__17300)
{if((function (){var or__3824__auto____17301 = (G__17299__17300.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____17301)
{return or__3824__auto____17301;
} else
{return G__17299__17300.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__17299__17300.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17299__17300);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17299__17300);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__17302 = cljs.core.seq.call(null,coll);
if(!((s__17302 == null)))
{return cljs.core._rest.call(null,s__17302);
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
{if((function (){var G__17306__17307 = coll;
if(G__17306__17307)
{if((function (){var or__3824__auto____17308 = (G__17306__17307.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____17308)
{return or__3824__auto____17308;
} else
{return G__17306__17307.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__17306__17307.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__17306__17307);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__17306__17307);
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
var sn__17310 = cljs.core.next.call(null,s);
if(!((sn__17310 == null)))
{{
var G__17311 = sn__17310;
s = G__17311;
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
var G__17312__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__17313 = conj.call(null,coll,x);
var G__17314 = cljs.core.first.call(null,xs);
var G__17315 = cljs.core.next.call(null,xs);
coll = G__17313;
x = G__17314;
xs = G__17315;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__17312 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17312__delegate.call(this, coll, x, xs);
};
G__17312.cljs$lang$maxFixedArity = 2;
G__17312.cljs$lang$applyTo = (function (arglist__17316){
var coll = cljs.core.first(arglist__17316);
var x = cljs.core.first(cljs.core.next(arglist__17316));
var xs = cljs.core.rest(cljs.core.next(arglist__17316));
return G__17312__delegate(coll, x, xs);
});
G__17312.cljs$lang$arity$variadic = G__17312__delegate;
return G__17312;
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
var s__17319 = cljs.core.seq.call(null,coll);
var acc__17320 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__17319))
{return (acc__17320 + cljs.core._count.call(null,s__17319));
} else
{{
var G__17321 = cljs.core.next.call(null,s__17319);
var G__17322 = (acc__17320 + 1);
s__17319 = G__17321;
acc__17320 = G__17322;
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
{if((function (){var G__17329__17330 = coll;
if(G__17329__17330)
{if((function (){var or__3824__auto____17331 = (G__17329__17330.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____17331)
{return or__3824__auto____17331;
} else
{return G__17329__17330.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__17329__17330.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__17329__17330);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__17329__17330);
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
{if((function (){var G__17332__17333 = coll;
if(G__17332__17333)
{if((function (){var or__3824__auto____17334 = (G__17332__17333.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____17334)
{return or__3824__auto____17334;
} else
{return G__17332__17333.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__17332__17333.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__17332__17333);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__17332__17333);
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
var G__17337__delegate = function (coll,k,v,kvs){
while(true){
var ret__17336 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__17338 = ret__17336;
var G__17339 = cljs.core.first.call(null,kvs);
var G__17340 = cljs.core.second.call(null,kvs);
var G__17341 = cljs.core.nnext.call(null,kvs);
coll = G__17338;
k = G__17339;
v = G__17340;
kvs = G__17341;
continue;
}
} else
{return ret__17336;
}
break;
}
};
var G__17337 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17337__delegate.call(this, coll, k, v, kvs);
};
G__17337.cljs$lang$maxFixedArity = 3;
G__17337.cljs$lang$applyTo = (function (arglist__17342){
var coll = cljs.core.first(arglist__17342);
var k = cljs.core.first(cljs.core.next(arglist__17342));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17342)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17342)));
return G__17337__delegate(coll, k, v, kvs);
});
G__17337.cljs$lang$arity$variadic = G__17337__delegate;
return G__17337;
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
var G__17345__delegate = function (coll,k,ks){
while(true){
var ret__17344 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__17346 = ret__17344;
var G__17347 = cljs.core.first.call(null,ks);
var G__17348 = cljs.core.next.call(null,ks);
coll = G__17346;
k = G__17347;
ks = G__17348;
continue;
}
} else
{return ret__17344;
}
break;
}
};
var G__17345 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17345__delegate.call(this, coll, k, ks);
};
G__17345.cljs$lang$maxFixedArity = 2;
G__17345.cljs$lang$applyTo = (function (arglist__17349){
var coll = cljs.core.first(arglist__17349);
var k = cljs.core.first(cljs.core.next(arglist__17349));
var ks = cljs.core.rest(cljs.core.next(arglist__17349));
return G__17345__delegate(coll, k, ks);
});
G__17345.cljs$lang$arity$variadic = G__17345__delegate;
return G__17345;
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
if((function (){var G__17353__17354 = o;
if(G__17353__17354)
{if((function (){var or__3824__auto____17355 = (G__17353__17354.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____17355)
{return or__3824__auto____17355;
} else
{return G__17353__17354.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__17353__17354.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__17353__17354);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__17353__17354);
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
var G__17358__delegate = function (coll,k,ks){
while(true){
var ret__17357 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__17359 = ret__17357;
var G__17360 = cljs.core.first.call(null,ks);
var G__17361 = cljs.core.next.call(null,ks);
coll = G__17359;
k = G__17360;
ks = G__17361;
continue;
}
} else
{return ret__17357;
}
break;
}
};
var G__17358 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17358__delegate.call(this, coll, k, ks);
};
G__17358.cljs$lang$maxFixedArity = 2;
G__17358.cljs$lang$applyTo = (function (arglist__17362){
var coll = cljs.core.first(arglist__17362);
var k = cljs.core.first(cljs.core.next(arglist__17362));
var ks = cljs.core.rest(cljs.core.next(arglist__17362));
return G__17358__delegate(coll, k, ks);
});
G__17358.cljs$lang$arity$variadic = G__17358__delegate;
return G__17358;
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
var h__17364 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__17364);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__17364;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__17366 = (cljs.core.string_hash_cache[k]);
if(!((h__17366 == null)))
{return h__17366;
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
if((function (){var and__3822__auto____17368 = goog.isString(o);
if(and__3822__auto____17368)
{return check_cache;
} else
{return and__3822__auto____17368;
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
{var G__17372__17373 = x;
if(G__17372__17373)
{if((function (){var or__3824__auto____17374 = (G__17372__17373.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____17374)
{return or__3824__auto____17374;
} else
{return G__17372__17373.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__17372__17373.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__17372__17373);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__17372__17373);
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
{var G__17378__17379 = x;
if(G__17378__17379)
{if((function (){var or__3824__auto____17380 = (G__17378__17379.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____17380)
{return or__3824__auto____17380;
} else
{return G__17378__17379.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__17378__17379.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__17378__17379);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__17378__17379);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__17384__17385 = x;
if(G__17384__17385)
{if((function (){var or__3824__auto____17386 = (G__17384__17385.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____17386)
{return or__3824__auto____17386;
} else
{return G__17384__17385.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__17384__17385.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__17384__17385);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__17384__17385);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__17390__17391 = x;
if(G__17390__17391)
{if((function (){var or__3824__auto____17392 = (G__17390__17391.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____17392)
{return or__3824__auto____17392;
} else
{return G__17390__17391.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__17390__17391.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__17390__17391);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__17390__17391);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__17396__17397 = x;
if(G__17396__17397)
{if((function (){var or__3824__auto____17398 = (G__17396__17397.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____17398)
{return or__3824__auto____17398;
} else
{return G__17396__17397.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__17396__17397.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__17396__17397);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__17396__17397);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__17402__17403 = x;
if(G__17402__17403)
{if((function (){var or__3824__auto____17404 = (G__17402__17403.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____17404)
{return or__3824__auto____17404;
} else
{return G__17402__17403.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__17402__17403.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__17402__17403);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__17402__17403);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__17408__17409 = x;
if(G__17408__17409)
{if((function (){var or__3824__auto____17410 = (G__17408__17409.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____17410)
{return or__3824__auto____17410;
} else
{return G__17408__17409.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__17408__17409.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__17408__17409);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__17408__17409);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__17414__17415 = x;
if(G__17414__17415)
{if((function (){var or__3824__auto____17416 = (G__17414__17415.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____17416)
{return or__3824__auto____17416;
} else
{return G__17414__17415.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__17414__17415.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__17414__17415);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__17414__17415);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__17420__17421 = x;
if(G__17420__17421)
{if((function (){var or__3824__auto____17422 = (G__17420__17421.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____17422)
{return or__3824__auto____17422;
} else
{return G__17420__17421.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__17420__17421.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__17420__17421);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__17420__17421);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__17426__17427 = x;
if(G__17426__17427)
{if(cljs.core.truth_((function (){var or__3824__auto____17428 = null;
if(cljs.core.truth_(or__3824__auto____17428))
{return or__3824__auto____17428;
} else
{return G__17426__17427.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__17426__17427.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__17426__17427);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__17426__17427);
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
var G__17429__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__17429 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17429__delegate.call(this, keyvals);
};
G__17429.cljs$lang$maxFixedArity = 0;
G__17429.cljs$lang$applyTo = (function (arglist__17430){
var keyvals = cljs.core.seq(arglist__17430);;
return G__17429__delegate(keyvals);
});
G__17429.cljs$lang$arity$variadic = G__17429__delegate;
return G__17429;
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
var keys__17432 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__17432.push(key);
}));
return keys__17432;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__17436 = i;
var j__17437 = j;
var len__17438 = len;
while(true){
if((len__17438 === 0))
{return to;
} else
{(to[j__17437] = (from[i__17436]));
{
var G__17439 = (i__17436 + 1);
var G__17440 = (j__17437 + 1);
var G__17441 = (len__17438 - 1);
i__17436 = G__17439;
j__17437 = G__17440;
len__17438 = G__17441;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__17445 = (i + (len - 1));
var j__17446 = (j + (len - 1));
var len__17447 = len;
while(true){
if((len__17447 === 0))
{return to;
} else
{(to[j__17446] = (from[i__17445]));
{
var G__17448 = (i__17445 - 1);
var G__17449 = (j__17446 - 1);
var G__17450 = (len__17447 - 1);
i__17445 = G__17448;
j__17446 = G__17449;
len__17447 = G__17450;
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
{var G__17454__17455 = s;
if(G__17454__17455)
{if((function (){var or__3824__auto____17456 = (G__17454__17455.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____17456)
{return or__3824__auto____17456;
} else
{return G__17454__17455.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__17454__17455.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17454__17455);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17454__17455);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__17460__17461 = s;
if(G__17460__17461)
{if((function (){var or__3824__auto____17462 = (G__17460__17461.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____17462)
{return or__3824__auto____17462;
} else
{return G__17460__17461.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__17460__17461.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__17460__17461);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__17460__17461);
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
var and__3822__auto____17465 = goog.isString(x);
if(and__3822__auto____17465)
{return !((function (){var or__3824__auto____17466 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____17466)
{return or__3824__auto____17466;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____17465;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____17468 = goog.isString(x);
if(and__3822__auto____17468)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____17468;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____17470 = goog.isString(x);
if(and__3822__auto____17470)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____17470;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____17475 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____17475)
{return or__3824__auto____17475;
} else
{var G__17476__17477 = f;
if(G__17476__17477)
{if((function (){var or__3824__auto____17478 = (G__17476__17477.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____17478)
{return or__3824__auto____17478;
} else
{return G__17476__17477.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__17476__17477.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__17476__17477);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__17476__17477);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____17480 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____17480)
{return (n == n.toFixed());
} else
{return and__3822__auto____17480;
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
if(cljs.core.truth_((function (){var and__3822__auto____17483 = coll;
if(cljs.core.truth_(and__3822__auto____17483))
{var and__3822__auto____17484 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____17484)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____17484;
}
} else
{return and__3822__auto____17483;
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
var G__17493__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__17489 = cljs.core.set([y,x]);
var xs__17490 = more;
while(true){
var x__17491 = cljs.core.first.call(null,xs__17490);
var etc__17492 = cljs.core.next.call(null,xs__17490);
if(cljs.core.truth_(xs__17490))
{if(cljs.core.contains_QMARK_.call(null,s__17489,x__17491))
{return false;
} else
{{
var G__17494 = cljs.core.conj.call(null,s__17489,x__17491);
var G__17495 = etc__17492;
s__17489 = G__17494;
xs__17490 = G__17495;
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
var G__17493 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17493__delegate.call(this, x, y, more);
};
G__17493.cljs$lang$maxFixedArity = 2;
G__17493.cljs$lang$applyTo = (function (arglist__17496){
var x = cljs.core.first(arglist__17496);
var y = cljs.core.first(cljs.core.next(arglist__17496));
var more = cljs.core.rest(cljs.core.next(arglist__17496));
return G__17493__delegate(x, y, more);
});
G__17493.cljs$lang$arity$variadic = G__17493__delegate;
return G__17493;
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
{if((function (){var G__17500__17501 = x;
if(G__17500__17501)
{if(cljs.core.truth_((function (){var or__3824__auto____17502 = null;
if(cljs.core.truth_(or__3824__auto____17502))
{return or__3824__auto____17502;
} else
{return G__17500__17501.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__17500__17501.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__17500__17501);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__17500__17501);
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
var xl__17507 = cljs.core.count.call(null,xs);
var yl__17508 = cljs.core.count.call(null,ys);
if((xl__17507 < yl__17508))
{return -1;
} else
{if((xl__17507 > yl__17508))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__17507,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__17509 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____17510 = (d__17509 === 0);
if(and__3822__auto____17510)
{return ((n + 1) < len);
} else
{return and__3822__auto____17510;
}
})())
{{
var G__17511 = xs;
var G__17512 = ys;
var G__17513 = len;
var G__17514 = (n + 1);
xs = G__17511;
ys = G__17512;
len = G__17513;
n = G__17514;
continue;
}
} else
{return d__17509;
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
var r__17516 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__17516))
{return r__17516;
} else
{if(cljs.core.truth_(r__17516))
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
{var a__17518 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__17518,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__17518);
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
var temp__3971__auto____17524 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____17524)
{var s__17525 = temp__3971__auto____17524;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__17525),cljs.core.next.call(null,s__17525));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__17526 = val;
var coll__17527 = cljs.core.seq.call(null,coll);
while(true){
if(coll__17527)
{var nval__17528 = f.call(null,val__17526,cljs.core.first.call(null,coll__17527));
if(cljs.core.reduced_QMARK_.call(null,nval__17528))
{return cljs.core.deref.call(null,nval__17528);
} else
{{
var G__17529 = nval__17528;
var G__17530 = cljs.core.next.call(null,coll__17527);
val__17526 = G__17529;
coll__17527 = G__17530;
continue;
}
}
} else
{return val__17526;
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
var a__17532 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__17532);
return cljs.core.vec.call(null,a__17532);
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
if((function (){var G__17539__17540 = coll;
if(G__17539__17540)
{if((function (){var or__3824__auto____17541 = (G__17539__17540.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____17541)
{return or__3824__auto____17541;
} else
{return G__17539__17540.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__17539__17540.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__17539__17540);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__17539__17540);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__17542__17543 = coll;
if(G__17542__17543)
{if((function (){var or__3824__auto____17544 = (G__17542__17543.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____17544)
{return or__3824__auto____17544;
} else
{return G__17542__17543.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__17542__17543.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__17542__17543);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__17542__17543);
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
var this__17545 = this;
return this__17545.val;
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
var G__17546__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__17546 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17546__delegate.call(this, x, y, more);
};
G__17546.cljs$lang$maxFixedArity = 2;
G__17546.cljs$lang$applyTo = (function (arglist__17547){
var x = cljs.core.first(arglist__17547);
var y = cljs.core.first(cljs.core.next(arglist__17547));
var more = cljs.core.rest(cljs.core.next(arglist__17547));
return G__17546__delegate(x, y, more);
});
G__17546.cljs$lang$arity$variadic = G__17546__delegate;
return G__17546;
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
var G__17548__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__17548 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17548__delegate.call(this, x, y, more);
};
G__17548.cljs$lang$maxFixedArity = 2;
G__17548.cljs$lang$applyTo = (function (arglist__17549){
var x = cljs.core.first(arglist__17549);
var y = cljs.core.first(cljs.core.next(arglist__17549));
var more = cljs.core.rest(cljs.core.next(arglist__17549));
return G__17548__delegate(x, y, more);
});
G__17548.cljs$lang$arity$variadic = G__17548__delegate;
return G__17548;
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
var G__17550__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__17550 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17550__delegate.call(this, x, y, more);
};
G__17550.cljs$lang$maxFixedArity = 2;
G__17550.cljs$lang$applyTo = (function (arglist__17551){
var x = cljs.core.first(arglist__17551);
var y = cljs.core.first(cljs.core.next(arglist__17551));
var more = cljs.core.rest(cljs.core.next(arglist__17551));
return G__17550__delegate(x, y, more);
});
G__17550.cljs$lang$arity$variadic = G__17550__delegate;
return G__17550;
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
var G__17552__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__17552 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17552__delegate.call(this, x, y, more);
};
G__17552.cljs$lang$maxFixedArity = 2;
G__17552.cljs$lang$applyTo = (function (arglist__17553){
var x = cljs.core.first(arglist__17553);
var y = cljs.core.first(cljs.core.next(arglist__17553));
var more = cljs.core.rest(cljs.core.next(arglist__17553));
return G__17552__delegate(x, y, more);
});
G__17552.cljs$lang$arity$variadic = G__17552__delegate;
return G__17552;
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
var G__17554__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__17555 = y;
var G__17556 = cljs.core.first.call(null,more);
var G__17557 = cljs.core.next.call(null,more);
x = G__17555;
y = G__17556;
more = G__17557;
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
var G__17554 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17554__delegate.call(this, x, y, more);
};
G__17554.cljs$lang$maxFixedArity = 2;
G__17554.cljs$lang$applyTo = (function (arglist__17558){
var x = cljs.core.first(arglist__17558);
var y = cljs.core.first(cljs.core.next(arglist__17558));
var more = cljs.core.rest(cljs.core.next(arglist__17558));
return G__17554__delegate(x, y, more);
});
G__17554.cljs$lang$arity$variadic = G__17554__delegate;
return G__17554;
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
var G__17559__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__17560 = y;
var G__17561 = cljs.core.first.call(null,more);
var G__17562 = cljs.core.next.call(null,more);
x = G__17560;
y = G__17561;
more = G__17562;
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
var G__17559 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17559__delegate.call(this, x, y, more);
};
G__17559.cljs$lang$maxFixedArity = 2;
G__17559.cljs$lang$applyTo = (function (arglist__17563){
var x = cljs.core.first(arglist__17563);
var y = cljs.core.first(cljs.core.next(arglist__17563));
var more = cljs.core.rest(cljs.core.next(arglist__17563));
return G__17559__delegate(x, y, more);
});
G__17559.cljs$lang$arity$variadic = G__17559__delegate;
return G__17559;
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
var G__17564__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__17565 = y;
var G__17566 = cljs.core.first.call(null,more);
var G__17567 = cljs.core.next.call(null,more);
x = G__17565;
y = G__17566;
more = G__17567;
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
var G__17564 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17564__delegate.call(this, x, y, more);
};
G__17564.cljs$lang$maxFixedArity = 2;
G__17564.cljs$lang$applyTo = (function (arglist__17568){
var x = cljs.core.first(arglist__17568);
var y = cljs.core.first(cljs.core.next(arglist__17568));
var more = cljs.core.rest(cljs.core.next(arglist__17568));
return G__17564__delegate(x, y, more);
});
G__17564.cljs$lang$arity$variadic = G__17564__delegate;
return G__17564;
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
var G__17569__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__17570 = y;
var G__17571 = cljs.core.first.call(null,more);
var G__17572 = cljs.core.next.call(null,more);
x = G__17570;
y = G__17571;
more = G__17572;
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
var G__17569 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17569__delegate.call(this, x, y, more);
};
G__17569.cljs$lang$maxFixedArity = 2;
G__17569.cljs$lang$applyTo = (function (arglist__17573){
var x = cljs.core.first(arglist__17573);
var y = cljs.core.first(cljs.core.next(arglist__17573));
var more = cljs.core.rest(cljs.core.next(arglist__17573));
return G__17569__delegate(x, y, more);
});
G__17569.cljs$lang$arity$variadic = G__17569__delegate;
return G__17569;
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
var G__17574__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__17574 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17574__delegate.call(this, x, y, more);
};
G__17574.cljs$lang$maxFixedArity = 2;
G__17574.cljs$lang$applyTo = (function (arglist__17575){
var x = cljs.core.first(arglist__17575);
var y = cljs.core.first(cljs.core.next(arglist__17575));
var more = cljs.core.rest(cljs.core.next(arglist__17575));
return G__17574__delegate(x, y, more);
});
G__17574.cljs$lang$arity$variadic = G__17574__delegate;
return G__17574;
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
var G__17576__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__17576 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17576__delegate.call(this, x, y, more);
};
G__17576.cljs$lang$maxFixedArity = 2;
G__17576.cljs$lang$applyTo = (function (arglist__17577){
var x = cljs.core.first(arglist__17577);
var y = cljs.core.first(cljs.core.next(arglist__17577));
var more = cljs.core.rest(cljs.core.next(arglist__17577));
return G__17576__delegate(x, y, more);
});
G__17576.cljs$lang$arity$variadic = G__17576__delegate;
return G__17576;
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
var rem__17579 = (n % d);
return cljs.core.fix.call(null,((n - rem__17579) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__17581 = cljs.core.quot.call(null,n,d);
return (n - (d * q__17581));
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
var v__17584 = (v - ((v >> 1) & 1431655765));
var v__17585 = ((v__17584 & 858993459) + ((v__17584 >> 2) & 858993459));
return ((((v__17585 + (v__17585 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__17586__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__17587 = y;
var G__17588 = cljs.core.first.call(null,more);
var G__17589 = cljs.core.next.call(null,more);
x = G__17587;
y = G__17588;
more = G__17589;
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
var G__17586 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17586__delegate.call(this, x, y, more);
};
G__17586.cljs$lang$maxFixedArity = 2;
G__17586.cljs$lang$applyTo = (function (arglist__17590){
var x = cljs.core.first(arglist__17590);
var y = cljs.core.first(cljs.core.next(arglist__17590));
var more = cljs.core.rest(cljs.core.next(arglist__17590));
return G__17586__delegate(x, y, more);
});
G__17586.cljs$lang$arity$variadic = G__17586__delegate;
return G__17586;
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
var n__17594 = n;
var xs__17595 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____17596 = xs__17595;
if(and__3822__auto____17596)
{return (n__17594 > 0);
} else
{return and__3822__auto____17596;
}
})()))
{{
var G__17597 = (n__17594 - 1);
var G__17598 = cljs.core.next.call(null,xs__17595);
n__17594 = G__17597;
xs__17595 = G__17598;
continue;
}
} else
{return xs__17595;
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
var G__17599__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__17600 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__17601 = cljs.core.next.call(null,more);
sb = G__17600;
more = G__17601;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__17599 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__17599__delegate.call(this, x, ys);
};
G__17599.cljs$lang$maxFixedArity = 1;
G__17599.cljs$lang$applyTo = (function (arglist__17602){
var x = cljs.core.first(arglist__17602);
var ys = cljs.core.rest(arglist__17602);
return G__17599__delegate(x, ys);
});
G__17599.cljs$lang$arity$variadic = G__17599__delegate;
return G__17599;
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
var G__17603__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__17604 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__17605 = cljs.core.next.call(null,more);
sb = G__17604;
more = G__17605;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__17603 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__17603__delegate.call(this, x, ys);
};
G__17603.cljs$lang$maxFixedArity = 1;
G__17603.cljs$lang$applyTo = (function (arglist__17606){
var x = cljs.core.first(arglist__17606);
var ys = cljs.core.rest(arglist__17606);
return G__17603__delegate(x, ys);
});
G__17603.cljs$lang$arity$variadic = G__17603__delegate;
return G__17603;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__17609 = cljs.core.seq.call(null,x);
var ys__17610 = cljs.core.seq.call(null,y);
while(true){
if((xs__17609 == null))
{return (ys__17610 == null);
} else
{if((ys__17610 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__17609),cljs.core.first.call(null,ys__17610)))
{{
var G__17611 = cljs.core.next.call(null,xs__17609);
var G__17612 = cljs.core.next.call(null,ys__17610);
xs__17609 = G__17611;
ys__17610 = G__17612;
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
return cljs.core.reduce.call(null,(function (p1__17613_SHARP_,p2__17614_SHARP_){
return cljs.core.hash_combine.call(null,p1__17613_SHARP_,cljs.core.hash.call(null,p2__17614_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__17618 = 0;
var s__17619 = cljs.core.seq.call(null,m);
while(true){
if(s__17619)
{var e__17620 = cljs.core.first.call(null,s__17619);
{
var G__17621 = ((h__17618 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__17620)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__17620)))) % 4503599627370496);
var G__17622 = cljs.core.next.call(null,s__17619);
h__17618 = G__17621;
s__17619 = G__17622;
continue;
}
} else
{return h__17618;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__17626 = 0;
var s__17627 = cljs.core.seq.call(null,s);
while(true){
if(s__17627)
{var e__17628 = cljs.core.first.call(null,s__17627);
{
var G__17629 = ((h__17626 + cljs.core.hash.call(null,e__17628)) % 4503599627370496);
var G__17630 = cljs.core.next.call(null,s__17627);
h__17626 = G__17629;
s__17627 = G__17630;
continue;
}
} else
{return h__17626;
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
var G__17651__17652 = cljs.core.seq.call(null,fn_map);
if(G__17651__17652)
{var G__17654__17656 = cljs.core.first.call(null,G__17651__17652);
var vec__17655__17657 = G__17654__17656;
var key_name__17658 = cljs.core.nth.call(null,vec__17655__17657,0,null);
var f__17659 = cljs.core.nth.call(null,vec__17655__17657,1,null);
var G__17651__17660 = G__17651__17652;
var G__17654__17661 = G__17654__17656;
var G__17651__17662 = G__17651__17660;
while(true){
var vec__17663__17664 = G__17654__17661;
var key_name__17665 = cljs.core.nth.call(null,vec__17663__17664,0,null);
var f__17666 = cljs.core.nth.call(null,vec__17663__17664,1,null);
var G__17651__17667 = G__17651__17662;
var str_name__17668 = cljs.core.name.call(null,key_name__17665);
(obj[str_name__17668] = f__17666);
var temp__3974__auto____17669 = cljs.core.next.call(null,G__17651__17667);
if(temp__3974__auto____17669)
{var G__17651__17670 = temp__3974__auto____17669;
{
var G__17671 = cljs.core.first.call(null,G__17651__17670);
var G__17672 = G__17651__17670;
G__17654__17661 = G__17671;
G__17651__17662 = G__17672;
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
var this__17673 = this;
var h__2236__auto____17674 = this__17673.__hash;
if(!((h__2236__auto____17674 == null)))
{return h__2236__auto____17674;
} else
{var h__2236__auto____17675 = cljs.core.hash_coll.call(null,coll);
this__17673.__hash = h__2236__auto____17675;
return h__2236__auto____17675;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__17676 = this;
if((this__17676.count === 1))
{return null;
} else
{return this__17676.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17677 = this;
return (new cljs.core.List(this__17677.meta,o,coll,(this__17677.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__17678 = this;
var this__17679 = this;
return cljs.core.pr_str.call(null,this__17679);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17680 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17681 = this;
return this__17681.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__17682 = this;
return this__17682.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__17683 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17684 = this;
return this__17684.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17685 = this;
if((this__17685.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__17685.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17686 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17687 = this;
return (new cljs.core.List(meta,this__17687.first,this__17687.rest,this__17687.count,this__17687.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17688 = this;
return this__17688.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17689 = this;
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
var this__17690 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__17691 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17692 = this;
return (new cljs.core.List(this__17692.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__17693 = this;
var this__17694 = this;
return cljs.core.pr_str.call(null,this__17694);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17695 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17696 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__17697 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__17698 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17699 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17700 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17701 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17702 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17703 = this;
return this__17703.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17704 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__17708__17709 = coll;
if(G__17708__17709)
{if((function (){var or__3824__auto____17710 = (G__17708__17709.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____17710)
{return or__3824__auto____17710;
} else
{return G__17708__17709.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__17708__17709.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__17708__17709);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__17708__17709);
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
var G__17711__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__17711 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17711__delegate.call(this, x, y, z, items);
};
G__17711.cljs$lang$maxFixedArity = 3;
G__17711.cljs$lang$applyTo = (function (arglist__17712){
var x = cljs.core.first(arglist__17712);
var y = cljs.core.first(cljs.core.next(arglist__17712));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17712)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17712)));
return G__17711__delegate(x, y, z, items);
});
G__17711.cljs$lang$arity$variadic = G__17711__delegate;
return G__17711;
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
var this__17713 = this;
var h__2236__auto____17714 = this__17713.__hash;
if(!((h__2236__auto____17714 == null)))
{return h__2236__auto____17714;
} else
{var h__2236__auto____17715 = cljs.core.hash_coll.call(null,coll);
this__17713.__hash = h__2236__auto____17715;
return h__2236__auto____17715;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__17716 = this;
if((this__17716.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__17716.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17717 = this;
return (new cljs.core.Cons(null,o,coll,this__17717.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__17718 = this;
var this__17719 = this;
return cljs.core.pr_str.call(null,this__17719);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17720 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17721 = this;
return this__17721.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17722 = this;
if((this__17722.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__17722.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17723 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17724 = this;
return (new cljs.core.Cons(meta,this__17724.first,this__17724.rest,this__17724.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17725 = this;
return this__17725.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17726 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__17726.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____17731 = (coll == null);
if(or__3824__auto____17731)
{return or__3824__auto____17731;
} else
{var G__17732__17733 = coll;
if(G__17732__17733)
{if((function (){var or__3824__auto____17734 = (G__17732__17733.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____17734)
{return or__3824__auto____17734;
} else
{return G__17732__17733.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__17732__17733.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17732__17733);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17732__17733);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__17738__17739 = x;
if(G__17738__17739)
{if((function (){var or__3824__auto____17740 = (G__17738__17739.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____17740)
{return or__3824__auto____17740;
} else
{return G__17738__17739.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__17738__17739.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__17738__17739);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__17738__17739);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__17741 = null;
var G__17741__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__17741__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__17741 = function(string,f,start){
switch(arguments.length){
case 2:
return G__17741__2.call(this,string,f);
case 3:
return G__17741__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17741;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__17742 = null;
var G__17742__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__17742__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__17742 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__17742__2.call(this,string,k);
case 3:
return G__17742__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17742;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__17743 = null;
var G__17743__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__17743__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__17743 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__17743__2.call(this,string,n);
case 3:
return G__17743__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17743;
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
cljs.core.Keyword.prototype.call = (function (this_sym17746,coll){
var this__17747 = this;
var this_sym17746__17748 = this;
var ___17749 = this_sym17746__17748;
if((coll == null))
{return null;
} else
{var strobj__17750 = coll.strobj;
if((strobj__17750 == null))
{return cljs.core._lookup.call(null,coll,this__17747.k,null);
} else
{return (strobj__17750[this__17747.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym17744,args17745){
var this__17751 = this;
return this_sym17744.call.apply(this_sym17744,[this_sym17744].concat(args17745.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__17760 = null;
var G__17760__2 = (function (this_sym17754,coll){
var this_sym17754__17756 = this;
var this__17757 = this_sym17754__17756;
return cljs.core._lookup.call(null,coll,this__17757.toString(),null);
});
var G__17760__3 = (function (this_sym17755,coll,not_found){
var this_sym17755__17758 = this;
var this__17759 = this_sym17755__17758;
return cljs.core._lookup.call(null,coll,this__17759.toString(),not_found);
});
G__17760 = function(this_sym17755,coll,not_found){
switch(arguments.length){
case 2:
return G__17760__2.call(this,this_sym17755,coll);
case 3:
return G__17760__3.call(this,this_sym17755,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17760;
})()
;
String.prototype.apply = (function (this_sym17752,args17753){
return this_sym17752.call.apply(this_sym17752,[this_sym17752].concat(args17753.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__17762 = lazy_seq.x;
if(lazy_seq.realized)
{return x__17762;
} else
{lazy_seq.x = x__17762.call(null);
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
var this__17763 = this;
var h__2236__auto____17764 = this__17763.__hash;
if(!((h__2236__auto____17764 == null)))
{return h__2236__auto____17764;
} else
{var h__2236__auto____17765 = cljs.core.hash_coll.call(null,coll);
this__17763.__hash = h__2236__auto____17765;
return h__2236__auto____17765;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__17766 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17767 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__17768 = this;
var this__17769 = this;
return cljs.core.pr_str.call(null,this__17769);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17770 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17771 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17772 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17773 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17774 = this;
return (new cljs.core.LazySeq(meta,this__17774.realized,this__17774.x,this__17774.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17775 = this;
return this__17775.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17776 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__17776.meta);
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
var this__17777 = this;
return this__17777.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__17778 = this;
var ___17779 = this;
(this__17778.buf[this__17778.end] = o);
return this__17778.end = (this__17778.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__17780 = this;
var ___17781 = this;
var ret__17782 = (new cljs.core.ArrayChunk(this__17780.buf,0,this__17780.end));
this__17780.buf = null;
return ret__17782;
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
var this__17783 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__17783.arr[this__17783.off]),(this__17783.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__17784 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__17784.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__17785 = this;
if((this__17785.off === this__17785.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__17785.arr,(this__17785.off + 1),this__17785.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__17786 = this;
return (this__17786.arr[(this__17786.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__17787 = this;
if((function (){var and__3822__auto____17788 = (i >= 0);
if(and__3822__auto____17788)
{return (i < (this__17787.end - this__17787.off));
} else
{return and__3822__auto____17788;
}
})())
{return (this__17787.arr[(this__17787.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__17789 = this;
return (this__17789.end - this__17789.off);
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
var this__17790 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17791 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17792 = this;
return cljs.core._nth.call(null,this__17792.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17793 = this;
if((cljs.core._count.call(null,this__17793.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__17793.chunk),this__17793.more,this__17793.meta));
} else
{if((this__17793.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__17793.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__17794 = this;
if((this__17794.more == null))
{return null;
} else
{return this__17794.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17795 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__17796 = this;
return (new cljs.core.ChunkedCons(this__17796.chunk,this__17796.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17797 = this;
return this__17797.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__17798 = this;
return this__17798.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__17799 = this;
if((this__17799.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__17799.more;
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
if((function (){var G__17803__17804 = s;
if(G__17803__17804)
{if(cljs.core.truth_((function (){var or__3824__auto____17805 = null;
if(cljs.core.truth_(or__3824__auto____17805))
{return or__3824__auto____17805;
} else
{return G__17803__17804.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__17803__17804.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__17803__17804);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__17803__17804);
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
var ary__17808 = [];
var s__17809 = s;
while(true){
if(cljs.core.seq.call(null,s__17809))
{ary__17808.push(cljs.core.first.call(null,s__17809));
{
var G__17810 = cljs.core.next.call(null,s__17809);
s__17809 = G__17810;
continue;
}
} else
{return ary__17808;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__17814 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__17815 = 0;
var xs__17816 = cljs.core.seq.call(null,coll);
while(true){
if(xs__17816)
{(ret__17814[i__17815] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__17816)));
{
var G__17817 = (i__17815 + 1);
var G__17818 = cljs.core.next.call(null,xs__17816);
i__17815 = G__17817;
xs__17816 = G__17818;
continue;
}
} else
{}
break;
}
return ret__17814;
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
var a__17826 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__17827 = cljs.core.seq.call(null,init_val_or_seq);
var i__17828 = 0;
var s__17829 = s__17827;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____17830 = s__17829;
if(and__3822__auto____17830)
{return (i__17828 < size);
} else
{return and__3822__auto____17830;
}
})()))
{(a__17826[i__17828] = cljs.core.first.call(null,s__17829));
{
var G__17833 = (i__17828 + 1);
var G__17834 = cljs.core.next.call(null,s__17829);
i__17828 = G__17833;
s__17829 = G__17834;
continue;
}
} else
{return a__17826;
}
break;
}
} else
{var n__2575__auto____17831 = size;
var i__17832 = 0;
while(true){
if((i__17832 < n__2575__auto____17831))
{(a__17826[i__17832] = init_val_or_seq);
{
var G__17835 = (i__17832 + 1);
i__17832 = G__17835;
continue;
}
} else
{}
break;
}
return a__17826;
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
var a__17843 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__17844 = cljs.core.seq.call(null,init_val_or_seq);
var i__17845 = 0;
var s__17846 = s__17844;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____17847 = s__17846;
if(and__3822__auto____17847)
{return (i__17845 < size);
} else
{return and__3822__auto____17847;
}
})()))
{(a__17843[i__17845] = cljs.core.first.call(null,s__17846));
{
var G__17850 = (i__17845 + 1);
var G__17851 = cljs.core.next.call(null,s__17846);
i__17845 = G__17850;
s__17846 = G__17851;
continue;
}
} else
{return a__17843;
}
break;
}
} else
{var n__2575__auto____17848 = size;
var i__17849 = 0;
while(true){
if((i__17849 < n__2575__auto____17848))
{(a__17843[i__17849] = init_val_or_seq);
{
var G__17852 = (i__17849 + 1);
i__17849 = G__17852;
continue;
}
} else
{}
break;
}
return a__17843;
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
var a__17860 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__17861 = cljs.core.seq.call(null,init_val_or_seq);
var i__17862 = 0;
var s__17863 = s__17861;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____17864 = s__17863;
if(and__3822__auto____17864)
{return (i__17862 < size);
} else
{return and__3822__auto____17864;
}
})()))
{(a__17860[i__17862] = cljs.core.first.call(null,s__17863));
{
var G__17867 = (i__17862 + 1);
var G__17868 = cljs.core.next.call(null,s__17863);
i__17862 = G__17867;
s__17863 = G__17868;
continue;
}
} else
{return a__17860;
}
break;
}
} else
{var n__2575__auto____17865 = size;
var i__17866 = 0;
while(true){
if((i__17866 < n__2575__auto____17865))
{(a__17860[i__17866] = init_val_or_seq);
{
var G__17869 = (i__17866 + 1);
i__17866 = G__17869;
continue;
}
} else
{}
break;
}
return a__17860;
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
{var s__17874 = s;
var i__17875 = n;
var sum__17876 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____17877 = (i__17875 > 0);
if(and__3822__auto____17877)
{return cljs.core.seq.call(null,s__17874);
} else
{return and__3822__auto____17877;
}
})()))
{{
var G__17878 = cljs.core.next.call(null,s__17874);
var G__17879 = (i__17875 - 1);
var G__17880 = (sum__17876 + 1);
s__17874 = G__17878;
i__17875 = G__17879;
sum__17876 = G__17880;
continue;
}
} else
{return sum__17876;
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
var s__17885 = cljs.core.seq.call(null,x);
if(s__17885)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__17885))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__17885),concat.call(null,cljs.core.chunk_rest.call(null,s__17885),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__17885),concat.call(null,cljs.core.rest.call(null,s__17885),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__17889__delegate = function (x,y,zs){
var cat__17888 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__17887 = cljs.core.seq.call(null,xys);
if(xys__17887)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__17887))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__17887),cat.call(null,cljs.core.chunk_rest.call(null,xys__17887),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__17887),cat.call(null,cljs.core.rest.call(null,xys__17887),zs));
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
return cat__17888.call(null,concat.call(null,x,y),zs);
};
var G__17889 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17889__delegate.call(this, x, y, zs);
};
G__17889.cljs$lang$maxFixedArity = 2;
G__17889.cljs$lang$applyTo = (function (arglist__17890){
var x = cljs.core.first(arglist__17890);
var y = cljs.core.first(cljs.core.next(arglist__17890));
var zs = cljs.core.rest(cljs.core.next(arglist__17890));
return G__17889__delegate(x, y, zs);
});
G__17889.cljs$lang$arity$variadic = G__17889__delegate;
return G__17889;
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
var G__17891__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__17891 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__17891__delegate.call(this, a, b, c, d, more);
};
G__17891.cljs$lang$maxFixedArity = 4;
G__17891.cljs$lang$applyTo = (function (arglist__17892){
var a = cljs.core.first(arglist__17892);
var b = cljs.core.first(cljs.core.next(arglist__17892));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17892)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17892))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17892))));
return G__17891__delegate(a, b, c, d, more);
});
G__17891.cljs$lang$arity$variadic = G__17891__delegate;
return G__17891;
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
var args__17934 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__17935 = cljs.core._first.call(null,args__17934);
var args__17936 = cljs.core._rest.call(null,args__17934);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__17935);
} else
{return f.call(null,a__17935);
}
} else
{var b__17937 = cljs.core._first.call(null,args__17936);
var args__17938 = cljs.core._rest.call(null,args__17936);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__17935,b__17937);
} else
{return f.call(null,a__17935,b__17937);
}
} else
{var c__17939 = cljs.core._first.call(null,args__17938);
var args__17940 = cljs.core._rest.call(null,args__17938);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__17935,b__17937,c__17939);
} else
{return f.call(null,a__17935,b__17937,c__17939);
}
} else
{var d__17941 = cljs.core._first.call(null,args__17940);
var args__17942 = cljs.core._rest.call(null,args__17940);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__17935,b__17937,c__17939,d__17941);
} else
{return f.call(null,a__17935,b__17937,c__17939,d__17941);
}
} else
{var e__17943 = cljs.core._first.call(null,args__17942);
var args__17944 = cljs.core._rest.call(null,args__17942);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__17935,b__17937,c__17939,d__17941,e__17943);
} else
{return f.call(null,a__17935,b__17937,c__17939,d__17941,e__17943);
}
} else
{var f__17945 = cljs.core._first.call(null,args__17944);
var args__17946 = cljs.core._rest.call(null,args__17944);
if((argc === 6))
{if(f__17945.cljs$lang$arity$6)
{return f__17945.cljs$lang$arity$6(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945);
}
} else
{var g__17947 = cljs.core._first.call(null,args__17946);
var args__17948 = cljs.core._rest.call(null,args__17946);
if((argc === 7))
{if(f__17945.cljs$lang$arity$7)
{return f__17945.cljs$lang$arity$7(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947);
}
} else
{var h__17949 = cljs.core._first.call(null,args__17948);
var args__17950 = cljs.core._rest.call(null,args__17948);
if((argc === 8))
{if(f__17945.cljs$lang$arity$8)
{return f__17945.cljs$lang$arity$8(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949);
}
} else
{var i__17951 = cljs.core._first.call(null,args__17950);
var args__17952 = cljs.core._rest.call(null,args__17950);
if((argc === 9))
{if(f__17945.cljs$lang$arity$9)
{return f__17945.cljs$lang$arity$9(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951);
}
} else
{var j__17953 = cljs.core._first.call(null,args__17952);
var args__17954 = cljs.core._rest.call(null,args__17952);
if((argc === 10))
{if(f__17945.cljs$lang$arity$10)
{return f__17945.cljs$lang$arity$10(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953);
}
} else
{var k__17955 = cljs.core._first.call(null,args__17954);
var args__17956 = cljs.core._rest.call(null,args__17954);
if((argc === 11))
{if(f__17945.cljs$lang$arity$11)
{return f__17945.cljs$lang$arity$11(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955);
}
} else
{var l__17957 = cljs.core._first.call(null,args__17956);
var args__17958 = cljs.core._rest.call(null,args__17956);
if((argc === 12))
{if(f__17945.cljs$lang$arity$12)
{return f__17945.cljs$lang$arity$12(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957);
}
} else
{var m__17959 = cljs.core._first.call(null,args__17958);
var args__17960 = cljs.core._rest.call(null,args__17958);
if((argc === 13))
{if(f__17945.cljs$lang$arity$13)
{return f__17945.cljs$lang$arity$13(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959);
}
} else
{var n__17961 = cljs.core._first.call(null,args__17960);
var args__17962 = cljs.core._rest.call(null,args__17960);
if((argc === 14))
{if(f__17945.cljs$lang$arity$14)
{return f__17945.cljs$lang$arity$14(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961);
}
} else
{var o__17963 = cljs.core._first.call(null,args__17962);
var args__17964 = cljs.core._rest.call(null,args__17962);
if((argc === 15))
{if(f__17945.cljs$lang$arity$15)
{return f__17945.cljs$lang$arity$15(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961,o__17963);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961,o__17963);
}
} else
{var p__17965 = cljs.core._first.call(null,args__17964);
var args__17966 = cljs.core._rest.call(null,args__17964);
if((argc === 16))
{if(f__17945.cljs$lang$arity$16)
{return f__17945.cljs$lang$arity$16(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961,o__17963,p__17965);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961,o__17963,p__17965);
}
} else
{var q__17967 = cljs.core._first.call(null,args__17966);
var args__17968 = cljs.core._rest.call(null,args__17966);
if((argc === 17))
{if(f__17945.cljs$lang$arity$17)
{return f__17945.cljs$lang$arity$17(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961,o__17963,p__17965,q__17967);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961,o__17963,p__17965,q__17967);
}
} else
{var r__17969 = cljs.core._first.call(null,args__17968);
var args__17970 = cljs.core._rest.call(null,args__17968);
if((argc === 18))
{if(f__17945.cljs$lang$arity$18)
{return f__17945.cljs$lang$arity$18(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961,o__17963,p__17965,q__17967,r__17969);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961,o__17963,p__17965,q__17967,r__17969);
}
} else
{var s__17971 = cljs.core._first.call(null,args__17970);
var args__17972 = cljs.core._rest.call(null,args__17970);
if((argc === 19))
{if(f__17945.cljs$lang$arity$19)
{return f__17945.cljs$lang$arity$19(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961,o__17963,p__17965,q__17967,r__17969,s__17971);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961,o__17963,p__17965,q__17967,r__17969,s__17971);
}
} else
{var t__17973 = cljs.core._first.call(null,args__17972);
var args__17974 = cljs.core._rest.call(null,args__17972);
if((argc === 20))
{if(f__17945.cljs$lang$arity$20)
{return f__17945.cljs$lang$arity$20(a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961,o__17963,p__17965,q__17967,r__17969,s__17971,t__17973);
} else
{return f__17945.call(null,a__17935,b__17937,c__17939,d__17941,e__17943,f__17945,g__17947,h__17949,i__17951,j__17953,k__17955,l__17957,m__17959,n__17961,o__17963,p__17965,q__17967,r__17969,s__17971,t__17973);
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
var fixed_arity__17989 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__17990 = cljs.core.bounded_count.call(null,args,(fixed_arity__17989 + 1));
if((bc__17990 <= fixed_arity__17989))
{return cljs.core.apply_to.call(null,f,bc__17990,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__17991 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__17992 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__17993 = cljs.core.bounded_count.call(null,arglist__17991,(fixed_arity__17992 + 1));
if((bc__17993 <= fixed_arity__17992))
{return cljs.core.apply_to.call(null,f,bc__17993,arglist__17991);
} else
{return f.cljs$lang$applyTo(arglist__17991);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__17991));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__17994 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__17995 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__17996 = cljs.core.bounded_count.call(null,arglist__17994,(fixed_arity__17995 + 1));
if((bc__17996 <= fixed_arity__17995))
{return cljs.core.apply_to.call(null,f,bc__17996,arglist__17994);
} else
{return f.cljs$lang$applyTo(arglist__17994);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__17994));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__17997 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__17998 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__17999 = cljs.core.bounded_count.call(null,arglist__17997,(fixed_arity__17998 + 1));
if((bc__17999 <= fixed_arity__17998))
{return cljs.core.apply_to.call(null,f,bc__17999,arglist__17997);
} else
{return f.cljs$lang$applyTo(arglist__17997);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__17997));
}
});
var apply__6 = (function() { 
var G__18003__delegate = function (f,a,b,c,d,args){
var arglist__18000 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__18001 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__18002 = cljs.core.bounded_count.call(null,arglist__18000,(fixed_arity__18001 + 1));
if((bc__18002 <= fixed_arity__18001))
{return cljs.core.apply_to.call(null,f,bc__18002,arglist__18000);
} else
{return f.cljs$lang$applyTo(arglist__18000);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__18000));
}
};
var G__18003 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__18003__delegate.call(this, f, a, b, c, d, args);
};
G__18003.cljs$lang$maxFixedArity = 5;
G__18003.cljs$lang$applyTo = (function (arglist__18004){
var f = cljs.core.first(arglist__18004);
var a = cljs.core.first(cljs.core.next(arglist__18004));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18004)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18004))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18004)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18004)))));
return G__18003__delegate(f, a, b, c, d, args);
});
G__18003.cljs$lang$arity$variadic = G__18003__delegate;
return G__18003;
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
vary_meta.cljs$lang$applyTo = (function (arglist__18005){
var obj = cljs.core.first(arglist__18005);
var f = cljs.core.first(cljs.core.next(arglist__18005));
var args = cljs.core.rest(cljs.core.next(arglist__18005));
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
var G__18006__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__18006 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18006__delegate.call(this, x, y, more);
};
G__18006.cljs$lang$maxFixedArity = 2;
G__18006.cljs$lang$applyTo = (function (arglist__18007){
var x = cljs.core.first(arglist__18007);
var y = cljs.core.first(cljs.core.next(arglist__18007));
var more = cljs.core.rest(cljs.core.next(arglist__18007));
return G__18006__delegate(x, y, more);
});
G__18006.cljs$lang$arity$variadic = G__18006__delegate;
return G__18006;
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
var G__18008 = pred;
var G__18009 = cljs.core.next.call(null,coll);
pred = G__18008;
coll = G__18009;
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
{var or__3824__auto____18011 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____18011))
{return or__3824__auto____18011;
} else
{{
var G__18012 = pred;
var G__18013 = cljs.core.next.call(null,coll);
pred = G__18012;
coll = G__18013;
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
var G__18014 = null;
var G__18014__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__18014__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__18014__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__18014__3 = (function() { 
var G__18015__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__18015 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18015__delegate.call(this, x, y, zs);
};
G__18015.cljs$lang$maxFixedArity = 2;
G__18015.cljs$lang$applyTo = (function (arglist__18016){
var x = cljs.core.first(arglist__18016);
var y = cljs.core.first(cljs.core.next(arglist__18016));
var zs = cljs.core.rest(cljs.core.next(arglist__18016));
return G__18015__delegate(x, y, zs);
});
G__18015.cljs$lang$arity$variadic = G__18015__delegate;
return G__18015;
})()
;
G__18014 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__18014__0.call(this);
case 1:
return G__18014__1.call(this,x);
case 2:
return G__18014__2.call(this,x,y);
default:
return G__18014__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__18014.cljs$lang$maxFixedArity = 2;
G__18014.cljs$lang$applyTo = G__18014__3.cljs$lang$applyTo;
return G__18014;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__18017__delegate = function (args){
return x;
};
var G__18017 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18017__delegate.call(this, args);
};
G__18017.cljs$lang$maxFixedArity = 0;
G__18017.cljs$lang$applyTo = (function (arglist__18018){
var args = cljs.core.seq(arglist__18018);;
return G__18017__delegate(args);
});
G__18017.cljs$lang$arity$variadic = G__18017__delegate;
return G__18017;
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
var G__18025 = null;
var G__18025__0 = (function (){
return f.call(null,g.call(null));
});
var G__18025__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__18025__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__18025__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__18025__4 = (function() { 
var G__18026__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__18026 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18026__delegate.call(this, x, y, z, args);
};
G__18026.cljs$lang$maxFixedArity = 3;
G__18026.cljs$lang$applyTo = (function (arglist__18027){
var x = cljs.core.first(arglist__18027);
var y = cljs.core.first(cljs.core.next(arglist__18027));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18027)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18027)));
return G__18026__delegate(x, y, z, args);
});
G__18026.cljs$lang$arity$variadic = G__18026__delegate;
return G__18026;
})()
;
G__18025 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__18025__0.call(this);
case 1:
return G__18025__1.call(this,x);
case 2:
return G__18025__2.call(this,x,y);
case 3:
return G__18025__3.call(this,x,y,z);
default:
return G__18025__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__18025.cljs$lang$maxFixedArity = 3;
G__18025.cljs$lang$applyTo = G__18025__4.cljs$lang$applyTo;
return G__18025;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__18028 = null;
var G__18028__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__18028__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__18028__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__18028__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__18028__4 = (function() { 
var G__18029__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__18029 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18029__delegate.call(this, x, y, z, args);
};
G__18029.cljs$lang$maxFixedArity = 3;
G__18029.cljs$lang$applyTo = (function (arglist__18030){
var x = cljs.core.first(arglist__18030);
var y = cljs.core.first(cljs.core.next(arglist__18030));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18030)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18030)));
return G__18029__delegate(x, y, z, args);
});
G__18029.cljs$lang$arity$variadic = G__18029__delegate;
return G__18029;
})()
;
G__18028 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__18028__0.call(this);
case 1:
return G__18028__1.call(this,x);
case 2:
return G__18028__2.call(this,x,y);
case 3:
return G__18028__3.call(this,x,y,z);
default:
return G__18028__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__18028.cljs$lang$maxFixedArity = 3;
G__18028.cljs$lang$applyTo = G__18028__4.cljs$lang$applyTo;
return G__18028;
})()
});
var comp__4 = (function() { 
var G__18031__delegate = function (f1,f2,f3,fs){
var fs__18022 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__18032__delegate = function (args){
var ret__18023 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__18022),args);
var fs__18024 = cljs.core.next.call(null,fs__18022);
while(true){
if(fs__18024)
{{
var G__18033 = cljs.core.first.call(null,fs__18024).call(null,ret__18023);
var G__18034 = cljs.core.next.call(null,fs__18024);
ret__18023 = G__18033;
fs__18024 = G__18034;
continue;
}
} else
{return ret__18023;
}
break;
}
};
var G__18032 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18032__delegate.call(this, args);
};
G__18032.cljs$lang$maxFixedArity = 0;
G__18032.cljs$lang$applyTo = (function (arglist__18035){
var args = cljs.core.seq(arglist__18035);;
return G__18032__delegate(args);
});
G__18032.cljs$lang$arity$variadic = G__18032__delegate;
return G__18032;
})()
;
};
var G__18031 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18031__delegate.call(this, f1, f2, f3, fs);
};
G__18031.cljs$lang$maxFixedArity = 3;
G__18031.cljs$lang$applyTo = (function (arglist__18036){
var f1 = cljs.core.first(arglist__18036);
var f2 = cljs.core.first(cljs.core.next(arglist__18036));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18036)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18036)));
return G__18031__delegate(f1, f2, f3, fs);
});
G__18031.cljs$lang$arity$variadic = G__18031__delegate;
return G__18031;
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
var G__18037__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__18037 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18037__delegate.call(this, args);
};
G__18037.cljs$lang$maxFixedArity = 0;
G__18037.cljs$lang$applyTo = (function (arglist__18038){
var args = cljs.core.seq(arglist__18038);;
return G__18037__delegate(args);
});
G__18037.cljs$lang$arity$variadic = G__18037__delegate;
return G__18037;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__18039__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__18039 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18039__delegate.call(this, args);
};
G__18039.cljs$lang$maxFixedArity = 0;
G__18039.cljs$lang$applyTo = (function (arglist__18040){
var args = cljs.core.seq(arglist__18040);;
return G__18039__delegate(args);
});
G__18039.cljs$lang$arity$variadic = G__18039__delegate;
return G__18039;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__18041__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__18041 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18041__delegate.call(this, args);
};
G__18041.cljs$lang$maxFixedArity = 0;
G__18041.cljs$lang$applyTo = (function (arglist__18042){
var args = cljs.core.seq(arglist__18042);;
return G__18041__delegate(args);
});
G__18041.cljs$lang$arity$variadic = G__18041__delegate;
return G__18041;
})()
;
});
var partial__5 = (function() { 
var G__18043__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__18044__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__18044 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18044__delegate.call(this, args);
};
G__18044.cljs$lang$maxFixedArity = 0;
G__18044.cljs$lang$applyTo = (function (arglist__18045){
var args = cljs.core.seq(arglist__18045);;
return G__18044__delegate(args);
});
G__18044.cljs$lang$arity$variadic = G__18044__delegate;
return G__18044;
})()
;
};
var G__18043 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__18043__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__18043.cljs$lang$maxFixedArity = 4;
G__18043.cljs$lang$applyTo = (function (arglist__18046){
var f = cljs.core.first(arglist__18046);
var arg1 = cljs.core.first(cljs.core.next(arglist__18046));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18046)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18046))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18046))));
return G__18043__delegate(f, arg1, arg2, arg3, more);
});
G__18043.cljs$lang$arity$variadic = G__18043__delegate;
return G__18043;
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
var G__18047 = null;
var G__18047__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__18047__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__18047__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__18047__4 = (function() { 
var G__18048__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__18048 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18048__delegate.call(this, a, b, c, ds);
};
G__18048.cljs$lang$maxFixedArity = 3;
G__18048.cljs$lang$applyTo = (function (arglist__18049){
var a = cljs.core.first(arglist__18049);
var b = cljs.core.first(cljs.core.next(arglist__18049));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18049)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18049)));
return G__18048__delegate(a, b, c, ds);
});
G__18048.cljs$lang$arity$variadic = G__18048__delegate;
return G__18048;
})()
;
G__18047 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__18047__1.call(this,a);
case 2:
return G__18047__2.call(this,a,b);
case 3:
return G__18047__3.call(this,a,b,c);
default:
return G__18047__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__18047.cljs$lang$maxFixedArity = 3;
G__18047.cljs$lang$applyTo = G__18047__4.cljs$lang$applyTo;
return G__18047;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__18050 = null;
var G__18050__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__18050__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__18050__4 = (function() { 
var G__18051__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__18051 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18051__delegate.call(this, a, b, c, ds);
};
G__18051.cljs$lang$maxFixedArity = 3;
G__18051.cljs$lang$applyTo = (function (arglist__18052){
var a = cljs.core.first(arglist__18052);
var b = cljs.core.first(cljs.core.next(arglist__18052));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18052)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18052)));
return G__18051__delegate(a, b, c, ds);
});
G__18051.cljs$lang$arity$variadic = G__18051__delegate;
return G__18051;
})()
;
G__18050 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__18050__2.call(this,a,b);
case 3:
return G__18050__3.call(this,a,b,c);
default:
return G__18050__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__18050.cljs$lang$maxFixedArity = 3;
G__18050.cljs$lang$applyTo = G__18050__4.cljs$lang$applyTo;
return G__18050;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__18053 = null;
var G__18053__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__18053__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__18053__4 = (function() { 
var G__18054__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__18054 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18054__delegate.call(this, a, b, c, ds);
};
G__18054.cljs$lang$maxFixedArity = 3;
G__18054.cljs$lang$applyTo = (function (arglist__18055){
var a = cljs.core.first(arglist__18055);
var b = cljs.core.first(cljs.core.next(arglist__18055));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18055)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18055)));
return G__18054__delegate(a, b, c, ds);
});
G__18054.cljs$lang$arity$variadic = G__18054__delegate;
return G__18054;
})()
;
G__18053 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__18053__2.call(this,a,b);
case 3:
return G__18053__3.call(this,a,b,c);
default:
return G__18053__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__18053.cljs$lang$maxFixedArity = 3;
G__18053.cljs$lang$applyTo = G__18053__4.cljs$lang$applyTo;
return G__18053;
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
var mapi__18071 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____18079 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18079)
{var s__18080 = temp__3974__auto____18079;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18080))
{var c__18081 = cljs.core.chunk_first.call(null,s__18080);
var size__18082 = cljs.core.count.call(null,c__18081);
var b__18083 = cljs.core.chunk_buffer.call(null,size__18082);
var n__2575__auto____18084 = size__18082;
var i__18085 = 0;
while(true){
if((i__18085 < n__2575__auto____18084))
{cljs.core.chunk_append.call(null,b__18083,f.call(null,(idx + i__18085),cljs.core._nth.call(null,c__18081,i__18085)));
{
var G__18086 = (i__18085 + 1);
i__18085 = G__18086;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18083),mapi.call(null,(idx + size__18082),cljs.core.chunk_rest.call(null,s__18080)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__18080)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__18080)));
}
} else
{return null;
}
}),null));
});
return mapi__18071.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____18096 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18096)
{var s__18097 = temp__3974__auto____18096;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18097))
{var c__18098 = cljs.core.chunk_first.call(null,s__18097);
var size__18099 = cljs.core.count.call(null,c__18098);
var b__18100 = cljs.core.chunk_buffer.call(null,size__18099);
var n__2575__auto____18101 = size__18099;
var i__18102 = 0;
while(true){
if((i__18102 < n__2575__auto____18101))
{var x__18103 = f.call(null,cljs.core._nth.call(null,c__18098,i__18102));
if((x__18103 == null))
{} else
{cljs.core.chunk_append.call(null,b__18100,x__18103);
}
{
var G__18105 = (i__18102 + 1);
i__18102 = G__18105;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18100),keep.call(null,f,cljs.core.chunk_rest.call(null,s__18097)));
} else
{var x__18104 = f.call(null,cljs.core.first.call(null,s__18097));
if((x__18104 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__18097));
} else
{return cljs.core.cons.call(null,x__18104,keep.call(null,f,cljs.core.rest.call(null,s__18097)));
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
var keepi__18131 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____18141 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18141)
{var s__18142 = temp__3974__auto____18141;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18142))
{var c__18143 = cljs.core.chunk_first.call(null,s__18142);
var size__18144 = cljs.core.count.call(null,c__18143);
var b__18145 = cljs.core.chunk_buffer.call(null,size__18144);
var n__2575__auto____18146 = size__18144;
var i__18147 = 0;
while(true){
if((i__18147 < n__2575__auto____18146))
{var x__18148 = f.call(null,(idx + i__18147),cljs.core._nth.call(null,c__18143,i__18147));
if((x__18148 == null))
{} else
{cljs.core.chunk_append.call(null,b__18145,x__18148);
}
{
var G__18150 = (i__18147 + 1);
i__18147 = G__18150;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18145),keepi.call(null,(idx + size__18144),cljs.core.chunk_rest.call(null,s__18142)));
} else
{var x__18149 = f.call(null,idx,cljs.core.first.call(null,s__18142));
if((x__18149 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__18142));
} else
{return cljs.core.cons.call(null,x__18149,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__18142)));
}
}
} else
{return null;
}
}),null));
});
return keepi__18131.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18236 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____18236))
{return p.call(null,y);
} else
{return and__3822__auto____18236;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18237 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____18237))
{var and__3822__auto____18238 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____18238))
{return p.call(null,z);
} else
{return and__3822__auto____18238;
}
} else
{return and__3822__auto____18237;
}
})());
});
var ep1__4 = (function() { 
var G__18307__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18239 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____18239))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____18239;
}
})());
};
var G__18307 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18307__delegate.call(this, x, y, z, args);
};
G__18307.cljs$lang$maxFixedArity = 3;
G__18307.cljs$lang$applyTo = (function (arglist__18308){
var x = cljs.core.first(arglist__18308);
var y = cljs.core.first(cljs.core.next(arglist__18308));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18308)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18308)));
return G__18307__delegate(x, y, z, args);
});
G__18307.cljs$lang$arity$variadic = G__18307__delegate;
return G__18307;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18251 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____18251))
{return p2.call(null,x);
} else
{return and__3822__auto____18251;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18252 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____18252))
{var and__3822__auto____18253 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____18253))
{var and__3822__auto____18254 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____18254))
{return p2.call(null,y);
} else
{return and__3822__auto____18254;
}
} else
{return and__3822__auto____18253;
}
} else
{return and__3822__auto____18252;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18255 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____18255))
{var and__3822__auto____18256 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____18256))
{var and__3822__auto____18257 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____18257))
{var and__3822__auto____18258 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____18258))
{var and__3822__auto____18259 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____18259))
{return p2.call(null,z);
} else
{return and__3822__auto____18259;
}
} else
{return and__3822__auto____18258;
}
} else
{return and__3822__auto____18257;
}
} else
{return and__3822__auto____18256;
}
} else
{return and__3822__auto____18255;
}
})());
});
var ep2__4 = (function() { 
var G__18309__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18260 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____18260))
{return cljs.core.every_QMARK_.call(null,(function (p1__18106_SHARP_){
var and__3822__auto____18261 = p1.call(null,p1__18106_SHARP_);
if(cljs.core.truth_(and__3822__auto____18261))
{return p2.call(null,p1__18106_SHARP_);
} else
{return and__3822__auto____18261;
}
}),args);
} else
{return and__3822__auto____18260;
}
})());
};
var G__18309 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18309__delegate.call(this, x, y, z, args);
};
G__18309.cljs$lang$maxFixedArity = 3;
G__18309.cljs$lang$applyTo = (function (arglist__18310){
var x = cljs.core.first(arglist__18310);
var y = cljs.core.first(cljs.core.next(arglist__18310));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18310)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18310)));
return G__18309__delegate(x, y, z, args);
});
G__18309.cljs$lang$arity$variadic = G__18309__delegate;
return G__18309;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18280 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____18280))
{var and__3822__auto____18281 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____18281))
{return p3.call(null,x);
} else
{return and__3822__auto____18281;
}
} else
{return and__3822__auto____18280;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18282 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____18282))
{var and__3822__auto____18283 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____18283))
{var and__3822__auto____18284 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____18284))
{var and__3822__auto____18285 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____18285))
{var and__3822__auto____18286 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____18286))
{return p3.call(null,y);
} else
{return and__3822__auto____18286;
}
} else
{return and__3822__auto____18285;
}
} else
{return and__3822__auto____18284;
}
} else
{return and__3822__auto____18283;
}
} else
{return and__3822__auto____18282;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18287 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____18287))
{var and__3822__auto____18288 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____18288))
{var and__3822__auto____18289 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____18289))
{var and__3822__auto____18290 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____18290))
{var and__3822__auto____18291 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____18291))
{var and__3822__auto____18292 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____18292))
{var and__3822__auto____18293 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____18293))
{var and__3822__auto____18294 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____18294))
{return p3.call(null,z);
} else
{return and__3822__auto____18294;
}
} else
{return and__3822__auto____18293;
}
} else
{return and__3822__auto____18292;
}
} else
{return and__3822__auto____18291;
}
} else
{return and__3822__auto____18290;
}
} else
{return and__3822__auto____18289;
}
} else
{return and__3822__auto____18288;
}
} else
{return and__3822__auto____18287;
}
})());
});
var ep3__4 = (function() { 
var G__18311__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18295 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____18295))
{return cljs.core.every_QMARK_.call(null,(function (p1__18107_SHARP_){
var and__3822__auto____18296 = p1.call(null,p1__18107_SHARP_);
if(cljs.core.truth_(and__3822__auto____18296))
{var and__3822__auto____18297 = p2.call(null,p1__18107_SHARP_);
if(cljs.core.truth_(and__3822__auto____18297))
{return p3.call(null,p1__18107_SHARP_);
} else
{return and__3822__auto____18297;
}
} else
{return and__3822__auto____18296;
}
}),args);
} else
{return and__3822__auto____18295;
}
})());
};
var G__18311 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18311__delegate.call(this, x, y, z, args);
};
G__18311.cljs$lang$maxFixedArity = 3;
G__18311.cljs$lang$applyTo = (function (arglist__18312){
var x = cljs.core.first(arglist__18312);
var y = cljs.core.first(cljs.core.next(arglist__18312));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18312)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18312)));
return G__18311__delegate(x, y, z, args);
});
G__18311.cljs$lang$arity$variadic = G__18311__delegate;
return G__18311;
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
var G__18313__delegate = function (p1,p2,p3,ps){
var ps__18298 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__18108_SHARP_){
return p1__18108_SHARP_.call(null,x);
}),ps__18298);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__18109_SHARP_){
var and__3822__auto____18303 = p1__18109_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____18303))
{return p1__18109_SHARP_.call(null,y);
} else
{return and__3822__auto____18303;
}
}),ps__18298);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__18110_SHARP_){
var and__3822__auto____18304 = p1__18110_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____18304))
{var and__3822__auto____18305 = p1__18110_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____18305))
{return p1__18110_SHARP_.call(null,z);
} else
{return and__3822__auto____18305;
}
} else
{return and__3822__auto____18304;
}
}),ps__18298);
});
var epn__4 = (function() { 
var G__18314__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18306 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____18306))
{return cljs.core.every_QMARK_.call(null,(function (p1__18111_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__18111_SHARP_,args);
}),ps__18298);
} else
{return and__3822__auto____18306;
}
})());
};
var G__18314 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18314__delegate.call(this, x, y, z, args);
};
G__18314.cljs$lang$maxFixedArity = 3;
G__18314.cljs$lang$applyTo = (function (arglist__18315){
var x = cljs.core.first(arglist__18315);
var y = cljs.core.first(cljs.core.next(arglist__18315));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18315)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18315)));
return G__18314__delegate(x, y, z, args);
});
G__18314.cljs$lang$arity$variadic = G__18314__delegate;
return G__18314;
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
var G__18313 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18313__delegate.call(this, p1, p2, p3, ps);
};
G__18313.cljs$lang$maxFixedArity = 3;
G__18313.cljs$lang$applyTo = (function (arglist__18316){
var p1 = cljs.core.first(arglist__18316);
var p2 = cljs.core.first(cljs.core.next(arglist__18316));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18316)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18316)));
return G__18313__delegate(p1, p2, p3, ps);
});
G__18313.cljs$lang$arity$variadic = G__18313__delegate;
return G__18313;
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
var or__3824__auto____18397 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____18397))
{return or__3824__auto____18397;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____18398 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____18398))
{return or__3824__auto____18398;
} else
{var or__3824__auto____18399 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____18399))
{return or__3824__auto____18399;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__18468__delegate = function (x,y,z,args){
var or__3824__auto____18400 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____18400))
{return or__3824__auto____18400;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__18468 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18468__delegate.call(this, x, y, z, args);
};
G__18468.cljs$lang$maxFixedArity = 3;
G__18468.cljs$lang$applyTo = (function (arglist__18469){
var x = cljs.core.first(arglist__18469);
var y = cljs.core.first(cljs.core.next(arglist__18469));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18469)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18469)));
return G__18468__delegate(x, y, z, args);
});
G__18468.cljs$lang$arity$variadic = G__18468__delegate;
return G__18468;
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
var or__3824__auto____18412 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____18412))
{return or__3824__auto____18412;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____18413 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____18413))
{return or__3824__auto____18413;
} else
{var or__3824__auto____18414 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____18414))
{return or__3824__auto____18414;
} else
{var or__3824__auto____18415 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____18415))
{return or__3824__auto____18415;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____18416 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____18416))
{return or__3824__auto____18416;
} else
{var or__3824__auto____18417 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____18417))
{return or__3824__auto____18417;
} else
{var or__3824__auto____18418 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____18418))
{return or__3824__auto____18418;
} else
{var or__3824__auto____18419 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____18419))
{return or__3824__auto____18419;
} else
{var or__3824__auto____18420 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____18420))
{return or__3824__auto____18420;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__18470__delegate = function (x,y,z,args){
var or__3824__auto____18421 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____18421))
{return or__3824__auto____18421;
} else
{return cljs.core.some.call(null,(function (p1__18151_SHARP_){
var or__3824__auto____18422 = p1.call(null,p1__18151_SHARP_);
if(cljs.core.truth_(or__3824__auto____18422))
{return or__3824__auto____18422;
} else
{return p2.call(null,p1__18151_SHARP_);
}
}),args);
}
};
var G__18470 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18470__delegate.call(this, x, y, z, args);
};
G__18470.cljs$lang$maxFixedArity = 3;
G__18470.cljs$lang$applyTo = (function (arglist__18471){
var x = cljs.core.first(arglist__18471);
var y = cljs.core.first(cljs.core.next(arglist__18471));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18471)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18471)));
return G__18470__delegate(x, y, z, args);
});
G__18470.cljs$lang$arity$variadic = G__18470__delegate;
return G__18470;
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
var or__3824__auto____18441 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____18441))
{return or__3824__auto____18441;
} else
{var or__3824__auto____18442 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____18442))
{return or__3824__auto____18442;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____18443 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____18443))
{return or__3824__auto____18443;
} else
{var or__3824__auto____18444 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____18444))
{return or__3824__auto____18444;
} else
{var or__3824__auto____18445 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____18445))
{return or__3824__auto____18445;
} else
{var or__3824__auto____18446 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____18446))
{return or__3824__auto____18446;
} else
{var or__3824__auto____18447 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____18447))
{return or__3824__auto____18447;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____18448 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____18448))
{return or__3824__auto____18448;
} else
{var or__3824__auto____18449 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____18449))
{return or__3824__auto____18449;
} else
{var or__3824__auto____18450 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____18450))
{return or__3824__auto____18450;
} else
{var or__3824__auto____18451 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____18451))
{return or__3824__auto____18451;
} else
{var or__3824__auto____18452 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____18452))
{return or__3824__auto____18452;
} else
{var or__3824__auto____18453 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____18453))
{return or__3824__auto____18453;
} else
{var or__3824__auto____18454 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____18454))
{return or__3824__auto____18454;
} else
{var or__3824__auto____18455 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____18455))
{return or__3824__auto____18455;
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
var G__18472__delegate = function (x,y,z,args){
var or__3824__auto____18456 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____18456))
{return or__3824__auto____18456;
} else
{return cljs.core.some.call(null,(function (p1__18152_SHARP_){
var or__3824__auto____18457 = p1.call(null,p1__18152_SHARP_);
if(cljs.core.truth_(or__3824__auto____18457))
{return or__3824__auto____18457;
} else
{var or__3824__auto____18458 = p2.call(null,p1__18152_SHARP_);
if(cljs.core.truth_(or__3824__auto____18458))
{return or__3824__auto____18458;
} else
{return p3.call(null,p1__18152_SHARP_);
}
}
}),args);
}
};
var G__18472 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18472__delegate.call(this, x, y, z, args);
};
G__18472.cljs$lang$maxFixedArity = 3;
G__18472.cljs$lang$applyTo = (function (arglist__18473){
var x = cljs.core.first(arglist__18473);
var y = cljs.core.first(cljs.core.next(arglist__18473));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18473)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18473)));
return G__18472__delegate(x, y, z, args);
});
G__18472.cljs$lang$arity$variadic = G__18472__delegate;
return G__18472;
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
var G__18474__delegate = function (p1,p2,p3,ps){
var ps__18459 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__18153_SHARP_){
return p1__18153_SHARP_.call(null,x);
}),ps__18459);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__18154_SHARP_){
var or__3824__auto____18464 = p1__18154_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____18464))
{return or__3824__auto____18464;
} else
{return p1__18154_SHARP_.call(null,y);
}
}),ps__18459);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__18155_SHARP_){
var or__3824__auto____18465 = p1__18155_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____18465))
{return or__3824__auto____18465;
} else
{var or__3824__auto____18466 = p1__18155_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____18466))
{return or__3824__auto____18466;
} else
{return p1__18155_SHARP_.call(null,z);
}
}
}),ps__18459);
});
var spn__4 = (function() { 
var G__18475__delegate = function (x,y,z,args){
var or__3824__auto____18467 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____18467))
{return or__3824__auto____18467;
} else
{return cljs.core.some.call(null,(function (p1__18156_SHARP_){
return cljs.core.some.call(null,p1__18156_SHARP_,args);
}),ps__18459);
}
};
var G__18475 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18475__delegate.call(this, x, y, z, args);
};
G__18475.cljs$lang$maxFixedArity = 3;
G__18475.cljs$lang$applyTo = (function (arglist__18476){
var x = cljs.core.first(arglist__18476);
var y = cljs.core.first(cljs.core.next(arglist__18476));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18476)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18476)));
return G__18475__delegate(x, y, z, args);
});
G__18475.cljs$lang$arity$variadic = G__18475__delegate;
return G__18475;
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
var G__18474 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18474__delegate.call(this, p1, p2, p3, ps);
};
G__18474.cljs$lang$maxFixedArity = 3;
G__18474.cljs$lang$applyTo = (function (arglist__18477){
var p1 = cljs.core.first(arglist__18477);
var p2 = cljs.core.first(cljs.core.next(arglist__18477));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18477)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18477)));
return G__18474__delegate(p1, p2, p3, ps);
});
G__18474.cljs$lang$arity$variadic = G__18474__delegate;
return G__18474;
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
var temp__3974__auto____18496 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18496)
{var s__18497 = temp__3974__auto____18496;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18497))
{var c__18498 = cljs.core.chunk_first.call(null,s__18497);
var size__18499 = cljs.core.count.call(null,c__18498);
var b__18500 = cljs.core.chunk_buffer.call(null,size__18499);
var n__2575__auto____18501 = size__18499;
var i__18502 = 0;
while(true){
if((i__18502 < n__2575__auto____18501))
{cljs.core.chunk_append.call(null,b__18500,f.call(null,cljs.core._nth.call(null,c__18498,i__18502)));
{
var G__18514 = (i__18502 + 1);
i__18502 = G__18514;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18500),map.call(null,f,cljs.core.chunk_rest.call(null,s__18497)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__18497)),map.call(null,f,cljs.core.rest.call(null,s__18497)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__18503 = cljs.core.seq.call(null,c1);
var s2__18504 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____18505 = s1__18503;
if(and__3822__auto____18505)
{return s2__18504;
} else
{return and__3822__auto____18505;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__18503),cljs.core.first.call(null,s2__18504)),map.call(null,f,cljs.core.rest.call(null,s1__18503),cljs.core.rest.call(null,s2__18504)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__18506 = cljs.core.seq.call(null,c1);
var s2__18507 = cljs.core.seq.call(null,c2);
var s3__18508 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____18509 = s1__18506;
if(and__3822__auto____18509)
{var and__3822__auto____18510 = s2__18507;
if(and__3822__auto____18510)
{return s3__18508;
} else
{return and__3822__auto____18510;
}
} else
{return and__3822__auto____18509;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__18506),cljs.core.first.call(null,s2__18507),cljs.core.first.call(null,s3__18508)),map.call(null,f,cljs.core.rest.call(null,s1__18506),cljs.core.rest.call(null,s2__18507),cljs.core.rest.call(null,s3__18508)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__18515__delegate = function (f,c1,c2,c3,colls){
var step__18513 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__18512 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__18512))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__18512),step.call(null,map.call(null,cljs.core.rest,ss__18512)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__18317_SHARP_){
return cljs.core.apply.call(null,f,p1__18317_SHARP_);
}),step__18513.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__18515 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__18515__delegate.call(this, f, c1, c2, c3, colls);
};
G__18515.cljs$lang$maxFixedArity = 4;
G__18515.cljs$lang$applyTo = (function (arglist__18516){
var f = cljs.core.first(arglist__18516);
var c1 = cljs.core.first(cljs.core.next(arglist__18516));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18516)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18516))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18516))));
return G__18515__delegate(f, c1, c2, c3, colls);
});
G__18515.cljs$lang$arity$variadic = G__18515__delegate;
return G__18515;
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
{var temp__3974__auto____18519 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18519)
{var s__18520 = temp__3974__auto____18519;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__18520),take.call(null,(n - 1),cljs.core.rest.call(null,s__18520)));
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
var step__18526 = (function (n,coll){
while(true){
var s__18524 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____18525 = (n > 0);
if(and__3822__auto____18525)
{return s__18524;
} else
{return and__3822__auto____18525;
}
})()))
{{
var G__18527 = (n - 1);
var G__18528 = cljs.core.rest.call(null,s__18524);
n = G__18527;
coll = G__18528;
continue;
}
} else
{return s__18524;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__18526.call(null,n,coll);
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
var s__18531 = cljs.core.seq.call(null,coll);
var lead__18532 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__18532)
{{
var G__18533 = cljs.core.next.call(null,s__18531);
var G__18534 = cljs.core.next.call(null,lead__18532);
s__18531 = G__18533;
lead__18532 = G__18534;
continue;
}
} else
{return s__18531;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__18540 = (function (pred,coll){
while(true){
var s__18538 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____18539 = s__18538;
if(and__3822__auto____18539)
{return pred.call(null,cljs.core.first.call(null,s__18538));
} else
{return and__3822__auto____18539;
}
})()))
{{
var G__18541 = pred;
var G__18542 = cljs.core.rest.call(null,s__18538);
pred = G__18541;
coll = G__18542;
continue;
}
} else
{return s__18538;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__18540.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____18545 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18545)
{var s__18546 = temp__3974__auto____18545;
return cljs.core.concat.call(null,s__18546,cycle.call(null,s__18546));
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
var s1__18551 = cljs.core.seq.call(null,c1);
var s2__18552 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____18553 = s1__18551;
if(and__3822__auto____18553)
{return s2__18552;
} else
{return and__3822__auto____18553;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__18551),cljs.core.cons.call(null,cljs.core.first.call(null,s2__18552),interleave.call(null,cljs.core.rest.call(null,s1__18551),cljs.core.rest.call(null,s2__18552))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__18555__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__18554 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__18554))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__18554),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__18554)));
} else
{return null;
}
}),null));
};
var G__18555 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18555__delegate.call(this, c1, c2, colls);
};
G__18555.cljs$lang$maxFixedArity = 2;
G__18555.cljs$lang$applyTo = (function (arglist__18556){
var c1 = cljs.core.first(arglist__18556);
var c2 = cljs.core.first(cljs.core.next(arglist__18556));
var colls = cljs.core.rest(cljs.core.next(arglist__18556));
return G__18555__delegate(c1, c2, colls);
});
G__18555.cljs$lang$arity$variadic = G__18555__delegate;
return G__18555;
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
var cat__18566 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____18564 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____18564)
{var coll__18565 = temp__3971__auto____18564;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__18565),cat.call(null,cljs.core.rest.call(null,coll__18565),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__18566.call(null,null,colls);
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
var G__18567__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__18567 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18567__delegate.call(this, f, coll, colls);
};
G__18567.cljs$lang$maxFixedArity = 2;
G__18567.cljs$lang$applyTo = (function (arglist__18568){
var f = cljs.core.first(arglist__18568);
var coll = cljs.core.first(cljs.core.next(arglist__18568));
var colls = cljs.core.rest(cljs.core.next(arglist__18568));
return G__18567__delegate(f, coll, colls);
});
G__18567.cljs$lang$arity$variadic = G__18567__delegate;
return G__18567;
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
var temp__3974__auto____18578 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18578)
{var s__18579 = temp__3974__auto____18578;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18579))
{var c__18580 = cljs.core.chunk_first.call(null,s__18579);
var size__18581 = cljs.core.count.call(null,c__18580);
var b__18582 = cljs.core.chunk_buffer.call(null,size__18581);
var n__2575__auto____18583 = size__18581;
var i__18584 = 0;
while(true){
if((i__18584 < n__2575__auto____18583))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__18580,i__18584))))
{cljs.core.chunk_append.call(null,b__18582,cljs.core._nth.call(null,c__18580,i__18584));
} else
{}
{
var G__18587 = (i__18584 + 1);
i__18584 = G__18587;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18582),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__18579)));
} else
{var f__18585 = cljs.core.first.call(null,s__18579);
var r__18586 = cljs.core.rest.call(null,s__18579);
if(cljs.core.truth_(pred.call(null,f__18585)))
{return cljs.core.cons.call(null,f__18585,filter.call(null,pred,r__18586));
} else
{return filter.call(null,pred,r__18586);
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
var walk__18590 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__18590.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__18588_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__18588_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__18594__18595 = to;
if(G__18594__18595)
{if((function (){var or__3824__auto____18596 = (G__18594__18595.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____18596)
{return or__3824__auto____18596;
} else
{return G__18594__18595.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__18594__18595.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__18594__18595);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__18594__18595);
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
var G__18597__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__18597 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__18597__delegate.call(this, f, c1, c2, c3, colls);
};
G__18597.cljs$lang$maxFixedArity = 4;
G__18597.cljs$lang$applyTo = (function (arglist__18598){
var f = cljs.core.first(arglist__18598);
var c1 = cljs.core.first(cljs.core.next(arglist__18598));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18598)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18598))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18598))));
return G__18597__delegate(f, c1, c2, c3, colls);
});
G__18597.cljs$lang$arity$variadic = G__18597__delegate;
return G__18597;
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
var temp__3974__auto____18605 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18605)
{var s__18606 = temp__3974__auto____18605;
var p__18607 = cljs.core.take.call(null,n,s__18606);
if((n === cljs.core.count.call(null,p__18607)))
{return cljs.core.cons.call(null,p__18607,partition.call(null,n,step,cljs.core.drop.call(null,step,s__18606)));
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
var temp__3974__auto____18608 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18608)
{var s__18609 = temp__3974__auto____18608;
var p__18610 = cljs.core.take.call(null,n,s__18609);
if((n === cljs.core.count.call(null,p__18610)))
{return cljs.core.cons.call(null,p__18610,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__18609)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__18610,pad)));
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
var sentinel__18615 = cljs.core.lookup_sentinel;
var m__18616 = m;
var ks__18617 = cljs.core.seq.call(null,ks);
while(true){
if(ks__18617)
{var m__18618 = cljs.core._lookup.call(null,m__18616,cljs.core.first.call(null,ks__18617),sentinel__18615);
if((sentinel__18615 === m__18618))
{return not_found;
} else
{{
var G__18619 = sentinel__18615;
var G__18620 = m__18618;
var G__18621 = cljs.core.next.call(null,ks__18617);
sentinel__18615 = G__18619;
m__18616 = G__18620;
ks__18617 = G__18621;
continue;
}
}
} else
{return m__18616;
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
cljs.core.assoc_in = (function assoc_in(m,p__18622,v){
var vec__18627__18628 = p__18622;
var k__18629 = cljs.core.nth.call(null,vec__18627__18628,0,null);
var ks__18630 = cljs.core.nthnext.call(null,vec__18627__18628,1);
if(cljs.core.truth_(ks__18630))
{return cljs.core.assoc.call(null,m,k__18629,assoc_in.call(null,cljs.core._lookup.call(null,m,k__18629,null),ks__18630,v));
} else
{return cljs.core.assoc.call(null,m,k__18629,v);
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
var update_in__delegate = function (m,p__18631,f,args){
var vec__18636__18637 = p__18631;
var k__18638 = cljs.core.nth.call(null,vec__18636__18637,0,null);
var ks__18639 = cljs.core.nthnext.call(null,vec__18636__18637,1);
if(cljs.core.truth_(ks__18639))
{return cljs.core.assoc.call(null,m,k__18638,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__18638,null),ks__18639,f,args));
} else
{return cljs.core.assoc.call(null,m,k__18638,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__18638,null),args));
}
};
var update_in = function (m,p__18631,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__18631, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__18640){
var m = cljs.core.first(arglist__18640);
var p__18631 = cljs.core.first(cljs.core.next(arglist__18640));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18640)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18640)));
return update_in__delegate(m, p__18631, f, args);
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
var this__18643 = this;
var h__2236__auto____18644 = this__18643.__hash;
if(!((h__2236__auto____18644 == null)))
{return h__2236__auto____18644;
} else
{var h__2236__auto____18645 = cljs.core.hash_coll.call(null,coll);
this__18643.__hash = h__2236__auto____18645;
return h__2236__auto____18645;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__18646 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__18647 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__18648 = this;
var new_array__18649 = this__18648.array.slice();
(new_array__18649[k] = v);
return (new cljs.core.Vector(this__18648.meta,new_array__18649,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__18680 = null;
var G__18680__2 = (function (this_sym18650,k){
var this__18652 = this;
var this_sym18650__18653 = this;
var coll__18654 = this_sym18650__18653;
return coll__18654.cljs$core$ILookup$_lookup$arity$2(coll__18654,k);
});
var G__18680__3 = (function (this_sym18651,k,not_found){
var this__18652 = this;
var this_sym18651__18655 = this;
var coll__18656 = this_sym18651__18655;
return coll__18656.cljs$core$ILookup$_lookup$arity$3(coll__18656,k,not_found);
});
G__18680 = function(this_sym18651,k,not_found){
switch(arguments.length){
case 2:
return G__18680__2.call(this,this_sym18651,k);
case 3:
return G__18680__3.call(this,this_sym18651,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18680;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym18641,args18642){
var this__18657 = this;
return this_sym18641.call.apply(this_sym18641,[this_sym18641].concat(args18642.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18658 = this;
var new_array__18659 = this__18658.array.slice();
new_array__18659.push(o);
return (new cljs.core.Vector(this__18658.meta,new_array__18659,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__18660 = this;
var this__18661 = this;
return cljs.core.pr_str.call(null,this__18661);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__18662 = this;
return cljs.core.ci_reduce.call(null,this__18662.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__18663 = this;
return cljs.core.ci_reduce.call(null,this__18663.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18664 = this;
if((this__18664.array.length > 0))
{var vector_seq__18665 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__18664.array.length))
{return cljs.core.cons.call(null,(this__18664.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__18665.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18666 = this;
return this__18666.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__18667 = this;
var count__18668 = this__18667.array.length;
if((count__18668 > 0))
{return (this__18667.array[(count__18668 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__18669 = this;
if((this__18669.array.length > 0))
{var new_array__18670 = this__18669.array.slice();
new_array__18670.pop();
return (new cljs.core.Vector(this__18669.meta,new_array__18670,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__18671 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18672 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18673 = this;
return (new cljs.core.Vector(meta,this__18673.array,this__18673.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18674 = this;
return this__18674.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__18675 = this;
if((function (){var and__3822__auto____18676 = (0 <= n);
if(and__3822__auto____18676)
{return (n < this__18675.array.length);
} else
{return and__3822__auto____18676;
}
})())
{return (this__18675.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__18677 = this;
if((function (){var and__3822__auto____18678 = (0 <= n);
if(and__3822__auto____18678)
{return (n < this__18677.array.length);
} else
{return and__3822__auto____18678;
}
})())
{return (this__18677.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18679 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__18679.meta);
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
var cnt__18682 = pv.cnt;
if((cnt__18682 < 32))
{return 0;
} else
{return (((cnt__18682 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__18688 = level;
var ret__18689 = node;
while(true){
if((ll__18688 === 0))
{return ret__18689;
} else
{var embed__18690 = ret__18689;
var r__18691 = cljs.core.pv_fresh_node.call(null,edit);
var ___18692 = cljs.core.pv_aset.call(null,r__18691,0,embed__18690);
{
var G__18693 = (ll__18688 - 5);
var G__18694 = r__18691;
ll__18688 = G__18693;
ret__18689 = G__18694;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__18700 = cljs.core.pv_clone_node.call(null,parent);
var subidx__18701 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__18700,subidx__18701,tailnode);
return ret__18700;
} else
{var child__18702 = cljs.core.pv_aget.call(null,parent,subidx__18701);
if(!((child__18702 == null)))
{var node_to_insert__18703 = push_tail.call(null,pv,(level - 5),child__18702,tailnode);
cljs.core.pv_aset.call(null,ret__18700,subidx__18701,node_to_insert__18703);
return ret__18700;
} else
{var node_to_insert__18704 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__18700,subidx__18701,node_to_insert__18704);
return ret__18700;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____18708 = (0 <= i);
if(and__3822__auto____18708)
{return (i < pv.cnt);
} else
{return and__3822__auto____18708;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__18709 = pv.root;
var level__18710 = pv.shift;
while(true){
if((level__18710 > 0))
{{
var G__18711 = cljs.core.pv_aget.call(null,node__18709,((i >>> level__18710) & 31));
var G__18712 = (level__18710 - 5);
node__18709 = G__18711;
level__18710 = G__18712;
continue;
}
} else
{return node__18709.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__18715 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__18715,(i & 31),val);
return ret__18715;
} else
{var subidx__18716 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__18715,subidx__18716,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__18716),i,val));
return ret__18715;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__18722 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__18723 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__18722));
if((function (){var and__3822__auto____18724 = (new_child__18723 == null);
if(and__3822__auto____18724)
{return (subidx__18722 === 0);
} else
{return and__3822__auto____18724;
}
})())
{return null;
} else
{var ret__18725 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__18725,subidx__18722,new_child__18723);
return ret__18725;
}
} else
{if((subidx__18722 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__18726 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__18726,subidx__18722,null);
return ret__18726;
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
var this__18729 = this;
return (new cljs.core.TransientVector(this__18729.cnt,this__18729.shift,cljs.core.tv_editable_root.call(null,this__18729.root),cljs.core.tv_editable_tail.call(null,this__18729.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__18730 = this;
var h__2236__auto____18731 = this__18730.__hash;
if(!((h__2236__auto____18731 == null)))
{return h__2236__auto____18731;
} else
{var h__2236__auto____18732 = cljs.core.hash_coll.call(null,coll);
this__18730.__hash = h__2236__auto____18732;
return h__2236__auto____18732;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__18733 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__18734 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__18735 = this;
if((function (){var and__3822__auto____18736 = (0 <= k);
if(and__3822__auto____18736)
{return (k < this__18735.cnt);
} else
{return and__3822__auto____18736;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__18737 = this__18735.tail.slice();
(new_tail__18737[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__18735.meta,this__18735.cnt,this__18735.shift,this__18735.root,new_tail__18737,null));
} else
{return (new cljs.core.PersistentVector(this__18735.meta,this__18735.cnt,this__18735.shift,cljs.core.do_assoc.call(null,coll,this__18735.shift,this__18735.root,k,v),this__18735.tail,null));
}
} else
{if((k === this__18735.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__18735.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__18785 = null;
var G__18785__2 = (function (this_sym18738,k){
var this__18740 = this;
var this_sym18738__18741 = this;
var coll__18742 = this_sym18738__18741;
return coll__18742.cljs$core$ILookup$_lookup$arity$2(coll__18742,k);
});
var G__18785__3 = (function (this_sym18739,k,not_found){
var this__18740 = this;
var this_sym18739__18743 = this;
var coll__18744 = this_sym18739__18743;
return coll__18744.cljs$core$ILookup$_lookup$arity$3(coll__18744,k,not_found);
});
G__18785 = function(this_sym18739,k,not_found){
switch(arguments.length){
case 2:
return G__18785__2.call(this,this_sym18739,k);
case 3:
return G__18785__3.call(this,this_sym18739,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18785;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym18727,args18728){
var this__18745 = this;
return this_sym18727.call.apply(this_sym18727,[this_sym18727].concat(args18728.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__18746 = this;
var step_init__18747 = [0,init];
var i__18748 = 0;
while(true){
if((i__18748 < this__18746.cnt))
{var arr__18749 = cljs.core.array_for.call(null,v,i__18748);
var len__18750 = arr__18749.length;
var init__18754 = (function (){var j__18751 = 0;
var init__18752 = (step_init__18747[1]);
while(true){
if((j__18751 < len__18750))
{var init__18753 = f.call(null,init__18752,(j__18751 + i__18748),(arr__18749[j__18751]));
if(cljs.core.reduced_QMARK_.call(null,init__18753))
{return init__18753;
} else
{{
var G__18786 = (j__18751 + 1);
var G__18787 = init__18753;
j__18751 = G__18786;
init__18752 = G__18787;
continue;
}
}
} else
{(step_init__18747[0] = len__18750);
(step_init__18747[1] = init__18752);
return init__18752;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__18754))
{return cljs.core.deref.call(null,init__18754);
} else
{{
var G__18788 = (i__18748 + (step_init__18747[0]));
i__18748 = G__18788;
continue;
}
}
} else
{return (step_init__18747[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18755 = this;
if(((this__18755.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__18756 = this__18755.tail.slice();
new_tail__18756.push(o);
return (new cljs.core.PersistentVector(this__18755.meta,(this__18755.cnt + 1),this__18755.shift,this__18755.root,new_tail__18756,null));
} else
{var root_overflow_QMARK___18757 = ((this__18755.cnt >>> 5) > (1 << this__18755.shift));
var new_shift__18758 = ((root_overflow_QMARK___18757)?(this__18755.shift + 5):this__18755.shift);
var new_root__18760 = ((root_overflow_QMARK___18757)?(function (){var n_r__18759 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__18759,0,this__18755.root);
cljs.core.pv_aset.call(null,n_r__18759,1,cljs.core.new_path.call(null,null,this__18755.shift,(new cljs.core.VectorNode(null,this__18755.tail))));
return n_r__18759;
})():cljs.core.push_tail.call(null,coll,this__18755.shift,this__18755.root,(new cljs.core.VectorNode(null,this__18755.tail))));
return (new cljs.core.PersistentVector(this__18755.meta,(this__18755.cnt + 1),new_shift__18758,new_root__18760,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__18761 = this;
if((this__18761.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__18761.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__18762 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__18763 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__18764 = this;
var this__18765 = this;
return cljs.core.pr_str.call(null,this__18765);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__18766 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__18767 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18768 = this;
if((this__18768.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18769 = this;
return this__18769.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__18770 = this;
if((this__18770.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__18770.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__18771 = this;
if((this__18771.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__18771.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__18771.meta);
} else
{if((1 < (this__18771.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__18771.meta,(this__18771.cnt - 1),this__18771.shift,this__18771.root,this__18771.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__18772 = cljs.core.array_for.call(null,coll,(this__18771.cnt - 2));
var nr__18773 = cljs.core.pop_tail.call(null,coll,this__18771.shift,this__18771.root);
var new_root__18774 = (((nr__18773 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__18773);
var cnt_1__18775 = (this__18771.cnt - 1);
if((function (){var and__3822__auto____18776 = (5 < this__18771.shift);
if(and__3822__auto____18776)
{return (cljs.core.pv_aget.call(null,new_root__18774,1) == null);
} else
{return and__3822__auto____18776;
}
})())
{return (new cljs.core.PersistentVector(this__18771.meta,cnt_1__18775,(this__18771.shift - 5),cljs.core.pv_aget.call(null,new_root__18774,0),new_tail__18772,null));
} else
{return (new cljs.core.PersistentVector(this__18771.meta,cnt_1__18775,this__18771.shift,new_root__18774,new_tail__18772,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__18777 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18778 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18779 = this;
return (new cljs.core.PersistentVector(meta,this__18779.cnt,this__18779.shift,this__18779.root,this__18779.tail,this__18779.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18780 = this;
return this__18780.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__18781 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__18782 = this;
if((function (){var and__3822__auto____18783 = (0 <= n);
if(and__3822__auto____18783)
{return (n < this__18782.cnt);
} else
{return and__3822__auto____18783;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18784 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__18784.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__18789 = xs.length;
var xs__18790 = (((no_clone === true))?xs:xs.slice());
if((l__18789 < 32))
{return (new cljs.core.PersistentVector(null,l__18789,5,cljs.core.PersistentVector.EMPTY_NODE,xs__18790,null));
} else
{var node__18791 = xs__18790.slice(0,32);
var v__18792 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__18791,null));
var i__18793 = 32;
var out__18794 = cljs.core._as_transient.call(null,v__18792);
while(true){
if((i__18793 < l__18789))
{{
var G__18795 = (i__18793 + 1);
var G__18796 = cljs.core.conj_BANG_.call(null,out__18794,(xs__18790[i__18793]));
i__18793 = G__18795;
out__18794 = G__18796;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__18794);
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
vector.cljs$lang$applyTo = (function (arglist__18797){
var args = cljs.core.seq(arglist__18797);;
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
var this__18798 = this;
if(((this__18798.off + 1) < this__18798.node.length))
{var s__18799 = cljs.core.chunked_seq.call(null,this__18798.vec,this__18798.node,this__18798.i,(this__18798.off + 1));
if((s__18799 == null))
{return null;
} else
{return s__18799;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18800 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18801 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18802 = this;
return (this__18802.node[this__18802.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18803 = this;
if(((this__18803.off + 1) < this__18803.node.length))
{var s__18804 = cljs.core.chunked_seq.call(null,this__18803.vec,this__18803.node,this__18803.i,(this__18803.off + 1));
if((s__18804 == null))
{return cljs.core.List.EMPTY;
} else
{return s__18804;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__18805 = this;
var l__18806 = this__18805.node.length;
var s__18807 = ((((this__18805.i + l__18806) < cljs.core._count.call(null,this__18805.vec)))?cljs.core.chunked_seq.call(null,this__18805.vec,(this__18805.i + l__18806),0):null);
if((s__18807 == null))
{return null;
} else
{return s__18807;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18808 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__18809 = this;
return cljs.core.chunked_seq.call(null,this__18809.vec,this__18809.node,this__18809.i,this__18809.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__18810 = this;
return this__18810.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18811 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__18811.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__18812 = this;
return cljs.core.array_chunk.call(null,this__18812.node,this__18812.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__18813 = this;
var l__18814 = this__18813.node.length;
var s__18815 = ((((this__18813.i + l__18814) < cljs.core._count.call(null,this__18813.vec)))?cljs.core.chunked_seq.call(null,this__18813.vec,(this__18813.i + l__18814),0):null);
if((s__18815 == null))
{return cljs.core.List.EMPTY;
} else
{return s__18815;
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
var this__18818 = this;
var h__2236__auto____18819 = this__18818.__hash;
if(!((h__2236__auto____18819 == null)))
{return h__2236__auto____18819;
} else
{var h__2236__auto____18820 = cljs.core.hash_coll.call(null,coll);
this__18818.__hash = h__2236__auto____18820;
return h__2236__auto____18820;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__18821 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__18822 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__18823 = this;
var v_pos__18824 = (this__18823.start + key);
return (new cljs.core.Subvec(this__18823.meta,cljs.core._assoc.call(null,this__18823.v,v_pos__18824,val),this__18823.start,((this__18823.end > (v_pos__18824 + 1)) ? this__18823.end : (v_pos__18824 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__18850 = null;
var G__18850__2 = (function (this_sym18825,k){
var this__18827 = this;
var this_sym18825__18828 = this;
var coll__18829 = this_sym18825__18828;
return coll__18829.cljs$core$ILookup$_lookup$arity$2(coll__18829,k);
});
var G__18850__3 = (function (this_sym18826,k,not_found){
var this__18827 = this;
var this_sym18826__18830 = this;
var coll__18831 = this_sym18826__18830;
return coll__18831.cljs$core$ILookup$_lookup$arity$3(coll__18831,k,not_found);
});
G__18850 = function(this_sym18826,k,not_found){
switch(arguments.length){
case 2:
return G__18850__2.call(this,this_sym18826,k);
case 3:
return G__18850__3.call(this,this_sym18826,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18850;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym18816,args18817){
var this__18832 = this;
return this_sym18816.call.apply(this_sym18816,[this_sym18816].concat(args18817.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18833 = this;
return (new cljs.core.Subvec(this__18833.meta,cljs.core._assoc_n.call(null,this__18833.v,this__18833.end,o),this__18833.start,(this__18833.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__18834 = this;
var this__18835 = this;
return cljs.core.pr_str.call(null,this__18835);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__18836 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__18837 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18838 = this;
var subvec_seq__18839 = (function subvec_seq(i){
if((i === this__18838.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__18838.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__18839.call(null,this__18838.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18840 = this;
return (this__18840.end - this__18840.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__18841 = this;
return cljs.core._nth.call(null,this__18841.v,(this__18841.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__18842 = this;
if((this__18842.start === this__18842.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__18842.meta,this__18842.v,this__18842.start,(this__18842.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__18843 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18844 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18845 = this;
return (new cljs.core.Subvec(meta,this__18845.v,this__18845.start,this__18845.end,this__18845.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18846 = this;
return this__18846.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__18847 = this;
return cljs.core._nth.call(null,this__18847.v,(this__18847.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__18848 = this;
return cljs.core._nth.call(null,this__18848.v,(this__18848.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18849 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__18849.meta);
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
var ret__18852 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__18852,0,tl.length);
return ret__18852;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__18856 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__18857 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__18856,subidx__18857,(((level === 5))?tail_node:(function (){var child__18858 = cljs.core.pv_aget.call(null,ret__18856,subidx__18857);
if(!((child__18858 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__18858,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__18856;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__18863 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__18864 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__18865 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__18863,subidx__18864));
if((function (){var and__3822__auto____18866 = (new_child__18865 == null);
if(and__3822__auto____18866)
{return (subidx__18864 === 0);
} else
{return and__3822__auto____18866;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__18863,subidx__18864,new_child__18865);
return node__18863;
}
} else
{if((subidx__18864 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__18863,subidx__18864,null);
return node__18863;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____18871 = (0 <= i);
if(and__3822__auto____18871)
{return (i < tv.cnt);
} else
{return and__3822__auto____18871;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__18872 = tv.root;
var node__18873 = root__18872;
var level__18874 = tv.shift;
while(true){
if((level__18874 > 0))
{{
var G__18875 = cljs.core.tv_ensure_editable.call(null,root__18872.edit,cljs.core.pv_aget.call(null,node__18873,((i >>> level__18874) & 31)));
var G__18876 = (level__18874 - 5);
node__18873 = G__18875;
level__18874 = G__18876;
continue;
}
} else
{return node__18873.arr;
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
var G__18916 = null;
var G__18916__2 = (function (this_sym18879,k){
var this__18881 = this;
var this_sym18879__18882 = this;
var coll__18883 = this_sym18879__18882;
return coll__18883.cljs$core$ILookup$_lookup$arity$2(coll__18883,k);
});
var G__18916__3 = (function (this_sym18880,k,not_found){
var this__18881 = this;
var this_sym18880__18884 = this;
var coll__18885 = this_sym18880__18884;
return coll__18885.cljs$core$ILookup$_lookup$arity$3(coll__18885,k,not_found);
});
G__18916 = function(this_sym18880,k,not_found){
switch(arguments.length){
case 2:
return G__18916__2.call(this,this_sym18880,k);
case 3:
return G__18916__3.call(this,this_sym18880,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18916;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym18877,args18878){
var this__18886 = this;
return this_sym18877.call.apply(this_sym18877,[this_sym18877].concat(args18878.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__18887 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__18888 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__18889 = this;
if(this__18889.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__18890 = this;
if((function (){var and__3822__auto____18891 = (0 <= n);
if(and__3822__auto____18891)
{return (n < this__18890.cnt);
} else
{return and__3822__auto____18891;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18892 = this;
if(this__18892.root.edit)
{return this__18892.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__18893 = this;
if(this__18893.root.edit)
{if((function (){var and__3822__auto____18894 = (0 <= n);
if(and__3822__auto____18894)
{return (n < this__18893.cnt);
} else
{return and__3822__auto____18894;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__18893.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__18899 = (function go(level,node){
var node__18897 = cljs.core.tv_ensure_editable.call(null,this__18893.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__18897,(n & 31),val);
return node__18897;
} else
{var subidx__18898 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__18897,subidx__18898,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__18897,subidx__18898)));
return node__18897;
}
}).call(null,this__18893.shift,this__18893.root);
this__18893.root = new_root__18899;
return tcoll;
}
} else
{if((n === this__18893.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__18893.cnt)].join('')));
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
var this__18900 = this;
if(this__18900.root.edit)
{if((this__18900.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__18900.cnt))
{this__18900.cnt = 0;
return tcoll;
} else
{if((((this__18900.cnt - 1) & 31) > 0))
{this__18900.cnt = (this__18900.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__18901 = cljs.core.editable_array_for.call(null,tcoll,(this__18900.cnt - 2));
var new_root__18903 = (function (){var nr__18902 = cljs.core.tv_pop_tail.call(null,tcoll,this__18900.shift,this__18900.root);
if(!((nr__18902 == null)))
{return nr__18902;
} else
{return (new cljs.core.VectorNode(this__18900.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____18904 = (5 < this__18900.shift);
if(and__3822__auto____18904)
{return (cljs.core.pv_aget.call(null,new_root__18903,1) == null);
} else
{return and__3822__auto____18904;
}
})())
{var new_root__18905 = cljs.core.tv_ensure_editable.call(null,this__18900.root.edit,cljs.core.pv_aget.call(null,new_root__18903,0));
this__18900.root = new_root__18905;
this__18900.shift = (this__18900.shift - 5);
this__18900.cnt = (this__18900.cnt - 1);
this__18900.tail = new_tail__18901;
return tcoll;
} else
{this__18900.root = new_root__18903;
this__18900.cnt = (this__18900.cnt - 1);
this__18900.tail = new_tail__18901;
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
var this__18906 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__18907 = this;
if(this__18907.root.edit)
{if(((this__18907.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__18907.tail[(this__18907.cnt & 31)] = o);
this__18907.cnt = (this__18907.cnt + 1);
return tcoll;
} else
{var tail_node__18908 = (new cljs.core.VectorNode(this__18907.root.edit,this__18907.tail));
var new_tail__18909 = cljs.core.make_array.call(null,32);
(new_tail__18909[0] = o);
this__18907.tail = new_tail__18909;
if(((this__18907.cnt >>> 5) > (1 << this__18907.shift)))
{var new_root_array__18910 = cljs.core.make_array.call(null,32);
var new_shift__18911 = (this__18907.shift + 5);
(new_root_array__18910[0] = this__18907.root);
(new_root_array__18910[1] = cljs.core.new_path.call(null,this__18907.root.edit,this__18907.shift,tail_node__18908));
this__18907.root = (new cljs.core.VectorNode(this__18907.root.edit,new_root_array__18910));
this__18907.shift = new_shift__18911;
this__18907.cnt = (this__18907.cnt + 1);
return tcoll;
} else
{var new_root__18912 = cljs.core.tv_push_tail.call(null,tcoll,this__18907.shift,this__18907.root,tail_node__18908);
this__18907.root = new_root__18912;
this__18907.cnt = (this__18907.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__18913 = this;
if(this__18913.root.edit)
{this__18913.root.edit = null;
var len__18914 = (this__18913.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__18915 = cljs.core.make_array.call(null,len__18914);
cljs.core.array_copy.call(null,this__18913.tail,0,trimmed_tail__18915,0,len__18914);
return (new cljs.core.PersistentVector(null,this__18913.cnt,this__18913.shift,this__18913.root,trimmed_tail__18915,null));
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
var this__18917 = this;
var h__2236__auto____18918 = this__18917.__hash;
if(!((h__2236__auto____18918 == null)))
{return h__2236__auto____18918;
} else
{var h__2236__auto____18919 = cljs.core.hash_coll.call(null,coll);
this__18917.__hash = h__2236__auto____18919;
return h__2236__auto____18919;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18920 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__18921 = this;
var this__18922 = this;
return cljs.core.pr_str.call(null,this__18922);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18923 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18924 = this;
return cljs.core._first.call(null,this__18924.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18925 = this;
var temp__3971__auto____18926 = cljs.core.next.call(null,this__18925.front);
if(temp__3971__auto____18926)
{var f1__18927 = temp__3971__auto____18926;
return (new cljs.core.PersistentQueueSeq(this__18925.meta,f1__18927,this__18925.rear,null));
} else
{if((this__18925.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__18925.meta,this__18925.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18928 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18929 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__18929.front,this__18929.rear,this__18929.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18930 = this;
return this__18930.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18931 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__18931.meta);
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
var this__18932 = this;
var h__2236__auto____18933 = this__18932.__hash;
if(!((h__2236__auto____18933 == null)))
{return h__2236__auto____18933;
} else
{var h__2236__auto____18934 = cljs.core.hash_coll.call(null,coll);
this__18932.__hash = h__2236__auto____18934;
return h__2236__auto____18934;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18935 = this;
if(cljs.core.truth_(this__18935.front))
{return (new cljs.core.PersistentQueue(this__18935.meta,(this__18935.count + 1),this__18935.front,cljs.core.conj.call(null,(function (){var or__3824__auto____18936 = this__18935.rear;
if(cljs.core.truth_(or__3824__auto____18936))
{return or__3824__auto____18936;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__18935.meta,(this__18935.count + 1),cljs.core.conj.call(null,this__18935.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__18937 = this;
var this__18938 = this;
return cljs.core.pr_str.call(null,this__18938);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18939 = this;
var rear__18940 = cljs.core.seq.call(null,this__18939.rear);
if(cljs.core.truth_((function (){var or__3824__auto____18941 = this__18939.front;
if(cljs.core.truth_(or__3824__auto____18941))
{return or__3824__auto____18941;
} else
{return rear__18940;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__18939.front,cljs.core.seq.call(null,rear__18940),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18942 = this;
return this__18942.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__18943 = this;
return cljs.core._first.call(null,this__18943.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__18944 = this;
if(cljs.core.truth_(this__18944.front))
{var temp__3971__auto____18945 = cljs.core.next.call(null,this__18944.front);
if(temp__3971__auto____18945)
{var f1__18946 = temp__3971__auto____18945;
return (new cljs.core.PersistentQueue(this__18944.meta,(this__18944.count - 1),f1__18946,this__18944.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__18944.meta,(this__18944.count - 1),cljs.core.seq.call(null,this__18944.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18947 = this;
return cljs.core.first.call(null,this__18947.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18948 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18949 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18950 = this;
return (new cljs.core.PersistentQueue(meta,this__18950.count,this__18950.front,this__18950.rear,this__18950.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18951 = this;
return this__18951.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18952 = this;
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
var this__18953 = this;
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
var len__18956 = array.length;
var i__18957 = 0;
while(true){
if((i__18957 < len__18956))
{if((k === (array[i__18957])))
{return i__18957;
} else
{{
var G__18958 = (i__18957 + incr);
i__18957 = G__18958;
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
var a__18961 = cljs.core.hash.call(null,a);
var b__18962 = cljs.core.hash.call(null,b);
if((a__18961 < b__18962))
{return -1;
} else
{if((a__18961 > b__18962))
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
var ks__18970 = m.keys;
var len__18971 = ks__18970.length;
var so__18972 = m.strobj;
var out__18973 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__18974 = 0;
var out__18975 = cljs.core.transient$.call(null,out__18973);
while(true){
if((i__18974 < len__18971))
{var k__18976 = (ks__18970[i__18974]);
{
var G__18977 = (i__18974 + 1);
var G__18978 = cljs.core.assoc_BANG_.call(null,out__18975,k__18976,(so__18972[k__18976]));
i__18974 = G__18977;
out__18975 = G__18978;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__18975,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__18984 = {};
var l__18985 = ks.length;
var i__18986 = 0;
while(true){
if((i__18986 < l__18985))
{var k__18987 = (ks[i__18986]);
(new_obj__18984[k__18987] = (obj[k__18987]));
{
var G__18988 = (i__18986 + 1);
i__18986 = G__18988;
continue;
}
} else
{}
break;
}
return new_obj__18984;
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
var this__18991 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__18992 = this;
var h__2236__auto____18993 = this__18992.__hash;
if(!((h__2236__auto____18993 == null)))
{return h__2236__auto____18993;
} else
{var h__2236__auto____18994 = cljs.core.hash_imap.call(null,coll);
this__18992.__hash = h__2236__auto____18994;
return h__2236__auto____18994;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__18995 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__18996 = this;
if((function (){var and__3822__auto____18997 = goog.isString(k);
if(and__3822__auto____18997)
{return !((cljs.core.scan_array.call(null,1,k,this__18996.keys) == null));
} else
{return and__3822__auto____18997;
}
})())
{return (this__18996.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__18998 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____18999 = (this__18998.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____18999)
{return or__3824__auto____18999;
} else
{return (this__18998.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__18998.keys) == null)))
{var new_strobj__19000 = cljs.core.obj_clone.call(null,this__18998.strobj,this__18998.keys);
(new_strobj__19000[k] = v);
return (new cljs.core.ObjMap(this__18998.meta,this__18998.keys,new_strobj__19000,(this__18998.update_count + 1),null));
} else
{var new_strobj__19001 = cljs.core.obj_clone.call(null,this__18998.strobj,this__18998.keys);
var new_keys__19002 = this__18998.keys.slice();
(new_strobj__19001[k] = v);
new_keys__19002.push(k);
return (new cljs.core.ObjMap(this__18998.meta,new_keys__19002,new_strobj__19001,(this__18998.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__19003 = this;
if((function (){var and__3822__auto____19004 = goog.isString(k);
if(and__3822__auto____19004)
{return !((cljs.core.scan_array.call(null,1,k,this__19003.keys) == null));
} else
{return and__3822__auto____19004;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__19026 = null;
var G__19026__2 = (function (this_sym19005,k){
var this__19007 = this;
var this_sym19005__19008 = this;
var coll__19009 = this_sym19005__19008;
return coll__19009.cljs$core$ILookup$_lookup$arity$2(coll__19009,k);
});
var G__19026__3 = (function (this_sym19006,k,not_found){
var this__19007 = this;
var this_sym19006__19010 = this;
var coll__19011 = this_sym19006__19010;
return coll__19011.cljs$core$ILookup$_lookup$arity$3(coll__19011,k,not_found);
});
G__19026 = function(this_sym19006,k,not_found){
switch(arguments.length){
case 2:
return G__19026__2.call(this,this_sym19006,k);
case 3:
return G__19026__3.call(this,this_sym19006,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19026;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym18989,args18990){
var this__19012 = this;
return this_sym18989.call.apply(this_sym18989,[this_sym18989].concat(args18990.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__19013 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__19014 = this;
var this__19015 = this;
return cljs.core.pr_str.call(null,this__19015);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19016 = this;
if((this__19016.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__18979_SHARP_){
return cljs.core.vector.call(null,p1__18979_SHARP_,(this__19016.strobj[p1__18979_SHARP_]));
}),this__19016.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19017 = this;
return this__19017.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19018 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19019 = this;
return (new cljs.core.ObjMap(meta,this__19019.keys,this__19019.strobj,this__19019.update_count,this__19019.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19020 = this;
return this__19020.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19021 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__19021.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__19022 = this;
if((function (){var and__3822__auto____19023 = goog.isString(k);
if(and__3822__auto____19023)
{return !((cljs.core.scan_array.call(null,1,k,this__19022.keys) == null));
} else
{return and__3822__auto____19023;
}
})())
{var new_keys__19024 = this__19022.keys.slice();
var new_strobj__19025 = cljs.core.obj_clone.call(null,this__19022.strobj,this__19022.keys);
new_keys__19024.splice(cljs.core.scan_array.call(null,1,k,new_keys__19024),1);
cljs.core.js_delete.call(null,new_strobj__19025,k);
return (new cljs.core.ObjMap(this__19022.meta,new_keys__19024,new_strobj__19025,(this__19022.update_count + 1),null));
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
var this__19030 = this;
var h__2236__auto____19031 = this__19030.__hash;
if(!((h__2236__auto____19031 == null)))
{return h__2236__auto____19031;
} else
{var h__2236__auto____19032 = cljs.core.hash_imap.call(null,coll);
this__19030.__hash = h__2236__auto____19032;
return h__2236__auto____19032;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__19033 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__19034 = this;
var bucket__19035 = (this__19034.hashobj[cljs.core.hash.call(null,k)]);
var i__19036 = (cljs.core.truth_(bucket__19035)?cljs.core.scan_array.call(null,2,k,bucket__19035):null);
if(cljs.core.truth_(i__19036))
{return (bucket__19035[(i__19036 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__19037 = this;
var h__19038 = cljs.core.hash.call(null,k);
var bucket__19039 = (this__19037.hashobj[h__19038]);
if(cljs.core.truth_(bucket__19039))
{var new_bucket__19040 = bucket__19039.slice();
var new_hashobj__19041 = goog.object.clone(this__19037.hashobj);
(new_hashobj__19041[h__19038] = new_bucket__19040);
var temp__3971__auto____19042 = cljs.core.scan_array.call(null,2,k,new_bucket__19040);
if(cljs.core.truth_(temp__3971__auto____19042))
{var i__19043 = temp__3971__auto____19042;
(new_bucket__19040[(i__19043 + 1)] = v);
return (new cljs.core.HashMap(this__19037.meta,this__19037.count,new_hashobj__19041,null));
} else
{new_bucket__19040.push(k,v);
return (new cljs.core.HashMap(this__19037.meta,(this__19037.count + 1),new_hashobj__19041,null));
}
} else
{var new_hashobj__19044 = goog.object.clone(this__19037.hashobj);
(new_hashobj__19044[h__19038] = [k,v]);
return (new cljs.core.HashMap(this__19037.meta,(this__19037.count + 1),new_hashobj__19044,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__19045 = this;
var bucket__19046 = (this__19045.hashobj[cljs.core.hash.call(null,k)]);
var i__19047 = (cljs.core.truth_(bucket__19046)?cljs.core.scan_array.call(null,2,k,bucket__19046):null);
if(cljs.core.truth_(i__19047))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__19072 = null;
var G__19072__2 = (function (this_sym19048,k){
var this__19050 = this;
var this_sym19048__19051 = this;
var coll__19052 = this_sym19048__19051;
return coll__19052.cljs$core$ILookup$_lookup$arity$2(coll__19052,k);
});
var G__19072__3 = (function (this_sym19049,k,not_found){
var this__19050 = this;
var this_sym19049__19053 = this;
var coll__19054 = this_sym19049__19053;
return coll__19054.cljs$core$ILookup$_lookup$arity$3(coll__19054,k,not_found);
});
G__19072 = function(this_sym19049,k,not_found){
switch(arguments.length){
case 2:
return G__19072__2.call(this,this_sym19049,k);
case 3:
return G__19072__3.call(this,this_sym19049,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19072;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym19028,args19029){
var this__19055 = this;
return this_sym19028.call.apply(this_sym19028,[this_sym19028].concat(args19029.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__19056 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__19057 = this;
var this__19058 = this;
return cljs.core.pr_str.call(null,this__19058);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19059 = this;
if((this__19059.count > 0))
{var hashes__19060 = cljs.core.js_keys.call(null,this__19059.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__19027_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__19059.hashobj[p1__19027_SHARP_])));
}),hashes__19060);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19061 = this;
return this__19061.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19062 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19063 = this;
return (new cljs.core.HashMap(meta,this__19063.count,this__19063.hashobj,this__19063.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19064 = this;
return this__19064.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19065 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__19065.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__19066 = this;
var h__19067 = cljs.core.hash.call(null,k);
var bucket__19068 = (this__19066.hashobj[h__19067]);
var i__19069 = (cljs.core.truth_(bucket__19068)?cljs.core.scan_array.call(null,2,k,bucket__19068):null);
if(cljs.core.not.call(null,i__19069))
{return coll;
} else
{var new_hashobj__19070 = goog.object.clone(this__19066.hashobj);
if((3 > bucket__19068.length))
{cljs.core.js_delete.call(null,new_hashobj__19070,h__19067);
} else
{var new_bucket__19071 = bucket__19068.slice();
new_bucket__19071.splice(i__19069,2);
(new_hashobj__19070[h__19067] = new_bucket__19071);
}
return (new cljs.core.HashMap(this__19066.meta,(this__19066.count - 1),new_hashobj__19070,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__19073 = ks.length;
var i__19074 = 0;
var out__19075 = cljs.core.HashMap.EMPTY;
while(true){
if((i__19074 < len__19073))
{{
var G__19076 = (i__19074 + 1);
var G__19077 = cljs.core.assoc.call(null,out__19075,(ks[i__19074]),(vs[i__19074]));
i__19074 = G__19076;
out__19075 = G__19077;
continue;
}
} else
{return out__19075;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__19081 = m.arr;
var len__19082 = arr__19081.length;
var i__19083 = 0;
while(true){
if((len__19082 <= i__19083))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__19081[i__19083]),k))
{return i__19083;
} else
{if("\uFDD0'else")
{{
var G__19084 = (i__19083 + 2);
i__19083 = G__19084;
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
var this__19087 = this;
return (new cljs.core.TransientArrayMap({},this__19087.arr.length,this__19087.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__19088 = this;
var h__2236__auto____19089 = this__19088.__hash;
if(!((h__2236__auto____19089 == null)))
{return h__2236__auto____19089;
} else
{var h__2236__auto____19090 = cljs.core.hash_imap.call(null,coll);
this__19088.__hash = h__2236__auto____19090;
return h__2236__auto____19090;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__19091 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__19092 = this;
var idx__19093 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__19093 === -1))
{return not_found;
} else
{return (this__19092.arr[(idx__19093 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__19094 = this;
var idx__19095 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__19095 === -1))
{if((this__19094.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__19094.meta,(this__19094.cnt + 1),(function (){var G__19096__19097 = this__19094.arr.slice();
G__19096__19097.push(k);
G__19096__19097.push(v);
return G__19096__19097;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__19094.arr[(idx__19095 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__19094.meta,this__19094.cnt,(function (){var G__19098__19099 = this__19094.arr.slice();
(G__19098__19099[(idx__19095 + 1)] = v);
return G__19098__19099;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__19100 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__19132 = null;
var G__19132__2 = (function (this_sym19101,k){
var this__19103 = this;
var this_sym19101__19104 = this;
var coll__19105 = this_sym19101__19104;
return coll__19105.cljs$core$ILookup$_lookup$arity$2(coll__19105,k);
});
var G__19132__3 = (function (this_sym19102,k,not_found){
var this__19103 = this;
var this_sym19102__19106 = this;
var coll__19107 = this_sym19102__19106;
return coll__19107.cljs$core$ILookup$_lookup$arity$3(coll__19107,k,not_found);
});
G__19132 = function(this_sym19102,k,not_found){
switch(arguments.length){
case 2:
return G__19132__2.call(this,this_sym19102,k);
case 3:
return G__19132__3.call(this,this_sym19102,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19132;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym19085,args19086){
var this__19108 = this;
return this_sym19085.call.apply(this_sym19085,[this_sym19085].concat(args19086.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__19109 = this;
var len__19110 = this__19109.arr.length;
var i__19111 = 0;
var init__19112 = init;
while(true){
if((i__19111 < len__19110))
{var init__19113 = f.call(null,init__19112,(this__19109.arr[i__19111]),(this__19109.arr[(i__19111 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__19113))
{return cljs.core.deref.call(null,init__19113);
} else
{{
var G__19133 = (i__19111 + 2);
var G__19134 = init__19113;
i__19111 = G__19133;
init__19112 = G__19134;
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
var this__19114 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__19115 = this;
var this__19116 = this;
return cljs.core.pr_str.call(null,this__19116);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19117 = this;
if((this__19117.cnt > 0))
{var len__19118 = this__19117.arr.length;
var array_map_seq__19119 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__19118))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__19117.arr[i]),(this__19117.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__19119.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19120 = this;
return this__19120.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19121 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19122 = this;
return (new cljs.core.PersistentArrayMap(meta,this__19122.cnt,this__19122.arr,this__19122.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19123 = this;
return this__19123.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19124 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19124.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__19125 = this;
var idx__19126 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__19126 >= 0))
{var len__19127 = this__19125.arr.length;
var new_len__19128 = (len__19127 - 2);
if((new_len__19128 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__19129 = cljs.core.make_array.call(null,new_len__19128);
var s__19130 = 0;
var d__19131 = 0;
while(true){
if((s__19130 >= len__19127))
{return (new cljs.core.PersistentArrayMap(this__19125.meta,(this__19125.cnt - 1),new_arr__19129,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__19125.arr[s__19130])))
{{
var G__19135 = (s__19130 + 2);
var G__19136 = d__19131;
s__19130 = G__19135;
d__19131 = G__19136;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__19129[d__19131] = (this__19125.arr[s__19130]));
(new_arr__19129[(d__19131 + 1)] = (this__19125.arr[(s__19130 + 1)]));
{
var G__19137 = (s__19130 + 2);
var G__19138 = (d__19131 + 2);
s__19130 = G__19137;
d__19131 = G__19138;
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
var len__19139 = cljs.core.count.call(null,ks);
var i__19140 = 0;
var out__19141 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__19140 < len__19139))
{{
var G__19142 = (i__19140 + 1);
var G__19143 = cljs.core.assoc_BANG_.call(null,out__19141,(ks[i__19140]),(vs[i__19140]));
i__19140 = G__19142;
out__19141 = G__19143;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__19141);
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
var this__19144 = this;
if(cljs.core.truth_(this__19144.editable_QMARK_))
{var idx__19145 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__19145 >= 0))
{(this__19144.arr[idx__19145] = (this__19144.arr[(this__19144.len - 2)]));
(this__19144.arr[(idx__19145 + 1)] = (this__19144.arr[(this__19144.len - 1)]));
var G__19146__19147 = this__19144.arr;
G__19146__19147.pop();
G__19146__19147.pop();
G__19146__19147;
this__19144.len = (this__19144.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__19148 = this;
if(cljs.core.truth_(this__19148.editable_QMARK_))
{var idx__19149 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__19149 === -1))
{if(((this__19148.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__19148.len = (this__19148.len + 2);
this__19148.arr.push(key);
this__19148.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__19148.len,this__19148.arr),key,val);
}
} else
{if((val === (this__19148.arr[(idx__19149 + 1)])))
{return tcoll;
} else
{(this__19148.arr[(idx__19149 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__19150 = this;
if(cljs.core.truth_(this__19150.editable_QMARK_))
{if((function (){var G__19151__19152 = o;
if(G__19151__19152)
{if((function (){var or__3824__auto____19153 = (G__19151__19152.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____19153)
{return or__3824__auto____19153;
} else
{return G__19151__19152.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__19151__19152.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__19151__19152);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__19151__19152);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__19154 = cljs.core.seq.call(null,o);
var tcoll__19155 = tcoll;
while(true){
var temp__3971__auto____19156 = cljs.core.first.call(null,es__19154);
if(cljs.core.truth_(temp__3971__auto____19156))
{var e__19157 = temp__3971__auto____19156;
{
var G__19163 = cljs.core.next.call(null,es__19154);
var G__19164 = tcoll__19155.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__19155,cljs.core.key.call(null,e__19157),cljs.core.val.call(null,e__19157));
es__19154 = G__19163;
tcoll__19155 = G__19164;
continue;
}
} else
{return tcoll__19155;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__19158 = this;
if(cljs.core.truth_(this__19158.editable_QMARK_))
{this__19158.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__19158.len,2),this__19158.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__19159 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__19160 = this;
if(cljs.core.truth_(this__19160.editable_QMARK_))
{var idx__19161 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__19161 === -1))
{return not_found;
} else
{return (this__19160.arr[(idx__19161 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__19162 = this;
if(cljs.core.truth_(this__19162.editable_QMARK_))
{return cljs.core.quot.call(null,this__19162.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__19167 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__19168 = 0;
while(true){
if((i__19168 < len))
{{
var G__19169 = cljs.core.assoc_BANG_.call(null,out__19167,(arr[i__19168]),(arr[(i__19168 + 1)]));
var G__19170 = (i__19168 + 2);
out__19167 = G__19169;
i__19168 = G__19170;
continue;
}
} else
{return out__19167;
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
var G__19175__19176 = arr.slice();
(G__19175__19176[i] = a);
return G__19175__19176;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__19177__19178 = arr.slice();
(G__19177__19178[i] = a);
(G__19177__19178[j] = b);
return G__19177__19178;
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
var new_arr__19180 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__19180,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__19180,(2 * i),(new_arr__19180.length - (2 * i)));
return new_arr__19180;
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
var editable__19183 = inode.ensure_editable(edit);
(editable__19183.arr[i] = a);
return editable__19183;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__19184 = inode.ensure_editable(edit);
(editable__19184.arr[i] = a);
(editable__19184.arr[j] = b);
return editable__19184;
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
var len__19191 = arr.length;
var i__19192 = 0;
var init__19193 = init;
while(true){
if((i__19192 < len__19191))
{var init__19196 = (function (){var k__19194 = (arr[i__19192]);
if(!((k__19194 == null)))
{return f.call(null,init__19193,k__19194,(arr[(i__19192 + 1)]));
} else
{var node__19195 = (arr[(i__19192 + 1)]);
if(!((node__19195 == null)))
{return node__19195.kv_reduce(f,init__19193);
} else
{return init__19193;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__19196))
{return cljs.core.deref.call(null,init__19196);
} else
{{
var G__19197 = (i__19192 + 2);
var G__19198 = init__19196;
i__19192 = G__19197;
init__19193 = G__19198;
continue;
}
}
} else
{return init__19193;
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
var this__19199 = this;
var inode__19200 = this;
if((this__19199.bitmap === bit))
{return null;
} else
{var editable__19201 = inode__19200.ensure_editable(e);
var earr__19202 = editable__19201.arr;
var len__19203 = earr__19202.length;
editable__19201.bitmap = (bit ^ editable__19201.bitmap);
cljs.core.array_copy.call(null,earr__19202,(2 * (i + 1)),earr__19202,(2 * i),(len__19203 - (2 * (i + 1))));
(earr__19202[(len__19203 - 2)] = null);
(earr__19202[(len__19203 - 1)] = null);
return editable__19201;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__19204 = this;
var inode__19205 = this;
var bit__19206 = (1 << ((hash >>> shift) & 0x01f));
var idx__19207 = cljs.core.bitmap_indexed_node_index.call(null,this__19204.bitmap,bit__19206);
if(((this__19204.bitmap & bit__19206) === 0))
{var n__19208 = cljs.core.bit_count.call(null,this__19204.bitmap);
if(((2 * n__19208) < this__19204.arr.length))
{var editable__19209 = inode__19205.ensure_editable(edit);
var earr__19210 = editable__19209.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__19210,(2 * idx__19207),earr__19210,(2 * (idx__19207 + 1)),(2 * (n__19208 - idx__19207)));
(earr__19210[(2 * idx__19207)] = key);
(earr__19210[((2 * idx__19207) + 1)] = val);
editable__19209.bitmap = (editable__19209.bitmap | bit__19206);
return editable__19209;
} else
{if((n__19208 >= 16))
{var nodes__19211 = cljs.core.make_array.call(null,32);
var jdx__19212 = ((hash >>> shift) & 0x01f);
(nodes__19211[jdx__19212] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__19213 = 0;
var j__19214 = 0;
while(true){
if((i__19213 < 32))
{if((((this__19204.bitmap >>> i__19213) & 1) === 0))
{{
var G__19267 = (i__19213 + 1);
var G__19268 = j__19214;
i__19213 = G__19267;
j__19214 = G__19268;
continue;
}
} else
{(nodes__19211[i__19213] = ((!(((this__19204.arr[j__19214]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__19204.arr[j__19214])),(this__19204.arr[j__19214]),(this__19204.arr[(j__19214 + 1)]),added_leaf_QMARK_):(this__19204.arr[(j__19214 + 1)])));
{
var G__19269 = (i__19213 + 1);
var G__19270 = (j__19214 + 2);
i__19213 = G__19269;
j__19214 = G__19270;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__19208 + 1),nodes__19211));
} else
{if("\uFDD0'else")
{var new_arr__19215 = cljs.core.make_array.call(null,(2 * (n__19208 + 4)));
cljs.core.array_copy.call(null,this__19204.arr,0,new_arr__19215,0,(2 * idx__19207));
(new_arr__19215[(2 * idx__19207)] = key);
(new_arr__19215[((2 * idx__19207) + 1)] = val);
cljs.core.array_copy.call(null,this__19204.arr,(2 * idx__19207),new_arr__19215,(2 * (idx__19207 + 1)),(2 * (n__19208 - idx__19207)));
added_leaf_QMARK_.val = true;
var editable__19216 = inode__19205.ensure_editable(edit);
editable__19216.arr = new_arr__19215;
editable__19216.bitmap = (editable__19216.bitmap | bit__19206);
return editable__19216;
} else
{return null;
}
}
}
} else
{var key_or_nil__19217 = (this__19204.arr[(2 * idx__19207)]);
var val_or_node__19218 = (this__19204.arr[((2 * idx__19207) + 1)]);
if((key_or_nil__19217 == null))
{var n__19219 = val_or_node__19218.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__19219 === val_or_node__19218))
{return inode__19205;
} else
{return cljs.core.edit_and_set.call(null,inode__19205,edit,((2 * idx__19207) + 1),n__19219);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__19217))
{if((val === val_or_node__19218))
{return inode__19205;
} else
{return cljs.core.edit_and_set.call(null,inode__19205,edit,((2 * idx__19207) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__19205,edit,(2 * idx__19207),null,((2 * idx__19207) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__19217,val_or_node__19218,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__19220 = this;
var inode__19221 = this;
return cljs.core.create_inode_seq.call(null,this__19220.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__19222 = this;
var inode__19223 = this;
var bit__19224 = (1 << ((hash >>> shift) & 0x01f));
if(((this__19222.bitmap & bit__19224) === 0))
{return inode__19223;
} else
{var idx__19225 = cljs.core.bitmap_indexed_node_index.call(null,this__19222.bitmap,bit__19224);
var key_or_nil__19226 = (this__19222.arr[(2 * idx__19225)]);
var val_or_node__19227 = (this__19222.arr[((2 * idx__19225) + 1)]);
if((key_or_nil__19226 == null))
{var n__19228 = val_or_node__19227.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__19228 === val_or_node__19227))
{return inode__19223;
} else
{if(!((n__19228 == null)))
{return cljs.core.edit_and_set.call(null,inode__19223,edit,((2 * idx__19225) + 1),n__19228);
} else
{if((this__19222.bitmap === bit__19224))
{return null;
} else
{if("\uFDD0'else")
{return inode__19223.edit_and_remove_pair(edit,bit__19224,idx__19225);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__19226))
{(removed_leaf_QMARK_[0] = true);
return inode__19223.edit_and_remove_pair(edit,bit__19224,idx__19225);
} else
{if("\uFDD0'else")
{return inode__19223;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__19229 = this;
var inode__19230 = this;
if((e === this__19229.edit))
{return inode__19230;
} else
{var n__19231 = cljs.core.bit_count.call(null,this__19229.bitmap);
var new_arr__19232 = cljs.core.make_array.call(null,(((n__19231 < 0))?4:(2 * (n__19231 + 1))));
cljs.core.array_copy.call(null,this__19229.arr,0,new_arr__19232,0,(2 * n__19231));
return (new cljs.core.BitmapIndexedNode(e,this__19229.bitmap,new_arr__19232));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__19233 = this;
var inode__19234 = this;
return cljs.core.inode_kv_reduce.call(null,this__19233.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__19235 = this;
var inode__19236 = this;
var bit__19237 = (1 << ((hash >>> shift) & 0x01f));
if(((this__19235.bitmap & bit__19237) === 0))
{return not_found;
} else
{var idx__19238 = cljs.core.bitmap_indexed_node_index.call(null,this__19235.bitmap,bit__19237);
var key_or_nil__19239 = (this__19235.arr[(2 * idx__19238)]);
var val_or_node__19240 = (this__19235.arr[((2 * idx__19238) + 1)]);
if((key_or_nil__19239 == null))
{return val_or_node__19240.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__19239))
{return cljs.core.PersistentVector.fromArray([key_or_nil__19239,val_or_node__19240], true);
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
var this__19241 = this;
var inode__19242 = this;
var bit__19243 = (1 << ((hash >>> shift) & 0x01f));
if(((this__19241.bitmap & bit__19243) === 0))
{return inode__19242;
} else
{var idx__19244 = cljs.core.bitmap_indexed_node_index.call(null,this__19241.bitmap,bit__19243);
var key_or_nil__19245 = (this__19241.arr[(2 * idx__19244)]);
var val_or_node__19246 = (this__19241.arr[((2 * idx__19244) + 1)]);
if((key_or_nil__19245 == null))
{var n__19247 = val_or_node__19246.inode_without((shift + 5),hash,key);
if((n__19247 === val_or_node__19246))
{return inode__19242;
} else
{if(!((n__19247 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__19241.bitmap,cljs.core.clone_and_set.call(null,this__19241.arr,((2 * idx__19244) + 1),n__19247)));
} else
{if((this__19241.bitmap === bit__19243))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__19241.bitmap ^ bit__19243),cljs.core.remove_pair.call(null,this__19241.arr,idx__19244)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__19245))
{return (new cljs.core.BitmapIndexedNode(null,(this__19241.bitmap ^ bit__19243),cljs.core.remove_pair.call(null,this__19241.arr,idx__19244)));
} else
{if("\uFDD0'else")
{return inode__19242;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__19248 = this;
var inode__19249 = this;
var bit__19250 = (1 << ((hash >>> shift) & 0x01f));
var idx__19251 = cljs.core.bitmap_indexed_node_index.call(null,this__19248.bitmap,bit__19250);
if(((this__19248.bitmap & bit__19250) === 0))
{var n__19252 = cljs.core.bit_count.call(null,this__19248.bitmap);
if((n__19252 >= 16))
{var nodes__19253 = cljs.core.make_array.call(null,32);
var jdx__19254 = ((hash >>> shift) & 0x01f);
(nodes__19253[jdx__19254] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__19255 = 0;
var j__19256 = 0;
while(true){
if((i__19255 < 32))
{if((((this__19248.bitmap >>> i__19255) & 1) === 0))
{{
var G__19271 = (i__19255 + 1);
var G__19272 = j__19256;
i__19255 = G__19271;
j__19256 = G__19272;
continue;
}
} else
{(nodes__19253[i__19255] = ((!(((this__19248.arr[j__19256]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__19248.arr[j__19256])),(this__19248.arr[j__19256]),(this__19248.arr[(j__19256 + 1)]),added_leaf_QMARK_):(this__19248.arr[(j__19256 + 1)])));
{
var G__19273 = (i__19255 + 1);
var G__19274 = (j__19256 + 2);
i__19255 = G__19273;
j__19256 = G__19274;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__19252 + 1),nodes__19253));
} else
{var new_arr__19257 = cljs.core.make_array.call(null,(2 * (n__19252 + 1)));
cljs.core.array_copy.call(null,this__19248.arr,0,new_arr__19257,0,(2 * idx__19251));
(new_arr__19257[(2 * idx__19251)] = key);
(new_arr__19257[((2 * idx__19251) + 1)] = val);
cljs.core.array_copy.call(null,this__19248.arr,(2 * idx__19251),new_arr__19257,(2 * (idx__19251 + 1)),(2 * (n__19252 - idx__19251)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__19248.bitmap | bit__19250),new_arr__19257));
}
} else
{var key_or_nil__19258 = (this__19248.arr[(2 * idx__19251)]);
var val_or_node__19259 = (this__19248.arr[((2 * idx__19251) + 1)]);
if((key_or_nil__19258 == null))
{var n__19260 = val_or_node__19259.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__19260 === val_or_node__19259))
{return inode__19249;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__19248.bitmap,cljs.core.clone_and_set.call(null,this__19248.arr,((2 * idx__19251) + 1),n__19260)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__19258))
{if((val === val_or_node__19259))
{return inode__19249;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__19248.bitmap,cljs.core.clone_and_set.call(null,this__19248.arr,((2 * idx__19251) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__19248.bitmap,cljs.core.clone_and_set.call(null,this__19248.arr,(2 * idx__19251),null,((2 * idx__19251) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__19258,val_or_node__19259,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__19261 = this;
var inode__19262 = this;
var bit__19263 = (1 << ((hash >>> shift) & 0x01f));
if(((this__19261.bitmap & bit__19263) === 0))
{return not_found;
} else
{var idx__19264 = cljs.core.bitmap_indexed_node_index.call(null,this__19261.bitmap,bit__19263);
var key_or_nil__19265 = (this__19261.arr[(2 * idx__19264)]);
var val_or_node__19266 = (this__19261.arr[((2 * idx__19264) + 1)]);
if((key_or_nil__19265 == null))
{return val_or_node__19266.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__19265))
{return val_or_node__19266;
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
var arr__19282 = array_node.arr;
var len__19283 = (2 * (array_node.cnt - 1));
var new_arr__19284 = cljs.core.make_array.call(null,len__19283);
var i__19285 = 0;
var j__19286 = 1;
var bitmap__19287 = 0;
while(true){
if((i__19285 < len__19283))
{if((function (){var and__3822__auto____19288 = !((i__19285 === idx));
if(and__3822__auto____19288)
{return !(((arr__19282[i__19285]) == null));
} else
{return and__3822__auto____19288;
}
})())
{(new_arr__19284[j__19286] = (arr__19282[i__19285]));
{
var G__19289 = (i__19285 + 1);
var G__19290 = (j__19286 + 2);
var G__19291 = (bitmap__19287 | (1 << i__19285));
i__19285 = G__19289;
j__19286 = G__19290;
bitmap__19287 = G__19291;
continue;
}
} else
{{
var G__19292 = (i__19285 + 1);
var G__19293 = j__19286;
var G__19294 = bitmap__19287;
i__19285 = G__19292;
j__19286 = G__19293;
bitmap__19287 = G__19294;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__19287,new_arr__19284));
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
var this__19295 = this;
var inode__19296 = this;
var idx__19297 = ((hash >>> shift) & 0x01f);
var node__19298 = (this__19295.arr[idx__19297]);
if((node__19298 == null))
{var editable__19299 = cljs.core.edit_and_set.call(null,inode__19296,edit,idx__19297,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__19299.cnt = (editable__19299.cnt + 1);
return editable__19299;
} else
{var n__19300 = node__19298.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__19300 === node__19298))
{return inode__19296;
} else
{return cljs.core.edit_and_set.call(null,inode__19296,edit,idx__19297,n__19300);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__19301 = this;
var inode__19302 = this;
return cljs.core.create_array_node_seq.call(null,this__19301.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__19303 = this;
var inode__19304 = this;
var idx__19305 = ((hash >>> shift) & 0x01f);
var node__19306 = (this__19303.arr[idx__19305]);
if((node__19306 == null))
{return inode__19304;
} else
{var n__19307 = node__19306.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__19307 === node__19306))
{return inode__19304;
} else
{if((n__19307 == null))
{if((this__19303.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__19304,edit,idx__19305);
} else
{var editable__19308 = cljs.core.edit_and_set.call(null,inode__19304,edit,idx__19305,n__19307);
editable__19308.cnt = (editable__19308.cnt - 1);
return editable__19308;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__19304,edit,idx__19305,n__19307);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__19309 = this;
var inode__19310 = this;
if((e === this__19309.edit))
{return inode__19310;
} else
{return (new cljs.core.ArrayNode(e,this__19309.cnt,this__19309.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__19311 = this;
var inode__19312 = this;
var len__19313 = this__19311.arr.length;
var i__19314 = 0;
var init__19315 = init;
while(true){
if((i__19314 < len__19313))
{var node__19316 = (this__19311.arr[i__19314]);
if(!((node__19316 == null)))
{var init__19317 = node__19316.kv_reduce(f,init__19315);
if(cljs.core.reduced_QMARK_.call(null,init__19317))
{return cljs.core.deref.call(null,init__19317);
} else
{{
var G__19336 = (i__19314 + 1);
var G__19337 = init__19317;
i__19314 = G__19336;
init__19315 = G__19337;
continue;
}
}
} else
{return null;
}
} else
{return init__19315;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__19318 = this;
var inode__19319 = this;
var idx__19320 = ((hash >>> shift) & 0x01f);
var node__19321 = (this__19318.arr[idx__19320]);
if(!((node__19321 == null)))
{return node__19321.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__19322 = this;
var inode__19323 = this;
var idx__19324 = ((hash >>> shift) & 0x01f);
var node__19325 = (this__19322.arr[idx__19324]);
if(!((node__19325 == null)))
{var n__19326 = node__19325.inode_without((shift + 5),hash,key);
if((n__19326 === node__19325))
{return inode__19323;
} else
{if((n__19326 == null))
{if((this__19322.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__19323,null,idx__19324);
} else
{return (new cljs.core.ArrayNode(null,(this__19322.cnt - 1),cljs.core.clone_and_set.call(null,this__19322.arr,idx__19324,n__19326)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__19322.cnt,cljs.core.clone_and_set.call(null,this__19322.arr,idx__19324,n__19326)));
} else
{return null;
}
}
}
} else
{return inode__19323;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__19327 = this;
var inode__19328 = this;
var idx__19329 = ((hash >>> shift) & 0x01f);
var node__19330 = (this__19327.arr[idx__19329]);
if((node__19330 == null))
{return (new cljs.core.ArrayNode(null,(this__19327.cnt + 1),cljs.core.clone_and_set.call(null,this__19327.arr,idx__19329,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__19331 = node__19330.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__19331 === node__19330))
{return inode__19328;
} else
{return (new cljs.core.ArrayNode(null,this__19327.cnt,cljs.core.clone_and_set.call(null,this__19327.arr,idx__19329,n__19331)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__19332 = this;
var inode__19333 = this;
var idx__19334 = ((hash >>> shift) & 0x01f);
var node__19335 = (this__19332.arr[idx__19334]);
if(!((node__19335 == null)))
{return node__19335.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__19340 = (2 * cnt);
var i__19341 = 0;
while(true){
if((i__19341 < lim__19340))
{if(cljs.core.key_test.call(null,key,(arr[i__19341])))
{return i__19341;
} else
{{
var G__19342 = (i__19341 + 2);
i__19341 = G__19342;
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
var this__19343 = this;
var inode__19344 = this;
if((hash === this__19343.collision_hash))
{var idx__19345 = cljs.core.hash_collision_node_find_index.call(null,this__19343.arr,this__19343.cnt,key);
if((idx__19345 === -1))
{if((this__19343.arr.length > (2 * this__19343.cnt)))
{var editable__19346 = cljs.core.edit_and_set.call(null,inode__19344,edit,(2 * this__19343.cnt),key,((2 * this__19343.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__19346.cnt = (editable__19346.cnt + 1);
return editable__19346;
} else
{var len__19347 = this__19343.arr.length;
var new_arr__19348 = cljs.core.make_array.call(null,(len__19347 + 2));
cljs.core.array_copy.call(null,this__19343.arr,0,new_arr__19348,0,len__19347);
(new_arr__19348[len__19347] = key);
(new_arr__19348[(len__19347 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__19344.ensure_editable_array(edit,(this__19343.cnt + 1),new_arr__19348);
}
} else
{if(((this__19343.arr[(idx__19345 + 1)]) === val))
{return inode__19344;
} else
{return cljs.core.edit_and_set.call(null,inode__19344,edit,(idx__19345 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__19343.collision_hash >>> shift) & 0x01f)),[null,inode__19344,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__19349 = this;
var inode__19350 = this;
return cljs.core.create_inode_seq.call(null,this__19349.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__19351 = this;
var inode__19352 = this;
var idx__19353 = cljs.core.hash_collision_node_find_index.call(null,this__19351.arr,this__19351.cnt,key);
if((idx__19353 === -1))
{return inode__19352;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__19351.cnt === 1))
{return null;
} else
{var editable__19354 = inode__19352.ensure_editable(edit);
var earr__19355 = editable__19354.arr;
(earr__19355[idx__19353] = (earr__19355[((2 * this__19351.cnt) - 2)]));
(earr__19355[(idx__19353 + 1)] = (earr__19355[((2 * this__19351.cnt) - 1)]));
(earr__19355[((2 * this__19351.cnt) - 1)] = null);
(earr__19355[((2 * this__19351.cnt) - 2)] = null);
editable__19354.cnt = (editable__19354.cnt - 1);
return editable__19354;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__19356 = this;
var inode__19357 = this;
if((e === this__19356.edit))
{return inode__19357;
} else
{var new_arr__19358 = cljs.core.make_array.call(null,(2 * (this__19356.cnt + 1)));
cljs.core.array_copy.call(null,this__19356.arr,0,new_arr__19358,0,(2 * this__19356.cnt));
return (new cljs.core.HashCollisionNode(e,this__19356.collision_hash,this__19356.cnt,new_arr__19358));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__19359 = this;
var inode__19360 = this;
return cljs.core.inode_kv_reduce.call(null,this__19359.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__19361 = this;
var inode__19362 = this;
var idx__19363 = cljs.core.hash_collision_node_find_index.call(null,this__19361.arr,this__19361.cnt,key);
if((idx__19363 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__19361.arr[idx__19363])))
{return cljs.core.PersistentVector.fromArray([(this__19361.arr[idx__19363]),(this__19361.arr[(idx__19363 + 1)])], true);
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
var this__19364 = this;
var inode__19365 = this;
var idx__19366 = cljs.core.hash_collision_node_find_index.call(null,this__19364.arr,this__19364.cnt,key);
if((idx__19366 === -1))
{return inode__19365;
} else
{if((this__19364.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__19364.collision_hash,(this__19364.cnt - 1),cljs.core.remove_pair.call(null,this__19364.arr,cljs.core.quot.call(null,idx__19366,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__19367 = this;
var inode__19368 = this;
if((hash === this__19367.collision_hash))
{var idx__19369 = cljs.core.hash_collision_node_find_index.call(null,this__19367.arr,this__19367.cnt,key);
if((idx__19369 === -1))
{var len__19370 = this__19367.arr.length;
var new_arr__19371 = cljs.core.make_array.call(null,(len__19370 + 2));
cljs.core.array_copy.call(null,this__19367.arr,0,new_arr__19371,0,len__19370);
(new_arr__19371[len__19370] = key);
(new_arr__19371[(len__19370 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__19367.collision_hash,(this__19367.cnt + 1),new_arr__19371));
} else
{if(cljs.core._EQ_.call(null,(this__19367.arr[idx__19369]),val))
{return inode__19368;
} else
{return (new cljs.core.HashCollisionNode(null,this__19367.collision_hash,this__19367.cnt,cljs.core.clone_and_set.call(null,this__19367.arr,(idx__19369 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__19367.collision_hash >>> shift) & 0x01f)),[null,inode__19368])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__19372 = this;
var inode__19373 = this;
var idx__19374 = cljs.core.hash_collision_node_find_index.call(null,this__19372.arr,this__19372.cnt,key);
if((idx__19374 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__19372.arr[idx__19374])))
{return (this__19372.arr[(idx__19374 + 1)]);
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
var this__19375 = this;
var inode__19376 = this;
if((e === this__19375.edit))
{this__19375.arr = array;
this__19375.cnt = count;
return inode__19376;
} else
{return (new cljs.core.HashCollisionNode(this__19375.edit,this__19375.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__19381 = cljs.core.hash.call(null,key1);
if((key1hash__19381 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__19381,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___19382 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__19381,key1,val1,added_leaf_QMARK___19382).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___19382);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__19383 = cljs.core.hash.call(null,key1);
if((key1hash__19383 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__19383,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___19384 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__19383,key1,val1,added_leaf_QMARK___19384).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___19384);
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
var this__19385 = this;
var h__2236__auto____19386 = this__19385.__hash;
if(!((h__2236__auto____19386 == null)))
{return h__2236__auto____19386;
} else
{var h__2236__auto____19387 = cljs.core.hash_coll.call(null,coll);
this__19385.__hash = h__2236__auto____19387;
return h__2236__auto____19387;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19388 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__19389 = this;
var this__19390 = this;
return cljs.core.pr_str.call(null,this__19390);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__19391 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__19392 = this;
if((this__19392.s == null))
{return cljs.core.PersistentVector.fromArray([(this__19392.nodes[this__19392.i]),(this__19392.nodes[(this__19392.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__19392.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__19393 = this;
if((this__19393.s == null))
{return cljs.core.create_inode_seq.call(null,this__19393.nodes,(this__19393.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__19393.nodes,this__19393.i,cljs.core.next.call(null,this__19393.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19394 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19395 = this;
return (new cljs.core.NodeSeq(meta,this__19395.nodes,this__19395.i,this__19395.s,this__19395.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19396 = this;
return this__19396.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19397 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__19397.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__19404 = nodes.length;
var j__19405 = i;
while(true){
if((j__19405 < len__19404))
{if(!(((nodes[j__19405]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__19405,null,null));
} else
{var temp__3971__auto____19406 = (nodes[(j__19405 + 1)]);
if(cljs.core.truth_(temp__3971__auto____19406))
{var node__19407 = temp__3971__auto____19406;
var temp__3971__auto____19408 = node__19407.inode_seq();
if(cljs.core.truth_(temp__3971__auto____19408))
{var node_seq__19409 = temp__3971__auto____19408;
return (new cljs.core.NodeSeq(null,nodes,(j__19405 + 2),node_seq__19409,null));
} else
{{
var G__19410 = (j__19405 + 2);
j__19405 = G__19410;
continue;
}
}
} else
{{
var G__19411 = (j__19405 + 2);
j__19405 = G__19411;
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
var this__19412 = this;
var h__2236__auto____19413 = this__19412.__hash;
if(!((h__2236__auto____19413 == null)))
{return h__2236__auto____19413;
} else
{var h__2236__auto____19414 = cljs.core.hash_coll.call(null,coll);
this__19412.__hash = h__2236__auto____19414;
return h__2236__auto____19414;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19415 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__19416 = this;
var this__19417 = this;
return cljs.core.pr_str.call(null,this__19417);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__19418 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__19419 = this;
return cljs.core.first.call(null,this__19419.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__19420 = this;
return cljs.core.create_array_node_seq.call(null,null,this__19420.nodes,this__19420.i,cljs.core.next.call(null,this__19420.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19421 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19422 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__19422.nodes,this__19422.i,this__19422.s,this__19422.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19423 = this;
return this__19423.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19424 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__19424.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__19431 = nodes.length;
var j__19432 = i;
while(true){
if((j__19432 < len__19431))
{var temp__3971__auto____19433 = (nodes[j__19432]);
if(cljs.core.truth_(temp__3971__auto____19433))
{var nj__19434 = temp__3971__auto____19433;
var temp__3971__auto____19435 = nj__19434.inode_seq();
if(cljs.core.truth_(temp__3971__auto____19435))
{var ns__19436 = temp__3971__auto____19435;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__19432 + 1),ns__19436,null));
} else
{{
var G__19437 = (j__19432 + 1);
j__19432 = G__19437;
continue;
}
}
} else
{{
var G__19438 = (j__19432 + 1);
j__19432 = G__19438;
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
var this__19441 = this;
return (new cljs.core.TransientHashMap({},this__19441.root,this__19441.cnt,this__19441.has_nil_QMARK_,this__19441.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__19442 = this;
var h__2236__auto____19443 = this__19442.__hash;
if(!((h__2236__auto____19443 == null)))
{return h__2236__auto____19443;
} else
{var h__2236__auto____19444 = cljs.core.hash_imap.call(null,coll);
this__19442.__hash = h__2236__auto____19444;
return h__2236__auto____19444;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__19445 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__19446 = this;
if((k == null))
{if(this__19446.has_nil_QMARK_)
{return this__19446.nil_val;
} else
{return not_found;
}
} else
{if((this__19446.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__19446.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__19447 = this;
if((k == null))
{if((function (){var and__3822__auto____19448 = this__19447.has_nil_QMARK_;
if(and__3822__auto____19448)
{return (v === this__19447.nil_val);
} else
{return and__3822__auto____19448;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__19447.meta,((this__19447.has_nil_QMARK_)?this__19447.cnt:(this__19447.cnt + 1)),this__19447.root,true,v,null));
}
} else
{var added_leaf_QMARK___19449 = (new cljs.core.Box(false));
var new_root__19450 = (((this__19447.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__19447.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___19449);
if((new_root__19450 === this__19447.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__19447.meta,((added_leaf_QMARK___19449.val)?(this__19447.cnt + 1):this__19447.cnt),new_root__19450,this__19447.has_nil_QMARK_,this__19447.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__19451 = this;
if((k == null))
{return this__19451.has_nil_QMARK_;
} else
{if((this__19451.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__19451.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__19474 = null;
var G__19474__2 = (function (this_sym19452,k){
var this__19454 = this;
var this_sym19452__19455 = this;
var coll__19456 = this_sym19452__19455;
return coll__19456.cljs$core$ILookup$_lookup$arity$2(coll__19456,k);
});
var G__19474__3 = (function (this_sym19453,k,not_found){
var this__19454 = this;
var this_sym19453__19457 = this;
var coll__19458 = this_sym19453__19457;
return coll__19458.cljs$core$ILookup$_lookup$arity$3(coll__19458,k,not_found);
});
G__19474 = function(this_sym19453,k,not_found){
switch(arguments.length){
case 2:
return G__19474__2.call(this,this_sym19453,k);
case 3:
return G__19474__3.call(this,this_sym19453,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19474;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym19439,args19440){
var this__19459 = this;
return this_sym19439.call.apply(this_sym19439,[this_sym19439].concat(args19440.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__19460 = this;
var init__19461 = ((this__19460.has_nil_QMARK_)?f.call(null,init,null,this__19460.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__19461))
{return cljs.core.deref.call(null,init__19461);
} else
{if(!((this__19460.root == null)))
{return this__19460.root.kv_reduce(f,init__19461);
} else
{if("\uFDD0'else")
{return init__19461;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__19462 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__19463 = this;
var this__19464 = this;
return cljs.core.pr_str.call(null,this__19464);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19465 = this;
if((this__19465.cnt > 0))
{var s__19466 = ((!((this__19465.root == null)))?this__19465.root.inode_seq():null);
if(this__19465.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__19465.nil_val], true),s__19466);
} else
{return s__19466;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19467 = this;
return this__19467.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19468 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19469 = this;
return (new cljs.core.PersistentHashMap(meta,this__19469.cnt,this__19469.root,this__19469.has_nil_QMARK_,this__19469.nil_val,this__19469.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19470 = this;
return this__19470.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19471 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__19471.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__19472 = this;
if((k == null))
{if(this__19472.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__19472.meta,(this__19472.cnt - 1),this__19472.root,false,null,null));
} else
{return coll;
}
} else
{if((this__19472.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__19473 = this__19472.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__19473 === this__19472.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__19472.meta,(this__19472.cnt - 1),new_root__19473,this__19472.has_nil_QMARK_,this__19472.nil_val,null));
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
var len__19475 = ks.length;
var i__19476 = 0;
var out__19477 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__19476 < len__19475))
{{
var G__19478 = (i__19476 + 1);
var G__19479 = cljs.core.assoc_BANG_.call(null,out__19477,(ks[i__19476]),(vs[i__19476]));
i__19476 = G__19478;
out__19477 = G__19479;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__19477);
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
var this__19480 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__19481 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__19482 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__19483 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__19484 = this;
if((k == null))
{if(this__19484.has_nil_QMARK_)
{return this__19484.nil_val;
} else
{return null;
}
} else
{if((this__19484.root == null))
{return null;
} else
{return this__19484.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__19485 = this;
if((k == null))
{if(this__19485.has_nil_QMARK_)
{return this__19485.nil_val;
} else
{return not_found;
}
} else
{if((this__19485.root == null))
{return not_found;
} else
{return this__19485.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19486 = this;
if(this__19486.edit)
{return this__19486.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__19487 = this;
var tcoll__19488 = this;
if(this__19487.edit)
{if((function (){var G__19489__19490 = o;
if(G__19489__19490)
{if((function (){var or__3824__auto____19491 = (G__19489__19490.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____19491)
{return or__3824__auto____19491;
} else
{return G__19489__19490.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__19489__19490.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__19489__19490);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__19489__19490);
}
})())
{return tcoll__19488.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__19492 = cljs.core.seq.call(null,o);
var tcoll__19493 = tcoll__19488;
while(true){
var temp__3971__auto____19494 = cljs.core.first.call(null,es__19492);
if(cljs.core.truth_(temp__3971__auto____19494))
{var e__19495 = temp__3971__auto____19494;
{
var G__19506 = cljs.core.next.call(null,es__19492);
var G__19507 = tcoll__19493.assoc_BANG_(cljs.core.key.call(null,e__19495),cljs.core.val.call(null,e__19495));
es__19492 = G__19506;
tcoll__19493 = G__19507;
continue;
}
} else
{return tcoll__19493;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__19496 = this;
var tcoll__19497 = this;
if(this__19496.edit)
{if((k == null))
{if((this__19496.nil_val === v))
{} else
{this__19496.nil_val = v;
}
if(this__19496.has_nil_QMARK_)
{} else
{this__19496.count = (this__19496.count + 1);
this__19496.has_nil_QMARK_ = true;
}
return tcoll__19497;
} else
{var added_leaf_QMARK___19498 = (new cljs.core.Box(false));
var node__19499 = (((this__19496.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__19496.root).inode_assoc_BANG_(this__19496.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___19498);
if((node__19499 === this__19496.root))
{} else
{this__19496.root = node__19499;
}
if(added_leaf_QMARK___19498.val)
{this__19496.count = (this__19496.count + 1);
} else
{}
return tcoll__19497;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__19500 = this;
var tcoll__19501 = this;
if(this__19500.edit)
{if((k == null))
{if(this__19500.has_nil_QMARK_)
{this__19500.has_nil_QMARK_ = false;
this__19500.nil_val = null;
this__19500.count = (this__19500.count - 1);
return tcoll__19501;
} else
{return tcoll__19501;
}
} else
{if((this__19500.root == null))
{return tcoll__19501;
} else
{var removed_leaf_QMARK___19502 = (new cljs.core.Box(false));
var node__19503 = this__19500.root.inode_without_BANG_(this__19500.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___19502);
if((node__19503 === this__19500.root))
{} else
{this__19500.root = node__19503;
}
if(cljs.core.truth_((removed_leaf_QMARK___19502[0])))
{this__19500.count = (this__19500.count - 1);
} else
{}
return tcoll__19501;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__19504 = this;
var tcoll__19505 = this;
if(this__19504.edit)
{this__19504.edit = null;
return (new cljs.core.PersistentHashMap(null,this__19504.count,this__19504.root,this__19504.has_nil_QMARK_,this__19504.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__19510 = node;
var stack__19511 = stack;
while(true){
if(!((t__19510 == null)))
{{
var G__19512 = ((ascending_QMARK_)?t__19510.left:t__19510.right);
var G__19513 = cljs.core.conj.call(null,stack__19511,t__19510);
t__19510 = G__19512;
stack__19511 = G__19513;
continue;
}
} else
{return stack__19511;
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
var this__19514 = this;
var h__2236__auto____19515 = this__19514.__hash;
if(!((h__2236__auto____19515 == null)))
{return h__2236__auto____19515;
} else
{var h__2236__auto____19516 = cljs.core.hash_coll.call(null,coll);
this__19514.__hash = h__2236__auto____19516;
return h__2236__auto____19516;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19517 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__19518 = this;
var this__19519 = this;
return cljs.core.pr_str.call(null,this__19519);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__19520 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19521 = this;
if((this__19521.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__19521.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__19522 = this;
return cljs.core.peek.call(null,this__19522.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__19523 = this;
var t__19524 = cljs.core.first.call(null,this__19523.stack);
var next_stack__19525 = cljs.core.tree_map_seq_push.call(null,((this__19523.ascending_QMARK_)?t__19524.right:t__19524.left),cljs.core.next.call(null,this__19523.stack),this__19523.ascending_QMARK_);
if(!((next_stack__19525 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__19525,this__19523.ascending_QMARK_,(this__19523.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19526 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19527 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__19527.stack,this__19527.ascending_QMARK_,this__19527.cnt,this__19527.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19528 = this;
return this__19528.meta;
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
{if((function (){var and__3822__auto____19530 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____19530)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____19530;
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
{if((function (){var and__3822__auto____19532 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____19532)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____19532;
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
var init__19536 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__19536))
{return cljs.core.deref.call(null,init__19536);
} else
{var init__19537 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__19536):init__19536);
if(cljs.core.reduced_QMARK_.call(null,init__19537))
{return cljs.core.deref.call(null,init__19537);
} else
{var init__19538 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__19537):init__19537);
if(cljs.core.reduced_QMARK_.call(null,init__19538))
{return cljs.core.deref.call(null,init__19538);
} else
{return init__19538;
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
var this__19541 = this;
var h__2236__auto____19542 = this__19541.__hash;
if(!((h__2236__auto____19542 == null)))
{return h__2236__auto____19542;
} else
{var h__2236__auto____19543 = cljs.core.hash_coll.call(null,coll);
this__19541.__hash = h__2236__auto____19543;
return h__2236__auto____19543;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__19544 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__19545 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__19546 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__19546.key,this__19546.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__19594 = null;
var G__19594__2 = (function (this_sym19547,k){
var this__19549 = this;
var this_sym19547__19550 = this;
var node__19551 = this_sym19547__19550;
return node__19551.cljs$core$ILookup$_lookup$arity$2(node__19551,k);
});
var G__19594__3 = (function (this_sym19548,k,not_found){
var this__19549 = this;
var this_sym19548__19552 = this;
var node__19553 = this_sym19548__19552;
return node__19553.cljs$core$ILookup$_lookup$arity$3(node__19553,k,not_found);
});
G__19594 = function(this_sym19548,k,not_found){
switch(arguments.length){
case 2:
return G__19594__2.call(this,this_sym19548,k);
case 3:
return G__19594__3.call(this,this_sym19548,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19594;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym19539,args19540){
var this__19554 = this;
return this_sym19539.call.apply(this_sym19539,[this_sym19539].concat(args19540.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__19555 = this;
return cljs.core.PersistentVector.fromArray([this__19555.key,this__19555.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__19556 = this;
return this__19556.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__19557 = this;
return this__19557.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__19558 = this;
var node__19559 = this;
return ins.balance_right(node__19559);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__19560 = this;
var node__19561 = this;
return (new cljs.core.RedNode(this__19560.key,this__19560.val,this__19560.left,this__19560.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__19562 = this;
var node__19563 = this;
return cljs.core.balance_right_del.call(null,this__19562.key,this__19562.val,this__19562.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__19564 = this;
var node__19565 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__19566 = this;
var node__19567 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__19567,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__19568 = this;
var node__19569 = this;
return cljs.core.balance_left_del.call(null,this__19568.key,this__19568.val,del,this__19568.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__19570 = this;
var node__19571 = this;
return ins.balance_left(node__19571);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__19572 = this;
var node__19573 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__19573,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__19595 = null;
var G__19595__0 = (function (){
var this__19574 = this;
var this__19576 = this;
return cljs.core.pr_str.call(null,this__19576);
});
G__19595 = function(){
switch(arguments.length){
case 0:
return G__19595__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19595;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__19577 = this;
var node__19578 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__19578,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__19579 = this;
var node__19580 = this;
return node__19580;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__19581 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__19582 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__19583 = this;
return cljs.core.list.call(null,this__19583.key,this__19583.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__19584 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__19585 = this;
return this__19585.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__19586 = this;
return cljs.core.PersistentVector.fromArray([this__19586.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__19587 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__19587.key,this__19587.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19588 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__19589 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__19589.key,this__19589.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__19590 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__19591 = this;
if((n === 0))
{return this__19591.key;
} else
{if((n === 1))
{return this__19591.val;
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
var this__19592 = this;
if((n === 0))
{return this__19592.key;
} else
{if((n === 1))
{return this__19592.val;
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
var this__19593 = this;
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
var this__19598 = this;
var h__2236__auto____19599 = this__19598.__hash;
if(!((h__2236__auto____19599 == null)))
{return h__2236__auto____19599;
} else
{var h__2236__auto____19600 = cljs.core.hash_coll.call(null,coll);
this__19598.__hash = h__2236__auto____19600;
return h__2236__auto____19600;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__19601 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__19602 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__19603 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__19603.key,this__19603.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__19651 = null;
var G__19651__2 = (function (this_sym19604,k){
var this__19606 = this;
var this_sym19604__19607 = this;
var node__19608 = this_sym19604__19607;
return node__19608.cljs$core$ILookup$_lookup$arity$2(node__19608,k);
});
var G__19651__3 = (function (this_sym19605,k,not_found){
var this__19606 = this;
var this_sym19605__19609 = this;
var node__19610 = this_sym19605__19609;
return node__19610.cljs$core$ILookup$_lookup$arity$3(node__19610,k,not_found);
});
G__19651 = function(this_sym19605,k,not_found){
switch(arguments.length){
case 2:
return G__19651__2.call(this,this_sym19605,k);
case 3:
return G__19651__3.call(this,this_sym19605,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19651;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym19596,args19597){
var this__19611 = this;
return this_sym19596.call.apply(this_sym19596,[this_sym19596].concat(args19597.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__19612 = this;
return cljs.core.PersistentVector.fromArray([this__19612.key,this__19612.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__19613 = this;
return this__19613.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__19614 = this;
return this__19614.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__19615 = this;
var node__19616 = this;
return (new cljs.core.RedNode(this__19615.key,this__19615.val,this__19615.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__19617 = this;
var node__19618 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__19619 = this;
var node__19620 = this;
return (new cljs.core.RedNode(this__19619.key,this__19619.val,this__19619.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__19621 = this;
var node__19622 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__19623 = this;
var node__19624 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__19624,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__19625 = this;
var node__19626 = this;
return (new cljs.core.RedNode(this__19625.key,this__19625.val,del,this__19625.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__19627 = this;
var node__19628 = this;
return (new cljs.core.RedNode(this__19627.key,this__19627.val,ins,this__19627.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__19629 = this;
var node__19630 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__19629.left))
{return (new cljs.core.RedNode(this__19629.key,this__19629.val,this__19629.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__19629.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__19629.right))
{return (new cljs.core.RedNode(this__19629.right.key,this__19629.right.val,(new cljs.core.BlackNode(this__19629.key,this__19629.val,this__19629.left,this__19629.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__19629.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__19630,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__19652 = null;
var G__19652__0 = (function (){
var this__19631 = this;
var this__19633 = this;
return cljs.core.pr_str.call(null,this__19633);
});
G__19652 = function(){
switch(arguments.length){
case 0:
return G__19652__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19652;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__19634 = this;
var node__19635 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__19634.right))
{return (new cljs.core.RedNode(this__19634.key,this__19634.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__19634.left,null)),this__19634.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__19634.left))
{return (new cljs.core.RedNode(this__19634.left.key,this__19634.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__19634.left.left,null)),(new cljs.core.BlackNode(this__19634.key,this__19634.val,this__19634.left.right,this__19634.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__19635,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__19636 = this;
var node__19637 = this;
return (new cljs.core.BlackNode(this__19636.key,this__19636.val,this__19636.left,this__19636.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__19638 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__19639 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__19640 = this;
return cljs.core.list.call(null,this__19640.key,this__19640.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__19641 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__19642 = this;
return this__19642.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__19643 = this;
return cljs.core.PersistentVector.fromArray([this__19643.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__19644 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__19644.key,this__19644.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19645 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__19646 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__19646.key,this__19646.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__19647 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__19648 = this;
if((n === 0))
{return this__19648.key;
} else
{if((n === 1))
{return this__19648.val;
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
var this__19649 = this;
if((n === 0))
{return this__19649.key;
} else
{if((n === 1))
{return this__19649.val;
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
var this__19650 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__19656 = comp.call(null,k,tree.key);
if((c__19656 === 0))
{(found[0] = tree);
return null;
} else
{if((c__19656 < 0))
{var ins__19657 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__19657 == null)))
{return tree.add_left(ins__19657);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__19658 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__19658 == null)))
{return tree.add_right(ins__19658);
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
{var app__19661 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__19661))
{return (new cljs.core.RedNode(app__19661.key,app__19661.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__19661.left,null)),(new cljs.core.RedNode(right.key,right.val,app__19661.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__19661,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__19662 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__19662))
{return (new cljs.core.RedNode(app__19662.key,app__19662.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__19662.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__19662.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__19662,right.right,null)));
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
{var c__19668 = comp.call(null,k,tree.key);
if((c__19668 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__19668 < 0))
{var del__19669 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____19670 = !((del__19669 == null));
if(or__3824__auto____19670)
{return or__3824__auto____19670;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__19669,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__19669,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__19671 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____19672 = !((del__19671 == null));
if(or__3824__auto____19672)
{return or__3824__auto____19672;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__19671);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__19671,null));
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
var tk__19675 = tree.key;
var c__19676 = comp.call(null,k,tk__19675);
if((c__19676 === 0))
{return tree.replace(tk__19675,v,tree.left,tree.right);
} else
{if((c__19676 < 0))
{return tree.replace(tk__19675,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__19675,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__19679 = this;
var h__2236__auto____19680 = this__19679.__hash;
if(!((h__2236__auto____19680 == null)))
{return h__2236__auto____19680;
} else
{var h__2236__auto____19681 = cljs.core.hash_imap.call(null,coll);
this__19679.__hash = h__2236__auto____19681;
return h__2236__auto____19681;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__19682 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__19683 = this;
var n__19684 = coll.entry_at(k);
if(!((n__19684 == null)))
{return n__19684.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__19685 = this;
var found__19686 = [null];
var t__19687 = cljs.core.tree_map_add.call(null,this__19685.comp,this__19685.tree,k,v,found__19686);
if((t__19687 == null))
{var found_node__19688 = cljs.core.nth.call(null,found__19686,0);
if(cljs.core._EQ_.call(null,v,found_node__19688.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__19685.comp,cljs.core.tree_map_replace.call(null,this__19685.comp,this__19685.tree,k,v),this__19685.cnt,this__19685.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__19685.comp,t__19687.blacken(),(this__19685.cnt + 1),this__19685.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__19689 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__19723 = null;
var G__19723__2 = (function (this_sym19690,k){
var this__19692 = this;
var this_sym19690__19693 = this;
var coll__19694 = this_sym19690__19693;
return coll__19694.cljs$core$ILookup$_lookup$arity$2(coll__19694,k);
});
var G__19723__3 = (function (this_sym19691,k,not_found){
var this__19692 = this;
var this_sym19691__19695 = this;
var coll__19696 = this_sym19691__19695;
return coll__19696.cljs$core$ILookup$_lookup$arity$3(coll__19696,k,not_found);
});
G__19723 = function(this_sym19691,k,not_found){
switch(arguments.length){
case 2:
return G__19723__2.call(this,this_sym19691,k);
case 3:
return G__19723__3.call(this,this_sym19691,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19723;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym19677,args19678){
var this__19697 = this;
return this_sym19677.call.apply(this_sym19677,[this_sym19677].concat(args19678.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__19698 = this;
if(!((this__19698.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__19698.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__19699 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__19700 = this;
if((this__19700.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__19700.tree,false,this__19700.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__19701 = this;
var this__19702 = this;
return cljs.core.pr_str.call(null,this__19702);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__19703 = this;
var coll__19704 = this;
var t__19705 = this__19703.tree;
while(true){
if(!((t__19705 == null)))
{var c__19706 = this__19703.comp.call(null,k,t__19705.key);
if((c__19706 === 0))
{return t__19705;
} else
{if((c__19706 < 0))
{{
var G__19724 = t__19705.left;
t__19705 = G__19724;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__19725 = t__19705.right;
t__19705 = G__19725;
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
var this__19707 = this;
if((this__19707.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__19707.tree,ascending_QMARK_,this__19707.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__19708 = this;
if((this__19708.cnt > 0))
{var stack__19709 = null;
var t__19710 = this__19708.tree;
while(true){
if(!((t__19710 == null)))
{var c__19711 = this__19708.comp.call(null,k,t__19710.key);
if((c__19711 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__19709,t__19710),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__19711 < 0))
{{
var G__19726 = cljs.core.conj.call(null,stack__19709,t__19710);
var G__19727 = t__19710.left;
stack__19709 = G__19726;
t__19710 = G__19727;
continue;
}
} else
{{
var G__19728 = stack__19709;
var G__19729 = t__19710.right;
stack__19709 = G__19728;
t__19710 = G__19729;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__19711 > 0))
{{
var G__19730 = cljs.core.conj.call(null,stack__19709,t__19710);
var G__19731 = t__19710.right;
stack__19709 = G__19730;
t__19710 = G__19731;
continue;
}
} else
{{
var G__19732 = stack__19709;
var G__19733 = t__19710.left;
stack__19709 = G__19732;
t__19710 = G__19733;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__19709 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__19709,ascending_QMARK_,-1,null));
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
var this__19712 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__19713 = this;
return this__19713.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19714 = this;
if((this__19714.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__19714.tree,true,this__19714.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19715 = this;
return this__19715.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19716 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19717 = this;
return (new cljs.core.PersistentTreeMap(this__19717.comp,this__19717.tree,this__19717.cnt,meta,this__19717.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19718 = this;
return this__19718.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19719 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__19719.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__19720 = this;
var found__19721 = [null];
var t__19722 = cljs.core.tree_map_remove.call(null,this__19720.comp,this__19720.tree,k,found__19721);
if((t__19722 == null))
{if((cljs.core.nth.call(null,found__19721,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__19720.comp,null,0,this__19720.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__19720.comp,t__19722.blacken(),(this__19720.cnt - 1),this__19720.meta,null));
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
var in__19736 = cljs.core.seq.call(null,keyvals);
var out__19737 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__19736)
{{
var G__19738 = cljs.core.nnext.call(null,in__19736);
var G__19739 = cljs.core.assoc_BANG_.call(null,out__19737,cljs.core.first.call(null,in__19736),cljs.core.second.call(null,in__19736));
in__19736 = G__19738;
out__19737 = G__19739;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__19737);
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
hash_map.cljs$lang$applyTo = (function (arglist__19740){
var keyvals = cljs.core.seq(arglist__19740);;
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
array_map.cljs$lang$applyTo = (function (arglist__19741){
var keyvals = cljs.core.seq(arglist__19741);;
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
var in__19744 = cljs.core.seq.call(null,keyvals);
var out__19745 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__19744)
{{
var G__19746 = cljs.core.nnext.call(null,in__19744);
var G__19747 = cljs.core.assoc.call(null,out__19745,cljs.core.first.call(null,in__19744),cljs.core.second.call(null,in__19744));
in__19744 = G__19746;
out__19745 = G__19747;
continue;
}
} else
{return out__19745;
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
sorted_map.cljs$lang$applyTo = (function (arglist__19748){
var keyvals = cljs.core.seq(arglist__19748);;
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
var in__19751 = cljs.core.seq.call(null,keyvals);
var out__19752 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__19751)
{{
var G__19753 = cljs.core.nnext.call(null,in__19751);
var G__19754 = cljs.core.assoc.call(null,out__19752,cljs.core.first.call(null,in__19751),cljs.core.second.call(null,in__19751));
in__19751 = G__19753;
out__19752 = G__19754;
continue;
}
} else
{return out__19752;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__19755){
var comparator = cljs.core.first(arglist__19755);
var keyvals = cljs.core.rest(arglist__19755);
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
{return cljs.core.reduce.call(null,(function (p1__19756_SHARP_,p2__19757_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____19759 = p1__19756_SHARP_;
if(cljs.core.truth_(or__3824__auto____19759))
{return or__3824__auto____19759;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__19757_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__19760){
var maps = cljs.core.seq(arglist__19760);;
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
{var merge_entry__19768 = (function (m,e){
var k__19766 = cljs.core.first.call(null,e);
var v__19767 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__19766))
{return cljs.core.assoc.call(null,m,k__19766,f.call(null,cljs.core._lookup.call(null,m,k__19766,null),v__19767));
} else
{return cljs.core.assoc.call(null,m,k__19766,v__19767);
}
});
var merge2__19770 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__19768,(function (){var or__3824__auto____19769 = m1;
if(cljs.core.truth_(or__3824__auto____19769))
{return or__3824__auto____19769;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__19770,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__19771){
var f = cljs.core.first(arglist__19771);
var maps = cljs.core.rest(arglist__19771);
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
var ret__19776 = cljs.core.ObjMap.EMPTY;
var keys__19777 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__19777)
{var key__19778 = cljs.core.first.call(null,keys__19777);
var entry__19779 = cljs.core._lookup.call(null,map,key__19778,"\uFDD0'user/not-found");
{
var G__19780 = ((cljs.core.not_EQ_.call(null,entry__19779,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__19776,key__19778,entry__19779):ret__19776);
var G__19781 = cljs.core.next.call(null,keys__19777);
ret__19776 = G__19780;
keys__19777 = G__19781;
continue;
}
} else
{return ret__19776;
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
var this__19785 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__19785.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__19786 = this;
var h__2236__auto____19787 = this__19786.__hash;
if(!((h__2236__auto____19787 == null)))
{return h__2236__auto____19787;
} else
{var h__2236__auto____19788 = cljs.core.hash_iset.call(null,coll);
this__19786.__hash = h__2236__auto____19788;
return h__2236__auto____19788;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__19789 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__19790 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__19790.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__19811 = null;
var G__19811__2 = (function (this_sym19791,k){
var this__19793 = this;
var this_sym19791__19794 = this;
var coll__19795 = this_sym19791__19794;
return coll__19795.cljs$core$ILookup$_lookup$arity$2(coll__19795,k);
});
var G__19811__3 = (function (this_sym19792,k,not_found){
var this__19793 = this;
var this_sym19792__19796 = this;
var coll__19797 = this_sym19792__19796;
return coll__19797.cljs$core$ILookup$_lookup$arity$3(coll__19797,k,not_found);
});
G__19811 = function(this_sym19792,k,not_found){
switch(arguments.length){
case 2:
return G__19811__2.call(this,this_sym19792,k);
case 3:
return G__19811__3.call(this,this_sym19792,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19811;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym19783,args19784){
var this__19798 = this;
return this_sym19783.call.apply(this_sym19783,[this_sym19783].concat(args19784.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19799 = this;
return (new cljs.core.PersistentHashSet(this__19799.meta,cljs.core.assoc.call(null,this__19799.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__19800 = this;
var this__19801 = this;
return cljs.core.pr_str.call(null,this__19801);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19802 = this;
return cljs.core.keys.call(null,this__19802.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__19803 = this;
return (new cljs.core.PersistentHashSet(this__19803.meta,cljs.core.dissoc.call(null,this__19803.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19804 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19805 = this;
var and__3822__auto____19806 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____19806)
{var and__3822__auto____19807 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____19807)
{return cljs.core.every_QMARK_.call(null,(function (p1__19782_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__19782_SHARP_);
}),other);
} else
{return and__3822__auto____19807;
}
} else
{return and__3822__auto____19806;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19808 = this;
return (new cljs.core.PersistentHashSet(meta,this__19808.hash_map,this__19808.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19809 = this;
return this__19809.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19810 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__19810.meta);
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
var G__19829 = null;
var G__19829__2 = (function (this_sym19815,k){
var this__19817 = this;
var this_sym19815__19818 = this;
var tcoll__19819 = this_sym19815__19818;
if((cljs.core._lookup.call(null,this__19817.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__19829__3 = (function (this_sym19816,k,not_found){
var this__19817 = this;
var this_sym19816__19820 = this;
var tcoll__19821 = this_sym19816__19820;
if((cljs.core._lookup.call(null,this__19817.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__19829 = function(this_sym19816,k,not_found){
switch(arguments.length){
case 2:
return G__19829__2.call(this,this_sym19816,k);
case 3:
return G__19829__3.call(this,this_sym19816,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19829;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym19813,args19814){
var this__19822 = this;
return this_sym19813.call.apply(this_sym19813,[this_sym19813].concat(args19814.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__19823 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__19824 = this;
if((cljs.core._lookup.call(null,this__19824.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__19825 = this;
return cljs.core.count.call(null,this__19825.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__19826 = this;
this__19826.transient_map = cljs.core.dissoc_BANG_.call(null,this__19826.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__19827 = this;
this__19827.transient_map = cljs.core.assoc_BANG_.call(null,this__19827.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__19828 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__19828.transient_map),null));
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
var this__19832 = this;
var h__2236__auto____19833 = this__19832.__hash;
if(!((h__2236__auto____19833 == null)))
{return h__2236__auto____19833;
} else
{var h__2236__auto____19834 = cljs.core.hash_iset.call(null,coll);
this__19832.__hash = h__2236__auto____19834;
return h__2236__auto____19834;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__19835 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__19836 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__19836.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__19862 = null;
var G__19862__2 = (function (this_sym19837,k){
var this__19839 = this;
var this_sym19837__19840 = this;
var coll__19841 = this_sym19837__19840;
return coll__19841.cljs$core$ILookup$_lookup$arity$2(coll__19841,k);
});
var G__19862__3 = (function (this_sym19838,k,not_found){
var this__19839 = this;
var this_sym19838__19842 = this;
var coll__19843 = this_sym19838__19842;
return coll__19843.cljs$core$ILookup$_lookup$arity$3(coll__19843,k,not_found);
});
G__19862 = function(this_sym19838,k,not_found){
switch(arguments.length){
case 2:
return G__19862__2.call(this,this_sym19838,k);
case 3:
return G__19862__3.call(this,this_sym19838,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19862;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym19830,args19831){
var this__19844 = this;
return this_sym19830.call.apply(this_sym19830,[this_sym19830].concat(args19831.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19845 = this;
return (new cljs.core.PersistentTreeSet(this__19845.meta,cljs.core.assoc.call(null,this__19845.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__19846 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__19846.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__19847 = this;
var this__19848 = this;
return cljs.core.pr_str.call(null,this__19848);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__19849 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__19849.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__19850 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__19850.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__19851 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__19852 = this;
return cljs.core._comparator.call(null,this__19852.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19853 = this;
return cljs.core.keys.call(null,this__19853.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__19854 = this;
return (new cljs.core.PersistentTreeSet(this__19854.meta,cljs.core.dissoc.call(null,this__19854.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19855 = this;
return cljs.core.count.call(null,this__19855.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19856 = this;
var and__3822__auto____19857 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____19857)
{var and__3822__auto____19858 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____19858)
{return cljs.core.every_QMARK_.call(null,(function (p1__19812_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__19812_SHARP_);
}),other);
} else
{return and__3822__auto____19858;
}
} else
{return and__3822__auto____19857;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19859 = this;
return (new cljs.core.PersistentTreeSet(meta,this__19859.tree_map,this__19859.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19860 = this;
return this__19860.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19861 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__19861.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__19865 = cljs.core.seq.call(null,coll);
var out__19866 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__19865))
{{
var G__19867 = cljs.core.next.call(null,in__19865);
var G__19868 = cljs.core.conj_BANG_.call(null,out__19866,cljs.core.first.call(null,in__19865));
in__19865 = G__19867;
out__19866 = G__19868;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__19866);
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
sorted_set.cljs$lang$applyTo = (function (arglist__19869){
var keys = cljs.core.seq(arglist__19869);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__19871){
var comparator = cljs.core.first(arglist__19871);
var keys = cljs.core.rest(arglist__19871);
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
{var n__19877 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____19878 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____19878))
{var e__19879 = temp__3971__auto____19878;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__19879));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__19877,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__19870_SHARP_){
var temp__3971__auto____19880 = cljs.core.find.call(null,smap,p1__19870_SHARP_);
if(cljs.core.truth_(temp__3971__auto____19880))
{var e__19881 = temp__3971__auto____19880;
return cljs.core.second.call(null,e__19881);
} else
{return p1__19870_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__19911 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__19904,seen){
while(true){
var vec__19905__19906 = p__19904;
var f__19907 = cljs.core.nth.call(null,vec__19905__19906,0,null);
var xs__19908 = vec__19905__19906;
var temp__3974__auto____19909 = cljs.core.seq.call(null,xs__19908);
if(temp__3974__auto____19909)
{var s__19910 = temp__3974__auto____19909;
if(cljs.core.contains_QMARK_.call(null,seen,f__19907))
{{
var G__19912 = cljs.core.rest.call(null,s__19910);
var G__19913 = seen;
p__19904 = G__19912;
seen = G__19913;
continue;
}
} else
{return cljs.core.cons.call(null,f__19907,step.call(null,cljs.core.rest.call(null,s__19910),cljs.core.conj.call(null,seen,f__19907)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__19911.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__19916 = cljs.core.PersistentVector.EMPTY;
var s__19917 = s;
while(true){
if(cljs.core.next.call(null,s__19917))
{{
var G__19918 = cljs.core.conj.call(null,ret__19916,cljs.core.first.call(null,s__19917));
var G__19919 = cljs.core.next.call(null,s__19917);
ret__19916 = G__19918;
s__19917 = G__19919;
continue;
}
} else
{return cljs.core.seq.call(null,ret__19916);
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
{if((function (){var or__3824__auto____19922 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____19922)
{return or__3824__auto____19922;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__19923 = x.lastIndexOf("/");
if((i__19923 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__19923 + 1));
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
if((function (){var or__3824__auto____19926 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____19926)
{return or__3824__auto____19926;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__19927 = x.lastIndexOf("/");
if((i__19927 > -1))
{return cljs.core.subs.call(null,x,2,i__19927);
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
var map__19934 = cljs.core.ObjMap.EMPTY;
var ks__19935 = cljs.core.seq.call(null,keys);
var vs__19936 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____19937 = ks__19935;
if(and__3822__auto____19937)
{return vs__19936;
} else
{return and__3822__auto____19937;
}
})())
{{
var G__19938 = cljs.core.assoc.call(null,map__19934,cljs.core.first.call(null,ks__19935),cljs.core.first.call(null,vs__19936));
var G__19939 = cljs.core.next.call(null,ks__19935);
var G__19940 = cljs.core.next.call(null,vs__19936);
map__19934 = G__19938;
ks__19935 = G__19939;
vs__19936 = G__19940;
continue;
}
} else
{return map__19934;
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
var G__19943__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__19928_SHARP_,p2__19929_SHARP_){
return max_key.call(null,k,p1__19928_SHARP_,p2__19929_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__19943 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19943__delegate.call(this, k, x, y, more);
};
G__19943.cljs$lang$maxFixedArity = 3;
G__19943.cljs$lang$applyTo = (function (arglist__19944){
var k = cljs.core.first(arglist__19944);
var x = cljs.core.first(cljs.core.next(arglist__19944));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19944)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19944)));
return G__19943__delegate(k, x, y, more);
});
G__19943.cljs$lang$arity$variadic = G__19943__delegate;
return G__19943;
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
var G__19945__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__19941_SHARP_,p2__19942_SHARP_){
return min_key.call(null,k,p1__19941_SHARP_,p2__19942_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__19945 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19945__delegate.call(this, k, x, y, more);
};
G__19945.cljs$lang$maxFixedArity = 3;
G__19945.cljs$lang$applyTo = (function (arglist__19946){
var k = cljs.core.first(arglist__19946);
var x = cljs.core.first(cljs.core.next(arglist__19946));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19946)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19946)));
return G__19945__delegate(k, x, y, more);
});
G__19945.cljs$lang$arity$variadic = G__19945__delegate;
return G__19945;
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
var temp__3974__auto____19949 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19949)
{var s__19950 = temp__3974__auto____19949;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__19950),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__19950)));
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
var temp__3974__auto____19953 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19953)
{var s__19954 = temp__3974__auto____19953;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__19954))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__19954),take_while.call(null,pred,cljs.core.rest.call(null,s__19954)));
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
var comp__19956 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__19956.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__19968 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____19969 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____19969))
{var vec__19970__19971 = temp__3974__auto____19969;
var e__19972 = cljs.core.nth.call(null,vec__19970__19971,0,null);
var s__19973 = vec__19970__19971;
if(cljs.core.truth_(include__19968.call(null,e__19972)))
{return s__19973;
} else
{return cljs.core.next.call(null,s__19973);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__19968,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____19974 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____19974))
{var vec__19975__19976 = temp__3974__auto____19974;
var e__19977 = cljs.core.nth.call(null,vec__19975__19976,0,null);
var s__19978 = vec__19975__19976;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__19977))?s__19978:cljs.core.next.call(null,s__19978)));
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
var include__19990 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____19991 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____19991))
{var vec__19992__19993 = temp__3974__auto____19991;
var e__19994 = cljs.core.nth.call(null,vec__19992__19993,0,null);
var s__19995 = vec__19992__19993;
if(cljs.core.truth_(include__19990.call(null,e__19994)))
{return s__19995;
} else
{return cljs.core.next.call(null,s__19995);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__19990,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____19996 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____19996))
{var vec__19997__19998 = temp__3974__auto____19996;
var e__19999 = cljs.core.nth.call(null,vec__19997__19998,0,null);
var s__20000 = vec__19997__19998;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__19999))?s__20000:cljs.core.next.call(null,s__20000)));
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
var this__20001 = this;
var h__2236__auto____20002 = this__20001.__hash;
if(!((h__2236__auto____20002 == null)))
{return h__2236__auto____20002;
} else
{var h__2236__auto____20003 = cljs.core.hash_coll.call(null,rng);
this__20001.__hash = h__2236__auto____20003;
return h__2236__auto____20003;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__20004 = this;
if((this__20004.step > 0))
{if(((this__20004.start + this__20004.step) < this__20004.end))
{return (new cljs.core.Range(this__20004.meta,(this__20004.start + this__20004.step),this__20004.end,this__20004.step,null));
} else
{return null;
}
} else
{if(((this__20004.start + this__20004.step) > this__20004.end))
{return (new cljs.core.Range(this__20004.meta,(this__20004.start + this__20004.step),this__20004.end,this__20004.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__20005 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__20006 = this;
var this__20007 = this;
return cljs.core.pr_str.call(null,this__20007);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__20008 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__20009 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__20010 = this;
if((this__20010.step > 0))
{if((this__20010.start < this__20010.end))
{return rng;
} else
{return null;
}
} else
{if((this__20010.start > this__20010.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__20011 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__20011.end - this__20011.start) / this__20011.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__20012 = this;
return this__20012.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__20013 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__20013.meta,(this__20013.start + this__20013.step),this__20013.end,this__20013.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__20014 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__20015 = this;
return (new cljs.core.Range(meta,this__20015.start,this__20015.end,this__20015.step,this__20015.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__20016 = this;
return this__20016.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__20017 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__20017.start + (n * this__20017.step));
} else
{if((function (){var and__3822__auto____20018 = (this__20017.start > this__20017.end);
if(and__3822__auto____20018)
{return (this__20017.step === 0);
} else
{return and__3822__auto____20018;
}
})())
{return this__20017.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__20019 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__20019.start + (n * this__20019.step));
} else
{if((function (){var and__3822__auto____20020 = (this__20019.start > this__20019.end);
if(and__3822__auto____20020)
{return (this__20019.step === 0);
} else
{return and__3822__auto____20020;
}
})())
{return this__20019.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__20021 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__20021.meta);
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
var temp__3974__auto____20024 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____20024)
{var s__20025 = temp__3974__auto____20024;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__20025),take_nth.call(null,n,cljs.core.drop.call(null,n,s__20025)));
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
var temp__3974__auto____20032 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____20032)
{var s__20033 = temp__3974__auto____20032;
var fst__20034 = cljs.core.first.call(null,s__20033);
var fv__20035 = f.call(null,fst__20034);
var run__20036 = cljs.core.cons.call(null,fst__20034,cljs.core.take_while.call(null,(function (p1__20026_SHARP_){
return cljs.core._EQ_.call(null,fv__20035,f.call(null,p1__20026_SHARP_));
}),cljs.core.next.call(null,s__20033)));
return cljs.core.cons.call(null,run__20036,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__20036),s__20033))));
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
var temp__3971__auto____20051 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____20051)
{var s__20052 = temp__3971__auto____20051;
return reductions.call(null,f,cljs.core.first.call(null,s__20052),cljs.core.rest.call(null,s__20052));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____20053 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____20053)
{var s__20054 = temp__3974__auto____20053;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__20054)),cljs.core.rest.call(null,s__20054));
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
var G__20057 = null;
var G__20057__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__20057__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__20057__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__20057__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__20057__4 = (function() { 
var G__20058__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__20058 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20058__delegate.call(this, x, y, z, args);
};
G__20058.cljs$lang$maxFixedArity = 3;
G__20058.cljs$lang$applyTo = (function (arglist__20059){
var x = cljs.core.first(arglist__20059);
var y = cljs.core.first(cljs.core.next(arglist__20059));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20059)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20059)));
return G__20058__delegate(x, y, z, args);
});
G__20058.cljs$lang$arity$variadic = G__20058__delegate;
return G__20058;
})()
;
G__20057 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__20057__0.call(this);
case 1:
return G__20057__1.call(this,x);
case 2:
return G__20057__2.call(this,x,y);
case 3:
return G__20057__3.call(this,x,y,z);
default:
return G__20057__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__20057.cljs$lang$maxFixedArity = 3;
G__20057.cljs$lang$applyTo = G__20057__4.cljs$lang$applyTo;
return G__20057;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__20060 = null;
var G__20060__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__20060__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__20060__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__20060__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__20060__4 = (function() { 
var G__20061__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__20061 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20061__delegate.call(this, x, y, z, args);
};
G__20061.cljs$lang$maxFixedArity = 3;
G__20061.cljs$lang$applyTo = (function (arglist__20062){
var x = cljs.core.first(arglist__20062);
var y = cljs.core.first(cljs.core.next(arglist__20062));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20062)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20062)));
return G__20061__delegate(x, y, z, args);
});
G__20061.cljs$lang$arity$variadic = G__20061__delegate;
return G__20061;
})()
;
G__20060 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__20060__0.call(this);
case 1:
return G__20060__1.call(this,x);
case 2:
return G__20060__2.call(this,x,y);
case 3:
return G__20060__3.call(this,x,y,z);
default:
return G__20060__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__20060.cljs$lang$maxFixedArity = 3;
G__20060.cljs$lang$applyTo = G__20060__4.cljs$lang$applyTo;
return G__20060;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__20063 = null;
var G__20063__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__20063__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__20063__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__20063__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__20063__4 = (function() { 
var G__20064__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__20064 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20064__delegate.call(this, x, y, z, args);
};
G__20064.cljs$lang$maxFixedArity = 3;
G__20064.cljs$lang$applyTo = (function (arglist__20065){
var x = cljs.core.first(arglist__20065);
var y = cljs.core.first(cljs.core.next(arglist__20065));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20065)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20065)));
return G__20064__delegate(x, y, z, args);
});
G__20064.cljs$lang$arity$variadic = G__20064__delegate;
return G__20064;
})()
;
G__20063 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__20063__0.call(this);
case 1:
return G__20063__1.call(this,x);
case 2:
return G__20063__2.call(this,x,y);
case 3:
return G__20063__3.call(this,x,y,z);
default:
return G__20063__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__20063.cljs$lang$maxFixedArity = 3;
G__20063.cljs$lang$applyTo = G__20063__4.cljs$lang$applyTo;
return G__20063;
})()
});
var juxt__4 = (function() { 
var G__20066__delegate = function (f,g,h,fs){
var fs__20056 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__20067 = null;
var G__20067__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__20037_SHARP_,p2__20038_SHARP_){
return cljs.core.conj.call(null,p1__20037_SHARP_,p2__20038_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__20056);
});
var G__20067__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__20039_SHARP_,p2__20040_SHARP_){
return cljs.core.conj.call(null,p1__20039_SHARP_,p2__20040_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__20056);
});
var G__20067__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__20041_SHARP_,p2__20042_SHARP_){
return cljs.core.conj.call(null,p1__20041_SHARP_,p2__20042_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__20056);
});
var G__20067__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__20043_SHARP_,p2__20044_SHARP_){
return cljs.core.conj.call(null,p1__20043_SHARP_,p2__20044_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__20056);
});
var G__20067__4 = (function() { 
var G__20068__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__20045_SHARP_,p2__20046_SHARP_){
return cljs.core.conj.call(null,p1__20045_SHARP_,cljs.core.apply.call(null,p2__20046_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__20056);
};
var G__20068 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20068__delegate.call(this, x, y, z, args);
};
G__20068.cljs$lang$maxFixedArity = 3;
G__20068.cljs$lang$applyTo = (function (arglist__20069){
var x = cljs.core.first(arglist__20069);
var y = cljs.core.first(cljs.core.next(arglist__20069));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20069)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20069)));
return G__20068__delegate(x, y, z, args);
});
G__20068.cljs$lang$arity$variadic = G__20068__delegate;
return G__20068;
})()
;
G__20067 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__20067__0.call(this);
case 1:
return G__20067__1.call(this,x);
case 2:
return G__20067__2.call(this,x,y);
case 3:
return G__20067__3.call(this,x,y,z);
default:
return G__20067__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__20067.cljs$lang$maxFixedArity = 3;
G__20067.cljs$lang$applyTo = G__20067__4.cljs$lang$applyTo;
return G__20067;
})()
};
var G__20066 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20066__delegate.call(this, f, g, h, fs);
};
G__20066.cljs$lang$maxFixedArity = 3;
G__20066.cljs$lang$applyTo = (function (arglist__20070){
var f = cljs.core.first(arglist__20070);
var g = cljs.core.first(cljs.core.next(arglist__20070));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20070)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20070)));
return G__20066__delegate(f, g, h, fs);
});
G__20066.cljs$lang$arity$variadic = G__20066__delegate;
return G__20066;
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
var G__20073 = cljs.core.next.call(null,coll);
coll = G__20073;
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
if(cljs.core.truth_((function (){var and__3822__auto____20072 = cljs.core.seq.call(null,coll);
if(and__3822__auto____20072)
{return (n > 0);
} else
{return and__3822__auto____20072;
}
})()))
{{
var G__20074 = (n - 1);
var G__20075 = cljs.core.next.call(null,coll);
n = G__20074;
coll = G__20075;
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
var matches__20077 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__20077),s))
{if((cljs.core.count.call(null,matches__20077) === 1))
{return cljs.core.first.call(null,matches__20077);
} else
{return cljs.core.vec.call(null,matches__20077);
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
var matches__20079 = re.exec(s);
if((matches__20079 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__20079) === 1))
{return cljs.core.first.call(null,matches__20079);
} else
{return cljs.core.vec.call(null,matches__20079);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__20084 = cljs.core.re_find.call(null,re,s);
var match_idx__20085 = s.search(re);
var match_str__20086 = ((cljs.core.coll_QMARK_.call(null,match_data__20084))?cljs.core.first.call(null,match_data__20084):match_data__20084);
var post_match__20087 = cljs.core.subs.call(null,s,(match_idx__20085 + cljs.core.count.call(null,match_str__20086)));
if(cljs.core.truth_(match_data__20084))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__20084,re_seq.call(null,re,post_match__20087));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__20094__20095 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___20096 = cljs.core.nth.call(null,vec__20094__20095,0,null);
var flags__20097 = cljs.core.nth.call(null,vec__20094__20095,1,null);
var pattern__20098 = cljs.core.nth.call(null,vec__20094__20095,2,null);
return (new RegExp(pattern__20098,flags__20097));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__20088_SHARP_){
return print_one.call(null,p1__20088_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____20108 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____20108))
{var and__3822__auto____20112 = (function (){var G__20109__20110 = obj;
if(G__20109__20110)
{if((function (){var or__3824__auto____20111 = (G__20109__20110.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____20111)
{return or__3824__auto____20111;
} else
{return G__20109__20110.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__20109__20110.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__20109__20110);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__20109__20110);
}
})();
if(cljs.core.truth_(and__3822__auto____20112))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____20112;
}
} else
{return and__3822__auto____20108;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____20113 = !((obj == null));
if(and__3822__auto____20113)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____20113;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__20114__20115 = obj;
if(G__20114__20115)
{if((function (){var or__3824__auto____20116 = (G__20114__20115.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____20116)
{return or__3824__auto____20116;
} else
{return G__20114__20115.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__20114__20115.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__20114__20115);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__20114__20115);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__20131 = cljs.core.first.call(null,objs);
var sb__20132 = (new goog.string.StringBuffer());
var G__20133__20134 = cljs.core.seq.call(null,objs);
if(G__20133__20134)
{var obj__20135 = cljs.core.first.call(null,G__20133__20134);
var G__20133__20136 = G__20133__20134;
while(true){
if((obj__20135 === first_obj__20131))
{} else
{sb__20132.append(" ");
}
var G__20137__20138 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__20135,opts));
if(G__20137__20138)
{var string__20139 = cljs.core.first.call(null,G__20137__20138);
var G__20137__20140 = G__20137__20138;
while(true){
sb__20132.append(string__20139);
var temp__3974__auto____20141 = cljs.core.next.call(null,G__20137__20140);
if(temp__3974__auto____20141)
{var G__20137__20142 = temp__3974__auto____20141;
{
var G__20145 = cljs.core.first.call(null,G__20137__20142);
var G__20146 = G__20137__20142;
string__20139 = G__20145;
G__20137__20140 = G__20146;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____20143 = cljs.core.next.call(null,G__20133__20136);
if(temp__3974__auto____20143)
{var G__20133__20144 = temp__3974__auto____20143;
{
var G__20147 = cljs.core.first.call(null,G__20133__20144);
var G__20148 = G__20133__20144;
obj__20135 = G__20147;
G__20133__20136 = G__20148;
continue;
}
} else
{}
break;
}
} else
{}
return sb__20132;
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
var sb__20150 = cljs.core.pr_sb.call(null,objs,opts);
sb__20150.append("\n");
return [cljs.core.str(sb__20150)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__20164 = cljs.core.first.call(null,objs);
var G__20165__20166 = cljs.core.seq.call(null,objs);
if(G__20165__20166)
{var obj__20167 = cljs.core.first.call(null,G__20165__20166);
var G__20165__20168 = G__20165__20166;
while(true){
if((obj__20167 === first_obj__20164))
{} else
{cljs.core.string_print.call(null," ");
}
var G__20169__20170 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__20167,opts));
if(G__20169__20170)
{var string__20171 = cljs.core.first.call(null,G__20169__20170);
var G__20169__20172 = G__20169__20170;
while(true){
cljs.core.string_print.call(null,string__20171);
var temp__3974__auto____20173 = cljs.core.next.call(null,G__20169__20172);
if(temp__3974__auto____20173)
{var G__20169__20174 = temp__3974__auto____20173;
{
var G__20177 = cljs.core.first.call(null,G__20169__20174);
var G__20178 = G__20169__20174;
string__20171 = G__20177;
G__20169__20172 = G__20178;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____20175 = cljs.core.next.call(null,G__20165__20168);
if(temp__3974__auto____20175)
{var G__20165__20176 = temp__3974__auto____20175;
{
var G__20179 = cljs.core.first.call(null,G__20165__20176);
var G__20180 = G__20165__20176;
obj__20167 = G__20179;
G__20165__20168 = G__20180;
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
pr_str.cljs$lang$applyTo = (function (arglist__20181){
var objs = cljs.core.seq(arglist__20181);;
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
prn_str.cljs$lang$applyTo = (function (arglist__20182){
var objs = cljs.core.seq(arglist__20182);;
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
pr.cljs$lang$applyTo = (function (arglist__20183){
var objs = cljs.core.seq(arglist__20183);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__20184){
var objs = cljs.core.seq(arglist__20184);;
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
print_str.cljs$lang$applyTo = (function (arglist__20185){
var objs = cljs.core.seq(arglist__20185);;
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
println.cljs$lang$applyTo = (function (arglist__20186){
var objs = cljs.core.seq(arglist__20186);;
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
println_str.cljs$lang$applyTo = (function (arglist__20187){
var objs = cljs.core.seq(arglist__20187);;
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
prn.cljs$lang$applyTo = (function (arglist__20188){
var objs = cljs.core.seq(arglist__20188);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__20189 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__20189,"{",", ","}",opts,coll);
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
var pr_pair__20190 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__20190,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__20191 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__20191,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____20192 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____20192))
{var nspc__20193 = temp__3974__auto____20192;
return [cljs.core.str(nspc__20193),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____20194 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____20194))
{var nspc__20195 = temp__3974__auto____20194;
return [cljs.core.str(nspc__20195),cljs.core.str("/")].join('');
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
var pr_pair__20196 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__20196,"{",", ","}",opts,coll);
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
var normalize__20198 = (function (n,len){
var ns__20197 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__20197) < len))
{{
var G__20200 = [cljs.core.str("0"),cljs.core.str(ns__20197)].join('');
ns__20197 = G__20200;
continue;
}
} else
{return ns__20197;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__20198.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__20198.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__20198.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__20198.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__20198.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__20198.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__20199 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__20199,"{",", ","}",opts,coll);
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
var this__20201 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__20202 = this;
var G__20203__20204 = cljs.core.seq.call(null,this__20202.watches);
if(G__20203__20204)
{var G__20206__20208 = cljs.core.first.call(null,G__20203__20204);
var vec__20207__20209 = G__20206__20208;
var key__20210 = cljs.core.nth.call(null,vec__20207__20209,0,null);
var f__20211 = cljs.core.nth.call(null,vec__20207__20209,1,null);
var G__20203__20212 = G__20203__20204;
var G__20206__20213 = G__20206__20208;
var G__20203__20214 = G__20203__20212;
while(true){
var vec__20215__20216 = G__20206__20213;
var key__20217 = cljs.core.nth.call(null,vec__20215__20216,0,null);
var f__20218 = cljs.core.nth.call(null,vec__20215__20216,1,null);
var G__20203__20219 = G__20203__20214;
f__20218.call(null,key__20217,this$,oldval,newval);
var temp__3974__auto____20220 = cljs.core.next.call(null,G__20203__20219);
if(temp__3974__auto____20220)
{var G__20203__20221 = temp__3974__auto____20220;
{
var G__20228 = cljs.core.first.call(null,G__20203__20221);
var G__20229 = G__20203__20221;
G__20206__20213 = G__20228;
G__20203__20214 = G__20229;
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
var this__20222 = this;
return this$.watches = cljs.core.assoc.call(null,this__20222.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__20223 = this;
return this$.watches = cljs.core.dissoc.call(null,this__20223.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__20224 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__20224.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__20225 = this;
return this__20225.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__20226 = this;
return this__20226.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__20227 = this;
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
var G__20241__delegate = function (x,p__20230){
var map__20236__20237 = p__20230;
var map__20236__20238 = ((cljs.core.seq_QMARK_.call(null,map__20236__20237))?cljs.core.apply.call(null,cljs.core.hash_map,map__20236__20237):map__20236__20237);
var validator__20239 = cljs.core._lookup.call(null,map__20236__20238,"\uFDD0'validator",null);
var meta__20240 = cljs.core._lookup.call(null,map__20236__20238,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__20240,validator__20239,null));
};
var G__20241 = function (x,var_args){
var p__20230 = null;
if (goog.isDef(var_args)) {
  p__20230 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20241__delegate.call(this, x, p__20230);
};
G__20241.cljs$lang$maxFixedArity = 1;
G__20241.cljs$lang$applyTo = (function (arglist__20242){
var x = cljs.core.first(arglist__20242);
var p__20230 = cljs.core.rest(arglist__20242);
return G__20241__delegate(x, p__20230);
});
G__20241.cljs$lang$arity$variadic = G__20241__delegate;
return G__20241;
})()
;
atom = function(x,var_args){
var p__20230 = var_args;
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
var temp__3974__auto____20246 = a.validator;
if(cljs.core.truth_(temp__3974__auto____20246))
{var validate__20247 = temp__3974__auto____20246;
if(cljs.core.truth_(validate__20247.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__20248 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__20248,new_value);
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
var G__20249__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__20249 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__20249__delegate.call(this, a, f, x, y, z, more);
};
G__20249.cljs$lang$maxFixedArity = 5;
G__20249.cljs$lang$applyTo = (function (arglist__20250){
var a = cljs.core.first(arglist__20250);
var f = cljs.core.first(cljs.core.next(arglist__20250));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20250)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20250))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20250)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20250)))));
return G__20249__delegate(a, f, x, y, z, more);
});
G__20249.cljs$lang$arity$variadic = G__20249__delegate;
return G__20249;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__20251){
var iref = cljs.core.first(arglist__20251);
var f = cljs.core.first(cljs.core.next(arglist__20251));
var args = cljs.core.rest(cljs.core.next(arglist__20251));
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
var this__20252 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__20252.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__20253 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__20253.state,(function (p__20254){
var curr_state__20255 = p__20254;
var curr_state__20256 = ((cljs.core.seq_QMARK_.call(null,curr_state__20255))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__20255):curr_state__20255);
var done__20257 = cljs.core._lookup.call(null,curr_state__20256,"\uFDD0'done",null);
if(cljs.core.truth_(done__20257))
{return curr_state__20256;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__20253.f.call(null)});
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
var map__20278__20279 = options;
var map__20278__20280 = ((cljs.core.seq_QMARK_.call(null,map__20278__20279))?cljs.core.apply.call(null,cljs.core.hash_map,map__20278__20279):map__20278__20279);
var keywordize_keys__20281 = cljs.core._lookup.call(null,map__20278__20280,"\uFDD0'keywordize-keys",null);
var keyfn__20282 = (cljs.core.truth_(keywordize_keys__20281)?cljs.core.keyword:cljs.core.str);
var f__20297 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2510__auto____20296 = (function iter__20290(s__20291){
return (new cljs.core.LazySeq(null,false,(function (){
var s__20291__20294 = s__20291;
while(true){
if(cljs.core.seq.call(null,s__20291__20294))
{var k__20295 = cljs.core.first.call(null,s__20291__20294);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__20282.call(null,k__20295),thisfn.call(null,(x[k__20295]))], true),iter__20290.call(null,cljs.core.rest.call(null,s__20291__20294)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2510__auto____20296.call(null,cljs.core.js_keys.call(null,x));
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
return f__20297.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__20298){
var x = cljs.core.first(arglist__20298);
var options = cljs.core.rest(arglist__20298);
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
var mem__20303 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__20307__delegate = function (args){
var temp__3971__auto____20304 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__20303),args,null);
if(cljs.core.truth_(temp__3971__auto____20304))
{var v__20305 = temp__3971__auto____20304;
return v__20305;
} else
{var ret__20306 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__20303,cljs.core.assoc,args,ret__20306);
return ret__20306;
}
};
var G__20307 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__20307__delegate.call(this, args);
};
G__20307.cljs$lang$maxFixedArity = 0;
G__20307.cljs$lang$applyTo = (function (arglist__20308){
var args = cljs.core.seq(arglist__20308);;
return G__20307__delegate(args);
});
G__20307.cljs$lang$arity$variadic = G__20307__delegate;
return G__20307;
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
var ret__20310 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__20310))
{{
var G__20311 = ret__20310;
f = G__20311;
continue;
}
} else
{return ret__20310;
}
break;
}
});
var trampoline__2 = (function() { 
var G__20312__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__20312 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20312__delegate.call(this, f, args);
};
G__20312.cljs$lang$maxFixedArity = 1;
G__20312.cljs$lang$applyTo = (function (arglist__20313){
var f = cljs.core.first(arglist__20313);
var args = cljs.core.rest(arglist__20313);
return G__20312__delegate(f, args);
});
G__20312.cljs$lang$arity$variadic = G__20312__delegate;
return G__20312;
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
var k__20315 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__20315,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__20315,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____20324 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____20324)
{return or__3824__auto____20324;
} else
{var or__3824__auto____20325 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____20325)
{return or__3824__auto____20325;
} else
{var and__3822__auto____20326 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____20326)
{var and__3822__auto____20327 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____20327)
{var and__3822__auto____20328 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____20328)
{var ret__20329 = true;
var i__20330 = 0;
while(true){
if((function (){var or__3824__auto____20331 = cljs.core.not.call(null,ret__20329);
if(or__3824__auto____20331)
{return or__3824__auto____20331;
} else
{return (i__20330 === cljs.core.count.call(null,parent));
}
})())
{return ret__20329;
} else
{{
var G__20332 = isa_QMARK_.call(null,h,child.call(null,i__20330),parent.call(null,i__20330));
var G__20333 = (i__20330 + 1);
ret__20329 = G__20332;
i__20330 = G__20333;
continue;
}
}
break;
}
} else
{return and__3822__auto____20328;
}
} else
{return and__3822__auto____20327;
}
} else
{return and__3822__auto____20326;
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
var tp__20342 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__20343 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__20344 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__20345 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____20346 = ((cljs.core.contains_QMARK_.call(null,tp__20342.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__20344.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__20344.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__20342,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__20345.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__20343,parent,ta__20344),"\uFDD0'descendants":tf__20345.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__20344,tag,td__20343)});
})());
if(cljs.core.truth_(or__3824__auto____20346))
{return or__3824__auto____20346;
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
var parentMap__20351 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__20352 = (cljs.core.truth_(parentMap__20351.call(null,tag))?cljs.core.disj.call(null,parentMap__20351.call(null,tag),parent):cljs.core.set([]));
var newParents__20353 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__20352))?cljs.core.assoc.call(null,parentMap__20351,tag,childsParents__20352):cljs.core.dissoc.call(null,parentMap__20351,tag));
var deriv_seq__20354 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__20334_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__20334_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__20334_SHARP_),cljs.core.second.call(null,p1__20334_SHARP_)));
}),cljs.core.seq.call(null,newParents__20353)));
if(cljs.core.contains_QMARK_.call(null,parentMap__20351.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__20335_SHARP_,p2__20336_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__20335_SHARP_,p2__20336_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__20354));
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
var xprefs__20362 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____20364 = (cljs.core.truth_((function (){var and__3822__auto____20363 = xprefs__20362;
if(cljs.core.truth_(and__3822__auto____20363))
{return xprefs__20362.call(null,y);
} else
{return and__3822__auto____20363;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____20364))
{return or__3824__auto____20364;
} else
{var or__3824__auto____20366 = (function (){var ps__20365 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__20365) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__20365),prefer_table)))
{} else
{}
{
var G__20369 = cljs.core.rest.call(null,ps__20365);
ps__20365 = G__20369;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____20366))
{return or__3824__auto____20366;
} else
{var or__3824__auto____20368 = (function (){var ps__20367 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__20367) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__20367),y,prefer_table)))
{} else
{}
{
var G__20370 = cljs.core.rest.call(null,ps__20367);
ps__20367 = G__20370;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____20368))
{return or__3824__auto____20368;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____20372 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____20372))
{return or__3824__auto____20372;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__20390 = cljs.core.reduce.call(null,(function (be,p__20382){
var vec__20383__20384 = p__20382;
var k__20385 = cljs.core.nth.call(null,vec__20383__20384,0,null);
var ___20386 = cljs.core.nth.call(null,vec__20383__20384,1,null);
var e__20387 = vec__20383__20384;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__20385))
{var be2__20389 = (cljs.core.truth_((function (){var or__3824__auto____20388 = (be == null);
if(or__3824__auto____20388)
{return or__3824__auto____20388;
} else
{return cljs.core.dominates.call(null,k__20385,cljs.core.first.call(null,be),prefer_table);
}
})())?e__20387:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__20389),k__20385,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__20385),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__20389)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__20389;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__20390))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__20390));
return cljs.core.second.call(null,best_entry__20390);
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
if((function (){var and__3822__auto____20394 = mf;
if(and__3822__auto____20394)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____20394;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____20395 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____20395)
{return or__3824__auto____20395;
} else
{var or__3824__auto____20396 = (cljs.core._reset["_"]);
if(or__3824__auto____20396)
{return or__3824__auto____20396;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____20400 = mf;
if(and__3822__auto____20400)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____20400;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____20401 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____20401)
{return or__3824__auto____20401;
} else
{var or__3824__auto____20402 = (cljs.core._add_method["_"]);
if(or__3824__auto____20402)
{return or__3824__auto____20402;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____20406 = mf;
if(and__3822__auto____20406)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____20406;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____20407 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____20407)
{return or__3824__auto____20407;
} else
{var or__3824__auto____20408 = (cljs.core._remove_method["_"]);
if(or__3824__auto____20408)
{return or__3824__auto____20408;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____20412 = mf;
if(and__3822__auto____20412)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____20412;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____20413 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____20413)
{return or__3824__auto____20413;
} else
{var or__3824__auto____20414 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____20414)
{return or__3824__auto____20414;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____20418 = mf;
if(and__3822__auto____20418)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____20418;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____20419 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____20419)
{return or__3824__auto____20419;
} else
{var or__3824__auto____20420 = (cljs.core._get_method["_"]);
if(or__3824__auto____20420)
{return or__3824__auto____20420;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____20424 = mf;
if(and__3822__auto____20424)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____20424;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____20425 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____20425)
{return or__3824__auto____20425;
} else
{var or__3824__auto____20426 = (cljs.core._methods["_"]);
if(or__3824__auto____20426)
{return or__3824__auto____20426;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____20430 = mf;
if(and__3822__auto____20430)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____20430;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____20431 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____20431)
{return or__3824__auto____20431;
} else
{var or__3824__auto____20432 = (cljs.core._prefers["_"]);
if(or__3824__auto____20432)
{return or__3824__auto____20432;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____20436 = mf;
if(and__3822__auto____20436)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____20436;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____20437 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____20437)
{return or__3824__auto____20437;
} else
{var or__3824__auto____20438 = (cljs.core._dispatch["_"]);
if(or__3824__auto____20438)
{return or__3824__auto____20438;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__20441 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__20442 = cljs.core._get_method.call(null,mf,dispatch_val__20441);
if(cljs.core.truth_(target_fn__20442))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__20441)].join('')));
}
return cljs.core.apply.call(null,target_fn__20442,args);
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
var this__20443 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__20444 = this;
cljs.core.swap_BANG_.call(null,this__20444.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__20444.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__20444.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__20444.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__20445 = this;
cljs.core.swap_BANG_.call(null,this__20445.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__20445.method_cache,this__20445.method_table,this__20445.cached_hierarchy,this__20445.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__20446 = this;
cljs.core.swap_BANG_.call(null,this__20446.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__20446.method_cache,this__20446.method_table,this__20446.cached_hierarchy,this__20446.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__20447 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__20447.cached_hierarchy),cljs.core.deref.call(null,this__20447.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__20447.method_cache,this__20447.method_table,this__20447.cached_hierarchy,this__20447.hierarchy);
}
var temp__3971__auto____20448 = cljs.core.deref.call(null,this__20447.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____20448))
{var target_fn__20449 = temp__3971__auto____20448;
return target_fn__20449;
} else
{var temp__3971__auto____20450 = cljs.core.find_and_cache_best_method.call(null,this__20447.name,dispatch_val,this__20447.hierarchy,this__20447.method_table,this__20447.prefer_table,this__20447.method_cache,this__20447.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____20450))
{var target_fn__20451 = temp__3971__auto____20450;
return target_fn__20451;
} else
{return cljs.core.deref.call(null,this__20447.method_table).call(null,this__20447.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__20452 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__20452.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__20452.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__20452.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__20452.method_cache,this__20452.method_table,this__20452.cached_hierarchy,this__20452.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__20453 = this;
return cljs.core.deref.call(null,this__20453.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__20454 = this;
return cljs.core.deref.call(null,this__20454.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__20455 = this;
return cljs.core.do_dispatch.call(null,mf,this__20455.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__20457__delegate = function (_,args){
var self__20456 = this;
return cljs.core._dispatch.call(null,self__20456,args);
};
var G__20457 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20457__delegate.call(this, _, args);
};
G__20457.cljs$lang$maxFixedArity = 1;
G__20457.cljs$lang$applyTo = (function (arglist__20458){
var _ = cljs.core.first(arglist__20458);
var args = cljs.core.rest(arglist__20458);
return G__20457__delegate(_, args);
});
G__20457.cljs$lang$arity$variadic = G__20457__delegate;
return G__20457;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__20459 = this;
return cljs.core._dispatch.call(null,self__20459,args);
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
var this__20460 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_20462,_){
var this__20461 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__20461.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__20463 = this;
return (this__20463.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__20464 = this;
var this__20465 = this;
return cljs.core.pr_str.call(null,this__20465);
});
cljs.core.UUID;

goog.provide('singult.core');
goog.require('cljs.core');
goog.require('singult.coffee');

/**
* @constructor
* @param {*} data
* @param {*} mapping
* @param {*} key_fn
* @param {*} enter
* @param {*} update
* @param {*} exit
* @param {*} force_update_QMARK_
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
singult.core.Unify = (function (data,mapping,key_fn,enter,update,exit,force_update_QMARK_,__meta,__extmap){
this.data = data;
this.mapping = mapping;
this.key_fn = key_fn;
this.enter = enter;
this.update = update;
this.exit = exit;
this.force_update_QMARK_ = force_update_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 619054858;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
singult.core.Unify.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2362__auto__){
var this__23100 = this;
var h__2236__auto____23101 = this__23100.__hash;
if(!((h__2236__auto____23101 == null)))
{return h__2236__auto____23101;
} else
{var h__2236__auto____23102 = cljs.core.hash_imap.call(null,this__2362__auto__);
this__23100.__hash = h__2236__auto____23102;
return h__2236__auto____23102;
}
});
singult.core.Unify.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2367__auto__,k__2368__auto__){
var this__23103 = this;
return this__2367__auto__.cljs$core$ILookup$_lookup$arity$3(this__2367__auto__,k__2368__auto__,null);
});
singult.core.Unify.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2369__auto__,k23098,else__2370__auto__){
var this__23104 = this;
if((k23098 === "\uFDD0'data"))
{return this__23104.data;
} else
{if((k23098 === "\uFDD0'mapping"))
{return this__23104.mapping;
} else
{if((k23098 === "\uFDD0'key-fn"))
{return this__23104.key_fn;
} else
{if((k23098 === "\uFDD0'enter"))
{return this__23104.enter;
} else
{if((k23098 === "\uFDD0'update"))
{return this__23104.update;
} else
{if((k23098 === "\uFDD0'exit"))
{return this__23104.exit;
} else
{if((k23098 === "\uFDD0'force-update?"))
{return this__23104.force_update_QMARK_;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__23104.__extmap,k23098,else__2370__auto__);
} else
{return null;
}
}
}
}
}
}
}
}
});
singult.core.Unify.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2374__auto__,k__2375__auto__,G__23097){
var this__23105 = this;
var pred__23106__23109 = cljs.core.identical_QMARK_;
var expr__23107__23110 = k__2375__auto__;
if(pred__23106__23109.call(null,"\uFDD0'data",expr__23107__23110))
{return (new singult.core.Unify(G__23097,this__23105.mapping,this__23105.key_fn,this__23105.enter,this__23105.update,this__23105.exit,this__23105.force_update_QMARK_,this__23105.__meta,this__23105.__extmap,null));
} else
{if(pred__23106__23109.call(null,"\uFDD0'mapping",expr__23107__23110))
{return (new singult.core.Unify(this__23105.data,G__23097,this__23105.key_fn,this__23105.enter,this__23105.update,this__23105.exit,this__23105.force_update_QMARK_,this__23105.__meta,this__23105.__extmap,null));
} else
{if(pred__23106__23109.call(null,"\uFDD0'key-fn",expr__23107__23110))
{return (new singult.core.Unify(this__23105.data,this__23105.mapping,G__23097,this__23105.enter,this__23105.update,this__23105.exit,this__23105.force_update_QMARK_,this__23105.__meta,this__23105.__extmap,null));
} else
{if(pred__23106__23109.call(null,"\uFDD0'enter",expr__23107__23110))
{return (new singult.core.Unify(this__23105.data,this__23105.mapping,this__23105.key_fn,G__23097,this__23105.update,this__23105.exit,this__23105.force_update_QMARK_,this__23105.__meta,this__23105.__extmap,null));
} else
{if(pred__23106__23109.call(null,"\uFDD0'update",expr__23107__23110))
{return (new singult.core.Unify(this__23105.data,this__23105.mapping,this__23105.key_fn,this__23105.enter,G__23097,this__23105.exit,this__23105.force_update_QMARK_,this__23105.__meta,this__23105.__extmap,null));
} else
{if(pred__23106__23109.call(null,"\uFDD0'exit",expr__23107__23110))
{return (new singult.core.Unify(this__23105.data,this__23105.mapping,this__23105.key_fn,this__23105.enter,this__23105.update,G__23097,this__23105.force_update_QMARK_,this__23105.__meta,this__23105.__extmap,null));
} else
{if(pred__23106__23109.call(null,"\uFDD0'force-update?",expr__23107__23110))
{return (new singult.core.Unify(this__23105.data,this__23105.mapping,this__23105.key_fn,this__23105.enter,this__23105.update,this__23105.exit,G__23097,this__23105.__meta,this__23105.__extmap,null));
} else
{return (new singult.core.Unify(this__23105.data,this__23105.mapping,this__23105.key_fn,this__23105.enter,this__23105.update,this__23105.exit,this__23105.force_update_QMARK_,this__23105.__meta,cljs.core.assoc.call(null,this__23105.__extmap,k__2375__auto__,G__23097),null));
}
}
}
}
}
}
}
});
singult.core.Unify.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2372__auto__,entry__2373__auto__){
var this__23111 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2373__auto__))
{return this__2372__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2372__auto__,cljs.core._nth.call(null,entry__2373__auto__,0),cljs.core._nth.call(null,entry__2373__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2372__auto__,entry__2373__auto__);
}
});
singult.core.Unify.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2379__auto__){
var this__23112 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'data",this__23112.data),cljs.core.vector.call(null,"\uFDD0'mapping",this__23112.mapping),cljs.core.vector.call(null,"\uFDD0'key-fn",this__23112.key_fn),cljs.core.vector.call(null,"\uFDD0'enter",this__23112.enter),cljs.core.vector.call(null,"\uFDD0'update",this__23112.update),cljs.core.vector.call(null,"\uFDD0'exit",this__23112.exit),cljs.core.vector.call(null,"\uFDD0'force-update?",this__23112.force_update_QMARK_)], true),this__23112.__extmap));
});
singult.core.Unify.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2381__auto__,opts__2382__auto__){
var this__23113 = this;
var pr_pair__2383__auto____23114 = (function (keyval__2384__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2382__auto__,keyval__2384__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2383__auto____23114,[cljs.core.str("#"),cljs.core.str("Unify"),cljs.core.str("{")].join(''),", ","}",opts__2382__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'data",this__23113.data),cljs.core.vector.call(null,"\uFDD0'mapping",this__23113.mapping),cljs.core.vector.call(null,"\uFDD0'key-fn",this__23113.key_fn),cljs.core.vector.call(null,"\uFDD0'enter",this__23113.enter),cljs.core.vector.call(null,"\uFDD0'update",this__23113.update),cljs.core.vector.call(null,"\uFDD0'exit",this__23113.exit),cljs.core.vector.call(null,"\uFDD0'force-update?",this__23113.force_update_QMARK_)], true),this__23113.__extmap));
});
singult.core.Unify.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2371__auto__){
var this__23115 = this;
return (7 + cljs.core.count.call(null,this__23115.__extmap));
});
singult.core.Unify.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2363__auto__,other__2364__auto__){
var this__23116 = this;
if(cljs.core.truth_((function (){var and__3822__auto____23117 = other__2364__auto__;
if(cljs.core.truth_(and__3822__auto____23117))
{var and__3822__auto____23118 = (this__2363__auto__.constructor === other__2364__auto__.constructor);
if(and__3822__auto____23118)
{return cljs.core.equiv_map.call(null,this__2363__auto__,other__2364__auto__);
} else
{return and__3822__auto____23118;
}
} else
{return and__3822__auto____23117;
}
})()))
{return true;
} else
{return false;
}
});
singult.core.Unify.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2366__auto__,G__23097){
var this__23119 = this;
return (new singult.core.Unify(this__23119.data,this__23119.mapping,this__23119.key_fn,this__23119.enter,this__23119.update,this__23119.exit,this__23119.force_update_QMARK_,G__23097,this__23119.__extmap,this__23119.__hash));
});
singult.core.Unify.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2365__auto__){
var this__23120 = this;
return this__23120.__meta;
});
singult.core.Unify.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2376__auto__,k__2377__auto__){
var this__23121 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.set(["\uFDD0'data","\uFDD0'force-update?","\uFDD0'enter","\uFDD0'exit","\uFDD0'key-fn","\uFDD0'update","\uFDD0'mapping"]),k__2377__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2376__auto__),this__23121.__meta),k__2377__auto__);
} else
{return (new singult.core.Unify(this__23121.data,this__23121.mapping,this__23121.key_fn,this__23121.enter,this__23121.update,this__23121.exit,this__23121.force_update_QMARK_,this__23121.__meta,this__23121.__hash,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__23121.__extmap,k__2377__auto__)),null));
}
});
singult.core.Unify.cljs$lang$type = true;
singult.core.Unify.cljs$lang$ctorPrSeq = (function (this__2401__auto__){
return cljs.core.list.call(null,"singult.core/Unify");
});
singult.core.__GT_Unify = (function __GT_Unify(data,mapping,key_fn,enter,update,exit,force_update_QMARK_){
return (new singult.core.Unify(data,mapping,key_fn,enter,update,exit,force_update_QMARK_));
});
singult.core.map__GT_Unify = (function map__GT_Unify(G__23099){
return (new singult.core.Unify((new cljs.core.Keyword("\uFDD0'data")).call(null,G__23099),(new cljs.core.Keyword("\uFDD0'mapping")).call(null,G__23099),(new cljs.core.Keyword("\uFDD0'key-fn")).call(null,G__23099),(new cljs.core.Keyword("\uFDD0'enter")).call(null,G__23099),(new cljs.core.Keyword("\uFDD0'update")).call(null,G__23099),(new cljs.core.Keyword("\uFDD0'exit")).call(null,G__23099),(new cljs.core.Keyword("\uFDD0'force-update?")).call(null,G__23099),null,cljs.core.dissoc.call(null,G__23099,"\uFDD0'data","\uFDD0'mapping","\uFDD0'key-fn","\uFDD0'enter","\uFDD0'update","\uFDD0'exit","\uFDD0'force-update?")));
});
singult.core.Unify;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
singult.core.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.instance_QMARK_.call(null,singult.core.Unify,x))
{var map__23175__23176 = x;
var map__23175__23177 = ((cljs.core.seq_QMARK_.call(null,map__23175__23176))?cljs.core.apply.call(null,cljs.core.hash_map,map__23175__23176):map__23175__23176);
var force_update_QMARK___23178 = cljs.core._lookup.call(null,map__23175__23177,"\uFDD0'force-update?",null);
var exit__23179 = cljs.core._lookup.call(null,map__23175__23177,"\uFDD0'exit",null);
var update__23180 = cljs.core._lookup.call(null,map__23175__23177,"\uFDD0'update",null);
var enter__23181 = cljs.core._lookup.call(null,map__23175__23177,"\uFDD0'enter",null);
var key_fn__23182 = cljs.core._lookup.call(null,map__23175__23177,"\uFDD0'key-fn",null);
var mapping__23183 = cljs.core._lookup.call(null,map__23175__23177,"\uFDD0'mapping",null);
var data__23184 = cljs.core._lookup.call(null,map__23175__23177,"\uFDD0'data",null);
var data_arr__23192 = (function (){var a__23185 = [];
var G__23186__23187 = cljs.core.seq.call(null,data__23184);
if(G__23186__23187)
{var d__23188 = cljs.core.first.call(null,G__23186__23187);
var G__23186__23189 = G__23186__23187;
while(true){
a__23185.push(d__23188);
var temp__3974__auto____23190 = cljs.core.next.call(null,G__23186__23189);
if(temp__3974__auto____23190)
{var G__23186__23191 = temp__3974__auto____23190;
{
var G__23228 = cljs.core.first.call(null,G__23186__23191);
var G__23229 = G__23186__23191;
d__23188 = G__23228;
G__23186__23189 = G__23229;
continue;
}
} else
{}
break;
}
} else
{}
return a__23185;
})();
return (new singult.coffee.Unify(data_arr__23192,(function (p1__23096_SHARP_){
return clj__GT_js.call(null,mapping__23183.call(null,p1__23096_SHARP_));
}),key_fn__23182,enter__23181,update__23180,exit__23179,force_update_QMARK___23178));
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{var o__23193 = {};
var G__23194__23195 = cljs.core.seq.call(null,x);
if(G__23194__23195)
{var G__23197__23199 = cljs.core.first.call(null,G__23194__23195);
var vec__23198__23200 = G__23197__23199;
var k__23201 = cljs.core.nth.call(null,vec__23198__23200,0,null);
var v__23202 = cljs.core.nth.call(null,vec__23198__23200,1,null);
var G__23194__23203 = G__23194__23195;
var G__23197__23204 = G__23197__23199;
var G__23194__23205 = G__23194__23203;
while(true){
var vec__23206__23207 = G__23197__23204;
var k__23208 = cljs.core.nth.call(null,vec__23206__23207,0,null);
var v__23209 = cljs.core.nth.call(null,vec__23206__23207,1,null);
var G__23194__23210 = G__23194__23205;
var key__23211 = clj__GT_js.call(null,k__23208);
if(cljs.core.string_QMARK_.call(null,key__23211))
{} else
{throw "Cannot convert; JavaScript map keys must be strings";
}
(o__23193[key__23211] = clj__GT_js.call(null,v__23209));
var temp__3974__auto____23212 = cljs.core.next.call(null,G__23194__23210);
if(temp__3974__auto____23212)
{var G__23194__23213 = temp__3974__auto____23212;
{
var G__23230 = cljs.core.first.call(null,G__23194__23213);
var G__23231 = G__23194__23213;
G__23197__23204 = G__23230;
G__23194__23205 = G__23231;
continue;
}
} else
{}
break;
}
} else
{}
return o__23193;
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{var a__23214 = [];
a__23214.push(":*:");
var G__23215__23216 = cljs.core.seq.call(null,x);
if(G__23215__23216)
{var item__23217 = cljs.core.first.call(null,G__23215__23216);
var G__23215__23218 = G__23215__23216;
while(true){
a__23214.push(clj__GT_js.call(null,item__23217));
var temp__3974__auto____23219 = cljs.core.next.call(null,G__23215__23218);
if(temp__3974__auto____23219)
{var G__23215__23220 = temp__3974__auto____23219;
{
var G__23232 = cljs.core.first.call(null,G__23215__23220);
var G__23233 = G__23215__23220;
item__23217 = G__23232;
G__23215__23218 = G__23233;
continue;
}
} else
{}
break;
}
} else
{}
return a__23214;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{var a__23221 = [];
var G__23222__23223 = cljs.core.seq.call(null,x);
if(G__23222__23223)
{var item__23224 = cljs.core.first.call(null,G__23222__23223);
var G__23222__23225 = G__23222__23223;
while(true){
a__23221.push(clj__GT_js.call(null,item__23224));
var temp__3974__auto____23226 = cljs.core.next.call(null,G__23222__23225);
if(temp__3974__auto____23226)
{var G__23222__23227 = temp__3974__auto____23226;
{
var G__23234 = cljs.core.first.call(null,G__23222__23227);
var G__23235 = G__23222__23227;
item__23224 = G__23234;
G__23222__23225 = G__23235;
continue;
}
} else
{}
break;
}
} else
{}
return a__23221;
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
}
});
singult.core.node_data = singult.coffee.node_data;
singult.core.attr = (function attr($n,m){
return singult.coffee.attr.call(null,$n,singult.core.clj__GT_js.call(null,m));
});
singult.core.render = (function render(v){
return singult.coffee.render.call(null,singult.coffee.canonicalize.call(null,singult.core.clj__GT_js.call(null,v)));
});
singult.core.merge_BANG_ = (function merge_BANG_($n,v){
if((v == null))
{return null;
} else
{return singult.coffee.merge.call(null,$n,singult.coffee.canonicalize.call(null,singult.core.clj__GT_js.call(null,v)));
}
});
/**
* @param {...*} var_args
*/
singult.core.unify = (function() { 
var unify__delegate = function (data,mapping,p__23236){
var map__23245__23246 = p__23236;
var map__23245__23247 = ((cljs.core.seq_QMARK_.call(null,map__23245__23246))?cljs.core.apply.call(null,cljs.core.hash_map,map__23245__23246):map__23245__23246);
var force_update_QMARK___23248 = cljs.core._lookup.call(null,map__23245__23247,"\uFDD0'force-update?",null);
var exit__23249 = cljs.core._lookup.call(null,map__23245__23247,"\uFDD0'exit",null);
var update__23250 = cljs.core._lookup.call(null,map__23245__23247,"\uFDD0'update",null);
var enter__23251 = cljs.core._lookup.call(null,map__23245__23247,"\uFDD0'enter",null);
var key_fn__23252 = cljs.core._lookup.call(null,map__23245__23247,"\uFDD0'key-fn",null);
return (new singult.core.Unify(data,mapping,key_fn__23252,enter__23251,update__23250,exit__23249,force_update_QMARK___23248));
};
var unify = function (data,mapping,var_args){
var p__23236 = null;
if (goog.isDef(var_args)) {
  p__23236 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unify__delegate.call(this, data, mapping, p__23236);
};
unify.cljs$lang$maxFixedArity = 2;
unify.cljs$lang$applyTo = (function (arglist__23253){
var data = cljs.core.first(arglist__23253);
var mapping = cljs.core.first(cljs.core.next(arglist__23253));
var p__23236 = cljs.core.rest(cljs.core.next(arglist__23253));
return unify__delegate(data, mapping, p__23236);
});
unify.cljs$lang$arity$variadic = unify__delegate;
return unify;
})()
;

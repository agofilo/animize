goog.provide('reflex.core');
goog.require('cljs.core');
void 0;
reflex.core.capture_derefed = (function capture_derefed(f){
var _BANG_recently_derefed23259__23260 = reflex.core._BANG_recently_derefed;
try{reflex.core._BANG_recently_derefed = cljs.core.atom.call(null,cljs.core.set([]),"\uFDD0'meta",cljs.core.ObjMap.fromObject(["\uFDD0'no-deref-monitor"],{"\uFDD0'no-deref-monitor":true}));
var res__23262 = f.call(null);
return cljs.core.ObjMap.fromObject(["\uFDD0'res","\uFDD0'derefed"],{"\uFDD0'res":res__23262,"\uFDD0'derefed":cljs.core.deref.call(null,reflex.core._BANG_recently_derefed)});
}finally {reflex.core._BANG_recently_derefed = _BANG_recently_derefed23259__23260;
}});
reflex.core.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
if(cljs.core.truth_((function (){var and__3822__auto____23264 = reflex.core._BANG_recently_derefed;
if(cljs.core.truth_(and__3822__auto____23264))
{return cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0'no-deref-monitor")).call(null,cljs.core.meta.call(null,derefable)));
} else
{return and__3822__auto____23264;
}
})()))
{return cljs.core.swap_BANG_.call(null,reflex.core._BANG_recently_derefed,(function (p1__23254_SHARP_){
return cljs.core.conj.call(null,p1__23254_SHARP_,derefable);
}));
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
reflex.core.notify_deref_watcher_BANG_.call(null,this$);
return this$.state;
});
void 0;reflex.core.IDisposable = {};
reflex.core.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3822__auto____23268 = this$;
if(and__3822__auto____23268)
{return this$.reflex$core$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3822__auto____23268;
}
})())
{return this$.reflex$core$IDisposable$dispose_BANG_$arity$1(this$);
} else
{return (function (){var or__3824__auto____23269 = (reflex.core.dispose_BANG_[goog.typeOf(this$)]);
if(or__3824__auto____23269)
{return or__3824__auto____23269;
} else
{var or__3824__auto____23270 = (reflex.core.dispose_BANG_["_"]);
if(or__3824__auto____23270)
{return or__3824__auto____23270;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
void 0;
/**
* @constructor
* @param {*} state
* @param {*} dirty_QMARK_
* @param {*} f
* @param {*} key
* @param {*} parent_watchables
* @param {*} watches
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
reflex.core.ComputedObservable = (function (state,dirty_QMARK_,f,key,parent_watchables,watches,__meta,__extmap){
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.f = f;
this.key = key;
this.parent_watchables = parent_watchables;
this.watches = watches;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2766571274;
if(arguments.length>6){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
reflex.core.ComputedObservable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2362__auto__){
var this__23274 = this;
var h__2236__auto____23275 = this__23274.__hash;
if(!((h__2236__auto____23275 == null)))
{return h__2236__auto____23275;
} else
{var h__2236__auto____23276 = cljs.core.hash_imap.call(null,this__2362__auto__);
this__23274.__hash = h__2236__auto____23276;
return h__2236__auto____23276;
}
});
reflex.core.ComputedObservable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2367__auto__,k__2368__auto__){
var this__23277 = this;
return this__2367__auto__.cljs$core$ILookup$_lookup$arity$3(this__2367__auto__,k__2368__auto__,null);
});
reflex.core.ComputedObservable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2369__auto__,k23272,else__2370__auto__){
var this__23278 = this;
if((k23272 === "\uFDD0'state"))
{return this__23278.state;
} else
{if((k23272 === "\uFDD0'dirty?"))
{return this__23278.dirty_QMARK_;
} else
{if((k23272 === "\uFDD0'f"))
{return this__23278.f;
} else
{if((k23272 === "\uFDD0'key"))
{return this__23278.key;
} else
{if((k23272 === "\uFDD0'parent-watchables"))
{return this__23278.parent_watchables;
} else
{if((k23272 === "\uFDD0'watches"))
{return this__23278.watches;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__23278.__extmap,k23272,else__2370__auto__);
} else
{return null;
}
}
}
}
}
}
}
});
reflex.core.ComputedObservable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2374__auto__,k__2375__auto__,G__23271){
var this__23279 = this;
var pred__23280__23283 = cljs.core.identical_QMARK_;
var expr__23281__23284 = k__2375__auto__;
if(pred__23280__23283.call(null,"\uFDD0'state",expr__23281__23284))
{return (new reflex.core.ComputedObservable(G__23271,this__23279.dirty_QMARK_,this__23279.f,this__23279.key,this__23279.parent_watchables,this__23279.watches,this__23279.__meta,this__23279.__extmap,null));
} else
{if(pred__23280__23283.call(null,"\uFDD0'dirty?",expr__23281__23284))
{return (new reflex.core.ComputedObservable(this__23279.state,G__23271,this__23279.f,this__23279.key,this__23279.parent_watchables,this__23279.watches,this__23279.__meta,this__23279.__extmap,null));
} else
{if(pred__23280__23283.call(null,"\uFDD0'f",expr__23281__23284))
{return (new reflex.core.ComputedObservable(this__23279.state,this__23279.dirty_QMARK_,G__23271,this__23279.key,this__23279.parent_watchables,this__23279.watches,this__23279.__meta,this__23279.__extmap,null));
} else
{if(pred__23280__23283.call(null,"\uFDD0'key",expr__23281__23284))
{return (new reflex.core.ComputedObservable(this__23279.state,this__23279.dirty_QMARK_,this__23279.f,G__23271,this__23279.parent_watchables,this__23279.watches,this__23279.__meta,this__23279.__extmap,null));
} else
{if(pred__23280__23283.call(null,"\uFDD0'parent-watchables",expr__23281__23284))
{return (new reflex.core.ComputedObservable(this__23279.state,this__23279.dirty_QMARK_,this__23279.f,this__23279.key,G__23271,this__23279.watches,this__23279.__meta,this__23279.__extmap,null));
} else
{if(pred__23280__23283.call(null,"\uFDD0'watches",expr__23281__23284))
{return (new reflex.core.ComputedObservable(this__23279.state,this__23279.dirty_QMARK_,this__23279.f,this__23279.key,this__23279.parent_watchables,G__23271,this__23279.__meta,this__23279.__extmap,null));
} else
{return (new reflex.core.ComputedObservable(this__23279.state,this__23279.dirty_QMARK_,this__23279.f,this__23279.key,this__23279.parent_watchables,this__23279.watches,this__23279.__meta,cljs.core.assoc.call(null,this__23279.__extmap,k__2375__auto__,G__23271),null));
}
}
}
}
}
}
});
reflex.core.ComputedObservable.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this__23285 = this;
reflex.core.notify_deref_watcher_BANG_.call(null,this$);
if(cljs.core.not.call(null,this__23285.dirty_QMARK_))
{return this$.state;
} else
{var map__23286__23287 = reflex.core.capture_derefed.call(null,this__23285.f);
var map__23286__23288 = ((cljs.core.seq_QMARK_.call(null,map__23286__23287))?cljs.core.apply.call(null,cljs.core.hash_map,map__23286__23287):map__23286__23287);
var derefed__23289 = cljs.core._lookup.call(null,map__23286__23288,"\uFDD0'derefed",null);
var res__23290 = cljs.core._lookup.call(null,map__23286__23288,"\uFDD0'res",null);
var G__23291__23292 = cljs.core.seq.call(null,this__23285.parent_watchables);
if(G__23291__23292)
{var w__23293 = cljs.core.first.call(null,G__23291__23292);
var G__23291__23294 = G__23291__23292;
while(true){
cljs.core.remove_watch.call(null,w__23293,this__23285.key);
var temp__3974__auto____23295 = cljs.core.next.call(null,G__23291__23294);
if(temp__3974__auto____23295)
{var G__23291__23296 = temp__3974__auto____23295;
{
var G__23344 = cljs.core.first.call(null,G__23291__23296);
var G__23345 = G__23291__23296;
w__23293 = G__23344;
G__23291__23294 = G__23345;
continue;
}
} else
{}
break;
}
} else
{}
this$.parent_watchables = derefed__23289;
var G__23297__23298 = cljs.core.seq.call(null,derefed__23289);
if(G__23297__23298)
{var w__23299 = cljs.core.first.call(null,G__23297__23298);
var G__23297__23300 = G__23297__23298;
while(true){
cljs.core.add_watch.call(null,w__23299,this__23285.key,((function (w__23299,G__23297__23300){
return (function (){
this$.dirty_QMARK_ = true;
return cljs.core._notify_watches.call(null,this$,null,null);
});})(w__23299,G__23297__23300))
);
var temp__3974__auto____23301 = cljs.core.next.call(null,G__23297__23300);
if(temp__3974__auto____23301)
{var G__23297__23302 = temp__3974__auto____23301;
{
var G__23346 = cljs.core.first.call(null,G__23297__23302);
var G__23347 = G__23297__23302;
w__23299 = G__23346;
G__23297__23300 = G__23347;
continue;
}
} else
{}
break;
}
} else
{}
this$.state = res__23290;
this$.dirty_QMARK_ = false;
return res__23290;
}
});
reflex.core.ComputedObservable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2372__auto__,entry__2373__auto__){
var this__23303 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2373__auto__))
{return this__2372__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2372__auto__,cljs.core._nth.call(null,entry__2373__auto__,0),cljs.core._nth.call(null,entry__2373__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2372__auto__,entry__2373__auto__);
}
});
reflex.core.ComputedObservable.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,_23305,_){
var this__23304 = this;
var G__23306__23307 = cljs.core.seq.call(null,this__23304.watches);
if(G__23306__23307)
{var G__23309__23311 = cljs.core.first.call(null,G__23306__23307);
var vec__23310__23312 = G__23309__23311;
var key__23313 = cljs.core.nth.call(null,vec__23310__23312,0,null);
var wf__23314 = cljs.core.nth.call(null,vec__23310__23312,1,null);
var G__23306__23315 = G__23306__23307;
var G__23309__23316 = G__23309__23311;
var G__23306__23317 = G__23306__23315;
while(true){
var vec__23318__23319 = G__23309__23316;
var key__23320 = cljs.core.nth.call(null,vec__23318__23319,0,null);
var wf__23321 = cljs.core.nth.call(null,vec__23318__23319,1,null);
var G__23306__23322 = G__23306__23317;
wf__23321.call(null);
var temp__3974__auto____23323 = cljs.core.next.call(null,G__23306__23322);
if(temp__3974__auto____23323)
{var G__23306__23324 = temp__3974__auto____23323;
{
var G__23348 = cljs.core.first.call(null,G__23306__23324);
var G__23349 = G__23306__23324;
G__23309__23316 = G__23348;
G__23306__23317 = G__23349;
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
reflex.core.ComputedObservable.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,wf){
var this__23325 = this;
return this$.watches = cljs.core.assoc.call(null,this__23325.watches,key,wf);
});
reflex.core.ComputedObservable.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__23326 = this;
return this$.watches = cljs.core.dissoc.call(null,this__23326.watches,key);
});
reflex.core.ComputedObservable.prototype.reflex$core$IDisposable$ = true;
reflex.core.ComputedObservable.prototype.reflex$core$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var this__23327 = this;
var G__23328__23329 = cljs.core.seq.call(null,this__23327.parent_watchables);
if(G__23328__23329)
{var w__23330 = cljs.core.first.call(null,G__23328__23329);
var G__23328__23331 = G__23328__23329;
while(true){
cljs.core.remove_watch.call(null,w__23330,this__23327.key);
var temp__3974__auto____23332 = cljs.core.next.call(null,G__23328__23331);
if(temp__3974__auto____23332)
{var G__23328__23333 = temp__3974__auto____23332;
{
var G__23350 = cljs.core.first.call(null,G__23328__23333);
var G__23351 = G__23328__23333;
w__23330 = G__23350;
G__23328__23331 = G__23351;
continue;
}
} else
{}
break;
}
} else
{}
return this$.watches = null;
});
reflex.core.ComputedObservable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2379__auto__){
var this__23334 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'state",this__23334.state),cljs.core.vector.call(null,"\uFDD0'dirty?",this__23334.dirty_QMARK_),cljs.core.vector.call(null,"\uFDD0'f",this__23334.f),cljs.core.vector.call(null,"\uFDD0'key",this__23334.key),cljs.core.vector.call(null,"\uFDD0'parent-watchables",this__23334.parent_watchables),cljs.core.vector.call(null,"\uFDD0'watches",this__23334.watches)], true),this__23334.__extmap));
});
reflex.core.ComputedObservable.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2381__auto__,opts__2382__auto__){
var this__23335 = this;
var pr_pair__2383__auto____23336 = (function (keyval__2384__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2382__auto__,keyval__2384__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2383__auto____23336,[cljs.core.str("#"),cljs.core.str("ComputedObservable"),cljs.core.str("{")].join(''),", ","}",opts__2382__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'state",this__23335.state),cljs.core.vector.call(null,"\uFDD0'dirty?",this__23335.dirty_QMARK_),cljs.core.vector.call(null,"\uFDD0'f",this__23335.f),cljs.core.vector.call(null,"\uFDD0'key",this__23335.key),cljs.core.vector.call(null,"\uFDD0'parent-watchables",this__23335.parent_watchables),cljs.core.vector.call(null,"\uFDD0'watches",this__23335.watches)], true),this__23335.__extmap));
});
reflex.core.ComputedObservable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2371__auto__){
var this__23337 = this;
return (6 + cljs.core.count.call(null,this__23337.__extmap));
});
reflex.core.ComputedObservable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2363__auto__,other__2364__auto__){
var this__23338 = this;
if(cljs.core.truth_((function (){var and__3822__auto____23339 = other__2364__auto__;
if(cljs.core.truth_(and__3822__auto____23339))
{var and__3822__auto____23340 = (this__2363__auto__.constructor === other__2364__auto__.constructor);
if(and__3822__auto____23340)
{return cljs.core.equiv_map.call(null,this__2363__auto__,other__2364__auto__);
} else
{return and__3822__auto____23340;
}
} else
{return and__3822__auto____23339;
}
})()))
{return true;
} else
{return false;
}
});
reflex.core.ComputedObservable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2366__auto__,G__23271){
var this__23341 = this;
return (new reflex.core.ComputedObservable(this__23341.state,this__23341.dirty_QMARK_,this__23341.f,this__23341.key,this__23341.parent_watchables,this__23341.watches,G__23271,this__23341.__extmap,this__23341.__hash));
});
reflex.core.ComputedObservable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2365__auto__){
var this__23342 = this;
return this__23342.__meta;
});
reflex.core.ComputedObservable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2376__auto__,k__2377__auto__){
var this__23343 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.set(["\uFDD0'dirty?","\uFDD0'state","\uFDD0'key","\uFDD0'f","\uFDD0'watches","\uFDD0'parent-watchables"]),k__2377__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2376__auto__),this__23343.__meta),k__2377__auto__);
} else
{return (new reflex.core.ComputedObservable(this__23343.state,this__23343.dirty_QMARK_,this__23343.f,this__23343.key,this__23343.parent_watchables,this__23343.watches,this__23343.__meta,this__23343.__hash,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__23343.__extmap,k__2377__auto__)),null));
}
});
reflex.core.ComputedObservable.cljs$lang$type = true;
reflex.core.ComputedObservable.cljs$lang$ctorPrSeq = (function (this__2401__auto__){
return cljs.core.list.call(null,"reflex.core/ComputedObservable");
});
reflex.core.__GT_ComputedObservable = (function __GT_ComputedObservable(state,dirty_QMARK_,f,key,parent_watchables,watches){
return (new reflex.core.ComputedObservable(state,dirty_QMARK_,f,key,parent_watchables,watches));
});
reflex.core.map__GT_ComputedObservable = (function map__GT_ComputedObservable(G__23273){
return (new reflex.core.ComputedObservable((new cljs.core.Keyword("\uFDD0'state")).call(null,G__23273),(new cljs.core.Keyword("\uFDD0'dirty?")).call(null,G__23273),(new cljs.core.Keyword("\uFDD0'f")).call(null,G__23273),(new cljs.core.Keyword("\uFDD0'key")).call(null,G__23273),(new cljs.core.Keyword("\uFDD0'parent-watchables")).call(null,G__23273),(new cljs.core.Keyword("\uFDD0'watches")).call(null,G__23273),null,cljs.core.dissoc.call(null,G__23273,"\uFDD0'state","\uFDD0'dirty?","\uFDD0'f","\uFDD0'key","\uFDD0'parent-watchables","\uFDD0'watches")));
});
reflex.core.ComputedObservable;
reflex.core.ComputedObservable.prototype.cljs$core$IHash$ = true;
reflex.core.ComputedObservable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
return this$.key;
});

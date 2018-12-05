/*!
 * VERSION: beta 0.2.3
 * DATE: 2013-07-10
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function (t) {
    "use strict";
    var e = t.GreenSockGlobals || t,
        i = function (t) {
            var i, s = t.split("."),
                r = e;
            for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {};
            return r
        },
        s = i("com.greensock.utils"),
        r = function (t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        },
        n = document,
        a = n.defaultView ? n.defaultView.getComputedStyle : function () {},
        o = /([A-Z])/g,
        h = function (t, e, i, s) {
            var r;
            return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), s ? r : parseInt(r, 10) || 0
        },
        l = function (t) {
            return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1
        },
        _ = function (t) {
            var e, i, s, r = [],
                n = t.length;
            for (e = 0; n > e; e++)
                if (i = t[e], l(i))
                    for (s = i.length, s = 0; i.length > s; s++) r.push(i[s]);
                else r.push(i);
            return r
        },
        u = ")eefec303079ad17405c",
        c = /(?:<br>|<br\/>|<br \/>)/gi,
        p = n.all && !n.addEventListener,
        f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'"),
        m = function (t) {
            t = t || "";
            var e = -1 !== t.indexOf("++"),
                i = 1;
            return e && (t = t.split("++").join("")),
                function () {
                    return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
                }
        },
        d = s.SplitText = e.SplitText = function (t, e) {
            if ("string" == typeof t && (t = d.selector(t)), !t) throw "cannot split a null element.";
            this.elements = l(t) ? _(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
        },
        g = function (t, e, i, s, o) {
            c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));
            var l, _, p, f, d, g, v, y, T, w, b, x, P, S = r(t),
                C = e.type || e.split || "chars,words,lines",
                k = -1 !== C.indexOf("lines") ? [] : null,
                R = -1 !== C.indexOf("words"),
                A = -1 !== C.indexOf("chars"),
                D = "absolute" === e.position || e.absolute === !0,
                O = D ? "&#173; " : " ",
                M = -999,
                L = a(t),
                I = h(t, "paddingLeft", L),
                E = h(t, "borderBottomWidth", L) + h(t, "borderTopWidth", L),
                N = h(t, "borderLeftWidth", L) + h(t, "borderRightWidth", L),
                F = h(t, "paddingTop", L) + h(t, "paddingBottom", L),
                U = h(t, "paddingLeft", L) + h(t, "paddingRight", L),
                X = h(t, "textAlign", L, !0),
                z = t.clientHeight,
                B = t.clientWidth,
                j = S.length,
                Y = "</div>",
                q = m(e.wordsClass),
                V = m(e.charsClass),
                Q = -1 !== (e.linesClass || "").indexOf("++"),
                G = e.linesClass;
            for (Q && (G = G.split("++").join("")), p = q(), f = 0; j > f; f++) g = S.charAt(f), ")" === g && S.substr(f, 20) === u ? (p += Y + "<BR/>", f !== j - 1 && (p += " " + q()), f += 19) : " " === g && " " !== S.charAt(f - 1) && f !== j - 1 ? (p += Y, f !== j - 1 && (p += O + q())) : p += A && " " !== g ? V() + g + "</div>" : g;
            for (t.innerHTML = p + Y, d = t.getElementsByTagName("*"), j = d.length, v = [], f = 0; j > f; f++) v[f] = d[f];
            if (k || D)
                for (f = 0; j > f; f++) y = v[f], _ = y.parentNode === t, (_ || D || A && !R) && (T = y.offsetTop, k && _ && T !== M && "BR" !== y.nodeName && (l = [], k.push(l), M = T), D && (y._x = y.offsetLeft, y._y = T, y._w = y.offsetWidth, y._h = y.offsetHeight), k && (R !== _ && A || (l.push(y), y._x -= I), _ && f && (v[f - 1]._wordEnd = !0)));
            for (f = 0; j > f; f++) y = v[f], _ = y.parentNode === t, "BR" !== y.nodeName ? (D && (b = y.style, R || _ || (y._x += y.parentNode._x, y._y += y.parentNode._y), b.left = y._x + "px", b.top = y._y + "px", b.position = "absolute", b.display = "block", b.width = y._w + 1 + "px", b.height = y._h + "px"), R ? _ ? s.push(y) : A && i.push(y) : _ ? (t.removeChild(y), v.splice(f--, 1), j--) : !_ && A && (T = !k && !D && y.nextSibling, t.appendChild(y), T || t.appendChild(n.createTextNode(" ")), i.push(y))) : k || D ? (t.removeChild(y), v.splice(f--, 1), j--) : R || t.appendChild(y);
            if (k) {
                for (D && (w = n.createElement("div"), t.appendChild(w), x = w.offsetWidth + "px", T = w.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(w)), b = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (P = !D || !R && !A, f = 0; k.length > f; f++) {
                    for (l = k[f], w = n.createElement("div"), w.style.cssText = "display:block;text-align:" + X + ";position:" + (D ? "absolute;" : "relative;"), G && (w.className = G + (Q ? f + 1 : "")), o.push(w), j = l.length, d = 0; j > d; d++) "BR" !== l[d].nodeName && (y = l[d], w.appendChild(y), P && (y._wordEnd || R) && w.appendChild(n.createTextNode(" ")), D && (0 === d && (w.style.top = y._y + "px", w.style.left = I + T + "px"), y.style.top = "0px", T && (y.style.left = y._x - T + "px")));
                    R || A || (w.innerHTML = r(w).split(String.fromCharCode(160)).join(" ")), D && (w.style.width = x, w.style.height = y._h + "px"), t.appendChild(w)
                }
                t.style.cssText = b
            }
            D && (z > t.clientHeight && (t.style.height = z - F + "px", z > t.clientHeight && (t.style.height = z + E + "px")), B > t.clientWidth && (t.style.width = B - U + "px", B > t.clientWidth && (t.style.width = B + N + "px")))
        },
        v = d.prototype;
    v.split = function (t) {
        this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e = 0; this.elements.length > e; e++) this._originals[e] = this.elements[e].innerHTML, g(this.elements[e], this.vars, this.chars, this.words, this.lines);
        return this.isSplit = !0, this
    }, v.revert = function () {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, d.selector = t.$ || t.jQuery || function (e) {
        return t.$ ? (d.selector = t.$, t.$(e)) : n ? n.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
    }
})(window || {});

 /*Mu2.3*/
var myAdApi;


window.onload = function() {
	myAdApi = "none";
	var adInitSel = adInit;
	try { if (Enabler && window.adApi == "doubleclick") { myAdApi = "doubleclick"; } } catch(err) { /*console.log("[ad] ","Not loaded: Enabler");*/ }
	try { if (spongeapi && window.adApi == "spongecell") { myAdApi = "spongecell"; } } catch(err) { /*console.log("[ad] ","Not loaded: spongeapi");*/ }

	try { if(MuI) { adInitSel = MuI.ini; MuI.IU = true; } }catch(e) { adInitSel = adInit; }

	console.log("[ad] ","AD Type requested: " + window.adApi + " | loaded: " + myAdApi);

	switch(myAdApi) {
		case "doubleclick":
			if (Enabler.isInitialized()) { adInitSel(); } else { Enabler.addEventListener(studio.events.StudioEvent.INIT, adInitSel);	}
			break;

		case "spongecell":
			spongeapi.init({type: 'custom', onReady: adInitSel});
			break;

		default:
			adInitSel();
	}
}

var isFontsLoaded = false;
function webFontLoad() {
	if (isFontsLoaded === true) { return false; }
	try { if (WebFont && window.fontsToLoad.length > 0) {
		console.log("[ad] ","Webfonts Loading: " + window.fontsToLoad);
		var cfg = (window.waitFonts === true) ? function(fnt) { window.fontsToLoad.shift(); console.log("[ad] ","Webfont loaded: "+fnt+" | remain: "+window.fontsToLoad.length); if (window.fontsToLoad.length == 0) { window.fontsToLoad.shift();isFontsLoaded = true; adInit(); }  } : null;
		WebFont.load({
	        custom: {
	            families: window.fontsToLoad
	        },
	        fontactive: cfg,
	        fontinactive: function(fnt){ console.log("[ad] ","Webfont Load TIMEOUT : Unable to load all Webfonts | "+fnt ); }
	    });
	    return (window.waitFonts === true) ? true : false;
	} } catch(err) { console.log("[ad] ","Webfonts: Do not load"); return false }
}

function adInit(){
	////////////////////////////////////////////// GENERIC BEGIN //////////////////////////////////////////////
	'use strict';

	console.log("[ad] ","adInit");
	if (webFontLoad() == true && isFontsLoaded === false) { return; }else{ console.log("[ad] ","Webfonts loaded or not requested"); }

	var debug = true;

	function ge(id) {
		return document.getElementById(id);
	}
	function trace(msg, type) {
		if(debug) { (type) ? window.console[type]("[ad] ", msg) : window.console.log("[ad] ", msg);}
	}
	var st;
	function tt(){ // Time Track
		if(isNaN(st)){ st = new Date().getTime(); }
		else{ trace('Ad Animation Seconds: '+((new Date().getTime() - st) * 0.001)); st = undefined; }
	}

	function readMeta() {
		var metaTags = document.getElementsByTagName("meta");
		for (var m = metaTags.length - 1; m >= 0; m--) {
			//trace(metaTags[m].name.toLowerCase() +" | "+ metaTags[m].content);
			var n = metaTags[m].name.toLowerCase();
			var c = metaTags[m].content.toLowerCase();

			testWrapperVal("width", n, c);
			testWrapperVal("height", n, c);
		};
	}
	function testWrapperVal(wrapProp, metaName, metaContent) {
		var proVal = window.getComputedStyle(ge("ad__wrapper"), null).getPropertyValue(wrapProp).replace("px", "");

		if (metaName == "ad.size" || metaName == "viewport") {
			if (metaContent.indexOf(wrapProp) > -1) {
				var metaVal = Number(metaContent.substr(metaContent.indexOf(wrapProp)+wrapProp.length).match(/[^\=]\d*/));
				//trace("tag Name: " + metaName + " | tag Prop: " + wrapProp + " | tag Val: " + metaVal + " | wrap Val: " + proVal);
				var ret = (proVal == metaVal) ? true : false;
				if (!ret) { trace("META TAG ["+metaName+"] value for ["+wrapProp+"] does not match Wrapper value ["+proVal+"] vs ["+metaVal+"]", "error"); }
			}
		}
	}
	if(debug) { readMeta(); }
	////////////////////////////////////////////// GENERIC END //////////////////////////////////////////////

	////////////////////////////////////////////// ROLL OVER AND CLICK BEGIN //////////////////////////////////////////////
	//-----------------------------  onClickTagExit -------------------------------//
	function onClickTagExit(exitObj) {
		switch(myAdApi) {
			case "doubleclick":
				Enabler.exit(exitObj.dc);
				break;
			case "spongecell":
				spongeapi.openLanding(exitObj.spc);
				break;
			default:
				window.open(window.clickTag);
		}
	}
	//*****************************************************************************//
	function hotSpotRollOver(ev){
        // standard effect
		// TweenLite.to('#cta_caret', .2, { x: 2 });
        // non standard effect
        //TweenLite.to('#ctaBox', .2, { alpha: .7 });
        //ge('ctaBox').style.backgroundColor='#A80309';
	}
    function hotSpotRollOut(ev){
        // standard effect
        // TweenLite.to('#cta_caret', .2, { x: 0 });
        // non standard effect
        //TweenLite.to('#ctaBox', .2, { alpha: 1 });
        //ge('ctaBox').style.backgroundColor='#CD040B';
    }
    var hotSpot = ge("hotSpot");
	hotSpot.addEventListener('mouseover',hotSpotRollOver);
    hotSpot.addEventListener('mouseout',hotSpotRollOut);

	//----------------------------- clicktag/Exit -------------------------------//
	hotSpot.addEventListener("click",function(){
   		onClickTagExit({dc:"Background_Exit", spc: ''});
   	});
	//*****************************************************************************//

	////////////////////////////////////////////// ROLL OVER AND CLICK END //////////////////////////////////////////////

	////////////////////////////////////////////// API CUSTOM BEGIN //////////////////////////////////////////////
	function DC_custom_EvLst(){
		Enabler.exit("Background_Exit");
	}
	////////////////////////////////////////////// API CUSTOM END //////////////////////////////////////////////

	function DC_custom_EvLst(){
		Enabler.exit("Background_Exit");
	}
	////////////////////////////////////////////// API CUSTOM END //////////////////////////////////////////////

	////////////////////////////////////////////// ADDITIONAL ANIMATION BEGIN //////////////////////////////////////////////
	// --

	//@prepros-prepend "SplitText.js";
	function stackInAnimation(itms, rate, dfrom, val, easeoverlap, msked, objsType) {
		var tlo = { opacity: 0, ease: Strong.easeOut };
		easeoverlap = (isNaN(easeoverlap))? 0 : easeoverlap;
		val = (dfrom == 'L' || dfrom == 'T') ? '-='+val : '+='+val;
		//dfrom = (dfrom == 'L' || dfrom == 'R') ? 'left' : (dfrom == 'T' || dfrom == 'B' || dfrom == undefined) ? 'top' : val = undefined;
		dfrom = (dfrom == 'L' || dfrom == 'R') ? 'x' : (dfrom == 'T' || dfrom == 'B' || !dfrom) ? 'y' : val = null;
		tlo[dfrom] = val;
		var isSplit = (objsType == "isSplit") ? true : false;
		trace('isSplit = ' + isSplit);
		if(isSplit == true){
			var father = itms[0].parentNode;
			for (var i = 0; i < itms.length; i++) {
				itms[i].setAttribute('id', father.id+"_splt_"+i);
				TweenLite.set(itms[i], { width:itms[i].getBoundingClientRect().width, height:itms[i].getBoundingClientRect().height, top:itms[i].getBoundingClientRect().top, left:itms[i].getBoundingClientRect().left });
				itms[i] = "#"+itms[i].id;
			}
			TweenLite.set(father.children, { position:'fixed' });
		}
		for (var i = 0; i < itms.length; i++) {
			TweenLite.set(itms[i], { opacity: 1 });
			if (msked == true) {
				var mskObj = setMasks(itms[i], objsType);
				tlo.onComplete = function() { clearMasks(this.target[0]); };
				//trace('ID:: ' + itms[i]);
				if (val.slice(-1) === "%") {
					trace('val is percentage');
					var ival = val.substr(0,2);
					var pval = parseFloat(val.slice(2))/100;
					var itm = (typeof(itms[i]) === "string") ? TweenLite.selector(itms[i])[0] : itms[i];
					var aval = (dfrom == 'left') ? itm.getBoundingClientRect().width : (dfrom == 'y') ? itm.getBoundingClientRect().height : 0;
					tlo[dfrom] = ival + (aval * pval);
				}
			}
			tlo.delay = (rate - (rate * easeoverlap)) * i;
			TweenLite.from(itms[i], rate + (rate * easeoverlap), tlo);
		};
	}
	function setMasks(elm, objsType) {
		//trace("setMasks::");
		elm = (typeof(elm) === "string") ? TweenLite.selector(elm)[0] : elm;
		var tmpDiv = document.createElement('div');
    	tmpDiv.appendChild(elm.cloneNode(true));
    	tmpDiv.setAttribute('id', elm.id + "_msk");
    	tmpDiv.setAttribute('class', "tmpmsk");
    	var elmH = elm.getBoundingClientRect().height;
    	var elmCLH = parseInt(window.getComputedStyle(elm,null).getPropertyValue("line-height"));
    	var elmCFS = parseInt(window.getComputedStyle(elm,null).getPropertyValue("font-size"));
    	//trace(elmH+" | "+elmCLH+" | "+elmCFS);
    	TweenLite.set(tmpDiv, { width:elm.getBoundingClientRect().width, height:Math.max(elmH,elmCLH,elmCFS), top:elm.getBoundingClientRect().top, left:elm.getBoundingClientRect().left });
    	TweenLite.set(tmpDiv.firstChild, { position:'absolute', top:0, left:0 });
    	if(objsType){ tmpDiv.setAttribute('class', "tmpmsk"+objsType.toLowerCase()); }
    	var retVar = {or: elm, msk: tmpDiv};
    	elm.parentNode.replaceChild(tmpDiv, elm);
		return retVar;
	}
	function clearMasks(elm) {
		//trace("clearMasks::");
		elm = (typeof(elm) === "string") ? TweenLite.selector(elm)[0] : elm;
		TweenLite.set(elm, { clearProps: 'all' });
		elm.parentNode.parentNode.replaceChild(elm, elm.parentNode);
	}

	////////////////////////////////////////////// ADDITIONAL ANIMATION END //////////////////////////////////////////////

	////////////////////////////////////////////// FRAME ANIMATION BEGIN //////////////////////////////////////////////
	// Global Animation Duration
	var gAD = 0.3;
	// Global Animation Ease function
	var gAE = Power2.easeOut;
	// Frames Duration starting with unused frame 0, standard should sum 15 max
	var fD = [0, 1, 1, 1.3, 1, 1.3, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	// Frames Sequence, ends with 'tt' to Finish TimeTrack
	var frmSec = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f8b', 'f9', 'f10', 'f11', 'f12', 'ff', 'tt'];
	// Sequence Index init as 0
	var secIndx = 0;
	// Loop count
	var repeat = 0;

	function nextFrameCall(sec, fid) {
		try {
			var call = (fid == 'tt') ? eval(fid) : eval('frame_'+fid);
			//trace('nextFrameCall : ' + call.name);
			TweenLite.delayedCall(sec, call);
			secIndx++;
		}catch(err){ trace('Function \"'+'frame_'+fid+'\" not found!', 'warn');}
	}
	function setFrameVisible(fid, hideOthers) {
		if (hideOthers) {
			for (var i = frmSec.length - 1; i >= 0; i--) {
				TweenLite.set('#frame_'+frmSec[i], { opacity:0, display:'none' });
			};
		}
		TweenLite.set('#frame_'+fid, { opacity:1, display:'block' });
	}

	function framesInit() {
		trace('framesInit');
		TweenLite.set('#ad__content', { display:'block' });
		tt(); // Start TimeTrack
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}

	/////////////// FRAME FUNCTIONS FROM HERE ///////////////
	function frame_f1() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		// In animations
		TweenLite.set(['#logo'], { opacity: 1 });
		// Out animations
		TweenLite.set(['#logo'], { opacity: 0, delay: fD[secIndx] });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}
	function frame_f2() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		// In animations
		var splt1 = new SplitText(ge('f2_obj1'), { type:"chars" });
		stackInAnimation(splt1.chars, gAD * 0.1, "T", 0, 0);
		// Out animations
		TweenLite.set('#f2_obj1', { opacity: 0, delay: fD[secIndx] });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}
	function frame_f3() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		// In animations
		TweenLite.set(['#bg1', '#f3_obj1'], { opacity: 1 });
		TweenLite.from('#f3_obj1', (gAD*.7), { scale:.5, opacity:0, delay: gAD });
		// Out animations
		TweenLite.set(['#f3_obj1','#bg1'], { opacity: 0, delay: fD[secIndx] });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}
	function frame_f4() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		// In animations
		var splt1 = new SplitText(ge('f4_obj1'), { type:"chars" });
		stackInAnimation(splt1.chars, gAD * 0.1, "T", 0, 0);
		// Out animations
		TweenLite.set('#f4_obj1', { opacity: 0, delay: fD[secIndx] });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}
	function frame_f5() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		// In animations
		TweenLite.set(['#bg2', '#f5_obj1'], { opacity: 1 });
		TweenLite.from('#f5_obj1', (gAD*.7), { scale:.5, opacity:0, delay: gAD });
		// Out animations
		TweenLite.set(['#f5_obj1','#bg2'], { opacity: 0, delay: fD[secIndx] });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}
	function frame_f6() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		// In animations
		var splt1 = new SplitText(ge('f6_obj1'), { type:"words" });
		stackInAnimation(splt1.words, gAD, "T", 0, 0);
		// Out animations
		TweenLite.set('#f6_obj1', { opacity: 0, delay: fD[secIndx] });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}
	function frame_f7() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		// In animations
		var splt1 = new SplitText(ge('f7_obj1'), { type:"chars" });
		stackInAnimation(splt1.chars, gAD * 0.1, "T", 0, 0);
		// Out animations
		TweenLite.set('#f7_obj1', { opacity: 0, delay: fD[secIndx] });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}
	function frame_f8() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		// In animations
		TweenLite.set(['#f8_obj1'], { opacity: 1 });
		// Out animations
		TweenLite.set(['#f8_obj1'], { opacity: 0, delay: fD[secIndx] });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}
	function frame_f8b() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		// In animations
		var splt1 = new SplitText(ge('f8b_obj1'), { type:"chars" });
		stackInAnimation(splt1.chars, gAD * 0.1, "T", 0, 0);
		// Out animations
		TweenLite.set(['#f8b_obj1'], { opacity: 0, delay: fD[secIndx] });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}
	function frame_f9() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		// In animations
		TweenLite.set(['#f9_obj1'], { opacity: 1 });
		TweenLite.from('#f9_obj1', (gAD*.7), { scale:.5, opacity:0, delay: gAD });
		// Out animations
		TweenLite.set(['#f9_obj1'], { opacity: 0, delay: fD[secIndx] });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}
	function frame_f10() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		TweenLite.set(['#f10_obj1','#f10_obj2','#f10_obj3'], { opacity: 0 });
		// In animations
		TweenLite.set(['#f10_obj1'], { opacity: 1 });
		TweenLite.set(['#f10_obj2'], { opacity: 1, delay: gAD });
		TweenLite.set(['#f10_obj3'], { opacity: 1, delay: gAD*2 });
		// Out animations
		TweenLite.set(['#f10_obj1','#f10_obj2','#f10_obj3'], { opacity: 0, delay: fD[secIndx] });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}
	function frame_f11() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		// In animations
		TweenLite.set(['#ad__wrapper'], { background: '#F6F6F6' });
		TweenLite.set(['#f11_obj1'], { opacity: 1 });
		TweenLite.from('#f11_obj1', (gAD*.7), { scale:.5, opacity:0, delay: gAD });
		// Out animations
		TweenLite.set(['#f11_obj1'], { opacity: 0, delay: fD[secIndx] });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}
	function frame_f12() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		// In animations
		TweenLite.set(['#f12_obj1'], { opacity: 1 });
		// Out animations
		TweenLite.set(['#f12_obj1'], { opacity: 0, delay: fD[secIndx] });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}
	function frame_ff() {
		// Set frame content visible
		setFrameVisible(frmSec[secIndx-1], false);
		TweenLite.set(['#ad__wrapper'], { background: '#000000' });
		TweenLite.set(['#logo'], {width: 53, height: 21, top: 214, left: 15 }) 
		// In animations
		//stackInAnimation(splt1.lines, gAD * 1, "L", 50, 0);
		TweenLite.set(['#ff_obj1'], { opacity: 1 });
		// // CTA and Logo In
		TweenLite.set(['#logo', '#ctaBox'], { opacity: 1, delay: (gAD) });
		// Next frame call
		nextFrameCall(fD[secIndx], frmSec[secIndx]);
	}

	

	////////////////////////////////////////////// FRAME ANIMATION END //////////////////////////////////////////////
	framesInit();
}

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.calze_due = function() {
	this.initialize(img.calze_due);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,412);


(lib.calze_fin = function() {
	this.initialize(img.calze_fin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,342);


(lib.calze_uno = function() {
	this.initialize(img.calze_uno);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,521);


(lib.gold = function() {
	this.initialize(img.gold);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,496,224);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiAfQgggehtgBQBtgBAggdQAhgdABhnQABBnAiAdQAgAdBtABQhtABggAeQgiAegBBmQgBhmghgeg");
	this.shape.setTransform(17.6,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(0,0,35.2,32.6), null);


(lib.Simbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.471,1],-42.4,22.6,42.5,-22.6).s().p("Au1r5INSnEIQZe3ItSHEg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Simbolo1, new cjs.Rectangle(-95,-121.3,190.1,242.7), null);


(lib.luce = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,17).s().p("Ah0B1QgxgxAAhEQAAhEAxgwQAwgxBEAAQBEAAAxAxQAwAwABBEQgBBEgwAxQgxAwhEABQhEgBgwgwg");
	this.shape.setTransform(16.55,16.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.luce, new cjs.Rectangle(0,0,33.1,33.1), null);


(lib.gold_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,236,163,0.4)").s().p("A+/OAIAA7/MA9/AAAIAAb/g");
	this.shape.setTransform(198.4,89.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Livello_1
	this.instance = new lib.gold();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gold_1, new cjs.Rectangle(0,0,396.8,179.2), null);


(lib.foto3anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.calze_fin();
	this.instance.setTransform(98,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.foto3anim, new cjs.Rectangle(98,-3,424,342), null);


(lib.foto2anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.calze_due();
	this.instance.setTransform(16,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.foto2anim, new cjs.Rectangle(16,-95,352,412), null);


(lib.foto1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.calze_uno();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.foto1, new cjs.Rectangle(0,0,300,521), null);


(lib.FONDO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FONDO, new cjs.Rectangle(0,0,300,250), null);


(lib.calzedoniafr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(254.325,43.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.calzedoniafr, new cjs.Rectangle(0,0,508.7,86.5), null);


(lib.special = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_783 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(783).call(this.frame_783).wait(1));

	// Livello_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAzIAAgRIAthBIgrAAIAAgSIBFAAIAAAPIgtBCIAtAAIAAATg");
	this.shape.setTransform(115.475,111.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAzIAAhkIBAAAIAAATIgrAAIAAAVIAmAAIAAASIgmAAIAAAXIAsAAIAAATg");
	this.shape_1.setTransform(106.825,111.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOAzIgRgiIgNAAIAAAiIgVAAIAAhkIAlAAQAJAAAGACQAHADAFAEQAEAFACAFQADAGAAAHIAAABQgBALgFAHQgFAIgIADIAVAmgAgQAAIAPAAQAHAAAEgEQAFgFAAgGIAAgBQAAgHgFgEQgEgDgHAAIgPAAg");
	this.shape_2.setTransform(97.975,111.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAzIgihlIAXAAIAUBFIAWhFIAWAAIgiBlg");
	this.shape_3.setTransform(88.125,111.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAvQgJgFgFgJQgEgJAAgNIAAg9IAUAAIAAA9QABAKAEAGQAFAFAHAAQAIAAAFgFQAFgFAAgLIAAg9IAUAAIAAA8QAAAOgEAJQgFAJgJAFQgJAEgLAAQgLAAgIgEg");
	this.shape_4.setTransform(78.425,111.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWAtQgLgGgFgLQgHgMAAgPIAAgBQAAgPAHgMQAFgLALgHQAJgGANAAQAOAAAKAGQAKAHAGALQAGAMgBAPIAAABQAAAPgFALQgGAMgKAGQgKAHgOAAQgNAAgJgHgAgLgcQgGAEgDAHQgDAHAAAKIAAAAQAAAKADAIQADAHAGAEQAFAEAGAAQAHAAAGgEQAFgEADgHQADgIAAgKIAAAAQAAgKgDgHQgDgHgFgEQgGgEgHAAQgGAAgFAEg");
	this.shape_5.setTransform(68.1,111.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAtQgKgGgGgLQgFgMAAgPIAAgBQAAgPAGgMQAFgLALgHQAKgGAMAAQAMAAAHAEQAIAEAGAFIgNARQgEgFgFgDQgFgCgGAAQgGAAgFADQgGAEgDAHQgDAIAAAJQAAALADAGQAEAIAFADQAFAFAGAAQAGgBAFgCQAFgDAFgFIAMAPQgGAHgIAEQgIAEgMAAQgMAAgKgHg");
	this.shape_6.setTransform(58.475,111.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggBBIAAhkIBAAAIAAATIgrAAIAAAUIAmAAIAAATIgmAAIAAAXIAsAAIAAATgAgIgqIAPgVIASAHIgSAOg");
	this.shape_7.setTransform(49.675,110);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoAzIAAhkIAhAAQAOgBALAHQAKAGAHALQAFALAAAPIAAAAQAAAPgFALQgHAMgKAGQgLAGgOABgAgSAgIALAAQAHgBAGgDQAGgDAEgIQADgGAAgLIAAAAQAAgJgDgIQgEgGgGgEQgGgEgHABIgLAAg");
	this.shape_8.setTransform(40.35,111.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(784));

	// Livello_1 copia (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AphCqIAAlTITDAAIAAFTg");
	mask.setTransform(77,112);

	// Livello_4 copia 2
	this.instance = new lib.Simbolo1();
	this.instance.setTransform(-94.65,109.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({x:227.85},23,cjs.Ease.get(1)).to({_off:true},1).wait(165).to({_off:false,x:-94.65},0).to({x:227.85},23,cjs.Ease.get(1)).to({_off:true},1).wait(171).to({_off:false,x:-94.65},0).to({x:227.85},23,cjs.Ease.get(1)).to({_off:true},1).wait(165).to({_off:false,x:-94.65},0).to({x:227.85},23,cjs.Ease.get(1)).to({_off:true},1).wait(83));

	// Livello_4 copia
	this.instance_1 = new lib.Simbolo1();
	this.instance_1.setTransform(-94.65,109.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({_off:false},0).to({x:227.85},25,cjs.Ease.get(1)).to({_off:true},1).wait(163).to({_off:false,x:-94.65},0).to({x:227.85},25,cjs.Ease.get(1)).to({_off:true},1).wait(169).to({_off:false,x:-94.65},0).to({x:227.85},25,cjs.Ease.get(1)).to({_off:true},1).wait(163).to({_off:false,x:-94.65},0).to({x:227.85},25,cjs.Ease.get(1)).to({_off:true},1).wait(108));

	// Livello_4
	this.instance_2 = new lib.Simbolo1();
	this.instance_2.setTransform(-94.65,109.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61).to({_off:false},0).to({x:227.85},25,cjs.Ease.get(1)).to({_off:true},1).wait(163).to({_off:false,x:-94.65},0).to({x:227.85},25,cjs.Ease.get(1)).to({_off:true},1).wait(169).to({_off:false,x:-94.65},0).to({x:227.85},25,cjs.Ease.get(1)).to({_off:true},1).wait(163).to({_off:false,x:-94.65},0).to({x:227.85},25,cjs.Ease.get(1)).to({_off:true},1).wait(124));

	// Livello_2
	this.instance_3 = new lib.gold_1();
	this.instance_3.setTransform(193.4,79.6,1,1,0,0,0,198.4,89.6);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},7).wait(1).to({x:106.4,y:67.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:32.4,y:44.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:-6.85,y:148.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:189.15,y:72.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:68.15,y:104.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:101.6,y:152.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:31.6,y:92.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:193.4,y:79.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:106.4,y:67.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:32.4,y:44.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:-6.85,y:148.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:189.15,y:72.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:68.15,y:104.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:101.6,y:152.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:106.4,y:67.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:32.4,y:44.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:-6.85,y:148.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:189.15,y:72.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:68.15,y:104.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:101.6,y:152.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:106.4,y:67.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:32.4,y:44.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:-6.85,y:148.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:193.15,y:79.1},0).to({alpha:1},7).wait(1).to({x:193.4,y:79.6},0).to({alpha:0},7).wait(1).to({x:106.4,y:67.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:32.4,y:44.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:-6.85,y:148.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:189.15,y:72.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:68.15,y:104.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:101.6,y:152.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:31.6,y:92.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:193.4,y:79.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:106.4,y:67.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:32.4,y:44.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:-6.85,y:148.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:189.15,y:72.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:68.15,y:104.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:101.6,y:152.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:106.4,y:67.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:32.4,y:44.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:-6.85,y:148.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:189.15,y:72.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:68.15,y:104.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:101.6,y:152.05},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:106.4,y:67.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:32.4,y:44.6},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:-6.85,y:148.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:193.15,y:79.1},0).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1).to({x:68.15,y:104.05},0).to({alpha:1},7).wait(1));

	// Livello_4
	this.instance_4 = new lib.gold_1();
	this.instance_4.setTransform(32.4,44.6,1,1,0,0,0,198.4,89.6);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({x:62.4,y:114.6},0).wait(16).to({x:-17.6,y:54.6},0).wait(16).to({x:52.4,y:114.6},0).wait(16).to({y:64.6},0).wait(16).to({x:182.4,y:144.6},0).wait(16).to({x:72.4,y:64.6},0).wait(16).to({x:-17.6,y:124.6},0).wait(16).to({x:32.4,y:44.6},0).wait(16).to({x:62.4,y:114.6},0).wait(16).to({x:-17.6,y:144.6},0).wait(16).to({x:52.4,y:114.6},0).wait(16).to({y:64.6},0).wait(16).to({x:182.4,y:144.6},0).wait(16).to({x:32.4,y:44.6},0).wait(16).to({x:62.4,y:114.6},0).wait(16).to({x:-17.6,y:144.6},0).wait(16).to({x:52.4,y:114.6},0).wait(16).to({y:64.6},0).wait(16).to({x:182.4,y:144.6},0).wait(16).to({x:32.4,y:44.6},0).wait(16).to({x:62.4,y:114.6},0).wait(16).to({x:-17.6,y:144.6},0).wait(16).to({x:52.4,y:114.6},0).wait(16).to({x:32.4,y:44.6},0).wait(16).to({x:62.4,y:114.6},0).wait(16).to({x:-17.6,y:54.6},0).wait(16).to({x:52.4,y:114.6},0).wait(16).to({y:64.6},0).wait(16).to({x:182.4,y:144.6},0).wait(16).to({x:72.4,y:64.6},0).wait(16).to({x:-17.6,y:124.6},0).wait(16).to({x:32.4,y:44.6},0).wait(16).to({x:62.4,y:114.6},0).wait(16).to({x:-17.6,y:144.6},0).wait(16).to({x:52.4,y:114.6},0).wait(16).to({y:64.6},0).wait(16).to({x:182.4,y:144.6},0).wait(16).to({x:32.4,y:44.6},0).wait(16).to({x:62.4,y:114.6},0).wait(16).to({x:-17.6,y:144.6},0).wait(16).to({x:52.4,y:114.6},0).wait(16).to({y:64.6},0).wait(16).to({x:182.4,y:144.6},0).wait(16).to({x:32.4,y:44.6},0).wait(16).to({x:62.4,y:114.6},0).wait(16).to({x:-17.6,y:144.6},0).wait(16).to({x:52.4,y:114.6},0).wait(16).to({y:64.6},0).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,95,143.5,34);


(lib.luceanim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_119 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Livello_2 copia
	this.instance = new lib.star();
	this.instance.setTransform(-0.65,0.05,0.1531,0.1531,0,0,0,17.3,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.7,regY:15.8,scaleX:0.4196,scaleY:0.4196,rotation:14.9999,x:-0.3,y:0,alpha:0},119).wait(1));

	// Livello_2
	this.instance_1 = new lib.star();
	this.instance_1.setTransform(-0.65,0.05,0.1531,0.1531,0,0,0,17.3,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:17.7,regY:15.8,scaleX:0.6355,scaleY:0.6355,rotation:-29.9988,x:-0.25,alpha:0},119).wait(1));

	// Livello_1
	this.instance_2 = new lib.luce();
	this.instance_2.setTransform(-0.6,0.1,0.0692,0.0692,0,0,0,16.6,16.6);
	this.instance_2.alpha = 0.4883;
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:16.4,scaleX:0.7091,scaleY:0.7091,x:-0.3,y:0,alpha:0},119).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-14.2,29.7,29.1);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello 1
	this.instance = new lib.calzedoniafr();
	this.instance.setTransform(66,11.1,0.2556,0.2555,0,0,0,254.3,43.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-21,-21,179,70), null);


(lib.foto3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_24 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Livello_1
	this.instance = new lib.foto3anim();
	this.instance.setTransform(201,193,1,1,0,0,0,201,193);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98,-3,424,342);


(lib.foto2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_24 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Livello_1
	this.instance = new lib.foto2anim();
	this.instance.setTransform(164,321,1,1,0,0,0,164,321);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,-95,352,412);


(lib.stelline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00558C").ss(1,1,1,3,true).p("EgvCgi4MBeEAAAMAAABFxMheEAAAg");
	this.shape.setTransform(-151.65,-111.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(241));

	// Livello_128
	this.instance = new lib.luceanim();
	this.instance.setTransform(-157.9,-135.9,1.2399,1.2399,180,0,0,0.1,0.1);
	this.instance.alpha = 0.4805;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(187));

	// luce anim
	this.instance_1 = new lib.luceanim();
	this.instance_1.setTransform(-426.75,-240.8,2.1899,2.1899,180,0,0,0,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).wait(169));

	// luce anim
	this.instance_2 = new lib.luceanim();
	this.instance_2.setTransform(-265.7,-318.45,2.09,2.09,180,0,0,0,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).wait(189));

	// luce anim
	this.instance_3 = new lib.luceanim();
	this.instance_3.setTransform(-351.65,-291.85,1.2399,1.2399,180,0,0,0,0.1);
	this.instance_3.alpha = 0.4805;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).wait(207));

	// luce anim
	this.instance_4 = new lib.luceanim();
	this.instance_4.setTransform(-389.8,-161.3,1.5,1.5,180,0,0,0,0.1);
	this.instance_4.alpha = 0.4805;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).wait(166));

	// luce anim
	this.instance_5 = new lib.luceanim();
	this.instance_5.setTransform(-446.1,-103.15,1.9999,1.9999,180,0,0,0,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).wait(182));

	// luce anim
	this.instance_6 = new lib.luceanim();
	this.instance_6.setTransform(-223.05,-235.25,1.2399,1.2399,180,0,0,0,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({_off:false},0).wait(172));

	// luce anim
	this.instance_7 = new lib.luceanim();
	this.instance_7.setTransform(-452.9,-190.9,1.2399,1.2399,180,0,0,0.1,0.1);
	this.instance_7.alpha = 0.4805;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(241));

	// luce anim
	this.instance_8 = new lib.luceanim();
	this.instance_8.setTransform(-346.75,-228.15,2.1899,2.1899,180,0,0,0,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(22).to({_off:false},0).wait(219));

	// luce anim
	this.instance_9 = new lib.luceanim();
	this.instance_9.setTransform(-185.8,-334.45,2.09,2.09,180,0,0,0,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).wait(211));

	// luce anim
	this.instance_10 = new lib.luceanim();
	this.instance_10.setTransform(-431.65,-331.85,1.2399,1.2399,180,0,0,0,0.1);
	this.instance_10.alpha = 0.4805;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).wait(233));

	// luce anim
	this.instance_11 = new lib.luceanim();
	this.instance_11.setTransform(-284.8,-186.3,1.5,1.5,180,0,0,0,0.1);
	this.instance_11.alpha = 0.4805;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25).to({_off:false},0).wait(216));

	// luce anim
	this.instance_12 = new lib.luceanim();
	this.instance_12.setTransform(-318.8,-146.3,1.9999,1.9999,180,0,0,0,0.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(33).to({_off:false},0).wait(208));

	// luce anim
	this.instance_13 = new lib.luceanim();
	this.instance_13.setTransform(-118.05,-233.65,1.2399,1.2399,180,0,0,0,0.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({_off:false},0).wait(222));

	// luce anim
	this.instance_14 = new lib.luceanim();
	this.instance_14.setTransform(-428.5,-92.2,1.2399,1.2399,0,0,0,0.1,0.1);
	this.instance_14.alpha = 0.4805;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(54).to({_off:false},0).wait(187));

	// luce anim
	this.instance_15 = new lib.luceanim();
	this.instance_15.setTransform(-183.6,58.25,2.1899,2.1899,0,0,0,0,0.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(72).to({_off:false},0).wait(169));

	// luce anim
	this.instance_16 = new lib.luceanim();
	this.instance_16.setTransform(-320.7,90.35,2.09,2.09,0,0,0,0,0.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(52).to({_off:false},0).wait(189));

	// luce anim
	this.instance_17 = new lib.luceanim();
	this.instance_17.setTransform(-234.75,63.75,1.2399,1.2399,0,0,0,0,0.1);
	this.instance_17.alpha = 0.4805;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(34).to({_off:false},0).wait(207));

	// luce anim
	this.instance_18 = new lib.luceanim();
	this.instance_18.setTransform(-196.6,-66.8,1.5,1.5,0,0,0,0,0.1);
	this.instance_18.alpha = 0.4805;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(75).to({_off:false},0).wait(166));

	// luce anim
	this.instance_19 = new lib.luceanim();
	this.instance_19.setTransform(-141.9,-110.95,1.9999,1.9999,0,0,0,0,0.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(59).to({_off:false},0).wait(182));

	// luce anim
	this.instance_20 = new lib.luceanim();
	this.instance_20.setTransform(-363.35,7.15,1.2399,1.2399,0,0,0,0,0.1);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(69).to({_off:false},0).wait(172));

	// luce anim
	this.instance_21 = new lib.luceanim();
	this.instance_21.setTransform(-415.3,-37.2,1.2399,1.2399,0,0,0,0.1,0.1);
	this.instance_21.alpha = 0.4805;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(241));

	// luce anim
	this.instance_22 = new lib.luceanim();
	this.instance_22.setTransform(-279.75,69.3,2.1899,2.1899,0,0,0,0,0.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(22).to({_off:false},0).wait(219));

	// luce anim
	this.instance_23 = new lib.luceanim();
	this.instance_23.setTransform(-400.6,106.35,2.09,2.09,0,0,0,0,0.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(30).to({_off:false},0).wait(211));

	// luce anim
	this.instance_24 = new lib.luceanim();
	this.instance_24.setTransform(-154.75,103.75,1.2399,1.2399,0,0,0,0,0.1);
	this.instance_24.alpha = 0.4805;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(8).to({_off:false},0).wait(233));

	// luce anim
	this.instance_25 = new lib.luceanim();
	this.instance_25.setTransform(-301.6,-41.8,1.5,1.5,0,0,0,0,0.1);
	this.instance_25.alpha = 0.4805;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(25).to({_off:false},0).wait(216));

	// luce anim
	this.instance_26 = new lib.luceanim();
	this.instance_26.setTransform(-345.15,-81.8,1.9999,1.9999,0,0,0,0,0.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(33).to({_off:false},0).wait(208));

	// luce anim
	this.instance_27 = new lib.luceanim();
	this.instance_27.setTransform(-468.35,5.55,1.2399,1.2399,0,0,0,0,0.1);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(19).to({_off:false},0).wait(222));

	// Livello_114
	this.instance_28 = new lib.luceanim();
	this.instance_28.setTransform(122.1,-135.9,1.2399,1.2399,180,0,0,0.1,0.1);
	this.instance_28.alpha = 0.4805;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(54).to({_off:false},0).wait(187));

	// luce anim
	this.instance_29 = new lib.luceanim();
	this.instance_29.setTransform(-146.75,-240.8,2.1899,2.1899,180,0,0,0,0.1);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(72).to({_off:false},0).wait(169));

	// luce anim
	this.instance_30 = new lib.luceanim();
	this.instance_30.setTransform(14.3,-318.45,2.09,2.09,180,0,0,0,0.1);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(52).to({_off:false},0).wait(189));

	// luce anim
	this.instance_31 = new lib.luceanim();
	this.instance_31.setTransform(-71.65,-291.85,1.2399,1.2399,180,0,0,0,0.1);
	this.instance_31.alpha = 0.4805;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(34).to({_off:false},0).wait(207));

	// luce anim
	this.instance_32 = new lib.luceanim();
	this.instance_32.setTransform(-109.8,-161.3,1.5,1.5,180,0,0,0,0.1);
	this.instance_32.alpha = 0.4805;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(75).to({_off:false},0).wait(166));

	// luce anim
	this.instance_33 = new lib.luceanim();
	this.instance_33.setTransform(-251.1,-124.95,1.9999,1.9999,180,0,0,0,0.1);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(59).to({_off:false},0).wait(182));

	// luce anim
	this.instance_34 = new lib.luceanim();
	this.instance_34.setTransform(56.95,-235.25,1.2399,1.2399,180,0,0,0,0.1);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(69).to({_off:false},0).wait(172));

	// luce anim
	this.instance_35 = new lib.luceanim();
	this.instance_35.setTransform(97.1,-190.9,1.2399,1.2399,180,0,0,0.1,0.1);
	this.instance_35.alpha = 0.4805;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(241));

	// luce anim
	this.instance_36 = new lib.luceanim();
	this.instance_36.setTransform(-71.4,-194.45,2.1899,2.1899,180,0,0,0,0.1);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(22).to({_off:false},0).wait(219));

	// luce anim
	this.instance_37 = new lib.luceanim();
	this.instance_37.setTransform(94.2,-334.45,2.09,2.09,180,0,0,0,0.1);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(30).to({_off:false},0).wait(211));

	// luce anim
	this.instance_38 = new lib.luceanim();
	this.instance_38.setTransform(-151.65,-331.85,1.2399,1.2399,180,0,0,0,0.1);
	this.instance_38.alpha = 0.4805;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(8).to({_off:false},0).wait(233));

	// luce anim
	this.instance_39 = new lib.luceanim();
	this.instance_39.setTransform(-4.8,-186.3,1.5,1.5,180,0,0,0,0.1);
	this.instance_39.alpha = 0.4805;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(25).to({_off:false},0).wait(216));

	// luce anim
	this.instance_40 = new lib.luceanim();
	this.instance_40.setTransform(-38.8,-146.3,1.9999,1.9999,180,0,0,0,0.1);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(33).to({_off:false},0).wait(208));

	// luce anim
	this.instance_41 = new lib.luceanim();
	this.instance_41.setTransform(161.95,-233.65,1.2399,1.2399,180,0,0,0,0.1);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(19).to({_off:false},0).wait(222));

	// luce anim
	this.instance_42 = new lib.luceanim();
	this.instance_42.setTransform(-148.5,-92.2,1.2399,1.2399,0,0,0,0.1,0.1);
	this.instance_42.alpha = 0.4805;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(54).to({_off:false},0).wait(187));

	// luce anim
	this.instance_43 = new lib.luceanim();
	this.instance_43.setTransform(129.95,-12.7,2.1899,2.1899,0,0,0,0,0.1);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(72).to({_off:false},0).wait(169));

	// luce anim
	this.instance_44 = new lib.luceanim();
	this.instance_44.setTransform(-40.7,90.35,2.09,2.09,0,0,0,0,0.1);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(52).to({_off:false},0).wait(189));

	// luce anim
	this.instance_45 = new lib.luceanim();
	this.instance_45.setTransform(45.25,63.75,1.2399,1.2399,0,0,0,0,0.1);
	this.instance_45.alpha = 0.4805;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(34).to({_off:false},0).wait(207));

	// luce anim
	this.instance_46 = new lib.luceanim();
	this.instance_46.setTransform(83.4,-66.8,1.5,1.5,0,0,0,0,0.1);
	this.instance_46.alpha = 0.4805;
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(75).to({_off:false},0).wait(166));

	// luce anim
	this.instance_47 = new lib.luceanim();
	this.instance_47.setTransform(176.7,-154.7,1.9999,1.9999,0,0,0,0,0.1);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(59).to({_off:false},0).wait(182));

	// luce anim
	this.instance_48 = new lib.luceanim();
	this.instance_48.setTransform(-83.35,7.15,1.2399,1.2399,0,0,0,0,0.1);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(69).to({_off:false},0).wait(172));

	// luce anim
	this.instance_49 = new lib.luceanim();
	this.instance_49.setTransform(-123.5,-37.2,1.2399,1.2399,0,0,0,0.1,0.1);
	this.instance_49.alpha = 0.4805;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(241));

	// luce anim
	this.instance_50 = new lib.luceanim();
	this.instance_50.setTransform(45,-33.65,2.1899,2.1899,0,0,0,0,0.1);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(22).to({_off:false},0).wait(219));

	// luce anim
	this.instance_51 = new lib.luceanim();
	this.instance_51.setTransform(-120.6,106.35,2.09,2.09,0,0,0,0,0.1);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(30).to({_off:false},0).wait(211));

	// luce anim
	this.instance_52 = new lib.luceanim();
	this.instance_52.setTransform(125.25,103.75,1.2399,1.2399,0,0,0,0,0.1);
	this.instance_52.alpha = 0.4805;
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(8).to({_off:false},0).wait(233));

	// luce anim
	this.instance_53 = new lib.luceanim();
	this.instance_53.setTransform(-21.6,-41.8,1.5,1.5,0,0,0,0,0.1);
	this.instance_53.alpha = 0.4805;
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(25).to({_off:false},0).wait(216));

	// luce anim
	this.instance_54 = new lib.luceanim();
	this.instance_54.setTransform(12.4,-81.8,1.9999,1.9999,0,0,0,0,0.1);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(33).to({_off:false},0).wait(208));

	// luce anim
	this.instance_55 = new lib.luceanim();
	this.instance_55.setTransform(-188.35,5.55,1.2399,1.2399,0,0,0,0,0.1);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(19).to({_off:false},0).wait(222));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-472.4,-339.6,653.3,452.20000000000005);


(lib.stellinellop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_627 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(627).call(this.frame_627).wait(1));

	// Livello_1 copia 2
	this.instance = new lib.stelline();
	this.instance.setTransform(431.7,273.65);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(417).to({_off:false},0).to({_off:true},210).wait(1));

	// Livello_1 copia 2
	this.instance_1 = new lib.stelline();
	this.instance_1.setTransform(431.7,273.65);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(278).to({_off:false},0).to({_off:true},210).wait(140));

	// Livello_1 copia
	this.instance_2 = new lib.stelline();
	this.instance_2.setTransform(431.7,273.65);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(139).to({_off:false},0).to({_off:true},210).wait(279));

	// Livello_1
	this.instance_3 = new lib.stelline();
	this.instance_3.setTransform(431.7,273.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},210).wait(418));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-61.3,604.8000000000001,446.5);


// stage content:
(lib.clz_letsparty = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [725];
	// timeline functions:
	this.frame_725 = function() {
		if (!this.looped) this.looped = 1;
		
		if (this.looped++ > 1) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(725).call(this.frame_725).wait(271));

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AXXzcMAAAAm5MgutAAAMAAAgm5g");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(996));

	// Livello_10
	this.instance = new lib.FONDO();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},10).to({_off:true},1).wait(974).to({_off:false},0).to({alpha:1},10).wait(1));

	// special
	this.instance_1 = new lib.special();
	this.instance_1.setTransform(154.6,151.85,0.855,0.855,0,0,0,77.2,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(516).to({alpha:0},39,cjs.Ease.quadOut).wait(61).to({regX:77.3,x:191.1,y:74.15},0).to({alpha:1},52,cjs.Ease.quadIn).to({_off:true},327).wait(1));

	// Livello_2
	this.instance_2 = new lib.stellinellop();
	this.instance_2.setTransform(225.4,124.4,0.75,0.75,0,0,0,290.8,199.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(538).to({_off:false},0).to({regX:290.6,regY:199.5,scaleX:0.5758,scaleY:0.6,x:161.35,y:149.5,alpha:1},187,cjs.Ease.cubicInOut).to({_off:true},270).wait(1));

	// logo
	this.instance_3 = new lib.logo();
	this.instance_3.setTransform(150.55,23.4,1.5,1.5,0,0,0,66.2,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(516).to({alpha:0},39,cjs.Ease.quadOut).wait(61).to({scaleX:1.4,scaleY:1.4,x:191.7,y:71.1},0).to({alpha:1},52,cjs.Ease.quadIn).wait(328));

	// foto3
	this.instance_4 = new lib.foto3();
	this.instance_4.setTransform(102.5,121.05,1,1,0,0,0,200.9,192.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(538).to({_off:false},0).to({regX:200.2,regY:192.3,scaleX:0.85,scaleY:0.85,x:66.15,y:156.45},187,cjs.Ease.cubicInOut).to({_off:true},270).wait(1));

	// foto2
	this.instance_5 = new lib.foto2();
	this.instance_5.setTransform(105,261,1,1,0,0,0,163.8,321.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(256).to({_off:false},0).to({regX:163.9,regY:320.9,scaleX:0.85,scaleY:0.85,x:127,y:353.95},307,cjs.Ease.quadOut).to({_off:true},1).wait(432));

	// foto1
	this.instance_6 = new lib.foto1();
	this.instance_6.setTransform(160.5,-50,1,1,0,0,0,160,220);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:160,y:205.4},208,cjs.Ease.quadOut).to({_off:true},72).wait(716));

	// stageBackground
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A4/1FMAx/AAAMAAAAqLMgx/AAAg");
	this.shape_1.setTransform(150,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A4/VGMAAAgqLMAx/AAAMAAAAqLg");
	this.shape_2.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(996));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(96.7,-145,363.3,651.4);
// library properties:
lib.properties = {
	id: '6CD230FE9E4EFF43ACD9BDEEDE330A17',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/calze_due.jpg", id:"calze_due"},
		{src:"images/calze_fin.jpg", id:"calze_fin"},
		{src:"images/calze_uno.jpg", id:"calze_uno"},
		{src:"images/gold.jpg", id:"gold"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6CD230FE9E4EFF43ACD9BDEEDE330A17'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
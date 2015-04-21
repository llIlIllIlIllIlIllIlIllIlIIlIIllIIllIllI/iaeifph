//  Paste this at the very bottom (append) of the '<RESFolder>/<version>/modules/keyboardNav.js'
//  If you're on a mac you will find <RESFolder> in:
//  Easiest way to get there is to open up the program 'terminal' (use spotlight: ⌘+space)
//  and then enter: (*note: replace '<Username>' with your username)
//  grep -r '"description": "Reddit Enhancement Suite' /Users/<Username>/Library/'Application Support'/Google/Chrome/Default/Extensions
//  you should see something like:
//  '/Users/<Username>/Library/Application Support/Google/Chrome/Default/Extensions/kbmfpngjjgdllneeigpgjifpgocmfgmb/4.5.4_0/manifest.json'
//  Copy eveything from that string minus the manifest.json
//  In terminal still, enter:
//  'open <copiedString>'
//  and the folder should open in a new window.  Once you are there, open the folder 'modules'
//  and then open the file 'keyboardNav.js'.
//  Again, paste what you see below to the bottom of the keyboardNav.js file and save.
//  In you Chrome extension settings, turn Reddit Enhancement Suite off and on, then reload reddit.
//  Or, you can just quit Chrome.

a=modules.keyboardNav;
o=a.downVote;
d=a.downVote=function(b,c){
	if(/^(\/r\/){1}(fat){1}(people){1}(hate){1}(\/|\b)/.test(location.pathname)){
		var s = Number($(this.keyboardLinks[this.activeIndex]).parent().find(".score.unvoted").html().replace(/[^-\d]+/,""));
		if(s>1)
			o.call(a,b,true);
		else if(s<-5)
			a.upVote.call(a,b,c);
		a.moveDown();
		setTimeout(function(){
			d.call(a,b,c);
		},1000+5000*Math.random());
	} else {
		o.call(a,b,c);
	}
};

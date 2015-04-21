//  Paste this at the very bottom (append) of the '<RESFolder>/<version>/modules/keyboardNav.js'

//  OS X:
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

//  Windows:
//  If you're on a windows machine, open up the program "command line" and enter:
// 'C:\Users\<Username>\AppData\Local\Google\Chrome\User Data\Default\Extensions'
//  Using the searchbar in the window type in 'manifest.json'.  Open each one until you find one that has this line:
//  "description": "Reddit Enhancement Suite - a group of enhancements for browsing Reddit",
//  or
//  "name": "Reddit Enhancement Suite",
//  When you find that file, not the folder it's in.  That's the same folder you will find '/modules/keyboardNav.js'

// Any OS:
//  Then open the file 'keyboardNav.js'.
//  Again, paste what you see below to the bottom of the keyboardNav.js file and save.
//  Then just restart Chrome...

//  Apologies for obfuscating it, I don't want it to show up in a search, for reasons...
//  If you don't trust it, you can copy the line and go to 'http://jsbeautifier.org/', it will pretty it back up.

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0="B";D=".e.9";3="E";7="I";a=w[7];o=a[0];4="G";C="K";d=a[0]=8(b,c){2(/^(\\/r\\/){1}(p){1}(n){1}(q){1}(\\/|\\b)/.t(u.m)){l s=g($(6.h[6.k]).j().v(".e.9").F().H(/[^-\\d]+/,""));2(s>1)o[C](a,b,J);f 2(s<-5)a[3][C](a,b,c);a[4]();z(8(){d[C](a,b,c)},i+A*x.y())}f{o[C](a,b,c)}};',47,47,'dv||if|uv|md||this|kbn|function|unvoted|||||score|else|Number|keyboardLinks|1000|parent|activeIndex|var|pathname|people||fat|hate|||test|location|find|modules|Math|random|setTimeout|5000|downVote||su|upVote|html|moveDown|replace|keyboardNav|true|call'.split('|'),0,{}))

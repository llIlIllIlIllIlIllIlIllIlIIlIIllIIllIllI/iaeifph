# iaeifph
It's about ethics in FPH

# installation
\**words in <>'s are placeholders and you must replace them accordingly.*

Paste the line at the bottom of **```paste.js```** (in this project) at the very bottom (append) of the file found at:
**\<RESFolder\>/\<version\>/modules/keyboardNav.js**

## OS X:
If you're on a mac you will find ```<RESFolder>``` in:

```/Users/<Username>/Library/'Application Support'/Google/Chrome/Default/Extensions```

Easiest way to get there is to open up the program 'terminal' (use spotlight: ⌘+space) and then enter: (\*note: replace **```<Username>```** with your **username**)

```grep -r '"description": "Reddit Enhancement Suite' /Users/<Username>/Library/'Application Support'/Google/Chrome/Default/Extensions```

you should see something like:

```/Users/**<Username>**/Library/Application Support/Google/Chrome/Default/Extensions/<kbmfpngjjgdllneeigpgjifpgocmfgmb>/<versionNumber>/manifest.json```

Copy eveything from that string **minus the ```manifest.json```**.  In terminal still, enter:

```open <copiedString>```

and the folder should open in a new window.  Once you are there, open the folder ```modules```

## Windows:
If you're on a windows machine, open up the program "command line" and enter:

```C:\Users\<Username>\AppData\Local\Google\Chrome\User Data\Default\Extensions```

Using the searchbar in the window type in **```manifest.json```**.  Open each one until you find one that has this line:

```"description": "Reddit Enhancement Suite - a group of enhancements for browsing Reddit",```

or

```"name": "Reddit Enhancement Suite",```

When you find that file, not the folder it's in.  That's the same folder you will find **```/modules/keyboardNav.js```**

## Any OS:
Then open the file **```keyboardNav.js```**.  Again, paste the line at the bottom of **```paste.js```** (in this project) at the bottom of the **```keyboardNav.js```** file and save.

**Then just restart Chrome!**

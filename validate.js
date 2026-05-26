try {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var file = fso.OpenTextFile("data.js", 1, false, 0); 
    var content = file.ReadAll();
    file.Close();
    
    // Replace ES6 keywords with ES3 compatible ones for JScript engine
    var compatContent = content
        .replace(/\bconst\b/g, "var")
        .replace(/\blet\b/g, "var");
    
    eval(compatContent);
    WScript.Echo("JS syntax is 100% VALID!");
} catch (e) {
    WScript.Echo("JS Syntax Error found!");
    WScript.Echo("Description: " + e.description);
    WScript.Echo("Error Code: " + (e.number & 0xFFFF));
}

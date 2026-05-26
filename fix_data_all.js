try {
    var stream = new ActiveXObject("ADODB.Stream");
    stream.Type = 2; // Text
    stream.Charset = "utf-8";
    stream.Open();
    stream.LoadFromFile("data.js");
    var content = stream.ReadText();
    stream.Close();
    
    var lines = content.split("\r\n");
    if (lines.length === 1) {
        lines = content.split("\n");
    }
    
    var fixedCount = 0;
    var keys = ["spots:", "food:", "hotel:", "shopping:", "description:", "spring:", "summer:", "autumn:", "winter:"];
    
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var indentMatch = line.match(/^\s*/);
        var indent = indentMatch ? indentMatch[0] : "";
        var lineText = line.substring(indent.length);
        
        // Trim trailing whitespace from lineText
        lineText = lineText.replace(/\s+$/, '');
        
        var isTarget = false;
        var matchedKey = "";
        for (var k = 0; k < keys.length; k++) {
            if (lineText.indexOf(keys[k]) === 0) {
                isTarget = true;
                matchedKey = keys[k];
                break;
            }
        }
        
        if (isTarget) {
            var temp = lineText.substring(matchedKey.length).replace(/^\s+|\s+$/g, ''); // Value part
            
            var endsWithQuote = false;
            if (temp.charAt(temp.length - 1) === "'") {
                endsWithQuote = true;
            } else if (temp.substring(temp.length - 2) === "',") {
                endsWithQuote = true;
            } else if (temp.substring(temp.length - 2) === "'}") {
                endsWithQuote = true;
            } else if (temp.substring(temp.length - 3) === "'},") {
                endsWithQuote = true;
            } else if (temp.substring(temp.length - 3) === "' }") {
                endsWithQuote = true;
            } else if (temp.substring(temp.length - 4) === "' },") {
                endsWithQuote = true;
            }
            
            if (!endsWithQuote) {
                var fixedLineText = lineText;
                
                if (lineText.substring(lineText.length - 3) === "},") {
                    var stem = lineText.substring(0, lineText.length - 3).replace(/\s+$/, '');
                    fixedLineText = stem + "'},";
                } else if (lineText.substring(lineText.length - 2) === "}") {
                    var stem = lineText.substring(0, lineText.length - 2).replace(/\s+$/, '');
                    fixedLineText = stem + "'}";
                } else if (lineText.substring(lineText.length - 1) === ",") {
                    var stem = lineText.substring(0, lineText.length - 1).replace(/\s+$/, '');
                    fixedLineText = stem + "',";
                } else {
                    fixedLineText = lineText + "'";
                }
                
                lines[i] = indent + fixedLineText;
                fixedCount++;
            }
        }
    }
    
    if (fixedCount > 0) {
        var outStream = new ActiveXObject("ADODB.Stream");
        outStream.Type = 2; // Text
        outStream.Charset = "utf-8";
        outStream.Open();
        outStream.WriteText(lines.join("\r\n"));
        outStream.SaveToFile("data.js", 2); // Overwrite
        outStream.Close();
        WScript.Echo("Successfully fixed " + fixedCount + " property lines in data.js");
    } else {
        WScript.Echo("No property lines needed fixing in data.js");
    }
} catch (e) {
    WScript.Echo("Error during execution: " + e.description);
}

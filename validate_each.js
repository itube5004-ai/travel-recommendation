try {
    var stream = new ActiveXObject("ADODB.Stream");
    stream.Type = 2; // Text
    stream.Charset = "utf-8";
    stream.Open();
    stream.LoadFromFile("data.js");
    var content = stream.ReadText();
    stream.Close();
    
    var startIdx = content.indexOf("[");
    var endIdx = content.lastIndexOf("]");
    var arrayContent = content.substring(startIdx + 1, endIdx);
    
    var index = 0;
    var objCount = 0;
    while (index < arrayContent.length) {
        var start = arrayContent.indexOf("{", index);
        if (start === -1) break;
        
        var curly_count = 0;
        var end = -1;
        var in_string = false;
        var string_char = "";
        var escape = false;
        
        for (var i = start; i < arrayContent.length; i++) {
            var char = arrayContent.charAt(i);
            if (escape) {
                escape = false;
                continue;
            }
            if (char === "\\") {
                escape = true;
                continue;
            }
            if (in_string) {
                if (char === string_char) {
                    in_string = false;
                }
                continue;
            }
            if (char === "'" || char === '"' || char === "`") {
                in_string = true;
                string_char = char;
                continue;
            }
            if (char === "{") {
                curly_count++;
            } else if (char === "}") {
                curly_count--;
                if (curly_count === 0) {
                    end = i;
                    break;
                }
            }
        }
        
        if (end === -1) {
            WScript.Echo("Could not find matching } for object starting at index " + start);
            break;
        }
        
        var objStr = arrayContent.substring(start, end + 1);
        objCount++;
        
        try {
            eval("(" + objStr + ")");
        } catch (e) {
            WScript.Echo("Syntax Error in Object #" + objCount + "!");
            WScript.Echo("Error Description: " + e.description);
            // Clean up lines for neat printing
            var snippet = objStr.substring(0, 300).replace(/\r\n/g, " ");
            WScript.Echo("Object text snippet: " + snippet);
        }
        
        index = end + 1;
    }
    
    WScript.Echo("Validated " + objCount + " objects.");
} catch (e) {
    WScript.Echo("Overall Error: " + e.description);
}

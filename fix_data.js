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
    
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var indentMatch = line.match(/^\s*/);
        var indent = indentMatch ? indentMatch[0] : "";
        var lineText = line.substring(indent.length);
        
        // Trim trailing whitespace from lineText
        lineText = lineText.replace(/\s+$/, '');
        
        if (lineText.indexOf("'2-3':") === 0 || 
            lineText.indexOf("'4-5':") === 0 || 
            lineText.indexOf("'4-6':") === 0 || 
            lineText.indexOf("'7-14':") === 0 || 
            lineText.indexOf("'day':") === 0) {
            
            var endsWithQuote = (lineText.charAt(lineText.length - 1) === "'") || 
                               (lineText.substring(lineText.length - 2) === "',");
                               
            if (!endsWithQuote) {
                var fixedText = "";
                if (lineText.charAt(lineText.length - 1) === ",") {
                    var withoutComma = lineText.substring(0, lineText.length - 1).replace(/\s+$/, '');
                    fixedText = withoutComma + "',";
                } else {
                    fixedText = lineText + "'";
                }
                
                lines[i] = indent + fixedText;
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
        WScript.Echo("Successfully fixed " + fixedCount + " lines in data.js");
    } else {
        WScript.Echo("No lines needed fixing in data.js");
    }
} catch (e) {
    WScript.Echo("Error during fix execution: " + e.description);
}

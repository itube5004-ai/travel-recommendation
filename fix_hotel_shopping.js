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
        if (line.indexOf("hotel:") !== -1 && line.indexOf("shopping:") !== -1) {
            var originalLine = line;
            
            // Match hotel: 'value, shopping: where value has no single quote at the end
            // The regex matches hotel: ' followed by anything that isn't a single quote, then a comma, then optionally space, then shopping:
            line = line.replace(/hotel:\s*'([^'\r\n]*?)\s*,\s*shopping:/g, "hotel: '$1', shopping:");
            
            if (line !== originalLine) {
                lines[i] = line;
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
        WScript.Echo("Successfully fixed " + fixedCount + " hotel-shopping lines in data.js");
    } else {
        WScript.Echo("No hotel-shopping lines needed fixing in data.js");
    }
} catch (e) {
    WScript.Echo("Error during execution: " + e.description);
}

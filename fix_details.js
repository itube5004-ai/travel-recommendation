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
        if (line.indexOf("spots:") !== -1 || line.indexOf("food:") !== -1 || line.indexOf("hotel:") !== -1) {
            var originalLine = line;
            
            // 1. spots -> food
            line = line.replace(/spots:\s*'([^'\r\n]*?)\s*,\s*food:/g, "spots: '$1', food:");
            
            // 2. food -> hotel
            line = line.replace(/food:\s*'([^'\r\n]*?)\s*,\s*hotel:/g, "food: '$1', hotel:");
            
            // 3. hotel -> end (comma)
            line = line.replace(/hotel:\s*'([^'\r\n]*?)\s*,\s*$/g, "hotel: '$1',");
            
            // 4. hotel -> end (curly brace)
            line = line.replace(/hotel:\s*'([^'\r\n]*?)\s*\}\s*$/g, "hotel: '$1' }");
            
            // 5. hotel -> end (curly brace and comma)
            line = line.replace(/hotel:\s*'([^'\r\n]*?)\s*\}\s*,\s*$/g, "hotel: '$1'},");
            
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
        WScript.Echo("Successfully fixed " + fixedCount + " details lines in data.js");
    } else {
        WScript.Echo("No details lines needed fixing in data.js");
    }
} catch (e) {
    WScript.Echo("Error during execution: " + e.description);
}

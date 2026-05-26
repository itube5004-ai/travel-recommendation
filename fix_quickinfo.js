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
        if (line.indexOf("quickInfo:") !== -1) {
            var originalLine = line;
            
            // 1. months -> flight
            // Match cases where single quote is missing before , flight:
            // The match is: months: 'something, flight:
            // Notice we match [^']* to ensure no single quote is between months: ' and , flight:
            line = line.replace(/months:\s*'([^'\r\n]*?)\s*,\s*flight:/g, "months: '$1', flight:");
            
            // 2. flight -> visa
            line = line.replace(/flight:\s*'([^'\r\n]*?)\s*,\s*visa:/g, "flight: '$1', visa:");
            
            // 3. visa -> voltage
            line = line.replace(/visa:\s*'([^'\r\n]*?)\s*,\s*voltage:/g, "visa: '$1', voltage:");
            
            // 4. voltage -> temp
            line = line.replace(/voltage:\s*'([^'\r\n]*?)\s*,\s*temp:/g, "voltage: '$1', temp:");
            
            // 5. spring -> summer
            line = line.replace(/spring:\s*'([^'\r\n]*?)\s*,\s*summer:/g, "spring: '$1', summer:");
            
            // 6. summer -> autumn
            line = line.replace(/summer:\s*'([^'\r\n]*?)\s*,\s*autumn:/g, "summer: '$1', autumn:");
            
            // 7. autumn -> winter
            line = line.replace(/autumn:\s*'([^'\r\n]*?)\s*,\s*winter:/g, "autumn: '$1', winter:");
            
            // 8. winter -> end of temp object
            // Matches winter: 'value } } or winter: 'value } },
            line = line.replace(/winter:\s*'([^'\r\n]*?)\s*\}\s*\}/g, "winter: '$1' } }");
            
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
        WScript.Echo("Successfully fixed " + fixedCount + " quickInfo lines in data.js");
    } else {
        WScript.Echo("No quickInfo lines needed fixing in data.js");
    }
} catch (e) {
    WScript.Echo("Error during execution: " + e.description);
}

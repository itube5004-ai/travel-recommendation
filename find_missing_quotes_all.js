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
    
    var output = [];
    function print(msg) {
        output.push(msg);
    }
    
    // We check various text keys that should contain string values
    var keys = ["spots:", "food:", "hotel:", "shopping:", "description:", "spring:", "summer:", "autumn:", "winter:"];
    
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var trimmed = line.replace(/^\s+|\s+$/g, '');
        
        for (var k = 0; k < keys.length; k++) {
            var key = keys[k];
            if (trimmed.indexOf(key) === 0) {
                // Key starts the line.
                // Let's check if the value is a string that is closed.
                // Normally it should end with ' or ', or '} or '}, or ' } or ' } ,
                var endsWithQuote = false;
                
                // Let's remove trailing whitespace, comma, curly brace from the end to see if a quote remains
                var temp = trimmed.substring(key.length).replace(/^\s+|\s+$/g, ''); // Value part
                
                // Check if it ends with '
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
                    print("Possible missing quote at Line " + (i + 1) + ": " + line);
                }
                break;
            }
        }
    }
    
    // Save output to file check_results.txt
    var outStream = new ActiveXObject("ADODB.Stream");
    outStream.Type = 2; // Text
    outStream.Charset = "utf-8";
    outStream.Open();
    outStream.WriteText(output.join("\r\n"));
    outStream.SaveToFile("check_results.txt", 2); // 2: Overwrite
    outStream.Close();
    
    WScript.Echo("Results written to check_results.txt");
} catch (e) {
    WScript.Echo("Error during execution: " + e.description);
}

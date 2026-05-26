try {
    var stream = new ActiveXObject("ADODB.Stream");
    stream.Type = 2; // Text
    stream.Charset = "utf-8";
    stream.Open();
    stream.LoadFromFile("data.js");
    var content = stream.ReadText();
    stream.Close();
    
    var curly_stack = [];
    var square_stack = [];
    var in_string = false;
    var string_char = "";
    var escape = false;
    
    var line_num = 1;
    var col_num = 1;
    
    var output = [];
    function print(msg) {
        output.push(msg);
    }
    
    for (var i = 0; i < content.length; i++) {
        var char = content.charAt(i);
        
        if (escape) {
            escape = false;
            if (char === "\n") {
                line_num++;
                col_num = 1;
            } else {
                col_num++;
            }
            continue;
        }
        if (char === "\\") {
            escape = true;
            col_num++;
            continue;
        }
        
        if (in_string) {
            if (char === string_char) {
                in_string = false;
            }
            if (char === "\n") {
                line_num++;
                col_num = 1;
            } else {
                col_num++;
            }
            continue;
        }
        
        if (char === "'" || char === '"' || char === "`") {
            in_string = true;
            string_char = char;
            col_num++;
            continue;
        }
        
        if (char === "{") {
            curly_stack.push({ index: i, line: line_num, col: col_num });
        } else if (char === "}") {
            if (curly_stack.length === 0) {
                print("Unmatched } at Line " + line_num + ", Col " + col_num + ", context: " + content.substr(Math.max(0, i-30), 60).replace(/\r\n/g, " "));
            } else {
                curly_stack.pop();
            }
        } else if (char === "[") {
            square_stack.push({ index: i, line: line_num, col: col_num });
        } else if (char === "]") {
            if (square_stack.length === 0) {
                print("Unmatched ] at Line " + line_num + ", Col " + col_num + ", context: " + content.substr(Math.max(0, i-30), 60).replace(/\r\n/g, " "));
            } else {
                square_stack.pop();
            }
        }
        
        if (char === "\n") {
            line_num++;
            col_num = 1;
        } else {
            col_num++;
        }
    }
    
    print("Remaining unclosed { count: " + curly_stack.length);
    print("Remaining unclosed [ count: " + square_stack.length);
    
    if (square_stack.length > 0) {
        print("--- List of unclosed [ ---");
        for (var j = 0; j < Math.min(square_stack.length, 20); j++) {
            var item = square_stack[j];
            print("Unclosed [ at Line " + item.line + ", Col " + item.col + ", context: " + content.substr(Math.max(0, item.index-10), 80).replace(/\r\n/g, " "));
        }
    }
    
    if (curly_stack.length > 0) {
        print("--- List of unclosed { ---");
        for (var j = 0; j < Math.min(curly_stack.length, 20); j++) {
            var item = curly_stack[j];
            print("Unclosed { at Line " + item.line + ", Col " + item.col + ", context: " + content.substr(Math.max(0, item.index-10), 80).replace(/\r\n/g, " "));
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

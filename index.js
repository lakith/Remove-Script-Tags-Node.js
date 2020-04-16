function stripScriptTags(text) {
    let SCRIPT_REGEX = new RegExp (/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi);

    while (SCRIPT_REGEX.test(text)) {
      text = text.replace(SCRIPT_REGEX, "");
    }
    return text
}

function identifyAndRemoveScripts() {
 let text = '<span>Something<script type="text/javascript">alert(\'foo\');<\/script><\/span>'
  
  console.log(stripScriptTags(text))
}

identifyAndRemoveScripts()

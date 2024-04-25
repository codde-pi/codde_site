import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeExample({ language }) {
  const [code, setCode] = useState("");
  useEffect(() => {

    fetch('https://raw.githubusercontent.com/codde-pi/codde_example/main/jerry/main.py')
      .then(response => response.text())
      .then(text => setCode(text))
  }, [])
  return (
    <section>
      <h2>Finally, run Jerry...</h2>
      <SyntaxHighlighter style={atomOneDark} language={language}>{code}</SyntaxHighlighter>
      <p>Find more demos on <a href="https://github.com/codde-pi/codde_example" target="_blank">CODDE Example</a> repo ;)</p>
    </section>
  );
}

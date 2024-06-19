import { useEffect, useState } from "react";
import CodeBlock from '@theme/CodeBlock';

export default function CodeExample({ language }) {
  const [code, setCode] = useState("");
  useEffect(() => {

    fetch('https://raw.githubusercontent.com/codde-pi/codde_example/main/zumo/main.py')
      .then(response => response.text())
      .then(text => setCode(text))
  }, [])
  return (
    <section>
      <h2>Finally, run Jerry...</h2>
      <CodeBlock language={language}>{code}</CodeBlock>
      <p>Find more demos on <a href="https://github.com/codde-pi/codde_example" target="_blank">CODDE Example</a> repo ;)</p>
    </section>
  );
}

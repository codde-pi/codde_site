import CodeBlock from '@theme/CodeBlock';
import convertCamelToUnderscore from "@site/src/utils/doc_utils";

export default function PythonApi(props) {
    

return <><CodeBlock language="python">
{`from codde_protocol import event

@event(server)
def ${convertCamelToUnderscore(props.name)}_${props.id}(*args):
    print("${props.name} 1", args[0])`}
</CodeBlock></>
}

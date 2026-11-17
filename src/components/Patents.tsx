// Data structure for Patents
type PatentProp = {
    title: string
    number: string
    url: string
}

function Patents(props: PatentProp) {
    return (
        <li>
            <a href={props.url}>{props.title}</a>, {props.number}
        </li>
    )
}
export default Patents
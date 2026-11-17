// Data structure for Patents
type PatentProps = {
    title: string
    number: string
    url: string
}

function Patent(props: PatentProps) {
    return (
        <li>
            <a href={props.url}>{props.title}</a>, {props.number}
        </li>
    )
}
export default Patent
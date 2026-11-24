type PatentProps = {
    title: string
    number: string
    url?: string
}

function Patent(props: PatentProps) {
    return (
        <li>
            {props.url ? <a href={props.url}>{props.title}</a> : props.title}, {props.number}
        </li>
    )
}

export default Patent
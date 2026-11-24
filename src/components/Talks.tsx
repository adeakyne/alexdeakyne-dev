type TalkProps = {
    title: string
    event: string
    location?: string
    year: number
}

function Talks(props: TalkProps) {
    return (
        <li>
            {props.title}, <em>{props.event}</em>
            {props.location ? `, ${props.location}` : null}
            , {props.year}
        </li>
    )
}

export default Talks
// Shape of publications data component
type PublicationProps = {
    title: string
    venue: string
    year: number
    url: string
}

// Build parameterized publications
function Publication(props: PublicationProps) {
    return (
        <li>
            <a href={props.url}>{props.title}</a>, {props.venue}, {props.year}
        </li>
    )
}
export default Publication
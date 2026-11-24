import type { TalkData } from "../data/talks"
import Talk from "./Talk"

type TalkGroupProps = {
    heading: string
    talks: TalkData[]
}

function TalkGroup(props: TalkGroupProps) {
    return(
        <>
        <h3>{props.heading}</h3>
        <ol>
        {props.talks.map(talk => 
            <Talk
            key={talk.title}
            title={talk.title}
            event={talk.event}
            location={talk.location}
            year={talk.year}
            />
        )}
        </ol>
        </>
    )
}
export default TalkGroup
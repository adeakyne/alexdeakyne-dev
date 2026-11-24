import type { TalkData } from "../data/talks"
import Talk from "./Talks"

type TalkGroupProps = {
    heading: string
    talks: TalkData[]
}

function TalkGroups(props: TalkGroupProps) {
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
export default TalkGroups
import Degree from "./Degree";
import { education } from "../data/education";

function Education() {
    return (
        <>
            <h2>Education</h2>
            <ol>
            {education.map(deg => (
                <Degree key={deg.degree} {...deg} />
            ))}
            </ol>
        </>
    )
}

export default Education
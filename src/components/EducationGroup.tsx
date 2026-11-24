import Degree from "./Education";
import type { EducationData } from "../data/education";

type EducationGroupProps = {
    heading: string
    education: EducationData[]
}

function EducationGroup(props: EducationGroupProps) {
    return(
        <>
        <h2>Education</h2>
        {props.education.map(deg =>
            <Degree
            degree={deg.degree}
            field={deg.field}
            thesis={deg.thesis}
            university={deg.university}
            location={deg.location}
            year={deg.year}
            />
        )}
        </>
    )
}
export default EducationGroup
export type TalkData = {
    type: "talk" | "poster"
    title: string
    event: string
    location?: string
    year: number
}

export const talks: TalkData[] = [
    {
        type: "talk",
        title: "Deep Learning Pipeline for the Automatic Segmentation and 3D Model Generation of the Four Heart Chambers; Applied Uses in Pre-Surgical Planning",
        event: "Frontier of AI-Assisted Care Scientific Symposium",
        location: "Stanford University, Stanford, CA",
        year: 2019,
    },
    {
        type: "talk",
        title: "A Deep Learning Approach for the Automatic Identification of the Left Atrium within CT Scans",
        event: "ASME Design of Medical Devices Conference",
        location: "Minneapolis, MN",
        year: 2019,
    },
    {
        type: "poster",
        title: "A Helpful Relocation Function for Augmenting Teaching in a Multiple User Shared Virtual Environment",
        event: "Future Technologies Conference (FTC)",
        year: 2021,
    },
    {
        type: "poster",
        title: "Development of Anaglyph 3D Functionality for Cost-Effective Virtual Reality Anatomical Education",
        event: "Computing Conference",
        year: 2021,
    },
    {
        type: "poster",
        title: "Interactive Computational Medical Device Deployments within Virtual Reality",
        event: "ASME Design of Medical Devices Conference",
        year: 2021,
    },
    {
        type: "poster",
        title: "Development of Anaglyph 3D Functionality for Cost-Effective Virtual Reality Anatomical Education Tool",
        event: "ASME Design of Medical Devices Conference",
        year: 2020,
    },
]
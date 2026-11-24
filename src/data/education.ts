export type EducationData = {
    degree: "PhD" | "MS" | "BS"
    field: string
    thesis?: string
    university: string
    location: string
    year: number
}

export const education: EducationData[] = [
    {
        degree: "PhD",
        field: "Bioinformatics and Computational Biology",
        thesis: "The Uses of Artificial Intelligence and Virtual Reality Platforms for Developing the Next Generation of Anatomical, Medical Device, and Surgical Educational Tools",
        university: "University of Minnesota",
        location: "Minneapolis, MN",
        year: 2021,
    },
    {
        degree: "MS",
        field: "Bioinformatics and Computational Biology",
        thesis: "Immersive Anatomical Scenes that Enable Multiple Users to Occupy the Same Virtual Space: A Tool for Surgical Planning and Education",
        university: "University of Minnesota",
        location: "Minneapolis, MN",
        year: 2019,
    },
    {
        degree: "BS",
        field: "Mechanical Engineering",
        university: "Iowa State University",
        location: "Ames, IA",
        year: 2015,
    },
]
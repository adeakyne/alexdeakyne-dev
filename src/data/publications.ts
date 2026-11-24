export type PublicationData = {
  type: "book" | "journal" | "conference" | "preprint"
  title: string
  venue: string
  year: number
  url: string
}

export const publications: PublicationData[] = [
  // ===== Book chapters =====
  {
    type: "book",
    title: "Procedural Training and Education: A Multimodal and Interactive Approach",
    venue: "Heart Valves (Springer)",
    year: 2023,
    url: "https://link.springer.com/chapter/10.1007/978-3-031-25541-0_22",
  },

  // ===== Journal articles =====
  {
    type: "journal",
    title: "Virtual Prototyping: Computational Device Placements within Detailed Human Heart Models",
    venue: "Applied Sciences",
    year: 2020,
    url: "https://doi.org/10.3390/app10010175",
  },

  // ===== Conference papers =====
  {
    type: "conference",
    title: "A Helpful Relocation Function for Augmenting Teaching in a Multiple User Shared Virtual Environment",
    venue: "Proceedings of the Future Technologies Conference (FTC) 2021",
    year: 2022,
    url: "https://link.springer.com/chapter/10.1007/978-3-030-89912-7_29",
  },
  {
    type: "conference",
    title: "Development of Anaglyph 3D Functionality for Cost-Effective Virtual Reality Anatomical Education",
    venue: "Intelligent Computing: Proceedings of the 2021 Computing Conference",
    year: 2021,
    url: "https://link.springer.com/chapter/10.1007/978-3-030-80129-8_28",
  },
  {
    type: "conference",
    title: "Interactive Computational Medical Device Deployments within Virtual Reality",
    venue: "ASME Design of Medical Devices Conference (DMD)",
    year: 2021,
    url: "https://asmedigitalcollection.asme.org/BIOMED/proceedings/DMD2021/84812/V001T03A002/1109124",
  },
  {
    type: "conference",
    title: "Virtual Reality and Visualization of 3D Reconstructed Medical Imaging: Learning Variations Within Detailed Human Anatomies",
    venue: "Proceedings of the Future Technologies Conference (FTC) 2020",
    year: 2021,
    url: "https://link.springer.com/chapter/10.1007/978-3-030-63092-8_14",
  },
  {
    type: "conference",
    title: "Development of Anaglyph 3D Functionality for Cost-Effective Virtual Reality Anatomical Education Tool",
    venue: "ASME Design of Medical Devices Conference (DMD)",
    year: 2020,
    url: "https://doi.org/10.1115/DMD2020-9014",
  },
  {
    type: "conference",
    title: "Development of an Open-Access Library of Pediatric Congenital Heart Diseases and Treatments: A Tutorial on the Atlas of Human Cardiac Anatomy",
    venue: "ASME Design of Medical Devices Conference (DMD)",
    year: 2020,
    url: "https://doi.org/10.1115/DMD2020-9064",
  },
  {
    type: "conference",
    title: "A Deep Learning Approach for the Automatic Identification of the Left Atrium within CT Scans",
    venue: "ASME Design of Medical Devices Conference (DMD)",
    year: 2019,
    url: "https://doi.org/10.1115/DMD2019-3282",
  },

  // ===== Preprints =====
  {
    type: "preprint",
    title: "Automated Multiclass Cardiac Volume Segmentation and Model Generation",
    venue: "arXiv",
    year: 2019,
    url: "https://arxiv.org/abs/1909.06685",
  },
]
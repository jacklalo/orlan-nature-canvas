export interface Sculpture {
  id: string;
  title: string;
  year: string;
  medium?: string;
  description?: string;
  imagePlaceholder: string; // Description for placeholder since we don't have actual images
}

export const sculpturesData: Sculpture[] = [
  {
    id: "performance-wheelbarrow",
    title: "Performance Wheelbarrow — Se vendre sur les marchés en petits morceaux",
    year: "1976–1977",
    medium: "Mixed media, wheelbarrow, photographs on wood",
    description: "Object from the performance in which ORLAN sold black-and-white photographs of her body parts, glued to wood and detoured, propelled on a cart through vegetable markets like foodstuffs.",
    imagePlaceholder: "Wheelbarrow sculpture with mounted photographs"
  },
  {
    id: "orlan-corps-sculpture",
    title: "ORLAN-corps (Body-Sculpture)",
    year: "1965–1975",
    medium: "Photography, sculpture, mixed media",
    description: "Early sculptural works exploring the body as material and subject, establishing themes that would define ORLAN's later practice.",
    imagePlaceholder: "Body sculpture installation"
  },
  {
    id: "reliquaires",
    title: "Reliquaires — My Flesh, the Text, and Languages",
    year: "1993",
    medium: "Flesh from surgical operations, resin, metal",
    description: "Sculptural reliquaries containing flesh removed during ORLAN's surgery-performances. These works preserved bodily material as sacred objects, questioning religious iconography and the status of the artist's body.",
    imagePlaceholder: "Reliquary containers with preserved flesh"
  },
  {
    id: "bumps",
    title: "Bump-Load!",
    year: "2009–2012",
    medium: "Resin, mixed media",
    description: "Series of sculptural works featuring exaggerated bodily protrusions, exploring technology's impact on the human form and posthuman aesthetics.",
    imagePlaceholder: "Sculptural forms with protrusions"
  },
  {
    id: "harlequin-coat",
    title: "Harlequin Coat",
    year: "2007–2008",
    medium: "Living cell cultures, Petri dishes, multimedia installation",
    description: "A multimedia bioart installation created in collaboration with SymbioticA. The work features living skin cell cultures from people of different ethnic origins, creating a patchwork 'coat' that questions identity, genetics, and species boundaries.",
    imagePlaceholder: "Bioart installation with cell cultures"
  },
  {
    id: "orlan-oide",
    title: "ORLAN-oïde",
    year: "2018",
    medium: "Robotic sculpture, artificial intelligence, mixed media",
    description: "A robotic sculpture created in ORLAN's image that speaks with her voice. The work extends her practice into artificial intelligence and robotics, questioning the boundaries between human and machine.",
    imagePlaceholder: "Robotic humanoid sculpture"
  },
  {
    id: "robots-recycled",
    title: "Robots Made from Recycled Objects and Materials",
    year: "2024",
    medium: "Recycled objects, mixed media, electronics",
    description: "Series of robot sculptures created from recycled materials, continuing ORLAN's exploration of technology, ecology, and the posthuman condition.",
    imagePlaceholder: "Robot sculptures made from recycled materials"
  },
  {
    id: "endangered-species-sculptures",
    title: "Endangered Species Sculptures",
    year: "2020–2024",
    medium: "Mixed media, sculptural installation",
    description: "Sculptural works related to ORLAN's ongoing engagement with endangered species and ecological themes, extending her nature-focused practice into three-dimensional form.",
    imagePlaceholder: "Endangered species sculptural works"
  }
];

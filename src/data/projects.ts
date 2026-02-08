import harlequinCoat from "@/assets/harlequin-coat.jpg";
import endangeredPolarBear from "@/assets/endangered-polar-bear.jpg";
import recycledRobot from "@/assets/recycled-robot.jpg";
import endangeredTurtle from "@/assets/endangered-turtle.jpg";
import mayanHybridization from "@/assets/mayan-hybridization.jpg";

export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  medium: string;
  dimensions?: string;
}

export const natureProjects: Project[] = [
  {
    id: "harlequin-coat",
    title: "Harlequin Coat",
    year: "2008",
    category: "Biotechnology / Bio Art",
    image: harlequinCoat,
    description: "A multimedia installation involving live co-culturing of cells from different species and ethnic origins.",
    longDescription: "The Harlequin Coat is a groundbreaking bioart installation created in collaboration with SymbioticA. It involves the live co-culturing of various cells from different species and ethnic origins, including cells from the artist's own body. The work questions the boundaries between species, nature, and identity, creating a living tapestry that challenges our understanding of biological categorization.",
    medium: "Live cell cultures, bioreactor, video installation",
    dimensions: "Variable dimensions",
  },
  {
    id: "endangered-polar-bear",
    title: "The Endangered Polar Bear",
    year: "2024",
    category: "Endangered Species Series",
    image: endangeredPolarBear,
    description: "A powerful meditation on climate change and the fragility of arctic ecosystems.",
    longDescription: "Part of ORLAN's ongoing series exploring endangered species, this work confronts viewers with the reality of climate change through the symbolic figure of the polar bear. The piece invites reflection on humanity's relationship with nature and our responsibility to protect vulnerable ecosystems.",
    medium: "Digital photograph, mixed media",
    dimensions: "Variable dimensions",
  },
  {
    id: "recycled-robots",
    title: "Robots Made from Recycled Objects",
    year: "2024",
    category: "Environmental Sculpture",
    image: recycledRobot,
    description: "Humanoid forms constructed entirely from discarded materials and electronic waste.",
    longDescription: "These sculptural works transform discarded materials—electronic waste, rusted metals, and forgotten objects—into anthropomorphic figures. The robots embody ORLAN's commitment to environmental consciousness while questioning the relationship between technology, nature, and human identity. Each piece tells a story of transformation and renewal.",
    medium: "Recycled materials, found objects, electronic waste",
    dimensions: "Life-size installation",
  },
  {
    id: "endangered-african-turtle",
    title: "The Endangered African Turtle",
    year: "2024",
    category: "Endangered Species Series",
    image: endangeredTurtle,
    description: "Ancient wisdom meets contemporary environmental crisis in this evocative portrait.",
    longDescription: "Continuing the Endangered Species series, this work features the African turtle as a symbol of ancient wisdom and biological continuity. The piece serves as both documentation and protest, highlighting the urgent need for conservation while celebrating the profound beauty of these prehistoric creatures.",
    medium: "Digital photograph, mixed media",
    dimensions: "Variable dimensions",
  },
  {
    id: "mayan-self-hybridization",
    title: "Mayan Self-Hybridizations",
    year: "2022",
    category: "Self-Hybridization Series",
    image: mayanHybridization,
    description: "Digital morphing between the artist and anthropomorphic Mayan figures connected to nature deities.",
    longDescription: "In this series, ORLAN hybridizes her own image with Mayan anthropomorphic figures—deities and spirits that embody the connection between humans and the natural world. These digital photo-montages explore pre-Columbian cosmology where humans, animals, and nature exist in sacred interconnection, challenging Western notions of separation from the natural world.",
    medium: "Digital photo-montage",
    dimensions: "120 × 150 cm",
  },
];

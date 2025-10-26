export type Study = {
  id: string;
  title: string;
  authors?: string;
  year?: string;
  journal?: string;
  type: "peer-reviewed" | "government" | "ngo/news";
  summary: string;
  link: string;
};

export const studies: Study[] = [
  {
    id: "fragrance-voc-2023-radis-baptista",
    title: "Do Synthetic Fragrances in Personal Care and Household Products Impact Indoor Air Quality and Pose Health Risks?",
    authors: "G. Rádis‑Baptista",
    year: "2023",
    journal: "Journal of Xenobiotics",
    type: "peer-reviewed",
    summary: "Fragrance chemicals are VOCs that can degrade indoor air and may irritate skin/airways; review discusses endocrine–immune–neural axis interactions.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10051690/"
  },
  {
    id: "dodson-2012-ehp",
    title: "Endocrine Disruptors and Asthma‑Associated Chemicals in Consumer Products",
    authors: "R.E. Dodson et al.",
    year: "2012",
    journal: "Environmental Health Perspectives",
    type: "peer-reviewed",
    summary: "Testing of 213 products detected parabens, phthalates, triclosan, glycol ethers and UV filters; many chemicals were not on labels.",
    link: "https://ehp.niehs.nih.gov/doi/abs/10.1289/ehp.1104052"
  },
  {
    id: "olas-2021-adv-nutr",
    title: "The Effects of Natural and Synthetic Blue Dyes on Human Health",
    authors: "B. Olas",
    year: "2021",
    journal: "Advances in Nutrition",
    type: "peer-reviewed",
    summary: "Review: Some synthetic dyes (e.g., Blue No. 1/2) have uncertain safety; natural pigments (anthocyanins) show antioxidant/anti‑inflammatory profiles.",
    link: "https://advances.nutrition.org/article/S2161-8313(22)00507-5/fulltext"
  },
  {
    id: "kanyama-2025-plosone",
    title: "Natural Soap Is Clinically Effective and Less Toxic and More Biodegradable than Synthetic Detergents",
    authors: "T. Kanyama et al.",
    year: "2025",
    journal: "PLOS ONE",
    type: "peer-reviewed",
    summary: "Keratinocyte assay: soap salts had ~10× higher IC50 vs SLS; plus better biodegradability in aquatic tests.",
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0324842"
  },
  {
    id: "misra-2020-frontiers-genetics",
    title: "The Chemical Exposome of Human Aging",
    authors: "B.B. Misra",
    year: "2020",
    journal: "Frontiers in Genetics",
    type: "peer-reviewed",
    summary: "Review: Lifelong exposures to xenobiotics (including personal‑care chemicals) influence aging biology and chronic disease risk.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7732411/"
  },
  {
    id: "phthalates-2020-ijerph",
    title: "Effects and Mechanisms of Phthalates’ Action on Reproductive Processes",
    authors: "H. Hlisníková et al.",
    year: "2020",
    journal: "Int. J. Environ. Res. Public Health",
    type: "peer-reviewed",
    summary: "Review: Phthalates linked to alterations in puberty and reproductive hormones; mechanisms include receptor/signaling disruption.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7559247/"
  },
  {
    id: "puberty-2022-review",
    title: "Phenols, Parabens, Phthalates and Puberty",
    authors: "Z. Rivera‑Núñez et al.",
    year: "2022",
    journal: "Current Environmental Health Reports",
    type: "peer-reviewed",
    summary: "Review: Prenatal/childhood exposures to select phthalates/phenols associated with shifts in pubertal timing; evidence varies by compound.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9742306/"
  },
  {
    id: "parabens-2021-review",
    title: "Parabens as Chemicals of Emerging Concern in the Environment and Humans",
    authors: "F. Wei et al.",
    year: "2021",
    journal: "Environment International",
    type: "peer-reviewed",
    summary: "Review: Parabens can act as endocrine‑disrupting chemicals; summarizes exposure routes and health concerns.",
    link: "https://pubmed.ncbi.nlm.nih.gov/34030374/"
  },
  {
    id: "fda-2016-final-rule",
    title: "FDA Final Rule: Consumer Antiseptic Washes (Triclosan/Triclocarban)",
    authors: "U.S. FDA / Federal Register",
    year: "2016",
    journal: "Federal Register",
    type: "government",
    summary: "19 antibacterial actives (incl. triclosan, triclocarban) ruled not GRAS/GRAE; antibacterial soaps not better than plain soap for consumers.",
    link: "https://www.federalregister.gov/documents/2016/09/06/2016-21337/safety-and-effectiveness-of-consumer-antiseptics-topical-antimicrobial-drug-products-for"
  }
];

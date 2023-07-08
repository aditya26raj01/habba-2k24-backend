const AIT_Branches = [
    { value: "AE", department: "Aeronutical Engineering" },
    { value: "CV", department: "Civil Engineering" },
    { value: "AI/ML", department: " Artificial Intelligence & Machine Learning Engg." },
    { value: "AU", department: "Automobile Engineering" },
    { value: "BT", department: "BioTechnology Engineering" },
    { value: "CSE", department: "Computer Science Engineering" },
    { value: "EEE", department: "Electrical & Electronic Engineering" },
    { value: "ECE", department: "Electronics & Communication Engineering" },
    { value: "ISE", department: "Information Science & Engineering" },
    { value: "ME", department: "Mechanical Engineering" },
    { value: "MN", department: "Mining Engineering" },
    { value: "MT", department: "Mechatronics Engineering" },
    { value: "MBA", department: "Master of Buisness Administration" },
    { value: "CPRD", department: "CPRD" },
    { value: "CSDS", department: "Computer Science Engg. - Data Science" },
    { value: "MCA", department: "Master Of Computer Applications" },
    // { value: "OTH", department: "Others" }
];

const ANRVASA_Branches = [
    { value: "Arch", department: "Bachelor Of Architecture" },
    // { value: "OTH", department: "Others" }
];

const ABMRCP_Branches = [
    { value: "DP", department: "D.Pharm" },
    { value: "BP", department: "B.Pharm" },
    { value: "MP", department: "M.Pharm" },
    { value: "PD", department: "Pharm D" },
    { value: "PBPD", department: "PB Pharm D" },
    // { value: "OTH", department: "Others" }
];

const ASM_Branches = [
    { value: "PGDM", department: "P.G.D.M" },
    // { value: "OTH", department: "Others" }
];

const ASE_Branches = [
    { value: "DEE", department: "Diploma in Elementary Education" },
    { value: "BE", department: "Bachelor of Education" },
    // { value: "OTH", department: "Others" }
];

const AIGS_Branches = [
    { value: "BAJ", department: "Bachelor of Arts in PJE" },
    { value: "BSC", department: "Bachelor of science" },
    { value: "BA", department: "Bachelor of Arts - Criminology" },
    { value: "BSW", department: "Bachelor of Social work" },
    { value: "BBA-AV", department: "Bachelor of Business Administration - Aviation" },
    // { value: "BBAI", department: "Bachelor of Business Administration International Immersion" },
    { value: "BCom", department: "Bachelor of Commerce" },
    { value: "BCom-CMA", department: "Bachelor of Commerce - CMA" },
    { value: "BCA", department: "Bachelor of Computer Application" },
    { value: "BCA-DS", department: "Bachelor of Computer Application - Data Science" },
    { value: "BCA-CC", department: "Bachelor of Computer Application - Cloud Computing" },
    { value: "BBA", department: "Bachelor of Business Administration" },
    { value: "BSCF", department: "Bsc in Fashion and Apparel Design" },
    // { value: "ME", department: "Master of Arts in Economics" },
    { value: "MAE", department: "Master of Arts in English" },
    { value: "MBA", department: "Master of Buisness Administration" },
    { value: "MCA", department: "Master Of Computer Applications" },
    // { value: "MSE", department: "Master of Science in Electronic Media" },
    { value: "MAJ", department: "Master of Arts in Journalism and Mass Communication" },
    { value: "MSW", department: "Master of Social Work" },
    // { value: "MIB", department: "Master of International Business" },
    // { value: "MFA", department: "Master in Finance and Accounting" },
    { value: "MCom", department: "Master of Commerce" },
    { value: "MSP", department: "Master of Science in Physics" },
    { value: "MSC", department: "Master of Science in Chemistry" },
    { value: "MSC-P", department: "Master of Science in Psychology" },
    // { value: "MSM", department: "Master of Science in Mathematics" },
    { value: "MSPy", department: "Master of Science in Psychology" },
    // { value: "MsF", department: "Master of Science in Fashion and Apparel Design" },
    // { value: "OTH", department: "Others"}
];

const AP_Branches = [
    { value: "AE", department: "Aeronautical Engineering" },
    { value: "ADFT", department: "Apparel Design & Fabrication Technology" },
    { value: "ArchE", department: "Architecture Engineering" },
    { value: "AuE", department: "Automobile Engineering" },
    { value: "CE", department: "Civil Engineering" },
    // { value: "CP", department: "Commercial Practise" },
    { value: "CSE", department: "Computer Science and Engineering" },
    { value: "EEE", department: "Electrical & Electronics Engineering" },
    { value: "ECE", department: "Electronics & Communication Engineering" },
    { value: "ME", department: "Mechanical Engineering" },
    { value: "MtE", department: "Mechatronics Engineering" },
    // { value: "MiE", department: "Mining Engineering" },
    // { value: "OTH", department: "Others" }
];

const SNSN_Branches = [
    { value: "GNM", department: "General Nursing and MidWifery"},
    // { value: "BBN", department: "Basic BSc Nursingy"},
    // { value: "PBBN", department: "Post Basic BSc Nursing"},
    // { value: "MN", department: "Msc Nursing"},
    // { value: "OTH", department: "Others"}
];

const SNCN_Branches = [
    // { value: "NRC", department: "NRC"},
    { value: "BBN", department: "Basic BSc Nursingy"},
    { value: "PBBN", department: "Post Basic BSc Nursing"},
    { value: "MN", department: "Msc Nursing"},
    // { value: "OTH", department: "Others"}
];

const APC_Branches = [
    { value: "PCMB", department: "Science-Physics Chemistry Mathematics and Biology"},
    { value: "PCMC", department: "Science-Physics Chemistry Mathematics and Computer Science"},
    { value: "PCME", department: "Science-Physics Chemistry Mathematics and Electronics"},
    { value: "COM", department: "Commerce-Computer Science Economics Business Studies and Accountancy"},
    // { value: "OTH", department: "Others"}
];

const ASL_Branches = [
    { value: "BA LLB", department: "BA LLB"},
    { value: "LLB", department: "LLB"},
    { value: "BBA LLB", department: "BBA LLB"},
    // { value: "OTH", department: "Others"}
];

const ASD_Branches = [
    // { value: "PA", department: "Painting"},
    { value: "GD", department: "Graphic and Comm. Design"},
    { value: "AMD", department: "Animation and Game Art"},
    { value: "ISD", department: "Interior and Spatial Design"},
    { value: "PD", department: "Product Design"},
    // { value: "OTH", department: "Others"}
];

const AIAS_Branches = [
    { value: "BAT", department: "B.Sc in Anesthesia & Operation Theater Tech."},
    // { value: "BOTT", department: "B.Sc Operation Theater Technology"},
    { value: "BRCT", department: "B.Sc in Renal Dialysis Tech."},
    // { value: "BRT", department: "BSc in Radio Therapy"},
    { value: "BO", department: "BSc in Optometry"},
    { value: "RCT", department: "BSc in Respiratory Care Tech."},
    { value: "RDT", department: "BSc in Renal Dialysis Tech."},
    { value: "MIT", department: "BSc in Imaging Tech."},
    { value: "MLT", department: "BSc in Medical Lab Tech."},
    { value: "BHA", department: "Bachelor of Hospital Administration"},
    { value: "BOT", department: "Bachelor in Occupational Threapy"},
    // { value: "OTH", department: "Others"}
];

const AIP_Branches = [
    { value: "BOP", department: "Bachelor of Physiotheraphy"},
    // { value: "OTH", department: "Others"}
];

const AIEFL_Branches = [
    { value: "OTH", department: "English Spanish German"}
];

const Others_Branches = [
    { value: "HKPY", department: "House Keeping"},
    { value: "MTNS", department: "Maintenance"},
    // { value: "others", department: "Other"},
]

const renderDepartments = (college) => {
    switch (college) {
        case "AIT": return AIT_Branches;
        case "ANRVASA": return ANRVASA_Branches;
        case "ABMRCP": return ABMRCP_Branches;
        case "ASM": return ASM_Branches;
        case "ASE": return ASE_Branches;
        case "AIGS": return AIGS_Branches;
        case "AP": return AP_Branches;
        case "SNSN": return SNSN_Branches;
        case "SNCN": return SNCN_Branches;
        case "APC": return APC_Branches;
        case "ASL": return ASL_Branches;
        case "ASD": return ASD_Branches;
        case "AIAS": return AIAS_Branches;
        case "AIP": return AIP_Branches;
        case "AIEFL": return AIEFL_Branches;
        case "OTH": return Others_Branches;
        default: return ["|"];
    }
}
export default renderDepartments;
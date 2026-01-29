export const trainings = {
  cpr_online_training: {
    name: "CPR/First Aid Certification (American Red Cross or American Heart Association)",
    dbFieldName: "cpr_online_training_completed_at",
    description:
      "CPR and First Aid certification from either the American Red Cross or the American Heart Association. Both organizations are accepted. Covers emergency response techniques for adults, children, and infants including CPR, AED usage, and basic first aid procedures.",
  },
  pdis_first_aid_cpr: {
    name: "Introduction to First Aid and CPR",
    dbFieldName: "pdis_first_aid_cpr_completed_at",
    description:
      "PDIS course providing foundational knowledge of first aid and CPR techniques for child care providers, covering emergency response basics in early childhood settings.",
  },
  pdis_standard_precautions: {
    name: "Standard Precautions, including Prevention and Control of Infectious Diseases and Immunizations",
    dbFieldName: "pdis_standard_precautions_completed_at",
    description:
      "PDIS course covering infection control practices, disease prevention protocols, immunization requirements, and standard health precautions for child care environments.",
  },
  pdis_preventing_child_abuse: {
    name: "Preventing and Responding to Child Abuse and Neglect",
    dbFieldName: "pdis_preventing_child_abuse_completed_at",
    description:
      "PDIS course training child care providers to recognize signs of child abuse and neglect, understand mandatory reporting requirements, and respond appropriately to protect children.",
  },
  pdis_infant_safe_sleep: {
    name: "Infant Safe Sleep Practices",
    dbFieldName: "pdis_infant_safe_sleep_completed_at",
    description:
      "PDIS course covering safe sleep guidelines for infants including proper sleep positioning, safe sleep environments, and SIDS prevention strategies for child care providers.",
  },
  pdis_emergency_preparedness: {
    name: "Emergency and Disaster Preparedness for Child Care Providers",
    dbFieldName: "pdis_emergency_preparedness_completed_at",
    description:
      "PDIS course teaching child care providers how to prepare for and respond to emergencies and disasters, including evacuation procedures, emergency plans, and communication protocols.",
  },
  pdis_playground_safety: {
    name: "Playground Safety for Homes (Prerequisite)",
    dbFieldName: "pdis_playground_safety_completed_at",
    description:
      "PDIS prerequisite course covering playground safety standards, hazard identification, supervision practices, and age-appropriate equipment guidelines for home-based child care settings.",
  },
  pdis_injury_prevention: {
    name: "Injury Prevention for Homes",
    dbFieldName: "pdis_injury_prevention_completed_at",
    description:
      "PDIS course focused on identifying and mitigating injury risks in home-based child care environments, covering childproofing, safe practices, and hazard prevention strategies.",
  },
  pdis_preventing_shaken_baby: {
    name: "Preventing Shaken Baby Syndrome and Abusive Head Trauma",
    dbFieldName: "pdis_preventing_shaken_baby_completed_at",
    description:
      "PDIS course educating child care providers about the dangers of shaking infants, recognizing signs of abusive head trauma, and strategies for managing caregiver stress and frustration.",
  },
  pdis_recognizing_impact_of_bias: {
    name: "Recognizing the Impact of Bias on Early Childhood Professionals",
    dbFieldName: "pdis_recognizing_impact_of_bias_completed_at",
    description:
      "PDIS course exploring implicit and explicit bias in early childhood education, helping providers understand how bias affects interactions with children and families and promoting equitable practices.",
  },
  pdis_medication_administration_part_one: {
    name: "Medication Administration Training, Part 1",
    dbFieldName: "pdis_medication_administration_part_one_completed_at",
    description:
      "PDIS course covering safe medication administration practices for child care providers, including proper storage, documentation, dosage verification, and emergency protocols. Part 2 is NOT required for this program. If the certificate states that Part 2 is required, ignore that text - only Part 1 completion is needed.",
  },
} as const;

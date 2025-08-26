import {
  isArrayOrEmptyString,
  isObject,
  isString,
} from "../_shared/mappings/isType.ts";
import {
  noChangeParser,
  numberOrNullParser,
  phoneNumberParser,
  stringOrNullParser,
  yesNoParser,
  birthdateParser,
  acceptParser,
  checkboxesParser,
  arrayCheckboxesParser,
} from "../_shared/mappings/parsers.ts";
import { Mapping } from "../_shared/mappings/mapping.ts";

const nameObject = isObject(["first", "last"]);
const birthdateObject = isObject(["month", "day", "year"]);
const phoneNumberObject = isObject(["full"]);
const addressObject = isObject([
  "addr_line1",
  "addr_line2",
  "city",
  "state",
  "postal",
]);

export const M = {
  linkId: new Mapping("q176_link_id", stringOrNullParser, isString),
  selectedLanguage: new Mapping("input_language", noChangeParser, isString),
  providerName: new Mapping("q178_pleaseEnter178", noChangeParser, isString),
  primaryGuardian: {
    name: new Mapping("q11_pleaseEnter", noChangeParser, nameObject),
    birthdate: new Mapping("q66_whatIs66", birthdateParser, birthdateObject),
    email: new Mapping("q5_email", noChangeParser, isString),
    phone: new Mapping("q6_phoneNumber", phoneNumberParser, phoneNumberObject),
    address: new Mapping("q7_whatIs7", noChangeParser, addressObject),
    raceOrEthnicity: new Mapping(
      "q117_whatIs117",
      checkboxesParser(),
      isString,
    ),
  },
  hasSecondaryGuardian: new Mapping("q80_typeA80", yesNoParser, isString),
  secondaryGuardian: {
    name: new Mapping("q12_pleaseEnter12", noChangeParser, nameObject),
    birthdateParser: new Mapping(
      "q67_whatIs67",
      birthdateParser,
      birthdateObject,
    ),
    email: new Mapping("q13_whatIs13", noChangeParser, isString),
    phone: new Mapping("q14_whatIs14", phoneNumberParser, phoneNumberObject),
    address: new Mapping("q15_whatIs15", noChangeParser, addressObject),
    raceOrEthnicity: new Mapping(
      "q118_whatIs118",
      checkboxesParser(),
      isString,
    ),
  },
  householdSize: new Mapping("q16_includingYou", numberOrNullParser, isString),
  incomeFrequency: new Mapping("q180_whenYou", noChangeParser, isString),
  monthlyIncome: new Mapping("q17_whatIs17", numberOrNullParser, isString),
  yearlyIncome: new Mapping("q181_whatIs181", numberOrNullParser, isString),
  assetsOverMillion: new Mapping("q84_doesYour84", yesNoParser, isString),
  currentChildCarePrograms: new Mapping(
    "q19_areYou",
    arrayCheckboxesParser(),
    isArrayOrEmptyString,
  ),
  whyNeedChildCare: new Mapping("q68_typeA68", checkboxesParser(), isString),
  firstChild: {
    name: new Mapping("q37_pleaseEnter37", noChangeParser, nameObject),
    birthdate: new Mapping("q38_whatIs38", birthdateParser, birthdateObject),
    currentlyReceivingCare: new Mapping("q90_isYour90", yesNoParser, isString),
    typeOfCare: new Mapping("q70_typeA70", checkboxesParser(), isString),
    satisfaction: new Mapping("q134_howSatisfied", noChangeParser, isString),
    satisfactionExplanation: new Mapping(
      "q34_pleaseTell",
      noChangeParser,
      isString,
    ),
    childCareNeeds: new Mapping("q47_typeA", noChangeParser, isString),
    childCarePeriod: new Mapping("q48_pleaseSpecify", noChangeParser, isString),
    raceOrEthnicity: new Mapping("q115_typeA115", checkboxesParser(), isString),
    language: new Mapping("q71_typeA71", checkboxesParser(), isString),
  },
  hasSecondChild: new Mapping("q97_wouldYou", yesNoParser, isString),
  secondChild: {
    name: new Mapping("q50_pleaseEnter2ndChild", noChangeParser, nameObject),
    birthdate: new Mapping(
      "q51_whatIsDOB2ndChild",
      birthdateParser,
      birthdateObject,
    ),
    currentlyReceivingCare: new Mapping("q99_isYour", yesNoParser, isString),
    typeOfCare: new Mapping("q72_typeA72", checkboxesParser(), isString),
    satisfaction: new Mapping("q135_howSatisfied135", noChangeParser, isString),
    satisfactionExplanation: new Mapping(
      "q55_pleaseTell55",
      noChangeParser,
      isString,
    ),
    childCareNeeds: new Mapping(
      "q57_pleaseSpecify57",
      noChangeParser,
      isString,
    ),
    childCarePeriod: new Mapping(
      "q58_pleaseSpecify58",
      noChangeParser,
      isString,
    ),
    raceOrEthnicity: new Mapping(
      "q116_whatIs116",
      checkboxesParser(),
      isString,
    ),
    language: new Mapping("q73_whatIs73", checkboxesParser(), isString),
  },
  currentBenefitsPrograms: new Mapping(
    "q60_doYou60",
    arrayCheckboxesParser(),
    isArrayOrEmptyString,
  ),
  agreements: {
    responsibleForFindingCare: new Mapping(
      "q137_typeA137",
      acceptParser,
      isString,
    ),
    dependentOnCapApproval: new Mapping(
      "q138_typeA138",
      acceptParser,
      isString,
    ),
    changeProviders: new Mapping("q139_typeA139", acceptParser, isString),
    photoRelease: new Mapping("q170_photoRelease", acceptParser, isString),
    termsAndConditions: new Mapping("q140_typeA140", acceptParser, isString),
    privacyPolicy: new Mapping("q141_typeA141", acceptParser, isString),
    tcpa: new Mapping("q142_typeA142", acceptParser, isString),
  },
} as const;

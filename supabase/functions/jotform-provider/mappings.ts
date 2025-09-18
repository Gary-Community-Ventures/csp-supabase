import { Mapping } from "../_shared/mappings/mapping.ts";
import {
  acceptParser,
  arrayCheckboxesParser,
  checkboxesParser,
  jsonParser,
  noChangeParser,
  numberOrNullParser,
  phoneNumberParser,
  stringOrNullParser,
  tableParser,
  yesNoParser,
} from "../_shared/mappings/parsers.ts";
import {
  isArray,
  isObject,
  isString,
  isTable,
} from "../_shared/mappings/isType.ts";

const nameObject = isObject(["first", "last"]);
const phoneObject = isObject(["full"]);
const addressObject = isObject([
  "addr_line1",
  "addr_line2",
  "city",
  "state",
  "postal",
]);

export const M = {
  preferredLanguage: new Mapping("input_language", stringOrNullParser, isString),
  familyName: new Mapping("q165_pleaseEnter165", stringOrNullParser, isString),
  isLicensed: new Mapping("q97_areYou", yesNoParser, isString),
  licenseNumber: new Mapping("q65_whatIs65", stringOrNullParser, isString),
  licenseName: new Mapping("q64_whatIs64", stringOrNullParser, isString),
  licenseType: new Mapping("q66_whatType", stringOrNullParser, isString),
  name: new Mapping("q11_pleaseEnter", noChangeParser, nameObject),
  email: new Mapping("q5_email", stringOrNullParser, isString),
  phone: new Mapping("q6_phoneNumber", phoneNumberParser, phoneObject),
  addresses: {
    licensed: new Mapping("q7_whatIs7", noChangeParser, addressObject),
    notLicensedHome: new Mapping("q68_whatIs68", noChangeParser, addressObject),
    notLicensedCare: new Mapping("q15_whatIs15", noChangeParser, addressObject),
  },
  caresForDisabled: new Mapping(
    "q178_servedisabilities",
    yesNoParser,
    isString,
  ),
  hasSsnOrItin: new Mapping("q100_doYou", yesNoParser, isString),
  careSetting: new Mapping("q69_whereDo", stringOrNullParser, isString),
  relatedToSomeChildren: new Mapping("q103_areYou103", yesNoParser, isString),
  relatedToRelationship: new Mapping(
    "q71_pleaseIndicate",
    stringOrNullParser,
    isString,
  ),
  relatedToAllChildren: new Mapping("q104_areYou104", yesNoParser, isString),
  numberOfChildren: new Mapping("q73_howMany", numberOrNullParser, isString),
  childrenUnder2: new Mapping("q74_howMany74", numberOrNullParser, isString),
  cprCertified: new Mapping("q75_areYou75", stringOrNullParser, isString),
  otherAdults: new Mapping("q76_typeA76", jsonParser, isString),
  payTypes: new Mapping("q89_typeA", checkboxesParser(), isString),
  payRate: new Mapping("q77_ifPaid", stringOrNullParser, isString),
  payMonth: new Mapping("q78_pleaseEstimate", numberOrNullParser, isString),
  currentPaySatisfaction: new Mapping(
    "q135_howSatisfied135",
    stringOrNullParser,
    isString,
  ),
  currentExperienceSatisfaction: new Mapping(
    "q136_howSatisfied",
    stringOrNullParser,
    isString,
  ),
  currentExperienceExplanation: new Mapping(
    "q34_pleaseTell",
    stringOrNullParser,
    isString,
  ),
  monthlyRate0To18Months: new Mapping(
    "q167_whatIs167",
    stringOrNullParser,
    isString,
  ),
  monthyRate19To36Months: new Mapping(
    "q168_whatIs168",
    stringOrNullParser,
    isString,
  ),
  acceptedFormsOfPayment: new Mapping(
    "q172_typeA172",
    checkboxesParser(),
    isString,
  ),
  attendanceTracking: new Mapping(
    "q174_whatAttendance",
    checkboxesParser(),
    isString,
  ),
  whenFamiliesPay: new Mapping("q176_whenDo", stringOrNullParser, isString),
  currentBenefits: new Mapping(
    "q181_ffnbenefits",
    arrayCheckboxesParser({
      "Medicaid (Health First Colorado)": "medicaid",
      "Child Health Plan Plus (CHP+)": "chp",
      "Supplemental Nutrition Assistance Program (SNAP)": "snap",
      WIC: "wic",
      "TANF (Colorado Works)": "tanf",
      CCCAP: "cccap",
      "Head Start": "head_start",
      None: "none",
    }),
    isArray,
  ),
  benefitsImpactFollowUp: new Mapping(
    "q183_additionalIncomefollowup",
    yesNoParser,
    isString,
  ),
  selfAttestation: {
    gpqc: new Mapping("q91_generalProvider", tableParser(5), isTable),
    hsce: new Mapping("q116_healthampamp", tableParser(6), isTable),
    ccpr: new Mapping("q117_childCare", tableParser(5), isTable),
    car: new Mapping("q118_childAbuse", tableParser(2), isTable),
  },
  agreements: {
    readForm: new Mapping("q143_typeA143", acceptParser, isString),
    askedQuestions: new Mapping("q144_typeA144", acceptParser, isString),
    acurateAndTruthful: new Mapping("q145_typeA145", acceptParser, isString),
    backgroundCheck: new Mapping("q146_typeA146", acceptParser, isString),
    voluntaryParticipation: new Mapping(
      "q147_typeA147",
      acceptParser,
      isString,
    ),
    termsAndConditions: new Mapping("q150_typeA150", acceptParser, isString),
    privacyPolicy: new Mapping("q152_typeA152", acceptParser, isString),
    tcpa: new Mapping("q148_typeA148", acceptParser, isString),
  },
  timeTracker: new Mapping("q161_time_tracker", stringOrNullParser, isString),
  linkId: new Mapping("q162_link_id", stringOrNullParser, isString),
} as const;

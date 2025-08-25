export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      family_application: {
        Row: {
          add_additional: string | null
          additional_child: string | null
          address_1_additional: string | null
          address_1_primary: string | null
          address_2_additional: string | null
          address_2_primary: string | null
          assets_one_million: string | null
          child_care_length_primary: string | null
          child_care_length_secondary: string | null
          child_current_care_additional: Json | null
          child_current_care_primary: Json | null
          child_dob_primary: string | null
          child_dob_secondary: string | null
          child_first_name_additional: string | null
          child_first_name_primary: string | null
          child_hours_per_week_primary: string | null
          child_hours_per_week_secondary: string | null
          child_language_primary: Json | null
          child_language_secondary: Json | null
          child_last_name_additional: string | null
          child_last_name_primary: string | null
          child_race_ethnicity_primary: Json | null
          child_race_ethnicity_secondary: Json | null
          child_receiving_care_primary: string | null
          child_receiving_care_secondary: string | null
          child_satisfaction_current_care_explanation_primary: string | null
          child_satisfaction_current_care_explanation_secondary: string | null
          child_satisfaction_current_care_primary: string | null
          child_satisfaction_current_care_secondary: string | null
          child_starting_next_month_primary: string | null
          child_starting_next_month_secondary: string | null
          city_additional: string | null
          city_primary: string | null
          created_at: string
          current_benefits: Json | null
          current_benefits_documents: Json | null
          "current_benefits_pre-eligibility": Json | null
          current_benefits_proof: Json | null
          dob_additional: string | null
          dob_primary: string | null
          email_additional: string | null
          email_primary: string | null
          first_name_primary: string | null
          household_size: number | null
          id: number
          income_monthly_yearly: string | null
          income_yearly: number | null
          last_name_additional: string | null
          last_name_primary: string | null
          last_update_date: string | null
          link_id: string | null
          phone_additional: string | null
          phone_primary: string | null
          photo_release: string | null
          preferred_language: string | null
          proof_of_residence: string | null
          race_ethnicity_additional: Json | null
          race_ethnicity_primary: Json | null
          referrer_cap_provider: string | null
          signature: string | null
          state_additional: string | null
          state_primary: string | null
          submission_edit_url: string | null
          submission_ip: string | null
          submission_url: string | null
          submitted_at: string | null
          tc_1: string | null
          tc_2: string | null
          tc_3: string | null
          tc_4: string | null
          tc_5: string | null
          tc_6: string | null
          timer: string | null
          verification_child_age: string | null
          zip_additional: string | null
          zip_primary: number | null
        }
        Insert: {
          add_additional?: string | null
          additional_child?: string | null
          address_1_additional?: string | null
          address_1_primary?: string | null
          address_2_additional?: string | null
          address_2_primary?: string | null
          assets_one_million?: string | null
          child_care_length_primary?: string | null
          child_care_length_secondary?: string | null
          child_current_care_additional?: Json | null
          child_current_care_primary?: Json | null
          child_dob_primary?: string | null
          child_dob_secondary?: string | null
          child_first_name_additional?: string | null
          child_first_name_primary?: string | null
          child_hours_per_week_primary?: string | null
          child_hours_per_week_secondary?: string | null
          child_language_primary?: Json | null
          child_language_secondary?: Json | null
          child_last_name_additional?: string | null
          child_last_name_primary?: string | null
          child_race_ethnicity_primary?: Json | null
          child_race_ethnicity_secondary?: Json | null
          child_receiving_care_primary?: string | null
          child_receiving_care_secondary?: string | null
          child_satisfaction_current_care_explanation_primary?: string | null
          child_satisfaction_current_care_explanation_secondary?: string | null
          child_satisfaction_current_care_primary?: string | null
          child_satisfaction_current_care_secondary?: string | null
          child_starting_next_month_primary?: string | null
          child_starting_next_month_secondary?: string | null
          city_additional?: string | null
          city_primary?: string | null
          created_at?: string
          current_benefits?: Json | null
          current_benefits_documents?: Json | null
          "current_benefits_pre-eligibility"?: Json | null
          current_benefits_proof?: Json | null
          dob_additional?: string | null
          dob_primary?: string | null
          email_additional?: string | null
          email_primary?: string | null
          first_name_primary?: string | null
          household_size?: number | null
          id?: number
          income_monthly_yearly?: string | null
          income_yearly?: number | null
          last_name_additional?: string | null
          last_name_primary?: string | null
          last_update_date?: string | null
          link_id?: string | null
          phone_additional?: string | null
          phone_primary?: string | null
          photo_release?: string | null
          preferred_language?: string | null
          proof_of_residence?: string | null
          race_ethnicity_additional?: Json | null
          race_ethnicity_primary?: Json | null
          referrer_cap_provider?: string | null
          signature?: string | null
          state_additional?: string | null
          state_primary?: string | null
          submission_edit_url?: string | null
          submission_ip?: string | null
          submission_url?: string | null
          submitted_at?: string | null
          tc_1?: string | null
          tc_2?: string | null
          tc_3?: string | null
          tc_4?: string | null
          tc_5?: string | null
          tc_6?: string | null
          timer?: string | null
          verification_child_age?: string | null
          zip_additional?: string | null
          zip_primary?: number | null
        }
        Update: {
          add_additional?: string | null
          additional_child?: string | null
          address_1_additional?: string | null
          address_1_primary?: string | null
          address_2_additional?: string | null
          address_2_primary?: string | null
          assets_one_million?: string | null
          child_care_length_primary?: string | null
          child_care_length_secondary?: string | null
          child_current_care_additional?: Json | null
          child_current_care_primary?: Json | null
          child_dob_primary?: string | null
          child_dob_secondary?: string | null
          child_first_name_additional?: string | null
          child_first_name_primary?: string | null
          child_hours_per_week_primary?: string | null
          child_hours_per_week_secondary?: string | null
          child_language_primary?: Json | null
          child_language_secondary?: Json | null
          child_last_name_additional?: string | null
          child_last_name_primary?: string | null
          child_race_ethnicity_primary?: Json | null
          child_race_ethnicity_secondary?: Json | null
          child_receiving_care_primary?: string | null
          child_receiving_care_secondary?: string | null
          child_satisfaction_current_care_explanation_primary?: string | null
          child_satisfaction_current_care_explanation_secondary?: string | null
          child_satisfaction_current_care_primary?: string | null
          child_satisfaction_current_care_secondary?: string | null
          child_starting_next_month_primary?: string | null
          child_starting_next_month_secondary?: string | null
          city_additional?: string | null
          city_primary?: string | null
          created_at?: string
          current_benefits?: Json | null
          current_benefits_documents?: Json | null
          "current_benefits_pre-eligibility"?: Json | null
          current_benefits_proof?: Json | null
          dob_additional?: string | null
          dob_primary?: string | null
          email_additional?: string | null
          email_primary?: string | null
          first_name_primary?: string | null
          household_size?: number | null
          id?: number
          income_monthly_yearly?: string | null
          income_yearly?: number | null
          last_name_additional?: string | null
          last_name_primary?: string | null
          last_update_date?: string | null
          link_id?: string | null
          phone_additional?: string | null
          phone_primary?: string | null
          photo_release?: string | null
          preferred_language?: string | null
          proof_of_residence?: string | null
          race_ethnicity_additional?: Json | null
          race_ethnicity_primary?: Json | null
          referrer_cap_provider?: string | null
          signature?: string | null
          state_additional?: string | null
          state_primary?: string | null
          submission_edit_url?: string | null
          submission_ip?: string | null
          submission_url?: string | null
          submitted_at?: string | null
          tc_1?: string | null
          tc_2?: string | null
          tc_3?: string | null
          tc_4?: string | null
          tc_5?: string | null
          tc_6?: string | null
          timer?: string | null
          verification_child_age?: string | null
          zip_additional?: string | null
          zip_primary?: number | null
        }
        Relationships: []
      }
      provider_application: {
        Row: {
          accepted_forms_of_payment: Json | null
          address_1: string | null
          address_2: string | null
          attendance_tracking_system: Json | null
          car_failure_to_report: string | null
          car_immediately_report: string | null
          care_setting: string | null
          ccpr_activities: string | null
          ccpr_materials_and_equipment: string | null
          ccpr_meals: string | null
          ccpr_medications: string | null
          ccpr_transportation: string | null
          children_under_2: number | null
          city: string | null
          cpr_certified: string | null
          cpr_upload: string | null
          created_at: string
          email: string | null
          first_name: string | null
          gpqc_capabilities: string | null
          gpqc_children_removed: string | null
          gpqc_experienced: string | null
          gpqc_parental_access: string | null
          gpqc_punishment: string | null
          hsce_communicable_diseases: string | null
          hsce_disasters: string | null
          hsce_emergencies: string | null
          hsce_play_areas: string | null
          hsce_protect_from_dangers: string | null
          hsce_working_detectors: string | null
          id: number
          last_name: string | null
          last_update_date: string | null
          license_address_1: string | null
          license_address_2: string | null
          license_city: string | null
          license_name: string | null
          license_number: string | null
          license_state: string | null
          license_type: string | null
          license_zip: string | null
          licensed: string | null
          link_id: string | null
          "monthly_rate_0-18": string | null
          "monthly_rate_19-36": string | null
          number_of_children: number | null
          other_adults: Json | null
          pay_per_month: number | null
          pay_rate: string | null
          pay_types: Json | null
          phone: string | null
          preferred_language: string | null
          related_to_all_children: string | null
          related_to_relationship: string | null
          related_to_some_children: boolean | null
          satisfaction_current_experience: string | null
          satisfaction_current_experience_explanation: string | null
          satisfaction_current_pay: string | null
          signature: string | null
          ssn_or_itin: string | null
          state: string | null
          submission_date: string | null
          submission_edit_url: string | null
          submission_ip: string | null
          submission_url: string | null
          tc_accurate_and_truthful: string | null
          tc_asked_questions: string | null
          tc_background_check: string | null
          tc_privacy_policy: string | null
          tc_read_form: string | null
          tc_tcpa: string | null
          tc_voluntary_participation: string | null
          time_tracker: string | null
          typeA131: string | null
          w9: string | null
          when_families_pay: string | null
          zip: string | null
        }
        Insert: {
          accepted_forms_of_payment?: Json | null
          address_1?: string | null
          address_2?: string | null
          attendance_tracking_system?: Json | null
          car_failure_to_report?: string | null
          car_immediately_report?: string | null
          care_setting?: string | null
          ccpr_activities?: string | null
          ccpr_materials_and_equipment?: string | null
          ccpr_meals?: string | null
          ccpr_medications?: string | null
          ccpr_transportation?: string | null
          children_under_2?: number | null
          city?: string | null
          cpr_certified?: string | null
          cpr_upload?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          gpqc_capabilities?: string | null
          gpqc_children_removed?: string | null
          gpqc_experienced?: string | null
          gpqc_parental_access?: string | null
          gpqc_punishment?: string | null
          hsce_communicable_diseases?: string | null
          hsce_disasters?: string | null
          hsce_emergencies?: string | null
          hsce_play_areas?: string | null
          hsce_protect_from_dangers?: string | null
          hsce_working_detectors?: string | null
          id?: number
          last_name?: string | null
          last_update_date?: string | null
          license_address_1?: string | null
          license_address_2?: string | null
          license_city?: string | null
          license_name?: string | null
          license_number?: string | null
          license_state?: string | null
          license_type?: string | null
          license_zip?: string | null
          licensed?: string | null
          link_id?: string | null
          "monthly_rate_0-18"?: string | null
          "monthly_rate_19-36"?: string | null
          number_of_children?: number | null
          other_adults?: Json | null
          pay_per_month?: number | null
          pay_rate?: string | null
          pay_types?: Json | null
          phone?: string | null
          preferred_language?: string | null
          related_to_all_children?: string | null
          related_to_relationship?: string | null
          related_to_some_children?: boolean | null
          satisfaction_current_experience?: string | null
          satisfaction_current_experience_explanation?: string | null
          satisfaction_current_pay?: string | null
          signature?: string | null
          ssn_or_itin?: string | null
          state?: string | null
          submission_date?: string | null
          submission_edit_url?: string | null
          submission_ip?: string | null
          submission_url?: string | null
          tc_accurate_and_truthful?: string | null
          tc_asked_questions?: string | null
          tc_background_check?: string | null
          tc_privacy_policy?: string | null
          tc_read_form?: string | null
          tc_tcpa?: string | null
          tc_voluntary_participation?: string | null
          time_tracker?: string | null
          typeA131?: string | null
          w9?: string | null
          when_families_pay?: string | null
          zip?: string | null
        }
        Update: {
          accepted_forms_of_payment?: Json | null
          address_1?: string | null
          address_2?: string | null
          attendance_tracking_system?: Json | null
          car_failure_to_report?: string | null
          car_immediately_report?: string | null
          care_setting?: string | null
          ccpr_activities?: string | null
          ccpr_materials_and_equipment?: string | null
          ccpr_meals?: string | null
          ccpr_medications?: string | null
          ccpr_transportation?: string | null
          children_under_2?: number | null
          city?: string | null
          cpr_certified?: string | null
          cpr_upload?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          gpqc_capabilities?: string | null
          gpqc_children_removed?: string | null
          gpqc_experienced?: string | null
          gpqc_parental_access?: string | null
          gpqc_punishment?: string | null
          hsce_communicable_diseases?: string | null
          hsce_disasters?: string | null
          hsce_emergencies?: string | null
          hsce_play_areas?: string | null
          hsce_protect_from_dangers?: string | null
          hsce_working_detectors?: string | null
          id?: number
          last_name?: string | null
          last_update_date?: string | null
          license_address_1?: string | null
          license_address_2?: string | null
          license_city?: string | null
          license_name?: string | null
          license_number?: string | null
          license_state?: string | null
          license_type?: string | null
          license_zip?: string | null
          licensed?: string | null
          link_id?: string | null
          "monthly_rate_0-18"?: string | null
          "monthly_rate_19-36"?: string | null
          number_of_children?: number | null
          other_adults?: Json | null
          pay_per_month?: number | null
          pay_rate?: string | null
          pay_types?: Json | null
          phone?: string | null
          preferred_language?: string | null
          related_to_all_children?: string | null
          related_to_relationship?: string | null
          related_to_some_children?: boolean | null
          satisfaction_current_experience?: string | null
          satisfaction_current_experience_explanation?: string | null
          satisfaction_current_pay?: string | null
          signature?: string | null
          ssn_or_itin?: string | null
          state?: string | null
          submission_date?: string | null
          submission_edit_url?: string | null
          submission_ip?: string | null
          submission_url?: string | null
          tc_accurate_and_truthful?: string | null
          tc_asked_questions?: string | null
          tc_background_check?: string | null
          tc_privacy_policy?: string | null
          tc_read_form?: string | null
          tc_tcpa?: string | null
          tc_voluntary_participation?: string | null
          time_tracker?: string | null
          typeA131?: string | null
          w9?: string | null
          when_families_pay?: string | null
          zip?: string | null
        }
        Relationships: []
      }
      testing: {
        Row: {
          created_at: string
          first_name: string
          id: number
          last_name: string
        }
        Insert: {
          created_at?: string
          first_name: string
          id?: number
          last_name: string
        }
        Update: {
          created_at?: string
          first_name?: string
          id?: number
          last_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

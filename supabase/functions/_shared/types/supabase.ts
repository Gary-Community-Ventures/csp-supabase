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
      alembic_version: {
        Row: {
          version_num: string
        }
        Insert: {
          version_num: string
        }
        Update: {
          version_num?: string
        }
        Relationships: []
      }
      allocated_care_day: {
        Row: {
          amount_cents: number | null
          care_month_allocation_id: number | null
          created_at: string
          date: string | null
          deleted_at: string | null
          id: number
          last_submitted_at: string | null
          locked_date: string | null
          payment_distribution_requested: boolean | null
          provider_google_sheets_id: number | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          amount_cents?: number | null
          care_month_allocation_id?: number | null
          created_at?: string
          date?: string | null
          deleted_at?: string | null
          id?: number
          last_submitted_at?: string | null
          locked_date?: string | null
          payment_distribution_requested?: boolean | null
          provider_google_sheets_id?: number | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          amount_cents?: number | null
          care_month_allocation_id?: number | null
          created_at?: string
          date?: string | null
          deleted_at?: string | null
          id?: number
          last_submitted_at?: string | null
          locked_date?: string | null
          payment_distribution_requested?: boolean | null
          provider_google_sheets_id?: number | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "allocated_care_day_care_month_allocation_id_fkey"
            columns: ["care_month_allocation_id"]
            isOneToOne: false
            referencedRelation: "monthly_allocation"
            referencedColumns: ["id"]
          },
        ]
      }
      cap_family_application: {
        Row: {
          add_additional: boolean | null
          additional_child: boolean | null
          address_1_additional: string | null
          address_1_primary: string | null
          address_2_additional: string | null
          address_2_primary: string | null
          approved: boolean | null
          approved_at: string | null
          assets_one_million: boolean | null
          child_care_length_additional: string | null
          child_care_length_primary: string | null
          child_current_care_additional: Json | null
          child_current_care_primary: Json | null
          child_current_programs_additional: Json | null
          child_current_programs_primary: Json | null
          child_disabled_additional: boolean | null
          child_disabled_primary: boolean | null
          child_dob_additional: string | null
          child_dob_primary: string | null
          child_first_name_additional: string | null
          child_first_name_primary: string | null
          child_hours_per_week_additional: string | null
          child_hours_per_week_primary: string | null
          child_language_additional: Json | null
          child_language_primary: Json | null
          child_last_name_additional: string | null
          child_last_name_primary: string | null
          child_provider_name_additional: string | null
          child_provider_name_primary: string | null
          child_race_ethnicity_additional: Json | null
          child_race_ethnicity_primary: Json | null
          child_receiving_care_additional: boolean | null
          child_receiving_care_primary: boolean | null
          child_satisfaction_current_care_additional: string | null
          child_satisfaction_current_care_explanation_additional: string | null
          child_satisfaction_current_care_explanation_primary: string | null
          child_satisfaction_current_care_primary: string | null
          child_starting_next_month_additional: boolean | null
          child_starting_next_month_primary: boolean | null
          city_additional: string | null
          city_primary: string | null
          clerk_user_id: string | null
          county_primary: string | null
          created_at: string
          current_benefits_preeligibility: Json | null
          current_benefits_proof: string[] | null
          current_benefits_proof_files: Json | null
          current_childcare_benefits: Json | null
          dob_additional: string | null
          dob_primary: string | null
          email_additional: string | null
          email_primary: string | null
          ffn_attestation: string | null
          first_name_additional: string | null
          first_name_primary: string | null
          household_size: number | null
          id: number
          income_monthly_yearly: string | null
          income_yearly: number | null
          is_colorado_resident: boolean | null
          is_test: boolean | null
          last_name_additional: string | null
          last_name_primary: string | null
          last_update_date: string | null
          latitude_primary: number | null
          link_id: string | null
          longitude_primary: number | null
          other_income_earners: Json | null
          other_parent_email: string | null
          other_parent_first_name: string | null
          other_parent_last_name: string | null
          other_parent_phone: string | null
          phone_additional: string | null
          phone_primary: string | null
          photo_release: boolean | null
          preferred_language: string | null
          primary_has_income: boolean | null
          proof_of_income: string[] | null
          proof_of_income_files: Json | null
          proof_of_residence: string[] | null
          proof_of_residence_files: Json | null
          race_ethnicity_additional: Json | null
          race_ethnicity_primary: Json | null
          referrer_cap_provider: string | null
          signature: string | null
          spouse_has_income: boolean | null
          spouse_proof_of_income_files: Json | null
          state_additional: string | null
          state_primary: string | null
          submission_edit_url: string | null
          submission_id: string | null
          submission_ip: string | null
          submission_url: string | null
          submitted_at: string | null
          tc_change_providers: boolean | null
          tc_dependent_on_CAP_approval: boolean | null
          tc_income_verification: boolean | null
          tc_privacy_policy: boolean | null
          tc_responsible_for_finding_care: boolean | null
          tc_TCPA: boolean | null
          tc_terms_and_conditions: boolean | null
          timer: string | null
          truv_id_additional: string | null
          truv_id_primary: string | null
          truv_ids: string[] | null
          updated_at: string | null
          verification_child_age: string[] | null
          verification_child_age_files: Json | null
          waitlist: boolean | null
          why_need_child_care: Json | null
          zip_additional: string | null
          zip_primary: string | null
        }
        Insert: {
          add_additional?: boolean | null
          additional_child?: boolean | null
          address_1_additional?: string | null
          address_1_primary?: string | null
          address_2_additional?: string | null
          address_2_primary?: string | null
          approved?: boolean | null
          approved_at?: string | null
          assets_one_million?: boolean | null
          child_care_length_additional?: string | null
          child_care_length_primary?: string | null
          child_current_care_additional?: Json | null
          child_current_care_primary?: Json | null
          child_current_programs_additional?: Json | null
          child_current_programs_primary?: Json | null
          child_disabled_additional?: boolean | null
          child_disabled_primary?: boolean | null
          child_dob_additional?: string | null
          child_dob_primary?: string | null
          child_first_name_additional?: string | null
          child_first_name_primary?: string | null
          child_hours_per_week_additional?: string | null
          child_hours_per_week_primary?: string | null
          child_language_additional?: Json | null
          child_language_primary?: Json | null
          child_last_name_additional?: string | null
          child_last_name_primary?: string | null
          child_provider_name_additional?: string | null
          child_provider_name_primary?: string | null
          child_race_ethnicity_additional?: Json | null
          child_race_ethnicity_primary?: Json | null
          child_receiving_care_additional?: boolean | null
          child_receiving_care_primary?: boolean | null
          child_satisfaction_current_care_additional?: string | null
          child_satisfaction_current_care_explanation_additional?: string | null
          child_satisfaction_current_care_explanation_primary?: string | null
          child_satisfaction_current_care_primary?: string | null
          child_starting_next_month_additional?: boolean | null
          child_starting_next_month_primary?: boolean | null
          city_additional?: string | null
          city_primary?: string | null
          clerk_user_id?: string | null
          county_primary?: string | null
          created_at?: string
          current_benefits_preeligibility?: Json | null
          current_benefits_proof?: string[] | null
          current_benefits_proof_files?: Json | null
          current_childcare_benefits?: Json | null
          dob_additional?: string | null
          dob_primary?: string | null
          email_additional?: string | null
          email_primary?: string | null
          ffn_attestation?: string | null
          first_name_additional?: string | null
          first_name_primary?: string | null
          household_size?: number | null
          id?: number
          income_monthly_yearly?: string | null
          income_yearly?: number | null
          is_colorado_resident?: boolean | null
          is_test?: boolean | null
          last_name_additional?: string | null
          last_name_primary?: string | null
          last_update_date?: string | null
          latitude_primary?: number | null
          link_id?: string | null
          longitude_primary?: number | null
          other_income_earners?: Json | null
          other_parent_email?: string | null
          other_parent_first_name?: string | null
          other_parent_last_name?: string | null
          other_parent_phone?: string | null
          phone_additional?: string | null
          phone_primary?: string | null
          photo_release?: boolean | null
          preferred_language?: string | null
          primary_has_income?: boolean | null
          proof_of_income?: string[] | null
          proof_of_income_files?: Json | null
          proof_of_residence?: string[] | null
          proof_of_residence_files?: Json | null
          race_ethnicity_additional?: Json | null
          race_ethnicity_primary?: Json | null
          referrer_cap_provider?: string | null
          signature?: string | null
          spouse_has_income?: boolean | null
          spouse_proof_of_income_files?: Json | null
          state_additional?: string | null
          state_primary?: string | null
          submission_edit_url?: string | null
          submission_id?: string | null
          submission_ip?: string | null
          submission_url?: string | null
          submitted_at?: string | null
          tc_change_providers?: boolean | null
          tc_dependent_on_CAP_approval?: boolean | null
          tc_income_verification?: boolean | null
          tc_privacy_policy?: boolean | null
          tc_responsible_for_finding_care?: boolean | null
          tc_TCPA?: boolean | null
          tc_terms_and_conditions?: boolean | null
          timer?: string | null
          truv_id_additional?: string | null
          truv_id_primary?: string | null
          truv_ids?: string[] | null
          updated_at?: string | null
          verification_child_age?: string[] | null
          verification_child_age_files?: Json | null
          waitlist?: boolean | null
          why_need_child_care?: Json | null
          zip_additional?: string | null
          zip_primary?: string | null
        }
        Update: {
          add_additional?: boolean | null
          additional_child?: boolean | null
          address_1_additional?: string | null
          address_1_primary?: string | null
          address_2_additional?: string | null
          address_2_primary?: string | null
          approved?: boolean | null
          approved_at?: string | null
          assets_one_million?: boolean | null
          child_care_length_additional?: string | null
          child_care_length_primary?: string | null
          child_current_care_additional?: Json | null
          child_current_care_primary?: Json | null
          child_current_programs_additional?: Json | null
          child_current_programs_primary?: Json | null
          child_disabled_additional?: boolean | null
          child_disabled_primary?: boolean | null
          child_dob_additional?: string | null
          child_dob_primary?: string | null
          child_first_name_additional?: string | null
          child_first_name_primary?: string | null
          child_hours_per_week_additional?: string | null
          child_hours_per_week_primary?: string | null
          child_language_additional?: Json | null
          child_language_primary?: Json | null
          child_last_name_additional?: string | null
          child_last_name_primary?: string | null
          child_provider_name_additional?: string | null
          child_provider_name_primary?: string | null
          child_race_ethnicity_additional?: Json | null
          child_race_ethnicity_primary?: Json | null
          child_receiving_care_additional?: boolean | null
          child_receiving_care_primary?: boolean | null
          child_satisfaction_current_care_additional?: string | null
          child_satisfaction_current_care_explanation_additional?: string | null
          child_satisfaction_current_care_explanation_primary?: string | null
          child_satisfaction_current_care_primary?: string | null
          child_starting_next_month_additional?: boolean | null
          child_starting_next_month_primary?: boolean | null
          city_additional?: string | null
          city_primary?: string | null
          clerk_user_id?: string | null
          county_primary?: string | null
          created_at?: string
          current_benefits_preeligibility?: Json | null
          current_benefits_proof?: string[] | null
          current_benefits_proof_files?: Json | null
          current_childcare_benefits?: Json | null
          dob_additional?: string | null
          dob_primary?: string | null
          email_additional?: string | null
          email_primary?: string | null
          ffn_attestation?: string | null
          first_name_additional?: string | null
          first_name_primary?: string | null
          household_size?: number | null
          id?: number
          income_monthly_yearly?: string | null
          income_yearly?: number | null
          is_colorado_resident?: boolean | null
          is_test?: boolean | null
          last_name_additional?: string | null
          last_name_primary?: string | null
          last_update_date?: string | null
          latitude_primary?: number | null
          link_id?: string | null
          longitude_primary?: number | null
          other_income_earners?: Json | null
          other_parent_email?: string | null
          other_parent_first_name?: string | null
          other_parent_last_name?: string | null
          other_parent_phone?: string | null
          phone_additional?: string | null
          phone_primary?: string | null
          photo_release?: boolean | null
          preferred_language?: string | null
          primary_has_income?: boolean | null
          proof_of_income?: string[] | null
          proof_of_income_files?: Json | null
          proof_of_residence?: string[] | null
          proof_of_residence_files?: Json | null
          race_ethnicity_additional?: Json | null
          race_ethnicity_primary?: Json | null
          referrer_cap_provider?: string | null
          signature?: string | null
          spouse_has_income?: boolean | null
          spouse_proof_of_income_files?: Json | null
          state_additional?: string | null
          state_primary?: string | null
          submission_edit_url?: string | null
          submission_id?: string | null
          submission_ip?: string | null
          submission_url?: string | null
          submitted_at?: string | null
          tc_change_providers?: boolean | null
          tc_dependent_on_CAP_approval?: boolean | null
          tc_income_verification?: boolean | null
          tc_privacy_policy?: boolean | null
          tc_responsible_for_finding_care?: boolean | null
          tc_TCPA?: boolean | null
          tc_terms_and_conditions?: boolean | null
          timer?: string | null
          truv_id_additional?: string | null
          truv_id_primary?: string | null
          truv_ids?: string[] | null
          updated_at?: string | null
          verification_child_age?: string[] | null
          verification_child_age_files?: Json | null
          waitlist?: boolean | null
          why_need_child_care?: Json | null
          zip_additional?: string | null
          zip_primary?: string | null
        }
        Relationships: []
      }
      cap_provider_application: {
        Row: {
          accepted_forms_of_payment: Json | null
          address_1: string | null
          address_2: string | null
          address_county: string | null
          address_latitude: number | null
          address_longitude: number | null
          application_submitted_at: string | null
          attendance_tracking_system: Json | null
          attestation_signature: string | null
          benefits_impact_follow_up: boolean | null
          car_failure_to_report: string | null
          car_immediately_report: string | null
          care_location_address_1: string | null
          care_location_address_2: string | null
          care_location_city: string | null
          care_location_county: string | null
          care_location_latitude: number | null
          care_location_longitude: number | null
          care_location_state: string | null
          care_location_zip: string | null
          care_setting: string | null
          cares_for_disabled: boolean | null
          ccpr_activities: string | null
          ccpr_materials_and_equipment: string | null
          ccpr_meals: string | null
          ccpr_medications: string | null
          ccpr_transportation: string | null
          children_under_2: number | null
          city: string | null
          clerk_user_id: string | null
          cpr_certified: string | null
          cpr_upload: string[] | null
          cpr_upload_files: Json | null
          created_at: string
          current_benefits: Json | null
          email: string | null
          first_name: string | null
          gpqc_capabilities: string | null
          gpqc_children_removed: string | null
          gpqc_experienced: string | null
          gpqc_parental_access: string | null
          gpqc_punishment: string | null
          has_other_adults: boolean | null
          hsce_communicable_diseases: string | null
          hsce_disasters: string | null
          hsce_emergencies: string | null
          hsce_play_areas: string | null
          hsce_protect_from_dangers: string | null
          hsce_working_detectors: string | null
          id: number
          id_upload: Json | null
          id_upload_files: Json | null
          is_test: boolean | null
          last_name: string | null
          last_update_date: string | null
          license_name: string | null
          license_number: string | null
          license_type: string | null
          licensed: boolean | null
          link_id: string | null
          monthly_rate_0_18: string | null
          monthly_rate_19_36: string | null
          multiple_families: boolean | null
          number_of_children: number | null
          other_adults: Json | null
          pay_per_month: number | null
          pay_rate: string | null
          pay_rate_type: string | null
          pay_types: Json | null
          phone: string | null
          preferred_language: string | null
          referrer_cap_family: string | null
          related_to_all_children: boolean | null
          related_to_relationship: string | null
          related_to_some_children: boolean | null
          satisfaction_current_experience: string | null
          satisfaction_current_experience_explanation: string | null
          satisfaction_current_pay: string | null
          signature: string | null
          ssn_or_itin: boolean | null
          state: string | null
          submission_edit_url: string | null
          submission_id: string | null
          submission_ip: string | null
          submission_url: string | null
          tc_accurate_and_truthful: boolean | null
          tc_asked_questions: boolean | null
          tc_background_check: boolean | null
          tc_privacy_policy: boolean | null
          tc_read_form: boolean | null
          tc_tcpa: boolean | null
          tc_terms_and_conditions: boolean | null
          tc_voluntary_participation: boolean | null
          time_tracker: string | null
          updated_at: string | null
          w9: string[] | null
          w9_files: Json | null
          when_families_pay: string | null
          zip: string | null
        }
        Insert: {
          accepted_forms_of_payment?: Json | null
          address_1?: string | null
          address_2?: string | null
          address_county?: string | null
          address_latitude?: number | null
          address_longitude?: number | null
          application_submitted_at?: string | null
          attendance_tracking_system?: Json | null
          attestation_signature?: string | null
          benefits_impact_follow_up?: boolean | null
          car_failure_to_report?: string | null
          car_immediately_report?: string | null
          care_location_address_1?: string | null
          care_location_address_2?: string | null
          care_location_city?: string | null
          care_location_county?: string | null
          care_location_latitude?: number | null
          care_location_longitude?: number | null
          care_location_state?: string | null
          care_location_zip?: string | null
          care_setting?: string | null
          cares_for_disabled?: boolean | null
          ccpr_activities?: string | null
          ccpr_materials_and_equipment?: string | null
          ccpr_meals?: string | null
          ccpr_medications?: string | null
          ccpr_transportation?: string | null
          children_under_2?: number | null
          city?: string | null
          clerk_user_id?: string | null
          cpr_certified?: string | null
          cpr_upload?: string[] | null
          cpr_upload_files?: Json | null
          created_at?: string
          current_benefits?: Json | null
          email?: string | null
          first_name?: string | null
          gpqc_capabilities?: string | null
          gpqc_children_removed?: string | null
          gpqc_experienced?: string | null
          gpqc_parental_access?: string | null
          gpqc_punishment?: string | null
          has_other_adults?: boolean | null
          hsce_communicable_diseases?: string | null
          hsce_disasters?: string | null
          hsce_emergencies?: string | null
          hsce_play_areas?: string | null
          hsce_protect_from_dangers?: string | null
          hsce_working_detectors?: string | null
          id?: number
          id_upload?: Json | null
          id_upload_files?: Json | null
          is_test?: boolean | null
          last_name?: string | null
          last_update_date?: string | null
          license_name?: string | null
          license_number?: string | null
          license_type?: string | null
          licensed?: boolean | null
          link_id?: string | null
          monthly_rate_0_18?: string | null
          monthly_rate_19_36?: string | null
          multiple_families?: boolean | null
          number_of_children?: number | null
          other_adults?: Json | null
          pay_per_month?: number | null
          pay_rate?: string | null
          pay_rate_type?: string | null
          pay_types?: Json | null
          phone?: string | null
          preferred_language?: string | null
          referrer_cap_family?: string | null
          related_to_all_children?: boolean | null
          related_to_relationship?: string | null
          related_to_some_children?: boolean | null
          satisfaction_current_experience?: string | null
          satisfaction_current_experience_explanation?: string | null
          satisfaction_current_pay?: string | null
          signature?: string | null
          ssn_or_itin?: boolean | null
          state?: string | null
          submission_edit_url?: string | null
          submission_id?: string | null
          submission_ip?: string | null
          submission_url?: string | null
          tc_accurate_and_truthful?: boolean | null
          tc_asked_questions?: boolean | null
          tc_background_check?: boolean | null
          tc_privacy_policy?: boolean | null
          tc_read_form?: boolean | null
          tc_tcpa?: boolean | null
          tc_terms_and_conditions?: boolean | null
          tc_voluntary_participation?: boolean | null
          time_tracker?: string | null
          updated_at?: string | null
          w9?: string[] | null
          w9_files?: Json | null
          when_families_pay?: string | null
          zip?: string | null
        }
        Update: {
          accepted_forms_of_payment?: Json | null
          address_1?: string | null
          address_2?: string | null
          address_county?: string | null
          address_latitude?: number | null
          address_longitude?: number | null
          application_submitted_at?: string | null
          attendance_tracking_system?: Json | null
          attestation_signature?: string | null
          benefits_impact_follow_up?: boolean | null
          car_failure_to_report?: string | null
          car_immediately_report?: string | null
          care_location_address_1?: string | null
          care_location_address_2?: string | null
          care_location_city?: string | null
          care_location_county?: string | null
          care_location_latitude?: number | null
          care_location_longitude?: number | null
          care_location_state?: string | null
          care_location_zip?: string | null
          care_setting?: string | null
          cares_for_disabled?: boolean | null
          ccpr_activities?: string | null
          ccpr_materials_and_equipment?: string | null
          ccpr_meals?: string | null
          ccpr_medications?: string | null
          ccpr_transportation?: string | null
          children_under_2?: number | null
          city?: string | null
          clerk_user_id?: string | null
          cpr_certified?: string | null
          cpr_upload?: string[] | null
          cpr_upload_files?: Json | null
          created_at?: string
          current_benefits?: Json | null
          email?: string | null
          first_name?: string | null
          gpqc_capabilities?: string | null
          gpqc_children_removed?: string | null
          gpqc_experienced?: string | null
          gpqc_parental_access?: string | null
          gpqc_punishment?: string | null
          has_other_adults?: boolean | null
          hsce_communicable_diseases?: string | null
          hsce_disasters?: string | null
          hsce_emergencies?: string | null
          hsce_play_areas?: string | null
          hsce_protect_from_dangers?: string | null
          hsce_working_detectors?: string | null
          id?: number
          id_upload?: Json | null
          id_upload_files?: Json | null
          is_test?: boolean | null
          last_name?: string | null
          last_update_date?: string | null
          license_name?: string | null
          license_number?: string | null
          license_type?: string | null
          licensed?: boolean | null
          link_id?: string | null
          monthly_rate_0_18?: string | null
          monthly_rate_19_36?: string | null
          multiple_families?: boolean | null
          number_of_children?: number | null
          other_adults?: Json | null
          pay_per_month?: number | null
          pay_rate?: string | null
          pay_rate_type?: string | null
          pay_types?: Json | null
          phone?: string | null
          preferred_language?: string | null
          referrer_cap_family?: string | null
          related_to_all_children?: boolean | null
          related_to_relationship?: string | null
          related_to_some_children?: boolean | null
          satisfaction_current_experience?: string | null
          satisfaction_current_experience_explanation?: string | null
          satisfaction_current_pay?: string | null
          signature?: string | null
          ssn_or_itin?: boolean | null
          state?: string | null
          submission_edit_url?: string | null
          submission_id?: string | null
          submission_ip?: string | null
          submission_url?: string | null
          tc_accurate_and_truthful?: boolean | null
          tc_asked_questions?: boolean | null
          tc_background_check?: boolean | null
          tc_privacy_policy?: boolean | null
          tc_read_form?: boolean | null
          tc_tcpa?: boolean | null
          tc_terms_and_conditions?: boolean | null
          tc_voluntary_participation?: boolean | null
          time_tracker?: string | null
          updated_at?: string | null
          w9?: string[] | null
          w9_files?: Json | null
          when_families_pay?: string | null
          zip?: string | null
        }
        Relationships: []
      }
      child: {
        Row: {
          age_verified_at: string | null
          care_hours_per_week: string | null
          child_index: number | null
          created_at: string
          current_care: Json | null
          current_childcare_programs: Json | null
          dob: string | null
          family_id: number | null
          first_name: string | null
          first_name_norm: string | null
          guardian_name: string | null
          id: number
          is_test: boolean | null
          last_name: string | null
          last_name_norm: string | null
          middle_name: string | null
          monthly_allocation: number
          notes: string | null
          payment_enabled: boolean
          preferred_language: string | null
          prorated_allocation: number
          provider_name: string | null
          race_ethnicity: Json | null
          status: Database["public"]["Enums"]["Status"]
          waitlist: boolean | null
          wishlist: boolean | null
        }
        Insert: {
          age_verified_at?: string | null
          care_hours_per_week?: string | null
          child_index?: number | null
          created_at?: string
          current_care?: Json | null
          current_childcare_programs?: Json | null
          dob?: string | null
          family_id?: number | null
          first_name?: string | null
          first_name_norm?: string | null
          guardian_name?: string | null
          id?: number
          is_test?: boolean | null
          last_name?: string | null
          last_name_norm?: string | null
          middle_name?: string | null
          monthly_allocation?: number
          notes?: string | null
          payment_enabled?: boolean
          preferred_language?: string | null
          prorated_allocation?: number
          provider_name?: string | null
          race_ethnicity?: Json | null
          status?: Database["public"]["Enums"]["Status"]
          waitlist?: boolean | null
          wishlist?: boolean | null
        }
        Update: {
          age_verified_at?: string | null
          care_hours_per_week?: string | null
          child_index?: number | null
          created_at?: string
          current_care?: Json | null
          current_childcare_programs?: Json | null
          dob?: string | null
          family_id?: number | null
          first_name?: string | null
          first_name_norm?: string | null
          guardian_name?: string | null
          id?: number
          is_test?: boolean | null
          last_name?: string | null
          last_name_norm?: string | null
          middle_name?: string | null
          monthly_allocation?: number
          notes?: string | null
          payment_enabled?: boolean
          preferred_language?: string | null
          prorated_allocation?: number
          provider_name?: string | null
          race_ethnicity?: Json | null
          status?: Database["public"]["Enums"]["Status"]
          waitlist?: boolean | null
          wishlist?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "child_family_id_fkey"
            columns: ["family_id"]
            isOneToOne: false
            referencedRelation: "family"
            referencedColumns: ["id"]
          },
        ]
      }
      child_approval: {
        Row: {
          address_1: string | null
          address_2: string | null
          approved_at: string | null
          assets_one_million: boolean | null
          child: string | null
          child_age: number | null
          child_age_proof: string[] | null
          child_age_proof_verified_at: string | null
          child_age_qualified: boolean | null
          child_care_length: string | null
          child_care_length_qualified: boolean | null
          child_dob: string | null
          child_hours: string | null
          child_id: number | null
          city: string | null
          created_at: string
          current_benefits_preeligibility: Json | null
          current_benefits_preeligibility_proof: string[] | null
          current_benefits_preeligibility_proof_verified_at: string | null
          current_benefits_preeligibility_qualified: boolean | null
          dob: string | null
          documents: string[] | null
          email: string | null
          enterprise_zone_type: string | null
          fpl_350_yearly_2025: number | null
          guardian_id: number | null
          guardian_name: string | null
          household_size: number | null
          id: number
          income_qualified: boolean | null
          income_yearly: number | null
          is_test: boolean | null
          medicaid_verified_at: string | null
          no_current_childcare_benefits: Json | null
          no_current_childcare_benefits_qualified: boolean | null
          no_current_childcare_benefits_verified_at: string | null
          not_eligible_at: string | null
          notes: string | null
          onboarding_call_at: string | null
          other_income_earners: Json | null
          owner: string | null
          phone: string | null
          preferred_language: string | null
          proof_of_income: string[] | null
          proof_of_income_verified: boolean | null
          proof_of_income_verified_at: string | null
          proof_of_residence: string[] | null
          proof_of_residence_verified: boolean | null
          proof_of_residence_verified_at: string | null
          ready_for_payment: boolean | null
          reveiwed_at: string | null
          ruca_area_type: string | null
          signature: string | null
          snap_verified_at: string | null
          spouse_has_income: boolean | null
          state: string | null
          state_resident_qualified: boolean | null
          status: Database["public"]["Enums"]["Status"] | null
          submission_id: string | null
          submission_url: string | null
          submitted_at: string | null
          tanf_verified_at: string | null
          truv_verified: boolean | null
          truv_verified_at: string | null
          uses_multiple_providers: boolean | null
          waitlist: boolean | null
          why_need_child_care: Json | null
          wic_verified_at: string | null
          zip: string | null
        }
        Insert: {
          address_1?: string | null
          address_2?: string | null
          approved_at?: string | null
          assets_one_million?: boolean | null
          child?: string | null
          child_age?: number | null
          child_age_proof?: string[] | null
          child_age_proof_verified_at?: string | null
          child_age_qualified?: boolean | null
          child_care_length?: string | null
          child_care_length_qualified?: boolean | null
          child_dob?: string | null
          child_hours?: string | null
          child_id?: number | null
          city?: string | null
          created_at?: string
          current_benefits_preeligibility?: Json | null
          current_benefits_preeligibility_proof?: string[] | null
          current_benefits_preeligibility_proof_verified_at?: string | null
          current_benefits_preeligibility_qualified?: boolean | null
          dob?: string | null
          documents?: string[] | null
          email?: string | null
          enterprise_zone_type?: string | null
          fpl_350_yearly_2025?: number | null
          guardian_id?: number | null
          guardian_name?: string | null
          household_size?: number | null
          id?: number
          income_qualified?: boolean | null
          income_yearly?: number | null
          is_test?: boolean | null
          medicaid_verified_at?: string | null
          no_current_childcare_benefits?: Json | null
          no_current_childcare_benefits_qualified?: boolean | null
          no_current_childcare_benefits_verified_at?: string | null
          not_eligible_at?: string | null
          notes?: string | null
          onboarding_call_at?: string | null
          other_income_earners?: Json | null
          owner?: string | null
          phone?: string | null
          preferred_language?: string | null
          proof_of_income?: string[] | null
          proof_of_income_verified?: boolean | null
          proof_of_income_verified_at?: string | null
          proof_of_residence?: string[] | null
          proof_of_residence_verified?: boolean | null
          proof_of_residence_verified_at?: string | null
          ready_for_payment?: boolean | null
          reveiwed_at?: string | null
          ruca_area_type?: string | null
          signature?: string | null
          snap_verified_at?: string | null
          spouse_has_income?: boolean | null
          state?: string | null
          state_resident_qualified?: boolean | null
          status?: Database["public"]["Enums"]["Status"] | null
          submission_id?: string | null
          submission_url?: string | null
          submitted_at?: string | null
          tanf_verified_at?: string | null
          truv_verified?: boolean | null
          truv_verified_at?: string | null
          uses_multiple_providers?: boolean | null
          waitlist?: boolean | null
          why_need_child_care?: Json | null
          wic_verified_at?: string | null
          zip?: string | null
        }
        Update: {
          address_1?: string | null
          address_2?: string | null
          approved_at?: string | null
          assets_one_million?: boolean | null
          child?: string | null
          child_age?: number | null
          child_age_proof?: string[] | null
          child_age_proof_verified_at?: string | null
          child_age_qualified?: boolean | null
          child_care_length?: string | null
          child_care_length_qualified?: boolean | null
          child_dob?: string | null
          child_hours?: string | null
          child_id?: number | null
          city?: string | null
          created_at?: string
          current_benefits_preeligibility?: Json | null
          current_benefits_preeligibility_proof?: string[] | null
          current_benefits_preeligibility_proof_verified_at?: string | null
          current_benefits_preeligibility_qualified?: boolean | null
          dob?: string | null
          documents?: string[] | null
          email?: string | null
          enterprise_zone_type?: string | null
          fpl_350_yearly_2025?: number | null
          guardian_id?: number | null
          guardian_name?: string | null
          household_size?: number | null
          id?: number
          income_qualified?: boolean | null
          income_yearly?: number | null
          is_test?: boolean | null
          medicaid_verified_at?: string | null
          no_current_childcare_benefits?: Json | null
          no_current_childcare_benefits_qualified?: boolean | null
          no_current_childcare_benefits_verified_at?: string | null
          not_eligible_at?: string | null
          notes?: string | null
          onboarding_call_at?: string | null
          other_income_earners?: Json | null
          owner?: string | null
          phone?: string | null
          preferred_language?: string | null
          proof_of_income?: string[] | null
          proof_of_income_verified?: boolean | null
          proof_of_income_verified_at?: string | null
          proof_of_residence?: string[] | null
          proof_of_residence_verified?: boolean | null
          proof_of_residence_verified_at?: string | null
          ready_for_payment?: boolean | null
          reveiwed_at?: string | null
          ruca_area_type?: string | null
          signature?: string | null
          snap_verified_at?: string | null
          spouse_has_income?: boolean | null
          state?: string | null
          state_resident_qualified?: boolean | null
          status?: Database["public"]["Enums"]["Status"] | null
          submission_id?: string | null
          submission_url?: string | null
          submitted_at?: string | null
          tanf_verified_at?: string | null
          truv_verified?: boolean | null
          truv_verified_at?: string | null
          uses_multiple_providers?: boolean | null
          waitlist?: boolean | null
          why_need_child_care?: Json | null
          wic_verified_at?: string | null
          zip?: string | null
        }
        Relationships: []
      }
      family: {
        Row: {
          application_reviewed_at: string | null
          approved_at: string | null
          assets_one_million: boolean | null
          benefits_verified_at: string | null
          clerk_user_id: string | null
          created_at: string
          current_benefits: Json | null
          current_benefits_proof_files: Json | null
          custom_message: string | null
          custom_message_type: Database["public"]["Enums"]["Custom Message Type"]
          decision_log: string[] | null
          had_error_at: string | null
          id: number
          income_verification_submitted_at: string | null
          income_verified_at: string | null
          is_test: boolean | null
          language: string
          link_id: string | null
          lock_application: boolean
          notes: string | null
          onboarding_call_at: string | null
          other_income_earners: Json | null
          participation_survey_1_received_at: string | null
          participation_survey_1_reminder_at: string | null
          participation_survey_1_sent_at: string | null
          participation_survey_2_received_at: string | null
          participation_survey_2_reminder_at: string | null
          participation_survey_2_sent_at: string | null
          participation_survey_3_received_at: string | null
          participation_survey_3_reminder_at: string | null
          participation_survey_3_sent_at: string | null
          portal_invite_accepted_at: string | null
          portal_invite_sent_at: string | null
          post_participation_survey_received_at: string | null
          post_participation_survey_reminder_at: string | null
          post_participation_survey_sent_at: string | null
          post_payment_survey_received_at: string | null
          post_payment_survey_reminder_at: string | null
          post_payment_survey_sent_at: string | null
          proof_of_income_files: Json | null
          proof_of_residence_files: Json | null
          provider_approved_at: string | null
          provider_invited_at: string | null
          referred_by: string | null
          residence_verified_at: string | null
          size: number | null
          spouse_has_income: boolean | null
          spouse_proof_of_income_files: Json | null
          submission_id: string | null
          submitted_log: string[] | null
          tc_tcpa: boolean | null
          verification_child_age_files: Json | null
          waitlist: boolean | null
          yearly_income: number | null
          zip: string | null
        }
        Insert: {
          application_reviewed_at?: string | null
          approved_at?: string | null
          assets_one_million?: boolean | null
          benefits_verified_at?: string | null
          clerk_user_id?: string | null
          created_at?: string
          current_benefits?: Json | null
          current_benefits_proof_files?: Json | null
          custom_message?: string | null
          custom_message_type?: Database["public"]["Enums"]["Custom Message Type"]
          decision_log?: string[] | null
          had_error_at?: string | null
          id?: number
          income_verification_submitted_at?: string | null
          income_verified_at?: string | null
          is_test?: boolean | null
          language: string
          link_id?: string | null
          lock_application?: boolean
          notes?: string | null
          onboarding_call_at?: string | null
          other_income_earners?: Json | null
          participation_survey_1_received_at?: string | null
          participation_survey_1_reminder_at?: string | null
          participation_survey_1_sent_at?: string | null
          participation_survey_2_received_at?: string | null
          participation_survey_2_reminder_at?: string | null
          participation_survey_2_sent_at?: string | null
          participation_survey_3_received_at?: string | null
          participation_survey_3_reminder_at?: string | null
          participation_survey_3_sent_at?: string | null
          portal_invite_accepted_at?: string | null
          portal_invite_sent_at?: string | null
          post_participation_survey_received_at?: string | null
          post_participation_survey_reminder_at?: string | null
          post_participation_survey_sent_at?: string | null
          post_payment_survey_received_at?: string | null
          post_payment_survey_reminder_at?: string | null
          post_payment_survey_sent_at?: string | null
          proof_of_income_files?: Json | null
          proof_of_residence_files?: Json | null
          provider_approved_at?: string | null
          provider_invited_at?: string | null
          referred_by?: string | null
          residence_verified_at?: string | null
          size?: number | null
          spouse_has_income?: boolean | null
          spouse_proof_of_income_files?: Json | null
          submission_id?: string | null
          submitted_log?: string[] | null
          tc_tcpa?: boolean | null
          verification_child_age_files?: Json | null
          waitlist?: boolean | null
          yearly_income?: number | null
          zip?: string | null
        }
        Update: {
          application_reviewed_at?: string | null
          approved_at?: string | null
          assets_one_million?: boolean | null
          benefits_verified_at?: string | null
          clerk_user_id?: string | null
          created_at?: string
          current_benefits?: Json | null
          current_benefits_proof_files?: Json | null
          custom_message?: string | null
          custom_message_type?: Database["public"]["Enums"]["Custom Message Type"]
          decision_log?: string[] | null
          had_error_at?: string | null
          id?: number
          income_verification_submitted_at?: string | null
          income_verified_at?: string | null
          is_test?: boolean | null
          language?: string
          link_id?: string | null
          lock_application?: boolean
          notes?: string | null
          onboarding_call_at?: string | null
          other_income_earners?: Json | null
          participation_survey_1_received_at?: string | null
          participation_survey_1_reminder_at?: string | null
          participation_survey_1_sent_at?: string | null
          participation_survey_2_received_at?: string | null
          participation_survey_2_reminder_at?: string | null
          participation_survey_2_sent_at?: string | null
          participation_survey_3_received_at?: string | null
          participation_survey_3_reminder_at?: string | null
          participation_survey_3_sent_at?: string | null
          portal_invite_accepted_at?: string | null
          portal_invite_sent_at?: string | null
          post_participation_survey_received_at?: string | null
          post_participation_survey_reminder_at?: string | null
          post_participation_survey_sent_at?: string | null
          post_payment_survey_received_at?: string | null
          post_payment_survey_reminder_at?: string | null
          post_payment_survey_sent_at?: string | null
          proof_of_income_files?: Json | null
          proof_of_residence_files?: Json | null
          provider_approved_at?: string | null
          provider_invited_at?: string | null
          referred_by?: string | null
          residence_verified_at?: string | null
          size?: number | null
          spouse_has_income?: boolean | null
          spouse_proof_of_income_files?: Json | null
          submission_id?: string | null
          submitted_log?: string[] | null
          tc_tcpa?: boolean | null
          verification_child_age_files?: Json | null
          waitlist?: boolean | null
          yearly_income?: number | null
          zip?: string | null
        }
        Relationships: []
      }
      family_application: {
        Row: {
          add_additional: boolean | null
          additional_child: boolean | null
          address_1_additional: string | null
          address_1_primary: string | null
          address_2_additional: string | null
          address_2_primary: string | null
          approved: boolean | null
          approved_at: string | null
          assets_one_million: boolean | null
          child_care_length_additional: string | null
          child_care_length_primary: string | null
          child_current_care_additional: Json | null
          child_current_care_primary: Json | null
          child_disabled_additional: boolean | null
          child_disabled_primary: boolean | null
          child_dob_additional: string | null
          child_dob_primary: string | null
          child_first_name_additional: string | null
          child_first_name_primary: string | null
          child_hours_per_week_additional: string | null
          child_hours_per_week_primary: string | null
          child_language_additional: Json | null
          child_language_primary: Json | null
          child_last_name_additional: string | null
          child_last_name_primary: string | null
          child_provider_name_additional: string | null
          child_provider_name_primary: string | null
          child_race_ethnicity_additional: Json | null
          child_race_ethnicity_primary: Json | null
          child_receiving_care_additional: boolean | null
          child_receiving_care_primary: boolean | null
          child_satisfaction_current_care_additional: string | null
          child_satisfaction_current_care_explanation_additional: string | null
          child_satisfaction_current_care_explanation_primary: string | null
          child_satisfaction_current_care_primary: string | null
          child_starting_next_month_additional: boolean | null
          child_starting_next_month_primary: boolean | null
          city_additional: string | null
          city_primary: string | null
          clerk_user_id: string | null
          county_primary: string | null
          created_at: string
          "current_benefits_pre-eligibility": Json | null
          current_benefits_proof: string[] | null
          current_benefits_proof_files: Json | null
          current_childcare_benefits: Json | null
          dob_additional: string | null
          dob_primary: string | null
          email_additional: string | null
          email_primary: string | null
          first_name_additional: string | null
          first_name_primary: string | null
          household_size: number | null
          id: number
          income_monthly_yearly: string | null
          income_yearly: number | null
          is_colorado_resident: boolean | null
          is_test: boolean | null
          last_name_additional: string | null
          last_name_primary: string | null
          last_update_date: string | null
          latitude_primary: number | null
          link_id: string | null
          longitude_primary: number | null
          other_income_earners: Json | null
          phone_additional: string | null
          phone_primary: string | null
          photo_release: boolean | null
          preferred_language: string | null
          primary_has_income: boolean | null
          proof_of_income: string[] | null
          proof_of_income_files: Json | null
          proof_of_residence: string[] | null
          proof_of_residence_files: Json | null
          race_ethnicity_additional: Json | null
          race_ethnicity_primary: Json | null
          referrer_cap_provider: string | null
          signature: string | null
          spouse_has_income: boolean | null
          state_additional: string | null
          state_primary: string | null
          submission_edit_url: string | null
          submission_id: string | null
          submission_ip: string | null
          submission_url: string | null
          submitted_at: string | null
          tc_change_providers: boolean | null
          tc_dependent_on_CAP_approval: boolean | null
          tc_income_verification: boolean | null
          tc_privacy_policy: boolean | null
          tc_responsible_for_finding_care: boolean | null
          tc_TCPA: boolean | null
          tc_terms_and_conditions: boolean | null
          timer: string | null
          truv_id_additional: string | null
          truv_id_primary: string | null
          truv_ids: string[] | null
          updated_at: string | null
          verification_child_age: string[] | null
          verification_child_age_files: Json | null
          waitlist: boolean | null
          why_need_child_care: Json | null
          zip_additional: string | null
          zip_primary: string | null
        }
        Insert: {
          add_additional?: boolean | null
          additional_child?: boolean | null
          address_1_additional?: string | null
          address_1_primary?: string | null
          address_2_additional?: string | null
          address_2_primary?: string | null
          approved?: boolean | null
          approved_at?: string | null
          assets_one_million?: boolean | null
          child_care_length_additional?: string | null
          child_care_length_primary?: string | null
          child_current_care_additional?: Json | null
          child_current_care_primary?: Json | null
          child_disabled_additional?: boolean | null
          child_disabled_primary?: boolean | null
          child_dob_additional?: string | null
          child_dob_primary?: string | null
          child_first_name_additional?: string | null
          child_first_name_primary?: string | null
          child_hours_per_week_additional?: string | null
          child_hours_per_week_primary?: string | null
          child_language_additional?: Json | null
          child_language_primary?: Json | null
          child_last_name_additional?: string | null
          child_last_name_primary?: string | null
          child_provider_name_additional?: string | null
          child_provider_name_primary?: string | null
          child_race_ethnicity_additional?: Json | null
          child_race_ethnicity_primary?: Json | null
          child_receiving_care_additional?: boolean | null
          child_receiving_care_primary?: boolean | null
          child_satisfaction_current_care_additional?: string | null
          child_satisfaction_current_care_explanation_additional?: string | null
          child_satisfaction_current_care_explanation_primary?: string | null
          child_satisfaction_current_care_primary?: string | null
          child_starting_next_month_additional?: boolean | null
          child_starting_next_month_primary?: boolean | null
          city_additional?: string | null
          city_primary?: string | null
          clerk_user_id?: string | null
          county_primary?: string | null
          created_at?: string
          "current_benefits_pre-eligibility"?: Json | null
          current_benefits_proof?: string[] | null
          current_benefits_proof_files?: Json | null
          current_childcare_benefits?: Json | null
          dob_additional?: string | null
          dob_primary?: string | null
          email_additional?: string | null
          email_primary?: string | null
          first_name_additional?: string | null
          first_name_primary?: string | null
          household_size?: number | null
          id?: number
          income_monthly_yearly?: string | null
          income_yearly?: number | null
          is_colorado_resident?: boolean | null
          is_test?: boolean | null
          last_name_additional?: string | null
          last_name_primary?: string | null
          last_update_date?: string | null
          latitude_primary?: number | null
          link_id?: string | null
          longitude_primary?: number | null
          other_income_earners?: Json | null
          phone_additional?: string | null
          phone_primary?: string | null
          photo_release?: boolean | null
          preferred_language?: string | null
          primary_has_income?: boolean | null
          proof_of_income?: string[] | null
          proof_of_income_files?: Json | null
          proof_of_residence?: string[] | null
          proof_of_residence_files?: Json | null
          race_ethnicity_additional?: Json | null
          race_ethnicity_primary?: Json | null
          referrer_cap_provider?: string | null
          signature?: string | null
          spouse_has_income?: boolean | null
          state_additional?: string | null
          state_primary?: string | null
          submission_edit_url?: string | null
          submission_id?: string | null
          submission_ip?: string | null
          submission_url?: string | null
          submitted_at?: string | null
          tc_change_providers?: boolean | null
          tc_dependent_on_CAP_approval?: boolean | null
          tc_income_verification?: boolean | null
          tc_privacy_policy?: boolean | null
          tc_responsible_for_finding_care?: boolean | null
          tc_TCPA?: boolean | null
          tc_terms_and_conditions?: boolean | null
          timer?: string | null
          truv_id_additional?: string | null
          truv_id_primary?: string | null
          truv_ids?: string[] | null
          updated_at?: string | null
          verification_child_age?: string[] | null
          verification_child_age_files?: Json | null
          waitlist?: boolean | null
          why_need_child_care?: Json | null
          zip_additional?: string | null
          zip_primary?: string | null
        }
        Update: {
          add_additional?: boolean | null
          additional_child?: boolean | null
          address_1_additional?: string | null
          address_1_primary?: string | null
          address_2_additional?: string | null
          address_2_primary?: string | null
          approved?: boolean | null
          approved_at?: string | null
          assets_one_million?: boolean | null
          child_care_length_additional?: string | null
          child_care_length_primary?: string | null
          child_current_care_additional?: Json | null
          child_current_care_primary?: Json | null
          child_disabled_additional?: boolean | null
          child_disabled_primary?: boolean | null
          child_dob_additional?: string | null
          child_dob_primary?: string | null
          child_first_name_additional?: string | null
          child_first_name_primary?: string | null
          child_hours_per_week_additional?: string | null
          child_hours_per_week_primary?: string | null
          child_language_additional?: Json | null
          child_language_primary?: Json | null
          child_last_name_additional?: string | null
          child_last_name_primary?: string | null
          child_provider_name_additional?: string | null
          child_provider_name_primary?: string | null
          child_race_ethnicity_additional?: Json | null
          child_race_ethnicity_primary?: Json | null
          child_receiving_care_additional?: boolean | null
          child_receiving_care_primary?: boolean | null
          child_satisfaction_current_care_additional?: string | null
          child_satisfaction_current_care_explanation_additional?: string | null
          child_satisfaction_current_care_explanation_primary?: string | null
          child_satisfaction_current_care_primary?: string | null
          child_starting_next_month_additional?: boolean | null
          child_starting_next_month_primary?: boolean | null
          city_additional?: string | null
          city_primary?: string | null
          clerk_user_id?: string | null
          county_primary?: string | null
          created_at?: string
          "current_benefits_pre-eligibility"?: Json | null
          current_benefits_proof?: string[] | null
          current_benefits_proof_files?: Json | null
          current_childcare_benefits?: Json | null
          dob_additional?: string | null
          dob_primary?: string | null
          email_additional?: string | null
          email_primary?: string | null
          first_name_additional?: string | null
          first_name_primary?: string | null
          household_size?: number | null
          id?: number
          income_monthly_yearly?: string | null
          income_yearly?: number | null
          is_colorado_resident?: boolean | null
          is_test?: boolean | null
          last_name_additional?: string | null
          last_name_primary?: string | null
          last_update_date?: string | null
          latitude_primary?: number | null
          link_id?: string | null
          longitude_primary?: number | null
          other_income_earners?: Json | null
          phone_additional?: string | null
          phone_primary?: string | null
          photo_release?: boolean | null
          preferred_language?: string | null
          primary_has_income?: boolean | null
          proof_of_income?: string[] | null
          proof_of_income_files?: Json | null
          proof_of_residence?: string[] | null
          proof_of_residence_files?: Json | null
          race_ethnicity_additional?: Json | null
          race_ethnicity_primary?: Json | null
          referrer_cap_provider?: string | null
          signature?: string | null
          spouse_has_income?: boolean | null
          state_additional?: string | null
          state_primary?: string | null
          submission_edit_url?: string | null
          submission_id?: string | null
          submission_ip?: string | null
          submission_url?: string | null
          submitted_at?: string | null
          tc_change_providers?: boolean | null
          tc_dependent_on_CAP_approval?: boolean | null
          tc_income_verification?: boolean | null
          tc_privacy_policy?: boolean | null
          tc_responsible_for_finding_care?: boolean | null
          tc_TCPA?: boolean | null
          tc_terms_and_conditions?: boolean | null
          timer?: string | null
          truv_id_additional?: string | null
          truv_id_primary?: string | null
          truv_ids?: string[] | null
          updated_at?: string | null
          verification_child_age?: string[] | null
          verification_child_age_files?: Json | null
          waitlist?: boolean | null
          why_need_child_care?: Json | null
          zip_additional?: string | null
          zip_primary?: string | null
        }
        Relationships: []
      }
      family_application_staging: {
        Row: {
          add_additional: string | null
          additional_child: string | null
          address_1_additional: string | null
          address_1_primary: string | null
          address_2_additional: string | null
          address_2_primary: string | null
          assets_one_million: string | null
          child_care_length_additional: string | null
          child_care_length_primary: string | null
          child_current_care_additional: string | null
          child_current_care_primary: string | null
          child_dob_additional: string | null
          child_dob_primary: string | null
          child_first_name_additional: string | null
          child_first_name_primary: string | null
          child_hours_per_week_additional: string | null
          child_hours_per_week_primary: string | null
          child_language_additional: string | null
          child_language_primary: string | null
          child_last_name_additional: string | null
          child_last_name_primary: string | null
          child_race_ethnicity_additional: string | null
          child_race_ethnicity_primary: string | null
          child_receiving_care_additional: string | null
          child_receiving_care_primary: string | null
          child_satisfaction_current_care_additional: string | null
          child_satisfaction_current_care_explanation_additional: string | null
          child_satisfaction_current_care_explanation_primary: string | null
          child_satisfaction_current_care_primary: string | null
          child_starting_next_month_additional: string | null
          child_starting_next_month_primary: string | null
          city_additional: string | null
          city_primary: string | null
          created_at: string | null
          "current_benefits_pre-eligibility": string | null
          current_benefits_proof: string | null
          current_childcare_benefits: string | null
          dob_additional: string | null
          dob_primary: string | null
          email_additional: string | null
          email_primary: string | null
          first_name_primary: string | null
          household_size: string | null
          income_monthly_yearly: string | null
          income_yearly: string | null
          last_name_additional: string | null
          last_name_primary: string | null
          last_update_date: string | null
          phone_additional: string | null
          phone_primary: string | null
          preferred_language: string | null
          proof_of_income: string | null
          proof_of_residence: string | null
          race_ethnicity_additional: string | null
          race_ethnicity_primary: string | null
          signature: string | null
          state_additional: string | null
          state_primary: string | null
          submission_edit_url: string | null
          submission_id: string
          submission_ip: string | null
          submission_url: string | null
          tc_change_providers: string | null
          tc_dependent_on_CAP_approval: string | null
          tc_privacy_policy: string | null
          tc_responsible_for_finding_care: string | null
          tc_TCPA: string | null
          tc_terms_and_conditions: string | null
          timer: string | null
          verification_child_age: string | null
          why_need_child_care: string | null
          zip_additional: string | null
          zip_primary: string | null
        }
        Insert: {
          add_additional?: string | null
          additional_child?: string | null
          address_1_additional?: string | null
          address_1_primary?: string | null
          address_2_additional?: string | null
          address_2_primary?: string | null
          assets_one_million?: string | null
          child_care_length_additional?: string | null
          child_care_length_primary?: string | null
          child_current_care_additional?: string | null
          child_current_care_primary?: string | null
          child_dob_additional?: string | null
          child_dob_primary?: string | null
          child_first_name_additional?: string | null
          child_first_name_primary?: string | null
          child_hours_per_week_additional?: string | null
          child_hours_per_week_primary?: string | null
          child_language_additional?: string | null
          child_language_primary?: string | null
          child_last_name_additional?: string | null
          child_last_name_primary?: string | null
          child_race_ethnicity_additional?: string | null
          child_race_ethnicity_primary?: string | null
          child_receiving_care_additional?: string | null
          child_receiving_care_primary?: string | null
          child_satisfaction_current_care_additional?: string | null
          child_satisfaction_current_care_explanation_additional?: string | null
          child_satisfaction_current_care_explanation_primary?: string | null
          child_satisfaction_current_care_primary?: string | null
          child_starting_next_month_additional?: string | null
          child_starting_next_month_primary?: string | null
          city_additional?: string | null
          city_primary?: string | null
          created_at?: string | null
          "current_benefits_pre-eligibility"?: string | null
          current_benefits_proof?: string | null
          current_childcare_benefits?: string | null
          dob_additional?: string | null
          dob_primary?: string | null
          email_additional?: string | null
          email_primary?: string | null
          first_name_primary?: string | null
          household_size?: string | null
          income_monthly_yearly?: string | null
          income_yearly?: string | null
          last_name_additional?: string | null
          last_name_primary?: string | null
          last_update_date?: string | null
          phone_additional?: string | null
          phone_primary?: string | null
          preferred_language?: string | null
          proof_of_income?: string | null
          proof_of_residence?: string | null
          race_ethnicity_additional?: string | null
          race_ethnicity_primary?: string | null
          signature?: string | null
          state_additional?: string | null
          state_primary?: string | null
          submission_edit_url?: string | null
          submission_id: string
          submission_ip?: string | null
          submission_url?: string | null
          tc_change_providers?: string | null
          tc_dependent_on_CAP_approval?: string | null
          tc_privacy_policy?: string | null
          tc_responsible_for_finding_care?: string | null
          tc_TCPA?: string | null
          tc_terms_and_conditions?: string | null
          timer?: string | null
          verification_child_age?: string | null
          why_need_child_care?: string | null
          zip_additional?: string | null
          zip_primary?: string | null
        }
        Update: {
          add_additional?: string | null
          additional_child?: string | null
          address_1_additional?: string | null
          address_1_primary?: string | null
          address_2_additional?: string | null
          address_2_primary?: string | null
          assets_one_million?: string | null
          child_care_length_additional?: string | null
          child_care_length_primary?: string | null
          child_current_care_additional?: string | null
          child_current_care_primary?: string | null
          child_dob_additional?: string | null
          child_dob_primary?: string | null
          child_first_name_additional?: string | null
          child_first_name_primary?: string | null
          child_hours_per_week_additional?: string | null
          child_hours_per_week_primary?: string | null
          child_language_additional?: string | null
          child_language_primary?: string | null
          child_last_name_additional?: string | null
          child_last_name_primary?: string | null
          child_race_ethnicity_additional?: string | null
          child_race_ethnicity_primary?: string | null
          child_receiving_care_additional?: string | null
          child_receiving_care_primary?: string | null
          child_satisfaction_current_care_additional?: string | null
          child_satisfaction_current_care_explanation_additional?: string | null
          child_satisfaction_current_care_explanation_primary?: string | null
          child_satisfaction_current_care_primary?: string | null
          child_starting_next_month_additional?: string | null
          child_starting_next_month_primary?: string | null
          city_additional?: string | null
          city_primary?: string | null
          created_at?: string | null
          "current_benefits_pre-eligibility"?: string | null
          current_benefits_proof?: string | null
          current_childcare_benefits?: string | null
          dob_additional?: string | null
          dob_primary?: string | null
          email_additional?: string | null
          email_primary?: string | null
          first_name_primary?: string | null
          household_size?: string | null
          income_monthly_yearly?: string | null
          income_yearly?: string | null
          last_name_additional?: string | null
          last_name_primary?: string | null
          last_update_date?: string | null
          phone_additional?: string | null
          phone_primary?: string | null
          preferred_language?: string | null
          proof_of_income?: string | null
          proof_of_residence?: string | null
          race_ethnicity_additional?: string | null
          race_ethnicity_primary?: string | null
          signature?: string | null
          state_additional?: string | null
          state_primary?: string | null
          submission_edit_url?: string | null
          submission_id?: string
          submission_ip?: string | null
          submission_url?: string | null
          tc_change_providers?: string | null
          tc_dependent_on_CAP_approval?: string | null
          tc_privacy_policy?: string | null
          tc_responsible_for_finding_care?: string | null
          tc_TCPA?: string | null
          tc_terms_and_conditions?: string | null
          timer?: string | null
          verification_child_age?: string | null
          why_need_child_care?: string | null
          zip_additional?: string | null
          zip_primary?: string | null
        }
        Relationships: []
      }
      family_approval: {
        Row: {
          address_1_primary: string | null
          address_2_primary: string | null
          assets_one_million: boolean | null
          child: string | null
          child_additional_id: number | null
          child_additional_status: Database["public"]["Enums"]["Status"] | null
          child_age_additional_verified: boolean | null
          child_age_additional_verified_at: string | null
          child_age_primary_verified: boolean | null
          child_age_primary_verified_at: string | null
          child_age_proof: string[] | null
          child_care_length_additional: string | null
          child_care_length_primary: string | null
          child_care_length_qualified: boolean | null
          child_first_name_additional: string | null
          child_first_name_primary: string | null
          child_id: number | null
          child_last_name_additional: string | null
          child_last_name_primary: string | null
          child_primary_id: number | null
          child_primary_status: Database["public"]["Enums"]["Status"] | null
          city_primary: string | null
          created_at: string
          "current_benefits_pre-eligibility": Json | null
          current_benefits_proof: string[] | null
          current_benefits_proof_verified: boolean | null
          current_benefits_proof_verified_at: string | null
          documents: string[] | null
          email_primary: string | null
          first_name_primary: string | null
          fpl_350_yearly_2025: number | null
          household_size: number | null
          id: number
          income_qualified: boolean | null
          income_yearly: number | null
          last_name_primary: string | null
          no_current_childcare_benefits: Json | null
          no_current_childcare_benefits_qualified: boolean | null
          no_current_childcare_benefits_verified_at: string | null
          notes: string | null
          phone_primary: string | null
          portal_invite_sent_at: string | null
          preferred_language: string | null
          proof_of_income: string[] | null
          proof_of_income_verified: boolean | null
          proof_of_income_verified_at: string | null
          proof_of_residence: string[] | null
          proof_of_residence_verified: boolean | null
          proof_of_residence_verified_at: string | null
          qualifying_benefits_proof: string[] | null
          ready_to_approve: boolean | null
          ruca_area_type: string | null
          signature: string | null
          state_additional: string | null
          state_primary: string | null
          state_resident_qualified: boolean | null
          status: Database["public"]["Enums"]["Status"] | null
          submission_id: string | null
          submission_url: string | null
          submitted_at: string | null
          truv_verified: boolean | null
          zip_additional: string | null
          zip_primary: string | null
        }
        Insert: {
          address_1_primary?: string | null
          address_2_primary?: string | null
          assets_one_million?: boolean | null
          child?: string | null
          child_additional_id?: number | null
          child_additional_status?: Database["public"]["Enums"]["Status"] | null
          child_age_additional_verified?: boolean | null
          child_age_additional_verified_at?: string | null
          child_age_primary_verified?: boolean | null
          child_age_primary_verified_at?: string | null
          child_age_proof?: string[] | null
          child_care_length_additional?: string | null
          child_care_length_primary?: string | null
          child_care_length_qualified?: boolean | null
          child_first_name_additional?: string | null
          child_first_name_primary?: string | null
          child_id?: number | null
          child_last_name_additional?: string | null
          child_last_name_primary?: string | null
          child_primary_id?: number | null
          child_primary_status?: Database["public"]["Enums"]["Status"] | null
          city_primary?: string | null
          created_at?: string
          "current_benefits_pre-eligibility"?: Json | null
          current_benefits_proof?: string[] | null
          current_benefits_proof_verified?: boolean | null
          current_benefits_proof_verified_at?: string | null
          documents?: string[] | null
          email_primary?: string | null
          first_name_primary?: string | null
          fpl_350_yearly_2025?: number | null
          household_size?: number | null
          id?: number
          income_qualified?: boolean | null
          income_yearly?: number | null
          last_name_primary?: string | null
          no_current_childcare_benefits?: Json | null
          no_current_childcare_benefits_qualified?: boolean | null
          no_current_childcare_benefits_verified_at?: string | null
          notes?: string | null
          phone_primary?: string | null
          portal_invite_sent_at?: string | null
          preferred_language?: string | null
          proof_of_income?: string[] | null
          proof_of_income_verified?: boolean | null
          proof_of_income_verified_at?: string | null
          proof_of_residence?: string[] | null
          proof_of_residence_verified?: boolean | null
          proof_of_residence_verified_at?: string | null
          qualifying_benefits_proof?: string[] | null
          ready_to_approve?: boolean | null
          ruca_area_type?: string | null
          signature?: string | null
          state_additional?: string | null
          state_primary?: string | null
          state_resident_qualified?: boolean | null
          status?: Database["public"]["Enums"]["Status"] | null
          submission_id?: string | null
          submission_url?: string | null
          submitted_at?: string | null
          truv_verified?: boolean | null
          zip_additional?: string | null
          zip_primary?: string | null
        }
        Update: {
          address_1_primary?: string | null
          address_2_primary?: string | null
          assets_one_million?: boolean | null
          child?: string | null
          child_additional_id?: number | null
          child_additional_status?: Database["public"]["Enums"]["Status"] | null
          child_age_additional_verified?: boolean | null
          child_age_additional_verified_at?: string | null
          child_age_primary_verified?: boolean | null
          child_age_primary_verified_at?: string | null
          child_age_proof?: string[] | null
          child_care_length_additional?: string | null
          child_care_length_primary?: string | null
          child_care_length_qualified?: boolean | null
          child_first_name_additional?: string | null
          child_first_name_primary?: string | null
          child_id?: number | null
          child_last_name_additional?: string | null
          child_last_name_primary?: string | null
          child_primary_id?: number | null
          child_primary_status?: Database["public"]["Enums"]["Status"] | null
          city_primary?: string | null
          created_at?: string
          "current_benefits_pre-eligibility"?: Json | null
          current_benefits_proof?: string[] | null
          current_benefits_proof_verified?: boolean | null
          current_benefits_proof_verified_at?: string | null
          documents?: string[] | null
          email_primary?: string | null
          first_name_primary?: string | null
          fpl_350_yearly_2025?: number | null
          household_size?: number | null
          id?: number
          income_qualified?: boolean | null
          income_yearly?: number | null
          last_name_primary?: string | null
          no_current_childcare_benefits?: Json | null
          no_current_childcare_benefits_qualified?: boolean | null
          no_current_childcare_benefits_verified_at?: string | null
          notes?: string | null
          phone_primary?: string | null
          portal_invite_sent_at?: string | null
          preferred_language?: string | null
          proof_of_income?: string[] | null
          proof_of_income_verified?: boolean | null
          proof_of_income_verified_at?: string | null
          proof_of_residence?: string[] | null
          proof_of_residence_verified?: boolean | null
          proof_of_residence_verified_at?: string | null
          qualifying_benefits_proof?: string[] | null
          ready_to_approve?: boolean | null
          ruca_area_type?: string | null
          signature?: string | null
          state_additional?: string | null
          state_primary?: string | null
          state_resident_qualified?: boolean | null
          status?: Database["public"]["Enums"]["Status"] | null
          submission_id?: string | null
          submission_url?: string | null
          submitted_at?: string | null
          truv_verified?: boolean | null
          zip_additional?: string | null
          zip_primary?: string | null
        }
        Relationships: []
      }
      family_invitation: {
        Row: {
          accepted: boolean | null
          created_at: string
          email_sent: boolean | null
          id: number
          invite_email: string | null
          opened_at: string | null
          provider_google_sheet_id: number | null
          public_id: string | null
          sms_sent: boolean | null
          updated_at: string | null
        }
        Insert: {
          accepted?: boolean | null
          created_at?: string
          email_sent?: boolean | null
          id?: number
          invite_email?: string | null
          opened_at?: string | null
          provider_google_sheet_id?: number | null
          public_id?: string | null
          sms_sent?: boolean | null
          updated_at?: string | null
        }
        Update: {
          accepted?: boolean | null
          created_at?: string
          email_sent?: boolean | null
          id?: number
          invite_email?: string | null
          opened_at?: string | null
          provider_google_sheet_id?: number | null
          public_id?: string | null
          sms_sent?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      fpl: {
        Row: {
          created_at: string
          fpl_350_yearly_2025: number | null
          household_size: number | null
          id: number
        }
        Insert: {
          created_at?: string
          fpl_350_yearly_2025?: number | null
          household_size?: number | null
          id?: number
        }
        Update: {
          created_at?: string
          fpl_350_yearly_2025?: number | null
          household_size?: number | null
          id?: number
        }
        Relationships: []
      }
      guardian: {
        Row: {
          address_1: string | null
          address_2: string | null
          city: string | null
          created_at: string
          dob: string | null
          email: string | null
          email_norm: string | null
          family_id: number | null
          first_name: string | null
          id: number
          is_test: boolean | null
          last_name: string | null
          phone_number: string | null
          race_ethnicity: Json | null
          state: string | null
          type: string | null
          why_need_child_care: Json | null
          zip: string | null
        }
        Insert: {
          address_1?: string | null
          address_2?: string | null
          city?: string | null
          created_at?: string
          dob?: string | null
          email?: string | null
          email_norm?: string | null
          family_id?: number | null
          first_name?: string | null
          id?: number
          is_test?: boolean | null
          last_name?: string | null
          phone_number?: string | null
          race_ethnicity?: Json | null
          state?: string | null
          type?: string | null
          why_need_child_care?: Json | null
          zip?: string | null
        }
        Update: {
          address_1?: string | null
          address_2?: string | null
          city?: string | null
          created_at?: string
          dob?: string | null
          email?: string | null
          email_norm?: string | null
          family_id?: number | null
          first_name?: string | null
          id?: number
          is_test?: boolean | null
          last_name?: string | null
          phone_number?: string | null
          race_ethnicity?: Json | null
          state?: string | null
          type?: string | null
          why_need_child_care?: Json | null
          zip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "guardian_family_id_fkey"
            columns: ["family_id"]
            isOneToOne: false
            referencedRelation: "family"
            referencedColumns: ["id"]
          },
        ]
      }
      monthly_allocation: {
        Row: {
          allocation_cents: number | null
          created_at: string
          date: string | null
          google_sheets_child_id: number | null
          id: number
          updated_at: string | null
        }
        Insert: {
          allocation_cents?: number | null
          created_at?: string
          date?: string | null
          google_sheets_child_id?: number | null
          id?: number
          updated_at?: string | null
        }
        Update: {
          allocation_cents?: number | null
          created_at?: string
          date?: string | null
          google_sheets_child_id?: number | null
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      payment_rate: {
        Row: {
          created_at: string
          full_day_rate_cents: number | null
          google_sheets_child_id: number | null
          google_sheets_provider_id: number | null
          half_day_rate_cents: number | null
          id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          full_day_rate_cents?: number | null
          google_sheets_child_id?: number | null
          google_sheets_provider_id?: number | null
          half_day_rate_cents?: number | null
          id?: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          full_day_rate_cents?: number | null
          google_sheets_child_id?: number | null
          google_sheets_provider_id?: number | null
          half_day_rate_cents?: number | null
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      payment_request: {
        Row: {
          amount_in_cents: number | null
          care_day_ids: number[] | null
          care_days_count: number | null
          created_at: string
          google_sheets_child_id: number | null
          google_sheets_provider_id: number | null
          id: number
          updated_at: string | null
        }
        Insert: {
          amount_in_cents?: number | null
          care_day_ids?: number[] | null
          care_days_count?: number | null
          created_at?: string
          google_sheets_child_id?: number | null
          google_sheets_provider_id?: number | null
          id?: number
          updated_at?: string | null
        }
        Update: {
          amount_in_cents?: number | null
          care_day_ids?: number[] | null
          care_days_count?: number | null
          created_at?: string
          google_sheets_child_id?: number | null
          google_sheets_provider_id?: number | null
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      provider: {
        Row: {
          accepted_forms_of_payment: Json | null
          address_1: string | null
          address_2: string | null
          application_reviewed_at: string | null
          approved: boolean | null
          approved_at: string | null
          attendance_tracking_system: Json | null
          background_check_links: string[] | null
          background_check_passed_at: string | null
          background_check_started_at: string | null
          background_check_submitted_at: string | null
          benefits_impact_follow_up: boolean | null
          car_failure_to_report: string | null
          car_immediately_report: string | null
          care_location_address_1: string | null
          care_location_address_2: string | null
          care_location_city: string | null
          care_location_state: string | null
          care_location_zip: string | null
          care_setting: string | null
          cares_for_disabled: boolean | null
          ccpr_activities: string | null
          ccpr_materials_and_equipment: string | null
          ccpr_meals: string | null
          ccpr_medications: string | null
          ccpr_transportation: string | null
          child_safety_module_training_completed_at: string | null
          children_under_2: number | null
          city: string | null
          clerk_user_id: string | null
          cpr_certified: string | null
          cpr_online_training_completed_at: string | null
          cpr_training_link: string | null
          cpr_upload: string[] | null
          cpr_upload_files: Json | null
          cpr_uploaded_at: string | null
          cpr_verified_at: string | null
          created_at: string
          current_benefits: Json | null
          custom_message: string | null
          custom_message_type: Database["public"]["Enums"]["Custom Message Type"]
          email: string | null
          enterprise_zone_type: string | null
          family_invited_at: string | null
          first_name: string | null
          gpqc_capabilities: string | null
          gpqc_children_removed: string | null
          gpqc_experienced: string | null
          gpqc_parental_access: string | null
          gpqc_punishment: string | null
          had_error_at: string | null
          home_safety_and_injury_prevention_training_completed_at: string | null
          hsce_communicable_diseases: string | null
          hsce_disasters: string | null
          hsce_emergencies: string | null
          hsce_play_areas: string | null
          hsce_protect_from_dangers: string | null
          hsce_working_detectors: string | null
          id: number
          id_upload_files: Json | null
          id_verified_at: string | null
          identification_verified_at: string | null
          is_test: boolean | null
          jdp_admin_links: string[] | null
          jdp_applicant_ids: string[] | null
          jdp_file_numbers: string[] | null
          jdp_order_ids: string[] | null
          last_name: string | null
          license_name: string | null
          license_number: string | null
          license_required: boolean | null
          license_type: string | null
          licensed: boolean | null
          link_id: string | null
          lock_application: boolean
          "monthly_rate_0-18": string | null
          "monthly_rate_19-36": string | null
          name: string | null
          not_related_more_than_one_family: boolean | null
          notes: string | null
          number_of_children: number | null
          onboarding_call_at: string | null
          other_adults: Json | null
          other_background_checks_sent_emails: string[] | null
          owner: string | null
          participation_survey_1_received_at: string | null
          participation_survey_1_reminder_at: string | null
          participation_survey_1_sent_at: string | null
          participation_survey_2_received_at: string | null
          participation_survey_2_reminder_at: string | null
          participation_survey_2_sent_at: string | null
          participation_survey_3_received_at: string | null
          participation_survey_3_reminder_at: string | null
          participation_survey_3_sent_at: string | null
          pay_per_month: number | null
          pay_rate: string | null
          pay_types: Json | null
          payment_enabled: boolean
          payment_method_configured_at: string | null
          payment_platform_account_created_at: string | null
          pdis_emergency_preparedness_completed_at: string | null
          pdis_first_aid_cpr_completed_at: string | null
          pdis_infant_safe_sleep_completed_at: string | null
          pdis_injury_prevention_completed_at: string | null
          pdis_medication_administration_part_one_completed_at: string | null
          pdis_preventing_child_abuse_completed_at: string | null
          pdis_preventing_shaken_baby_completed_at: string | null
          pdis_recognizing_impact_of_bias_completed_at: string | null
          pdis_standard_precautions_completed_at: string | null
          phone: string | null
          portal_invite_accepted_at: string | null
          portal_invite_sent_at: string | null
          post_participation_survey_received_at: string | null
          post_participation_survey_reminder_at: string | null
          post_participation_survey_sent_at: string | null
          post_payment_survey_received_at: string | null
          post_payment_survey_reminder_at: string | null
          post_payment_survey_sent_at: string | null
          preferred_language: string | null
          rates_configured_at: string | null
          red_cross_code: string | null
          referrer_cap_family: string | null
          related_to_all_children: boolean | null
          related_to_relationship: string | null
          related_to_some_children: boolean | null
          safe_sleep_for_infants_training_completed_at: string | null
          safety_attestation: string[] | null
          satisfaction_current_experience: string | null
          satisfaction_current_experience_explanation: string | null
          satisfaction_current_pay: string | null
          signature: string | null
          ssn_or_itin: boolean | null
          state: string | null
          status: Database["public"]["Enums"]["Status"]
          submission_id: string | null
          submitted_log: string[] | null
          tc_tcpa: boolean | null
          training_completed_at: string | null
          type: Database["public"]["Enums"]["Provider Type"] | null
          w9: string[] | null
          w9_approved_at: string | null
          w9_files: Json | null
          w9_signed_at: string | null
          w9_verified_at: string | null
          waitlist: boolean | null
          when_families_pay: string | null
          zip: string | null
        }
        Insert: {
          accepted_forms_of_payment?: Json | null
          address_1?: string | null
          address_2?: string | null
          application_reviewed_at?: string | null
          approved?: boolean | null
          approved_at?: string | null
          attendance_tracking_system?: Json | null
          background_check_links?: string[] | null
          background_check_passed_at?: string | null
          background_check_started_at?: string | null
          background_check_submitted_at?: string | null
          benefits_impact_follow_up?: boolean | null
          car_failure_to_report?: string | null
          car_immediately_report?: string | null
          care_location_address_1?: string | null
          care_location_address_2?: string | null
          care_location_city?: string | null
          care_location_state?: string | null
          care_location_zip?: string | null
          care_setting?: string | null
          cares_for_disabled?: boolean | null
          ccpr_activities?: string | null
          ccpr_materials_and_equipment?: string | null
          ccpr_meals?: string | null
          ccpr_medications?: string | null
          ccpr_transportation?: string | null
          child_safety_module_training_completed_at?: string | null
          children_under_2?: number | null
          city?: string | null
          clerk_user_id?: string | null
          cpr_certified?: string | null
          cpr_online_training_completed_at?: string | null
          cpr_training_link?: string | null
          cpr_upload?: string[] | null
          cpr_upload_files?: Json | null
          cpr_uploaded_at?: string | null
          cpr_verified_at?: string | null
          created_at?: string
          current_benefits?: Json | null
          custom_message?: string | null
          custom_message_type?: Database["public"]["Enums"]["Custom Message Type"]
          email?: string | null
          enterprise_zone_type?: string | null
          family_invited_at?: string | null
          first_name?: string | null
          gpqc_capabilities?: string | null
          gpqc_children_removed?: string | null
          gpqc_experienced?: string | null
          gpqc_parental_access?: string | null
          gpqc_punishment?: string | null
          had_error_at?: string | null
          home_safety_and_injury_prevention_training_completed_at?:
            | string
            | null
          hsce_communicable_diseases?: string | null
          hsce_disasters?: string | null
          hsce_emergencies?: string | null
          hsce_play_areas?: string | null
          hsce_protect_from_dangers?: string | null
          hsce_working_detectors?: string | null
          id?: number
          id_upload_files?: Json | null
          id_verified_at?: string | null
          identification_verified_at?: string | null
          is_test?: boolean | null
          jdp_admin_links?: string[] | null
          jdp_applicant_ids?: string[] | null
          jdp_file_numbers?: string[] | null
          jdp_order_ids?: string[] | null
          last_name?: string | null
          license_name?: string | null
          license_number?: string | null
          license_required?: boolean | null
          license_type?: string | null
          licensed?: boolean | null
          link_id?: string | null
          lock_application?: boolean
          "monthly_rate_0-18"?: string | null
          "monthly_rate_19-36"?: string | null
          name?: string | null
          not_related_more_than_one_family?: boolean | null
          notes?: string | null
          number_of_children?: number | null
          onboarding_call_at?: string | null
          other_adults?: Json | null
          other_background_checks_sent_emails?: string[] | null
          owner?: string | null
          participation_survey_1_received_at?: string | null
          participation_survey_1_reminder_at?: string | null
          participation_survey_1_sent_at?: string | null
          participation_survey_2_received_at?: string | null
          participation_survey_2_reminder_at?: string | null
          participation_survey_2_sent_at?: string | null
          participation_survey_3_received_at?: string | null
          participation_survey_3_reminder_at?: string | null
          participation_survey_3_sent_at?: string | null
          pay_per_month?: number | null
          pay_rate?: string | null
          pay_types?: Json | null
          payment_enabled?: boolean
          payment_method_configured_at?: string | null
          payment_platform_account_created_at?: string | null
          pdis_emergency_preparedness_completed_at?: string | null
          pdis_first_aid_cpr_completed_at?: string | null
          pdis_infant_safe_sleep_completed_at?: string | null
          pdis_injury_prevention_completed_at?: string | null
          pdis_medication_administration_part_one_completed_at?: string | null
          pdis_preventing_child_abuse_completed_at?: string | null
          pdis_preventing_shaken_baby_completed_at?: string | null
          pdis_recognizing_impact_of_bias_completed_at?: string | null
          pdis_standard_precautions_completed_at?: string | null
          phone?: string | null
          portal_invite_accepted_at?: string | null
          portal_invite_sent_at?: string | null
          post_participation_survey_received_at?: string | null
          post_participation_survey_reminder_at?: string | null
          post_participation_survey_sent_at?: string | null
          post_payment_survey_received_at?: string | null
          post_payment_survey_reminder_at?: string | null
          post_payment_survey_sent_at?: string | null
          preferred_language?: string | null
          rates_configured_at?: string | null
          red_cross_code?: string | null
          referrer_cap_family?: string | null
          related_to_all_children?: boolean | null
          related_to_relationship?: string | null
          related_to_some_children?: boolean | null
          safe_sleep_for_infants_training_completed_at?: string | null
          safety_attestation?: string[] | null
          satisfaction_current_experience?: string | null
          satisfaction_current_experience_explanation?: string | null
          satisfaction_current_pay?: string | null
          signature?: string | null
          ssn_or_itin?: boolean | null
          state?: string | null
          status?: Database["public"]["Enums"]["Status"]
          submission_id?: string | null
          submitted_log?: string[] | null
          tc_tcpa?: boolean | null
          training_completed_at?: string | null
          type?: Database["public"]["Enums"]["Provider Type"] | null
          w9?: string[] | null
          w9_approved_at?: string | null
          w9_files?: Json | null
          w9_signed_at?: string | null
          w9_verified_at?: string | null
          waitlist?: boolean | null
          when_families_pay?: string | null
          zip?: string | null
        }
        Update: {
          accepted_forms_of_payment?: Json | null
          address_1?: string | null
          address_2?: string | null
          application_reviewed_at?: string | null
          approved?: boolean | null
          approved_at?: string | null
          attendance_tracking_system?: Json | null
          background_check_links?: string[] | null
          background_check_passed_at?: string | null
          background_check_started_at?: string | null
          background_check_submitted_at?: string | null
          benefits_impact_follow_up?: boolean | null
          car_failure_to_report?: string | null
          car_immediately_report?: string | null
          care_location_address_1?: string | null
          care_location_address_2?: string | null
          care_location_city?: string | null
          care_location_state?: string | null
          care_location_zip?: string | null
          care_setting?: string | null
          cares_for_disabled?: boolean | null
          ccpr_activities?: string | null
          ccpr_materials_and_equipment?: string | null
          ccpr_meals?: string | null
          ccpr_medications?: string | null
          ccpr_transportation?: string | null
          child_safety_module_training_completed_at?: string | null
          children_under_2?: number | null
          city?: string | null
          clerk_user_id?: string | null
          cpr_certified?: string | null
          cpr_online_training_completed_at?: string | null
          cpr_training_link?: string | null
          cpr_upload?: string[] | null
          cpr_upload_files?: Json | null
          cpr_uploaded_at?: string | null
          cpr_verified_at?: string | null
          created_at?: string
          current_benefits?: Json | null
          custom_message?: string | null
          custom_message_type?: Database["public"]["Enums"]["Custom Message Type"]
          email?: string | null
          enterprise_zone_type?: string | null
          family_invited_at?: string | null
          first_name?: string | null
          gpqc_capabilities?: string | null
          gpqc_children_removed?: string | null
          gpqc_experienced?: string | null
          gpqc_parental_access?: string | null
          gpqc_punishment?: string | null
          had_error_at?: string | null
          home_safety_and_injury_prevention_training_completed_at?:
            | string
            | null
          hsce_communicable_diseases?: string | null
          hsce_disasters?: string | null
          hsce_emergencies?: string | null
          hsce_play_areas?: string | null
          hsce_protect_from_dangers?: string | null
          hsce_working_detectors?: string | null
          id?: number
          id_upload_files?: Json | null
          id_verified_at?: string | null
          identification_verified_at?: string | null
          is_test?: boolean | null
          jdp_admin_links?: string[] | null
          jdp_applicant_ids?: string[] | null
          jdp_file_numbers?: string[] | null
          jdp_order_ids?: string[] | null
          last_name?: string | null
          license_name?: string | null
          license_number?: string | null
          license_required?: boolean | null
          license_type?: string | null
          licensed?: boolean | null
          link_id?: string | null
          lock_application?: boolean
          "monthly_rate_0-18"?: string | null
          "monthly_rate_19-36"?: string | null
          name?: string | null
          not_related_more_than_one_family?: boolean | null
          notes?: string | null
          number_of_children?: number | null
          onboarding_call_at?: string | null
          other_adults?: Json | null
          other_background_checks_sent_emails?: string[] | null
          owner?: string | null
          participation_survey_1_received_at?: string | null
          participation_survey_1_reminder_at?: string | null
          participation_survey_1_sent_at?: string | null
          participation_survey_2_received_at?: string | null
          participation_survey_2_reminder_at?: string | null
          participation_survey_2_sent_at?: string | null
          participation_survey_3_received_at?: string | null
          participation_survey_3_reminder_at?: string | null
          participation_survey_3_sent_at?: string | null
          pay_per_month?: number | null
          pay_rate?: string | null
          pay_types?: Json | null
          payment_enabled?: boolean
          payment_method_configured_at?: string | null
          payment_platform_account_created_at?: string | null
          pdis_emergency_preparedness_completed_at?: string | null
          pdis_first_aid_cpr_completed_at?: string | null
          pdis_infant_safe_sleep_completed_at?: string | null
          pdis_injury_prevention_completed_at?: string | null
          pdis_medication_administration_part_one_completed_at?: string | null
          pdis_preventing_child_abuse_completed_at?: string | null
          pdis_preventing_shaken_baby_completed_at?: string | null
          pdis_recognizing_impact_of_bias_completed_at?: string | null
          pdis_standard_precautions_completed_at?: string | null
          phone?: string | null
          portal_invite_accepted_at?: string | null
          portal_invite_sent_at?: string | null
          post_participation_survey_received_at?: string | null
          post_participation_survey_reminder_at?: string | null
          post_participation_survey_sent_at?: string | null
          post_payment_survey_received_at?: string | null
          post_payment_survey_reminder_at?: string | null
          post_payment_survey_sent_at?: string | null
          preferred_language?: string | null
          rates_configured_at?: string | null
          red_cross_code?: string | null
          referrer_cap_family?: string | null
          related_to_all_children?: boolean | null
          related_to_relationship?: string | null
          related_to_some_children?: boolean | null
          safe_sleep_for_infants_training_completed_at?: string | null
          safety_attestation?: string[] | null
          satisfaction_current_experience?: string | null
          satisfaction_current_experience_explanation?: string | null
          satisfaction_current_pay?: string | null
          signature?: string | null
          ssn_or_itin?: boolean | null
          state?: string | null
          status?: Database["public"]["Enums"]["Status"]
          submission_id?: string | null
          submitted_log?: string[] | null
          tc_tcpa?: boolean | null
          training_completed_at?: string | null
          type?: Database["public"]["Enums"]["Provider Type"] | null
          w9?: string[] | null
          w9_approved_at?: string | null
          w9_files?: Json | null
          w9_signed_at?: string | null
          w9_verified_at?: string | null
          waitlist?: boolean | null
          when_families_pay?: string | null
          zip?: string | null
        }
        Relationships: []
      }
      provider_application: {
        Row: {
          accepted_forms_of_payment: Json | null
          address_1: string | null
          address_2: string | null
          address_county: string | null
          address_latitude: number | null
          address_longitude: number | null
          application_submitted_at: string | null
          attendance_tracking_system: Json | null
          attestation_signature: string | null
          benefits_impact_follow_up: boolean | null
          car_failure_to_report: string | null
          car_immediately_report: string | null
          care_location_address_1: string | null
          care_location_address_2: string | null
          care_location_city: string | null
          care_location_county: string | null
          care_location_latitude: number | null
          care_location_longitude: number | null
          care_location_state: string | null
          care_location_zip: string | null
          care_setting: string | null
          cares_for_disabled: boolean | null
          ccpr_activities: string | null
          ccpr_materials_and_equipment: string | null
          ccpr_meals: string | null
          ccpr_medications: string | null
          ccpr_transportation: string | null
          children_under_2: number | null
          city: string | null
          clerk_user_id: string | null
          cpr_certified: string | null
          cpr_upload: string[] | null
          cpr_upload_files: Json | null
          created_at: string
          current_benefits: Json | null
          email: string | null
          first_name: string | null
          gpqc_capabilities: string | null
          gpqc_children_removed: string | null
          gpqc_experienced: string | null
          gpqc_parental_access: string | null
          gpqc_punishment: string | null
          has_other_adults: boolean | null
          hsce_communicable_diseases: string | null
          hsce_disasters: string | null
          hsce_emergencies: string | null
          hsce_play_areas: string | null
          hsce_protect_from_dangers: string | null
          hsce_working_detectors: string | null
          id: number
          id_upload: Json | null
          id_upload_files: Json | null
          is_test: boolean | null
          last_name: string | null
          last_update_date: string | null
          license_name: string | null
          license_number: string | null
          license_type: string | null
          licensed: boolean | null
          link_id: string | null
          "monthly_rate_0-18": string | null
          "monthly_rate_19-36": string | null
          multiple_families: boolean | null
          number_of_children: number | null
          other_adults: Json | null
          pay_per_month: number | null
          pay_rate: string | null
          pay_types: Json | null
          phone: string | null
          preferred_language: string | null
          referrer_cap_family: string | null
          related_to_all_children: boolean | null
          related_to_relationship: string | null
          related_to_some_children: boolean | null
          satisfaction_current_experience: string | null
          satisfaction_current_experience_explanation: string | null
          satisfaction_current_pay: string | null
          signature: string | null
          ssn_or_itin: boolean | null
          state: string | null
          submission_edit_url: string | null
          submission_id: string | null
          submission_ip: string | null
          submission_url: string | null
          tc_accurate_and_truthful: boolean | null
          tc_asked_questions: boolean | null
          tc_background_check: boolean | null
          tc_privacy_policy: boolean | null
          tc_read_form: boolean | null
          tc_tcpa: boolean | null
          tc_terms_and_conditions: boolean | null
          tc_voluntary_participation: boolean | null
          time_tracker: string | null
          w9: string[] | null
          w9_files: Json | null
          when_families_pay: string | null
          zip: string | null
        }
        Insert: {
          accepted_forms_of_payment?: Json | null
          address_1?: string | null
          address_2?: string | null
          address_county?: string | null
          address_latitude?: number | null
          address_longitude?: number | null
          application_submitted_at?: string | null
          attendance_tracking_system?: Json | null
          attestation_signature?: string | null
          benefits_impact_follow_up?: boolean | null
          car_failure_to_report?: string | null
          car_immediately_report?: string | null
          care_location_address_1?: string | null
          care_location_address_2?: string | null
          care_location_city?: string | null
          care_location_county?: string | null
          care_location_latitude?: number | null
          care_location_longitude?: number | null
          care_location_state?: string | null
          care_location_zip?: string | null
          care_setting?: string | null
          cares_for_disabled?: boolean | null
          ccpr_activities?: string | null
          ccpr_materials_and_equipment?: string | null
          ccpr_meals?: string | null
          ccpr_medications?: string | null
          ccpr_transportation?: string | null
          children_under_2?: number | null
          city?: string | null
          clerk_user_id?: string | null
          cpr_certified?: string | null
          cpr_upload?: string[] | null
          cpr_upload_files?: Json | null
          created_at?: string
          current_benefits?: Json | null
          email?: string | null
          first_name?: string | null
          gpqc_capabilities?: string | null
          gpqc_children_removed?: string | null
          gpqc_experienced?: string | null
          gpqc_parental_access?: string | null
          gpqc_punishment?: string | null
          has_other_adults?: boolean | null
          hsce_communicable_diseases?: string | null
          hsce_disasters?: string | null
          hsce_emergencies?: string | null
          hsce_play_areas?: string | null
          hsce_protect_from_dangers?: string | null
          hsce_working_detectors?: string | null
          id?: number
          id_upload?: Json | null
          id_upload_files?: Json | null
          is_test?: boolean | null
          last_name?: string | null
          last_update_date?: string | null
          license_name?: string | null
          license_number?: string | null
          license_type?: string | null
          licensed?: boolean | null
          link_id?: string | null
          "monthly_rate_0-18"?: string | null
          "monthly_rate_19-36"?: string | null
          multiple_families?: boolean | null
          number_of_children?: number | null
          other_adults?: Json | null
          pay_per_month?: number | null
          pay_rate?: string | null
          pay_types?: Json | null
          phone?: string | null
          preferred_language?: string | null
          referrer_cap_family?: string | null
          related_to_all_children?: boolean | null
          related_to_relationship?: string | null
          related_to_some_children?: boolean | null
          satisfaction_current_experience?: string | null
          satisfaction_current_experience_explanation?: string | null
          satisfaction_current_pay?: string | null
          signature?: string | null
          ssn_or_itin?: boolean | null
          state?: string | null
          submission_edit_url?: string | null
          submission_id?: string | null
          submission_ip?: string | null
          submission_url?: string | null
          tc_accurate_and_truthful?: boolean | null
          tc_asked_questions?: boolean | null
          tc_background_check?: boolean | null
          tc_privacy_policy?: boolean | null
          tc_read_form?: boolean | null
          tc_tcpa?: boolean | null
          tc_terms_and_conditions?: boolean | null
          tc_voluntary_participation?: boolean | null
          time_tracker?: string | null
          w9?: string[] | null
          w9_files?: Json | null
          when_families_pay?: string | null
          zip?: string | null
        }
        Update: {
          accepted_forms_of_payment?: Json | null
          address_1?: string | null
          address_2?: string | null
          address_county?: string | null
          address_latitude?: number | null
          address_longitude?: number | null
          application_submitted_at?: string | null
          attendance_tracking_system?: Json | null
          attestation_signature?: string | null
          benefits_impact_follow_up?: boolean | null
          car_failure_to_report?: string | null
          car_immediately_report?: string | null
          care_location_address_1?: string | null
          care_location_address_2?: string | null
          care_location_city?: string | null
          care_location_county?: string | null
          care_location_latitude?: number | null
          care_location_longitude?: number | null
          care_location_state?: string | null
          care_location_zip?: string | null
          care_setting?: string | null
          cares_for_disabled?: boolean | null
          ccpr_activities?: string | null
          ccpr_materials_and_equipment?: string | null
          ccpr_meals?: string | null
          ccpr_medications?: string | null
          ccpr_transportation?: string | null
          children_under_2?: number | null
          city?: string | null
          clerk_user_id?: string | null
          cpr_certified?: string | null
          cpr_upload?: string[] | null
          cpr_upload_files?: Json | null
          created_at?: string
          current_benefits?: Json | null
          email?: string | null
          first_name?: string | null
          gpqc_capabilities?: string | null
          gpqc_children_removed?: string | null
          gpqc_experienced?: string | null
          gpqc_parental_access?: string | null
          gpqc_punishment?: string | null
          has_other_adults?: boolean | null
          hsce_communicable_diseases?: string | null
          hsce_disasters?: string | null
          hsce_emergencies?: string | null
          hsce_play_areas?: string | null
          hsce_protect_from_dangers?: string | null
          hsce_working_detectors?: string | null
          id?: number
          id_upload?: Json | null
          id_upload_files?: Json | null
          is_test?: boolean | null
          last_name?: string | null
          last_update_date?: string | null
          license_name?: string | null
          license_number?: string | null
          license_type?: string | null
          licensed?: boolean | null
          link_id?: string | null
          "monthly_rate_0-18"?: string | null
          "monthly_rate_19-36"?: string | null
          multiple_families?: boolean | null
          number_of_children?: number | null
          other_adults?: Json | null
          pay_per_month?: number | null
          pay_rate?: string | null
          pay_types?: Json | null
          phone?: string | null
          preferred_language?: string | null
          referrer_cap_family?: string | null
          related_to_all_children?: boolean | null
          related_to_relationship?: string | null
          related_to_some_children?: boolean | null
          satisfaction_current_experience?: string | null
          satisfaction_current_experience_explanation?: string | null
          satisfaction_current_pay?: string | null
          signature?: string | null
          ssn_or_itin?: boolean | null
          state?: string | null
          submission_edit_url?: string | null
          submission_id?: string | null
          submission_ip?: string | null
          submission_url?: string | null
          tc_accurate_and_truthful?: boolean | null
          tc_asked_questions?: boolean | null
          tc_background_check?: boolean | null
          tc_privacy_policy?: boolean | null
          tc_read_form?: boolean | null
          tc_tcpa?: boolean | null
          tc_terms_and_conditions?: boolean | null
          tc_voluntary_participation?: boolean | null
          time_tracker?: string | null
          w9?: string[] | null
          w9_files?: Json | null
          when_families_pay?: string | null
          zip?: string | null
        }
        Relationships: []
      }
      provider_approval: {
        Row: {
          application_approved_at: string | null
          application_reviewed_at: string | null
          application_submitted_at: string
          attestation_signature: string | null
          background_check_needed: boolean | null
          background_check_passed_at: string | null
          background_check_submitted_at: string | null
          contact_information: Json | null
          cpr_training_completed_at: string | null
          cpr_training_required: boolean | null
          cpr_upload: string[] | null
          enterprise_zone_type: string | null
          first_payment_received_at: string | null
          id: number
          identification_verified_at: string | null
          identity_verified: boolean | null
          is_test: boolean | null
          license_required: Json | null
          not_related_more_than_one_familly: boolean | null
          notes: string | null
          onboarding_call_at: string | null
          owner: string | null
          portal_invite_sent_at: string | null
          post_payment_survey_sent: string | null
          provider_care_setting: string | null
          provider_email: string | null
          provider_name: string | null
          provider_phone: string | null
          provider_zip: string | null
          ready_for_payment: boolean | null
          ready_to_approve: boolean | null
          red_cross_code: string | null
          ruca_area_type: string | null
          safety_attestation_completed_at: string | null
          safety_attestation_needed: boolean | null
          signature: string | null
          status: Database["public"]["Enums"]["Status"] | null
          submission_id: string | null
          usio_account_created_at: string | null
          w9: string[] | null
          w9_approved_at: string | null
          w9_needed: boolean | null
          w9_submitted_at: string | null
          w9_verified: string | null
        }
        Insert: {
          application_approved_at?: string | null
          application_reviewed_at?: string | null
          application_submitted_at: string
          attestation_signature?: string | null
          background_check_needed?: boolean | null
          background_check_passed_at?: string | null
          background_check_submitted_at?: string | null
          contact_information?: Json | null
          cpr_training_completed_at?: string | null
          cpr_training_required?: boolean | null
          cpr_upload?: string[] | null
          enterprise_zone_type?: string | null
          first_payment_received_at?: string | null
          id?: number
          identification_verified_at?: string | null
          identity_verified?: boolean | null
          is_test?: boolean | null
          license_required?: Json | null
          not_related_more_than_one_familly?: boolean | null
          notes?: string | null
          onboarding_call_at?: string | null
          owner?: string | null
          portal_invite_sent_at?: string | null
          post_payment_survey_sent?: string | null
          provider_care_setting?: string | null
          provider_email?: string | null
          provider_name?: string | null
          provider_phone?: string | null
          provider_zip?: string | null
          ready_for_payment?: boolean | null
          ready_to_approve?: boolean | null
          red_cross_code?: string | null
          ruca_area_type?: string | null
          safety_attestation_completed_at?: string | null
          safety_attestation_needed?: boolean | null
          signature?: string | null
          status?: Database["public"]["Enums"]["Status"] | null
          submission_id?: string | null
          usio_account_created_at?: string | null
          w9?: string[] | null
          w9_approved_at?: string | null
          w9_needed?: boolean | null
          w9_submitted_at?: string | null
          w9_verified?: string | null
        }
        Update: {
          application_approved_at?: string | null
          application_reviewed_at?: string | null
          application_submitted_at?: string
          attestation_signature?: string | null
          background_check_needed?: boolean | null
          background_check_passed_at?: string | null
          background_check_submitted_at?: string | null
          contact_information?: Json | null
          cpr_training_completed_at?: string | null
          cpr_training_required?: boolean | null
          cpr_upload?: string[] | null
          enterprise_zone_type?: string | null
          first_payment_received_at?: string | null
          id?: number
          identification_verified_at?: string | null
          identity_verified?: boolean | null
          is_test?: boolean | null
          license_required?: Json | null
          not_related_more_than_one_familly?: boolean | null
          notes?: string | null
          onboarding_call_at?: string | null
          owner?: string | null
          portal_invite_sent_at?: string | null
          post_payment_survey_sent?: string | null
          provider_care_setting?: string | null
          provider_email?: string | null
          provider_name?: string | null
          provider_phone?: string | null
          provider_zip?: string | null
          ready_for_payment?: boolean | null
          ready_to_approve?: boolean | null
          red_cross_code?: string | null
          ruca_area_type?: string | null
          safety_attestation_completed_at?: string | null
          safety_attestation_needed?: boolean | null
          signature?: string | null
          status?: Database["public"]["Enums"]["Status"] | null
          submission_id?: string | null
          usio_account_created_at?: string | null
          w9?: string[] | null
          w9_approved_at?: string | null
          w9_needed?: boolean | null
          w9_submitted_at?: string | null
          w9_verified?: string | null
        }
        Relationships: []
      }
      provider_child_mapping: {
        Row: {
          child_id: number
          created_at: string
          id: number
          provider_id: number
        }
        Insert: {
          child_id: number
          created_at?: string
          id?: number
          provider_id: number
        }
        Update: {
          child_id?: number
          created_at?: string
          id?: number
          provider_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "provider_child_mapping_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "child"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "provider_child_mapping_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "provider"
            referencedColumns: ["id"]
          },
        ]
      }
      provider_invitation: {
        Row: {
          accepted: boolean | null
          child_google_sheet_id: number | null
          created_at: string
          email_sent: boolean | null
          id: number
          invite_email: string | null
          opened_at: string | null
          public_id: string | null
          sms_sent: boolean | null
          updated_at: string | null
        }
        Insert: {
          accepted?: boolean | null
          child_google_sheet_id?: number | null
          created_at?: string
          email_sent?: boolean | null
          id?: number
          invite_email?: string | null
          opened_at?: string | null
          public_id?: string | null
          sms_sent?: boolean | null
          updated_at?: string | null
        }
        Update: {
          accepted?: boolean | null
          child_google_sheet_id?: number | null
          created_at?: string
          email_sent?: boolean | null
          id?: number
          invite_email?: string | null
          opened_at?: string | null
          public_id?: string | null
          sms_sent?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      ruca: {
        Row: {
          enterprise_zone_type: string | null
          po_city: string | null
          ruca_area_score: number | null
          ruca_area_type: string | null
          ruca_core_score: number | null
          ruca_core_type: string | null
          state: string | null
          type: string | null
          zip: string
        }
        Insert: {
          enterprise_zone_type?: string | null
          po_city?: string | null
          ruca_area_score?: number | null
          ruca_area_type?: string | null
          ruca_core_score?: number | null
          ruca_core_type?: string | null
          state?: string | null
          type?: string | null
          zip: string
        }
        Update: {
          enterprise_zone_type?: string | null
          po_city?: string | null
          ruca_area_score?: number | null
          ruca_area_type?: string | null
          ruca_core_score?: number | null
          ruca_core_type?: string | null
          state?: string | null
          type?: string | null
          zip?: string
        }
        Relationships: []
      }
      test: {
        Row: {
          clerk_user_id: string | null
          count: number | null
          created_at: string
          id: number
        }
        Insert: {
          clerk_user_id?: string | null
          count?: number | null
          created_at?: string
          id?: number
        }
        Update: {
          clerk_user_id?: string | null
          count?: number | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      family_normalize_core: {
        Args: {
          p_new: Database["public"]["Tables"]["family_application"]["Row"]
        }
        Returns: undefined
      }
      safe_to_jsonb: { Args: { t: string }; Returns: Json }
    }
    Enums: {
      "Custom Message Type": "info" | "warning" | "denial"
      Language: "en" | "es"
      "Provider Type": "ffn" | "center" | "lhb"
      Status:
        | "Approved"
        | "Not Eligible"
        | "Pending"
        | "Hold"
        | "Duplicate"
        | "Waitlist"
        | "Test"
        | "Need More Info"
        | "Expired"
        | "Under Review"
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
    Enums: {
      "Custom Message Type": ["info", "warning", "denial"],
      Language: ["en", "es"],
      "Provider Type": ["ffn", "center", "lhb"],
      Status: [
        "Approved",
        "Not Eligible",
        "Pending",
        "Hold",
        "Duplicate",
        "Waitlist",
        "Test",
        "Need More Info",
        "Expired",
        "Under Review",
      ],
    },
  },
} as const

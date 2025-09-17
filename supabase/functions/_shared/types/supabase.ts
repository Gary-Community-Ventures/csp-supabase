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
      child: {
        Row: {
          created_at: string
          dob: string | null
          family_id: number | null
          first_name: string | null
          first_name_norm: string | null
          guardian_name: string | null
          id: number
          last_name: string | null
          last_name_norm: string | null
          middle_name: string | null
          monthly_allocation: number
          payment_enabled: boolean
          prorated_allocation: number
          provider_name: string | null
          status: Database["public"]["Enums"]["Status"]
          wishlist: boolean | null
        }
        Insert: {
          created_at?: string
          dob?: string | null
          family_id?: number | null
          first_name?: string | null
          first_name_norm?: string | null
          guardian_name?: string | null
          id?: number
          last_name?: string | null
          last_name_norm?: string | null
          middle_name?: string | null
          monthly_allocation?: number
          payment_enabled?: boolean
          prorated_allocation?: number
          provider_name?: string | null
          status?: Database["public"]["Enums"]["Status"]
          wishlist?: boolean | null
        }
        Update: {
          created_at?: string
          dob?: string | null
          family_id?: number | null
          first_name?: string | null
          first_name_norm?: string | null
          guardian_name?: string | null
          id?: number
          last_name?: string | null
          last_name_norm?: string | null
          middle_name?: string | null
          monthly_allocation?: number
          payment_enabled?: boolean
          prorated_allocation?: number
          provider_name?: string | null
          status?: Database["public"]["Enums"]["Status"]
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
      family: {
        Row: {
          approved: string | null
          created_at: string
          id: number
          language: string
          referred_by: string | null
          size: number | null
          submission_id: string | null
          waitlist: boolean | null
          yearly_income: number | null
          zip: string | null
        }
        Insert: {
          approved?: string | null
          created_at?: string
          id?: number
          language: string
          referred_by?: string | null
          size?: number | null
          submission_id?: string | null
          waitlist?: boolean | null
          yearly_income?: number | null
          zip?: string | null
        }
        Update: {
          approved?: string | null
          created_at?: string
          id?: number
          language?: string
          referred_by?: string | null
          size?: number | null
          submission_id?: string | null
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
          created_at: string
          "current_benefits_pre-eligibility": Json | null
          current_benefits_proof: string[] | null
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
          last_name_additional: string | null
          last_name_primary: string | null
          last_update_date: string | null
          link_id: string | null
          other_income_earners: Json | null
          phone_additional: string | null
          phone_primary: string | null
          photo_release: boolean | null
          preferred_language: string | null
          primary_has_income: boolean | null
          proof_of_income: string[] | null
          proof_of_residence: string[] | null
          race_ethnicity_additional: Json | null
          race_ethnicity_primary: Json | null
          referrer_cap_provider: string | null
          signature: string | null
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
          verification_child_age: string[] | null
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
          created_at?: string
          "current_benefits_pre-eligibility"?: Json | null
          current_benefits_proof?: string[] | null
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
          last_name_additional?: string | null
          last_name_primary?: string | null
          last_update_date?: string | null
          link_id?: string | null
          other_income_earners?: Json | null
          phone_additional?: string | null
          phone_primary?: string | null
          photo_release?: boolean | null
          preferred_language?: string | null
          primary_has_income?: boolean | null
          proof_of_income?: string[] | null
          proof_of_residence?: string[] | null
          race_ethnicity_additional?: Json | null
          race_ethnicity_primary?: Json | null
          referrer_cap_provider?: string | null
          signature?: string | null
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
          verification_child_age?: string[] | null
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
          created_at?: string
          "current_benefits_pre-eligibility"?: Json | null
          current_benefits_proof?: string[] | null
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
          last_name_additional?: string | null
          last_name_primary?: string | null
          last_update_date?: string | null
          link_id?: string | null
          other_income_earners?: Json | null
          phone_additional?: string | null
          phone_primary?: string | null
          photo_release?: boolean | null
          preferred_language?: string | null
          primary_has_income?: boolean | null
          proof_of_income?: string[] | null
          proof_of_residence?: string[] | null
          race_ethnicity_additional?: Json | null
          race_ethnicity_primary?: Json | null
          referrer_cap_provider?: string | null
          signature?: string | null
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
          verification_child_age?: string[] | null
          waitlist?: boolean | null
          why_need_child_care?: Json | null
          zip_additional?: string | null
          zip_primary?: string | null
        }
        Relationships: []
      }
      family_approval: {
        Row: {
          child_care_length_additional: string | null
          child_care_length_primary: string | null
          child_care_length_qualified: boolean | null
          created_at: string
          "current_benefits_pre-eligibility": Json | null
          current_benefits_proof: string[] | null
          current_benefits_qualified: boolean | null
          first_name_primary: string | null
          fpl_350_yearly_2025: number | null
          household_size: number | null
          id: number
          income_qualified: boolean | null
          income_yearly: number | null
          last_name_primary: string | null
          no_current_childcare_benefits: Json | null
          no_current_childcare_benefits_qualified: boolean | null
          notes: string | null
          proof_of_income: string | null
          ready_to_approve: boolean | null
          ruca_area_type: string | null
          state_additional: string | null
          state_primary: string | null
          state_resident_qualified: boolean | null
          status: Database["public"]["Enums"]["Status"] | null
          submission_id: string | null
          submitted_at: string | null
          zip_additional: string | null
          zip_primary: string | null
        }
        Insert: {
          child_care_length_additional?: string | null
          child_care_length_primary?: string | null
          child_care_length_qualified?: boolean | null
          created_at?: string
          "current_benefits_pre-eligibility"?: Json | null
          current_benefits_proof?: string[] | null
          current_benefits_qualified?: boolean | null
          first_name_primary?: string | null
          fpl_350_yearly_2025?: number | null
          household_size?: number | null
          id?: number
          income_qualified?: boolean | null
          income_yearly?: number | null
          last_name_primary?: string | null
          no_current_childcare_benefits?: Json | null
          no_current_childcare_benefits_qualified?: boolean | null
          notes?: string | null
          proof_of_income?: string | null
          ready_to_approve?: boolean | null
          ruca_area_type?: string | null
          state_additional?: string | null
          state_primary?: string | null
          state_resident_qualified?: boolean | null
          status?: Database["public"]["Enums"]["Status"] | null
          submission_id?: string | null
          submitted_at?: string | null
          zip_additional?: string | null
          zip_primary?: string | null
        }
        Update: {
          child_care_length_additional?: string | null
          child_care_length_primary?: string | null
          child_care_length_qualified?: boolean | null
          created_at?: string
          "current_benefits_pre-eligibility"?: Json | null
          current_benefits_proof?: string[] | null
          current_benefits_qualified?: boolean | null
          first_name_primary?: string | null
          fpl_350_yearly_2025?: number | null
          household_size?: number | null
          id?: number
          income_qualified?: boolean | null
          income_yearly?: number | null
          last_name_primary?: string | null
          no_current_childcare_benefits?: Json | null
          no_current_childcare_benefits_qualified?: boolean | null
          notes?: string | null
          proof_of_income?: string | null
          ready_to_approve?: boolean | null
          ruca_area_type?: string | null
          state_additional?: string | null
          state_primary?: string | null
          state_resident_qualified?: boolean | null
          status?: Database["public"]["Enums"]["Status"] | null
          submission_id?: string | null
          submitted_at?: string | null
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
          last_name: string | null
          phone_number: string | null
          state: string | null
          type: string | null
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
          last_name?: string | null
          phone_number?: string | null
          state?: string | null
          type?: string | null
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
          last_name?: string | null
          phone_number?: string | null
          state?: string | null
          type?: string | null
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
          approved: boolean | null
          approved_at: string | null
          attendance_tracking_system: Json | null
          care_location_address_1: string | null
          care_location_address_2: string | null
          care_location_city: string | null
          care_location_state: string | null
          care_location_zip: string | null
          care_setting: string | null
          child_safety_module_training_completed_at: string | null
          children_under_2: number | null
          city: string | null
          cpr_certified: string | null
          cpr_online_training_completed_at: string | null
          cpr_training_link: string | null
          cpr_upload: string[] | null
          created_at: string
          email: string | null
          first_name: string | null
          home_safety_and_injury_prevention_training_completed_at: string | null
          id: number
          language: Database["public"]["Enums"]["Language"]
          last_name: string | null
          license_name: string | null
          license_number: string | null
          license_type: string | null
          licensed: boolean | null
          link_id: string | null
          "monthly_rate_0-18": string | null
          "monthly_rate_19-36": string | null
          name: string | null
          number_of_children: number | null
          other_adults: Json | null
          pay_per_month: number | null
          pay_rate: string | null
          pay_types: Json | null
          payment_enabled: boolean
          phone: string | null
          preferred_language: string | null
          referrer_cap_family: string | null
          related_to_all_children: boolean | null
          related_to_relationship: string | null
          related_to_some_children: boolean | null
          safe_sleep_for_infants_training_completed_at: string | null
          satisfaction_current_experience: string | null
          satisfaction_current_experience_explanation: string | null
          satisfaction_current_pay: string | null
          ssn_or_itin: boolean | null
          state: string | null
          status: Database["public"]["Enums"]["Status"]
          type: Database["public"]["Enums"]["Provider Type"] | null
          w9: string[] | null
          waitlist: boolean | null
          when_families_pay: string | null
          zip: string | null
        }
        Insert: {
          accepted_forms_of_payment?: Json | null
          address_1?: string | null
          address_2?: string | null
          approved?: boolean | null
          approved_at?: string | null
          attendance_tracking_system?: Json | null
          care_location_address_1?: string | null
          care_location_address_2?: string | null
          care_location_city?: string | null
          care_location_state?: string | null
          care_location_zip?: string | null
          care_setting?: string | null
          child_safety_module_training_completed_at?: string | null
          children_under_2?: number | null
          city?: string | null
          cpr_certified?: string | null
          cpr_online_training_completed_at?: string | null
          cpr_training_link?: string | null
          cpr_upload?: string[] | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          home_safety_and_injury_prevention_training_completed_at?:
            | string
            | null
          id?: number
          language?: Database["public"]["Enums"]["Language"]
          last_name?: string | null
          license_name?: string | null
          license_number?: string | null
          license_type?: string | null
          licensed?: boolean | null
          link_id?: string | null
          "monthly_rate_0-18"?: string | null
          "monthly_rate_19-36"?: string | null
          name?: string | null
          number_of_children?: number | null
          other_adults?: Json | null
          pay_per_month?: number | null
          pay_rate?: string | null
          pay_types?: Json | null
          payment_enabled?: boolean
          phone?: string | null
          preferred_language?: string | null
          referrer_cap_family?: string | null
          related_to_all_children?: boolean | null
          related_to_relationship?: string | null
          related_to_some_children?: boolean | null
          safe_sleep_for_infants_training_completed_at?: string | null
          satisfaction_current_experience?: string | null
          satisfaction_current_experience_explanation?: string | null
          satisfaction_current_pay?: string | null
          ssn_or_itin?: boolean | null
          state?: string | null
          status?: Database["public"]["Enums"]["Status"]
          type?: Database["public"]["Enums"]["Provider Type"] | null
          w9?: string[] | null
          waitlist?: boolean | null
          when_families_pay?: string | null
          zip?: string | null
        }
        Update: {
          accepted_forms_of_payment?: Json | null
          address_1?: string | null
          address_2?: string | null
          approved?: boolean | null
          approved_at?: string | null
          attendance_tracking_system?: Json | null
          care_location_address_1?: string | null
          care_location_address_2?: string | null
          care_location_city?: string | null
          care_location_state?: string | null
          care_location_zip?: string | null
          care_setting?: string | null
          child_safety_module_training_completed_at?: string | null
          children_under_2?: number | null
          city?: string | null
          cpr_certified?: string | null
          cpr_online_training_completed_at?: string | null
          cpr_training_link?: string | null
          cpr_upload?: string[] | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          home_safety_and_injury_prevention_training_completed_at?:
            | string
            | null
          id?: number
          language?: Database["public"]["Enums"]["Language"]
          last_name?: string | null
          license_name?: string | null
          license_number?: string | null
          license_type?: string | null
          licensed?: boolean | null
          link_id?: string | null
          "monthly_rate_0-18"?: string | null
          "monthly_rate_19-36"?: string | null
          name?: string | null
          number_of_children?: number | null
          other_adults?: Json | null
          pay_per_month?: number | null
          pay_rate?: string | null
          pay_types?: Json | null
          payment_enabled?: boolean
          phone?: string | null
          preferred_language?: string | null
          referrer_cap_family?: string | null
          related_to_all_children?: boolean | null
          related_to_relationship?: string | null
          related_to_some_children?: boolean | null
          safe_sleep_for_infants_training_completed_at?: string | null
          satisfaction_current_experience?: string | null
          satisfaction_current_experience_explanation?: string | null
          satisfaction_current_pay?: string | null
          ssn_or_itin?: boolean | null
          state?: string | null
          status?: Database["public"]["Enums"]["Status"]
          type?: Database["public"]["Enums"]["Provider Type"] | null
          w9?: string[] | null
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
          application_submitted_at: string | null
          attendance_tracking_system: Json | null
          attestation_signature: string | null
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
          children_under_2: number | null
          city: string | null
          cpr_certified: string | null
          cpr_upload: string[] | null
          created_at: string
          current_benefits: Json | null
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
          id_upload: Json | null
          last_name: string | null
          last_update_date: string | null
          license_name: string | null
          license_number: string | null
          license_type: string | null
          licensed: boolean | null
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
          when_families_pay: string | null
          zip: string | null
        }
        Insert: {
          accepted_forms_of_payment?: Json | null
          address_1?: string | null
          address_2?: string | null
          application_submitted_at?: string | null
          attendance_tracking_system?: Json | null
          attestation_signature?: string | null
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
          children_under_2?: number | null
          city?: string | null
          cpr_certified?: string | null
          cpr_upload?: string[] | null
          created_at?: string
          current_benefits?: Json | null
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
          id_upload?: Json | null
          last_name?: string | null
          last_update_date?: string | null
          license_name?: string | null
          license_number?: string | null
          license_type?: string | null
          licensed?: boolean | null
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
          when_families_pay?: string | null
          zip?: string | null
        }
        Update: {
          accepted_forms_of_payment?: Json | null
          address_1?: string | null
          address_2?: string | null
          application_submitted_at?: string | null
          attendance_tracking_system?: Json | null
          attestation_signature?: string | null
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
          children_under_2?: number | null
          city?: string | null
          cpr_certified?: string | null
          cpr_upload?: string[] | null
          created_at?: string
          current_benefits?: Json | null
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
          id_upload?: Json | null
          last_name?: string | null
          last_update_date?: string | null
          license_name?: string | null
          license_number?: string | null
          license_type?: string | null
          licensed?: boolean | null
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
          cpr_training_completed_at: string | null
          cpr_training_required: boolean | null
          cpr_upload: string[] | null
          first_payment_received_at: string | null
          id: number
          notes: string | null
          onboarding_call_at: string | null
          post_payment_survey_sent: string | null
          provider_care_setting: string | null
          provider_email: string | null
          provider_name: string | null
          provider_phone: string | null
          ready_to_approve: boolean | null
          red_cross_code: string | null
          safety_attestation_completed_at: string | null
          safety_attestation_needed: boolean | null
          status: Database["public"]["Enums"]["Status"] | null
          submission_id: string | null
          usio_account_created_at: string | null
          w9: string[] | null
          w9_approved_at: string | null
          w9_needed: boolean | null
          w9_submitted_at: string | null
        }
        Insert: {
          application_approved_at?: string | null
          application_reviewed_at?: string | null
          application_submitted_at: string
          attestation_signature?: string | null
          background_check_needed?: boolean | null
          background_check_passed_at?: string | null
          background_check_submitted_at?: string | null
          cpr_training_completed_at?: string | null
          cpr_training_required?: boolean | null
          cpr_upload?: string[] | null
          first_payment_received_at?: string | null
          id?: number
          notes?: string | null
          onboarding_call_at?: string | null
          post_payment_survey_sent?: string | null
          provider_care_setting?: string | null
          provider_email?: string | null
          provider_name?: string | null
          provider_phone?: string | null
          ready_to_approve?: boolean | null
          red_cross_code?: string | null
          safety_attestation_completed_at?: string | null
          safety_attestation_needed?: boolean | null
          status?: Database["public"]["Enums"]["Status"] | null
          submission_id?: string | null
          usio_account_created_at?: string | null
          w9?: string[] | null
          w9_approved_at?: string | null
          w9_needed?: boolean | null
          w9_submitted_at?: string | null
        }
        Update: {
          application_approved_at?: string | null
          application_reviewed_at?: string | null
          application_submitted_at?: string
          attestation_signature?: string | null
          background_check_needed?: boolean | null
          background_check_passed_at?: string | null
          background_check_submitted_at?: string | null
          cpr_training_completed_at?: string | null
          cpr_training_required?: boolean | null
          cpr_upload?: string[] | null
          first_payment_received_at?: string | null
          id?: number
          notes?: string | null
          onboarding_call_at?: string | null
          post_payment_survey_sent?: string | null
          provider_care_setting?: string | null
          provider_email?: string | null
          provider_name?: string | null
          provider_phone?: string | null
          ready_to_approve?: boolean | null
          red_cross_code?: string | null
          safety_attestation_completed_at?: string | null
          safety_attestation_needed?: boolean | null
          status?: Database["public"]["Enums"]["Status"] | null
          submission_id?: string | null
          usio_account_created_at?: string | null
          w9?: string[] | null
          w9_approved_at?: string | null
          w9_needed?: boolean | null
          w9_submitted_at?: string | null
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
      staging_family_application_json: {
        Row: {
          child_current_care_additional: string | null
          child_current_care_primary: string | null
          child_language_additional: string | null
          child_language_primary: string | null
          child_race_ethnicity_additional: string | null
          child_race_ethnicity_primary: string | null
          race_ethnicity_additional: string | null
          race_ethnicity_primary: string | null
          submission_id: string
          why_need_child_care: string | null
        }
        Insert: {
          child_current_care_additional?: string | null
          child_current_care_primary?: string | null
          child_language_additional?: string | null
          child_language_primary?: string | null
          child_race_ethnicity_additional?: string | null
          child_race_ethnicity_primary?: string | null
          race_ethnicity_additional?: string | null
          race_ethnicity_primary?: string | null
          submission_id: string
          why_need_child_care?: string | null
        }
        Update: {
          child_current_care_additional?: string | null
          child_current_care_primary?: string | null
          child_language_additional?: string | null
          child_language_primary?: string | null
          child_race_ethnicity_additional?: string | null
          child_race_ethnicity_primary?: string | null
          race_ethnicity_additional?: string | null
          race_ethnicity_primary?: string | null
          submission_id?: string
          why_need_child_care?: string | null
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
      Language: "en" | "es"
      "Provider Type": "ffn" | "center" | "lhb"
      Status:
        | "Approved"
        | "Not Eligible"
        | "Pending"
        | "Hold"
        | "Duplicate"
        | "Waitlist"
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
      Language: ["en", "es"],
      "Provider Type": ["ffn", "center", "lhb"],
      Status: [
        "Approved",
        "Not Eligible",
        "Pending",
        "Hold",
        "Duplicate",
        "Waitlist",
      ],
    },
  },
} as const

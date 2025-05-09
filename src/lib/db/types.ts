export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      invitee_groups: {
        Row: {
          attending: boolean | null
          created_at: string
          description: string
          handle: string
          id: number
        }
        Insert: {
          attending?: boolean | null
          created_at?: string
          description: string
          handle?: string
          id?: number
        }
        Update: {
          attending?: boolean | null
          created_at?: string
          description?: string
          handle?: string
          id?: number
        }
        Relationships: []
      }
      invitees: {
        Row: {
          created_at: string
          id: number
          invitee_group_id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          invitee_group_id: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          invitee_group_id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "invitees_invitee_group_id_fkey"
            columns: ["invitee_group_id"]
            isOneToOne: false
            referencedRelation: "invitee_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          created_at: string
          description: string | null
          id: number
          image_url: string | null
          name: string
          payment_code: string | null
          payment_qr_code: string | null
          payment_url: string
          price: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          image_url?: string | null
          name: string
          payment_code?: string | null
          payment_qr_code?: string | null
          payment_url: string
          price: number
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          image_url?: string | null
          name?: string
          payment_code?: string | null
          payment_qr_code?: string | null
          payment_url?: string
          price?: number
        }
        Relationships: []
      }
      qr_codes: {
        Row: {
          created_at: string
          description: string | null
          destination_url: string
          id: number
          image_url: string
          invitee_group_id: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          destination_url: string
          id?: number
          image_url: string
          invitee_group_id?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          destination_url?: string
          id?: number
          image_url?: string
          invitee_group_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "qr_codes_invitee_group_id_fkey"
            columns: ["invitee_group_id"]
            isOneToOne: false
            referencedRelation: "invitee_groups"
            referencedColumns: ["id"]
          },
        ]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

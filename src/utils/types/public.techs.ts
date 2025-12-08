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
      techs: {
        Row: {
          id: number
          ownedId: number
          character: string
          tech_type: string
          tech: Json
        }
        Insert: {
          id?: never
          ownedId?: never
          character: string
          tech_type: string
          tech: Json
        }
        Update: {
          id?: never
          ownedId?: never
          character?: string
          tech_type?: string
          tech?: Json
        }
      }
    }
  }
}

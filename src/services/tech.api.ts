import { createServerFn } from '@tanstack/react-start'
import { getSupabaseServerClient } from '@/utils/supabase/server'

export const addTech = createServerFn()
  .inputValidator(
    (data: { character: string; boxTitle: string; tech: { id: string } }) =>
      data,
  )
  .handler(async ({ data }) => {
    const supabase = getSupabaseServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user?.identities?.[0]?.user_id) {
      throw new Error('User identity not found')
    }

    const { data: tech, error } = await supabase.from('techs').insert([
      {
        user_id: user.identities[0].user_id,
        character: data.character,
        tech_type: data.boxTitle,
        tech: data.tech,
      },
    ])

    if (error) {
      throw new Error(error.message)
    }

    return tech
  })

export const deleteTech = createServerFn()
  .inputValidator((data: { getSelectedRow: Array<any> }) => data)
  .handler(async ({ data }) => {
    const supabase = getSupabaseServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user?.identities?.[0]?.user_id) {
      throw new Error('User identity not found')
    }

    const { error } = await supabase
      .from('techs')
      .delete()
      .eq('tech ->> id', data.getSelectedRow[0].id)
      .eq('user_id', user.identities[0].user_id)

    if (error) {
      throw new Error('Delete not possible')
    }

    return { success: true }
  })

export const getTech = createServerFn()
  .inputValidator((data: { character: string }) => data)
  .handler(async ({ data }) => {
    const supabase = getSupabaseServerClient()

    const { data: tech, error } = await supabase
      .from('techs')
      .select()
      .eq('character', data.character)

    if (error) {
      throw new Error(error.message)
    }

    return tech
  })

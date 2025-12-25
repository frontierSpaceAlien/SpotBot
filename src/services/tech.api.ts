import { createServerFn } from '@tanstack/react-start'
import { getSupabaseServerClient } from '@/utils/supabase/server'

export const addTech = createServerFn()
  .inputValidator(
    (data: {
      character: string
      boxTitle: string
      tech: {
        id: string
      }
    }) => data,
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
  .inputValidator((data: { getSelectedRow: any }) => data)
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
      .eq('tech ->> id', data.getSelectedRow.id)
      .eq('user_id', user.identities[0].user_id)

    if (error) {
      throw new Error('Delete not possible')
    }

    return { success: true }
  })

export const editTech = createServerFn()
  .inputValidator(
    (data: {
      character: string
      boxTitle: string
      tech: {
        id: string
        combo: string
        damage: number
        advantage: number
        screenPosition: string
        ender: string
        frameKill: string
        meaty: string
        frameOnHit: string
        frameOnBlock: string
        notes: string
      }
    }) => data,
  )
  .handler(async ({ data }) => {
    const supabase = getSupabaseServerClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user?.identities?.[0]?.user_id) {
      throw new Error('User identity not found')
    }

    if (data.boxTitle === 'combos/bnb') {
      const { data: updatedTech, error } = await supabase
        .from('techs')
        .update({
          tech: {
            id: data.tech.id,
            combo: data.tech.combo,
            damage: data.tech.damage,
            advantage: data.tech.advantage,
            notes: data.tech.notes,
          },
        })
        .eq('tech ->> id', data.tech.id)
        .eq('user_id', user.identities[0].user_id)

      if (error) {
        throw new Error(error.message)
      }
      return updatedTech
    } else if (data.boxTitle === 'oki/setplay') {
      const { data: updatedTech, error } = await supabase
        .from('techs')
        .update({
          tech: {
            id: data.tech.id,
            screenPosition: data.tech.screenPosition,
            ender: data.tech.ender,
            frameKill: data.tech.frameKill,
            meaty: data.tech.meaty,
            frameOnHit: data.tech.frameOnHit,
            frameOnBlock: data.tech.frameOnBlock,
            notes: data.tech.notes,
          },
        })
        .eq('tech ->> id', data.tech.id)
        .eq('user_id', user.identities[0].user_id)

      if (error) {
        throw new Error(error.message)
      }
      return updatedTech
    }
  })

export const getTech = createServerFn()
  .inputValidator((data: { character: string }) => data)
  .handler(async ({ data }) => {
    const supabase = getSupabaseServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user?.identities?.[0]?.user_id) {
      throw new Error('User identity not found')
    }

    const { data: tech, error } = await supabase
      .from('techs')
      .select()
      .eq('user_id', user.identities[0].user_id)
      .eq('character', data.character)

    if (error) {
      throw new Error(error.message)
    }

    return tech
  })

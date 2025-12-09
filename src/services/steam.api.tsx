import { createServerFn } from '@tanstack/react-start'

export const fetchNewsForApp = createServerFn().handler(async () => {
  const response = await fetch(
    'https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=1364780&count=10&maxlength=300&format=json',
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.STEAM_WEB_API_KEY}`,
      },
    },
  )
  if (!response.ok) {
    throw new Error(`Field to fetch news:  ${response.statusText}`)
  }

  return response.json()
})

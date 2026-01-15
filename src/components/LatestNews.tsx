interface LatestNewsProps {
  data: any
  pending: any
  error: any
}

export default function LatestNews({ data, pending, error }: LatestNewsProps) {
  return (
    <div className="">
      <div className="p-5 mt-6 border border-[#363736] rounded rounded-b-none border-b-0 font-semibold">
        Latest News
      </div>
      <div className="border border-[#363736] rounded rounded-t-none rounded-b-none p-2 max-h-40 overflow-y-auto scrollbar ">
        {pending ? (
          <>
            <div>Loading...</div>
            {/* <div className="text-red-400">Steam Web API offline</div>
            <a
              href={'https://steamstat.us'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline"
            >
              Current Steam status
            </a> */}
          </>
        ) : (
          data.appnews.newsitems.map((e: any) => {
            if (e.feedname === 'steam_community_announcements') {
              return (
                <div key={e.date} className="text-blue-500 hover:underline">
                  <a href={e.url} target="_blank" rel="noopener noreferrer">
                    {e.title}
                  </a>
                </div>
              )
            }
          })
        )}
      </div>
      <div className="font-semibold text-blue-500 hover:underline border border-[#363736] border-t-0 p-2">
        <a
          href="https://store.steampowered.com/news/app/1364780"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All Latest News
        </a>
      </div>
    </div>
  )
}

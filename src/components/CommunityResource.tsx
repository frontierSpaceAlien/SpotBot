export default function CommunityResource() {
  return (
    <div>
      <div className="border border-[#363736] p-2 rounded rounded-b-none mt-5 uppercase font-semibold">
        community channels
      </div>
      <div>
        <div className="flex border border-[#363736] rounded rounded-b-none rounded-t-none">
          <div className="w-50 p-2 border border-b-0 border-t-0 border-l-0 border-[#363736]">
            Character Resources
          </div>
          <div className="p-2">
            <a
              className="text-blue-500 text-fg-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wiki.supercombo.gg/w/SuperCombo_Wiki:Community_portal/Discords/Character#Street_Fighter_6"
            >
              SF6 Character Discords
            </a>
          </div>
        </div>
        <div className="flex border border-[#363736]  rounded rounded-t-none">
          <div className="w-50 p-2 border border-b-0 border-t-0 border-l-0 border-[#363736]">
            Wiki
          </div>
          <div className="p-2">
            <a
              className="text-blue-500 text-fg-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wiki.supercombo.gg/w/Street_Fighter_6"
            >
              SF6 Wiki
            </a>
          </div>
        </div>
        <div className="flex border border-[#363736]  rounded rounded-t-none">
          <div className="w-50 p-2 border border-b-0 border-t-0 border-l-0 border-[#363736]">
            Resource Hub
          </div>
          <div className="p-2">
            <a
              className="text-blue-500 text-fg-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/KcqKdDncrQ"
            >
              SF6 Resource Hub Discord
            </a>
          </div>
        </div>
        <div className="flex border border-[#363736]  rounded rounded-t-none">
          <div className="w-50 p-2 border border-b-0 border-t-0 border-l-0 border-[#363736]">
            r/StreetFighter Subreddit
          </div>
          <div className="p-2">
            <a
              className="text-blue-500 text-fg-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.reddit.com/r/StreetFighter/"
            >
              SF Subreddit
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

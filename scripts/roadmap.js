$(document).ready(function () {
  const roadmapData = [
    {
      title: "PHASE 1",
      content: [
        "Website Launch",
        "Audits InterFi Network",
        "5,000 Telegram Members",
        "Whitelisting Event For Pre-sale",
        "Community Marketing Fund",
        "Pre-sale on PinkSale - KYC - Audit - AMA",
        "Pancakeswap listing",
        "2,000 Holders",
      ],
    },
    {
      title: "PHASE 2",
      content: [
        "CoinGecko Listing",
        "CoinMarketCap Listing",
        "15,000 Telegram Members",
        "5,000 Holders",
        "Research Game and NFT",
        "NFT Character Design",
        "Design NFT Spaceship",
        "Initial CEX Listings (Hotbit, Bilaxy, CoinTiger)",
      ],
    },
    {
      title: "PHASE 3",
      content: [
        "45,000 Telegram Members",
        "15,000 Holders",
        "Design a map of the universe",
        "Launch ShibaMetaverse NFT Character sale",
        "Launch ShibaMetaverse NFT Spaceship sale",
        "Release Shiba Metaverse Market",
        "NFT Farming",
        "Release Shiba Metaverse 2D on Android",
        "Updated Roadmap",
      ],
    },
  ];

  const elements = roadmapData.map(
    (roadmap, index) => `<div class="roadmap-box">
  <span></span>
  <div class="roadmap-content">
    <h2>${roadmap.title}</h2>
    <ul>
    <li>${roadmap.content[0]}</li>
    <li>${roadmap.content[1]}</li>
    <li>${roadmap.content[2]}</li>
    <li>${roadmap.content[3]}</li>
    <li>${roadmap.content[4]}</li>
    <li>${roadmap.content[5]}</li>
    <li>${roadmap.content[6]}</li>
    <li>${roadmap.content[7]}</li>
    ${index === 2 ? `<li>${roadmap.content[8]}</li>` : ""}
    </ul>
  </div>
  </div>`
  );
  $(".roadmap-wrapper").append(elements);
});

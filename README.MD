# SocialFi NFT Platform

This repository is a comprehensive codebase for the SocialFi NFT platform, consisting of three main components: `frontend marketplace`, `minterBuilder`, and `smartcontract`. Each component serves a unique purpose in facilitating a social-to-earn NFT ecosystem where users can mint NFTs of images, comment, and earn rewards based on interaction and engagement.

## Diagrams

### Flow Diagram

![Flow diagram](https://planttext.com/api/plantuml/png/BKzB2i8m4Dtd5BDi5qBTDWf2LN2ZHTe3X6IAmIHJabJnzawZkvdtuxr3oYhcnJjH3j6E2IDu6tA2wtcGVs2cn80cxp5aAUm4LVTxOBU7RTFKa1yOeFfWgWL0UmawOk4rM-KAZRDH6U6ERnKDz4Ikm9roUd4hOuEnBsiMvI0MaHJe4a8Lg6Hsj72UiqzCnNd4Z96h8WotViCbMCyHasXFmG1D7CW2fREb87aVpUB0WdNi5m00)

### Entity-Relationship Diagram
![Entity-Relationship Diagram:](https://planttext.com/api/plantuml/png/TP1B2i8m48RtESMiXLp0bIA8An7H0uHcgC4y93EbIEFTJTAM5iJb_yZ7FzaHgyYTim8z6tx3-NY3GG1im6ZO0d4qlirQIXXTfreyANgimoOubzzJzgmX5XynumvZyWTPpIOGPzjupjAQ9zAa5igTC4w8NbcBlDSw8j4FhSj5hnmkmGAvOg-YleHWAofMMH1ElKgjN9wIb6cOLujvVRLJdI5McAbTxHrwNRxn2m00)

### State Diagram for a Comment

![State Diagram for a Comment](https://planttext.com/api/plantuml/png/SoWkIImgAStDuOhMYbNGrRLJ2Cqho2ykIKtXWZ70eW4GffM2StvkRcfU2LI0Am2Xn2Sp6wmYA3KvDRCi5SpdWWY2f3tpGl8B30qCW2fSyqfIYu328Vu1ka0HBhWKI5rGQdbYKGhK912pMC4bixYaA3Ef56GXN1ga5kXcBeVKl1IG-m40)

### Class Diagram
![Class Diagram](https://planttext.com/api/plantuml/png/RP3B2i8m44Nt-OgXInyBjr944SI5YlZuWB4PD9Ya9HCf8lwxJTfg5cx2vCwTCpUPiqVd7qQBGYCpx5OdU0c0uT4xPQ-WP7enUAKryYre6yK-NvR6aFKpADg2nLjqfAxrXtPcSlq0kQ2enbUKxFjQgpibg3YGSchKcln2IaVCYVveZ1OD_KOFLAEJ-xBKBM2BLHvm8r0Xjeljk2gyF9jaC1X3Pj0-i-yBfaqswr5P5hqKZEDuncnJg9hq9E7o5Cd6pjNIEcE_SKvMXc__0000)

### Sequence Diagram
![Sequence Diagram](https://planttext.com/api/plantuml/png/LP3B2i8m44Nt-OgX-qBTYeXG4GGVePeFYEaiWarIagd-lfFwQbUJEVVEdIIRH3hIu3hHSxN6zjeJg8GHT08reyN5SGTry1IreI8xBlNSqk1JnnPa2DseDtAkdtRNaNCLGa6vvWHOmj6oc1btpFZ4i8we2KVyTygG24nm3Zrzt8rallScOeOi9XBClXEgRtFCv6QVEPLtwCuCtLz_RthlFzWxycj_grPbESuqID7Y0-5wbkMYghwUDCdTsiIcs_0BJcA3liqV_G80)
# Tokenomics and Gameplay Logic

## A) Tokenomics:

1. **Initial Cost**: Each comment on an NFT costs a certain amount of NEAR tokens to post, beginning with 1 NEAR for the first comment.
   
2. **Incremental Pricing**: The cost to comment increases linearly by 1 NEAR for each subsequent comment, e.g., the 2nd comment costs 2 NEAR, the 3rd costs 3 NEAR, and so on up to the 100th comment, which costs 100 NEAR.

3. **Reward Pool**: Each comment fee contributes to a reward pool. The first commenter’s reward is the sum of fees paid by commenters 2 to 100, the second commenter is rewarded by commenters 3 to 100, and so on. The reward for each comment is proportional to the amount they contribute relative to others.

4. **Reward Formula**:
   
   - For the `i-th` commenter to calculate rewards: 
   - Reward_i = (Σ_(j=i+1)^(100) (Cost_j)) / 99-i
   
   Where `Cost_j` is the cost paid by the `j-th` commenter and `i` is the position of the current commenter in the sequence.

#### B) Gameplay Logic:

1. **Comment Limit**: Each wallet can only leave one comment per NFT, ensuring a broad distribution of participation.

2. **Reward Eligibility**: Only the first 100 commenters are eligible for rewards from subsequent comment fees.

3. **Proportional Distribution**: Rewards are distributed proportionally among the first 100 commenters based on their comment's position.

4. **Likes Mechanism**: Comments can receive likes from users. If the number of comments exceeds 100, the top 100 comments eligible for rewards are determined not by the sequence of creation but by the number of likes they receive.

5. **Top Comment Determination**:

   - If there are more than 100 comments, then the TOP-100 reward-eligible comments are selected based on the highest number of likes.
   
   - This creates a dynamic leaderboard where commenters are incentivized to engage with the community to receive more likes and secure their position in the TOP-100.

# Components

### Frontend Marketplace

The frontend marketplace is the user interface where users can view, mint, and interact with NFTs. It's built using modern web technologies to provide a seamless and responsive experience.

**Features**:
- NFT Display
- Comment System
- Reward Distribution Viewer
- User Profile Management

### MinterBuilder

MinterBuilder is a tool within the platform allowing users to create and mint their NFTs. It connects with the smart contract to enable secure and verifiable transactions on the blockchain.

**Features**:
- Image Uploading
- NFT Minting Process
- Integration with Smart Contract

### SmartContract

The smart contract handles the logic for minting NFTs, posting comments, managing the increasing cost of comments, and distributing rewards. It is built on the NEAR protocol to ensure scalability and security.

**Features**:
- NEAR Protocol Integration
- Comment Fee Logic
- Reward Pool Management
- Top-100 Comment Selection Logic




# About

## Inspiration

The concept of OnlyArts is born from the fusion of social media engagement and blockchain's potential for value creation. It's a SocialFi platform that rewards community interactions with a unique tokenomic model. By intertwining social behavior with financial incentives, we aim to cultivate a self-sustaining ecosystem of content creators and commentators.

## What it does

OnlyArts allows users to mint NFTs from their photos, transforming their social content into assets. Other participants can comment on these NFTs, turning their social engagement into an investment. Commentators pay a progressively increasing fee, and the earlier they comment, the more they can earn from subsequent comments. This model encourages early participation and rewards engagement.

## How we built it

We integrated NEAR blockchain technology to manage the minting, commenting, and financial transactions on OnlyArts. The smart contract mechanism is designed to handle the complex reward system and ensure fair distribution of rewards among the participants. The platform's frontend provides a seamless social media experience, allowing users to easily interact with NFTs.

## Challenges we ran into

Balancing the simplicity of social media interactions with the complexity of blockchain-driven financial models was a significant challenge. We needed to create a system that was easy to understand yet robust enough to handle a scalable rewards system.

## Accomplishments that we're proud of

We have successfully created a platform where social interactions are not just for likes but also have real financial value. Our unique reward system that benefits early and engaging commentators is a first-of-its-kind in the NFT space.

## What we learned

We learned that integrating social behaviors with financial incentives can lead to a powerful platform that rewards users for their engagement. This experience has expanded our knowledge of smart contracts and the intricacies of user experience design in the context of SocialFi.

## What's next for OnlyArts

OnlyArts is set to introduce features that enhance user interaction, such as augmented reality showcases for NFTs, integration with other social platforms, and more advanced social engagement metrics that allow for deeper insights into the value of each NFT and comment.

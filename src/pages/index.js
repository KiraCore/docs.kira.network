// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
export default function Home() {
const HomeCard = (props) => {
const { title, children } = props;
return (
<div className={`p-px col-span-3 w-[350px]`}>
<div className={styles.card}>
   {title && 
   <h4 className={styles.h4}>{title}</h4>
   }
   <div className={styles.cardLinksContainer}>{children}</div>
</div>
</div>
);
};
const HomeCardCTA = (props) => {
const { children } = props;
return (
<div className={`p-px col-span-3 w-[350px]`}>
<div className={styles.cardCTA}>
   <div className={styles.cardLinksContainer}>{children}</div>
</div>
</div>
);
};
return (
<Layout>
   <div className="overflow-hidden">
      <div className="w-full mt-24 mb-12 mx-auto">
         <div className={styles.sectionHeader}>
            <h1 className={`${styles.h1} center-text`}>KIRA Documentation</h1>
            <h4 className={`${styles.h4} center-text`}>
               Discover the power of KIRA through examples, guides, and concepts
            </h4>
         </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-2 max-w-[1066px] mx-auto">
        <HomeCard title="Learn more">
            <Link className={styles.cardLink} to="./learn/">
            What is KIRA?
            </Link>
            <Link className={styles.cardLink} to="./learn/what-is-kira/layer-2/overview/">
            Layer 2
            </Link>
            <Link className={styles.cardLink} to="./learn/kira’s-economics/overview/">
            KIRA's economics
            </Link>
         </HomeCard>
         <HomeCard title="Developers">
         <span className={styles.cardLink}>Coming soon</span>
         </HomeCard>
         <HomeCard title="Node operators">
            <Link
               className={styles.cardLink}
               to="./node-operators/operators-community/"
               >
            Become a KIRA Evangelist
            </Link>
            <Link
               className={styles.cardLink}
               to="./node-operators/getting-started/installing-kensho/"
               >
            Run a KIRA node
            </Link>
         </HomeCard>
         <HomeCard title="Resources" aux>
            <Link
               className={styles.cardLink}
               to="./resources/ecosystem/"
               >
            KIRA's ecosystem
            </Link>
            <Link
               className={styles.cardLink}
               to="https://github.com/KiraCore/docs.kira.network/tree/ecosystem/"
               >
            Ecosystem repository
            </Link>
            <Link className={styles.cardLink} to="https://blog.kira.network/">
            KIRA blog
            </Link>
         </HomeCard>
         <HomeCardCTA>
            <Link
               className={styles.cardCTALink}
               to="http://discord.kira.network/"
               >
            <span>Build your RollApps</span>
            <svg
               width="11"
               height="11"
               viewBox="0 0 11 11"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               >
               <path
                  d="M6.01312 0.5L5.05102 1.45391L8.39164 4.80332L0 4.80332L0 6.19668L8.39164 6.19668L5.05102 9.54073L6.01312 10.5L11 5.5L6.01312 0.5Z"
                  fill="#9bd8a3"
                  />
            </svg>
            </Link>
         </HomeCardCTA>
      </div>
      <div className={styles.sectionHeader}>
         <h1 className={`${styles.h1} center-text`}>Why KIRA?</h1>
         <h4 className={`${styles.h4} center-text`}>
            KIRA is the next evolution of distributed, verifiable cloud computing 
            that powers trustless, blockchain-less applications
         </h4>
      </div>
      <div className={styles.TwoColParagraph}>
         <div className={styles.TwoColItem}>
            <span>For Developers</span>
            <p>
               KIRA offers the simplicity of Web2-style deployments in Docker containers, combined
               with the decentralized advantages of Web3. Its Virtual Finality Gadget (VFG) supports
               custom finality for both deterministic and non-deterministic verifiable applications,
               enabling advanced use cases like AI, streaming, and gaming. Developers can rely on
               flexible resource allocations (CPU, GPU, etc.) managed by Consensus nodes while
               choosing any programming language they prefer. The decentralized API (INTERX) removes
               dependence on external providers for RPC, execution, or data availability. KIRA’s
               hypermodular design includes out-of-the-box support for sequencing, data availability,
               hosting, proxy, load balancing, and more, allowing developers to focus solely on
               application logic.
            </p>
         </div>
         <div className={styles.TwoColItem}>
            <span>For Users</span>
            <p>
               KIRA puts accessibility and security first, letting users become Fishermen (Verifiers)
               for their chosen RollApps with minimal hardware cost. They can set custom auditing
               rules or adopt developer defaults, ensuring robust protection against exploits. All
               RollApps benefit from base-layer security, and the Initial Liquidity Offering model
               guarantees sufficient token liquidity to meet user demand. KIRA’s native Liquid Staking
               Derivatives keep tokens fluid while participating in restaking, matching external
               network security levels. This design aligns incentives among all stakeholders,
               fostering high-quality RollApps and a thriving ecosystem geared toward long-term growth.
            </p>
         </div>
         <div className={styles.TwoColItem}>
            <span>For Node Operators</span>
            <p>
               KIRA gives node operators a flexible, accessible system, letting them select which
               RollApps to support and scale resources to meet specific needs. They can participate
               from minimal home setups to more resource-intensive, high-yield operations. The RYOKAI
               DevOps solution simplifies operations by automating many tasks, lowering the technical
               barrier of entry. The hypermodular design includes out-of-the-box support for
               middleware (INTERX), proxying, caching, autoscaling, and infrastructure management.
               With modest hardware requirements, operators can bolster KIRA’s security and growth
               while maximizing network decentralization.
            </p>
         </div>
      </div>
   </div>
</Layout>
);
}
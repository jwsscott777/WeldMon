import { Download, Features, SectionWrapper } from "./components";
import assets from './assets';
import styles from "./styles/Global";
const App = () => {
  return (
  <>
    <SectionWrapper 
    title="Your store of NFTs can grow to your desire"
    description="Buy, store, collect NFTs, exchange & earn Crypto while using WeldMon"
    showBtn
    mockupImg={assets.homeHero}
    banner="banner"
    />
    <SectionWrapper 
    title="Smart User Interface Marketplace"
    description="Experience a smooth UI"
    mockupImg={assets.homeCards}
    reverse
    />
    <Features />
    <SectionWrapper 
    title="Deployment"
    description="WeldMon is built using Expo which will run natively on your device."
    mockupImg={assets.feature}
    reverse
    />
    <SectionWrapper 
    title="Showcase your store"
    description="The app has two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT"
    mockupImg={assets.mockup}
    banner="banner02"
    />
    <Download />
    <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
      <p className={`${styles.pText} ${styles.whiteText}`}>
        Made by Semajttocs {" "}
      <span className="bold">WeldMon</span>
      </p>
    </div>
  </>
     
   
   
  );
}

export default App;

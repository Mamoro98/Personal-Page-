import AppBar from "./component/appBar"
import Card from "./component/Card"
import Cardtwo from "./component/Cardtwo"
import Cardthree from "./component/Cardthree"
import Skills from "./component/Skills"
import Socialfollow from "./component/Socialfollow"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function App() {

  return (
        <>
      <AppBar></AppBar>
      <Card></Card>
      <AnimationOnScroll animateIn="animate__fadeInDown" offset="1">

      <Cardtwo  ></Cardtwo>
      </AnimationOnScroll>
      <AnimationOnScroll  animateIn="animate__fadeInDown" offset="1">
      <Cardthree></Cardthree>
      </AnimationOnScroll>
      <h1 style={{ textAlign: "center" }}>Skills</h1>
      <AnimationOnScroll animateIn="animate__fadeInDown"
      animateOut=""
      >
      <Skills></Skills>
      </AnimationOnScroll>
      <h1 style={{ textAlign: "center" }}>Contact Me</h1>
      
      
      <Socialfollow></Socialfollow>
      {/* const pages = ['Home', 'About', 'Projects','Skills','Contact Me']; */}

    </>
  );
}

export default App;

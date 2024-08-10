

import { Navbar, Header, Abouteme, Educations, Skills, Contactme, Recomms, Publish } from './components/index';

function App() {


  return (
    <div className="App" >
      <Navbar />
      <Header />
      <Abouteme />
      <Recomms/>
      <Educations />
      <Publish/>
      <Skills />
      <Contactme />
    </div>
  );
}

export default App;

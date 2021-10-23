import './App.css';
import {Header} from "../components/header/header";
import {SideBar} from "../components/sidebar/sideBar";
import {Realtors} from "../components/realtors/realtors";
import {Homes} from "../components/homes/homes";
import {Gallery} from "../components/gallery/gallery";
import {Features} from "../components/features/features";
import Footer from "../components/footer/footer";
import Stories from "../components/stories/stories";

function App() {
    return (
        <div className="container">
            <SideBar/>
            <Header/>
            <Realtors/>
            <Features/>
            <Stories/>
            <Homes/>
            <Gallery/>
            <Footer/>
        </div>
    )
}

export default App;

import Index from "./pages/Index/Index"
import OurExpertises from "./pages/OurExpertises/OurExpertises"
import OurProfession from "./pages/OurProfession/OurProfession"
import Candidates from "./pages/Candidates/Candidates"
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre"
import Contact from "./pages/Contact/Contact"
import OurOffers from "./pages/OurOffers/OurOffers"
let routes = [
    {path:'/' , element:<Index></Index>},
    {path:'OurExpertises' , element:<OurExpertises></OurExpertises>},
    {path:'OurProfession' , element:<OurProfession></OurProfession>},
    {path:'Candidates' , element:<Candidates></Candidates>},
    {path:'WhoWeAre' , element:<WhoWeAre></WhoWeAre>},
    {path:'Contact' , element:<Contact></Contact>},
    {path:'OurOffers' , element:<OurOffers></OurOffers>},


]



export default routes
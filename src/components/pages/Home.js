import NavFoodWays from "../NavFoodWays";
import Header from '../Header';
import PopularRestaurant from "../PopularRestaurant";

function Home (){
    return (
        <div>
            <NavFoodWays/>
            <Header/>
            <PopularRestaurant/>
        </div>
    );
}

export default Home
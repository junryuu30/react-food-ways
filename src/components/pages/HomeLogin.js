import NavUser from "../NavUser";
import Header from '../Header';
import PopularRestaurant from "../PopularRestaurant";

function HomeLogin (){
    return (
        <div>
            <NavUser/>
            <Header/>
            <PopularRestaurant/>
        </div>
    );
}

export default HomeLogin
import Toolbar from './toolbar';

const Main = () => {
    return (
        <div>
            <Toolbar/>
            <header className="container center whiteNavy" id="home">
                <h1 className="largeText">Wright Family Recipes</h1>
                <img src="recipe_cover.png" alt="Recipe Cover" className="mainImage" width="992" height="1108"/>
            </header>
        </div>
    );
};

export default Main;
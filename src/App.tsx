import "@fortawesome/fontawesome-free/css/all.css";

import { Route, Routes } from 'react-router-dom';
import TwitterButton from './components/buttons/TwitterButton';
import Sidebar from './components/sidebar/Sidebar';
import AnimalDelete from "./pages/animals/AnimalDelete";
import AnimalDetail from './pages/animals/AnimalDetail';
import AnimalEdit from "./pages/animals/AnimalEdit";
import AnimalList from './pages/animals/AnimalList';
import AnimalNew from "./pages/animals/AnimalNew";
import FeedDelete from './pages/feeds/FeedDelete';
import FeedDetail from './pages/feeds/FeedDetail';
import FeedEdit from './pages/feeds/FeedEdit';
import FeedList from './pages/feeds/FeedList';
import FeedNew from './pages/feeds/FeedNew';
import IngredientDelete from "./pages/ingredients/IngredientDelete";
import IngredientDetail from './pages/ingredients/IngredientDetail';
import IngredientEdit from "./pages/ingredients/IngredientEdit";
import IngredientList from './pages/ingredients/IngredientList';
import IngredientNew from './pages/ingredients/IngredientNew';
import NotFound from './pages/NotFound';
import NutrientDetail from './pages/nutrients/NutrientDetail';
import NutrientList from './pages/nutrients/NutrientList';

function App() {

    const navItems = [
        {
            name: 'Dashboard',
            icon: 'fa-solid fa-desktop',
            to: '/dashboard',
        },
        {
            name: 'Animals',
            icon: 'fa fa-hippo',
            to: '/animals',
        },
        {
            name: 'Feeds',
            icon: 'fa fa-sack-xmark',
            to: '/feeds',
        },
        {
            name: 'Nutrients',
            icon: 'fa-solid fa-bolt',
            to: '/nutrients',
        },
        {
            name: 'Ingredients',
            icon: 'fa-solid fa-wheat-awn',
            to: '/ingredients',
        },
        {
            name: 'Settings',
            icon: 'fa-solid fa-sliders',
            to: '/settings',
        },
    ]

    return (
        <div>
            <div className="flex w-screen h-screen text-gray-700">
                <Sidebar navItems={navItems} />
                <Routes>
                    <Route path="/feeds" element={<FeedList />} >
                        <Route index element={<FeedDetail />} />
                        <Route path=":id" element={<FeedDetail />} />
                        <Route path=":id/edit" element={<FeedEdit />} />
                        <Route path=":id/delete" element={<FeedDelete />} />
                        <Route path="new" element={<FeedNew />} />
                    </Route>
                    <Route path="/nutrients" element={<NutrientList />}>
                        <Route index element={<NutrientDetail />} />
                        <Route path=":id" element={<NutrientDetail />} />
                    </Route>
                    <Route path="/ingredients" element={<IngredientList />}>
                        <Route index element={<IngredientDetail />} />
                        <Route path=":id" element={<IngredientDetail />} />
                        <Route path=":id/edit" element={<IngredientEdit />} />
                        <Route path=":id/delete" element={<IngredientDelete />} />
                        <Route path="new" element={<IngredientNew />} />
                    </Route>
                    <Route path="/animals" element={<AnimalList />}>
                        <Route index element={<AnimalDetail />} />
                        <Route path=":id" element={<AnimalDetail />} />
                        <Route path=":id/edit" element={<AnimalEdit />} />
                        <Route path=":id/delete" element={<AnimalDelete />} />
                        <Route path="new" element={<AnimalNew />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <TwitterButton />
        </div>
    );
}

export default App;

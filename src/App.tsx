import React from 'react';
import "@fortawesome/fontawesome-free/css/all.css";

import TwitterButton from './components/buttons/TwitterButton';
import FeedDetail from './pages/FeedDetail';
import Sidebar from './components/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import NutrientList from './pages/NutrientList';
import IngredientList from './pages/IngredientList';
import AnimalList from './pages/AnimalList';
import FeedList from './pages/FeedList';
import IngredientDetail from './pages/IngredientDetail';
import IngredientNew from './pages/IngredientNew';
import NutrientDetail from './pages/NutrientDetail';
import FeedNew from './pages/FeedNew';
import AnimalDetail from './pages/AnimalDetail';

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
                        <Route path=":id" element={<FeedDetail />} />
                        <Route path="new" element={<FeedNew />} />
                    </Route>
                    <Route path="/nutrients" element={<NutrientList />}>
                        <Route path=":id" element={<NutrientDetail />} />
                    </Route>
                    <Route path="/ingredients" element={<IngredientList />}>
                        <Route index element={<IngredientDetail />} />
                        <Route index path=":id" element={<IngredientDetail />} />
                        <Route path="new" element={<IngredientNew />} />
                    </Route>
                    <Route path="/animals" element={<AnimalList />}>
                        <Route path=":id" element={<AnimalDetail />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <TwitterButton />
        </div>
    );
}

export default App;

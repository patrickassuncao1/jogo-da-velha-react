import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from '../pages/Game';
import MultiplayerGame from '../pages/MultiplayerGame';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MultiplayerGame />} />
                <Route path='/game' element={<Game />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
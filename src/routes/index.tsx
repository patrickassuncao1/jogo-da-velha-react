import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from '../pages/Game';
import MultiplayerGame from '../pages/MultiplayerGame';
import Start from '../pages/Start';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path='/game' element={<Game />} />
                <Route path='/multiplayer' element={<MultiplayerGame />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
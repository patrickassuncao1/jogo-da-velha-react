import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayerProvider from '../context/Player';
import Game from '../pages/Game';
import MultiplayerGame from '../pages/MultiplayerGame';
import Start from '../pages/Start';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path='/game' element={
                    <PlayerProvider>
                        <Game />
                    </PlayerProvider>}
                />
                <Route path='/multiplayer' element={
                    <PlayerProvider>
                        <MultiplayerGame />
                    </PlayerProvider>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
import WindowResizer from './WindowResizer'
import AlohaDashboard from './AlohaDashboard/AlohaDashboard';
import UserLoader from './UserList/UserLoader';
import ModalWindowParent from './ModalWindow/ModalWindowParent';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>

        <nav>
            <ul>
                <li><Link to='users'>Go to UsersLoader</Link></li>
                <li><Link to='resizer'>Go to WindowResizer</Link></li>
                <li><Link to='aloha'>Go to AlohaDashboard</Link></li>
                <li><Link to='modal'>Go to ModalWindow</Link></li>
            </ul>
        </nav>

            <Routes>
            <Route index element={<Home />} />
                <Route path='/resizer' element={<WindowResizer />} />
                <Route path='/aloha' element={<AlohaDashboard />} />
                <Route path='/users' element={<UserLoader />} />
                <Route path='/modal' element={<ModalWindowParent />} />
                <Route path='/*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;





const Home = () => {
    return <h1>Home page</h1>
}


const NotFound = () => {

    return (
        <>
        <h1>404</h1>
        <p>Page not found</p>
        </>
    )
}
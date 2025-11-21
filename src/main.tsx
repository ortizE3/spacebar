import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './index.scss';
import './classes/text.scss';
import './classes/space.scss';
import './classes/list.scss';
import './classes/border.scss';
import './classes/flex.scss';
import './classes/size.scss';
import './classes/link.scss';
import './classes/select.scss';
import { BrowserRouter } from 'react-router-dom';
import { LoadingPageProvider } from './providers/LoadingPageProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingPageProvider>
        <App />
      </LoadingPageProvider>
    </BrowserRouter>
  </StrictMode>,
)

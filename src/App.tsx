import './App.css';
import { AppRoutes } from './components/routes/AppRoutes';
import { getArticleByTag, getFeaturedArticles } from './utils/mock/article';
import { login } from './utils/mock/user';

function App() {
 
  const featuredArticles = getFeaturedArticles();
  const articlesByTag = getArticleByTag('comedy');
  const userLogin = login('johndoe', 'aspassword');
  console.log(userLogin);
  console.log(featuredArticles);
  console.log(articlesByTag);
  return (
    <div className="App">

    
    
<AppRoutes/>
      
   
   
    </div>
  );
}

export default App;

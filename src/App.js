
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function App() {
  let [articles,setArticles] = useState([])
  let [category,setCategory] =useState("india")
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const [selectedDate, setSelectedDate] = useState(yesterday);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedDate = selectedDate.toISOString().split('T')[0];
        const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&from=${formattedDate}&apiKey=7731360799d545beb177725f490dcbd3`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
  
    fetchData();
  }, [category,selectedDate]);
  
  
  return (
    <div className="App">
     <header className='header'>
     <h1>Express</h1>
     <div className="rear-head">
     <input type="text" onChange={(event)=>{
      if(event.target.value!==""){
        setCategory(event.target.value)
      }
      else{
        setCategory("india")
      }
     }} placeholder='Search News' />

     </div>
     <div>
     <DatePicker
       selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
      />
     </div>
     </header>
     <section className='news-article'>
         {
          articles.length!==0?
          articles.map((article)=>{
             return(
              <News article={article} key={article.id}/>
             )
          }) :
          <h3>No News Found For The Searched Text</h3>
         }
     </section>
    </div>

  );
}

export default App;
    

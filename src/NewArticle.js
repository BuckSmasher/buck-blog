import { useState } from 'react';

const NewArticle = () => {

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        const article = { title, body, author };
    
        fetch('http://localhost:8000/articles', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(article)
        }).then(() => {
          console.log('new blog added');
        })

    }

    return ( 
        <div className="form">
            <h1>CREATE NEW ARTICLE</h1>

            <form onSubmit={handleSubmit}>

                <label>Title</label>
                <input type="text" value={ title } onChange={(e) => setTitle(e.target.value)}></input>
                <label>Body</label>
                <textarea value={ body } onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Author</label>
                <input type="text" value={ author } onChange={(e) => setAuthor(e.target.value)}></input>
                <button>Submit</button>

            </form>
        </div>
     );
}
 
export default NewArticle;
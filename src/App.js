import logo from './logo.svg';
import './App.css';
import WriterList from './WriterList';
import UserFormValidation from './UserFormWalidation';
import UserForm from './UserForm';
import UserFormWithRefs from './UserFormWithRefs';
import FeedbackForm from './FeedbackForm';

function App() {
  let writers = [{ name: "Клиффорд", surname: "Саймак" }, { name: "Джордж", surname: "Оруэл" }, { name: "Джозеф", surname: "Хеллер" }];
  return (
    <div className="App">
      <WriterList data={writers}></WriterList>
      <hr />
      <UserForm></UserForm>
      <hr />
      <UserFormWithRefs></UserFormWithRefs>
      <hr />
      <UserFormValidation></UserFormValidation>
      <hr />
      <FeedbackForm></FeedbackForm>
    </div>
  );
}

export default App;

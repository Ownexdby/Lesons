import React, { Component } from "react";

import MainSectionList from "./components/MainSectionList/MainSectionList";
import Header from "./components/Header/Header";
import SectionPlantsList from "./components/SectionPlantsList/SectionPlantsList";

class App extends Component {
  // App компонент
  constructor(props) {
    super(props);
    this.state = {
      mainSectionList: [],
      islogdIn: false,
      // sectionPlantsList: [],
      isDelet: false,
      pageNumbr: 1,
    };
  }
  handelClick = () => {
    if (this.state.islogdIn) {
      this.setState({
        islogdIn: false,
      });
      // console.log('ok');
    } else {
      this.setState({
        islogdIn: true,
      });
      // console.log('ok1');
    }
  };

  deletClick = () => {
    if (this.state.isDelet) {
      this.setState({
        isDelet: false,
      });
    } else {
      this.setState({
        isDelet: true,
      });
    }
  };

  componentDidMount() {
    fetch("./data.json")
      .then(function (data) {
        return data.json();
      })
      .then((list) => {
        this.setState({
          mainSectionList: list,
        });
        // console.log(list);
      });
    // console.log('component did mount');

    fetch("./dataPlants.json")
      .then(function (dataPlants) {
        return dataPlants.json();
      })
      .then((listplats) => {
        this.setState({
          sectionPlantsList: listplats,
        });
        console.log(listplats);
      });
  }

  componentDidUpdate(prevProps, prevState) {
   
    if (prevState.pageNumbr !== this.state.pageNumbr && this.state.pageNumbr === 1) {
      console.log('page chang');
      fetch("./data.json")
        .then(function (data) {
          return data.json();
        })
        .then((list) => {
          this.setState({
            mainSectionList: list,
          });
          // console.log(list);
        });
    } else if (
      prevState.pageNumbr !== this.state.pageNumbr &&
      this.state.pageNumbr === 2
    ) {
      console.log("page chang 2");
      fetch("./dataPlants.json")
        .then(function (dataPlants) {
          return dataPlants.json();
        })
        .then((listplats) => {
          this.setState({
            mainSectionList: listplats,
          });
          // console.log(list);
        });
    }
  }

  render() {
    // console.log('first mounting');
    return (
      <>
        <Header clickLogin={this.handelClick} islogdIn={this.state.islogdIn} />{" "}
        <MainSectionList
          list={this.state.mainSectionList}
          islogdIn={this.state.islogdIn}
        />
        {/* {this.state.islogdIn ? (
          <SectionPlantsList
            listplats={this.state.sectionPlantsList}
            isDelet={this.state.isDelet}
            deletClick={this.deletClick}
          />
        ) : (
          ""
        )} */}
        {this.state.islogdIn ? (
          <div>
            <button
              className='first_page'
              onClick={() => {
                this.setState({
                  pageNumbr: 1,
                });
              }}
            >
              first page
            </button>
            <button
              className='second_page'
              onClick={() => {
                this.setState({
                  pageNumbr: 2,
                });
              }}
            >
              second page
            </button>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
export default App;
// зробити так щоб кнопка була в хедері
// імя користувача        пошта         кнопка

//       якщо this.state.islogIn === false,
//гість     пусто      кнопка

// Зробити компонент якй буде малювати лист зробити на подобі цього всього,
// має містити джейсон файл записати в стейт передати пропсами і відмалювати на сторінці коли ми на нього натиснемо </>
// Потрібно буде додати до листа добавити кожному листу кнопку для видаленя! І спробувати зробити так щоб цей елемент видалявся! не скривався . Має змінитися стейт.


// Передивитися код що написано зверху
// Створити пустий проек АПП
// створюватиму новий проект
//  компонент дід маун, компонент дід абдейт, списки і ключі, списка зіс стейт, зіс сетСтейт
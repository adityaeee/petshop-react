import React from "react";
import Sidebar from "./pages/shared/components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./pages/shared/components/Header/Header";
import Pets from "./pages/Pets/Pets";
import Footer from "./pages/shared/components/Footer/Footer";
// import './App.css'

class App extends React.Component {
    state = {
        page: <Dashboard navigateTo={this.navigateTo} />,
    };

    // handlePages = (page) => {
    //     this.setState({
    //         page,
    //     });
    // };

    navigateTo = (page) => {
        this.setState({
            page,
        });
    };

    render() {
        return (
            <div className="d-flex">
                <Sidebar navigateTo={this.navigateTo} />
                <main className="w-100 flex-grow-1">
                    <Header />
                    {this.state.page}
                    <Footer />
                </main>
            </div>
        );
    }
}

export default App;

import React from 'react';
import './App.scss';

import TopIntro from './components/TopIntro/TopIntro.jsx';
import Projects from './components/Projects/Projects.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="App" id="home">
			<TopIntro />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;

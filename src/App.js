import './App.css';
import AppHeader from './components/Common/header';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import AppFooter from '../src/components/home/footer';
import Home from './view/home';
import CHA from './components/cha';
import Table from './components/table';
const { Header } = Layout;

function App() {
	return (
		<>
			<Layout className="mainLayout">
				<Header>
					<AppHeader />
				</Header>
				<Content>
					<Home />
				</Content>
				<Footer>
					<AppFooter />
				</Footer>
			</Layout>
		</>
	);
}

export default App;

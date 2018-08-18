import React from 'react';
import ReactDOM from 'react-dom';
import  Loadable  from 'react-loadable';
import PropTypes from 'prop-types';
import bc from './bc.json';
import Readme from './README.md';
import 'highlight.js/styles/monokai-sublime.css';
import Typography from 'typography'
import altonTheme from 'typography-theme-alton';
const typography = new Typography(altonTheme);
typography.injectStyles();

const Link = ({onClick, slug, children}) => (<a href={"#"+slug}>{children}</a>);
const Loading = () => (<div>Loading</div>);
class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
            current: null
        }
    }
    componentDidMount(){
        window.addEventListener("hashchange", () => this.loadInstructions());
        if(window.location.hash && window.location.hash!='#') this.loadInstructions();
    }
    loadInstructions(slug=null){
        if(!slug) slug = window.location.hash.slice(1,window.location.hash.length);
        if(slug=='' || slug=='/') this.setState({ current: null });
        else{
            this.setState({
                current: Loadable({
                  loader: () => import('./exercises/'+slug+'/README.md'),
                  loading: Loading
                })
            });
        }
    }
    render(){
        const styles = {
            padding: "10px"
        }
        const Current = this.state.current;
        const exercisesHTML = bc.exercises.map(ex => (
            <li key={ex.slug}>
                <Link slug={ex.slug}>
                    {ex.title}
                </Link>
            </li>
        ));
        if(Current) return <div style={styles}><Current /></div>;
        else return (<Instructions title={bc.title}>{exercisesHTML}</Instructions>);
    }
};
const Instructions = ({title, children}) => {
    return (<div>
        <Readme />
        <h2>Ok, enough with the reading! :)</h2>
        <p>Click on any of the following exercises to read its instructions:</p>
        <ol>{children}</ol>
    </div>);
}
ReactDOM.render(<Layout />,document.querySelector('#myDiv'));